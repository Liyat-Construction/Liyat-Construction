# WORKFLOW — Liyat Construction website

> **The live source of truth.** Any person or AI starting work reads this file
> first, works on the step marked **▶ NEXT**, and updates this file before
> stopping. Replace stale information; git keeps the history.

---

## ▶ You are here

|                       |                                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Current step**      | **P4 — Component library + `/styleguide`** (not started; P3 is blocked on C-01)                               |
| **Last completed**    | P2 — Design tokens (2026-10-20)                                                                               |
| **Blocked on client** | Logo vector files (C-01) — needed by P3; contact details (C-03…C-06) — needed by P5                           |
| **Open decisions**    | O-01 form provider · O-02 hosting · O-03 analytics · O-04 image script dependency · O-05 styleguide at launch |
| **Next action**       | Start P4: build the Design System §3.1 primitives and §3.2 cards, and show them on `/styleguide`.             |

**Status values:** `Not started` · `In progress` · `Review` (waiting for owner's aesthetic review) · `Blocked` · `Complete`

---

## 1. Project at a glance

| Field               | Value                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Client              | Liyat Construction PLC (public brand: **Liyat Construction**)                                                      |
| What they do        | Groundwater development: survey, well drilling, pumping tests, wellheads, pumps, turnkey water projects — Ethiopia |
| Who the site is for | Government bodies, embassies, NGOs, development agencies, institutions, commercial developers                      |
| Site goal           | A credible, evidence-led presence that wins the trust of institutional buyers                                      |
| Primary action      | **Contact us**                                                                                                     |
| Secondary action    | **Explore projects**                                                                                               |
| Package             | Digital Presence — 7 pages + legal, no CMS                                                                         |
| Agency              | Digital Aksumite                                                                                                   |
| Client approver     | Wondossen (CEO)                                                                                                    |

## 2. Document map

| Document                                                   | Answers                                                                   |
| ---------------------------------------------------------- | ------------------------------------------------------------------------- |
| **`WORKFLOW.md`** (this file)                              | Where are we? What's next? What's decided? What's missing?                |
| [`docs/BRAND_GUIDELINES.md`](docs/BRAND_GUIDELINES.md)     | What Liyat looks and sounds like, and why                                 |
| [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md)           | Tokens, component library, page blueprints                                |
| [`docs/ENGINEERING.md`](docs/ENGINEERING.md)               | Architecture, code rules, performance budget, definition of done, recipes |
| [`AGENTS.md`](AGENTS.md) / [`CLAUDE.md`](CLAUDE.md)        | Entry point for AI tools                                                  |
| [`docs/NEW_SESSION_PROMPT.md`](docs/NEW_SESSION_PROMPT.md) | Prompt to paste into a new AI chat                                        |

## 3. How we work

1. **One step at a time, in order.** A step starts only when the steps it depends on are `Complete`.
2. **Every step is reviewable.** Visual steps end in `Review`; the owner looks at
   the result in the browser and either approves (`Complete`) or asks for changes.
3. **Placeholders are allowed while building**, marked `PLACEHOLDER(C-xx)` in code,
   so design is judged with realistic content. Real content replaces them in P16.
4. **Definition of done** for every step: [`ENGINEERING.md` §10](docs/ENGINEERING.md#10-definition-of-done--every-step).
5. **End of every session:** update "You are here", the step's status and
   evidence, and §8 Handoff.
6. **One commit per completed step** (owner rule, 2026-10-20). Subject
   `P<n>: <step name>`; body lists what changed, the decisions involved, and how
   it was verified. Commit only after the step is `Complete` and every check
   passes. **A step is committed before the next step starts** (owner, 2026-10-20).
   Never push unless the owner asks.

---

## 4. Delivery plan

| ID  | Step                                  | Depends on            | Review gate                     | Status      |
| --- | ------------------------------------- | --------------------- | ------------------------------- | ----------- |
| P0  | Foundation and documentation          | —                     | Owner                           | Complete    |
| P1  | Strip the template                    | P0                    | Technical                       | Complete    |
| P2  | Design tokens                         | P1                    | Technical                       | Complete    |
| P3  | Logo master files                     | P2, C-01              | Owner + client                  | Not started |
| P4  | Component library + `/styleguide`     | P2                    | **Owner — main aesthetic gate** | Not started |
| P5  | Site shell: header, menu, footer      | P3, P4                | Owner                           | Not started |
| P6  | Content model and data                | P4                    | Technical                       | Not started |
| P7  | Home page + well diagram              | P5, P6                | Owner                           | Not started |
| P8  | Services pages                        | P7                    | Owner                           | Not started |
| P9  | Projects pages                        | P7                    | Owner                           | Not started |
| P10 | About page                            | P7                    | Owner                           | Not started |
| P11 | Equipment & Capabilities page         | P7                    | Owner                           | Not started |
| P12 | Testimonials page                     | P7                    | Owner                           | Not started |
| P13 | Contact page and form                 | P7, O-01              | Owner                           | Not started |
| P14 | SEO, metadata, legal and system pages | P8–P13                | Technical                       | Not started |
| P15 | Quality and performance audit         | P14                   | Technical + owner               | Not started |
| P16 | Real content swap                     | P15, client checklist | Owner + client                  | Not started |
| P17 | Deployment                            | P16, O-02             | Technical                       | Not started |
| P18 | Client acceptance and handoff         | P17                   | Client                          | Not started |

### P0 — Foundation and documentation · `Complete`

- **What:** Agree the brand direction and write the brand guideline, design system, engineering standards, this workflow and the AI entry point.
- **Why:** Decisions made once and written down stop every later step from re-arguing them, and let any new session continue without context.
- **Done when:** All five documents exist and the owner has agreed the direction. ✔ 2026-10-20.

### P1 — Strip the template · `Complete`

- **What:**
  - ✔ Remove dark mode: `theme-provider`, `theme-toggle`, the inline theme script, every `dark:` class.
  - ✔ Remove `react-phone-number-input`, `libphonenumber-js` and their CSS. Phone field is a plain `<input type="tel">`, validated by a regex in `lib/contact-form.ts`.
  - ✔ Remove `framer-motion` (D-22). `ScrollReveal`/`Stagger*` deleted and unwrapped; `motion.*` → plain elements; hero slideshow cross-fades with a CSS `transition-opacity` and stops auto-advancing under reduced motion. Five sections and `premium-button` are server components again.
  - ✔ Removed unused `@next/bundle-analyzer` (D-23).
  - ✔ Remove template leftovers: `animated-gradient-background`, `GoldDivider`, glow/shine effects, "Stripe/Apple" comments, `public/liyat logo.jpg` (the doc said `logo.jpg`; `public/logo.png` stays until P3 — header, footer and schema use it), `public/placeholders/`.
  - ✔ Add `scripts/check-design.mjs` (`npm run check:design`), `npm run analyze` (Next's built-in Turbopack analyzer, `next experimental-analyze`), and the `PLACEHOLDER(` pattern in `check-placeholders.mjs`.
  - ✔ Extra: `zod` moved to `dependencies` (it runs in the browser); version unchanged (4.4.3). First marker added: `PLACEHOLDER(C-12)` on the unverified testimonials.
- **How:** Delete rather than adapt. Replace motion with nothing for now; visuals may look plain until P4. Keep every route building.
- **Why:** A smaller codebase before building means less to restyle, less JavaScript, and no old patterns for the next developer to copy.
- **Done when:** ✔ 2026-10-20. No `dark:`, `framer-motion` or phone-library references remain. `validate`, `check:design` and `build:static` pass (`check:design` passes via its legacy list — D-20).

### P2 — Design tokens · `Complete`

- **What:** Create `src/styles/tokens.css` with every token in Design System §2. Reset Tailwind's default palette. Wire fonts via `next/font` (Manrope 600/700, Inter 400/500/600). Add base styles in `globals.css`: focus ring, reduced motion, selection, scroll offset. Remove `brand.colors`/`fonts` from `site.ts` and the inline `<style>` in `layout.tsx`.
- **How:** Values exactly as documented; any change goes to the docs first.
- **Why:** One file controls the whole look; the default palette is gone, so off-brand colors cannot slip in.
- **Done when:** `bg-brand`, `text-ink`, `text-h2` etc. work; `bg-gray-500` generates no CSS (Tailwind 4 silently ignores unknown classes rather than failing, so `check:design` is what flags it); contrast pairs re-verified; `globals.css`, `layout.tsx` and `site.ts` removed from the `check:design` legacy list. ✔ 2026-10-20 (`layout.tsx` was never on the list; `manifest.ts` came off instead).
- **Done:** `src/styles/tokens.css` holds every §2 token plus `--spacing-grid` and `--focus-width/offset`; resets for colors, fonts, type sizes, radii and shadows (D-25). `globals.css` = Tailwind + tokens + base styles (DS §2.5). `layout.tsx`: Manrope 600/700, Inter 400/500/600, font variables on `<html>`, inline `<style>` gone. `site.ts` has no `brand` block. Manifest colors are white literals (`design-exception`). `check:design` now also flags switched-off defaults and template tokens (D-26).
- **Known effect:** template pages now render mostly unstyled. Text that was white on the old green/navy backgrounds is invisible on white. This is expected and is fixed as P5–P13 rebuild each page; the site is not live.

### P3 — Logo master files

- **What:** Get Liyat's vector logo (C-01). If none exists, redraw it as a precise SVG from its geometry (L, bar, C, drop) in `#156635` + drop blue, for client approval. Export: full-color SVG, all-white SVG, mark (C + drop) SVG, favicon set, apple/android icons, OG image.
- **How:** Inline SVG components in `components/ui/logo.tsx` (`variant: 'color' | 'white' | 'mark'`), so there is no extra request and the logo is crisp at every size.
- **Why:** The current 625 px JPG is blurry, in an off-brand green, and cannot produce the white version the footer needs.
- **Done when:** All variants render crisply at 80 px and 400 px; client has approved the redraw (if redrawn).

### P4 — Component library + `/styleguide` · main aesthetic gate

- **What:** Build every primitive in Design System §3.1 and the cards in §3.2. Create `/styleguide` showing all tokens and every component in every variant, on every section tone.
- **How:** Server components, typed variant maps, no data imports. Use realistic Liyat content on the styleguide.
- **Why:** The owner judges the look once, on one page, before it multiplies across 7 pages. Changes here are cheap; changes after P7 are not.
- **Done when:** Styleguide is complete at 375/768/1280. The owner approves the aesthetic. Any adjustments are made in tokens/components and reflected in `DESIGN_SYSTEM.md`.

### P5 — Site shell

- **What:** `Header` (white, sticky, logo, nav, Contact us), `MobileMenu`, `Footer` (Ink, white logo, contact, legal name + Amharic), `SkipLink`, `PageHeader`, `CtaBand`. Update `navigation` in `site.ts`: "Contact us" CTA, not "Get started".
- **Why:** Every page shares it; it sets the first impression.
- **Done when:** Keyboard and screen-reader pass on the menu; no layout shift on scroll; owner approves.

### P6 — Content model and data

- **What:**
  - Update `src/types/content.ts`: projects gain year, depth, yield, duration, services and key figure; add `Equipment`, `TeamMember`, `Reference`, `Stat`, `Credential`.
  - Rename services to the 6 official names (Brand §9).
  - Move hard-coded content (e.g. Equipment page cards) into `src/data/`.
  - Reorganize images into `public/images/…`.
  - Mark every unknown with `PLACEHOLDER(C-xx)`.
- **Why:** Pages built in P7–P13 consume finished shapes; data changes later become type errors, not silent bugs.
- **Done when:** All data files are typed; `check:placeholders` lists exactly the open client items.

### P7 — Home page + well diagram

- **What:** Sections in the order of Design System §4 (Home). Build `WellDiagram` and the `ServiceLifecycle` interaction. Choose the hero photo (rig + water at the surface).
- **Hero plan (D-27, owner, 2026-10-20):**
  - **Image:** `public/hero/hero-water-column.webp` (1920 × 1280): a water column rising beside the rig against a clear sky. After P2 removed the template's green gradient, the owner saw it in natural color and called it "just beautiful". It is the leading candidate, compared against the C-18 originals when they arrive.
  - **Treatment:** natural color, no wash. A flat Ink scrim behind the text side only (Brand §7, ≤ 70%), tuned to the lightest opacity at which the headline and lead reach 4.5 : 1 over the brightest pixels behind them. The white spray must never sit behind text. Check the mobile crop (`object-position`) so the water column stays clear of the headline.
  - **Measured sky:** `#5A8FE8`–`#6DADF5` (≈ `#5E94EB`). White on it = 2.3–3.2 : 1, so text on the bare sky fails WCAG.
  - **Sky blue as a brand color (raised by the owner, not decided):** the owner is open to a sky-blue brand color, "not the navy". The agent objects: it fails contrast in both directions (2.3–3.2 : 1); the accessible version is the existing Water Blue `#0B5CA0`; it would compete with the photography that made the look work; and green is Liyat's only existing recognition (logo, brochure, vehicles, uniforms). Brand colors also change only by a management decision (Brand §12, Wondossen). The owner will review it again when the hero is built. Any change needs a new decision row, plus client approval.
  - **Preview:** P4 shows the `Photo` + scrim on `/styleguide` with this image, so the look is judged at the aesthetic gate first.
- **Why:** The home page carries most of the first impression and proves the system works end to end.
- **Done when:** LCP < 2.0 s on mobile simulation; diagram readable at 320 px; owner approves.

### P8 — Services · P9 — Projects · P10 — About · P11 — Equipment · P12 — Testimonials

- **What:** Each page exactly as its blueprint in Design System §4, composed from existing sections and cards. A new component is added to the library (and the styleguide) first, never inside a page.
- **Done when:** Per page: definition of done plus owner approval.

### P13 — Contact page and form

- **What:** `ContactPanel`: form (name, organization, email, phone, subject, message, honeypot), two phones, email, address, hours, map facade. Provider per O-01.
- **Done when:** A real submission arrives at the client's inbox from the production configuration; errors and success states are accessible.

### P14 — SEO, metadata, legal and system pages

- **What:** `lib/metadata.ts` helper; per-page titles and descriptions; sitemap from data; JSON-LD organization + breadcrumbs; OG images; privacy and terms in `Prose`; 404 and error pages.
- **Done when:** Lighthouse SEO 100 on every page; structured data validates.

### P15 — Quality and performance audit

- **What:** The full ENGINEERING §4 budget on every page; accessibility pass (keyboard, screen reader spot check, contrast); cross-browser (Chrome, Safari iOS, Firefox, Samsung Internet); content proofread against Brand §8 voice rules.
- **Done when:** Every budget met, or each exception recorded in §6 with a reason.

### P16 — Real content swap

- **What:** Replace every `PLACEHOLDER(C-xx)` with approved client content from §5, and optimize new images.
- **Done when:** `check:placeholders` reports zero; owner and client approve.

### P17 — Deployment

- **What:** Host per O-02; domain and HTTPS; `NEXT_PUBLIC_SITE_URL`; security headers (or `.htaccess` for static hosts); form tested in production; Search Console sitemap submission.
- **Done when:** The live domain passes P15 checks again.

### P18 — Client acceptance and handoff

- **What:** Walkthrough with the client; written acceptance; a short "how to request updates" note; brand guideline v1.1 sign-off by Wondossen.

---

## 5. Client content checklist

What we must get from Liyat. Owner requests these from the client; the site is built
with placeholders until they arrive. **Must** items block launch.

| ID   | Item                                                                                                                                                           | Needed by | Priority               | Status |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------------------- | ------ |
| C-01 | Logo master files (SVG/AI/PDF). If none exist: approval to redraw as vector                                                                                    | P3        | Must                   | Open   |
| C-02 | Confirm the brand green `#156635` (brochure green), or supply the official color code                                                                          | P2        | Should                 | Open   |
| C-03 | Office address. Brochure: _Eldasol Building, 2nd floor, Office 202, Bole sub-city, Woreda 04_. Site currently shows "301 Mickey Leland St" — which is correct? | P5        | Must                   | Open   |
| C-04 | Phone numbers to publish. Brochure: +251 93 001 4711 and +251 90 680 8182                                                                                      | P5        | Must                   | Open   |
| C-05 | Public email. Brochure: liyatdrilling2021@gmail.com. Site currently shows hello@liyatconstruction.com — does that mailbox exist?                               | P5        | Must                   | Open   |
| C-06 | Domain liyatconstruction.com — who owns it, and is it registered?                                                                                              | P17       | Must                   | Open   |
| C-07 | Office hours (Ethiopian "2–11" = 8:00–17:00?) and working days                                                                                                 | P5        | Should                 | Open   |
| C-08 | Company story: founding year (2021?), founders, milestones, why the company exists                                                                             | P10       | Must                   | Open   |
| C-09 | Confirm the service list (Brand §9). Do they offer water-quality testing? Excavation shoring (CREDOCS)?                                                        | P6        | Must                   | Open   |
| C-10 | Key figures: wells completed, total metres drilled, deepest well, highest yield, regions worked                                                                | P7        | Must                   | Open   |
| C-11 | Per project: year, depth, yield, duration, scope, outcome, and **permission to name the client**                                                               | P9        | Must                   | Open   |
| C-12 | Testimonials: real quotes with name, role, organization and permission to publish                                                                              | P12       | Must (or hide section) | Open   |
| C-13 | Reference / completion letters (scans) with permission to publish                                                                                              | P12       | Should                 | Open   |
| C-14 | Licences and credentials: trade licence, Water Works Construction Authority grade, certifications                                                              | P10       | Must                   | Open   |
| C-15 | Leadership and team: names, roles, short bios, professional portraits                                                                                          | P10       | Should                 | Open   |
| C-16 | Equipment list: rigs (make, model, rated depth), compressors, test pumps, support vehicles, with photos                                                        | P11       | Must                   | Open   |
| C-17 | Safety and environmental practices actually followed (PPE, drilling fluid and cuttings handling)                                                               | P10       | Should                 | Open   |
| C-18 | Original high-resolution photos: hero candidates (rig + water), the water-column photo, team at work                                                           | P7        | Must                   | Open   |
| C-19 | Written consent for people prominently shown in photos                                                                                                         | P16       | Must                   | Open   |
| C-20 | Social media links (Facebook, LinkedIn, Telegram, WhatsApp…) actively monitored                                                                                | P5        | Could                  | Open   |
| C-21 | Exact Amharic legal name (brochure: ልያት ኮንስትራክሽን ኃ.የተ.የግል ማህበር)                                                                                                | P5        | Should                 | Open   |
| C-22 | Is "Know better. Drill better." still the official tagline?                                                                                                    | P7        | Must                   | Open   |
| C-23 | Correct spelling of the client: "CREDOCS" or "CREDOCKS"                                                                                                        | P9        | Must                   | Open   |
| C-24 | Map location (Google Maps pin of the office)                                                                                                                   | P13       | Should                 | Open   |
| C-25 | Inbox that should receive website inquiries                                                                                                                    | P13       | Must                   | Open   |
| C-26 | Approval of Brand Guidelines v1.1 by Wondossen                                                                                                                 | P18       | Must                   | Open   |

## 6. Decisions log

Decisions that constrain future work. Change one only by adding a new row that supersedes it.

| ID   | Date       | Decision                                                                                                                                                                                                                                                                                     | Reason                                                                                                                                   |
| ---- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| D-01 | 2026-10-18 | Digital Presence package: no CMS; content as TypeScript in `src/data/`                                                                                                                                                                                                                       | Package scope                                                                                                                            |
| D-02 | 2026-10-18 | Pages: Home, About, Services, Projects, Equipment & Capabilities, Testimonials, Contact + Privacy, Terms                                                                                                                                                                                     | Client blueprint                                                                                                                         |
| D-03 | 2026-10-18 | Public name "Liyat Construction"; legal name "Liyat Construction PLC"                                                                                                                                                                                                                        | Client blueprint                                                                                                                         |
| D-04 | 2026-10-18 | Must stay static-export compatible (`build:static`)                                                                                                                                                                                                                                          | Hosting not yet decided; keeps cPanel possible                                                                                           |
| D-05 | 2026-10-20 | Brand green is **`#156635`**                                                                                                                                                                                                                                                                 | Measured from Liyat's own designed brochure; 7 : 1 on white; logo JPG green `#006000` is off-brand                                       |
| D-06 | 2026-10-20 | Palette: Green, Ink, White + Stone, Green Tint, Line; **Water Blue only for water data**; Alert Red only for form errors                                                                                                                                                                     | One color + one neutral is the strongest identity; blue gains meaning                                                                    |
| D-07 | 2026-10-20 | Gold and navy are **not** used                                                                                                                                                                                                                                                               | Gold 2.6 : 1 contrast, competes with yellow machinery; navy competes with green                                                          |
| D-08 | 2026-10-20 | White sticky header with full-color logo; Ink footer with all-white logo                                                                                                                                                                                                                     | Logo shown in true colors; avoids green-on-dark conflict                                                                                 |
| D-09 | 2026-10-20 | Hero: one photograph (rig + water at the surface), flat Ink scrim, no slideshow                                                                                                                                                                                                              | Faster LCP, calmer; most visitors never see slide 2; range shown in projects section                                                     |
| D-10 | 2026-10-20 | Hero headline "Know better. Drill better."; eyebrow "Water Well Drilling & Engineering"; promise heads the lifecycle section                                                                                                                                                                 | Client-owned tagline beats an invented one                                                                                               |
| D-11 | 2026-10-20 | Six services in lifecycle order (Brand §9)                                                                                                                                                                                                                                                   | Client-sourced list; turnkey is a real tender category                                                                                   |
| D-12 | 2026-10-20 | Remove dark mode, Framer Motion and the phone-input library                                                                                                                                                                                                                                  | Off-brand (white pages); large share of JS; CSS covers our motion                                                                        |
| D-13 | 2026-10-20 | Fonts stay Manrope (headings) + Inter (body); tabular numerals for figures                                                                                                                                                                                                                   | Good fit; gains are elsewhere                                                                                                            |
| D-14 | 2026-10-20 | Four-layer design system; all raw values only in `src/styles/tokens.css`; Tailwind default palette disabled; `check:design` enforces it                                                                                                                                                      | Change anything visual in one place; consistency by construction                                                                         |
| D-15 | 2026-10-20 | Brand colors leave `site.ts`; `site.ts` keeps identity, contact, navigation, SEO, form                                                                                                                                                                                                       | One home for design values (tokens), one for business facts (config)                                                                     |
| D-16 | 2026-10-20 | Signature visual: interactive well cross-section linking services to parts of the well                                                                                                                                                                                                       | Technical drawings are part of the brand; shows expertise without decoration                                                             |
| D-17 | 2026-10-20 | Placeholders allowed during build, marked `PLACEHOLDER(C-xx)`; zero required at launch                                                                                                                                                                                                       | Judge design with realistic content; impossible to ship by accident                                                                      |
| D-18 | 2026-10-20 | English only; Amharic legal name in the footer                                                                                                                                                                                                                                               | Scope; local credibility at no cost                                                                                                      |
| D-19 | 2026-10-20 | `WORKFLOW.md` replaces `PROJECT_WORKFLOW.md`; `PROJECT_DOCUMENTATION.md` is replaced by `docs/`                                                                                                                                                                                              | One current source; template-era docs were outdated                                                                                      |
| D-20 | 2026-10-20 | `check:design` keeps a `LEGACY` list of template files whose violations are only warnings; it fails if an entry is deleted or clean                                                                                                                                                          | The check passes from P1 on and blocks new violations; the list can only shrink                                                          |
| D-21 | 2026-10-20 | `npm run analyze` uses Next's built-in `next experimental-analyze` (Turbopack), not `@next/bundle-analyzer`                                                                                                                                                                                  | `@next/bundle-analyzer` only works with webpack builds; Next 16 builds with Turbopack                                                    |
| D-22 | 2026-10-20 | Framer Motion removed (owner questioned D-12, then agreed — O-07 closed)                                                                                                                                                                                                                     | ~42 KB gzip chunk; forced client components; hero headline invisible until hydration (> 3 s in dev). CSS covers our motion               |
| D-23 | 2026-10-20 | `@next/bundle-analyzer` removed                                                                                                                                                                                                                                                              | Unused; superseded by D-21                                                                                                               |
| D-24 | 2026-10-20 | JS budget: our own JS ≤ 30 KB gzip per route on top of React/Next; total first-load ≤ 190 KB (excl. `nomodule` polyfill). Replaces "≤ 110 KB total" (O-09, owner delegated the choice)                                                                                                       | React 19 + Next 16 alone ≈ 155 KB, so 110 KB was unreachable; the limit now covers what we control, and Lighthouse/LCP/INP targets stay  |
| D-25 | 2026-10-20 | Tailwind defaults switched off for colors, fonts, type sizes, radii and all shadow namespaces (not just colors); spacing, breakpoints, containers, weights stay. Supersedes the color-only reset in D-14                                                                                     | Only tokens can be used for any visual decision; owner approved the agent's recommendation                                               |
| D-26 | 2026-10-20 | `check:design` also flags switched-off defaults (`text-sm`, `rounded-lg`, `shadow-md`, `font-sans`, `*-black`) and template tokens (`brand-primary/accent`, `text-secondary`, `surface-*`). The 7 template files only these rules caught were added to `LEGACY` (one-time exception to D-20) | These classes generate no CSS, so they would fail silently; the files are all rebuilt in P5–P13                                          |
| D-27 | 2026-10-20 | Hero and all photography keep their natural color: no green, blue or other color wash. Text over a photo sits on a flat Ink scrim limited to the text area, as light as contrast allows. Candidate hero image: `public/hero/hero-water-column.webp` (see P7)                                 | The owner saw the photo unwashed after P2 and preferred it strongly. It confirms Brand §6 and D-09; the template's green wash broke them |

### Open decisions

| ID   | Question                                                         | Recommendation                                                                                                           | Needed by |
| ---- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------- |
| O-01 | Form provider                                                    | **Web3Forms**: free tier sufficient, works on static hosting, no backend, built-in spam filter                           | P13       |
| O-02 | Hosting                                                          | **Vercel** if the client accepts it (headers, HTTPS, previews included); cPanel static export otherwise                  | P17       |
| O-03 | Analytics                                                        | None at launch, or a cookieless option (e.g. Vercel Analytics / Plausible) — avoids a consent banner                     | P14       |
| O-04 | Add `sharp` as a devDependency for `scripts/optimize-images.mjs` | **Yes**: responsive image sizes are required for the performance budget; it is already installed transitively by Next.js | P6        |
| O-05 | `/styleguide` at launch                                          | Keep it, `noindex` and unlinked — useful for future maintenance                                                          | P17       |
| O-06 | Floating WhatsApp/Telegram button                                | Only if the client actively answers that channel (C-20)                                                                  | P5        |

## 7. Risks

| ID   | Risk                                                                                                         | Mitigation                                                                                                    | Status |
| ---- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | ------ |
| R-01 | Real content arrives late or incomplete                                                                      | Build with marked placeholders; sections hide when data is empty                                              | Open   |
| R-02 | Unverified claims or client names published                                                                  | Every claim tied to a C-xx item; `check:placeholders` launch gate                                             | Open   |
| R-03 | Low-resolution logo and some photos                                                                          | P3 vector logo; request originals (C-18)                                                                      | Open   |
| R-04 | Legal text is generic                                                                                        | Client or qualified party reviews before launch                                                               | Open   |
| R-05 | No automated UI tests                                                                                        | Typed data, `check:design`, styleguide review, manual QA in P15                                               | Open   |
| R-06 | Contact details on the current site may be invented                                                          | Confirm C-03…C-05 before anything is published                                                                | Open   |
| R-07 | Contact form adds ~79 KB gzip (zod + react-hook-form) to every page that renders it — today home and contact | Home blueprint has no form (P7 drops it); P13 uses `zod/mini` or native constraint validation and measures it | Open   |

## 8. Handoff

### Current state of the code

The site is still the **Digital Aksumite template filled with Liyat content**
(built 2026-10-18). Its visuals do not follow this documentation yet; P1–P5
rebuild the visual layer. Content and photos in `src/data/` and `public/` are
reused.

### Last session — 2026-10-20 (P2)

- Owner approved P2, including the wider reset (D-25).
- Built tokens, base styles and fonts; removed `siteConfig.brand`; extended `check:design` (D-26).
- Template pages look broken until rebuilt (see P2 "Known effect").
- With the green wash gone, the owner saw the hero photo in natural color and loved it. Recorded as D-27, with the hero plan, the measured sky colors and the open sky-blue question (plus the agent's objection) under P7.
- New owner rule: every step is committed before the next starts (§3).
- Found: `@tailwindcss/typography` is installed but never loaded (`prose-*` classes on legal pages do nothing). Recommend removing it in P14, when legal pages move to our `Prose` component. That needs owner approval.
- Found: Google Analytics loads whenever `NEXT_PUBLIC_GA_ID` is set, despite O-03. Settle in P14.

### Earlier session — 2026-10-20 (P1, part 2)

- Owner agreed to remove Framer Motion (D-22) and `@next/bundle-analyzer` (D-23); both uninstalled.
- Unwrapped `ScrollReveal`/`StaggerContainer`/`StaggerItem` and deleted `scroll-reveal.tsx`; replaced `motion.*` with plain elements; hero slideshow uses a CSS cross-fade; removed `'use client'` from `hero`, `premium-button`, `about-`, `cta-`, `projects-`, `services-`, `testimonials-section`.
- Measured first-load JS (static export, gzip, excluding the 38 KB `nomodule` polyfill modern browsers skip): inner pages ≈ 166 KB, of which ≈ 155 KB is the React/Next runtime; home and contact ≈ 248 KB because they include the contact form (≈ 79 KB zod + react-hook-form). → D-24, R-07.
- Template hero headline (`text-[4rem]`) is clipped at 375 px ("Groundwater" overflows); no page-level horizontal scroll. P7 rebuilds the hero with `--text-display`.

### Earlier session — 2026-10-20 (P1, part 1)

- Removed dark mode (provider, toggle, inline script, `@custom-variant dark`, all `dark:` classes).
- Removed the phone-input libraries and their CSS; plain `tel` input + regex validation.
- Removed `animated-gradient-background`, `GoldDivider`, glow/shine effects, Stripe/Apple comments, `public/liyat logo.jpg`, `public/placeholders/`.
- Added `check:design` (with legacy list, D-20), `analyze` (D-21), `PLACEHOLDER(` scan; moved `zod` to dependencies.
- Owner questioned removing Framer Motion → O-07 (closed in part 2 by D-22).
- Found: `src/data/testimonials.ts` holds unverified quotes under realistic names; the placeholder check reported zero. Marked `PLACEHOLDER(C-12)`; P6 marks the rest.
- Template visuals still show low-contrast labels (navy accent on green) and content hidden until scroll; expected until P4–P5 rebuild them.

### Previous session — 2026-10-20 (P0)

- Reviewed the codebase, the client blueprint, the draft brand guideline and the brochure.
- Measured colors: brochure green `#156635`, logo JPG green `#006000`, drop blue ≈ `#0B5CA0`, brochure gold `#BD9C4D` (2.6 : 1, rejected).
- Agreed direction with the owner (decisions D-05 … D-19).
- Added `docs/NEW_SESSION_PROMPT.md` (reusable new-chat prompt); removed `.devin/new-chat-prompt.md`.
- Wrote `docs/BRAND_GUIDELINES.md` v1.1, `docs/DESIGN_SYSTEM.md`, `docs/ENGINEERING.md`, this file, `CLAUDE.md`; rewrote `AGENTS.md`.
- Removed `PROJECT_WORKFLOW.md` and `PROJECT_DOCUMENTATION.md` (superseded).

### Verification evidence

P2, 2026-10-20:

- `npm run validate` → pass. `npm run check:design` → pass (91 legacy lines in 21 files before the new rules; the 7 newly caught template files added per D-26). `npm run check:placeholders` → 1 hit (C-12), as intended.
- Clean `npm run build:static` → pass. A temporary class probe showed CSS generated for `bg-brand`, `text-ink`, `text-h2`, `text-display`, `rounded-card`, `shadow-raise`, `py-section`, `px-gutter`, `gap-grid`, `max-w-content`, `font-heading`, `bg-scrim`, `ease-standard`, `duration-(--duration-fast)`, `bg-transparent`, `text-white/80`. **No** CSS for `bg-gray-500`, `text-sm`, `shadow-lg`, `rounded-xl`, `font-sans`, `text-black`, `bg-brand-primary`. The emitted color variables are exactly the 12 tokens. The probe was deleted.
- `check:design` probe file: `text-sm`, `shadow-lg`, `rounded-xl`, `text-brand-accent`, `font-sans`, `text-black` each flagged; a line of valid tokens is not flagged. Probe deleted.
- Contrast: all 13 approved pairs recomputed (WCAG formula) and match Brand §4; green on Ink = 2.23 (forbidden, confirmed).
- Browser (dev, port 3001): body is Inter on `#FFFFFF` in Ink `rgb(29 37 33)`; h1 is Manrope; loaded faces are exactly Inter 400/500/600 and Manrope 600/700; `--color-brand` = `#156635`; old inline `<style>` gone. Focus ring = solid 2 px `rgb(21 102 53)`, offset 2 px. `[id]` scroll margin = 104 px at 1280. The reduced-motion rule is present. Home at 375, About at 768 and Services at 1280 viewed, with no console errors and no horizontal scroll. Pages look stripped, as expected.

P1 part 2, 2026-10-20:

- `npm run validate` → pass. `npm run check:design` → pass (legacy warnings only). `npm run check:placeholders` → 1 hit (C-12), as intended.
- Clean `npm run build:static` → pass, 28 pages; no chunk contains Framer Motion code.
- `grep framer-motion|motion.|scroll-reveal src` → no matches; `package.json` has neither `framer-motion` nor `@next/bundle-analyzer`; zod still locked at 4.4.3.
- Browser (dev, after a server restart — deleting `.next` under a running dev server caused a temporary Turbopack 500, not a code fault): all 11 routes return 200; home at 375, 768, 1280 shows the headline immediately (previously invisible > 3 s); no console errors after restart.

P1 part 1, 2026-10-20:

- `npm run validate` → pass (type-check, lint, Prettier).
- `npm run check:design` → pass; 115 legacy lines in 24 files reported as warnings. Probe file with `bg-gray-500 text-[17px]`, a hex and `rgb()` → 3 errors; `design-exception:` line skipped.
- `npm run build:static` → pass, 28 pages.
- `npm run check:placeholders` → 1 hit (`PLACEHOLDER(C-12)`), as intended.
- Search: no `dark:`, theme, phone-library, `GoldDivider` or gradient-background references remain. `framer-motion` remains in 7 files (O-07).
- Browser (dev): all 11 routes load, no console errors; home viewed at 375, 768, 1280; contact at 375; about at 1280. Contact form not rendered (no provider, O-01), so the phone regex was unit-checked: accepts `+251 93 001 4711`, `0930014711`, `+251-90-680-8182`; rejects letters, < 7 digits, "ext".

### Next action

**P4 — Component library + `/styleguide`.** See §4 P4. P3 waits for C-01 (logo files); P4 depends only on P2.
