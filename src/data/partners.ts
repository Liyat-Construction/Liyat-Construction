/**
 * Trusted Partners / Clients
 * Shown as a scrolling strip between Projects and Testimonials.
 * Sources in assets/images/clients/, then `npm run images`; reference as '/images/clients/file.webp'.
 * Use `logo` for a real logo, or `photo` for a site photo shown with the partner
 * name. Without either, the partner name is shown as text.
 *
 * Ethiopian Airlines and British Embassy relationships are confirmed by the client.
 */

import type { Partner } from '@/types/content';

export const PARTNERS: Partner[] = [
  { name: 'Ethiopian Airlines', logo: '/images/clients/ethiopian-airlines.webp' },
  { name: 'British Embassy', logo: '/images/clients/british-embassy.webp' },
  // PLACEHOLDER(C-11): permission to name each client below
  { name: 'Tsedey Bank', logo: '/images/clients/tsedey-bank.webp' },
  {
    name: 'Yekatit 12 Hospital Medical College',
    photo: '/images/clients/yekatit-12-hospital.webp',
  },
  { name: 'SD Salt Manufacturing', photo: '/images/clients/sd-salt-manufacturing.webp' },
  // PLACEHOLDER(C-23): "CREDOCS" or "CREDOCKS"
  { name: 'CREDOCS Digital Service', photo: '/images/clients/credocs-digital-service.webp' },
  { name: 'Chaka House', photo: '/images/clients/chaka-house.webp' },
];
