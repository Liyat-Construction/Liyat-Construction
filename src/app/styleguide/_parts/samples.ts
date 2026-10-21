/**
 * Realistic Liyat content for the style guide only, so the look is judged with
 * real-length text. Unconfirmed facts carry their client checklist item.
 */
import type { ImageAsset, Stat } from '@/types/content';

export const photos = {
  hero: {
    url: '/hero/hero-water-column.webp',
    alt: 'Water rising beside a Liyat drilling rig during well development',
  },
  rigFleet: {
    url: '/hero/hero-afar-rig-fleet.webp',
    alt: 'Liyat drilling rigs and support trucks on site in the Afar region',
  },
  pumpingTest: {
    url: '/projects/tsedey-bank-pumping-test.webp',
    alt: 'Pumping test discharge at the Tsedey Bank site',
  },
  pumpingTestTop: {
    url: '/projects/tsedey-bank-pumping-test.webp',
    alt: 'Pumping test discharge at the Tsedey Bank site',
    focus: 'top',
  },
  airlift: {
    url: '/projects/well-airlift-development.webp',
    alt: 'Airlift development of a new well',
  },
  rigTransport: {
    url: '/projects/rig-transport.webp',
    alt: 'Drilling rig being transported to site',
  },
} as const satisfies Record<string, ImageAsset>;

export const hero = {
  eyebrow: 'Water Well Drilling & Engineering',
  // PLACEHOLDER(C-22): confirm the tagline is still official
  title: 'Know better. Drill better.',
  lead: 'We take water projects from hydrogeological survey through drilling, testing and pump installation, and document every stage for our clients.',
};

// PLACEHOLDER(C-10): figures to be supplied by Liyat
export const stats: Stat[] = [
  { value: '120', unit: '+', label: 'Wells completed' },
  { value: '350', unit: 'm', label: 'Deepest well drilled' },
  { value: '18', unit: 'L/s', label: 'Highest tested yield', water: true },
];

// PLACEHOLDER(C-11): project facts to be confirmed by Liyat
export const projectFacts = [
  { label: 'Client', value: 'Tsedey Bank' },
  { label: 'Location', value: 'Addis Ababa' },
  { label: 'Year', value: '2024' },
  { label: 'Services', value: 'Pumping Tests' },
  { label: 'Depth', value: '220 m' },
  { label: 'Tested yield', value: '6.5 L/s' },
  { label: 'Duration', value: '72-hour constant-rate test' },
];

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
