/**
 * Testimonials
 * Shown on the homepage and /testimonials; the section hides when the list is empty.
 * Only real quotes with name, role, organization and permission to publish (C-12).
 */

import type { Testimonial } from '@/types/content';

// PLACEHOLDER(C-12): every entry below is for layout review only (D-36); replace with approved quotes or empty the list
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'The pumping test report was clear enough for our engineers to size the pump system directly from it. The team kept us informed at every stage.',
    name: 'Name Surname',
    role: 'Role',
    organization: 'Organization (C-12)',
  },
  {
    quote:
      'Liyat ran the survey, drilling and pump installation as one project. The well has performed as the test predicted.',
    name: 'Name Surname',
    role: 'Role',
    organization: 'Organization (C-12)',
  },
  {
    quote:
      'Their documentation made it straightforward to report back to our board and our funders.',
    name: 'Name Surname',
    role: 'Role',
    organization: 'Organization (C-12)',
  },
];
