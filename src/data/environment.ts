/**
 * Environment page copy (/environment). The environmental claims are grounded in
 * Liyat's own service model — survey before drilling, testing before handover.
 * Site practices are marked PLACEHOLDER(C-17) until the client confirms them.
 */

import type { EnvironmentPage } from '@/types/content';

export const ENVIRONMENT_PAGE: EnvironmentPage = {
  header: {
    eyebrow: 'Environment',
    title: 'Water worth protecting',
    intro:
      'Groundwater is a shared resource. We survey before we drill, and we leave every site ready for the people who live on it.',
    image: {
      url: '/images/hero/water-column.webp',
      alt: 'A column of water rising beside a drilling rig during well development',
    },
    description:
      'How Liyat Construction cares for groundwater and the land it works on: survey-led drilling, responsible site practice and tested, documented wells.',
  },
  story: {
    eyebrow: 'Our responsibility',
    title: 'The resource we sell is the one we protect',
    paragraphs: [
      'Every Liyat project starts below the ground. A hydrogeological survey tells us where the water is, how much of it there is and how fast it returns — so a well is sited on evidence, not on hope. That is how a source keeps giving water for years instead of draining the aquifer it draws from.',
      'A water project does not end when the rig leaves. What happens to the land, the drilling fluid and the community around the well matters as much as the yield, so we plan for them from day one.',
    ],
    statement:
      'We survey before we drill, we test before we hand over, and we leave each site ready for the people who live on it.',
  },
  practices: {
    eyebrow: 'On site',
    title: 'How we work on the ground',
    intro: 'The practices our teams follow on every project.',
    items: [
      {
        title: 'Survey before drilling',
        text: 'Every well starts with a hydrogeological and geophysical survey, so boreholes are sited on evidence and sized to what the aquifer can sustain.',
      },
      // PLACEHOLDER(C-17): confirm fluid and cuttings handling practice
      {
        title: 'Drilling fluid and cuttings',
        text: 'Drilling fluid and cuttings are contained on site and disposed of responsibly, keeping the ground around the borehole clean.',
      },
      // PLACEHOLDER(C-17): confirm site restoration practice
      {
        title: 'Clean handover',
        text: 'Equipment, waste and temporary works are cleared before handover, leaving the site ready for the community to use.',
      },
      {
        title: 'Tested, not assumed',
        text: 'Every well is pump-tested and documented before handover, so its yield is proven rather than promised.',
      },
    ],
  },
};
