/**
 * Company facts
 * KEY_FIGURES      → ProofStrip on the homepage
 * ABOUT_FIGURES    → ProofStrip on /about
 * COMPANY_FACTS    → "Company at a glance" on /about
 * CREDENTIALS      → licences and certifications on /about
 * TEAM             → leadership and team on /about
 * SAFETY_PRACTICES → safety and responsibility on /about
 * REFERENCES       → reference and completion letters on /testimonials
 * Every figure and credential must be backed by a document (Brand §8).
 */

import type { Credential, Feature, Reference, Spec, Stat, TeamMember } from '@/types/content';
import { siteConfig } from '@/config/site';

// PLACEHOLDER(C-10): figures to be supplied by Liyat (D-36: no invented figures)
const WELLS_COMPLETED: Stat = { value: '00', label: 'Wells completed (C-10)' };
const DEEPEST_WELL: Stat = { value: '000', unit: 'm', label: 'Deepest well drilled (C-10)' };
const HIGHEST_YIELD: Stat = {
  value: '00',
  unit: 'L/s',
  label: 'Highest tested yield (C-10)',
  water: true,
};
const REGIONS: Stat = { value: '0', label: 'Regions worked in (C-10)' };
// PLACEHOLDER(C-14): the grade on the water works contractor licence
const CONTRACTOR_GRADE: Stat = { value: '0', label: 'Water works contractor grade (C-14)' };

export const KEY_FIGURES: Stat[] = [WELLS_COMPLETED, DEEPEST_WELL, HIGHEST_YIELD, REGIONS];

export const ABOUT_FIGURES: Stat[] = [CONTRACTOR_GRADE, WELLS_COMPLETED, DEEPEST_WELL, REGIONS];

export const COMPANY_FACTS: Spec[] = [
  { label: 'Legal name', value: siteConfig.legalName },
  { label: 'In Amharic', value: siteConfig.legalNameAmharic },
  // Both candidate addresses (C-03) are in Addis Ababa
  { label: 'Headquarters', value: 'Addis Ababa, Ethiopia' },
  // PLACEHOLDER(C-08): founding year
  { label: 'Founded', value: 'Year (C-08)' },
];

// PLACEHOLDER(C-14): trade licence, Water Works Construction Authority grade, certifications
export const CREDENTIALS: Credential[] = [
  { name: 'Trade licence (C-14)', issuer: 'Issuing authority (C-14)', detail: 'Licence number' },
  {
    name: 'Water works contractor grade (C-14)',
    issuer: 'Issuing authority (C-14)',
    detail: 'Grade',
  },
];

// PLACEHOLDER(C-15): names, roles and portraits of the leadership and team
export const TEAM: TeamMember[] = [
  { name: 'Name Surname', role: 'Role (C-15)' },
  { name: 'Name Surname', role: 'Role (C-15)' },
  { name: 'Name Surname', role: 'Role (C-15)' },
];

// PLACEHOLDER(C-17): only the practices Liyat actually follows; the section hides while empty
export const SAFETY_PRACTICES: Feature[] = [
  { title: 'Protective equipment (C-17)', text: 'What the crew wears and checks on site.' },
  {
    title: 'Drilling fluid and cuttings (C-17)',
    text: 'How drilling fluid and cuttings are contained and disposed of.',
  },
  { title: 'Site handover (C-17)', text: 'How the site is left once the well is complete.' },
];

// PLACEHOLDER(C-13): add scans of approved reference letters; the section hides while empty
export const REFERENCES: Reference[] = [];
