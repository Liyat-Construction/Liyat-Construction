/**
 * Utility Functions
 */

import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/**
 * tailwind-merge only knows Tailwind's default theme. Without the token names it
 * would read `text-body` as a color and drop it next to `text-white`.
 * Keep in sync with src/styles/tokens.css.
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ['display', 'h1', 'h2', 'h3', 'h4', 'figure', 'lead', 'body', 'small', 'eyebrow'],
      radius: ['control', 'card'],
      shadow: ['raise'],
      spacing: ['section', 'section-md', 'section-sm', 'gutter', 'grid'],
      container: ['content', 'prose'],
      aspect: ['wide', 'card', 'portrait'],
    },
  },
});

/**
 * Merge Tailwind CSS classes with clsx
 * Handles conditional classes and prevents conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Look up a variant class in a typed map. The key is a string-literal union
 * checked by TypeScript, never user input, so the injection rule does not apply.
 */
export function pick<K extends PropertyKey, V>(map: Readonly<Record<K, V>>, key: K): V {
  // eslint-disable-next-line security/detect-object-injection -- typed union key
  return map[key];
}
