/**
 * /about copy, in section order (PROJECT.md §7). Figures, facts and
 * safety practice come from company.ts; clients come from partners.ts.
 * The structure follows the owner's About plan (D-101).
 */

import type { AboutPage } from '@/types/content';

export const ABOUT_PAGE: AboutPage = {
  header: {
    eyebrow: 'Who we are',
    title: 'Groundwater engineering, from survey to handover',
    metaTitle: 'Groundwater Engineers in Addis Ababa',
    // The client's hero statement (copy review, 2026-11)
    intro: 'Expert hydrogeology paired with advanced drilling technology across Ethiopia.',
    description:
      'Liyat Construction PLC: water-well drilling and groundwater engineering in Addis Ababa, Ethiopia, for public bodies, embassies, NGOs and businesses.',
    image: {
      url: '/images/hero/ethiopian-airlines.webp',
      alt: 'Drilling rig and water discharge during a pumping test at Ethiopian Airlines',
    },
  },
  story: {
    eyebrow: 'Our story',
    title: 'Drilling experience became a company of its own',
    paragraphs: [
      // Rewritten by the owner, 2026-11-10, from the client's note. The founder sentence is
      // the client's own (D-123); the 2022 rename has no stated reason, so none is given.
      'Liyat Construction PLC is a water-well drilling and groundwater engineering company in Addis Ababa, Ethiopia. We began in 2019 as Wondwossen Water Well Drilling Contractor and became Liyat Construction PLC in May 2022. Our founder and General Manager, Wondwossen Ayalew, is a hydrogeologist with more than 20 years of drilling experience in the sector.',
      // Figures: company.ts (50+ wells, 12,000 m+, 2019–2026); methods: answer 5.3; regions: 3.8
      'We drill boreholes, deep and shallow, with mud rotary and DTH rotary rigs. Since 2019 we have completed more than 50 wells and drilled more than 12,000 m for institutions, embassies, commercial developments and communities in different regions of Ethiopia. Our wells run from 100 m at a salt works in Afdera to 600 m in Addis Ababa, the deepest we have drilled.',
      // Stages and records: answers 4.x and 5.1; hand pumps: C-09; no survey on every job (D-117)
      'A job can start with a survey that helps locate water, then drilling and well development, pumping tests, and pump supply and installation, including hand pumps. We can do one stage or run the whole project. Because our own people run the rig, the test pump and the installation, the client deals with one contractor and gets one set of records: survey report, drilling log, as-built drawing, pumping test report and handover file.',
      // Grade One: COMPANY_REGISTRATION; "Expert team": answer 2.1. T6 (D-195): the story ends on
      // what we do, not on a disclaimer; the "no promised yield" line stays on Environment and Terms
      'We are a Grade One registered contractor. Our staff are professional, friendly and dedicated to excellence, and at every stage we report what the ground and the tests show, so our clients decide with the facts.',
    ],
    factsTitle: 'Company at a glance',
    registrationTitle: 'Registration',
  },
  figures: {
    eyebrow: 'Track record',
    title: 'Liyat in figures',
  },
  // The client's vision and mission, in their order (copy review, 2026-11)
  missionVision: {
    eyebrow: 'Our direction',
    title: 'What we work for',
    intro: 'Reliable water for the institutions and businesses that depend on it.',
    items: [
      {
        title: 'Our vision',
        text: 'To become one of the top-ranking water-well drilling and construction companies in Ethiopia, recognised nationally for reliability, technical excellence and sustainable water solutions.',
      },
      {
        title: 'Our mission',
        text: 'To exceed our clients’ expectations with outstanding quality, personalised service and efficient project execution, delivered in a professional and understanding way.',
      },
    ],
  },
  // The client's core values and commitments (copy review, 2026-11); "most competitive market
  // rates" softened to "competitive", a claim no visitor can check (owner, 2026-11-03)
  values: {
    eyebrow: 'Our values',
    title: 'Our values and commitments',
    intro: 'What every client can expect from us, on every project.',
    items: [
      {
        title: 'Fair, affordable pricing',
        text: 'Competitive market rates, with no compromise on the quality or the long-term sustainability of the work.',
      },
      {
        title: 'Uncompromising quality',
        text: 'An expert approach and high engineering standards on every project site.',
      },
      {
        // Liyat's "Expert team" line, in place of a team section (D-122)
        title: 'Expert team',
        text: 'Our staff are professional, friendly, courteous and dedicated to excellence.',
      },
    ],
  },
  clients: {
    eyebrow: 'Our clients',
    title: 'Clients we work for',
    intro:
      'Our project record includes embassies, public institutions, development programmes and businesses across Ethiopia.',
  },
  // Liyat's own heading for the two firms it works with on groundwater investigation (D-174)
  partners: {
    eyebrow: 'Our partners',
    title: 'Partners for groundwater investigation',
  },
  safety: {
    eyebrow: 'Responsibility',
    title: 'Safety and site practice',
    intro: 'Care for the crew, the borehole and the ground around it is part of the job.',
    link: { label: 'See our safety & environmental practice', href: '/environment' },
  },
};
