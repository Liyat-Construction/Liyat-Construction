/**
 * Realistic Liyat content for the style guide only, so the look is judged with
 * real-length text. Unconfirmed facts carry their client checklist item.
 */
import type { ImageAsset, Reference } from '@/types/content';

export const photos = {
  rigFleet: {
    url: '/images/hero/afar-rig-fleet.webp',
    alt: 'Liyat drilling rigs and support trucks on site in the Afar region',
  },
  pumpingTest: {
    url: '/images/projects/tsedey-bank-pumping-test/cover.webp',
    alt: 'Pumping test discharge at the Tsedey Bank site',
  },
  pumpingTestTop: {
    url: '/images/projects/tsedey-bank-pumping-test/cover.webp',
    alt: 'Pumping test discharge at the Tsedey Bank site',
    focus: 'top',
    orientation: 'portrait',
  },
  airlift: {
    url: '/images/site/well-airlift-development.webp',
    alt: 'Airlift development of a new well',
  },
  rigTransport: {
    url: '/images/equipment/rig-transport.webp',
    alt: 'Drilling rig being transported to site',
  },
} as const satisfies Record<string, ImageAsset>;

// PLACEHOLDER(C-11): project facts to be confirmed by Liyat (D-36: no invented figures)
export const projectFacts = [
  { label: 'Client', value: 'Tsedey Bank' },
  { label: 'Location', value: 'Addis Ababa' },
  { label: 'Year', value: '— (C-11)' },
  { label: 'Services', value: 'Pumping Tests' },
  { label: 'Depth', value: '— m (C-11)' },
  { label: 'Tested yield', value: '— L/s (C-11)', water: true },
  { label: 'Duration', value: '— (C-11)' },
];

// PLACEHOLDER(C-13): REFERENCES is empty until letters arrive; this sample shows the card only
export const reference: Reference = {
  organization: 'Organization (C-13)',
  date: '2025-03-14',
  file: '#cards',
};

export const services = [
  'Hydrogeological & Geophysical Survey',
  'Well Drilling',
  'Pumping Tests',
  'Wellhead Construction & Rehabilitation',
  'Pump Installation & Electromechanical Works',
  'Turnkey Water Projects',
];

export const sectionCopy = {
  eyebrow: 'Our services',
  title: 'Every well surveyed, drilled and proven.',
  intro:
    'Six services in the order a water project needs them. Take one, or let us run the whole project from survey to handover.',
  body: 'Before a rig moves, our hydrogeologists read the ground: existing data, field reconnaissance and resistivity soundings. The drilling recommendation that follows names the site, the expected depth and the likely yield.',
};

// PLACEHOLDER(C-09): method wording to be confirmed with Liyat
export const prose = {
  heading: 'How we test a new well',
  paragraphs: [
    'Every well we drill is tested before handover. A step-drawdown test finds the safe pumping rate; a constant-rate test confirms the well can sustain it.',
    'We record water levels throughout, through drawdown and recovery, and hand over a report your engineers can design the pump system from.',
  ],
  list: [
    'Step-drawdown test',
    'Constant-rate test, typically 24 to 72 hours',
    'Recovery monitoring',
  ],
};
