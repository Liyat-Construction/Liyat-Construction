/**
 * Services
 * The six official services (Brand §9), in lifecycle order. Shown on the
 * homepage, /services and /services/[slug]; the order sets the 01–06 numbers.
 */

import type { Service, ServicesPage, ServiceSlug } from '@/types/content';

// PLACEHOLDER(C-09): confirm the service list, the scope lists and the method/deliverable wording with Liyat
export const SERVICES: Service[] = [
  {
    slug: 'hydrogeological-survey',
    title: 'Hydrogeological & Geophysical Survey',
    summary: 'We read the ground before a rig moves, so the well is drilled where the water is.',
    intro:
      'Find the right water source before you drill, with a survey that names the site, depth and likely yield.',
    overview:
      'We review existing hydrogeological data, inspect the site and run electrical resistivity soundings to locate productive aquifers and estimate their potential. The recommendation that follows names the drilling site, the expected depth and the likely yield, which reduces dry-hole risk and supports permits and donor reporting.',
    forWho: 'Project owners, developers and institutions planning a new water source',
    includes: [
      'Desk review of hydrogeological and hydrological data',
      'Field reconnaissance and site screening',
      'Vertical electrical sounding (VES) and resistivity profiling',
      'Aquifer potential assessment and yield estimate',
    ],
    method: [
      'Collect existing maps, logs and nearby well records',
      'Visit the site and screen candidate locations',
      'Run resistivity soundings at the candidate points',
      'Interpret the results and rank the sites',
    ],
    deliverables: ['Survey report with the recommended drilling site, depth and expected yield'],
    cta: 'Request a site survey',
    // No photo shows a survey; the Afar site shows the ground it reads
    image: {
      url: '/images/hero/afar-rig-fleet.webp',
      alt: 'Liyat drilling rig, compressors and support trucks on site in the Afar region',
    },
  },
  {
    slug: 'borehole-drilling',
    title: 'Borehole Drilling',
    summary: 'Deep and shallow boreholes, cased, screened and developed to specification.',
    intro: 'Deep and shallow boreholes, drilled, cased, screened and developed to specification.',
    overview:
      'We drill deep and shallow wells for drinking water, irrigation, industry, dewatering and monitoring. The drilling method follows the formation; each well is completed with casing, screen and gravel pack, then developed to maximize yield and minimize sediment. Every stage is logged and supervised.',
    forWho:
      'Institutional, commercial and industrial clients who need production or monitoring wells',
    includes: [
      'Rotary and air drilling',
      'Casing and screen selection and installation',
      'Gravel pack and well development',
      'Borehole log and construction records',
    ],
    method: [
      'Mobilize the rig and set up the site',
      'Drill and log the formation',
      'Install casing, screen and gravel pack',
      'Develop the well until the water runs clear',
    ],
    deliverables: ['Drilling log', 'As-built well construction drawing'],
    cta: 'Request a drilling quote',
    image: {
      url: '/images/hero/afar-rig-fleet.webp',
      alt: 'Liyat drilling rig and support fleet at Afdera, Afar Region',
    },
  },
  {
    slug: 'pumping-tests',
    title: 'Pumping Tests',
    summary: 'Step and constant-rate tests that prove what a well can deliver before you invest.',
    intro: 'Know what your well can deliver before you size the pump and pipes.',
    overview:
      'A pumping test confirms that a well meets its design demand. We run step-drawdown and constant-rate tests, record water levels through drawdown and recovery, and interpret the results to find the sustainable yield and the aquifer parameters your engineers design from.',
    forWho: 'Clients who need verified well performance and aquifer parameters',
    includes: [
      'Step-drawdown and constant-rate tests',
      'Water-level monitoring and recovery analysis',
      'Aquifer parameter estimation',
      'Sustainable yield assessment',
    ],
    method: [
      'Step-drawdown test to find the safe pumping rate',
      'Constant-rate test to confirm the well sustains it',
      'Recovery monitoring after the pump stops',
      'Analysis and report',
    ],
    deliverables: ['Pumping test report with the recommended pumping rate'],
    cta: 'Book a pumping test',
    image: {
      url: '/images/hero/ethiopian-airlines.webp',
      alt: 'Water discharging into a test tank during a Liyat pumping test for Ethiopian Airlines',
      focus: 'right',
    },
  },
  {
    slug: 'borehole-rehabilitation',
    title: 'Borehole Rehabilitation',
    summary: 'Restored yield for boreholes that have slowed down, silted up or stopped.',
    intro: 'Bring an existing borehole back to service, often for less than drilling a new one.',
    overview:
      'Boreholes lose yield as screens clog and sediment builds up. We assess the well, test what it delivers today, then clean and redevelop it by airlifting, brushing and screen cleaning, and test it again so you can see the result.',
    forWho: 'Owners of boreholes that underperform, pump sand or have stopped',
    includes: [
      'Condition assessment',
      'Yield test before and after the works',
      'Airlifting, brushing and screen cleaning',
      'Redevelopment of the well',
    ],
    method: [
      'Inspect the well and review its history',
      'Test the current yield',
      'Clean and redevelop the well',
      'Test again to confirm the result',
    ],
    deliverables: ['Before-and-after test results', 'Works report'],
    cta: 'Request a well assessment',
    // Airlift development: the same technique rehabilitation uses
    image: {
      url: '/images/hero/yekatit-12.webp',
      alt: 'Water rising from the new well during development at Yekatit 12 Medical College',
    },
  },
  {
    slug: 'pump-supply-installation',
    title: 'Pump Supply & Installation',
    summary: 'Submersible and hand pumps, supplied, installed and commissioned.',
    intro:
      'Submersible and hand pumps, supplied and installed to turn a tested well into a working supply.',
    overview:
      'Deep boreholes get a submersible pump, sized from the pumping test results and the demand, with its motor, rising main, control panel and power connection. Shallow community wells get a hand pump. Every installation is commissioned and checked against its design before handover.',
    forWho:
      'Clients ready to turn a completed or rehabilitated well into a working water supply, from a motorized borehole to a community hand pump',
    includes: [
      'Submersible pump supply and installation',
      'Hand pump supply and installation',
      'Electromechanical works: control panel, electrical and generator connection',
      'Rising main and connection piping',
      'Commissioning and performance check',
    ],
    method: [
      'Size the pump from the test results and demand',
      'Install the pump, rising main and controls',
      'Connect power and commission the system',
      'Hand over with operating instructions',
    ],
    deliverables: ['Commissioning record', 'Operation and maintenance notes'],
    cta: 'Plan a pump installation',
    // No landscape photo of a pump yet (C-18); the water it delivers
    image: {
      url: '/images/hero/water-column.webp',
      alt: 'Water rising beside a Liyat drilling rig during well development',
    },
  },
  {
    slug: 'turnkey-projects',
    title: 'Turnkey Water Projects',
    summary: 'One contractor accountable for the whole water source, from survey to handover.',
    intro: 'One contractor for the whole water source, from survey to handover.',
    overview:
      'For clients who want a single point of accountability, we run the whole project: survey, drilling, pumping test, wellhead and pump installation, with one schedule, one team and one handover file.',
    forWho: 'Organizations that want one contractor accountable for the complete water source',
    includes: [
      'Planning and coordination of every stage',
      'Survey, drilling and testing',
      'Wellhead, pump and electrical works',
      'Commissioning and handover',
    ],
    method: [
      'Agree scope, schedule and deliverables',
      'Survey and drill',
      'Test, then equip the well',
      'Commission and hand over',
    ],
    deliverables: ['Handover file with every report from survey to commissioning'],
    cta: 'Request a turnkey proposal',
    image: {
      url: '/images/hero/water-column.webp',
      alt: 'Water rising beside a Liyat drilling rig during well development',
    },
  },
];

// PLACEHOLDER(C-09): confirm the deliverables with Liyat
export const SERVICES_PAGE: ServicesPage = {
  header: {
    eyebrow: 'Services',
    title: 'From survey to handover',
    intro:
      'Six services that take a water source from the first survey to a working supply. Choose one stage, or let us run the whole project.',
    description:
      'Hydrogeological survey, borehole drilling, pumping tests, borehole rehabilitation, pump supply and installation, and turnkey water projects by Liyat Construction in Ethiopia.',
  },
  lifecycle: {
    eyebrow: 'The lifecycle',
    title: 'Every well surveyed, drilled and proven.',
    intro:
      'The six services in the order a water source is built. The drawing shows the part of the well each one delivers.',
  },
  deliverables: {
    eyebrow: 'Documentation',
    title: 'What you receive at every stage',
    intro:
      'Each stage ends with a document you can keep, check and share with your engineers and funders.',
    items: [
      {
        title: 'Survey report',
        text: 'The recommended drilling site, the expected depth and the likely yield.',
      },
      {
        title: 'Drilling log',
        text: 'The formations drilled and an as-built drawing of the finished well.',
      },
      {
        title: 'Pumping test report',
        text: 'Measured drawdown and recovery, with the recommended pumping rate.',
      },
      {
        title: 'Handover file',
        text: 'Every report from survey to commissioning, in one file.',
      },
    ],
  },
  detail: {
    eyebrow: 'Our services',
    overview: 'About this service',
    forWho: 'Who it is for',
    includes: 'What is included',
    method: 'How we work',
    deliverables: 'What you receive',
    related: 'Related projects',
    allProjects: { label: 'Explore all projects', href: '/projects' },
  },
};

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

/** Official names of the given services, in lifecycle order. */
export function getServiceTitles(slugs: ServiceSlug[]): string[] {
  return SERVICES.filter((service) => slugs.includes(service.slug)).map((service) => service.title);
}
