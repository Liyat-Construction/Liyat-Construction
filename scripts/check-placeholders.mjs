#!/usr/bin/env node
/**
 * Lists every PLACEHOLDER(C-xx) marker and leftover template text.
 * Must report zero before launch:  npm run check:placeholders
 * Exits 0 when clean, 1 when placeholders are found.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const PATTERNS = [
  /PLACEHOLDER\(/,
  /brand name/i,
  // Template filler only; real copy such as "your site" or "your phone number" is fine
  /your (company|brand) name|your (tagline|logo|text|content) here/i,
  /lorem ipsum/i,
  /\/placeholders\//i,
  /example\.com/i,
  /john doe|jane doe/i,
  /\+1[-\s]?\(?555/,
  /123\s+main\s+st/i,
  /yourusername/i,
  /TODO|FIXME|REPLACE[_\s]?ME/i,
];

const SCAN_DIRS = ['src', 'public'];
const SCAN_EXTS = new Set(['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.css', '.svg']);
const SKIP = new Set(['node_modules', '.next', 'out', '.git', 'dist']);
const SKIP_FILES = new Set(['check-placeholders.mjs', 'package-lock.json']);

const hits = [];

function scan(dir) {
  for (const entry of readdirSync(dir)) {
    if (SKIP.has(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      scan(full);
      continue;
    }
    if (SKIP_FILES.has(entry) || !SCAN_EXTS.has(extname(entry))) continue;
    const lines = readFileSync(full, 'utf8').split('\n');
    lines.forEach((line, i) => {
      for (const pattern of PATTERNS) {
        if (pattern.test(line)) {
          hits.push(`${relative(ROOT, full)}:${i + 1}  ${line.trim().slice(0, 120)}`);
          break;
        }
      }
    });
  }
}

for (const dir of SCAN_DIRS) {
  try {
    scan(join(ROOT, dir));
  } catch {
    /* dir missing */
  }
}

if (hits.length === 0) {
  console.log('✓ No placeholders or template text found.');
  process.exit(0);
}

console.log(`Found ${hits.length} possible placeholder(s):\n`);
for (const hit of hits) console.log('  ' + hit);
console.log('\nReplace these with real client content, then run again.');
process.exit(1);
