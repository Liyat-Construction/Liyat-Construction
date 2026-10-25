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
      'The drilling, support and pumping-test equipment we bring to site, with the specifications for planning.',
    image: {
      url: '/images/equipment/rig-transport.webp',
      alt: 'Liyat drilling rig on its carrier, on the way to site',
    },
    description:
      'Explore Liyat Construction’s drilling and support equipment, pumping-test specifications and site practices for groundwater projects in Ethiopia.',
  },
  rigs: {
    eyebrow: 'Drilling equipment',
    title: 'Drilling rigs',
    // Client proposal: rigs and drilling tools sourced from Indian manufacturers
    intro:
      'Drilling rigs and tools from established Indian manufacturers. Makes, models and rated specifications are awaiting confirmation (C-16).',
  },
  support: {
    eyebrow: 'Support and testing',
    title: 'Equipment specifications',
    intro:
      'A dedicated pumping-test crew brings its own crane, generators and variable-discharge submersible pumps. Exact makes and ratings are awaiting the confirmed inventory (C-16).',
  },
  figures: {
    eyebrow: 'Project record',
    title: 'Capability in the field',
    intro:
      'These figures describe completed work, not equipment ratings. Values are placeholders until supporting project records are supplied (C-10).',
  },
  safety: {
    eyebrow: 'Site responsibility',
    title: 'Safety and site practice',
    intro: 'The practices below are placeholders awaiting confirmation from Liyat (C-17).',
  },
};

// From the client proposal: a dedicated pumping-test crew with its own crane,
// generators and variable-discharge submersible pumps; rigs and tools from Indian
// manufacturers. Makes, models, ratings and photos per machine still await C-16
// (D-36: no invented specs — spec lists stay empty until confirmed)
export const EQUIPMENT: Equipment[] = [
  {
    category: 'rig',
    name: 'Rig model (C-16)',
    type: 'Drilling rig',
    image: {
      url: '/images/equipment/rig-transport.webp',
      alt: 'Liyat drilling rig on its carrier, on the way to site',
    },
    specs: [
      { label: 'Rated depth', value: '— m (C-16)' },
      { label: 'Drilling method', value: 'Method (C-16)' },
    ],
  },
  {
    category: 'support',
    name: 'Variable-discharge submersible test pumps',
    type: 'Pumping-test equipment',
    specs: [{ label: 'Test capacity', value: '— L/s (C-16)' }],
  },
  {
    category: 'support',
    name: 'Pumping-test crane',
    type: 'Lifting for the dedicated test crew',
    specs: [{ label: 'Capacity', value: '— t (C-16)' }],
  },
  {
    category: 'support',
    name: 'Generators for the test crew',
    type: 'Site power',
    specs: [{ label: 'Output', value: '— kVA (C-16)' }],
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
