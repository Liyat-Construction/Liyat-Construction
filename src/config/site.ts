/**
 * Site Configuration — the primary file to edit for every new client.
 * Brand identity, contact details, social links, SEO and the contact form live here.
 * Page copy lives in src/data/*; design values live in src/styles/tokens.css.
 *
 * Rule of thumb: an empty string hides the related UI (no phone → no phone row,
 * no telegram → no floating Telegram button, no map → no map, etc.).
 */

export type ContactFormProvider = 'none' | 'formspree' | 'web3forms';

export const siteConfig = {
  // ── Navigation ──────────────────────────────────────────────────────────────
  // One source of truth for nav links across desktop, tablet and mobile.
  navigation: {
    // Header, mobile menu and footer. Home is the logo; Contact is the button (Brand §8).
    main: [
      { href: '/about', label: 'About' },
      { href: '/services', label: 'Services' },
      { href: '/projects', label: 'Projects' },
      { href: '/equipment-capabilities', label: 'Equipment' },
      { href: '/testimonials', label: 'Testimonials' },
    ],
    cta: { href: '/contact', label: 'Contact us' },
    legal: [
      { href: '/privacy-policy', label: 'Privacy policy' },
      { href: '/terms-of-service', label: 'Terms of service' },
    ],
  },

  // ── Brand Identity ──────────────────────────────────────────────────────────
  name: 'Liyat Construction',
  tagline: 'Groundwater Development & Water-Well Engineering',
  description:
    'Liyat Construction PLC is an Ethiopian company specializing in groundwater development, water-well drilling, pumping tests, and turnkey water works for institutional, governmental, and commercial clients.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  logoAlt: 'Liyat Construction',
  /** Shown with the logo wherever someone meets us first (Brand §1) */
  descriptor: 'Water Well Drilling & Engineering',
  legalName: 'Liyat Construction PLC',
  // PLACEHOLDER(C-21): exact Amharic legal name, as printed on the brochure
  legalNameAmharic: 'ልያት ኮንስትራክሽን ኃ.የተ.የግል ማህበር',
  // Open Graph locale (e.g. 'en_US', 'am_ET') and <html lang> value
  locale: 'en_US',
  language: 'en',

  // ── Contact Details ─────────────────────────────────────────────────────────
  contact: {
    // PLACEHOLDER(C-05): does this mailbox exist? Brochure: liyatdrilling2021@gmail.com
    email: 'hello@liyatconstruction.com',
    // PLACEHOLDER(C-04): numbers to publish (brochure also lists +251 90 680 8182)
    phone: '+251 93 001 4711', // Used as-is for display; strip spaces for tel: links
    // PLACEHOLDER(C-04): second published number from the brochure; client must confirm
    secondaryPhone: '+251 90 680 8182',
    // PLACEHOLDER(C-03): brochure says Eldasol Building, 2nd floor, Office 202, Bole, Woreda 04
    address: '301 Mickey Leland St, Addis Ababa, Ethiopia',
    // PLACEHOLDER(C-07): office hours and working days
    officeHours: 'Mon–Sat, 8:00 AM – 5:00 PM',
    // Google Maps → Share → Embed a map → copy only the src="..." URL
    // PLACEHOLDER(C-24): confirmed office pin required before showing the map
    mapEmbedUrl: '',
  },

  // ── Social Links ────────────────────────────────────────────────────────────
  // Leave any value empty to hide it.
  social: {
    telegram: '', // Username only, without @ (powers the floating "Chat on Telegram" button)
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
  // 'none'      → form hidden, only contact details/socials/map are shown
  // 'formspree' → formKey is the form ID from https://formspree.io (e.g. 'xyzabcde')
  // 'web3forms' → formKey is the access key from https://web3forms.com
  contactForm: {
    provider: 'web3forms' as ContactFormProvider,
    // PLACEHOLDER(C-25): public provider key for the client's confirmed receiving inbox
    formKey: '',
    subjects: ['Project inquiry', 'Request a quotation', 'Partnership', 'Other'],
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
    ogImageAlt: 'Liyat Construction',
  },

  // ── JSON-LD Structured Data ─────────────────────────────────────────────────
  schema: {
    // Any schema.org business type, e.g. 'LocalBusiness', 'GeneralContractor', 'ChildCare'
    type: 'GeneralContractor',
    alternateName: ['Liyat Construction PLC'] as string[],
    slogan: 'Groundwater Development & Water-Well Engineering',
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
    // The company description, used unchanged (Brand §10)
    description:
      'Liyat Construction is a groundwater development company specializing in water well drilling and engineering. We take water projects from hydrogeological survey through drilling, well construction and testing to pump installation, and we document every stage for our clients. Our work is built to keep water flowing for years.',
    copyrightEntity: 'Liyat Construction PLC',
  },

  // ── Legal Pages ─────────────────────────────────────────────────────────────
  legal: {
    companyFullName: 'Liyat Construction PLC',
    jurisdiction: 'Ethiopia',
    courtLocation: 'Addis Ababa, Ethiopia',
    lastUpdated: 'October 2026',
  },
};

export type SiteConfig = typeof siteConfig;
