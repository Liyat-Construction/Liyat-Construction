#!/usr/bin/env node
/**
 * Builds the web images from the sources in assets/images/ (Engineering §5, D-35).
 *
 *   npm run images
 *
 * For every source it writes `public/images/<path>/<name>-<width>.webp` at the
 * widths of its folder (never upscaled), with EXIF orientation applied and
 * metadata stripped, and records the widths in src/lib/image-widths.json. The
 * image loader (src/lib/image-loader.ts) reads that file to pick a width.
 * public/images/ is generated: never edit it by hand.
 */
import { mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, extname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = join(ROOT, 'assets', 'images');
const OUTPUT = join(ROOT, 'public', 'images');
const MANIFEST = join(ROOT, 'src', 'lib', 'image-widths.json');

// Widths and quality per top-level folder. `null` widths = keep the original width only.
const PROFILES = {
  hero: { widths: [640, 1024, 1600, 1920], quality: 72 },
  projects: { widths: [400, 800, 1600], quality: 72 },
  equipment: { widths: [400, 800, 1600], quality: 72 },
  site: { widths: [400, 800, 1600], quality: 72 },
  team: { widths: [400, 800], quality: 75 },
  references: { widths: [400, 800], quality: 75 },
  clients: { widths: null, quality: 85 },
};

const SOURCE_EXTS = new Set(['.webp', '.jpg', '.jpeg', '.png']);

function listSources(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return listSources(full);
    return SOURCE_EXTS.has(extname(entry).toLowerCase()) ? [full] : [];
  });
}

function widthsFor(ladder, original) {
  if (!ladder) return [original];
  const largest = Math.min(original, ladder.at(-1));
  return [...ladder.filter((width) => width < largest), largest];
}

rmSync(OUTPUT, { recursive: true, force: true });

const manifest = {};
let totalBytes = 0;

for (const source of listSources(SOURCE).sort()) {
  const rel = relative(SOURCE, source).split(sep).join('/');
  const folder = rel.split('/')[0];
  const profile = PROFILES[folder];
  if (!profile) throw new Error(`No image profile for folder "${folder}" (${rel})`);

  // Orientation first, so the width is the displayed width.
  const { width: original } = await sharp(source)
    .rotate()
    .toBuffer({ resolveWithObject: true })
    .then((r) => r.info);
  const widths = widthsFor(profile.widths, original);
  const base = rel.slice(0, -extname(rel).length);
  mkdirSync(join(OUTPUT, dirname(rel)), { recursive: true });

  const sizes = [];
  for (const width of widths) {
    const out = join(OUTPUT, `${base}-${width}.webp`);
    const { size } = await sharp(source)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: profile.quality, effort: 6 })
      .toFile(out);
    totalBytes += size;
    sizes.push(`${width}:${Math.round(size / 1024)}KB`);
  }
  manifest[`/images/${base}.webp`] = widths;
  console.log(`${rel.padEnd(62)} ${sizes.join('  ')}`);
}

writeFileSync(MANIFEST, `${JSON.stringify(manifest, undefined, 2)}\n`);
console.log(
  `\n${Object.keys(manifest).length} images, ${Math.round(totalBytes / 1024)} KB in public/images/. Widths → src/lib/image-widths.json`
);
