/**
 * Company facts
 * PROJECT_FIGURES  → ProofStrip on /equipment-capabilities
 * ABOUT_FIGURES    → ProofStrip on /about
 * COMPANY_FACTS    → "Company at a glance" on /about
 * SAFETY_PRACTICES → safety and site practice on /about
 * Every figure must be backed by a document (PROJECT.md §8).
 */

import type { Feature, Spec, Stat } from '@/types/content';
import { siteConfig } from '@/config/site';

// Liyat's written answers, 2026-11 (CLIENT_ANSWERS.md): 7+ years for the company, Chaka House
// 600 m the deepest. Figures cover 2019–2026, with no work from before 2019.
const COMPANY_EXPERIENCE: Stat = { value: '7', unit: '+ years', label: 'Company experience' };
const DEEPEST_WELL: Stat = { value: '600', unit: 'm', label: 'Deepest well drilled' };
// Liyat's follow-up answers (2026-11-05): 50+ wells stands; "ok make it 12,ooom +"
const WELLS_COMPLETED: Stat = { value: '50', unit: '+', label: 'Wells completed' };
const METRES_DRILLED: Stat = { value: '12,000', unit: '+ m', label: 'Metres drilled for clients' };

export const PROJECT_FIGURES: Stat[] = [WELLS_COMPLETED, DEEPEST_WELL, METRES_DRILLED];

export const ABOUT_FIGURES: Stat[] = [
  COMPANY_EXPERIENCE,
  WELLS_COMPLETED,
  DEEPEST_WELL,
  METRES_DRILLED,
];

export const COMPANY_FACTS: Spec[] = [
  { label: 'Legal name', value: siteConfig.legalName },
  { label: 'In Amharic', value: siteConfig.legalNameAmharic },
  { label: 'Headquarters', value: 'Addis Ababa, Ethiopia' },
  // Established January 2, 2019 as Wondwossen Water Well Drilling Contractor; renamed
  // Liyat Construction PLC in May 2022 (client proposal and copy review)
  { label: 'Founded', value: '2019' },
  // His years are only in his story on /about (D-123)
  { label: 'Founder and General Manager', value: 'Wondwossen Ayalew, hydrogeologist' },
];

// Liyat confirmed all three in his written answers
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
