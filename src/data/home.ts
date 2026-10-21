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
    image: {
      url: '/images/hero/water-column.webp',
      alt: 'Water rising beside a Liyat drilling rig during well development',
    },
    primary: { label: 'Contact us', href: '/contact' },
    secondary: { label: 'Explore projects', href: '/projects' },
    backdrop: {
      url: '/images/hero/afar-rig-fleet.webp',
      alt: 'Liyat drilling rig, compressors and support trucks on site in the Afar region',
      // Keeps the rig (far left) in view on narrow screens and the mountains behind the text
      focus: 'upper-left',
    },
    backdropCaption: 'On site in the Afar region',
    blendImage: {
      url: '/images/hero/ethiopian-airlines.webp',
      alt: 'Water discharging into a test tank during a Liyat pumping test for Ethiopian Airlines, the drilling rig behind it',
      // The tank, the water and the crew are on the right; the cluttered foreground is on the left
      focus: 'right',
    },
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
