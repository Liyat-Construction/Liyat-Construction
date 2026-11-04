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
    // The client's hero statement (copy review, 2026-11)
    intro: 'Expert hydrogeology paired with advanced drilling technology across Ethiopia.',
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
      // The client's story, exactly as written in their copy review (owner, 2026-11-03)
      'Founded in 2019 as Wondwossen Water Well Drilling Contractor and renamed Liyat Construction PLC in May 2022, we help meet Ethiopia’s growing demand for domestic water supply and agricultural development through groundwater. Our founder and General Manager, Wondwossen Ayalew, is a hydrogeologist with more than 20 years of drilling experience in the sector. Driven by a shortage of qualified groundwater development companies, Liyat Construction PLC was established to contribute high-grade engineering solutions to the country’s growth.',
    ],
    factsTitle: 'Company at a glance',
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
        text: 'To become one of the top-ranking water-well drilling and construction companies in Ethiopia, recognized nationally for reliability, technical excellence and sustainable water solutions.',
      },
      {
        title: 'Our mission',
        text: 'To exceed our clients’ expectations with outstanding quality, personalized service and efficient project execution, delivered in a professional and understanding way.',
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
  safety: {
    eyebrow: 'Responsibility',
    title: 'Safety and site practice',
    intro: 'Care for the crew, the borehole and the ground around it is part of the job.',
    link: { label: 'See our environmental practice', href: '/environment' },
  },
};
