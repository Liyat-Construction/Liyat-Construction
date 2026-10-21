/**
 * Company facts
 * KEY_FIGURES → ProofStrip on the homepage and /about
 * CREDENTIALS → licences and certifications on /about
 * TEAM        → leadership and team on /about
 * REFERENCES  → reference and completion letters on /testimonials
 * Every figure and credential must be backed by a document (Brand §8).
 */

import type { Credential, Reference, Stat, TeamMember } from '@/types/content';

// PLACEHOLDER(C-10): figures to be supplied by Liyat (D-36: no invented figures)
export const KEY_FIGURES: Stat[] = [
  { value: '00', label: 'Wells completed (C-10)' },
  { value: '000', unit: 'm', label: 'Deepest well drilled (C-10)' },
  { value: '00', unit: 'L/s', label: 'Highest tested yield (C-10)', water: true },
  { value: '0', label: 'Regions worked in (C-10)' },
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

// PLACEHOLDER(C-13): add scans of approved reference letters; the section hides while empty
export const REFERENCES: Reference[] = [];
