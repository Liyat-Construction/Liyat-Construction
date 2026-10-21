/**
 * Equipment & Capabilities
 * EQUIPMENT    → equipment cards (rigs, compressors, test pumps, vehicles)
 * CAPABILITIES → the disciplines on /equipment-capabilities
 */

import type { Capability, Equipment, EquipmentPage } from '@/types/content';

export const EQUIPMENT_PAGE: EquipmentPage = {
  header: {
    eyebrow: 'Equipment and field capacity',
    title: 'Equipment & capabilities',
    intro:
      'Drilling rigs, support equipment and pumping-test specifications for planning a groundwater project. Contact us to discuss the equipment required for your site.',
    description:
      'Explore Liyat Construction’s drilling and support equipment, pumping-test specifications and site practices for groundwater projects in Ethiopia.',
  },
  rigs: {
    eyebrow: 'Drilling equipment',
    title: 'Drilling rigs',
    intro:
      'Makes, models and rated specifications are awaiting confirmation (C-16). Rated capacity is a machine specification, not a guaranteed depth at every site.',
  },
  support: {
    eyebrow: 'Support and testing',
    title: 'Equipment specifications',
    intro:
      'Compressor and test-pump details are awaiting the confirmed equipment inventory (C-16). Ask us for the specifications required by your tender.',
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

// PLACEHOLDER(C-16): makes, models, rated depths and photos per machine (D-36: no invented specs)
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
    name: 'Compressor model (C-16)',
    type: 'Air compressor',
    specs: [
      { label: 'Air delivery', value: '— (C-16)' },
      { label: 'Pressure', value: '— bar (C-16)' },
    ],
  },
  {
    category: 'support',
    name: 'Test pump model (C-16)',
    type: 'Pumping-test equipment',
    specs: [{ label: 'Test capacity', value: '— L/s (C-16)' }],
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
