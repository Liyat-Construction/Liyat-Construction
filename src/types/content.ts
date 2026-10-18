/**
 * Content Type Definitions
 * Shapes for the content files in src/data/*
 */

export interface ImageAsset {
  /** Path under /public, e.g. '/projects/villa.jpg' */
  url: string;
  alt: string;
}

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
}

export interface Testimonial {
  quote: string;
  clientName: string;
  company: string;
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
