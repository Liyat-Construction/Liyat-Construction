/**
 * Equipment & Capabilities
 * EQUIPMENT    → equipment cards (rigs, compressors, test pumps, vehicles)
 * CAPABILITIES → the disciplines on /equipment-capabilities
 */

import type { Capability, Equipment, EquipmentPage } from '@/types/content';

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
    // Client proposal: rigs and drilling tools sourced from Indian manufacturers
    paragraphs: [
      'Our rigs and drilling tools are sourced from Indian manufacturers. In-house drilling teams carry out the well construction, supported by separate pumping-test and electromechanical teams.',
      'The project record below shows the depths we have completed. These are records of work delivered, not the rated capacity of an individual rig.',
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
  // PLACEHOLDER(C-09): confirm method wording; equipment and operating details also need C-16
  methods: {
    eyebrow: 'Technologies and methods',
    title: 'How we investigate, build and test',
    intro:
      'Each stage uses the findings from the work before it, from choosing a site to installing the pump.',
    items: [
      {
        title: 'Ground investigation',
        text: 'Hydrogeological and geophysical findings inform where the well is sited before drilling begins.',
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
        text: 'Tested well performance and the project’s water needs inform pump selection and installation.',
      },
    ],
  },
  figures: {
    eyebrow: 'Project record',
    title: 'Proven in the field',
    intro:
      'From Liyat’s completed-project records: wells delivered and metres drilled, not machine ratings.',
  },
  // PLACEHOLDER(C-17): confirm coordination and site-care wording with Liyat
  readiness: {
    eyebrow: 'Site readiness and care',
    title: 'Ready for the work on site',
    paragraphs: [
      'Drilling, pumping-test and installation teams coordinate the stages of work, with care for the crew, the borehole and the surrounding ground. Our environmental practice explains how we approach water, drilling fluid, cuttings and handover.',
    ],
    action: { label: 'See our environmental practice', href: '/environment' },
  },
};

// From the client proposal: a dedicated pumping-test crew with its own crane,
// generators and variable-discharge submersible pumps; rigs and tools from Indian
// manufacturers. Makes, models, ratings and photos per machine still await C-16
// (D-36: no invented specs — spec lists stay empty until confirmed)
export const EQUIPMENT: Equipment[] = [
  {
    category: 'rig',
    name: 'Drilling rigs and tools',
    type: 'Drilling rig',
    image: {
      url: '/images/equipment/rig-transport.webp',
      alt: 'Liyat drilling rig on its carrier, on the way to site',
    },
    specs: [],
  },
  {
    category: 'support',
    name: 'Variable-discharge submersible test pumps',
    type: 'Pumping-test equipment',
    specs: [],
  },
  {
    category: 'support',
    name: 'Pumping-test crane',
    type: 'Lifting for the dedicated test crew',
    specs: [],
  },
  {
    category: 'support',
    name: 'Generators for the test crew',
    type: 'Site power',
    specs: [],
  },
];

// PLACEHOLDER(C-16): confirm the methods and equipment named in each discipline
export const CAPABILITIES: Capability[] = [
  {
    title: 'Drilling',
    body: 'Deep and shallow wells, with the drilling method matched to the formation. Our crews install casing, screen and gravel pack across a range of geological settings.',
    items: [
      'Rotary and air drilling',
      'Casing, screen and gravel-pack installation',
      'Well development and surging',
    ],
  },
  {
    title: 'Pumping tests',
    body: 'In-house test equipment to verify yield, determine aquifer parameters and support pump selection.',
    items: [
      'Step-drawdown and constant-rate tests',
      'Water-level logging',
      'Recovery analysis and aquifer parameters',
    ],
  },
  {
    title: 'Pumps and electromechanical works',
    body: 'Submersible and surface pumps, controls and power, commissioned and checked against design before handover.',
    items: [
      'Submersible and surface pump installation',
      'Control panels and electrical works',
      'Commissioning and performance check',
    ],
  },
  {
    title: 'Survey and geophysics',
    body: 'Desk studies, field reconnaissance and resistivity soundings to find the drilling site before a rig is mobilized.',
    items: [
      'Hydrogeological desk review',
      'Vertical electrical sounding (VES)',
      'Drilling recommendation report',
    ],
  },
];
