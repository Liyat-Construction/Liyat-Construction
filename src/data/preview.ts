/**
 * Review-only home page options shown to the client (`/preview/option-a`,
 * `/preview/option-b`). Temporary: deleted with the preview pages after the
 * client chooses a hero.
 */

export const PREVIEW_OPTIONS = {
  a: {
    path: '/preview/option-a',
    title: 'Home, option A',
    label: 'Design option A · draft for review',
  },
  b: {
    path: '/preview/option-b',
    title: 'Home, option B',
    label: 'Design option B · draft for review',
  },
} as const;
