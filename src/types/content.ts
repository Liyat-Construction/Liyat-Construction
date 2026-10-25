/**
 * Content Type Definitions
 * Shapes for the content files in src/data/*. Cards take these objects directly
 * (Design System §3.2), so a change here shows up as a type error.
 * Facts the client has not confirmed are optional: a missing fact renders nothing.
 */

/** Which part of a photo stays in view when a ratio crops it (portrait photos in 4:3 cards). */
export type ImageFocus = 'center' | 'top' | 'bottom' | 'left' | 'right' | 'upper-left';

export interface ImageAsset {
  /** Path of the prepared image, e.g. '/images/projects/<slug>/cover.webp' (Engineering §5) */
  url: string;
  alt: string;
  /** Defaults to 'center' */
  focus?: ImageFocus;
  /** Shape of the source photo; defaults to 'landscape'. Headers and galleries keep portrait photos tall */
  orientation?: 'landscape' | 'portrait';
}

/** A headline figure: a depth, a yield, a count. `water` marks water data (Brand §4). */
export interface Stat {
  value: string;
  unit?: string;
  label: string;
  water?: boolean;
}

/** A label/value row of technical data (FactsTable). */
export interface Spec {
  label: string;
  value: string;
}

/** The six services (Brand §9), in lifecycle order. Also the ids of the well-diagram parts. */
export type ServiceSlug =
  | 'hydrogeological-survey'
  | 'borehole-drilling'
  | 'pumping-tests'
  | 'borehole-rehabilitation'
  | 'pump-supply-installation'
  | 'turnkey-projects';

export interface Service {
  slug: ServiceSlug;
  /** The official name (Brand §9), used identically everywhere */
  title: string;
  /** One line, on the service card */
  summary: string;
  /** Lead paragraph of the service page */
  intro: string;
  overview: string;
  forWho: string;
  includes: string[];
  /** Method steps, in order */
  method: string[];
  /** What the client receives */
  deliverables: string[];
  /** Verb-first button text, e.g. 'Request a site survey' (Brand §8) */
  cta: string;
  /** Photo in the page header; only a photo that really shows this service */
  image?: ImageAsset;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  location: string;
  /** Year completed */
  year?: number;
  summary: string;
  /** The scope of work */
  description: string;
  approach?: string;
  result?: string;
  /** Cover photo: cards, page header, Open Graph */
  image: ImageAsset;
  gallery: ImageAsset[];
  /** Services delivered, in lifecycle order; empty when the work is outside the six (C-09) */
  services: ServiceSlug[];
  /** Well depth, e.g. { value: '180', unit: 'm', label: 'Well depth' } */
  depth?: Stat;
  /** Tested yield (water: true). The project card shows it before depth */
  yield?: Stat;
  /** e.g. '6 weeks' */
  duration?: string;
  featured: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  organization: string;
}

export interface Equipment {
  category: 'rig' | 'support';
  name: string;
  /** e.g. 'Drilling rig', 'Air compressor' */
  type: string;
  image?: ImageAsset;
  /** Key specs, e.g. rated depth */
  specs: Spec[];
}

/** A discipline on the Equipment & Capabilities page. */
export interface Capability {
  title: string;
  body: string;
  items: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  portrait?: ImageAsset;
}

export interface Reference {
  organization: string;
  /** ISO date, e.g. '2025-03-14' */
  date: string;
  /** Scan of the first page; without it the card shows a document icon */
  thumbnail?: ImageAsset;
  /** Path under /public to the full scan (PDF or image) */
  file: string;
}

export interface Credential {
  name: string;
  issuer: string;
  /** e.g. grade or licence number */
  detail?: string;
}

export interface Partner {
  name: string;
  /** Prepared image path, e.g. '/images/clients/acme.webp'. Without a logo, the name is shown as text. */
  logo?: string;
  url?: string;
}

/** A link shown as a button or text link. Labels are verbs in sentence case (Brand §8). */
export interface Action {
  label: string;
  href: string;
}

/** Ground material of a log layer; picks its fill and hatching in BoreholeLog. */
export type LogMaterial = 'soil' | 'clay' | 'weathered' | 'rock' | 'aquifer';

/** One layer of a borehole log, depths in metres from the surface. */
export interface LogLayer {
  name: string;
  from: number;
  to: number;
  material: LogMaterial;
}

/** A drilling log: the ground as drilled, and how the well was built in it. Depths in metres. */
export interface BoreholeLogData {
  title: string;
  caption: string;
  layers: LogLayer[];
  /** Solid casing from the surface to this depth; the screen continues below it */
  casingTo: number;
  screenTo: number;
  waterLevel: number;
  waterLevelLabel: string;
}

/** The start of a section: SectionHeading props. */
export interface SectionCopy {
  eyebrow?: string;
  title: string;
  intro?: string;
}

/** A titled point in a grid: a deliverable, a principle, a capability. */
export interface Feature {
  title: string;
  text?: string;
}

/** The top of an inner page (PageHeader). */
export interface PageCopy {
  eyebrow?: string;
  title: string;
  /** One sentence, at most about 20 words (D-73) */
  intro?: string;
  /** Landscape photo behind the page header (D-72) */
  image?: ImageAsset;
  /** Meta description for search results */
  description: string;
}

/** /services, in section order (Design System §4). */
export interface ServicesPage {
  header: PageCopy;
  lifecycle: SectionCopy;
  deliverables: SectionCopy & { items: Feature[] };
  /** Headings of the sections on every /services/[slug] page */
  detail: {
    /** Eyebrow on a service page, followed by its number */
    eyebrow: string;
    overview: string;
    forWho: string;
    includes: string;
    method: string;
    deliverables: string;
    related: string;
    allProjects: Action;
  };
}

/** /projects and the headings of every /projects/[slug] page (Design System §4). */
export interface ProjectsPage {
  header: PageCopy;
  /** The clients row under the projects */
  clients: SectionCopy;
  detail: {
    overview: string;
    approach: string;
    result: string;
    facts: string;
    /** FactsTable labels; depth and yield bring their own (Stat.label) */
    factLabels: {
      client: string;
      location: string;
      year: string;
      services: string;
      duration: string;
    };
    gallery: SectionCopy;
    related: string;
    allProjects: Action;
    contact: Action;
  };
}

/** A section of running text, with an optional statement or button (Story section). */
export interface StoryCopy extends SectionCopy {
  paragraphs: string[];
}

/** /about, in section order (Design System §4). Company facts come from company.ts. */
export interface AboutPage {
  header: PageCopy & { image: ImageAsset };
  story: StoryCopy & { factsTitle: string };
  figures: SectionCopy;
  offer: SectionCopy & { items: Feature[]; link: Action };
  audience: StoryCopy & { action: Action };
  purpose: StoryCopy & { statement: string };
  principles: SectionCopy & { items: Feature[] };
  team: SectionCopy;
  credentials: SectionCopy;
  safety: SectionCopy;
}

/** The band that ends every page except Contact (Design System §3.4). */
export interface CtaBandContent {
  title: string;
  text: string;
  action: Action;
  /** Label of the call button, e.g. 'Call us now'; the number is in its link and read to screen readers */
  call: string;
}

/** Home page copy, in section order (Design System §4). The eyebrow of the hero is the descriptor. */
export interface HomePage {
  hero: {
    title: string;
    lead: string;
    primary: Action;
    secondary: Action;
    /** The full-screen photo behind the headline (D-81), and its corner caption */
    image: ImageAsset;
    caption: string;
    /** Parked: the borehole log, rejected for the hero, kept for Services */
    log: BoreholeLogData;
  };
  /** "Who we are": text, a landscape photo and the key figures (D-61) */
  about: StoryCopy & { image: ImageAsset; action: Action };
  lifecycle: SectionCopy;
  projects: SectionCopy & { link: Action; clientsTitle: string };
  equipment: SectionCopy & { link: Action };
  testimonials: SectionCopy;
}

export interface EquipmentPage {
  header: PageCopy;
  rigs: SectionCopy;
  support: SectionCopy;
  figures: SectionCopy;
  safety: SectionCopy;
}

/** /environment, in section order (Design System §4). */
export interface EnvironmentPage {
  header: PageCopy;
  story: StoryCopy & { statement: string };
  practices: SectionCopy & { items: Feature[] };
}

/** /testimonials, in section order (Design System §4). */
export interface TestimonialsPage {
  header: PageCopy;
  testimonials: SectionCopy;
  references: SectionCopy;
  clients: SectionCopy & { clientsTitle: string };
}

export interface LegalPage {
  header: PageCopy;
  contentsLabel: string;
  sectionLabel: string;
  sections: { id: string; title: string; paragraphs: string[]; items?: string[] }[];
  questions: SectionCopy & { emailLabel: string };
  contact: Action;
}

export interface ContactPage {
  header: PageCopy;
  form: SectionCopy & {
    fields: Record<'name' | 'email' | 'phone' | 'subject' | 'message', string>;
    placeholders: Record<'name' | 'email' | 'phone' | 'message', string>;
    subjectPrompt: string;
    messageHint: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    noScript: string;
    validation: {
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
    };
  };
  details: {
    phone: string;
    email: string;
    address: string;
    hours: string;
  };
  map: {
    title: string;
    notice: string;
    load: string;
    hide: string;
  };
}
