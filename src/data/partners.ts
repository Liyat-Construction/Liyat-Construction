/**
 * Trusted Partners / Clients
 * Shown as a scrolling strip between Projects and Testimonials.
 * Put images in public/partners/ and reference them as '/partners/file.webp'.
 * Use `logo` for a real logo, or `photo` for a site photo shown with the partner
 * name. Without either, the partner name is shown as text.
 *
 * Ethiopian Airlines and British Embassy relationships are confirmed by the client.
 */

import type { Partner } from '@/types/content';

export const PARTNERS: Partner[] = [
  { name: 'Ethiopian Airlines', logo: '/partners/ethiopian-airlines.webp' },
  { name: 'British Embassy', logo: '/partners/british-embassy.webp' },
  { name: 'Tsedey Bank', logo: '/partners/tsedey-bank.webp' },
  { name: 'Yekatit 12 Hospital Medical College', photo: '/partners/yekatit-12-hospital.webp' },
  { name: 'SD Salt Manufacturing', photo: '/partners/sd-salt-manufacturing.webp' },
  { name: 'CREDOCS Digital Service', photo: '/partners/credocs-digital-service.webp' },
  { name: 'Chaka House', photo: '/partners/chaka-house.webp' },
];
