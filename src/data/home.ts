/**
 * Home page copy, in section order (PROJECT.md §7). The figures, projects,
 * services, equipment and quotes come from their own data files.
 */

import type { HomePage } from '@/types/content';

export const HOME_PAGE: HomePage = {
  hero: {
    // The client's tagline, confirmed (owner, 2026-10-27)
    title: 'Know better. Drill better.',
    lead: 'Survey, drilling, testing and pump installation, with every stage documented.',
    primary: { label: 'Contact us', href: '/#contact' },
    secondary: { label: 'Our services', href: '/#services' },
    // The whole first screen behind the headline (D-81)
    image: {
      url: '/images/hero/afar-rig-fleet.webp',
      alt: 'Liyat drilling rig, compressors and support trucks on site in the Afar region',
      // Keeps the rig (far left) in view on narrow screens and the mountains behind the text
      focus: 'upper-left',
    },
    caption: 'On site in the Afar region',
  },
  // "Who we are" (client content, 2026-10-22; facts from Liyat's brochure). The figures come from company.ts
  about: {
    eyebrow: 'Who we are',
    title: 'One team from the first survey to a working pump',
    paragraphs: [
      'Founded in 2019, Liyat Construction is led by its General Manager, a hydrogeologist with 19 years of hands-on drilling experience.',
      'Our own teams carry out the drilling, the pumping tests and the electromechanical works. A dedicated pumping test crew brings a crane, generators and variable-discharge pumps to site.',
    ],
    image: {
      url: '/images/hero/ethiopian-airlines.webp',
      alt: 'Drilling rig and water discharge during a pumping test at Ethiopian Airlines',
    },
    action: { label: 'Read our story', href: '/about' },
  },
  lifecycle: {
    eyebrow: 'Services',
    // Clients take one service or all of them; surveys only when the client asks (owner, 2026-10-28)
    title: 'One stage or the whole project.',
    intro:
      'Six services, in the order a water source is built. Take the one you need, or let us carry the project from start to finish. The drawing shows the part of the well each one delivers.',
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Selected projects',
    intro:
      'Pumping tests, pump installations and well development for institutional and commercial clients.',
    link: { label: 'Explore all projects', href: '/projects' },
    clientsTitle: 'Clients we have worked for',
  },
  equipment: {
    eyebrow: 'Equipment',
    title: 'Equipment and technologies',
    intro:
      'Our drilling rigs, the pumping-test crew’s equipment and the methods behind each stage.',
    link: { label: 'See our equipment', href: '/equipment-capabilities' },
  },
  testimonials: {
    eyebrow: 'Testimonials',
    title: 'What our clients say',
  },
};
