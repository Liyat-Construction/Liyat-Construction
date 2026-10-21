/**
 * Services
 * The six official services (Brand §9), in lifecycle order. Shown on the
 * homepage, /services and /services/[slug]; the order sets the 01–06 numbers.
 */

import type { Service, ServiceSlug } from '@/types/content';

// PLACEHOLDER(C-09): confirm the service list, the scope lists and the method/deliverable wording with Liyat
export const SERVICES: Service[] = [
  {
    slug: 'hydrogeological-survey',
    title: 'Hydrogeological & Geophysical Survey',
    summary: 'We read the ground before a rig moves, so the well is drilled where the water is.',
    intro:
      'Find the right water source before you drill. A survey combines existing data, field reconnaissance and geophysical soundings into one drilling recommendation.',
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
  },
  {
    slug: 'well-drilling',
    title: 'Well Drilling',
    summary: 'Deep and shallow production wells, cased, screened and developed to specification.',
    intro:
      'Production wells built to specification: drilled, cased, screened and developed for water supply, dewatering and monitoring.',
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
  },
  {
    slug: 'pumping-tests',
    title: 'Pumping Tests',
    summary: 'Step and constant-rate tests that prove what a well can deliver before you invest.',
    intro:
      'Know what your well can deliver. A pumping test measures yield, drawdown and recovery, so pumps and pipes are sized on evidence.',
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
  },
  {
    slug: 'wellhead-rehabilitation',
    title: 'Wellhead Construction & Rehabilitation',
    summary: 'Protective wellheads for new wells and restored yield for wells that underperform.',
    intro:
      'Protect and restore your water source. We build sealed wellheads and bring underperforming wells back to service.',
    overview:
      'A sealed wellhead keeps surface water and contamination out of a new well. For existing wells that have lost yield, rehabilitation by airlifting, brushing and screen cleaning is often a cheaper alternative to a new borehole when the structure is sound.',
    forWho: 'Owners of new wells, and of underperforming or damaged wells',
    includes: [
      'Concrete wellhead, apron and platform',
      'Sanitary seal and protection works',
      'Airlifting, brushing and screen cleaning',
      'Condition assessment',
    ],
    method: [
      'Inspect the well and review its history',
      'Test the current yield',
      'Clean and redevelop, or build the wellhead',
      'Test again to confirm the result',
    ],
    deliverables: ['Before-and-after test results', 'Works report'],
    cta: 'Request a well assessment',
  },
  {
    slug: 'pump-installation',
    title: 'Pump Installation & Electromechanical Works',
    summary: 'Pumps, power and controls sized from the test results, installed and commissioned.',
    intro:
      'From borehole to tap. We install the pump, power and controls that turn a tested well into a working water supply.',
    overview:
      'We size the pump from the pumping test results and the demand, then supply and install the pump, motor, rising main, control panel and power connection. Every installation is commissioned and checked against its design before handover.',
    forWho: 'Clients ready to turn a completed well into a working water supply',
    includes: [
      'Submersible and surface pumps',
      'Control panel, electrical and generator connection',
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
  },
  {
    slug: 'turnkey-projects',
    title: 'Turnkey Water Projects',
    summary: 'One contractor accountable for the whole water source, from survey to handover.',
    intro:
      'One contractor for the complete water source: survey, drilling, testing, wellhead and pump, under one contract.',
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
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

/** Official names of the given services, in lifecycle order. */
export function getServiceTitles(slugs: ServiceSlug[]): string[] {
  return SERVICES.filter((service) => slugs.includes(service.slug)).map((service) => service.title);
}
