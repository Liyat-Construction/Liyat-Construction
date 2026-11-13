/**
 * Environment page copy (/environment). The environmental claims are grounded in
 * Liyat's service model, with surveys and testing tied to the agreed project scope.
 * Liyat confirmed the three site practices in his written answers.
 */

import type { EnvironmentPage } from '@/types/content';

export const ENVIRONMENT_PAGE: EnvironmentPage = {
  header: {
    // "Safety & Environment" in the menu, eyebrow and title (D-152, owner 2026-11-08)
    eyebrow: 'Safety & Environment',
    title: 'Safe crews, protected water',
    metaTitle: 'Environment and Safety Practice',
    intro:
      'Responsible groundwater work means caring for the source, the people on site and the land around it.',
    image: {
      url: '/images/hero/yekatit-12.webp',
      alt: 'A jet of water rising beside a Liyat drilling rig during well development, among trees',
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
      // Tall photo in a landscape card: keeps the top of the water jet in view
      focus: 'top',
    },
  },
  groundwater: {
    eyebrow: 'Below ground',
    title: 'Care for the source',
    intro:
      'Survey findings and test results support informed decisions. Each is carried out when included in the agreed scope.',
    items: [
      // A survey only when the client asks for one: no promise on every job (D-117, D-152)
      {
        title: 'Choosing where to drill',
        text: 'When a client asks for a survey, its hydrogeological and geophysical findings guide where the well goes. A survey improves the odds of finding water, and we explain what it shows and what it cannot show, because every site is different.',
      },
      {
        title: 'Knowing what the well can give',
        text: 'When a pumping test is part of the work, we record pumping rates, water levels and recovery. The results show how hard the well can be pumped and which pump suits it. Every well is different, so we report what the tests show and never promise a yield in advance.',
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
      {
        title: 'Contain fluid and cuttings',
        text: 'We manage drilling fluid and cuttings within the work area, with attention to nearby land and water. Containment and handling are planned around the site conditions, keeping the area around the borehole orderly.',
      },
      {
        title: 'Leave the site clean',
        text: 'Cleanup is part of finishing the work. We clear equipment, waste and temporary works from our work area before handing the site back, leaving it ready for the client’s next stage.',
      },
    ],
  },
};
