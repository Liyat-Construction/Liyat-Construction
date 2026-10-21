/**
 * Equipment & Capabilities
 * EQUIPMENT    → equipment cards (rigs, compressors, test pumps, vehicles)
 * CAPABILITIES → the disciplines on /equipment-capabilities
 */

import type { Capability, Equipment } from '@/types/content';

// PLACEHOLDER(C-16): makes, models, rated depths and photos per machine (D-36: no invented specs)
export const EQUIPMENT: Equipment[] = [
  {
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
    name: 'Compressor model (C-16)',
    type: 'Air compressor',
    specs: [
      { label: 'Air delivery', value: '— (C-16)' },
      { label: 'Pressure', value: '— bar (C-16)' },
    ],
  },
  {
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
