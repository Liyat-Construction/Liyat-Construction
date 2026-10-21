/**
 * Testimonials
 * Shown on the homepage and /testimonials; the section hides when the list is empty.
 * Only real quotes with name, role, organization and permission to publish (C-12).
 */

import type { Testimonial, TestimonialsPage } from '@/types/content';

export const TESTIMONIALS_PAGE: TestimonialsPage = {
  header: {
    eyebrow: 'Client feedback',
    title: 'Testimonials',
    intro:
      'What clients say about working with Liyat Construction, and the references behind the words.',
    description:
      'Client feedback and references for Liyat Construction PLC groundwater development and water-well engineering projects in Ethiopia.',
  },
  testimonials: {
    eyebrow: 'In their words',
    title: 'What clients say',
    intro:
      'Published with each client’s permission. Quotes are placeholders until approved testimonials arrive (C-12).',
  },
  references: {
    eyebrow: 'On record',
    title: 'Reference and completion letters',
    intro:
      'Scans of letters from completed projects. Further references are available on request (C-13).',
  },
  clients: {
    eyebrow: 'Who we work for',
    title: 'Clients',
    clientsTitle: 'Organizations Liyat has worked with',
  },
};

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
