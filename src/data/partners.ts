/**
 * Trusted Partners / Clients
 * Shown as a scrolling logo strip between Projects and Testimonials.
 * Put logos in public/partners/ and reference them as '/partners/file.png'.
 * Without a logo, the partner name is shown as text.
 *
 * NOTE: Names listed below are based on the client-provided project list.
 * Permission to display each logo or name must be confirmed before publication.
 */

import type { Partner } from '@/types/content';

export const PARTNERS: Partner[] = [
  { name: 'Ethiopian Airlines' },
  { name: 'British Embassy' },
  { name: 'Tsedey Bank' },
  { name: 'Yekatit 12 Hospital Medical College' },
  { name: 'SD Salt Manufacturing' },
  { name: 'CREDOCKS Digital Service' },
  { name: 'Chaka House' },
];
