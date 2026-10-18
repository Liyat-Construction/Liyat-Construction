/**
 * Services
 * Shown on the homepage, /services and /services/[slug].
 * Slugs map to icons in src/components/services-section.tsx (iconMap).
 */

import type { Service } from '@/types/content';

export const SERVICES: Service[] = [
  {
    title: 'Hydrogeological & Geophysical Investigations',
    slug: 'hydrogeological-investigations',
    tag: 'Investigation',
    isHighlighted: true,
    forWho: 'Project owners, developers, and institutions planning new water sources',
    description:
      'We assess subsurface conditions using hydrogeological and geophysical methods to identify viable drilling locations and reduce project risk before a rig is mobilized.',
    heroText:
      'Find the right water source before you drill. Our investigations combine desktop studies, field surveys, and geophysical profiling to guide your project with confidence.',
    fullDescription:
      'Liyat Construction PLC provides hydrogeological and geophysical investigation services for clients who need reliable, evidence-based site selection for water wells and water supply systems. Our team reviews existing data, conducts field reconnaissance, and applies electrical resistivity and other geophysical techniques to locate productive aquifers and estimate yield potential. The result is a clear drilling recommendation that reduces dry-hole risk, controls cost, and supports permitting and donor reporting.',
    includes: [
      'Desk review of hydrogeological and hydrological data',
      'Field reconnaissance and site screening',
      'Vertical electrical sounding (VES) and resistivity profiling',
      'Aquifer potential assessment and yield estimate',
      'Drilling recommendation report',
    ],
    howToStart:
      'Share your project location, expected water demand, and any existing reports. We will propose an investigation scope and schedule that fits your timeline and budget.',
    howToStartTagline: 'Investigate first. Drill smarter.',
    ctaText: 'Start an Investigation',
  },
  {
    title: 'Deep & Shallow Well Drilling',
    slug: 'well-drilling',
    tag: 'Drilling',
    forWho:
      'Institutional, commercial, and industrial clients needing production or monitoring wells',
    description:
      'We construct deep and shallow water wells using appropriate drilling techniques, casing, and screen selection matched to the geological conditions and intended use.',
    heroText:
      'Production wells built to specification. We drill, case, screen, and develop boreholes for water supply, dewatering, and monitoring applications across Ethiopia.',
    fullDescription:
      'Our drilling services cover the construction of deep and shallow water wells for drinking water supply, irrigation, industrial use, dewatering, and environmental monitoring. We select the appropriate drilling method — rotary, percussion, or air drilling — based on formation conditions and project requirements. Each well is completed with suitable casing and screen, gravel pack, and well development to maximize yield and minimize sediment. Work is documented and supervised to meet the standards expected by institutional clients and funding partners.',
    includes: [
      'Rotary, percussion, and air drilling capabilities',
      'Casing and screen selection and installation',
      'Gravel pack and well development',
      'Borehole logging and construction records',
      'Handover documentation and as-built reports',
    ],
    howToStart:
      'Provide the site location, intended use, and required yield. We will confirm the drilling approach, mobilization plan, and delivery schedule.',
    howToStartTagline: 'From first meter to final completion.',
    ctaText: 'Request Drilling Services',
  },
  {
    title: 'Pumping Tests & Hydrogeological Evaluation',
    slug: 'pumping-tests',
    tag: 'Testing',
    forWho: 'Clients who need verified well performance and aquifer parameters',
    description:
      'We conduct pumping tests and hydrogeological evaluations to confirm well yield, aquifer properties, and sustainable abstraction rates.',
    heroText:
      'Know what your well can deliver. Our pumping tests measure yield, drawdown, and recovery so you can size pumps and design distribution systems with confidence.',
    fullDescription:
      'Pumping tests are essential for confirming that a well will meet design demand and for sizing pumps and water-supply infrastructure correctly. Liyat performs step-drawdown and constant-rate pumping tests, monitors water levels and recovery, and interprets results to determine aquifer transmissivity, storativity, and sustainable yield. Our reports support pump selection, system design, and regulatory or donor compliance.',
    includes: [
      'Step-drawdown and constant-rate pumping tests',
      'Water-level monitoring and recovery analysis',
      'Aquifer parameter estimation',
      'Sustainable yield assessment',
      'Test report for design and compliance',
    ],
    howToStart:
      'Let us know the well details and the information you need. We will mobilize test equipment and produce a report within an agreed timeframe.',
    howToStartTagline: 'Test before you invest in permanent infrastructure.',
    ctaText: 'Book a Pumping Test',
  },
  {
    title: 'Wellhead Construction & Rehabilitation',
    slug: 'wellhead-rehabilitation',
    tag: 'Rehabilitation',
    forWho: 'Owners of underperforming or damaged wells and boreholes',
    description:
      'We build durable wellhead structures and rehabilitate existing wells to restore yield, improve water quality, and extend service life.',
    heroText:
      'Protect and restore your water assets. We construct wellheads, platforms, and rehabilitation works that keep wells operational for the long term.',
    fullDescription:
      'Wellhead construction and rehabilitation protect your investment and ensure continued performance. Liyat constructs concrete aprons, platforms, and sanitary seals; rehabilitates clogged or damaged wells through air-lifting, brushing, chemical treatment, and screen cleaning; and replaces worn pumps and rising mains where needed. Our rehabilitation work is a practical alternative to drilling a new well when the borehole structure remains sound.',
    includes: [
      'Concrete wellhead, apron, and platform construction',
      'Sanitary sealing and protection works',
      'Air-lifting, brushing, and chemical rehabilitation',
      'Screen and gravel-pack cleaning',
      'Condition assessment and rehabilitation recommendations',
    ],
    howToStart:
      'Send us the well history, current problems, and any available logs. We will inspect, test, and propose the most cost-effective rehabilitation plan.',
    howToStartTagline: 'Restore performance without starting over.',
    ctaText: 'Assess Rehabilitation Needs',
  },
  {
    title: 'Pump Installation & Electromechanical Works',
    slug: 'pump-installation-electromechanical',
    tag: 'Electromechanical',
    forWho: 'Clients ready to turn a completed well into a working water supply',
    description:
      'We supply, install, and commission pumps, electrical systems, and control panels to make wells fully operational.',
    heroText:
      'From borehole to tap. We install submersible and surface pumps, electrical and control systems, and piping to deliver water where it is needed.',
    fullDescription:
      'Pump installation and electromechanical works are the final step in making a well productive. Liyat selects and installs submersible and surface pumps, motors, control panels, variable frequency drives, generators, and rising mains based on site yield and client demand. We commission the system, verify performance against design, and hand over operational documentation. Our installations serve hospitals, embassies, industrial facilities, and large residential developments.',
    includes: [
      'Submersible and surface pump supply and installation',
      'Electrical, control, and generator integration',
      'Rising main and distribution piping',
      'System commissioning and performance verification',
      'As-built and operation manuals',
    ],
    howToStart:
      'Share the well test results, required flow rate, and distribution layout. We will size and install the right pump and electrical package.',
    howToStartTagline: 'Sized right. Installed right. Running right.',
    ctaText: 'Plan Pump Installation',
  },
  {
    title: 'Turnkey Water Supply Projects',
    slug: 'turnkey-water-projects',
    tag: 'Turnkey',
    forWho: 'Organizations that want a single contractor accountable for the complete water system',
    description:
      'We design and deliver complete water supply projects — from source development through treatment, storage, and distribution — under one contract.',
    heroText:
      'One contractor, complete water system. We manage investigation, drilling, electromechanical works, storage, and distribution from start to finish.',
    fullDescription:
      'For clients who need a complete water supply solution, Liyat acts as a turnkey contractor. We coordinate hydrogeological investigation, well drilling, pumping tests, pump and electromechanical installation, storage tanks, treatment where required, and distribution networks. A single point of accountability reduces coordination risk and helps institutional clients meet project deadlines and reporting requirements.',
    includes: [
      'Integrated project planning and coordination',
      'Source development and well construction',
      'Pump, electrical, and control systems',
      'Storage, treatment, and distribution networks',
      'Commissioning, documentation, and handover',
    ],
    howToStart:
      'Provide the project scope, location, and water demand. We will prepare a turnkey proposal covering schedule, deliverables, and responsibilities.',
    howToStartTagline: 'End-to-end delivery for complex water needs.',
    ctaText: 'Request Turnkey Proposal',
  },
];
