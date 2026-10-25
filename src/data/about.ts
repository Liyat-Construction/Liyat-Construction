/**
 * /about copy, in section order (Design System §4). Figures, facts, team,
 * credentials and safety practice come from company.ts.
 * The offer, audience and purpose sections are kept from the template (D-50).
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
      url: '/images/hero/afar-rig-fleet.webp',
      alt: 'Liyat drilling rig, compressors and support trucks on site in the Afar region',
    },
  },
  story: {
    eyebrow: 'Our story',
    title: 'Liyat Construction PLC',
    paragraphs: [
      // The company description, used unchanged (Brand §10)
      'Liyat Construction is a groundwater development company specializing in water well drilling and engineering. We take water projects from hydrogeological survey through drilling, well construction and testing to pump installation, and we document every stage for our clients. Our work is built to keep water flowing for years.',
      // From the client proposal: established January 2, 2019 as Wondwossen Ayalew water
      // well drilling contractor; renamed Liyat Construction PLC in May 2022
      'The company was established on 2 January 2019 by Wondwossen Ayalew, a hydrogeologist who had already spent 19 years leading drilling operations for other contractors. In May 2022 it became Liyat Construction PLC, founded to answer a simple gap: Ethiopia’s growing demand for groundwater against a shortage of drilling capacity.',
    ],
    factsTitle: 'Company at a glance',
  },
  figures: {
    eyebrow: 'Track record',
    title: 'Liyat in figures',
  },
  offer: {
    eyebrow: 'What we offer',
    title: 'The whole life of a water well',
    intro:
      'From the first study of the ground to a working pump. Take one stage, or let us run the complete project.',
    items: [
      {
        title: 'Investigate',
        text: 'Hydrogeological and geophysical surveys that find a viable water source and decide where to drill.',
      },
      {
        title: 'Drill',
        text: 'Well drilling, casing and well development, with a rig suited to the ground and the depth.',
      },
      {
        title: 'Equip',
        text: 'Pumping tests, borehole rehabilitation, and pump supply and installation with the electromechanical works.',
      },
    ],
    link: { label: 'See all six services', href: '/#services' },
  },
  audience: {
    eyebrow: 'Who we serve',
    title: 'Built for institutional and commercial water demand',
    paragraphs: [
      // Confirmed by the client proposal's project list: a teaching hospital (Yekatit 12)
      // and a manufacturer (SD Salt) are among the completed clients (C-28 answered)
      'We work for government ministries, embassies, hospitals, manufacturers, real-estate developers and international programmes that need groundwater developed in Ethiopia.',
      'If your project needs a dependable water source and a contractor who works to institutional standards, we should talk.',
    ],
    action: { label: 'Contact us', href: '/#contact' },
  },
  purpose: {
    eyebrow: 'Our purpose',
    title: 'Reliable water for organizations that depend on it',
    paragraphs: [
      'A well is only as good as the understanding of the ground beneath it. We start with the survey, build with discipline, and hand over a source that keeps working.',
      'Our clients present our reports to their own engineers, funders and boards. So every stage ends with a document they can check.',
    ],
    statement: 'Every successful well begins with understanding the ground beneath it.',
  },
  // PLACEHOLDER(C-09): Liyat confirms each principle describes what it actually does
  principles: {
    eyebrow: 'How we work',
    title: 'Principles we can show on every project',
    items: [
      {
        title: 'Survey before we drill',
        text: 'We study the ground before choosing a site, so the drilling decision rests on evidence.',
      },
      {
        title: 'Test before we hand over',
        text: 'Every well is pumping-tested, and the client receives the results.',
      },
      {
        title: 'Document every stage',
        text: 'Survey report, drilling log, test report and handover file: a record your engineers can check.',
      },
    ],
  },
  team: {
    eyebrow: 'Our people',
    title: 'Leadership and team',
  },
  credentials: {
    eyebrow: 'Credentials',
    title: 'Licences and registration',
    intro: 'Copies are available on request.',
  },
  safety: {
    eyebrow: 'Responsibility',
    title: 'Safety and site practice',
    intro: 'How we protect the crew, the water and the land on every site.',
  },
};
