# Engineering Standards

> How this codebase is built and how to change it. The bar: **fast, consistent,
> accessible, and easy for the next developer (human or AI) to change in one
> place.** The visual system is in [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md).

---

## 1. Stack

| Layer     | Choice                                                        | Why                                                    |
| --------- | ------------------------------------------------------------- | ------------------------------------------------------ |
| Framework | Next.js 16 (App Router), React 19                             | Static generation, file routing, image + font handling |
| Language  | TypeScript strict, no `any`                                   | Content shapes are checked at build time               |
| Styling   | Tailwind CSS 4, tokens in `@theme`                            | Utilities generated from one token file                |
| Icons     | lucide-react (tree-shaken)                                    | Line icons matching the brand                          |
| Forms     | react-hook-form + zod                                         | Small, accessible validation                           |
| Output    | Static HTML (`npm run build:static` → `out/`) or Next.js host | Works on cPanel, Vercel, any static host               |
| Content   | TypeScript files in `src/data/`                               | No CMS (out of scope); type-safe; versioned in git     |

**No new dependency without the owner's approval.** Removing one is always welcome.

## 2. Folder structure (target)

```
src/
├── app/                    # Routes only. page.tsx = choose sections + pass data + metadata
│   ├── layout.tsx          # fonts, <Header>, <Footer>, schema, skip link
│   ├── globals.css         # @import tailwind + tokens + base styles (reset, focus, reduced motion)
│   ├── styleguide/         # dev review page (noindex)
│   └── …routes
├── styles/
│   └── tokens.css          # ★ the ONLY file with raw design values
├── components/
│   ├── ui/                 # ★ primitives: Button, Card, Section, Stat, Photo, Field…
│   ├── cards/              # ProjectCard, ServiceCard, EquipmentCard…
│   ├── sections/           # Hero, PageHeader, ProofStrip, CtaBand…
│   ├── layout/             # Header, MobileMenu, Footer, SkipLink
│   └── diagrams/           # WellDiagram
├── config/
│   └── site.ts             # identity, contact, navigation, SEO, form provider
├── data/                   # ★ ALL page content (one file per domain)
├── lib/                    # cn(), contact-form submit, metadata helpers
└── types/
    └── content.ts          # shapes of everything in src/data
public/
└── images/{hero,projects/<slug>,equipment,team,clients,references}/
```

Kebab-case filenames; named exports; one component per file; files over ~200
lines are a signal to split.

## 3. Rules of the codebase

### Layering (see Design System §1)

`app → sections → cards → ui → tokens`. A lower layer never imports a higher one.
**Only `src/app/` imports from `src/data/`** — sections and cards receive data
through props. Exceptions: `layout/*` and `lib/metadata` read `siteConfig`.

### Styling

- No raw values outside `tokens.css`: no hex, `rgb()`, `px` font sizes, or
  arbitrary classes (`text-[17px]`). Enforced by `npm run check:design`.
- No styling classes in pages or sections except layout (grid, flex, gap, order, span).
- Never override a primitive's look via `className`; add a variant to the primitive instead.
- Combine classes with `cn()` from `src/lib/utils.ts`.

### Server first

Everything is a Server Component unless it needs browser state. The complete
list of allowed client islands:

| Client island                                 | Why                                  |
| --------------------------------------------- | ------------------------------------ |
| `layout/mobile-menu.tsx`                      | open/close state, focus trap         |
| `layout/header-scroll.tsx`                    | adds shadow after scroll             |
| `ui/reveal.tsx`                               | IntersectionObserver                 |
| `sections/service-lifecycle` interaction part | hover/focus highlight of the diagram |
| `sections/contact-form.tsx`                   | form state and submit                |

Adding a client component outside this list is a decision to record in `WORKFLOW.md`.

### Content

- Every visible string lives in `src/data/*` or `src/config/site.ts`.
- Every data file is typed against `src/types/content.ts`.
- Optional content renders nothing when empty (no empty headings, no "N/A").

### Placeholder convention

Content we do not have yet is written as **realistic placeholder content** so the
design can be judged, and marked in code with a comment that names the client
checklist item:

```ts
// PLACEHOLDER(C-12): replace with approved testimonial
{ quote: 'Liyat delivered a clear pumping test report…', clientName: 'Name Surname', … }
```

`npm run check:placeholders` lists every `PLACEHOLDER(` marker and **must
report zero before launch**. It is allowed to fail during development.

### TypeScript

Strict mode, no `any`, no `@ts-ignore`, no non-null `!` to silence errors,
`satisfies` for config maps. Props interfaces live next to the component.

## 4. Performance budget

Measured on the static build, Lighthouse mobile (simulated 4G, mid-tier phone).

| Metric                                            | Budget                                                                                             |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Lighthouse Performance                            | ≥ 95 every page                                                                                    |
| Lighthouse Accessibility / Best Practices / SEO   | 100                                                                                                |
| Largest Contentful Paint                          | < 2.0 s                                                                                            |
| Cumulative Layout Shift                           | < 0.05                                                                                             |
| Interaction to Next Paint                         | < 200 ms                                                                                           |
| Our own JS per route (gzip, on top of React/Next) | ≤ 30 KB (client islands + their libraries)                                                         |
| Total first-load JS per route (gzip)              | ≤ 190 KB, excluding the `nomodule` polyfill (guard rail; React 19 + Next 16 alone ≈ 155 KB — D-24) |
| Hero image                                        | ≤ 180 KB at 1920 px                                                                                |
| Card image                                        | ≤ 70 KB at 800 px                                                                                  |
| Web fonts                                         | 2 families, ≤ 5 weight files, self-hosted                                                          |

How we stay inside it:

- No animation library; motion is CSS (`transform`/`opacity` only).
- No dark mode (brand is white pages) — one set of styles.
- Exactly one `priority` image per page (the LCP image); all others lazy.
- Google Maps loads only after the visitor clicks the map facade.
- No third-party scripts unless an analytics decision says otherwise.
- `npm run analyze` (bundle analyzer) before closing any step that adds a client island.

## 5. Images

Static export has no image optimizer, so images are prepared ahead of time.

| Use         | Ratio                                        | Widths generated      | Format, quality |
| ----------- | -------------------------------------------- | --------------------- | --------------- |
| Hero        | 16:9 (mobile crop 4:5 via `object-position`) | 640, 1024, 1600, 1920 | WebP q≈72       |
| Page header | 3:2                                          | 640, 1024, 1600       | WebP q≈72       |
| Card        | 4:3                                          | 400, 800              | WebP q≈70       |
| Gallery     | 3:2                                          | 800, 1600             | WebP q≈75       |
| Portrait    | 4:5                                          | 400, 800              | WebP q≈75       |
| Logos       | —                                            | SVG preferred         | SVG / PNG       |

- Originals never go into `public/`. They are processed by
  `scripts/optimize-images.mjs` (decision O-04) and committed as optimized files.
- Filenames: `kebab-case`, descriptive: `projects/ethiopian-airlines-pumping-test/cover.webp`.
- Every image has meaningful `alt` text in data; decorative images use `alt=""`.
- EXIF orientation is applied and metadata stripped during processing.

## 6. Accessibility (target: WCAG 2.2 AA)

- Landmarks: `header`, `nav`, `main`, `footer`; skip link to `#main`.
- One `h1` per page; no skipped heading levels.
- Visible focus everywhere: 2 px `brand` outline, 2 px offset (`white` on dark tones).
- Targets ≥ 44 × 44 px; keyboard reachable menu with Esc and focus trap.
- Contrast: only the approved pairs in Brand §4.
- Forms: visible labels, errors linked with `aria-describedby` and announced.
- Motion off under `prefers-reduced-motion`.
- Links that open new tabs say so to screen readers.

## 7. SEO and metadata

- Per-page `title` and `description` from data via one helper (`lib/metadata.ts`).
- Canonical URLs from `NEXT_PUBLIC_SITE_URL`; sitemap generated from the data
  arrays (services, projects) — never hand-maintained.
- JSON-LD: `GeneralContractor` (organization), `BreadcrumbList` on inner pages.
- Open Graph image 1200 × 630; project pages use their cover photo.
- `robots`: `noindex` for `/styleguide`.

## 8. Security and privacy

- Security headers in `next.config.ts` (Next.js hosting). Static hosting needs an
  equivalent `.htaccess` — created in the deployment step.
- The form key is a public identifier, not a secret; spam control = honeypot
  field + provider-side protection.
- No secrets in the repo; `.env.local` is never committed.
- No tracking without a consent decision (O-03).

## 9. Commands

```bash
npm run dev                 # local development
npm run validate            # type-check + lint + format check
npm run check:design        # no raw design values outside tokens.css
npm run check:placeholders  # lists PLACEHOLDER( markers — must be zero at launch
npm run build:static        # static export → out/
npm run build               # Next.js hosting build
npm run analyze             # bundle analyzer
```

(`analyze` runs `next experimental-analyze`, the Turbopack bundle analyzer — D-21.)

## 10. Definition of done — every step

A step in `WORKFLOW.md` is **Complete** only when:

1. `npm run validate` and `npm run check:design` pass.
2. `npm run build:static` passes.
3. The change was viewed in the browser at **375, 768 and 1280 px** with no
   console errors (screenshot evidence for visual steps).
4. Visual steps passed the owner's **aesthetic review**.
5. `WORKFLOW.md` is updated: status, evidence, next action.
6. The step is committed (one commit per step, `WORKFLOW.md` §3).

## 11. Recipes — "how do I…"

| Task                            | Do this                                                                                                                  |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Change the brand green          | `src/styles/tokens.css` → `--color-brand` (and `--color-brand-dark`). Re-check contrast table.                           |
| Change all headings' size       | `tokens.css` → `--text-h1…h4`                                                                                            |
| Change how primary buttons look | `components/ui/button.tsx` → `variants.primary`                                                                          |
| Add a button style              | Add a key to `variants` in `button.tsx`, document it in Design System §3.1, show it on `/styleguide`                     |
| Add a project                   | Images → `public/images/projects/<slug>/`; entry → `src/data/projects.ts`. Page, sitemap and cards update automatically. |
| Add a service                   | Entry → `src/data/services.ts`; icon → `ui/icon.tsx` map; diagram part id if it maps to the well                         |
| Change homepage section order   | `src/app/page.tsx` — reorder the section components                                                                      |
| Change contact details          | `src/config/site.ts` → `contact`                                                                                         |
| Add a nav link                  | `src/config/site.ts` → `navigation`                                                                                      |
| Turn on the contact form        | `src/config/site.ts` → `contactForm.provider` + `formKey`                                                                |
