/**
 * Site Configuration — the primary file to edit for every new client.
 * Brand identity, contact details, social links, SEO and the contact form live here.
 * Page copy lives in src/data/*.
 *
 * Rule of thumb: an empty string hides the related UI (no phone → no phone row,
 * no telegram → no floating Telegram button, no map → no map, etc.).
 */

export type ContactFormProvider = 'none' | 'formspree' | 'web3forms';

export const siteConfig = {
  // ── Brand Colors ────────────────────────────────────────────────────────────
  // These feed into CSS custom properties via layout.tsx. Change here and the
  // whole site updates automatically. No need to touch globals.css.
  brand: {
    colors: {
      primary: '#176B45',
      primaryDark: '#0f4a2f',
      primaryLight: '#1e8555',
      accent: '#174A70',
      accentDark: '#0f2d44',
    },
    // Font names here MUST match the imports in src/app/layout.tsx
    fonts: {
      body: 'Inter',
      heading: 'Manrope',
    },
  },

  // ── Navigation ──────────────────────────────────────────────────────────────
  // One source of truth for nav links across desktop, tablet and mobile.
  navigation: {
    desktop: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/services', label: 'Services' },
      { href: '/projects', label: 'Projects' },
      { href: '/equipment-capabilities', label: 'Equipment' },
      { href: '/testimonials', label: 'Testimonials' },
      { href: '/contact', label: 'Contact' },
    ],
    tablet: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/services', label: 'Services' },
      { href: '/projects', label: 'Projects' },
    ],
    cta: { href: '/contact', label: 'Get Started' },
  },

  // ── Brand Identity ──────────────────────────────────────────────────────────
  name: 'Liyat Construction',
  tagline: 'Groundwater Development & Water-Well Engineering',
  description:
    'Liyat Construction PLC is an Ethiopian company specializing in groundwater development, water-well drilling, pumping tests, and turnkey water works for institutional, governmental, and commercial clients.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  logoAlt: 'Liyat Construction Logo',
  // Open Graph locale (e.g. 'en_US', 'am_ET') and <html lang> value
  locale: 'en_US',
  language: 'en',

  // ── Contact Details ─────────────────────────────────────────────────────────
  contact: {
    email: 'hello@liyatconstruction.com',
    phone: '+251 93 001 4711', // Used as-is for display; strip spaces for tel: links
    address: '301 Mickey Leland St, Addis Ababa, Ethiopia',
    officeHours: 'Mon–Sat, 8:00 AM – 5:00 PM',
    // Google Maps → Share → Embed a map → copy only the src="..." URL
    mapEmbedUrl: '',
    // Default country for the phone field in the contact form (ISO code)
    defaultPhoneCountry: 'ET',
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
    provider: 'none' as ContactFormProvider,
    formKey: '',
    subjects: ['General Inquiry', 'Request a Quote', 'Partnership', 'Other'],
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
    description:
      'Groundwater development, water-well drilling, and turnkey water works for institutional and commercial clients across Ethiopia.',
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
