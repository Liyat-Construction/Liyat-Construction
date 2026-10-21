/**
 * Home page copy, in section order (Design System §4). The figures, projects,
 * services, equipment and quotes come from their own data files.
 */

import type { HomePage } from '@/types/content';

export const HOME_PAGE: HomePage = {
  hero: {
    // PLACEHOLDER(C-22): confirm "Know better. Drill better." is still the official tagline
    title: 'Know better. Drill better.',
    lead: 'We take water projects from hydrogeological survey through drilling, testing and pump installation, and document every stage for our clients.',
    image: {
      url: '/images/hero/water-column.webp',
      alt: 'Water rising beside a Liyat drilling rig during well development',
    },
    primary: { label: 'Contact us', href: '/contact' },
    secondary: { label: 'Explore projects', href: '/projects' },
  },
  proof: {
    eyebrow: 'Track record',
    title: 'Our work in figures',
    clientsTitle: 'Clients we have worked for',
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Selected projects',
    intro:
      'Pumping tests, pump installations and well development for institutional and commercial clients.',
    link: { label: 'Explore all projects', href: '/projects' },
  },
  lifecycle: {
    eyebrow: 'Services',
    // The brand promise (Brand §1)
    title: 'Every well surveyed, drilled and proven.',
    intro:
      'Six services, in the order a water source is built. The drawing shows the part of the well each one delivers.',
  },
  equipment: {
    eyebrow: 'Equipment',
    title: 'The equipment we bring to site',
    intro: 'Rigs, compressors and test pumps, named with the capacity they are rated for.',
    link: { label: 'See our equipment', href: '/equipment-capabilities' },
  },
  testimonials: {
    eyebrow: 'Clients',
    title: 'What clients say',
  },
};
