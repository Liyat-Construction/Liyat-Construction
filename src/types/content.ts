/**
 * Content Type Definitions
 * Shapes for the content files in src/data/*
 */

/** Which part of a photo stays in view when a ratio crops it (portrait photos in 4:3 cards). */
export type ImageFocus = 'center' | 'top' | 'bottom' | 'left' | 'right';

export interface ImageAsset {
  /** Path under /public, e.g. '/projects/villa.jpg' */
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

// Fields marked "P6" are optional until P6 fills the data; P6 makes the essential ones required.
export interface Project {
  title: string;
  slug: string;
  client?: string;
  location?: string;
  summary: string;
  description: string;
  image?: ImageAsset;
  gallery?: ImageAsset[];
  tags: string[];
  completedDate?: string;
  /** Optional external link (e.g. a live website or case study) */
  url?: string;
  featured: boolean;
  /** P6: year completed */
  year?: number;
  /** P6: e.g. { value: '180', unit: 'm' } */
  depth?: Stat;
  /** P6: tested yield, e.g. { value: '6.5', unit: 'L/s', water: true } */
  yield?: Stat;
  /** P6: e.g. '6 weeks' */
  duration?: string;
  /** P6: service slugs, in lifecycle order */
  services?: string[];
  /** P6: the one figure shown on the project card */
  keyFigure?: Stat;
}

export interface Testimonial {
  quote: string;
  clientName: string;
  company: string;
  /** P6: replaces the role half of `company` */
  role?: string;
  /** P6: replaces the organization half of `company` */
  organization?: string;
}

export interface Equipment {
  name: string;
  /** e.g. 'Drilling rig', 'Air compressor' */
  type: string;
  image?: ImageAsset;
  /** Key specs, e.g. rated depth, as label/value pairs */
  specs: { label: string; value: string }[];
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
  /** Letter thumbnail */
  thumbnail: ImageAsset;
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
  /** Path under /public, e.g. '/partners/acme.png'. Without a logo, the name is shown as text. */
  logo?: string;
  /** Site/project photo shown with the partner name when no logo is available. */
  photo?: string;
  url?: string;
}

export interface Service {
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  heroText?: string;
  howToStart?: string;
  howToStartTagline?: string;
  tag: string;
  isHighlighted?: boolean;
  forWho: string;
  includes: string[];
  ctaText: string;
}

export interface HomePage {
  heroTitleLines: [string, string, string];
  /** Full-bleed hero background photos (cross-fade every 5s). Empty → animated gradient. */
  heroSlides?: ImageAsset[];
  heroSubtitle: string;
  heroPrimaryButtonText: string;
  heroPrimaryButtonUrl: string;
  heroSecondaryButtonText: string;
  heroSecondaryButtonUrl: string;
  servicesTitle: string;
  servicesSubtitle: string;
  projectsTitle: string;
  projectsSubtitle: string;
  partnersTitle: string;
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaPrimaryButtonText: string;
  ctaPrimaryButtonUrl: string;
  ctaSecondaryButtonText: string;
  ctaSecondaryButtonUrl: string;
}

export interface AboutSummary {
  title: string;
  summary: string;
  buttonText: string;
}

export interface ContactPage {
  title: string;
  description: string;
  formTitle: string;
  formDescription: string;
  successMessage: string;
}
