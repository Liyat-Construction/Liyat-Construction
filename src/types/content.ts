/**
 * Content Type Definitions
 * Shapes for the content files in src/data/*. Cards take these objects directly
 * (Design System §3.2), so a change here shows up as a type error.
 * Facts the client has not confirmed are optional: a missing fact renders nothing.
 */

/** Which part of a photo stays in view when a ratio crops it (portrait photos in 4:3 cards). */
export type ImageFocus = 'center' | 'top' | 'bottom' | 'left' | 'right';

export interface ImageAsset {
  /** Path of the prepared image, e.g. '/images/projects/<slug>/cover.webp' (Engineering §5) */
  url: string;
  alt: string;
  /** Defaults to 'center' */
  focus?: ImageFocus;
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
  | 'well-drilling'
  | 'pumping-tests'
  | 'wellhead-rehabilitation'
  | 'pump-installation'
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
  /** Site/project photo shown with the partner name when no logo is available. */
  photo?: string;
  url?: string;
}

/** A link shown as a button or text link. Labels are verbs in sentence case (Brand §8). */
export interface Action {
  label: string;
  href: string;
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
  intro?: string;
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
    overview: string;
    forWho: string;
    includes: string;
    method: string;
    deliverables: string;
    related: string;
    allProjects: Action;
  };
}

/** The band that ends every page except Contact (Design System §3.4). */
export interface CtaBandContent {
  title: string;
  text: string;
  action: Action;
}

/** Home page copy, in section order (Design System §4). The eyebrow of the hero is the descriptor. */
export interface HomePage {
  hero: {
    title: string;
    lead: string;
    image: ImageAsset;
    primary: Action;
    secondary: Action;
  };
  proof: SectionCopy & { clientsTitle: string };
  projects: SectionCopy & { link: Action };
  lifecycle: SectionCopy;
  equipment: SectionCopy & { link: Action };
  testimonials: SectionCopy;
}

export interface ContactPage {
  title: string;
  description: string;
  formTitle: string;
  formDescription: string;
  successMessage: string;
}
