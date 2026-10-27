/**
 * Realistic Liyat content for the style guide only, so the look is judged with
 * real-length text. Facts come from Liyat's own documents.
 */
import type { ImageAsset } from '@/types/content';

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

// From the Ethiopian Airlines project (client proposal and project list)
export const projectFacts = [
  { label: 'Client', value: 'Ethiopian Airlines' },
  { label: 'Location', value: 'Addis Ababa' },
  { label: 'Services', value: 'Borehole Drilling · Pumping Tests' },
  { label: 'Well depth', value: '500 m' },
  { label: 'Tested yield', value: '40 L/s', water: true },
];

export const sectionCopy = {
  eyebrow: 'Our services',
  title: 'One stage or the whole project.',
  intro:
    'Six services in the order a water project needs them. Take one, or let us run the whole project from survey to handover.',
  body: 'Before a rig moves, our hydrogeologists read the ground: existing data, field reconnaissance and resistivity soundings. The drilling recommendation that follows names the site, the expected depth and the likely yield.',
};
