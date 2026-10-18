/**
 * Testimonials
 * Shown on the homepage and /testimonials.
 *
 * NOTE: The testimonials below are placeholders for layout review only.
 * They must be replaced with approved, real client quotes before the site
 * is published. Names, companies, and quotes are not verified.
 */

import type { Testimonial } from '@/types/content';

export const TESTIMONIALS: Testimonial[] = [
  {
    clientName: 'Abebe Kebede',
    company: 'Facilities Director, Addis Ababa',
    quote:
      'Liyat Construction delivered a thorough pumping test and clear report that helped us size our pump system correctly. Their team was professional and responsive throughout the project.',
  },
  {
    clientName: 'Tigist Haile',
    company: 'Project Manager, International NGO',
    quote:
      'We needed a reliable groundwater source in a remote location, and Liyat managed the investigation, drilling, and installation from start to finish. The well has performed as expected.',
  },
  {
    clientName: 'Yonas Tadesse',
    company: 'Operations Lead, Commercial Development',
    quote:
      'From site investigation to final pump installation, Liyat showed strong technical discipline. Their documentation made it easy for us to report back to our board and donors.',
  },
];
