/**
 * Projects
 * Shown on the homepage (featured: true), /projects and /projects/[slug].
 * Images: sources in assets/images/projects/<slug>/, then `npm run images`.
 *
 * Source: the client-provided project list. Every project still needs its facts
 * (year, depth, yield, duration, result) and permission to name the client (C-11).
 */

import type { ImageAsset, Project, ProjectsPage, ServiceSlug } from '@/types/content';

const photo = (
  slug: string,
  file: string,
  alt: string,
  options?: Pick<ImageAsset, 'focus' | 'orientation'>
): ImageAsset => ({ url: `/images/projects/${slug}/${file}.webp`, alt, ...options });

// Most site photos are phone shots in portrait
const portrait = { orientation: 'portrait' } as const;
const portraitTop = { orientation: 'portrait', focus: 'top' } as const;

// PLACEHOLDER(C-11): confirm each project's facts and the permission to name its client
export const PROJECTS: Project[] = [
  {
    slug: 'ethiopian-airlines-pumping-test',
    title: 'Ethiopian Airlines pumping test',
    client: 'Ethiopian Airlines',
    location: 'Addis Ababa',
    summary:
      'Drilling and construction of two 500 m wells, with a pumping test confirming a yield of 40 litres per second.',
    description:
      'Drilling and construction of two 500 m wells in the Ethiopian Airlines compound, on behalf of Kibish Construction. The pumping test verified the capacity of the wells; the results gave the performance data needed for pump selection and the design of the distribution system.',
    image: photo(
      'ethiopian-airlines-pumping-test',
      'cover',
      'Water discharging during the pumping test for Ethiopian Airlines',
      portrait
    ),
    gallery: [
      photo(
        'ethiopian-airlines-pumping-test',
        'rig',
        'Liyat rig at the Ethiopian Airlines site with an aircraft overhead',
        portrait
      ),
    ],
    services: ['borehole-drilling', 'pumping-tests'],
    // Client proposal: drilling and construction of two 500 m wells in the Ethiopian
    // Airlines compound (main contractor Kibish Construction)
    depth: { value: '500', unit: 'm', label: 'Well depth' },
    // From the client's project list; confirm against the test report (C-11)
    yield: { value: '40', unit: 'L/s', label: 'Tested yield', water: true },
    featured: true,
  },
  {
    slug: 'british-embassy-pump-installation',
    title: 'British Embassy turnkey water project',
    client: 'British Embassy',
    location: 'Addis Ababa',
    summary:
      'A complete groundwater source: survey, a 250 m well, and a submersible pump connected to the tank.',
    description:
      'A turnkey project in the embassy compound: hydrogeological and geophysical investigation, drilling and construction of a 250 m well, and supply and installation of a submersible pump with all accessories, connected to the water tank.',
    image: photo(
      'british-embassy-pump-installation',
      'cover',
      'Pump installation works at the British Embassy, Addis Ababa',
      portraitTop
    ),
    gallery: [],
    services: [
      'hydrogeological-survey',
      'borehole-drilling',
      'pump-supply-installation',
      'turnkey-projects',
    ],
    // Client proposal: turnkey project, 250 m well
    depth: { value: '250', unit: 'm', label: 'Well depth' },
    featured: true,
  },
  {
    slug: 'tsedey-bank-pumping-test',
    title: 'Tsedey Bank pumping test',
    client: 'Tsedey Bank',
    location: 'Addis Ababa',
    summary: 'Drilling of a 200 m well and a pumping test for the bank’s head office water supply.',
    description:
      'Drilling of a 200 m well with 6-inch casing for the Tsedey Bank head office building, followed by a pumping test to confirm a sustainable yield: water-level monitoring, drawdown and recovery measurements, and a report for design and operational planning.',
    image: photo(
      'tsedey-bank-pumping-test',
      'cover',
      'Pumping test discharge at the Tsedey Bank site',
      portraitTop
    ),
    gallery: [],
    services: ['borehole-drilling', 'pumping-tests'],
    // Client proposal: drilling of 200 m with 6-inch casing, head office building
    depth: { value: '200', unit: 'm', label: 'Well depth' },
    featured: true,
  },
  {
    slug: 'sd-salt-manufacturing-afdera',
    title: 'Industrial water well at Afdera',
    client: 'SD Salt Manufacturing',
    location: 'Afdera, Afar Region',
    summary: 'Well drilling for a salt manufacturer’s industrial water demand in the Afar region.',
    description:
      'Drilling of a 100 m well with 6-inch casing for SD Salt Processing and Production at Afdera, supplying industrial water to a remote site in the Afar lowlands.',
    image: photo(
      'sd-salt-manufacturing-afdera',
      'cover',
      'Liyat drilling rig and support fleet at Afdera, Afar Region'
    ),
    gallery: [],
    services: ['borehole-drilling'],
    // Client proposal: drilling of 100 m with 6-inch casing
    depth: { value: '100', unit: 'm', label: 'Well depth' },
    featured: true,
  },
  {
    slug: 'yekatit-12-hospital-well-development',
    title: 'Yekatit 12 Hospital well development',
    client: 'Yekatit 12 Hospital Medical College',
    location: 'Addis Ababa',
    summary: 'A dedicated groundwater source for a teaching hospital.',
    description:
      'Drilling of a 400 m well with 14-inch and 10-inch casing at the 6kilo hospital campus, giving Yekatit 12 Hospital Medical College a dedicated groundwater source for its water demand.',
    image: photo(
      'yekatit-12-hospital-well-development',
      'cover',
      'Well development at Yekatit 12 Hospital Medical College',
      portrait
    ),
    gallery: [],
    services: ['borehole-drilling'],
    // Client proposal: 400 m drilling with 14" and 10" casing, 6kilo hospital
    depth: { value: '400', unit: 'm', label: 'Well depth' },
    featured: true,
  },
  {
    slug: 'chaka-house-project',
    title: 'Chaka House water well',
    client: 'Chaka House',
    location: 'Addis Ababa',
    summary: 'A 600 m well — the deepest on our completed list — for the Chaka House development.',
    description:
      'Drilling of a 600 m well with 14-inch, 10-inch and 6-inch casing for the Chaka House development, on behalf of Etoile General Contractor. At 600 m it is the deepest well on our completed-projects list.',
    image: photo(
      'chaka-house-project',
      'cover',
      'Liyat drilling rig on site at Chaka House',
      portrait
    ),
    gallery: [],
    services: ['borehole-drilling'],
    // Client proposal: 600 m, 14"/10" + 10"/6" casing — deepest well on the list
    depth: { value: '600', unit: 'm', label: 'Well depth' },
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
      'Water flowing from the artesian well near Entoto Kidanemihret Church',
      portrait
    ),
    gallery: [],
    services: ['borehole-drilling'],
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
      'Drilling rig lowered into the 14 m deep shored excavation for CREDOCS',
      portrait
    ),
    gallery: [
      photo('credocs-shoring', 'site-overview', 'Overview of the shored excavation'),
      photo(
        'credocs-shoring',
        'rig-in-excavation',
        'Liyat rig working at the base of the excavation',
        portrait
      ),
      photo('credocs-shoring', 'shoring-works', 'Shoring works and site cranes'),
    ],
    // PLACEHOLDER(C-09): shoring is not one of the six services until Liyat confirms it
    services: [],
    featured: false,
  },
];

// PLACEHOLDER(C-11): the intro describes the current list; check it when the facts arrive
export const PROJECTS_PAGE: ProjectsPage = {
  header: {
    eyebrow: 'Our work',
    title: 'Wells we have drilled, tested and equipped',
    intro:
      'For embassies, banks, colleges and developers. Each project lists only the facts we can document.',
    image: {
      url: '/images/hero/yekatit-12.webp',
      alt: 'Water rising from the new well during development at Yekatit 12 Medical College',
    },
    description:
      'Water well drilling, pumping test and pump installation projects by Liyat Construction for institutional and commercial clients in Ethiopia.',
  },
  clients: {
    eyebrow: 'Our clients',
    title: 'Clients we have worked for',
  },
  detail: {
    overview: 'About the project',
    approach: 'Approach',
    result: 'Result',
    facts: 'Project facts',
    factLabels: {
      client: 'Client',
      location: 'Location',
      year: 'Year',
      services: 'Services',
      duration: 'Duration',
    },
    gallery: { title: 'Photos from the site' },
    related: 'Related projects',
    allProjects: { label: 'Explore all projects', href: '/projects' },
    contact: { label: 'Discuss a similar project', href: '/#contact' },
  },
};

/** Newest first; projects without a year (C-11) keep their order, after the dated ones. */
export const PROJECTS_NEWEST_FIRST = [...PROJECTS].sort((a, b) => (b.year ?? 0) - (a.year ?? 0));

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured).slice(0, 6);

/** Projects that included the given service, featured first. */
export function getProjectsByService(slug: ServiceSlug): Project[] {
  return PROJECTS.filter((project) => project.services.includes(slug)).sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );
}

/** Other projects that share a service with this one, featured first. */
export function getRelatedProjects(project: Project): Project[] {
  return PROJECTS.filter(
    (other) =>
      other.slug !== project.slug && other.services.some((slug) => project.services.includes(slug))
  ).sort((a, b) => Number(b.featured) - Number(a.featured));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
