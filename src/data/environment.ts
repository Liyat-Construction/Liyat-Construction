/**
 * Environment page copy (/environment). The environmental claims are grounded in
 * Liyat's service model, with surveys and testing tied to the agreed project scope.
 * Site practices are marked PLACEHOLDER(C-17) until the client confirms them.
 */

import type { EnvironmentPage } from '@/types/content';

export const ENVIRONMENT_PAGE: EnvironmentPage = {
  header: {
    eyebrow: 'Environment and safety',
    title: 'Water worth protecting',
    intro:
      'Responsible groundwater work means caring for the source, the people on site and the land around it.',
    image: {
      url: '/images/hero/water-column.webp',
      alt: 'A column of water rising beside a drilling rig during well development',
    },
    description:
      'Liyat Construction’s approach to groundwater, crew safety and responsible site practice, from the agreed scope of work to a clean handover.',
  },
  story: {
    eyebrow: 'Our responsibility',
    title: 'Responsible work, above and below ground',
    paragraphs: [
      'A well serves a client, but the groundwater it draws from is part of a wider resource. Understanding the ground and the well’s performance helps inform decisions about how that source is developed and used.',
      'Our work follows the agreed project scope, whether that includes a survey, drilling, pumping tests or installation. Alongside the technical work, we care for the people carrying it out and the ground around the borehole, with attention to site conditions, drilling materials and a clean handover.',
    ],
    image: {
      url: '/images/site/well-airlift-development.webp',
      alt: 'A Liyat rig carrying out well development on a site surrounded by grass and trees',
    },
  },
  groundwater: {
    eyebrow: 'Below ground',
    title: 'Care for the source',
    intro:
      'Survey findings and test results support informed decisions. Each is carried out when included in the agreed scope.',
    items: [
      {
        title: 'Site wells on evidence',
        text: 'When commissioned, hydrogeological and geophysical surveys help assess groundwater conditions and recommend drilling locations. They inform the decision to drill; they do not guarantee a water supply.',
      },
      {
        title: 'Understand the well’s performance',
        text: 'When pumping tests are part of the work, pumping rates, water levels and recovery are recorded. The results inform recommendations for operating the well and selecting a suitable pump.',
      },
    ],
  },
  practices: {
    eyebrow: 'On site',
    title: 'Care on the ground',
    intro: 'Care for the crew, the borehole and the surrounding land is part of the job.',
    items: [
      {
        title: 'Protect the crew',
        text: 'Safe work starts with attention to the people and conditions on site. Our approach includes protective equipment suited to the task, checks of the work area and coordination around rigs and moving equipment.',
      },
      // PLACEHOLDER(C-17): confirm fluid and cuttings handling practice
      {
        title: 'Contain fluid and cuttings',
        text: 'We manage drilling fluid and cuttings within the work area, with attention to nearby land and water. Containment and handling are planned around the site conditions, keeping the area around the borehole orderly.',
      },
      // PLACEHOLDER(C-17): confirm site restoration practice
      {
        title: 'Leave the site clean',
        text: 'Cleanup is part of finishing the work. We clear equipment, waste and temporary works from our work area before handing the site back, leaving it ready for the client’s next stage.',
      },
    ],
  },
};
