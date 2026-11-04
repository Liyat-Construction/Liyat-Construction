/**
 * Equipment & Capabilities
 * EQUIPMENT_PAGE → /equipment-capabilities
 * EQUIPMENT      → the rig in the home page's equipment section
 */

import type { Equipment, EquipmentPage } from '@/types/content';

export const EQUIPMENT_PAGE: EquipmentPage = {
  header: {
    eyebrow: 'Our equipment',
    title: 'Equipment and technologies',
    intro:
      'Drilling rigs, a dedicated pumping-test crew and the equipment that supports each stage on site.',
    image: {
      url: '/images/equipment/rig-transport.webp',
      alt: 'Liyat drilling rig on its carrier, on the way to site',
    },
    description:
      'Liyat Construction’s drilling rigs, pumping-test equipment and groundwater investigation, well construction and installation methods in Ethiopia.',
  },
  rigs: {
    eyebrow: 'Drilling equipment',
    title: 'The equipment behind the drilling',
    // Liyat's written answers: "Indian and Turkey", rigs "up to 800m", Chaka House the deepest
    paragraphs: [
      'Our rigs and drilling tools are sourced from Indian and Turkish manufacturers. In-house drilling teams carry out the well construction, supported by separate pumping-test and electromechanical teams.',
      'Our rigs can drill up to 800 m. The deepest well we have completed so far is 600 m.',
    ],
    image: {
      url: '/images/equipment/rig-transport.webp',
      alt: 'Liyat drilling rig mounted on its transport carrier',
    },
  },
  // PLACEHOLDER(C-16): proposal-backed equipment categories; confirm operational descriptions
  support: {
    eyebrow: 'Pumping-test equipment',
    title: 'A dedicated crew for proving the well',
    intro:
      'A dedicated pumping-test crew brings its own submersible pumps, crane and generators to site.',
    items: [
      {
        title: 'Variable-discharge test pumps',
        text: 'Submersible pumps let the crew control the pumping rate while observing how the well responds.',
      },
      {
        title: 'Pumping-test crane',
        text: 'The crew’s crane supports the handling and positioning of pumping-test equipment at the well.',
      },
      {
        title: 'Generators',
        text: 'Generators provide power for the pumps and equipment used during testing on site.',
      },
    ],
  },
  // Liyat checks the method wording on the preview (D-125)
  methods: {
    eyebrow: 'Technologies and methods',
    title: 'How we investigate, build and test',
    intro:
      'Each stage uses the findings from the work before it, from choosing a site to installing the pump.',
    items: [
      {
        title: 'Ground investigation',
        text: 'When a survey is part of the project, its hydrogeological and geophysical findings decide where the well is sited.',
      },
      {
        title: 'Well construction',
        text: 'Casing, screens and well development follow the agreed design and the ground encountered during drilling.',
      },
      {
        title: 'Pumping tests',
        text: 'Pumping-rate and water-level observations show how the well performs under test.',
      },
      {
        title: 'Pump installation',
        text: 'The well’s performance (from a pumping test, when one is part of the work) and the project’s water needs inform pump selection and installation.',
      },
    ],
  },
  figures: {
    eyebrow: 'Project record',
    title: 'Proven in the field',
    intro: 'Wells completed and metres drilled from 2019 to 2026.',
  },
  readiness: {
    eyebrow: 'Site readiness and care',
    title: 'Ready for the work on site',
    paragraphs: [
      'Drilling, pumping-test and installation teams coordinate the stages of work, with care for the crew, the borehole and the surrounding ground. Our environmental practice explains how we approach water, drilling fluid, cuttings and handover.',
    ],
    action: { label: 'See our environmental practice', href: '/environment' },
  },
};

// Only what Liyat has stated. Makes, models and other specs await C-16 (D-36: no invented specs)
export const EQUIPMENT: Equipment[] = [
  {
    name: 'Drilling rigs and tools',
    type: 'Drilling rig',
    image: {
      url: '/images/equipment/rig-transport.webp',
      alt: 'Liyat drilling rig on its carrier, on the way to site',
    },
    specs: [
      { label: 'Drilling depth', value: 'Up to 800 m' },
      { label: 'Manufacturers', value: 'Indian and Turkish' },
    ],
  },
];
