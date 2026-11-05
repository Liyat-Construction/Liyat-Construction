/**
 * Projects
 * Shown on the homepage (featured: true) and /projects (list only — D-60). The photo
 * gallery renders under the cards.
 * Images: sources in assets/images/projects/<slug>/, then `npm run images`.
 *
 * Source: Liyat's completed-project list (proposal, December 2025). Naming the clients
 * is treated as granted and extra facts are not requested (owner, 2026-10-27).
 */

import type { ImageAsset, Project, ProjectsPage, ServiceSlug } from '@/types/content';

const photo = (
  slug: string,
  file: string,
  alt: string,
  options?: Pick<ImageAsset, 'focus'>
): ImageAsset => ({ url: `/images/projects/${slug}/${file}.webp`, alt, ...options });

// Keeps the top of a tall phone shot in view when a card crops it
const top = { focus: 'top' } as const;

export const PROJECTS: Project[] = [
  {
    slug: 'ethiopian-airlines-pumping-test',
    title: 'Two wells for the airline compound',
    scope: 'Drilling · Pumping test · Pump installation',
    client: 'Ethiopian Airlines',
    location: 'Addis Ababa',
    summary:
      'Drilling and construction of two 500 m wells, with a pumping test confirming a yield of 40 litres per second.',
    // The client's copy review (2026-11) adds the pump installations and well development
    description:
      'Drilling, pumping tests, pump installation and well development for two 500 m wells in the Ethiopian Airlines compound, on behalf of Kibish Construction. The pumping test verified the capacity of the wells and gave the performance data for pump selection and the design of the distribution system.',
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
    services: ['deep-shallow-water-well-drilling', 'pumping-tests', 'pump-supply-installation'],
    // Client proposal: drilling and construction of two 500 m wells in the Ethiopian
    // Airlines compound (main contractor Kibish Construction)
    depth: { value: '500', unit: 'm', label: 'Well depth' },
    // From the client's project list; confirm against the test report (C-11)
    yield: { value: '40', unit: 'L/s', label: 'Tested yield', water: true },
    featured: true,
  },
  {
    slug: 'british-embassy-pump-installation',
    title: 'A turnkey groundwater source',
    scope: 'Survey · Drilling · Pump and tank connection',
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
      top
    ),
    gallery: [],
    services: [
      'hydrogeological-geophysical-survey',
      'deep-shallow-water-well-drilling',
      'pump-supply-installation',
      'turnkey-water-projects',
    ],
    // Client proposal: turnkey project, 250 m well
    depth: { value: '250', unit: 'm', label: 'Well depth' },
    featured: true,
  },
  {
    slug: 'chaka-house-project',
    title: 'Our deepest completed well',
    scope: 'Drilling · Well construction',
    client: 'Chaka House',
    location: 'Addis Ababa',
    summary: 'A 600 m well — the deepest on our completed list — for the Chaka House development.',
    description:
      'Drilling of a 600 m well with 14-inch, 10-inch and 6-inch casing for the Chaka House development, on behalf of Etoile General Contractor. At 600 m it is the deepest well on our completed-projects list.',
    // 'upper' keeps both the top of the mast and the truck wheels in the card
    image: photo('chaka-house-project', 'cover', 'Liyat drilling rig on site at Chaka House', {
      focus: 'upper',
    }),
    gallery: [],
    services: ['deep-shallow-water-well-drilling'],
    // Client proposal: 600 m, 14"/10" + 10"/6" casing — deepest well on the list
    depth: { value: '600', unit: 'm', label: 'Well depth' },
    // Liyat's written answers: Chaka House replaces Tsedey Bank as Home's third project
    featured: true,
  },
  {
    slug: 'tsedey-bank-pumping-test',
    title: 'A well for the head office',
    scope: 'Drilling · Pumping test',
    client: 'Tsedey Bank',
    location: 'Addis Ababa',
    summary: 'Drilling of a 200 m well and a pumping test for the bank’s head office water supply.',
    description:
      'Drilling of a 200 m well with 6-inch casing for the Tsedey Bank head office building, followed by a pumping test to confirm a sustainable yield: water-level monitoring, drawdown and recovery measurements, and a report for design and operational planning.',
    image: photo(
      'tsedey-bank-pumping-test',
      'cover',
      'Pumping test discharge at the Tsedey Bank site',
      top
    ),
    gallery: [],
    services: ['deep-shallow-water-well-drilling', 'pumping-tests'],
    // Client proposal: drilling of 200 m with 6-inch casing, head office building
    depth: { value: '200', unit: 'm', label: 'Well depth' },
    featured: false,
  },
  {
    slug: 'ovid-real-estate-turnkey-wells',
    title: 'Two deep wells for a residential development',
    // The name Liyat gave with the photo; his profile says Ovid Real Estate (D-121)
    client: 'Ovid Group',
    // Liyat's follow-up answers (2026-11-05): Kings Tower at Arat Kilo is this project
    location: 'Arat Kilo, Addis Ababa',
    summary: 'Turnkey groundwater works with two 500 m wells for the real estate development.',
    scope: 'Turnkey works · Two wells · Pump installation',
    description:
      'A turnkey project for Ovid Group’s Kings Tower development at Arat Kilo: two 500 m wells with 10-inch and 6-inch casing, and the installation of the pump.',
    // Liyat's photos, named "Ovid Realestate Kings Tower Project pump installation"
    image: photo(
      'ovid-real-estate-turnkey-wells',
      'cover',
      'A crane lowering a submersible pump into the well at Kings Tower, Arat Kilo'
    ),
    imageCaption: 'Pump installation at Kings Tower, Arat Kilo',
    gallery: [
      photo(
        'ovid-real-estate-turnkey-wells',
        'pump-crane',
        'Crane lifting the pump over the well at Kings Tower, Arat Kilo'
      ),
      photo(
        'ovid-real-estate-turnkey-wells',
        'casing',
        'Liyat drilling rig with a worker installing casing at Kings Tower, Arat Kilo'
      ),
    ],
    services: [
      'deep-shallow-water-well-drilling',
      'pump-supply-installation',
      'turnkey-water-projects',
    ],
    depth: { value: '500', unit: 'm', label: 'Depth of each well' },
    featured: false,
  },
  {
    slug: 'sd-salt-manufacturing-afdera',
    title: 'An industrial water source',
    scope: 'Drilling · Well construction',
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
    services: ['deep-shallow-water-well-drilling'],
    // Client proposal: drilling of 100 m with 6-inch casing
    depth: { value: '100', unit: 'm', label: 'Well depth' },
    featured: true,
  },
  {
    slug: 'yekatit-12-hospital-well-development',
    title: 'A groundwater source for the hospital',
    scope: 'Drilling · Well construction · Development',
    client: 'Yekatit 12 Hospital Medical College',
    location: 'Addis Ababa',
    summary: 'A dedicated groundwater source for a teaching hospital.',
    description:
      'Drilling of a 400 m well with 14-inch and 10-inch casing at the 6kilo hospital campus, giving Yekatit 12 Hospital Medical College a dedicated groundwater source for its water demand.',
    image: photo(
      'yekatit-12-hospital-well-development',
      'cover',
      'Well development at Yekatit 12 Hospital Medical College'
    ),
    gallery: [],
    services: ['deep-shallow-water-well-drilling'],
    // Client proposal: 400 m drilling with 14" and 10" casing, 6kilo hospital
    depth: { value: '400', unit: 'm', label: 'Well depth' },
    featured: true,
  },
  {
    slug: 'arada-luxury-mall',
    title: 'A well for a shopping mall',
    scope: 'Drilling · Casing · Well development',
    client: 'Arada Luxury Mall',
    // PLACEHOLDER(C-36): the owner asks where the mall is; general until then
    location: 'Ethiopia',
    summary: 'A 320 m well for Arada Luxury Mall, from drilling and casing to well development.',
    description:
      'Drilling of a 320 m well for Arada Luxury Mall, with casing installation and well development.',
    // Liyat's photos, named "Well Development for Arada Luxury Mall" and "Arada Luxury Mall
    // Casing Installation" (the casing photo is cropped to leave out a bystander)
    image: photo(
      'arada-luxury-mall',
      'cover',
      'Water rising from the new well during development at Arada Luxury Mall',
      top
    ),
    gallery: [
      photo(
        'arada-luxury-mall',
        'casing',
        'Casing pipes ready for installation beside the drilling rig at Arada Luxury Mall'
      ),
    ],
    services: ['deep-shallow-water-well-drilling'],
    // Liyat's company profile: "Arada Luxury Mall, 320 m well"
    depth: { value: '320', unit: 'm', label: 'Well depth' },
    featured: false,
  },
  {
    slug: 'belayneh-kinde-bole-lemi',
    title: 'Well development for a factory',
    scope: 'Well development',
    client: 'Belayneh Kinde Group',
    location: 'Bole Lemi, Addis Ababa',
    summary: 'Well development for the Belayneh Kinde Group PP bags factory at Bole Lemi.',
    // PLACEHOLDER(C-36): the owner asks for the depth and the full work; only the photo names it
    description:
      'Well development at the Belayneh Kinde Group PP bags factory at Bole Lemi, with our drilling rig and air compressors on site.',
    // Liyat's photo, named "Belayneh Kinde Group Well Development at Bole Lemi PP bags Factory"
    image: photo(
      'belayneh-kinde-bole-lemi',
      'cover',
      'Water and foam rising from the well during development at Bole Lemi'
    ),
    gallery: [],
    // Well development is part of the drilling service (Liyat's written answers, 4.5)
    services: ['deep-shallow-water-well-drilling'],
    featured: false,
  },
  {
    slug: 'belgian-embassy-well',
    title: 'A well for an embassy',
    scope: 'Well drilling',
    client: 'Belgian Embassy',
    location: 'Addis Ababa',
    summary: 'A 200 m well for the Belgian Embassy in Addis Ababa.',
    description: 'Drilling of a 200 m well for the Belgian Embassy in Addis Ababa.',
    // PLACEHOLDER(C-36): no photo from this project yet (owner, 2026-11-05: show a general
    // Liyat photo marked illustrative until Liyat sends one)
    image: {
      url: '/images/hero/belayneh-kinde-rig.webp',
      alt: 'Liyat drilling rig and air compressors on a well site',
    },
    imageCaption: 'Illustrative photo',
    gallery: [],
    services: ['deep-shallow-water-well-drilling'],
    // Liyat's company profile: "Belgian Embassy, 200 m well"
    depth: { value: '200', unit: 'm', label: 'Well depth' },
    featured: false,
  },
  {
    slug: 'entoto-artesian-well',
    title: 'An artesian well at Entoto',
    scope: 'Drilling · Artesian flow',
    client: 'Kidanemihiret Church',
    location: 'Entoto, Addis Ababa',
    summary: 'An artesian well near Entoto Kidanemihiret Church that flows without a pump.',
    description:
      'A 200 m well drilled into a confined aquifer in the Entoto area, near Kidanemihiret Church. Natural artesian pressure brings the water to the surface without a pump.',
    image: photo(
      'entoto-artesian-well',
      'cover',
      'Water flowing from the artesian well near Entoto Kidanemihiret Church'
    ),
    gallery: [],
    services: ['deep-shallow-water-well-drilling'],
    // Liyat's written answers: "200M for Kidanemihiret Church"
    depth: { value: '200', unit: 'm', label: 'Well depth' },
    featured: false,
  },
  {
    // Slug and image folder keep the old spelling; visitors don't see them
    slug: 'credocs-shoring',
    title: 'Shoring for a deep excavation',
    scope: 'Rig lowering · Excavation shoring',
    client: 'CREDOKS Digital Service',
    location: 'Addis Ababa',
    summary: 'Shoring for a 14 m deep excavation, with the rig lowered to work at its base.',
    description:
      'Rig lowering and shoring works to a depth of 14 metres for a CREDOKS Digital Service building. The work required controlled excavation support and close coordination with the client’s construction team.',
    image: photo(
      'credocs-shoring',
      'cover',
      'Drilling rig lowered into the 14 m deep shored excavation for CREDOKS'
    ),
    gallery: [
      photo(
        'credocs-shoring',
        'site-overview',
        'Overview of the shored excavation at the CREDOKS site'
      ),
      photo(
        'credocs-shoring',
        'rig-in-excavation',
        'Liyat rig working at the base of the CREDOKS excavation'
      ),
      photo('credocs-shoring', 'shoring-works', 'Shoring works and cranes at the CREDOKS site'),
    ],
    // A past project only: Liyat doesn't offer shoring as a service (his written answers)
    services: [],
    shoringDepth: { value: '14', unit: 'm', label: 'Shoring depth' },
    featured: false,
  },
];

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
  // Eyebrow above each project's gallery on /projects; the gallery's title is the project title (O-12)
  gallery: { eyebrow: 'On site', title: 'Photos from our work' },
};

export const PROJECT_GALLERY: ImageAsset[] = [
  ...PROJECTS.flatMap((project) => project.gallery),
  ...PROJECTS.filter((project) =>
    ['ethiopian-airlines-pumping-test', 'yekatit-12-hospital-well-development'].includes(
      project.slug
    )
  ).map((project) => project.image),
];

/** Newest first; projects without a year (C-11) keep their order, after the dated ones. */
export const PROJECTS_NEWEST_FIRST = [...PROJECTS].sort((a, b) => (b.year ?? 0) - (a.year ?? 0));

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
