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

// The Ethiopian Airlines photos are used on its project page and in the Projects gallery
const EA_RIG = photo(
  'ethiopian-airlines-pumping-test',
  'rig',
  'Liyat rig at the Ethiopian Airlines site with an aircraft overhead'
);
const EA_RIG_AND_CASINGS: ImageAsset = {
  url: '/images/equipment/rig-and-casings.webp',
  alt: 'Liyat drilling rig with screen casings laid out for the Ethiopian Airlines wells',
};
const EA_ENGINEERS: ImageAsset = {
  url: '/images/equipment/engineers-on-pipes.webp',
  alt: 'Engineers on the casing pipes beside the rig at the Ethiopian Airlines site',
};
const EA_NIGHT = photo(
  'ethiopian-airlines-pumping-test',
  'night',
  'Water rushing from the well at night during the Ethiopian Airlines pumping test'
);

export const PROJECTS: Project[] = [
  {
    slug: 'ethiopian-airlines-pumping-test',
    // Finished 2024 (Liyat, meeting 2026-11-10)
    year: 2024,
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
      'Crew reading the flow at the V-notch tank during the Ethiopian Airlines pumping test'
    ),
    gallery: [EA_RIG],
    services: ['deep-shallow-water-well-drilling', 'pumping-tests', 'pump-supply-installation'],
    // Client proposal: drilling and construction of two 500 m wells in the Ethiopian
    // Airlines compound (main contractor Kibish Construction)
    depth: { value: '500', unit: 'm', label: 'Depth of each well' },
    // From the client's project list; confirm against the test report (C-11)
    yield: { value: '40', unit: 'L/s', label: 'Tested yield', water: true },
    featured: true,
    story: {
      metaTitle: 'Ethiopian Airlines Water Wells',
      metaDescription:
        'Two 500 m water wells drilled, pump-tested and equipped for Ethiopian Airlines in Addis Ababa, with a tested yield of 40 L/s. Liyat Construction.',
      job: [
        'In 2024 we drilled, tested and equipped two 500 m wells in the Ethiopian Airlines compound in Addis Ababa, working on behalf of Kibish Construction, the main contractor.',
        'It was a job for the whole life of a well, not only the drilling. Each well was taken from the first metre of the borehole to a tested water supply with its pump installed, and the wells were proven before anyone designed the system around them.',
      ],
      work: {
        intro: 'Our drilling, pumping-test and installation teams worked through four stages:',
        steps: [
          {
            title: 'Drilling and construction.',
            text: 'We drilled and constructed both wells to 500 m.',
          },
          {
            title: 'Well development.',
            text: 'We developed the wells to clear the borehole, so the water runs clear and the yield is not held back by drilling debris.',
          },
          {
            title: 'Pumping tests.',
            text: 'We pumped the wells at measured rates and recorded how the water level fell and recovered, reading the flow at a V-notch tank. A pumping test shows what a well can deliver, and what it can keep delivering.',
          },
          {
            title: 'Pump installation.',
            text: 'We installed the pumps, so the wells left our hands as working supplies, not as holes in the ground.',
          },
        ],
        note: 'Our pumping-test crew brings its own submersible pumps, crane and generators to site, which is why one contractor could drill the wells and prove them.',
      },
      result: [
        'The pumping test confirmed a yield of 40 litres per second.',
        'That figure matters because the pumps and the pipework are chosen from it. The test verified the capacity of the wells and gave the performance data for selecting the pumps and designing the distribution system, so the design starts from measured performance, not from an estimate.',
        'Two tested wells, finished in 2024, for the national airline.',
      ],
      photos: [
        EA_RIG,
        EA_RIG_AND_CASINGS,
        EA_ENGINEERS,
        {
          url: '/images/hero/ethiopian-airlines.webp',
          alt: 'Water discharging into the test tank beside the Liyat rig at the Ethiopian Airlines site',
        },
        {
          url: '/images/hero/ea-casing-site.webp',
          alt: 'Liyat rig, casing pipes and site cabin at the Ethiopian Airlines site',
          focus: 'upper-left',
        },
        EA_NIGHT,
      ],
    },
  },
  {
    slug: 'british-embassy-pump-installation',
    // Year from Liyat's review (2026-11-09), confirmed in his own document (owner, 2026-11-12)
    year: 2026,
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
    // PLACEHOLDER(C-40): one photo only; Liyat sends more after the requirements session
    story: {
      metaTitle: 'British Embassy Water Well',
      metaDescription:
        'A turnkey water source for the British Embassy in Addis Ababa: investigation, a 250 m well and a submersible pump connected to the tank. Liyat Construction.',
      job: [
        'In 2026 we delivered a complete groundwater source for the British Embassy compound in Addis Ababa, as one turnkey project.',
        'Turnkey means the embassy dealt with one contractor, accountable for every stage, instead of coordinating a surveyor, a driller and a pump supplier separately.',
      ],
      work: {
        intro: 'We ran the project in four stages, each one feeding the next:',
        steps: [
          {
            title: 'Investigation.',
            text: 'A hydrogeological and geophysical investigation of the compound, to help locate productive water-bearing ground before a rig moved, so the well is sited on the evidence.',
          },
          {
            title: 'Drilling.',
            text: 'Drilling and construction of a 250 m well.',
          },
          {
            title: 'Pump.',
            text: 'Supply and installation of a submersible pump with all its accessories.',
          },
          {
            title: 'Connection.',
            text: 'The pump connected to the water tank, so the well, the pump and the tank work as one system.',
          },
        ],
      },
      result: [
        'The embassy has a working groundwater source: a 250 m well, a submersible pump, and the tank connected to it, finished in 2026.',
        'Because one contractor ran every stage, what the investigation found guided the drilling, and the well guided the pump, with no hand-offs between firms.',
      ],
      photos: [],
    },
  },
  {
    slug: 'chaka-house-project',
    year: 2022,
    title: 'Chaka House: our deepest completed well',
    scope: 'Drilling · Well construction',
    // The client as Liyat wrote it (review, 2026-11-09, D-177)
    client: 'Palace Administration / Etoile GC PLC',
    location: 'Addis Ababa',
    summary: 'A 600 m well — the deepest on our completed list — for the Chaka House development.',
    description:
      'Drilling of a 600 m well with 14-inch, 10-inch and 6-inch casing for the Chaka House development, for Palace Administration and Etoile GC PLC. At 600 m it is the deepest well on our completed-projects list.',
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
    // PLACEHOLDER(C-40): one photo only; Liyat sends more after the requirements session
    story: {
      metaTitle: 'Chaka House 600 m Water Well',
      metaDescription:
        'A 600 m water well in Addis Ababa for the Chaka House development, the deepest well Liyat Construction has completed. Drilled in 2022.',
      job: [
        'Chaka House is the deepest well Liyat Construction has completed. In 2022 we drilled it to 600 m in Addis Ababa for the Chaka House development, working for Palace Administration and Etoile GC PLC.',
        'At this depth the work depends on the rig, the casing and the crew, and every decision counts for more the deeper the borehole goes. It is the job that sets our depth record.',
      ],
      work: {
        intro: 'Our drilling team built the whole well:',
        steps: [
          {
            title: 'Drilling to 600 m.',
            text: 'A truck-mounted rig drilled the borehole to 600 m. Our rigs drill by mud rotary and DTH (down-the-hole hammer), so one crew can work through soft ground and hard rock.',
          },
          {
            title: 'Casing in three sizes.',
            text: 'We lined the borehole with 14-inch, 10-inch and 6-inch casing. A deep well is cased in steps, wider at the top and narrower below, so the steel holds the borehole open all the way down.',
          },
        ],
        note: 'Our drilling depth is up to 800 m, so 600 m sits well inside it.',
      },
      result: [
        'A 600 m well for the Chaka House development, completed in 2022 and still the deepest on our list of completed projects.',
        'It is also part of a record that runs from 100 m at a salt works in Afdera to 600 m here in Addis Ababa: more than 50 wells and more than 12,000 m drilled since 2019.',
      ],
      photos: [],
    },
  },
  {
    slug: 'tsedey-bank-pumping-test',
    year: 2025,
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
    // Finished 2025 (owner, 2026-11-12; the earlier 2024 was a mistake)
    year: 2025,
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
    year: 2022,
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
    year: 2024,
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
    year: 2026,
    title: 'A well for a shopping mall',
    scope: 'Drilling · Casing · Well development · Pump installation',
    client: 'Arada Luxury Mall',
    // PLACEHOLDER(C-36): the owner asks where the mall is; general until then
    location: 'Ethiopia',
    summary:
      'A 320 m deep well for Arada Luxury Mall, from drilling and casing to well development, with pump installation.',
    // Liyat confirmed the two services, 2026-11-13: deep-well drilling (320 m) and pump installation
    description:
      'Drilling of a 320 m deep well for Arada Luxury Mall, with casing installation, well development and pump installation.',
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
    services: ['deep-shallow-water-well-drilling', 'pump-supply-installation'],
    // Liyat's company profile: "Arada Luxury Mall, 320 m well"; confirmed a 320 m deep well (R4, 2026-11-13)
    depth: { value: '320', unit: 'm', label: 'Well depth' },
    featured: false,
  },
  {
    slug: 'belayneh-kinde-bole-lemi',
    year: 2026,
    title: 'Two wells for a contractor group',
    scope: 'Drilling · Casing installation',
    client: 'Belayneh Kinde Group',
    location: 'Addis Ababa',
    summary: 'Two wells, 220 m and 250 m, each with 8 inch casing, for the Belayneh Kinde Group.',
    // Owner, 2026-11-13: Belayneh Kinde General Contractor is part of the Belayneh Kinde Group (show
    // the Group); Liyat's list: "Drilling of 220m with 8 inch casing installation and Drilling of
    // 250m with 8 inch casing installation (Addis Ababa)"; 2026; the 200 m he said was a rough figure.
    description:
      'Drilling of two wells in Addis Ababa for the Belayneh Kinde Group: one of 220 m and one of 250 m, each with 8 inch casing installation.',
    // Liyat's photo, named "Belayneh Kinde Group Well Development at Bole Lemi PP bags Factory"
    image: photo(
      'belayneh-kinde-bole-lemi',
      'cover',
      'Water and foam rising from the well during development at Bole Lemi'
    ),
    gallery: [],
    services: ['deep-shallow-water-well-drilling'],
    depth: { value: '220 and 250', unit: 'm', label: 'Well depths' },
    featured: false,
  },
  {
    slug: 'belgian-embassy-well',
    // Finished 2025 (Liyat, meeting 2026-11-10)
    year: 2025,
    title: 'A well for an embassy',
    scope: 'Well drilling',
    // The embassy's own name, as in the clients row (D-153)
    client: 'Embassy of Belgium',
    location: 'Addis Ababa',
    summary: 'A 200 m well for the Embassy of Belgium in Addis Ababa.',
    description: 'Drilling of a 200 m well for the Embassy of Belgium in Addis Ababa.',
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
    year: 2023,
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
    slug: 'credoks-shoring',
    year: 2025,
    title: 'Shoring for a deep excavation',
    // Not a water well and not a service: labelled so it isn't read as one, and kept last (D-155)
    scope: 'Other works: excavation shoring',
    client: 'CREDOKS Digital Service',
    location: 'Addis Ababa',
    // Liyat's own line for this card (review, 2026-11-09), without its slogan "Nothing impossible" (D-178)
    summary: 'Water-well drilling inside a 14 m excavation, with the rig lowered by heavy crane.',
    description:
      'Rig lowering and shoring works to a depth of 14 metres for a CREDOKS Digital Service building. The work required controlled excavation support and close coordination with the client’s construction team.',
    image: photo(
      'credoks-shoring',
      'cover',
      'Drilling rig lowered into the 14 m deep shored excavation for CREDOKS'
    ),
    gallery: [
      photo(
        'credoks-shoring',
        'site-overview',
        'Overview of the shored excavation at the CREDOKS site'
      ),
      photo(
        'credoks-shoring',
        'rig-in-excavation',
        'Liyat rig working at the base of the CREDOKS excavation'
      ),
      photo('credoks-shoring', 'shoring-works', 'Shoring works and cranes at the CREDOKS site'),
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
    metaTitle: 'Water-Well Projects in Ethiopia',
    intro:
      'For embassies, banks, colleges and developers. Each project lists only the facts we can document.',
    image: {
      url: '/images/hero/yekatit-12.webp',
      alt: 'Water rising from the new well during development at Yekatit 12 Hospital Medical College',
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
  // The three project pages (D-184)
  detail: {
    eyebrow: 'Project',
    facts: 'Project facts',
    completed: 'Completed',
    job: 'The job',
    work: 'What we did',
    result: 'The result',
    photos: 'On site',
    services: 'Services on this project',
    related: 'More projects',
    allProjects: { label: 'Explore all projects', href: '/projects' },
    cta: 'Discuss your project',
  },
};

export const PROJECT_GALLERY: ImageAsset[] = [
  ...PROJECTS.flatMap((project) => project.gallery),
  ...PROJECTS.filter((project) =>
    ['ethiopian-airlines-pumping-test', 'yekatit-12-hospital-well-development'].includes(
      project.slug
    )
  ).map((project) => project.image),
  // Liyat's Ethiopian Airlines photos (2026-11-07); the night shot last (D-164)
  EA_RIG_AND_CASINGS,
  EA_ENGINEERS,
  EA_NIGHT,
];

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured).slice(0, 6);

/** Projects that included the given service, featured first. */
export function getProjectsByService(slug: ServiceSlug): Project[] {
  return PROJECTS.filter((project) => project.services.includes(slug)).sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );
}

/** The projects that have their own page (D-184): those with a story. */
export const PROJECT_PAGES = PROJECTS.filter((project) => project.story !== undefined);

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
