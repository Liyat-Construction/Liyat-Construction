/**
 * About Content
 * ABOUT_SUMMARY  → the short About section on the homepage
 * ABOUT_PAGE_SECTIONS → the full /about page
 */

import type { AboutSummary } from '@/types/content';

export const ABOUT_SUMMARY: AboutSummary = {
  title: 'Water Works Built on Experience',
  summary:
    'Liyat Construction PLC is an Ethiopian groundwater development and water-well engineering contractor. We combine hydrogeological insight, modern drilling capability, and disciplined execution to deliver water systems that meet the demands of institutions, commercial developments, and communities.',
  buttonText: 'Discover Our Story',
};

export const ABOUT_PAGE_SECTIONS = {
  whoWeAre: {
    sectionLabel: 'Who we are',
    headline: 'Liyat Construction PLC',
    body: 'Liyat Construction PLC is an Ethiopian company operating in groundwater development, water-well drilling, and related water works. We serve government ministries, international organizations, embassies, commercial businesses, and property developers who need reliable water systems and technically sound execution.',
    origin: '[Company origin story to be supplied and approved for publication.]',
  },

  whatWeBuild: {
    sectionLabel: 'What we offer',
    headline: 'Full-cycle groundwater and water-well services',
    intro:
      'We manage the entire water-well lifecycle — from initial subsurface investigation and drilling to pump installation, testing, and ongoing rehabilitation. Our work is shaped by the technical standards and delivery discipline required by institutional clients.',
    dimensions: [
      {
        roman: 'I',
        title: 'Investigate',
        body: 'Hydrogeological and geophysical investigations to identify viable water sources and inform drilling decisions.',
      },
      {
        roman: 'II',
        title: 'Drill',
        body: 'Deep and shallow well drilling executed with appropriate rigs, casing, and well-development techniques.',
      },
      {
        roman: 'III',
        title: 'Equip',
        body: 'Pumping tests, pump installation, electromechanical works, and wellhead construction for operational systems.',
      },
    ],
  },

  theRealPurpose: {
    sectionLabel: 'The real purpose',
    headline: 'Reliable water access for organizations that depend on it',
    body: 'Our purpose is to help institutions and businesses across Ethiopia access dependable groundwater solutions. We believe that effective water infrastructure starts with accurate subsurface understanding, continues with disciplined construction, and ends with systems that operate reliably over time.',
    pullQuote: 'Every successful well begins with understanding the ground beneath it.',
    bodyAfterQuote:
      'This focus on investigation, precision, and long-term performance is what distinguishes our approach and what our clients rely on when they present our work to their own stakeholders.',
  },

  whatWeBelieve: {
    sectionLabel: 'What we believe',
    headline: 'How we work',
    intro:
      'Our operating principles reflect the expectations of the institutional and commercial clients we serve.',
    beliefs: [
      {
        lead: 'Technical accuracy first.',
        body: 'We invest in proper hydrogeological assessment before drilling so that our clients make decisions based on evidence, not assumptions.',
      },
      {
        lead: 'Disciplined execution.',
        body: 'Projects are planned, staffed, and supervised with the standards required by large institutions and funded developments.',
      },
      {
        lead: 'Long-term performance.',
        body: 'We design and build wells and water systems that continue to perform — and we support clients with rehabilitation and maintenance when needed.',
      },
    ],
  },

  whoBuildFor: {
    sectionLabel: 'Who we serve',
    headline: 'Built for institutional and commercial water demand',
    body: 'We work with government agencies, foreign embassies, international NGOs, hospitals, manufacturers, property developers, and commercial enterprises that need professional groundwater development and water works in Ethiopia.',
    closing:
      'If your project requires dependable water access and a contractor who understands institutional standards, we should talk.',
  },
} as const;
