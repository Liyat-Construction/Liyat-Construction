/**
 * Projects
 * Shown on the homepage (featured: true), /projects and /projects/[slug].
 * Put images in public/projects/ and reference them as '/projects/file.jpg'.
 *
 * NOTE: Project details below are based on the client-provided project list.
 * Descriptions, dates, and imagery must be verified and approved by Liyat Construction
 * before the site is published.
 */

import type { Project } from '@/types/content';

const placeholderImage = { url: '/placeholders/project.svg', alt: 'Project image placeholder' };

export const PROJECTS: Project[] = [
  {
    title: 'Tsedey Bank Pumping Test',
    slug: 'tsedey-bank-pumping-test',
    client: 'Tsedey Bank',
    location: 'Addis Ababa, Ethiopia',
    summary:
      'Pumping test and performance evaluation to support the bank’s water supply system requirements.',
    description:
      'Liyat Construction PLC conducted a pumping test for Tsedey Bank to evaluate well performance and confirm sustainable yield for the bank’s water supply system. The work included water-level monitoring, drawdown and recovery measurements, and a technical report suitable for design and operational planning.',
    image: placeholderImage,
    gallery: [],
    tags: ['Pumping Test', 'Hydrogeological Evaluation'],
    featured: true,
  },
  {
    title: 'Deep Shoring for CREDOCKS Digital Service',
    slug: 'credocks-digital-service-shoring',
    client: 'CREDOCKS Digital Service',
    location: 'Addis Ababa, Ethiopia',
    summary: 'Lowering and shoring works to 14 meters for a digital-service facility project.',
    description:
      'For CREDOCKS Digital Service, Liyat performed rig lowering and shoring work to a depth of 14 meters. The project required controlled excavation support and careful coordination with the client’s construction team to maintain safety and schedule.',
    image: placeholderImage,
    gallery: [],
    tags: ['Shoring', 'Excavation Support'],
    featured: true,
  },
  {
    title: 'Chaka House Project',
    slug: 'chaka-house-project',
    client: 'Chaka House',
    location: 'Addis Ababa, Ethiopia',
    summary: 'Groundwater and water-supply works for the Chaka House development.',
    description:
      'Liyat provided groundwater development and water-supply services for the Chaka House project. The scope included well construction and related water works to support the property’s operational water needs.',
    image: placeholderImage,
    gallery: [],
    tags: ['Well Development', 'Water Supply'],
    featured: true,
  },
  {
    title: 'SD Salt Manufacturing Well Development',
    slug: 'sd-salt-manufacturing-afdera',
    client: 'SD Salt Manufacturing',
    location: 'Afdera, Afar Region, Ethiopia',
    summary: 'Groundwater development works for salt manufacturing operations in the Afar region.',
    description:
      'Liyat executed groundwater development works for SD Salt Manufacturing at Afdera in the Afar region. The project involved drilling and well-development activities to support industrial water demand in a remote and challenging environment.',
    image: placeholderImage,
    gallery: [],
    tags: ['Well Drilling', 'Industrial Water'],
    featured: true,
  },
  {
    title: 'Entoto Artesian Flowing Well',
    slug: 'entoto-artesian-well',
    client: 'Kidanemihret Church Area Development',
    location: 'Addis Ababa, Ethiopia',
    summary: 'Artesian flowing well development near Entoto Kidanemihret Church.',
    description:
      'Liyat developed an artesian flowing well in the Entoto area near Kidanemihret Church. The project tapped natural artesian pressure to produce a flowing water source for local use.',
    image: placeholderImage,
    gallery: [],
    tags: ['Artesian Well', 'Well Development'],
    featured: true,
  },
  {
    title: 'Yekatit 12 Hospital Medical College Well Development',
    slug: 'yekatit-12-hospital-well-development',
    client: 'Yekatit 12 Hospital Medical College',
    location: 'Addis Ababa, Ethiopia',
    summary: 'Well development and water-supply works for a major hospital medical college.',
    description:
      'Liyat carried out well development works for Yekatit 12 Hospital Medical College, supporting the institution’s water demand with a dedicated groundwater source and related water-works infrastructure.',
    image: placeholderImage,
    gallery: [],
    tags: ['Well Development', 'Institutional Water'],
    featured: true,
  },
  {
    title: 'Ethiopian Airlines Pumping Test',
    slug: 'ethiopian-airlines-pumping-test',
    client: 'Ethiopian Airlines',
    location: 'Addis Ababa, Ethiopia',
    summary: 'Pumping test confirming a 40-litre-per-second yield for Ethiopian Airlines.',
    description:
      'Liyat performed a pumping test for Ethiopian Airlines to verify well capacity at 40 litres per second. The test provided the performance data needed for pump selection and distribution system design at the client’s facility.',
    image: placeholderImage,
    gallery: [],
    tags: ['Pumping Test', 'High-Capacity Well'],
    featured: true,
  },
  {
    title: 'British Embassy Pump Installation',
    slug: 'british-embassy-pump-installation',
    client: 'British Embassy',
    location: 'Addis Ababa, Ethiopia',
    summary: 'Pump installation and electromechanical works for the British Embassy.',
    description:
      'Liyat completed pump installation and electromechanical works for the British Embassy in Addis Ababa. The project involved selecting, installing, and commissioning pumping equipment to meet the embassy’s operational water requirements.',
    image: placeholderImage,
    gallery: [],
    tags: ['Pump Installation', 'Electromechanical'],
    featured: true,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured).slice(0, 6);

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
