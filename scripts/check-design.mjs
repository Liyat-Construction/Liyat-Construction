#!/usr/bin/env node
/**
 * Enforces the one-source design rule (Design System §1):
 * raw design values live only in src/styles/tokens.css.
 *   npm run check:design
 * Flags hex colors, rgb()/hsl(), arbitrary Tailwind values (text-[17px]) and
 * Tailwind's default palette (bg-gray-500) anywhere else in src/.
 * A genuine exception carries `design-exception: <reason>` on the same line.
 * Exits 0 when clean, 1 when violations are found.
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const PALETTE =
  'slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose';

const RULES = [
  { name: 'hex color', pattern: /#[0-9a-f]{3,8}\b(?![\w-])/i },
  { name: 'rgb()/hsl()', pattern: /\b(rgba?|hsla?)\(/i },
  { name: 'arbitrary value', pattern: /\b[a-z][\w:/-]*-\[[^\]\s]+\]/ },
  { name: 'default palette', pattern: new RegExp(`\\b[a-z-]+-(${PALETTE})-\\d{2,3}\\b`) },
  // Tailwind defaults switched off in tokens.css (D-25) and template-era tokens:
  // these classes generate no CSS, so they would fail silently.
  {
    name: 'removed default',
    pattern:
      /\b(text-(xs|sm|base|lg|[2-9]?xl)|rounded(-[trblse]{1,2})?-(xs|sm|md|lg|[2-4]?xl)|shadow-(2xs|xs|sm|md|lg|2?xl)|font-(sans|serif|mono)|[a-z]+-black)\b(?![\w-])/,
  },
  {
    name: 'template token',
    pattern: /\b[a-z]+-(brand-(primary|accent)|text-(primary|secondary|muted|inverse)|surface)\b/,
  },
];

const SCAN_DIR = 'src';
const SCAN_EXTS = new Set(['.ts', '.tsx', '.css']);
const ALLOWED = new Set(['src/styles/tokens.css']);

// Template-era files, rebuilt in P2–P13. Their violations are reported as
// warnings so the check can pass while they still exist. Never add a file here:
// remove each entry when the file is rebuilt or deleted. (Sole exception, D-26:
// P2 added the template files that only the new removed-default rules caught.)
const LEGACY = new Set([
  'src/app/error.tsx',
  'src/app/not-found.tsx',
  'src/app/privacy-policy/page.tsx',
  'src/app/terms-of-service/page.tsx',
  'src/components/premium-button.tsx',
]);

const errors = [];
const legacyCounts = new Map();

function scan(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      scan(full);
      continue;
    }
    if (!SCAN_EXTS.has(extname(entry))) continue;
    const file = relative(ROOT, full).replaceAll('\\', '/');
    if (ALLOWED.has(file)) continue;
    const lines = readFileSync(full, 'utf8').split('\n');
    lines.forEach((line, i) => {
      if (line.includes('design-exception:')) return;
      for (const { name, pattern } of RULES) {
        if (!pattern.test(line)) continue;
        if (LEGACY.has(file)) {
          legacyCounts.set(file, (legacyCounts.get(file) ?? 0) + 1);
        } else {
          errors.push(`${file}:${i + 1}  [${name}]  ${line.trim().slice(0, 100)}`);
        }
        break;
      }
    });
  }
}

scan(join(ROOT, SCAN_DIR));

for (const file of LEGACY) {
  if (!existsSync(join(ROOT, file))) {
    errors.push(`${file}  [stale legacy entry]  file no longer exists — remove it from LEGACY`);
  } else if (!legacyCounts.has(file)) {
    errors.push(`${file}  [stale legacy entry]  file is now clean — remove it from LEGACY`);
  }
}

if (legacyCounts.size > 0) {
  const total = [...legacyCounts.values()].reduce((sum, n) => sum + n, 0);
  console.log(`⚠ ${total} line(s) in ${legacyCounts.size} legacy file(s) still use raw values:`);
  for (const [file, count] of legacyCounts) console.log(`  ${String(count).padStart(4)}  ${file}`);
  console.log('');
}

if (errors.length === 0) {
  console.log('✓ No raw design values outside src/styles/tokens.css (legacy files excepted).');
  process.exit(0);
}

console.log(`✗ Found ${errors.length} design violation(s):\n`);
for (const error of errors) console.log('  ' + error);
console.log('\nUse a token from src/styles/tokens.css or a component variant instead.');
process.exit(1);
