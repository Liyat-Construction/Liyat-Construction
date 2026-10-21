/**
 * Projects
 * Shown on the homepage (featured: true), /projects and /projects/[slug].
 * Images: sources in assets/images/projects/<slug>/, then `npm run images`.
 *
 * Source: the client-provided project list. Every project still needs its facts
 * (year, depth, yield, duration, result) and permission to name the client (C-11).
 */

import type { ImageAsset, Project, ServiceSlug } from '@/types/content';

const photo = (slug: string, file: string, alt: string, focus?: ImageAsset['focus']) => ({
  url: `/images/projects/${slug}/${file}.webp`,
  alt,
  ...(focus && { focus }),
});

// PLACEHOLDER(C-11): confirm each project's facts and the permission to name its client
export const PROJECTS: Project[] = [
  {
    slug: 'ethiopian-airlines-pumping-test',
    title: 'Ethiopian Airlines pumping test',
    client: 'Ethiopian Airlines',
    location: 'Addis Ababa',
    summary: 'Pumping test confirming a yield of 40 litres per second.',
    description:
      'A pumping test to verify the capacity of the well at the Ethiopian Airlines facility. The results gave the performance data needed for pump selection and the design of the distribution system.',
    image: photo(
      'ethiopian-airlines-pumping-test',
      'cover',
      'Water discharging during the pumping test for Ethiopian Airlines'
    ),
    gallery: [
      photo(
        'ethiopian-airlines-pumping-test',
        'rig',
        'Liyat rig at the Ethiopian Airlines site with an aircraft overhead'
      ),
    ],
    services: ['pumping-tests'],
    // From the client's project list; confirm against the test report (C-11)
    yield: { value: '40', unit: 'L/s', label: 'Tested yield', water: true },
    featured: true,
  },
  {
    slug: 'british-embassy-pump-installation',
    title: 'British Embassy pump installation',
    client: 'British Embassy',
    location: 'Addis Ababa',
    summary: 'Pump installation and electromechanical works for the embassy’s water supply.',
    description:
      'Selection, installation and commissioning of the pumping equipment for the British Embassy in Addis Ababa, sized to the embassy’s operational water demand.',
    image: photo(
      'british-embassy-pump-installation',
      'cover',
      'Pump installation works at the British Embassy, Addis Ababa',
      'top'
    ),
    gallery: [],
    services: ['pump-installation'],
    featured: true,
  },
  {
    slug: 'tsedey-bank-pumping-test',
    title: 'Tsedey Bank pumping test',
    client: 'Tsedey Bank',
    location: 'Addis Ababa',
    summary: 'Pumping test and performance evaluation for the bank’s water supply.',
    description:
      'A pumping test to evaluate the well and confirm a sustainable yield for the bank’s water supply. The work covered water-level monitoring, drawdown and recovery measurements, and a report for design and operational planning.',
    image: photo(
      'tsedey-bank-pumping-test',
      'cover',
      'Pumping test discharge at the Tsedey Bank site',
      'top'
    ),
    gallery: [],
    services: ['pumping-tests'],
    featured: true,
  },
  {
    slug: 'sd-salt-manufacturing-afdera',
    title: 'Industrial water well at Afdera',
    client: 'SD Salt Manufacturing',
    location: 'Afdera, Afar Region',
    summary: 'Well drilling for a salt manufacturer’s industrial water demand in the Afar region.',
    description:
      'Drilling and well development for SD Salt Manufacturing at Afdera, supplying industrial water to a remote site in the Afar lowlands.',
    image: photo(
      'sd-salt-manufacturing-afdera',
      'cover',
      'Liyat drilling rig and support fleet at Afdera, Afar Region'
    ),
    gallery: [],
    services: ['well-drilling'],
    featured: true,
  },
  {
    slug: 'yekatit-12-hospital-well-development',
    title: 'Yekatit 12 Hospital well development',
    client: 'Yekatit 12 Hospital Medical College',
    location: 'Addis Ababa',
    summary: 'A dedicated groundwater source for a teaching hospital.',
    description:
      'Well development for Yekatit 12 Hospital Medical College, giving the hospital a dedicated groundwater source for its water demand.',
    image: photo(
      'yekatit-12-hospital-well-development',
      'cover',
      'Well development at Yekatit 12 Hospital Medical College'
    ),
    gallery: [],
    services: ['well-drilling'],
    featured: true,
  },
  {
    slug: 'chaka-house-project',
    title: 'Chaka House water well',
    client: 'Chaka House',
    location: 'Addis Ababa',
    summary: 'Well construction for the water supply of the Chaka House development.',
    description:
      'Well construction and related water works for the Chaka House development, supplying the property’s operational water demand.',
    image: photo('chaka-house-project', 'cover', 'Liyat drilling rig on site at Chaka House'),
    gallery: [],
    services: ['well-drilling'],
    featured: false,
  },
  {
    slug: 'entoto-artesian-well',
    title: 'Entoto artesian flowing well',
    // PLACEHOLDER(C-11): client name not in the project list
    client: 'Client name (C-11)',
    location: 'Entoto, Addis Ababa',
    summary: 'An artesian well near Entoto Kidanemihret Church that flows without a pump.',
    description:
      'A well drilled into a confined aquifer in the Entoto area, near Kidanemihret Church. Natural artesian pressure brings the water to the surface without a pump.',
    image: photo(
      'entoto-artesian-well',
      'cover',
      'Water flowing from the artesian well near Entoto Kidanemihret Church'
    ),
    gallery: [],
    services: ['well-drilling'],
    featured: false,
  },
  {
    slug: 'credocs-shoring',
    // PLACEHOLDER(C-23): "CREDOCS" or "CREDOCKS"
    title: 'CREDOCS deep excavation shoring',
    client: 'CREDOCS Digital Service',
    location: 'Addis Ababa',
    summary: 'Shoring for a 14 m deep excavation, with the rig lowered to work at its base.',
    description:
      'Rig lowering and shoring works to a depth of 14 metres for a CREDOCS Digital Service building. The work required controlled excavation support and close coordination with the client’s construction team.',
    image: photo(
      'credocs-shoring',
      'cover',
      'Drilling rig lowered into the 14 m deep shored excavation for CREDOCS'
    ),
    gallery: [
      photo('credocs-shoring', 'site-overview', 'Overview of the shored excavation'),
      photo(
        'credocs-shoring',
        'rig-in-excavation',
        'Liyat rig working at the base of the excavation'
      ),
      photo('credocs-shoring', 'shoring-works', 'Shoring works and site cranes'),
    ],
    // PLACEHOLDER(C-09): shoring is not one of the six services until Liyat confirms it
    services: [],
    featured: false,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured).slice(0, 6);

/** Projects that included the given service, featured first. */
export function getProjectsByService(slug: ServiceSlug): Project[] {
  return PROJECTS.filter((project) => project.services.includes(slug)).sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
