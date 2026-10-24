/**
 * Home page copy, in section order (Design System §4). The figures, projects,
 * services, equipment and quotes come from their own data files.
 */

import type { HomePage } from '@/types/content';

export const HOME_PAGE: HomePage = {
  hero: {
    // PLACEHOLDER(C-22): confirm "Know better. Drill better." is still the official tagline
    title: 'Know better. Drill better.',
    lead: 'Survey, drilling, testing and pump installation, with every stage documented.',
    primary: { label: 'Contact us', href: '/#contact' },
    secondary: { label: 'Explore projects', href: '/projects' },
    // The whole first screen behind the headline (D-81)
    image: {
      url: '/images/hero/afar-rig-fleet.webp',
      alt: 'Liyat drilling rig, compressors and support trucks on site in the Afar region',
      // Keeps the rig (far left) in view on narrow screens and the mountains behind the text
      focus: 'upper-left',
    },
    caption: 'On site in the Afar region',
    // PLACEHOLDER(C-30): illustrative log; replace with a real Liyat drilling log
    log: {
      title: 'Borehole log',
      caption: 'Illustrative log. Depths in metres.',
      layers: [
        { name: 'Topsoil', from: 0, to: 4, material: 'soil' },
        { name: 'Clay', from: 4, to: 16, material: 'clay' },
        { name: 'Weathered rock', from: 16, to: 48, material: 'weathered' },
        { name: 'Hard rock', from: 48, to: 84, material: 'rock' },
        { name: 'Aquifer', from: 84, to: 120, material: 'aquifer' },
      ],
      casingTo: 84,
      screenTo: 116,
      waterLevel: 36,
      waterLevelLabel: 'Water level',
    },
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
    // The brand promise (Brand §1)
    title: 'Every well surveyed, drilled and proven.',
    intro:
      'Six services, in the order a water source is built. The drawing shows the part of the well each one delivers.',
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
    title: 'The equipment we bring to site',
    intro: 'Rigs, compressors and test pumps, named with the capacity they are rated for.',
    link: { label: 'See our equipment', href: '/equipment-capabilities' },
  },
  testimonials: {
    eyebrow: 'Testimonials',
    title: 'What our clients say',
  },
};
