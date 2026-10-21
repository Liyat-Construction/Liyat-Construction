import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export interface Token {
  name: string;
  value: string;
}

/**
 * Reads token values straight from src/styles/tokens.css at build time, so the
 * style guide can never drift from the file it documents.
 */
export function readTokens(namespace: 'color' | 'text' | 'radius' | 'shadow' | 'spacing'): Token[] {
  const css = readFileSync(join(process.cwd(), 'src', 'styles', 'tokens.css'), 'utf8');
  const tokens: Token[] = [];
  for (const line of css.split('\n')) {
    const match = /^\s*--([a-z]+)-([a-z0-9-]+):\s*([^;]+);/.exec(line);
    if (!match || match[1] !== namespace || match[2]?.includes('--')) continue;
    const [, , name = '', value = ''] = match;
    if (name === '*' || value === 'initial') continue;
    tokens.push({ name, value });
  }
  return tokens;
}
