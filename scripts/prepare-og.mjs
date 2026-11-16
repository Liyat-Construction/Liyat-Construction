/**
 * Makes the pictures shown when a link is shared (WhatsApp, Telegram, Facebook, LinkedIn):
 * 1200 × 630 JPEG files, each well under 300 KB (WhatsApp drops larger ones).
 *
 *   public/og-image.jpg                        Home and every page without its own picture
 *   public/images/projects/<slug>/og.jpg       the three project pages
 *   public/images/services/<slug>/og.jpg       the six service pages
 *
 * Landscape photos fill the picture with a green brand strip along the bottom; portrait photos
 * stay whole on the left with the name on a green panel. Colours come from
 * src/styles/tokens.css. The words repeat facts from src/data (depths, client and service
 * names): change both together. Text is drawn with Segoe UI (Windows); run this where that font
 * exists and commit the output.
 *
 * Run: npm run images:og
 */
import { mkdirSync, readFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = (path) => fileURLToPath(new URL(`../${path}`, import.meta.url));
const tokens = readFileSync(root('src/styles/tokens.css'), 'utf8');
const brand = tokens.match(/--color-brand:\s*(#[0-9a-fA-F]{6})/)?.[1];
const dark = tokens.match(/--color-brand-dark:\s*(#[0-9a-fA-F]{6})/)?.[1];
if (!brand || !dark) throw new Error('Brand colours not found in tokens.css');

const W = 1200;
const H = 630;
const font = 'font-family="Segoe UI, Arial, Helvetica, sans-serif"';
const jpeg = { quality: 82, mozjpeg: true };
const escape = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;');
/** One line of text that shrinks to fit: about 0.54 of the font size per character */
const fit = (text, max, width) => Math.min(max, Math.floor(width / (text.length * 0.54)));

async function save(image, output) {
  mkdirSync(dirname(root(output)), { recursive: true });
  await image.jpeg(jpeg).toFile(root(output));
}

/** The logo on a white rounded plate, so it reads on any photo or colour */
async function logoPlate(height) {
  const pad = Math.round(height * 0.16);
  const logo = await sharp(root('assets/images/brand/logo.png'))
    .resize({ height: height - pad * 2 })
    .toBuffer();
  const width = (await sharp(logo).metadata()).width + pad * 2;
  const plate = await sharp({ create: { width, height, channels: 4, background: '#ffffff' } })
    .composite([{ input: logo, left: pad, top: pad }])
    .png()
    .toBuffer();
  const mask = Buffer.from(
    `<svg width="${width}" height="${height}"><rect width="${width}" height="${height}" rx="14" fill="#fff"/></svg>`
  );
  const input = await sharp(plate)
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer();
  return { input, width };
}

/** Landscape photo, full picture, brand strip along the bottom */
async function wide({ source, position = sharp.gravity.north, title, subtitle, output }) {
  const photo = await sharp(root(source))
    .rotate()
    .resize(W, H, { fit: 'cover', position })
    .toBuffer();
  const stripHeight = 150;
  const strip = Buffer.from(`<svg width="${W}" height="${stripHeight}">
    <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${dark}" stop-opacity="0"/>
      <stop offset="0.35" stop-color="${dark}" stop-opacity="0.88"/>
      <stop offset="1" stop-color="${dark}" stop-opacity="0.96"/>
    </linearGradient></defs>
    <rect width="${W}" height="${stripHeight}" fill="url(#g)"/></svg>`);
  const plate = await logoPlate(92);
  const textLeft = 48 + plate.width + 26;
  const textWidth = W - textLeft - 40;
  const text = Buffer.from(`<svg width="${W - textLeft}" height="${stripHeight}">
    <text x="0" y="82" ${font} font-size="${fit(title, 46, textWidth)}" font-weight="700" fill="#ffffff">${escape(title)}</text>
    <text x="0" y="118" ${font} font-size="${fit(subtitle, 25, textWidth)}" fill="#ffffff">${escape(subtitle)}</text></svg>`);
  await save(
    sharp(photo).composite([
      { input: strip, left: 0, top: H - stripHeight },
      { input: plate.input, left: 48, top: H - 92 - 28 },
      { input: text, left: textLeft, top: H - stripHeight + 6 },
    ]),
    output
  );
}

/** Portrait photo whole on the left; the name and the brand on a green panel */
async function split({ source, title, detail, output }) {
  const photoWidth = 473;
  const panelWidth = W - photoWidth;
  const textWidth = panelWidth - 56 - 40;
  const photo = await sharp(root(source))
    .rotate()
    .resize(photoWidth, H, { fit: 'cover', position: 'centre' })
    .toBuffer();
  const plate = await logoPlate(84);
  const panel = Buffer.from(`<svg width="${panelWidth}" height="${H}">
    <rect width="${panelWidth}" height="${H}" fill="${dark}"/>
    <rect width="10" height="${H}" fill="${brand}"/>
    <text x="56" y="300" ${font} font-size="${fit(title, 62, textWidth)}" font-weight="700" fill="#ffffff">${escape(title)}</text>
    <text x="56" y="352" ${font} font-size="${fit(detail, 32, textWidth)}" fill="#ffffff">${escape(detail)}</text>
    <text x="56" y="538" ${font} font-size="34" font-weight="700" fill="#ffffff">Liyat Construction</text>
    <text x="56" y="574" ${font} font-size="22" fill="#ffffff">Water-well drilling · Addis Ababa, Ethiopia</text></svg>`);
  await save(
    sharp({ create: { width: W, height: H, channels: 3, background: dark } }).composite([
      { input: photo, left: 0, top: 0 },
      { input: panel, left: photoWidth, top: 0 },
      { input: plate.input, left: photoWidth + 56, top: 70 },
    ]),
    output
  );
}

await wide({
  source: 'assets/images/hero/yekatit-12.webp',
  title: 'Liyat Construction',
  subtitle: 'Water-well drilling and groundwater engineering in Ethiopia',
  output: 'public/og-image.jpg',
});

for (const item of [
  {
    slug: 'ethiopian-airlines-pumping-test',
    file: 'cover.jpg',
    title: 'Ethiopian Airlines',
    detail: 'Two 500 m wells, Addis Ababa',
  },
]) {
  await split({
    source: `assets/images/projects/${item.slug}/${item.file}`,
    title: item.title,
    detail: item.detail,
    output: `public/images/projects/${item.slug}/og.jpg`,
  });
}

// The Chaka House cover is landscape since 2026-11-16 (the rig and casings): full picture
await wide({
  source: 'assets/images/projects/chaka-house-project/rig-and-casings.jpg',
  position: sharp.gravity.center,
  title: 'Chaka House',
  subtitle: '600 m water well, Addis Ababa',
  output: 'public/images/projects/chaka-house-project/og.jpg',
});

// The British Embassy cover is landscape since D-199 (water from the pump outlet): full picture
await wide({
  source: 'assets/images/projects/british-embassy-pump-installation/water-from-pump.png',
  position: sharp.gravity.center,
  title: 'British Embassy',
  subtitle: '250 m well and pump, Addis Ababa',
  output: 'public/images/projects/british-embassy-pump-installation/og.jpg',
});

// The photo each service page already uses (src/data/services.ts); "wide" for landscape,
// "split" for the two portrait covers
const services = [
  [
    'hydrogeological-geophysical-survey',
    'Hydrogeological & Geophysical Survey',
    'hero/afar-rig-fleet.webp',
    'wide',
  ],
  [
    'deep-shallow-water-well-drilling',
    'Deep & Shallow Water-Well Drilling',
    'hero/belayneh-kinde-rig.jpg',
    'wide',
  ],
  ['pumping-tests', 'Pumping Tests', 'hero/ea-v-notch.jpg', 'wide', sharp.gravity.south],
  ['borehole-rehabilitation', 'Borehole Rehabilitation', 'hero/yekatit-12.webp', 'wide'],
  [
    'pump-supply-installation',
    'Pump Supply & Installation',
    'projects/ovid-real-estate-turnkey-wells/cover.jpg',
    'split',
  ],
  [
    'turnkey-water-projects',
    'Turnkey Water Projects',
    'projects/sd-salt-manufacturing-afdera/cover.webp',
    'split',
  ],
];
for (const [slug, title, photo, layout, position] of services) {
  const common = {
    source: `assets/images/${photo}`,
    title,
    output: `public/images/services/${slug}/og.jpg`,
  };
  if (layout === 'wide')
    await wide({ ...common, position, subtitle: 'Liyat Construction · Ethiopia' });
  else await split({ ...common, detail: 'One of our six services' });
}

console.log('Prepared the Home, three project and six service share pictures (1200 × 630).');
