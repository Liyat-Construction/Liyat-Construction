/**
 * Team
 * The team section on /about (TeamFacts, T11). No names and no photos (C-15).
 * Source: Liyat's "Organizational Structure & Staffing" plan, the permanent team today
 * (R8, CLIENT_ANSWERS.md 2026-11-16, D-196). The plan gives the training each role
 * requires, so the table names that, never the degrees people hold. No years of
 * experience were given: the bars show people, never years.
 */

import type { SectionCopy, SiteRole, StaffGroup, Stat } from '@/types/content';

// Heading and subheading are Liyat's own (R8), in the site's sentence case and with the name
// written "Liyat Construction"; the eyebrow is ours.
export const TEAM_SECTION: SectionCopy = {
  eyebrow: 'Our team',
  title: 'Experienced leadership. Dedicated field experts.',
  intro:
    'Meet the engineers, hydrogeologists, technical specialists, and support professionals powering Liyat Construction’s reliable project delivery across Ethiopia.',
};

// Owner approved the wording (C-41, 2026-11-16). 37–39 permanent staff;
// 22–24 technical; 3 site teams (3 project managers, 3 chief operators, 3 assistants, 3
// geologists, 3 hydrologists); 9 = project managers, hydrologists and geologists (M.Sc. or B.Sc.).
export const TEAM_FIGURES: Stat[] = [
  { value: '37', unit: '+', label: 'Permanent staff' },
  { value: '22', unit: '+', label: 'Technical and field staff' },
  { value: '3', label: 'Complete site teams' },
  { value: '9', label: 'University-trained engineers and scientists' },
];

// Liyat's plan: "3 Project Managers, 3 Chief Machine Operators, 3 Machine Operator Assistants,
// 3 Geologists, and 3 Hydrologists provides complete technical leadership to operate up to three
// independent drilling rigs simultaneously", with roughly 2 core labourers per rig.
export const SITE_TEAMS = {
  count: 3,
  title: 'Three complete site teams',
  intro: 'Each team has its own leader, scientists and rig crew, so three sites can run at once.',
  teamLabel: 'Site team',
  roles: [
    { role: 'Project manager', icon: 'project-manager' },
    { role: 'Hydrologist', icon: 'hydrologist' },
    { role: 'Geologist', icon: 'geologist' },
    { role: 'Chief machine operator', icon: 'drilling' },
    { role: 'Machine operator assistant', icon: 'wrench' },
    { role: 'Drilling crew', icon: 'crew' },
  ] satisfies SiteRole[],
  support: 'Behind all three: 2 electricians, 5 finance and HR staff, and 10 in the office.',
};

// Role and training wording shortened from Liyat's plan
export const TEAM_GROUPS: StaffGroup[] = [
  {
    title: 'Technical and project operations',
    staff: '22–24',
    roles: [
      {
        role: 'Project managers',
        staff: 3,
        training:
          'M.Sc. or B.Sc. in water resources engineering, hydrogeology or civil engineering',
      },
      {
        role: 'Hydrologists',
        staff: 3,
        training: 'M.Sc. or B.Sc. in hydrology or water resources engineering',
      },
      { role: 'Geologists', staff: 3, training: 'M.Sc. or B.Sc. in geology or hydrogeology' },
      {
        role: 'Chief machine operators',
        staff: 3,
        training: 'TVET level IV or diploma in heavy machinery operation or mechanical engineering',
      },
      {
        role: 'Machine operator assistants',
        staff: 3,
        training: 'TVET level II–III in mechanical or drilling equipment operation',
      },
      {
        role: 'Electricians',
        staff: 2,
        training: 'TVET level III–IV or diploma in industrial electrical technology',
      },
      { role: 'Drilling crew', staff: 5, max: 7, training: 'Field experience' },
    ],
  },
  {
    title: 'Office, finance and human resources',
    staff: '15',
    roles: [
      {
        role: 'Finance and human resources',
        staff: 5,
        training:
          'Degree or diploma in accounting, finance, human resources or supplies management',
      },
      {
        role: 'Management and administration',
        staff: 10,
        training:
          'Degrees in engineering, business, law and marketing; secretarial, liaison, security and facility staff',
      },
    ],
  },
];

export const TEAM_TOTAL = { label: 'Total permanent staff', staff: '37–39' };

export const TEAM_FOOTNOTE =
  'Bars show the number of people in each role; a lighter end shows a range. Training is what each role requires. Local day labourers join the drilling crew when three rigs work at the same time.';
