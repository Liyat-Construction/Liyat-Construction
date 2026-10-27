# Liyat Construction website — technical guide

Read this before changing anything. It explains how the site is built and the rules
that keep it consistent. Status and next steps are in [`WORKFLOW.md`](../WORKFLOW.md).

## 1. What it is

A marketing site for **Liyat Construction PLC**, an Ethiopian water-well drilling and
groundwater engineering company (public name "Liyat Construction"). The audience is
government bodies, embassies, NGOs, institutions and developers; the main action is
**Contact us**. Built by Digital Aksumite. No CMS: all content is TypeScript in this repo.

**Pages:** Home · About · Projects · Equipment (`/equipment-capabilities`) · Environment ·
six service pages (`/services/<slug>`) · Privacy policy · Terms of service · 404.
Services, Testimonials and Contact are sections of Home (`/#services`, `/#testimonials`,
`/#contact`), not pages. `/styleguide` shows every component; it is `noindex` and unlinked.

## 2. Stack and commands

Next.js 16 (App Router, Turbopack, React Compiler) · React 19 · TypeScript strict ·
Tailwind CSS 4 · lucide-react icons · zod/mini for the form · sharp for images.
Output is fully static (`output: 'export'` when `STATIC_EXPORT=true`).

```bash
npm run dev                 # http://localhost:3000
npm run validate            # type-check + lint + Prettier check   — must pass
npm run check:design        # no raw design values outside tokens.css — must pass
npm run build:static        # static site → out/                  — must pass
npm run check:placeholders  # open client items; must be zero at launch
npm run images              # prepare web images from assets/images/
npm run images:og           # the 1200 × 630 social image
node --test scripts/contact-form.test.mjs scripts/seo.test.mjs   # SEO tests need out/
```

Environment (`.env.local`, see `.env.example`): `NEXT_PUBLIC_SITE_URL` (production
domain — canonical URLs, sitemap, Open Graph) and optional
`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.

## 3. Architecture

```
src/
├── app/            routes: page.tsx picks sections and passes them data; layout.tsx = header,
│                   main, closing section (CtaBand), footer, fonts, JSON-LD
│   └── _home/      home-sections.tsx — every Home section below the hero, in nav order
├── components/
│   ├── ui/         primitives (Button, Card, Section, Photo, Stat, Field…) — visual styling
│   ├── cards/      domain cards (ProjectCard, ServiceCard…)               — visual styling
│   ├── sections/   page sections (Hero, PageHeader, Story, FeatureGrid…)  — layout only
│   ├── layout/     Header, MobileMenu, NavLinks, Footer, SkipLink
│   └── diagrams/   WellDiagram (SVG cross-section of a well)
├── config/site.ts  identity, contact details, navigation, SEO, form, footer
├── data/*.ts       all page copy and facts, one file per domain
├── lib/            cn() + pick(), metadata helpers, contact-form submit, image loader
├── styles/tokens.css  ★ the only file with raw design values
└── types/content.ts   shapes of everything in data/
assets/images/      image sources (never served)  →  public/images/ (generated)
scripts/            check-design, check-placeholders, optimize-images, prepare-og, tests
```

**Layers:** `app → sections → cards → ui → tokens`; a lower layer never imports a higher
one. **Only `src/app/` imports `src/data/`** — components get content through props
(exception: `layout/*` and `lib/metadata` read `siteConfig`).

**Server components by default.** The only client islands: `layout/mobile-menu.tsx`
(native `<dialog>`), `layout/nav-links.tsx` (current page), `layout/header-solid.tsx`
(header turns white after 64 px of scroll), `sections/contact-form.tsx`, `app/error.tsx`.
Client islands must not import `lib/utils` (it would ship tailwind-merge to every page).

## 4. Rules

- **One source for every decision.** Hex, px, rem and ms values live only in
  `tokens.css`. Visual classes live only in `components/ui` and `components/cards`;
  sections use layout classes (grid, flex, gap). Need a new look? Add a variant to the
  component — never a one-off class in a page. `check:design` enforces this.
- **Reuse before you create.** A new component goes into the library and onto `/styleguide`.
- **Everything has a purpose.** Delete unused components, variants, data and files.
- **Never invent facts** (figures, clients, names, quotes, certifications). Unconfirmed
  wording is marked `// PLACEHOLDER(C-xx): …` pointing at the client asks in `WORKFLOW.md`.
- **No new dependencies** without the owner's approval. Kebab-case filenames, named
  exports, no `any`, no `@ts-ignore`. Variant lookups use `pick(map, key)`.
- **Done means:** validate, check:design and build:static pass, and the change is looked
  at in the browser at 375, 768 and 1280 px with no console errors.

## 5. Design tokens and brand

| Token         | Value     | Use                                                           |
| ------------- | --------- | ------------------------------------------------------------- |
| `brand`       | `#156635` | Liyat Green: buttons, links, the rule. Never on Ink (2.2 : 1) |
| `brand-dark`  | `#0F4F28` | Hover of green only                                           |
| `brand-tint`  | `#E7F0EA` | Table stripes, success                                        |
| `brand-light` | `#A9DDBA` | Lines on dark; footer headings and legal eyebrows on Ink      |
| `ink`         | `#1D2521` | Text, hero, page headers, closing section, footer             |
| `ink-muted`   | `#56615B` | Secondary text, input borders                                 |
| `paper`       | `#F8F7F3` | Every page background (one page colour)                       |
| `white`       | `#FFFFFF` | Cards, inputs, header; text on dark                           |
| `stone`       | `#EEEBE3` | Fills (diagram ground, image placeholders)                    |
| `line`        | `#DCDAD3` | Hairlines, card borders, section dividers                     |
| `water`       | `#0B5CA0` | **Water data only** (yields, water levels)                    |
| `alert`       | `#B42318` | Form errors only                                              |

Tailwind's default colours, fonts, sizes, radii and shadows are switched off — only these
tokens exist. Fonts: **Manrope** 600/700 (headings, figures) and **Inter** 400/500/600
(text). Fluid type scale `display · h1–h4 · figure · lead · body · small · eyebrow`.
Radii 6 px (controls) / 8 px (cards). Almost no shadows. Motion: CSS only, `opacity` and
`transform`, off under `prefers-reduced-motion`.

**Look:** Paper pages with White cards; a dark Ink band opens every page (full-screen
photo hero on Home, `PageHeader` with a photo under a 65 % Ink scrim on inner pages); the
header floats see-through over it and turns white on scroll; every page ends with the Ink
closing section on a drawing grid and the Ink footer. A 1 px hairline (`SectionGroup`)
separates content sections. Photos keep natural colour — no colour washes, gradients
(except the hero's functional top fade), glows or decorative water drops. Headings in
sentence case; centred above full-width rows, left beside content.

**Dark surfaces:** `Section tone="ink"` sets `data-on-dark`; components style themselves
with the `on-dark:` variant (`text-brand on-dark:text-white`). `over-photo:` styles the
see-through header; `on-photo:` (`data-on-photo` on the Hero and a photo PageHeader) turns
text full white over a photo. The hero caption sits on a 65 % Ink plate.

**Logo:** `public/logo.png` (no vector exists; used in structured data). Pages show a 12 KB
WebP made from `assets/images/brand/logo.png` by `npm run images`. On dark it sits on a white plate.

## 6. Component library

- **ui:** Container · Section (`paper`/`ink`, spacing, grid pattern, rule) · SectionGroup ·
  SectionHeading · Eyebrow · Subheading · Button (`primary`/`secondary`, `md`/`lg`, icons) ·
  SmartLink (internal/external/tel/mailto) · Card · Photo (fixed ratios: `wide`, `card`,
  `portrait`, `fill`; `image.focus` picks the crop) · Backdrop (photo under a scrim) · Fade ·
  Stat · FactsTable · CheckList · Steps · Prose · Icon (registered names only) · Logo · Rule ·
  Breadcrumbs · Field/Input/Textarea/Select · FormFeedback · LegalDocument · FooterSurface ·
  SystemMessage.
- **cards:** ProjectCard · ServiceCard · TestimonialCard · TeamCard · FeatureCard · ClientCard.
- **sections:** Hero · PageHeader · Story · ServiceLifecycle · ServiceDetail ·
  FeaturedProjects · ProjectGrid · PhotoGallery · ProofStrip · ClientList · FeatureGrid ·
  TeamGrid · EquipmentTeaser · Testimonials · ContactPanel · ContactForm · CtaBand ·
  LegalContent.

Sections hide themselves when their data is empty. `/styleguide` shows each with real data.

## 7. Pages

- **Home:** Hero → Who we are (`#about`) → Services + well diagram (`#services`; hovering a
  service lights its part of the well, CSS `:has()`) → Projects + clients row (`#projects`)
  → Equipment (`#equipment`) → Testimonials (`#testimonials`) → Contact (`#contact`).
- **About:** story + company facts → figures → mission and vision → values → clients → team
  → safety (links to Environment).
- **Projects:** project cards → photo gallery (4:5 tiles) → clients.
- **Equipment:** rigs → pumping-test equipment → methods → project figures → site readiness.
- **Environment:** responsibility story → groundwater cards → site-practice cards.
- **Service pages:** overview + "What you receive" → the well diagram with this service's
  parts lit → what's included + method steps → related projects.
- **Legal:** numbered sections with a contents list; `noindex` until the client approves.

Navigation: Home · About · Services · Projects · Equipment · Environment · Testimonials,
then "Contact us". The link bar shows from 1280 px; below that, the hamburger menu.

## 8. Content and voice

- Copy lives in `src/data/*` and `src/config/site.ts`, typed by `src/types/content.ts`.
- **Voice:** plain and specific, like an engineer talking to a client. Facts over
  adjectives. Buttons are verbs ("Contact us", "Explore projects"), never "Learn more".
  **What we cannot show, we do not say.** Surveys and pumping tests are offered when the
  client needs them — never promise them on every project.
- **Tagline:** "Know better. Drill better." **Descriptor:** "Water Well Drilling & Engineering".
- **Service names** (identical everywhere, lifecycle order): Hydrogeological & Geophysical
  Survey · Borehole Drilling · Pumping Tests · Borehole Rehabilitation · Pump Supply &
  Installation · Turnkey Water Projects.
- **Figures in use** (Liyat's December 2025 proposal): 13 wells completed, 600 m deepest,
  4,700+ m drilled; General Manager's 19 years of drilling experience; founded 2019.
- **Contact form:** Web3Forms. Set `siteConfig.contactForm.formKey` to the access key;
  until then a submission shows the standard error. All fields required; honeypot spam field.

## 9. Images

Sources go in `assets/images/<folder>/`; `npm run images` writes WebP files at several
widths to `public/images/` and lists them in `src/lib/image-widths.json`. Data refers to an
image without a width (`/images/projects/<slug>/cover.webp`); the custom loader picks the
right width. Never edit `public/images/` by hand. Every image has meaningful `alt` text in
data. Most project photos are portrait phone shots; set `focus: 'top'` when a crop cuts
off the subject. Budget: card images ≤ 70 KB at 800 px (current photos exceed it — they are
recompressed social-media images and no originals exist).

## 10. Quality bar

- **Performance:** Lighthouse ≥ 95, LCP < 2.0 s, CLS < 0.05; first-load JS ≤ 190 KB gzip
  per route; one priority image per page; no third-party scripts (no map, no analytics).
- **Accessibility (WCAG 2.2 AA):** one h1 per page, skip link, visible focus, 44 px targets,
  approved contrast pairs only, linked form errors, new-tab links announced.
- **SEO:** per-page metadata from `lib/metadata.ts`; sitemap from navigation + services;
  JSON-LD organisation and breadcrumbs; legal drafts and `/styleguide` are `noindex`.
- **Security:** headers and CSP in `next.config.ts` (Vercel/Node hosting; a static host
  needs the same headers in its own config).

## 11. Deployment

Vercel (owner's choice): `npm run build`, with `NEXT_PUBLIC_SITE_URL` set to the domain.
Static hosting: `npm run build:static` and upload `out/`. Before launch:
`check:placeholders` reports zero, the Web3Forms key is set and a real test inquiry arrives.
Known issue to test on the host: client-side navigation requests `__next.*.txt` files that a
plain static server may not serve; pages still load.

## 12. Decision references

Code comments cite decisions as `D-xx` (and client items as `C-xx`). The full decision log
up to D-115 is in git history (`git show bc67ac9:WORKFLOW.md`); the decisions that still
matter are summarised in `WORKFLOW.md`.
