# Project Documentation — Static Business Website Template

## Overview

A single-repository static website template built with **Next.js 16 (App
Router)**, **React 19**, **TypeScript (strict)** and **Tailwind CSS 4**, with
Framer Motion animations and a light/dark theme.

All content is TypeScript data inside this repo — the site is fully static and
renders at build time. It can be deployed either as a normal Next.js app
(Vercel) or as a static export (`out/` folder) for cPanel and other plain
static hosting.

## Repository layout

```
├── next.config.ts              # Security headers, image config, static-export switch
├── package.json                # aksumite-web-next-static
├── .env.example                # NEXT_PUBLIC_SITE_URL (+ optional GA/verification)
├── scripts/
│   └── check-placeholders.mjs  # npm run check:placeholders
├── public/
│   ├── logo.png, og-image.png  # replace per client
│   ├── partners/               # trusted-partner logos
│   ├── projects/               # project images
│   └── placeholders/           # template placeholder artwork
└── src/
    ├── config/
    │   ├── site.ts             # ★ primary client-facing config (see below)
    │   └── env.ts              # typed env access
    ├── data/                   # ★ all marketing content lives here
    │   ├── home.ts             # hero, section titles/subtitles, CTA
    │   ├── about.ts            # about page + homepage about summary
    │   ├── services.ts         # service cards + detail page content
    │   ├── projects.ts         # portfolio projects (list + detail)
    │   ├── testimonials.ts     # client testimonials
    │   ├── partners.ts         # trusted-partner strip
    │   └── contact.ts          # contact section copy
    ├── types/content.ts        # shared content types
    ├── components/             # navbar, hero, sections, footer, contact-section,
    │                         # telegram-chat-button, theme-provider, …
    └── app/
        ├── layout.tsx          # fonts, brand CSS variables, theme, site-wide chrome
        ├── page.tsx            # homepage: Hero → About → Services → Projects
        │                       #           → Partners → Testimonials → Contact → CTA
        ├── about/              # about page
        ├── services/           # list + [slug] detail
        ├── projects/           # list + [slug] detail
        ├── privacy-policy/     # legal page (content from siteConfig.legal)
        ├── terms-of-service/   # legal page (content from siteConfig.legal)
        ├── sitemap.ts          # static route list
        ├── robots.ts           # static robots rules
        ├── not-found.tsx, error.tsx, loading.tsx
        └── globals.css         # Tailwind + CSS variables
```

## The client-facing files you touch for every client

### 1. `src/config/site.ts` — identity & configuration

- `brand.colors` → written to CSS variables in `layout.tsx`; every `bg-brand-*`
  / `text-brand-*` class follows automatically.
- `name`, `tagline`, `description`, `locale`, `language`.
- `contact`: email, phone, address, `officeHours`, `mapEmbedUrl`,
  `defaultPhoneCountry`.
- `social`: telegram, whatsapp, facebook, instagram, linkedin, tiktok, youtube,
  x — **empty string hides that icon/feature**. `social.telegram` powers the
  site-wide floating "Chat on Telegram" button rendered in `layout.tsx`.
- `contactForm`: `provider: 'none' | 'formspree' | 'web3forms'` + `formKey`.
  `'none'` removes the form; the section then shows only details/map/socials.
- `seo`, `schema` (JSON-LD LocalBusiness fields), `footer`, `legal`.

### 2. `src/data/*` — page copy

Plain exported constants typed against `src/types/content.ts`. Pages import
them directly; there is no fetching layer. Images are paths under `/public`.

## Contact & communication

- **Telegram:** `siteConfig.social.telegram` → floating button on every page
  (`telegram-chat-button.tsx`, mounted in `layout.tsx`). Empty = hidden.
- **Contact section:** map iframe (from `contact.mapEmbedUrl`), phone, email,
  address, office hours, social icons — each row hides when its value is empty.
- **Form:** rendered only when `contactForm.provider !== 'none'` and `formKey`
  is non-empty. Submissions are posted client-side to Formspree
  (`https://formspree.io/f/{formKey}`) or Web3Forms
  (`https://api.web3forms.com/submit`). Works on static hosting since
  no server route is involved.

## Deployment

| Target               | Command                | Output                                                                              |
| -------------------- | ---------------------- | ----------------------------------------------------------------------------------- |
| Vercel / Node host   | `npm run build`        | standard Next.js build                                                              |
| cPanel / static host | `npm run build:static` | `out/` directory (`STATIC_EXPORT=true` sets `output: 'export'` in `next.config.ts`) |

Set `NEXT_PUBLIC_SITE_URL` to the production domain before building so the
sitemap, robots and Open Graph URLs are correct.

## Security

Security headers are set in `next.config.ts` for Next.js hosting (CSP,
X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy).
`'unsafe-eval'` is only allowed in development; the production CSP omits it.
Static hosts must configure equivalent headers at the hosting layer.

## Quality gates

```bash
npm run validate            # type-check + lint + format check
npm run check:placeholders  # flags leftover template text (exits 1 if found)
npm run build && npm run build:static
```

`check:placeholders` scans `src/` and `public/` for strings like "Brand Name",
"Your …", `[Enter your …]`, `/placeholders/` images and common filler —
run it before delivering any client site.

## Working with AI tools

See `AGENTS.md` — it contains the condensed version of this document plus the
conventions and rules an AI coding assistant should follow.
