/**
 * Content Type Definitions
 * Shapes for the content files in src/data/*. Cards take these objects directly
 * (PROJECT.md §6), so a change here shows up as a type error.
 * Facts the client has not confirmed are optional: a missing fact renders nothing.
 */

/** Which part of a photo stays in view when a ratio crops it (portrait photos in 4:3 cards). */
export type ImageFocus = 'center' | 'top' | 'right' | 'upper-left';

export interface ImageAsset {
  /** Path of the prepared image, e.g. '/images/projects/<slug>/cover.webp' (PROJECT.md §9) */
  url: string;
  alt: string;
  /** Defaults to 'center' */
  focus?: ImageFocus;
}

/** A headline figure: a depth, a yield, a count. `water` marks water data (PROJECT.md §5). */
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

/** The six services (PROJECT.md §8), in lifecycle order. Also the ids of the well-diagram parts. */
export type ServiceSlug =
  | 'hydrogeological-survey'
  | 'borehole-drilling'
  | 'pumping-tests'
  | 'borehole-rehabilitation'
  | 'pump-supply-installation'
  | 'turnkey-projects';

export interface Service {
  slug: ServiceSlug;
  /** The official name (PROJECT.md §8), used identically everywhere */
  title: string;
  /** One line, on the service card */
  summary: string;
  /** Lead paragraph of the service page */
  intro: string;
  overview: string;
  /** One sentence naming the parts of the well this service builds (lit on the diagram) */
  wellNote: string;
  forWho: string;
  includes: string[];
  /** Method steps, in order */
  method: string[];
  /** What the client receives */
  deliverables: string[];
  /** Verb-first button text, e.g. 'Request a site survey' (PROJECT.md §8) */
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
  scope?: string;
  /** The scope of work */
  description: string;
  /** Cover photo: cards, page header, Open Graph */
  image: ImageAsset;
  imageCaption?: string;
  gallery: ImageAsset[];
  /** Services delivered, in lifecycle order; empty when the work is outside the six (C-09) */
  services: ServiceSlug[];
  /** Well depth, e.g. { value: '180', unit: 'm', label: 'Well depth' } */
  depth?: Stat;
  shoringDepth?: Stat;
  /** Tested yield (water: true). The project card shows it before depth */
  yield?: Stat;
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

export interface TeamMember {
  name: string;
  role: string;
  portrait?: ImageAsset;
}

export interface Partner {
  name: string;
  /** Prepared image path, e.g. '/images/clients/acme.webp'. Without a logo, the name is shown as text. */
  logo?: string;
}

/** A link shown as a button or text link. Labels are verbs in sentence case (PROJECT.md §8). */
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
  /** One sentence, at most about 20 words (D-73) */
  intro?: string;
  /** Landscape photo behind the page header (D-72) */
  image?: ImageAsset;
  /** Meta description for search results */
  description: string;
}

/** Shared labels for the six /services/[slug] pages (the /services overview is removed — D-60). */
export interface ServicesPage {
  /** Headings of the sections on every /services/[slug] page */
  detail: {
    /** Eyebrow on a service page, followed by its number */
    eyebrow: string;
    overview: string;
    /** Heading above the highlighted well diagram */
    wellPart: string;
    forWho: string;
    includes: string;
    method: string;
    deliverables: string;
    related: string;
    allProjects: Action;
  };
}

/** /projects (list only — D-60). */
export interface ProjectsPage {
  header: PageCopy;
  /** The clients row under the projects */
  clients: SectionCopy;
  /** Eyebrow above each project's gallery under the cards (O-12) */
  gallery: SectionCopy;
}

/** A section of running text, with an optional button (Story section). */
export interface StoryCopy extends SectionCopy {
  paragraphs: string[];
}

/** /about, in section order (PROJECT.md §7). Company facts come from company.ts. */
export interface AboutPage {
  header: PageCopy & { image: ImageAsset };
  story: StoryCopy & { factsTitle: string };
  figures: SectionCopy;
  missionVision: SectionCopy & { items: Feature[] };
  values: SectionCopy & { items: Feature[] };
  clients: SectionCopy;
  team: SectionCopy;
  safety: SectionCopy & { link: Action };
}

/** The band that ends every page except Contact (PROJECT.md §6). */
export interface CtaBandContent {
  title: string;
  text: string;
  action: Action;
  /** Label of the call button, e.g. 'Call us now'; the number is in its link and read to screen readers */
  call: string;
}

/** Home page copy, in section order (PROJECT.md §7). The eyebrow of the hero is the descriptor. */
export interface HomePage {
  hero: {
    title: string;
    lead: string;
    primary: Action;
    secondary: Action;
    /** The full-screen photo behind the headline (D-81), and its corner caption */
    image: ImageAsset;
    caption: string;
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
  rigs: StoryCopy & { image: ImageAsset };
  support: SectionCopy & { items: Feature[] };
  methods: SectionCopy & { items: Feature[] };
  figures: SectionCopy;
  readiness: StoryCopy & { action: Action };
}

/** /environment, in section order (PROJECT.md §7). */
export interface EnvironmentPage {
  header: PageCopy;
  story: StoryCopy & { image: ImageAsset };
  groundwater: SectionCopy & { items: Feature[] };
  practices: SectionCopy & { items: Feature[] };
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
}
