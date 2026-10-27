/**
 * Site Configuration — the primary file to edit for every new client.
 * Brand identity, contact details, social links, SEO and the contact form live here.
 * Page copy lives in src/data/*; design values live in src/styles/tokens.css.
 *
 * Rule of thumb: an empty string hides the related UI (no phone → no phone row,
 * no map → no map, etc.).
 */

export type ContactFormProvider = 'none' | 'web3forms';

export const siteConfig = {
  // ── Navigation ──────────────────────────────────────────────────────────────
  // One source of truth for nav links across desktop, tablet and mobile.
  navigation: {
    // Header, mobile menu and footer, in the home page's section order (D-59). Links go
    // to pages; Services and Testimonials have no page and jump to their home section.
    // `match` marks the link current on other paths (service pages mark "Services").
    // Contact is the button (PROJECT.md §8).
    main: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/#services', label: 'Services', match: '/services' },
      { href: '/projects', label: 'Projects' },
      { href: '/equipment-capabilities', label: 'Equipment' },
      { href: '/environment', label: 'Environment' },
      { href: '/#testimonials', label: 'Testimonials' },
    ],
    cta: { href: '/#contact', label: 'Contact us' },
    legal: [
      { href: '/privacy-policy', label: 'Privacy policy' },
      { href: '/terms-of-service', label: 'Terms of service' },
    ],
  },

  // ── Brand Identity ──────────────────────────────────────────────────────────
  name: 'Liyat Construction',
  description:
    'Liyat Construction PLC is an Ethiopian company specializing in groundwater development, water-well drilling, pumping tests, and turnkey water works for institutional, governmental, and commercial clients.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  logoAlt: 'Liyat Construction',
  /** Shown with the logo wherever someone meets us first (PROJECT.md §8) */
  descriptor: 'Water Well Drilling & Engineering',
  legalName: 'Liyat Construction PLC',
  // Spelling confirmed (owner, 2026-10-27). Shown only in About's "Company at a glance";
  // the footer uses the English legal name only (D-80)
  legalNameAmharic: 'ልያት ኮንስትራክሽን ኃ.የተ.የግል ማህበር',
  // Open Graph locale (e.g. 'en_US', 'am_ET') and <html lang> value
  locale: 'en_US',
  language: 'en',

  // ── Contact Details ─────────────────────────────────────────────────────────
  contact: {
    // C-05 confirmed: liyatconstruction@gmail.com (owner, 2026-10-25). The older
    // liyatdrilling2021@gmail.com on the proposal letterhead is not used.
    email: 'liyatconstruction@gmail.com',
    // C-04: the two numbers on the client's proposal letterhead (Dec 2025) and brochure
    phone: '+251 93 001 4711', // Used as-is for display; strip spaces for tel: links
    secondaryPhone: '+251 90 680 8182',
    // PLACEHOLDER(C-03): proposal letterhead reads "Bole Sub City, Woreda 04, House Number
    // 201"; the brochure said "Eldasol Building, 2nd floor, Office 202" — confirm which is current
    address: 'Bole Sub City, Woreda 04, House Number 201, Addis Ababa, Ethiopia',
    // Owner, 2026-10-27: standard hours kept unconfirmed (C-07 dropped); the client
    // corrects them if they disagree
    officeHours: 'Mon–Sat, 8:00 AM – 5:00 PM',
  },

  // ── Social Links ────────────────────────────────────────────────────────────
  // Leave any value empty to hide it.
  social: {
    whatsapp: '', // Number in international format without + or spaces, e.g. '251911000000'
    facebook: '',
    instagram: '',
    linkedin: '',
    tiktok: '',
    youtube: '',
    x: '',
    xHandle: '', // e.g. '@brand' — used for Twitter/X cards
  },

  // ── Contact Form ────────────────────────────────────────────────────────────
  // 'none'      → the form cannot send; only the contact details work
  // 'web3forms' → formKey is the access key from https://web3forms.com (D-53)
  contactForm: {
    provider: 'web3forms' as ContactFormProvider,
    // PLACEHOLDER(C-25): public provider key for the client's confirmed receiving inbox
    formKey: '',
    // General first, then the six services (keep in sync with PROJECT.md §8), then Other last
    subjects: [
      'General question',
      'Hydrogeological & Geophysical Survey',
      'Borehole Drilling',
      'Pumping Tests',
      'Borehole Rehabilitation',
      'Pump Supply & Installation',
      'Turnkey Water Projects',
      'Privacy policy',
      'Terms of service',
      'Other',
    ],
  },

  system: {
    notFound: {
      eyebrow: '404',
      title: 'Page not found',
      intro: 'This page may have moved, or the address may be incorrect.',
    },
    error: {
      eyebrow: 'Something went wrong',
      title: 'We could not load this page',
      intro: 'Please try again. If the problem continues, contact us by phone or email.',
    },
    retry: 'Try again',
    home: 'Return home',
    contact: 'Contact us',
  },

  // ── SEO & Open Graph ────────────────────────────────────────────────────────
  seo: {
    titleDefault: 'Liyat Construction | Groundwater Development & Water-Well Engineering',
    titleTemplate: '%s | Liyat Construction',
    metaDescription:
      'Liyat Construction PLC delivers groundwater investigation, water-well drilling, pumping tests, pump installation, and turnkey water systems in Ethiopia for institutional and commercial clients.',
    keywords: [
      'water well drilling Ethiopia',
      'groundwater development',
      'borehole drilling Addis Ababa',
      'pumping test Ethiopia',
      'water works contractor',
      'Liyat Construction',
    ] as string[],
    category: 'business',
    ogTitle: 'Liyat Construction | Groundwater Development & Water-Well Engineering',
    ogDescription:
      'Ethiopian groundwater development and water-well engineering contractor serving government, institutional, and commercial clients.',
    ogImage: '/og-image.jpg',
    ogImageAlt: 'Water rising beside a Liyat Construction drilling rig',
  },

  // ── JSON-LD Structured Data ─────────────────────────────────────────────────
  schema: {
    // Any schema.org business type, e.g. 'LocalBusiness', 'GeneralContractor', 'ChildCare'
    type: 'GeneralContractor',
    alternateName: ['Liyat Construction PLC'] as string[],
    // The client's tagline (PROJECT.md §8), confirmed by the owner 2026-10-27
    slogan: 'Know better. Drill better.',
    areaServed: ['Ethiopia', 'Addis Ababa', 'Afar Region'] as string[],
    priceRange: '',
    knowsAbout: [
      'Groundwater investigation',
      'Water well drilling',
      'Pumping tests',
      'Pump installation',
      'Electromechanical works',
      'Turnkey water supply projects',
    ] as string[],
    availableLanguage: ['English'] as string[],
  },

  // ── Footer ──────────────────────────────────────────────────────────────────
  footer: {
    headings: { pages: 'Pages', services: 'Services', contact: 'Contact' },
    // The company description, used unchanged (PROJECT.md §8)
    description:
      'Liyat Construction is a groundwater development company specializing in water well drilling and engineering. We take water projects from hydrogeological survey through drilling, well construction and testing to pump installation, and we document every stage for our clients. Our work is built to keep water flowing for years.',
    copyrightEntity: 'Liyat Construction PLC',
    /** After "© {year} {legal name}." in the bottom bar */
    rights: 'All rights reserved.',
    // PLACEHOLDER(C-31): Wondwossen approves the agency credit and its two icon links (D-64, D-79)
    credit: {
      prefix: 'Built by',
      name: 'Digital Aksumite',
      href: 'https://digitalaksumite.com',
      // Icon links beside the credit; the labels name the agency so they are not read as Liyat's own
      links: [
        {
          icon: 'mail' as const,
          label: 'Email Digital Aksumite',
          href: 'mailto:hello@digitalaksumite.com',
        },
        {
          icon: 'instagram' as const,
          label: 'Digital Aksumite on Instagram',
          href: 'https://www.instagram.com/digitalaksumite/',
        },
      ],
    },
  },

  // ── Legal Pages ─────────────────────────────────────────────────────────────
  legal: {
    companyFullName: 'Liyat Construction PLC',
    jurisdiction: 'Ethiopia',
    courtLocation: 'Addis Ababa, Ethiopia',
  },
};

export type SiteConfig = typeof siteConfig;
