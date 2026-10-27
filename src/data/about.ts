/**
 * /about copy, in section order (PROJECT.md §7). Figures, facts, team,
 * and safety practice come from company.ts; clients come from partners.ts.
 * The structure follows the owner's About plan (D-101).
 */

import type { AboutPage } from '@/types/content';

export const ABOUT_PAGE: AboutPage = {
  header: {
    eyebrow: 'Who we are',
    title: 'Groundwater engineering, from survey to handover',
    // From Liyat's brochure (founded 2019; founder and General Manager a hydrogeologist with 19 years of drilling experience)
    intro: 'Founded in 2019 and led by a hydrogeologist with 19 years of drilling experience.',
    description:
      'Liyat Construction PLC is an Ethiopian groundwater development and water-well engineering contractor for public bodies, embassies, NGOs, institutions and commercial clients.',
    image: {
      url: '/images/hero/ethiopian-airlines.webp',
      alt: 'Drilling rig and water discharge during a pumping test at Ethiopian Airlines',
    },
  },
  story: {
    eyebrow: 'Our story',
    title: 'Drilling experience became a company of its own',
    paragraphs: [
      // From Liyat's proposal: founder, experience and the gap in drilling capacity (C-08 answered)
      'Wondwossen Ayalew, a hydrogeologist with 19 years of experience leading drilling operations, established the business on 2 January 2019. Ethiopia’s demand for groundwater was growing faster than its drilling capacity. He started the company to help meet that demand.',
      // From the client proposal: established January 2, 2019 as Wondwossen Ayalew water
      // well drilling contractor; renamed Liyat Construction PLC in May 2022
      'In May 2022, the business became Liyat Construction PLC. Today, our in-house drilling, pumping-test and electromechanical teams take projects from investigation through well construction to pump installation. Each team handles its stage of the work, with a documented record for the client at handover.',
    ],
    factsTitle: 'Company at a glance',
  },
  figures: {
    eyebrow: 'Track record',
    title: 'Liyat in figures',
  },
  // PLACEHOLDER(C-34): Liyat approves or rewrites the drafted mission and vision
  missionVision: {
    eyebrow: 'Our direction',
    title: 'What we work for',
    intro: 'Reliable water for the institutions and businesses that depend on it.',
    items: [
      {
        title: 'Our mission',
        text: 'Develop dependable groundwater sources through careful surveys, well construction and pumping tests, giving clients a documented basis for using and managing their water supply.',
      },
      {
        title: 'Our vision',
        text: 'An Ethiopia where institutions and businesses can plan around a reliable water source, with wells built on sound knowledge of the ground and proven performance.',
      },
    ],
  },
  // PLACEHOLDER(C-34): Liyat confirms these values and the practices they describe
  values: {
    eyebrow: 'Our values',
    title: 'The decisions behind every well',
    intro:
      'From choosing a drilling site to handing over the test results, these are the standards we work to.',
    items: [
      {
        title: 'Evidence',
        text: 'When a survey is part of the work, its hydrogeological and geophysical findings decide where we drill.',
      },
      {
        title: 'Proof',
        text: 'When we pumping-test a well, the client receives the results before handover.',
      },
      {
        title: 'Transparency',
        text: 'Survey reports, drilling logs and test reports let the client check how the well was built.',
      },
      {
        title: 'Safety',
        text: 'We plan drilling work around the safety of the crew and the people near the site.',
      },
      {
        title: 'Reliability',
        text: 'We set realistic schedules for drilling, testing and installation, and explain changes to the client.',
      },
      {
        title: 'Responsibility',
        text: 'We contain drilling fluid and cuttings and clear the site when the well is handed over.',
      },
    ],
  },
  clients: {
    eyebrow: 'Our clients',
    title: 'Clients we work for',
    intro:
      'Our project record includes embassies, public institutions, development programmes and businesses across Ethiopia.',
  },
  team: {
    eyebrow: 'Our people',
    title: 'Leadership and team',
  },
  safety: {
    eyebrow: 'Responsibility',
    title: 'Safety and site practice',
    intro: 'Care for the crew, the borehole and the ground around it is part of the job.',
    link: { label: 'See our environmental practice', href: '/environment' },
  },
};
