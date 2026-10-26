/**
 * Company facts
 * HOME_FIGURES     → the "Who we are" section on the homepage
 * KEY_FIGURES      → ProofStrip on /equipment-capabilities
 * ABOUT_FIGURES    → ProofStrip on /about
 * COMPANY_FACTS    → "Company at a glance" on /about
 * CREDENTIALS      → licences and certifications on /about
 * TEAM             → leadership and team on /about
 * SAFETY_PRACTICES → safety and responsibility on /about
 * REFERENCES       → reference and completion letters (ReferenceGrid; to About when C-13 arrives)
 * Every figure and credential must be backed by a document (Brand §8).
 */

import type { Credential, Feature, Reference, Spec, Stat, TeamMember } from '@/types/content';
import { siteConfig } from '@/config/site';

// From Liyat's completed-projects list (client proposal, December 2025): 13 wells
// across 12 clients; Chaka House 600 m is the deepest; depths sum to 4,720 m.
// PLACEHOLDER(C-10): highest tested yield still unconfirmed
const WELLS_COMPLETED: Stat = { value: '13', label: 'Wells completed' };
const DEEPEST_WELL: Stat = { value: '600', unit: 'm', label: 'Deepest well drilled' };
const METRES_DRILLED: Stat = { value: '4,700', unit: '+ m', label: 'Metres drilled for clients' };
const HIGHEST_YIELD: Stat = {
  value: '00',
  unit: 'L/s',
  label: 'Highest tested yield (C-10)',
  water: true,
};
// From the client proposal: the founder and GM's drilling experience
const GM_EXPERIENCE: Stat = {
  value: '19',
  unit: 'years',
  label: "Our General Manager's drilling experience",
};

// From Liyat's brochure and proposal (client documents): founded 2019; the General Manager's
// 19 years of drilling experience; Chaka House, 600 m, the deepest well in its project list
export const HOME_FIGURES: Stat[] = [
  { value: '2019', label: 'Founded' },
  { value: '19', unit: 'years', label: "Our General Manager's drilling experience" },
  { value: '600', unit: 'm', label: 'Deepest well drilled' },
];

export const PROJECT_FIGURES: Stat[] = [WELLS_COMPLETED, DEEPEST_WELL, METRES_DRILLED];

export const KEY_FIGURES: Stat[] = [...PROJECT_FIGURES, HIGHEST_YIELD];

export const ABOUT_FIGURES: Stat[] = [GM_EXPERIENCE, WELLS_COMPLETED, DEEPEST_WELL, METRES_DRILLED];

export const COMPANY_FACTS: Spec[] = [
  { label: 'Legal name', value: siteConfig.legalName },
  { label: 'In Amharic', value: siteConfig.legalNameAmharic },
  // Both candidate addresses (C-03) are in Addis Ababa
  { label: 'Headquarters', value: 'Addis Ababa, Ethiopia' },
  // Client proposal: established January 2, 2019 as Wondwossen Ayalew (private contractor);
  // renamed Liyat Construction PLC in May 2022
  { label: 'Founded', value: '2019' },
  {
    label: 'Founder and General Manager',
    value: 'Wondwossen Ayalew, hydrogeologist — 19 years of drilling experience',
  },
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

// From the client proposal: the founder and GM. The rest of the team is placeholder
// until C-15 supplies names, roles and portraits.
export const TEAM: TeamMember[] = [
  {
    name: 'Wondwossen Ayalew',
    role: 'Founder and General Manager, hydrogeologist',
  },
  // PLACEHOLDER(C-15): Zelalem's full name/role and the third leader's name/role/portrait (C-34); Operation Head is a draft role
  { name: 'Zelalem', role: 'Leadership role to confirm' },
  { name: 'Name to confirm', role: 'Operation Head' },
];

// PLACEHOLDER(C-17): Liyat confirms these drafted safety and site practices (D-100, C-34)
export const SAFETY_PRACTICES: Feature[] = [
  {
    title: 'Protect the crew',
    text: 'Our crews wear protective equipment and check the work area before drilling begins.',
  },
  {
    title: 'Contain fluid and cuttings',
    text: 'Drilling fluid and cuttings stay contained, keeping them away from surrounding land and water.',
  },
  {
    title: 'Leave the site clean',
    text: 'We remove equipment, waste and temporary works before handing the site back to the client.',
  },
];

// PLACEHOLDER(C-13): add scans of approved reference letters; the section hides while empty
export const REFERENCES: Reference[] = [];
