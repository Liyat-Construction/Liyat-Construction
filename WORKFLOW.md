# WORKFLOW — Liyat Construction website

> **The live source of truth.** Any person or AI starting work reads this file
> first, works on the step marked **▶ NEXT**, and updates this file before
> stopping. Replace stale information; git keeps the history.

---

## ▶ You are here

|                       |                                                                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Current step**      | **P11 — Equipment & Capabilities page** (not started)                                                                                      |
| **Last completed**    | P10 — About page (2026-10-21)                                                                                                              |
| **Blocked on client** | Logo vector files (C-01) — P3 only                                                                                                         |
| **Open decisions**    | O-01 form provider · O-02 hosting · O-03 analytics · O-05 styleguide at launch · O-06 floating chat button                                 |
| **Next action**       | New session: start P11 (§4 P11; blueprint in Design System §4). One phase per session; the owner reviews the whole site at the end (D-43). |

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
| P4  | Component library + `/styleguide`     | P2                    | **Owner — main aesthetic gate** | Complete    |
| P5  | Site shell: header, menu, footer      | P4, P6 (D-37)         | Owner                           | Complete    |
| P6  | Content model, data and domain cards  | P4                    | Technical + owner (cards)       | Complete    |
| P7  | Home page + well diagram              | P5, P6                | Owner                           | Complete    |
| P8  | Services pages                        | P7                    | Owner                           | Complete    |
| P9  | Projects pages                        | P7                    | Owner                           | Complete    |
| P10 | About page                            | P7                    | Owner                           | Complete    |
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

### P4 — Component library + `/styleguide` · `Complete` (2026-10-21)

- **What:** Build every primitive in Design System §3.1 ~~and the cards in §3.2~~ (moved to P6, D-34). Create `/styleguide` showing all tokens and every component in every variant, on every section tone.
- **How:** Server components, typed variant maps, no data imports. Use realistic Liyat content on the styleguide.
- **Why:** The owner judges the look once, on one page, before it multiplies across 7 pages. Changes here are cheap; changes after P7 are not.
- **Done when:** Styleguide is complete at 375/768/1280. The owner approves the aesthetic. Any adjustments are made in tokens/components and reflected in `DESIGN_SYSTEM.md`.
- **Plan agreed 2026-10-20 (owner approved recommendations 1–4):** the type changes move here from P6 (D-28); photo ratios follow the real photos (D-31); the image script stays in P6; the owner reviews in **two passes** — pass 1 primitives + hero scrim, pass 2 the cards.
- **Pass 1 done (2026-10-20):** `src/components/ui/`: Container, Section, SectionHeading, Eyebrow, Rule, Button, TextLink, SmartLink, Card, Tag, Stat, FactsTable, Photo, Scrim, Icon, Prose, Field/Input/Textarea/Select, Reveal. `/styleguide` shows the tokens (read from `tokens.css`), all five section tones with buttons, links, stats and a card on each, every button and icon, Stat, FactsTable, Photo ratios and focus, a linked card, the hero preview, a form with an error state, Prose and Reveal. New types in `content.ts` (optional fields).
- **Owner, 2026-10-21:** pass 1 "not bad"; wants the page and cards to differ while both stay white → O-08, comparison A/B/C on `/styleguide` (temporary `--color-review-*` tokens and `_parts/surface-options.tsx`, removed after the decision).
- **Owner, 2026-10-21:** chose option B → D-33 applied: tokens changed, Card/inputs/Tag use `bg-white`, temporary comparison removed, Brand §4/§11 and DS §2.1 updated.
- **Owner, 2026-10-21:** commit P4 now and move on; Wondossen reviews the whole site at the end. The six cards move to P6, the hero panel choice to P7 (D-34). Screenshots of the styleguide prepared for Wondossen.
- **For the owner's review, honestly:**
  - At 1280 the hero scrim panel reads as a translucent grey box over blue sky. 62 % is the lightest safe value (see evidence), so the alternatives are a different text position or photo, not a lighter scrim. Decided in P7 (D-34).
  - The hero photo is a recompressed social-media image; JPEG artifacts are visible full-bleed at 1280. The originals (C-18) matter.
  - The old template navbar still overlaps the top of `/styleguide`; P5 replaces it.

### P5 — Site shell · `Complete` (2026-10-21)

- **What:** `Header` (white, sticky, logo, nav, Contact us), `MobileMenu`, `Footer` (Ink, white logo, contact, legal name + Amharic), `SkipLink`, `PageHeader`, `CtaBand`. Update `navigation` in `site.ts`: "Contact us" CTA, not "Get started".
- **Why:** Every page shares it; it sets the first impression.
- **Done when:** Keyboard and screen-reader pass on the menu; no layout shift on scroll; owner approves.
- **Plan agreed 2026-10-21** with recommendations 1–4 → D-38 (footer logo plate), D-39 (`nav-links` island instead of scroll shadow), D-40 (layout owns `<main>`), D-41 (CtaBand everywhere, template shell files deleted).
- **Built (2026-10-21):**
  - `ui/logo.tsx` (PNG until P3, ≥ 80 px), `ui/breadcrumbs.tsx`; `layout/`: `skip-link`, `header`, `nav-links` (client), `mobile-menu` (client, native `<dialog>`), `footer`; `sections/`: `page-header`, `cta-band`.
  - `siteConfig.navigation` = `main` (5 links) + `cta` "Contact us" + `legal`; new `descriptor`, `legalName`, `legalNameAmharic` (C-21); footer description = Brand §10.
  - Layout: SkipLink → Header → `<main id="main">` → Footer; Telegram button removed. 13 template pages: `<main>` → `<div>`; `CTASection` → `CtaBand` (copy in `src/data/cta.ts`), none on Contact. Deleted `navbar`, `footer`, `cta-section`, `telegram-chat-button` (and their LEGACY entries).
  - `globals.css`: `current:` variant (`aria-current="page"`), body scroll lock while the menu is open.
  - `/styleguide` now opens with `PageHeader` and ends with `CtaBand`; the old navbar no longer overlaps it.
- **Owner, 2026-10-21:** approved; committed.
- **Open points:**
  - The logo PNG green (`#006000`) sits next to brand green `#156635` in the header and on the green band's neighbours; P3 fixes it.
  - The footer logo plate is a stopgap (D-38).
  - Template sections under the new header still look unfinished; P7–P13 rebuild them.
  - Header is 74 px tall (72 + 2 px rule); `--header-height` (72) is used for anchor offsets, a 2 px difference.

### P6 — Content model, data and domain cards · `Complete` (2026-10-21)

- **What:**
  - Types were added in P4 as optional fields (D-28). P6 makes the essential ones required and replaces `Testimonial.company` with `role` + `organization`.
  - Rename services to the 6 official names (Brand §9).
  - Move hard-coded content (e.g. Equipment page cards) into `src/data/`.
  - Reorganize images into `public/images/…`.
  - Mark every unknown with `PLACEHOLDER(C-xx)`.
  - **Cards (from P4, D-34):** ProjectCard, ServiceCard, TestimonialCard, EquipmentCard, TeamCard, ReferenceCard in `src/components/cards/`, typed by the finished data shapes, shown on `/styleguide` with real data.
- **Why:** Pages built in P7–P13 consume finished shapes; data changes later become type errors, not silent bugs. Cards built against final shapes are built once.
- **Done when:** All data files are typed; `check:placeholders` lists exactly the open client items; the owner approves the cards on `/styleguide`.
- **Plan agreed 2026-10-21:** two passes (data + images, then cards); D-35 (`sharp`, `public/images/`), D-36 (obvious placeholders), D-37 (P5 unblocked).
- **Pass 1 done (2026-10-21):**
  - Types (`content.ts`): `ServiceSlug` union; `Service` = slug, official name, summary, intro, overview, forWho, includes, method, deliverables, cta; `Project` requires client, location, image, gallery, `services: ServiceSlug[]`; year/depth/yield/duration/approach/result optional (unknown facts render nothing); `tags`, `completedDate`, `url`, `keyFigure` removed; `Testimonial` = quote, name, role, organization; new `Spec`, `Capability`; `Reference.thumbnail` optional.
  - Data: six official services (Brand §9) with new slugs and verb-first CTAs; projects rewritten in sentence case, CREDOCS spelled one way (C-23) with no service (C-09), Entoto client replaced by "Client name (C-11)"; new `equipment.ts` (EQUIPMENT, CAPABILITIES moved out of the Equipment page) and `company.ts` (KEY_FIGURES, CREDENTIALS, TEAM, REFERENCES = []); every unknown marked, including the contact details in `site.ts`.
  - Images: sources `git mv`-ed to `assets/images/`; `npm run images` writes 28 images × widths to `public/images/`; custom next/image loader; Open Graph uses `preparedImageUrl`.
  - Template pages patched only to compile (service tags, project tags/links, testimonial fields); they are rebuilt in P7–P12.
  - I narrowed claims I could not source: dropped "percussion drilling", "VFDs/generators", and turnkey "treatment, storage and distribution networks"; all service wording is marked C-09.
- **Pass 2 done (2026-10-21):** `src/components/cards/`: ProjectCard, ServiceCard, TestimonialCard, EquipmentCard, TeamCard, ReferenceCard; shown on `/styleguide` → "Cards" with the site's data. `Card` gained `as="figure"`. Styleguide samples no longer invent figures (D-36).
- **Owner, 2026-10-21:** "if done 6 commit it" — committed on that instruction; the cards were not given a separate visual sign-off, so they are reviewed again when P7–P12 place them on pages (as D-34: Wondossen reviews the whole site at the end).
- **Open points for later review:**
  - Placeholder cards (team, equipment, testimonials) look deliberately empty; judge spacing and hierarchy, not content.
  - An equipment card without a photo sits beside one with a photo and looks unbalanced; real photos (C-16) fix it, or the page groups them.
  - Long official service names make long tags ("Pump Installation & Electromechanical Works" wraps to two lines on cards).
  - Card photos exceed the image budget (R-09).

### P7 — Home page + well diagram · `Complete` (2026-10-21)

- **What:** Sections in the order of Design System §4 (Home). Build `WellDiagram` and the `ServiceLifecycle` interaction. Choose the hero photo (rig + water at the surface).
- **Hero plan (D-27, owner, 2026-10-20):**
  - **Image:** `assets/images/hero/water-column.webp`, served as `/images/hero/water-column.webp` since P6 (1920 × 1280): a water column rising beside the rig against a clear sky. After P2 removed the template's green gradient, the owner saw it in natural color and called it "just beautiful". It is the leading candidate, compared against the C-18 originals when they arrive.
  - **Treatment:** natural color, no wash. A flat Ink scrim behind the text side only (Brand §7, ≤ 70%), tuned to the lightest opacity at which the headline and lead reach 4.5 : 1 over the brightest pixels behind them. The white spray must never sit behind text. Check the mobile crop (`object-position`) so the water column stays clear of the headline.
  - **Measured sky:** `#5A8FE8`–`#6DADF5` (≈ `#5E94EB`). White on it = 2.3–3.2 : 1, so text on the bare sky fails WCAG.
  - **Sky blue as a brand color (raised by the owner, not decided):** the owner is open to a sky-blue brand color, "not the navy". The agent objects: it fails contrast in both directions (2.3–3.2 : 1); the accessible version is the existing Water Blue `#0B5CA0`; it would compete with the photography that made the look work; and green is Liyat's only existing recognition (logo, brochure, vehicles, uniforms). Brand colors also change only by a management decision (Brand §12, Wondossen). The owner will review it again when the hero is built. Any change needs a new decision row, plus client approval.
  - **Preview:** P4 shows the `Photo` + scrim on `/styleguide` with this image.
  - **Panel choice (moved here from P4, D-34):** compare the translucent scrim panel with text on a solid Ink band at the bottom of the photo, at 375/768/1280, before building the hero. Seen at P4: at 1280 the panel's right edge already overlaps the rig mast and the edge of the water column.
- **Why:** The home page carries most of the first impression and proves the system works end to end.
- **Done when:** LCP < 2.0 s on mobile simulation; diagram readable at 320 px; owner approves.
- **Session 2026-10-21:**
  - Owner agreed: sections whose facts are missing (figures, equipment, testimonials) show marked fillers while building and hide when empty at launch; "Trusted by" shows all 7 clients (D-42); P7–P13 are built back to back today (D-43).
  - Hero comparison built first, as the owner asked to see options before big code: `/styleguide/hero-options` (temporary; `_parts/hero-options.tsx`). A = scrim panel over the photo; B = photo, then text on an Ink band; C = side by side from `lg` (text on Ink left, whole photo right). At 375 and 768 B and C are identical. Agent recommends C: at 1280 B's photo is 853 px tall, so the headline starts below the fold; A's panel covers the rig mast at 768 and 1280.
  - Owner chose **C** (D-44). Comparison page deleted.
- **Built (2026-10-21):**
  - Sections: `hero` (option C), `proof-strip`, `featured-projects`, `service-lifecycle`, `equipment-teaser`, `testimonials`; card `client-card`; primitive `subheading`; `diagrams/well-diagram.tsx` (on `/styleguide`, with the real Hero).
  - Primitives: Section `spacing="none"` / `container="none"` (full bleed); SectionHeading `size="display"`; Photo `width="major"`. `Scrim` and `--color-scrim` deleted (unused after D-44, D-47).
  - Data: `HomePage` rewritten (hero, proof, projects, lifecycle, equipment, testimonials; shared `Action` and `SectionCopy` types); `CtaBandContent.action` uses `Action`. `ABOUT_SUMMARY` removed (no About section on the home blueprint).
  - Deleted template files (owner agreed): `hero`, `hero-slideshow`, `about-section`, `partners-section`, `client-logos-marquee`, `projects-section`, `testimonials-section`, `_parts/hero-preview`; their LEGACY entries removed.
  - Home has no contact form any more: first-load JS 251.9 → **167.4 KB** gzip (R-07 closed for home).
- **Owner review:** at the end of today's run (D-43), with the whole site.
- **Open points:**
  - The well diagram is drawn from standard practice; Wondossen should confirm it matches how Liyat builds wells (C-27).
  - Figures, equipment and testimonials show marked fillers until C-10, C-16, C-12; each section hides when its data is empty.
  - LCP measured only indirectly (the hero is the one priority image, 640 px = 19 KB on phones); Lighthouse needs `npx lighthouse` (a download) — run in P15 with the owner's OK.

### P8 — Services · `Complete` (2026-10-21)

- **Built:** `/services` = PageHeader → ServiceLifecycle (with the diagram) → "What you receive at every stage" (FeatureGrid, 4 documents) → CtaBand. `/services/[slug]` = PageHeader (photo for drilling, pumping tests and pump installation only — no photo truly shows a survey, a wellhead or a turnkey job) → ServiceDetail → related projects (hidden when none: survey, wellhead, turnkey) → CtaBand.
- New in the library: `ui/check-list`, `ui/steps`, `cards/feature-card`, `sections/feature-grid`, `sections/service-detail`. `Service.image`, `SERVICES_PAGE` copy, `getProjectsByService()`. Template `services-section` deleted.
- Changed from the blueprint: "What you receive" moved into the overview sidebar — as its own section it held one lonely card.
- Verified: validate, check:design, build:static pass; `/services`, well drilling and pumping tests reviewed at 1280 and 375; fixed the gap between "What is included" and "How we work" on phones.

### P9 — Projects · `Complete` (2026-10-21)

- **Plan agreed 2026-10-21** (owner approved, including deleting `projects/loading.tsx`).
- **Built:** `/projects` = PageHeader → ProjectGrid (newest first; no project has a year yet, so the data order stands) → CtaBand. `/projects/[slug]` = PageHeader (client as eyebrow, summary, cover photo) → ProjectDetail (about the project beside "Project facts" + "Discuss a similar project") → PhotoGallery (stone, hidden when empty) → related projects sharing a service (hidden when none) → CtaBand.
- New in the library: `sections/project-grid`, `sections/project-detail`, `sections/photo-gallery` (on `/styleguide`); Photo ratio `feature`; PageHeader picks `feature` for portrait photos; FactsTable `water` rows; `ImageAsset.orientation`. Data: `ProjectsPage` type, `PROJECTS_PAGE`, `PROJECTS_NEWEST_FIRST`, `getRelatedProjects()`; portrait photos marked in `projects.ts` and `services.ts`.
- Changed from the blueprint: no full-width photo on the project page (D-48); gallery keeps each photo's shape (D-49).
- Side effect on P8: the pumping-tests and pump-installation headers now show their portrait photos at 4:5 from `lg` (was a 3:2 strip).
- Deleted `projects/loading.tsx` (owner approved); the three project files left `LEGACY`. The template `Container` is no longer used by the project pages. Open Graph no longer claims 1200 × 630 for portrait covers.
- **Open points:**
  - Most project pages are thin (one or two sentences, no figures) until C-11; only Ethiopian Airlines and CREDOCS have galleries.
  - The Tsedey Bank card crops to a building and crane (`focus: top`), not the pumping test; better photo or crop with C-18.
  - Related projects often show a single card (e.g. Ethiopian Airlines → Tsedey Bank).
  - Gallery photos cannot be enlarged (no client island for a lightbox).

### P10 — About page · `Complete` (2026-10-21)

- **Plan agreed 2026-10-21** in a question-by-question review: keep the three old About sections (D-50), facts as both a figures row and a "Company at a glance" table (D-51), delete the root `loading.tsx` (D-52).
- **Built:** `/about` = PageHeader (Afar rig photo) → Story + "Company at a glance" FactsTable → figures row (ProofStrip pattern) → What we offer → Who we serve → Our purpose (Story with Statement) → How we work (FeatureGrid) → Leadership and team (TeamGrid) → Licences and credentials (FeatureGrid, document icon) → Safety and site practice (FeatureGrid) → CtaBand.
- New in the library, shown on `/styleguide`: `sections/story` (text beside an optional facts sidebar or statement), `sections/team-grid`, `ui/statement`. `FeatureGrid` gained an optional link, following `FeaturedProjects`.
- Data: new `AboutPage` type; `src/data/about.ts` rewritten and typed (unsupported template claims dropped — rehabilitation/maintenance, hospitals and manufacturers, the unattributed quote now a company statement); `company.ts` gained `ABOUT_FIGURES`, `COMPANY_FACTS`, `SAFETY_PRACTICES`. New client item C-28 (confirm hospitals and manufacturers among clients).
- Cleanup: `src/app/loading.tsx` deleted (O-10 → D-52); About and loading left the `check:design` LEGACY list.
- **Verified:** `validate`, `check:design`, `build:static` pass; `check:placeholders` lists the expected open items. Built HTML serves the page content directly in `<main>` (the hidden reveal div is gone). Screenshots taken at 375/768/1280; 1280 reviewed — structure and order correct.
- **Owner review:** at the end of the run (D-43), with the whole site.
- **Open points:**
  - Most of the page is marked placeholders until C-08, C-10, C-14, C-15, C-17, C-28 arrive; under the empty-section rule About shrinks to header, story, offer, audience, purpose, principles at launch.
  - "Who we serve" and the practices in "How we work" make claims Liyat must confirm (C-28, C-09).
  - Console errors at the three widths not yet captured; full browser/aesthetic review happens at the end (D-43).

### P11 — Equipment · P12 — Testimonials

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
| C-27 | Wondossen checks the well cross-section drawing (home and services) matches how Liyat builds wells                                                             | P16       | Should                 | Open   |
| C-26 | Approval of Brand Guidelines v1.1 by Wondossen                                                                                                                 | P18       | Must                   | Open   |
| C-28 | Confirm the client types named on About (the template listed hospitals and manufacturers)                                                                      | P16       | Should                 | Open   |

## 6. Decisions log

Decisions that constrain future work. Change one only by adding a new row that supersedes it.

| ID   | Date       | Decision                                                                                                                                                                                                                                                                                         | Reason                                                                                                                                                                                                                                              |
| ---- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| D-01 | 2026-10-18 | Digital Presence package: no CMS; content as TypeScript in `src/data/`                                                                                                                                                                                                                           | Package scope                                                                                                                                                                                                                                       |
| D-02 | 2026-10-18 | Pages: Home, About, Services, Projects, Equipment & Capabilities, Testimonials, Contact + Privacy, Terms                                                                                                                                                                                         | Client blueprint                                                                                                                                                                                                                                    |
| D-03 | 2026-10-18 | Public name "Liyat Construction"; legal name "Liyat Construction PLC"                                                                                                                                                                                                                            | Client blueprint                                                                                                                                                                                                                                    |
| D-04 | 2026-10-18 | Must stay static-export compatible (`build:static`)                                                                                                                                                                                                                                              | Hosting not yet decided; keeps cPanel possible                                                                                                                                                                                                      |
| D-05 | 2026-10-20 | Brand green is **`#156635`**                                                                                                                                                                                                                                                                     | Measured from Liyat's own designed brochure; 7 : 1 on white; logo JPG green `#006000` is off-brand                                                                                                                                                  |
| D-06 | 2026-10-20 | Palette: Green, Ink, White + Stone, Green Tint, Line; **Water Blue only for water data**; Alert Red only for form errors                                                                                                                                                                         | One color + one neutral is the strongest identity; blue gains meaning                                                                                                                                                                               |
| D-07 | 2026-10-20 | Gold and navy are **not** used                                                                                                                                                                                                                                                                   | Gold 2.6 : 1 contrast, competes with yellow machinery; navy competes with green                                                                                                                                                                     |
| D-08 | 2026-10-20 | White sticky header with full-color logo; Ink footer with all-white logo                                                                                                                                                                                                                         | Logo shown in true colors; avoids green-on-dark conflict                                                                                                                                                                                            |
| D-09 | 2026-10-20 | Hero: one photograph (rig + water at the surface), flat Ink scrim, no slideshow                                                                                                                                                                                                                  | Faster LCP, calmer; most visitors never see slide 2; range shown in projects section                                                                                                                                                                |
| D-10 | 2026-10-20 | Hero headline "Know better. Drill better."; eyebrow "Water Well Drilling & Engineering"; promise heads the lifecycle section                                                                                                                                                                     | Client-owned tagline beats an invented one                                                                                                                                                                                                          |
| D-11 | 2026-10-20 | Six services in lifecycle order (Brand §9)                                                                                                                                                                                                                                                       | Client-sourced list; turnkey is a real tender category                                                                                                                                                                                              |
| D-12 | 2026-10-20 | Remove dark mode, Framer Motion and the phone-input library                                                                                                                                                                                                                                      | Off-brand (white pages); large share of JS; CSS covers our motion                                                                                                                                                                                   |
| D-13 | 2026-10-20 | Fonts stay Manrope (headings) + Inter (body); tabular numerals for figures                                                                                                                                                                                                                       | Good fit; gains are elsewhere                                                                                                                                                                                                                       |
| D-14 | 2026-10-20 | Four-layer design system; all raw values only in `src/styles/tokens.css`; Tailwind default palette disabled; `check:design` enforces it                                                                                                                                                          | Change anything visual in one place; consistency by construction                                                                                                                                                                                    |
| D-15 | 2026-10-20 | Brand colors leave `site.ts`; `site.ts` keeps identity, contact, navigation, SEO, form                                                                                                                                                                                                           | One home for design values (tokens), one for business facts (config)                                                                                                                                                                                |
| D-16 | 2026-10-20 | Signature visual: interactive well cross-section linking services to parts of the well                                                                                                                                                                                                           | Technical drawings are part of the brand; shows expertise without decoration                                                                                                                                                                        |
| D-17 | 2026-10-20 | Placeholders allowed during build, marked `PLACEHOLDER(C-xx)`; zero required at launch                                                                                                                                                                                                           | Judge design with realistic content; impossible to ship by accident                                                                                                                                                                                 |
| D-18 | 2026-10-20 | English only; Amharic legal name in the footer                                                                                                                                                                                                                                                   | Scope; local credibility at no cost                                                                                                                                                                                                                 |
| D-19 | 2026-10-20 | `WORKFLOW.md` replaces `PROJECT_WORKFLOW.md`; `PROJECT_DOCUMENTATION.md` is replaced by `docs/`                                                                                                                                                                                                  | One current source; template-era docs were outdated                                                                                                                                                                                                 |
| D-20 | 2026-10-20 | `check:design` keeps a `LEGACY` list of template files whose violations are only warnings; it fails if an entry is deleted or clean                                                                                                                                                              | The check passes from P1 on and blocks new violations; the list can only shrink                                                                                                                                                                     |
| D-21 | 2026-10-20 | `npm run analyze` uses Next's built-in `next experimental-analyze` (Turbopack), not `@next/bundle-analyzer`                                                                                                                                                                                      | `@next/bundle-analyzer` only works with webpack builds; Next 16 builds with Turbopack                                                                                                                                                               |
| D-22 | 2026-10-20 | Framer Motion removed (owner questioned D-12, then agreed — O-07 closed)                                                                                                                                                                                                                         | ~42 KB gzip chunk; forced client components; hero headline invisible until hydration (> 3 s in dev). CSS covers our motion                                                                                                                          |
| D-23 | 2026-10-20 | `@next/bundle-analyzer` removed                                                                                                                                                                                                                                                                  | Unused; superseded by D-21                                                                                                                                                                                                                          |
| D-24 | 2026-10-20 | JS budget: our own JS ≤ 30 KB gzip per route on top of React/Next; total first-load ≤ 190 KB (excl. `nomodule` polyfill). Replaces "≤ 110 KB total" (O-09, owner delegated the choice)                                                                                                           | React 19 + Next 16 alone ≈ 155 KB, so 110 KB was unreachable; the limit now covers what we control, and Lighthouse/LCP/INP targets stay                                                                                                             |
| D-25 | 2026-10-20 | Tailwind defaults switched off for colors, fonts, type sizes, radii and all shadow namespaces (not just colors); spacing, breakpoints, containers, weights stay. Supersedes the color-only reset in D-14                                                                                         | Only tokens can be used for any visual decision; owner approved the agent's recommendation                                                                                                                                                          |
| D-26 | 2026-10-20 | `check:design` also flags switched-off defaults (`text-sm`, `rounded-lg`, `shadow-md`, `font-sans`, `*-black`) and template tokens (`brand-primary/accent`, `text-secondary`, `surface-*`). The 7 template files only these rules caught were added to `LEGACY` (one-time exception to D-20)     | These classes generate no CSS, so they would fail silently; the files are all rebuilt in P5–P13                                                                                                                                                     |
| D-27 | 2026-10-20 | Hero and all photography keep their natural color: no green, blue or other color wash. Text over a photo sits on a flat Ink scrim limited to the text area, as light as contrast allows. Candidate hero image: `public/hero/hero-water-column.webp` (see P7)                                     | The owner saw the photo unwashed after P2 and preferred it strongly. It confirms Brand §6 and D-09; the template's green wash broke them                                                                                                            |
| D-28 | 2026-10-20 | Content types for cards (`Equipment`, `TeamMember`, `Reference`, `Credential`, `Stat`, new `Project`/`Testimonial` fields, `ImageAsset.focus`) are added in P4 as optional fields; P6 fills the data and tightens them                                                                           | Cards are typed against `content.ts` (DS §3.2), but P6 depends on P4; optional fields keep the template pages compiling (owner approved)                                                                                                            |
| D-29 | 2026-10-20 | `/styleguide` specimen chrome lives in `src/app/styleguide/_parts/` and is the one place outside `ui/`/`cards/` with visual classes; swatch values are read from `tokens.css` at build time                                                                                                      | It documents tokens rather than using them; reading the file means it cannot drift                                                                                                                                                                  |
| D-30 | 2026-10-20 | Components adapt to dark surfaces through an `on-dark:` custom variant (`data-on-dark` / `data-on-light`), replacing the documented `onDark` prop on Button and `tone` prop on Rule                                                                                                              | Cannot be forgotten on a dark section; one rule for every component; cards inside dark sections switch back by themselves                                                                                                                           |
| D-31 | 2026-10-20 | Hero ratio 3:2 (the hero photos are 1920 × 1280), not 16:9; phones crop 4:5 with the text below the photo on Ink, so spray is never behind text. `ImageAsset.focus` chooses the crop of portrait photos in 4:3 cards                                                                             | Matches the real photos; 10 of 16 project photos are portrait (owner approved recommendation 2)                                                                                                                                                     |
| D-32 | 2026-10-20 | `pick(map, key)` helper for variant lookups holds the only `security/detect-object-injection` exception; `cn()` extends tailwind-merge with the token names                                                                                                                                      | The lint rule rejects `map[key]`; plain tailwind-merge reads `text-body` as a color and drops it next to `text-white`                                                                                                                               |
| D-33 | 2026-10-21 | Surfaces: page `paper` = **`#F8F7F3`** (warm off-white), `stone` = **`#EEEBE3`**, cards/inputs/tags/header = `white` `#FFFFFF`. Owner chose option B of an A/B/C comparison on `/styleguide` (closes O-08). Changes Brand §4/§11 "white pages"; covered by Wondossen's guideline approval (C-26) | Owner wanted page and cards distinct while both read as white. An off-white page alone sits within ΔE 1.8 of the old Stone, so Stone deepened with it. All text pairs still pass AA: Ink 14.6/13.2, Ink Muted 6.0/5.4, Green 6.6/5.9 on Paper/Stone |
| D-34 | 2026-10-21 | P4 is complete with the primitives and `/styleguide`; the six domain cards move to P6 and the hero panel choice to P7. Owner decision: commit now, Wondossen reviews the whole site at the end                                                                                                   | Agent's objection, recorded: P4 was meant to judge the cards before they multiply. Risk is low because no page uses a card before P7, and P6 builds them against the final data shapes, so they are reviewed at P6 instead                          |
| D-35 | 2026-10-21 | `sharp` is an explicit devDependency (version Next already installs) for `scripts/optimize-images.mjs`; images move to `public/images/{hero,projects/<slug>,clients}/` (closes O-04)                                                                                                             | Only transitively installed before, so a Next update could break the script; responsive widths are required by the image budget (Engineering §4–5)                                                                                                  |
| D-36 | 2026-10-21 | Unconfirmed **facts** use obviously fake placeholders ("Name Surname", "Rig model (C-16)", no invented figures); only text length stays realistic. Cards render nothing for a missing figure. Refines D-17                                                                                       | Fake quotes under realistic names and invented depths beside real client names could ship by accident or be read as fact (R-02)                                                                                                                     |
| D-37 | 2026-10-21 | P5 no longer waits for the client: built with marked placeholder contact details and the current `logo.png`, swapped at P3/P16. P5 runs right after P6                                                                                                                                           | D-17 allows placeholders; otherwise the critical path P5 → P7 → every page waits on client content                                                                                                                                                  |
| D-38 | 2026-10-21 | Until P3, the footer shows the full-color logo on a small white plate (`Logo variant="white"`, marked C-01); P3 swaps the vector white logo in `ui/logo.tsx`                                                                                                                                     | The PNG cannot be recolored: the L's counter is opaque white, so a white tint fills the letter. A plate keeps the mark recognizable without altering it                                                                                             |
| D-39 | 2026-10-21 | No shadow after scroll: the header's green rule separates it. The client island `layout/header-scroll.tsx` is replaced by `layout/nav-links.tsx` (marks the current page with `aria-current`)                                                                                                    | Brand: shadows almost absent. Current-page state helps keyboard and screen-reader users; the JS budget stays the same                                                                                                                               |
| D-40 | 2026-10-21 | The root layout owns the single `<main id="main">` (skip-link target); pages render no `<main>`                                                                                                                                                                                                  | One target, and new pages cannot forget it                                                                                                                                                                                                          |
| D-41 | 2026-10-21 | `CtaBand` replaces the template `CTASection` on every page now; `navbar.tsx`, `footer.tsx`, `cta-section.tsx`, `telegram-chat-button.tsx` deleted (owner approved). The floating Telegram button returns only if O-06 says so                                                                    | Removes legacy code and gives every page the final ending now                                                                                                                                                                                       |
| D-42 | 2026-10-21 | "Trusted by" shows all 7 client names and logos in `partners.ts`; the owner confirms they come from Liyat. A written OK to be named is still requested from each client (C-11)                                                                                                                   | Owner supplied the fact; the agent had proposed showing only the 2 confirmed clients and changed position on this new information                                                                                                                   |
| D-43 | 2026-10-21 | Today P7–P13 are built back to back: every step passes the checks and gets its own commit, and the owner reviews the whole site at the end instead of after each step. Exception: the hero layout is chosen first from a comparison                                                              | Owner wants the full structure today. Risk accepted: a dislike that repeats across pages is fixed on several pages, mostly in shared components                                                                                                     |
| D-44 | 2026-10-21 | Home hero = option C: from `lg` the text on Ink at the left and the whole photo at the right; below `lg` the photo, then the text on Ink. Chosen by the owner from an A/B/C comparison (closes D-34's panel question)                                                                            | Nothing covers the photo; headline and buttons above the fold at 1280 (B pushed them below); contrast does not depend on the photo, so it survives the C-18 swap                                                                                    |
| D-45 | 2026-10-21 | ServiceLifecycle highlights the well-diagram part with CSS `:has()` in `globals.css`, not a client island; removed from the client-island list (Engineering §3)                                                                                                                                  | Zero JavaScript; works with keyboard focus; supported by all current browsers                                                                                                                                                                       |
| D-46 | 2026-10-21 | FeaturedProjects shows 3 equal cards (2 at `md`), not "1 large + 2"                                                                                                                                                                                                                              | Most project photos are portrait; a large 4:3 card beside two stacked ones leaves uneven heights. Equal cards are calmer                                                                                                                            |
| D-48 | 2026-10-21 | Project pages open with `PageHeader` and the cover photo beside the title, not a full-width photo. Portrait photos (`ImageAsset.orientation`) use the Photo `feature` ratio: 3:2 while stacked, 4:5 from `lg`. Applies to every PageHeader                                                       | 9 of 12 project photos are portrait and most are 901 px wide: full width at 1280 would upscale them and crop them to a strip (owner approved the plan)                                                                                              |
| D-49 | 2026-10-21 | `PhotoGallery` lays photos out in CSS columns, each at its own shape (portrait 4:5, landscape 3:2) instead of one cropped ratio                                                                                                                                                                  | The galleries mix tall phone shots and wide frames; a single 3:2 or 4:3 crop cut the portrait ones to a band. Fixed ratios keep zero layout shift                                                                                                   |
| D-47 | 2026-10-21 | `Scrim` primitive and `--color-scrim` token deleted                                                                                                                                                                                                                                              | No text sits on a photo after D-44; Brand §7 still allows a scrim if a future layout needs one                                                                                                                                                      |
| D-50 | 2026-10-21 | About keeps the three template-era sections — "What we offer", "The real purpose" (now "Our purpose"), "Who we serve" — rewritten in the design system                                                                                                                                           | Owner's call. Agent's objection, recorded: "What we offer" repeats the Services page; the audience list claims client types Liyat hasn't confirmed (C-28); the purpose quote was unattributed — it now renders as a company statement, not a quote  |
| D-51 | 2026-10-21 | About shows company facts both ways: a figures row (`ABOUT_FIGURES`) and a "Company at a glance" FactsTable beside the story                                                                                                                                                                     | Owner chose "both" over replacing the figures row with the table (the agent's recommendation: "Addis Ababa" and licence grades are words, not numbers)                                                                                              |
| D-52 | 2026-10-21 | Root `src/app/loading.tsx` deleted (closes O-10)                                                                                                                                                                                                                                                 | It wrapped every page in `<div hidden>` until a script revealed it — without JavaScript the content stayed hidden. Pages are static; there is nothing to wait for                                                                                   |

### Open decisions

| ID   | Question                                      | Recommendation                                                                                          | Needed by |
| ---- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------- | --------- |
| O-01 | Form provider                                 | **Web3Forms**: free tier sufficient, works on static hosting, no backend, built-in spam filter          | P13       |
| O-02 | Hosting                                       | **Vercel** if the client accepts it (headers, HTTPS, previews included); cPanel static export otherwise | P17       |
| O-03 | Analytics                                     | None at launch, or a cookieless option (e.g. Vercel Analytics / Plausible) — avoids a consent banner    | P14       |
| O-05 | `/styleguide` at launch                       | Keep it, `noindex` and unlinked — useful for future maintenance                                         | P17       |
| O-10 | Root `src/app/loading.tsx` (template spinner) | **Closed by D-52:** deleted in P10                                                                      | —         |
| O-06 | Floating WhatsApp/Telegram button             | Only if the client actively answers that channel (C-20)                                                 | P5        |

## 7. Risks

| ID   | Risk                                                                                                                                                                                                                                                         | Mitigation                                                                                                    | Status                                 |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| R-01 | Real content arrives late or incomplete                                                                                                                                                                                                                      | Build with marked placeholders; sections hide when data is empty                                              | Open                                   |
| R-02 | Unverified claims or client names published                                                                                                                                                                                                                  | Every claim tied to a C-xx item; `check:placeholders` launch gate                                             | Open                                   |
| R-03 | Low-resolution logo and some photos                                                                                                                                                                                                                          | P3 vector logo; request originals (C-18)                                                                      | Open                                   |
| R-04 | Legal text is generic                                                                                                                                                                                                                                        | Client or qualified party reviews before launch                                                               | Open                                   |
| R-05 | No automated UI tests                                                                                                                                                                                                                                        | Typed data, `check:design`, styleguide review, manual QA in P15                                               | Open                                   |
| R-06 | Contact details on the current site may be invented                                                                                                                                                                                                          | Confirm C-03…C-05 before anything is published                                                                | Open                                   |
| R-07 | Contact form adds ~79 KB gzip (zod + react-hook-form) to every page that renders it — today home and contact                                                                                                                                                 | Home blueprint has no form (P7 drops it); P13 uses `zod/mini` or native constraint validation and measures it | Home closed (P7) — contact page in P13 |
| R-09 | Card photos at 800 px are 54–208 KB (budget 70 KB); recompressed social-media sources compress badly, and quality 50 still gives ~70 KB on a 4:3 crop                                                                                                        | Originals (C-18), then `npm run images`; if still over, card-ratio crops in the script. Re-measure in P15     | Open                                   |
| R-08 | Static export: client navigation requests `…/__next.<route>.__PAGE__.txt`, which `out/` stores as `__next.<route>/__PAGE__.txt`; a plain static server returns 404 (seen with `python -m http.server`). Pages load; navigation may fall back to full reloads | Test on the chosen host in P17 (O-02); check the Next 16 docs for the static-host setup                       | Open                                   |

## 8. Handoff

### Current state of the code

Home, Services, Projects and About are rebuilt in the final design system
(P7–P10). Equipment, Testimonials and Contact are still template pages on the
`check:design` LEGACY list; P11–P13 rebuild them next. Content and photos in
`src/data/` and `public/` carry `PLACEHOLDER(C-xx)` markers until P16.

### Last session — 2026-10-21 (P10)

- Owner answered the four P10 questions one at a time: keep the old sections (D-50), facts both ways (D-51), delete `loading.tsx` (D-52), build.
- Built and verified P10; `validate`, `check:design`, `check:placeholders` (expected markers) and `build:static` pass; `/about` serves its content directly.
- Screenshots at 375/768/1280 taken; 1280 reviewed and correct. Remaining: owner's whole-site review at the end (D-43).
- Tooling: PIL is not installed, so cropping the tall screenshot failed; view captures directly or re-screenshot per section.
- P10 commit `P10: About page` is still pending the owner's OK.

### Earlier session — 2026-10-21 (P9)

- Owner approved the P9 plan and deleting `projects/loading.tsx`. Built and verified P9 (D-48, D-49); committed on the owner's instruction.
- Found: the root `loading.tsx` hides every page's content until a script runs (O-10). Not fixed: it is outside P9 and deleting needs the owner's OK.
- Tooling: port 3007 belongs to another session, so this session served `out/` with the `static-out-3005` config. Its `python` command ignores the port the app assigns (3006): the server is on **3005**. In the hidden browser pane, React's reveal script waits for a frame, so content measures 0 × 0 until a screenshot is taken. Measure after a screenshot.

### Earlier session — 2026-10-21 (P7 and P8)

- Owner agreed the plan in a question-by-question review; chose hero option C from a live A/B/C comparison (D-44). D-42…D-47 and C-27 recorded.
- P7 and P8 built, verified and committed (`ae901ba`, `b44a6fd`). The owner has not yet looked at them in the browser: review at the end (D-43).
- Owner, 2026-10-21: from P9 on, **one phase per new session**. Start P9 by reading §4 P9 and the Projects blueprint; the projects pages are still the template (`src/app/projects/page.tsx`, `[slug]/page.tsx`, `loading.tsx` on the LEGACY list). Reuse `FeaturedProjects`, `ProjectCard`, `FactsTable`, `Photo`, `PageHeader`, `CtaBand`; the project page needs a gallery.
- Tooling: the static server on port 3007 belongs to another session but serves this folder's `out/`, so `npm run build:static` then open `http://localhost:3007`. The built-in browser pane renders blank while hidden; use headless Edge for 1280/768 captures and a 375 px iframe for phones.

### Earlier session — 2026-10-21 (P5)

- P6 committed (`e2aba3d`) on the owner's instruction. P5 planned, approved (D-38…D-41) and built; owner approved P5; committed.
- One `build:static` failed with a Turbopack "next/font/google queries have exactly one entry" error and passed unchanged on retry — likely the other session's dev server sharing `.next`. Retry before debugging.
- My first JS measurement wrongly counted the polyfill (`noModule` attribute, case); corrected figures below.
- Removed two client-bundle leaks found while measuring: the icon map (MobileMenu imported Icon/Button) and tailwind-merge from `nav-links`. Rule added to Engineering §3.

### Earlier session — 2026-10-21 (P6, passes 1 and 2)

- Owner approved the P6 plan and D-35…D-37. Built both passes; owner asked to commit P6 → `Complete`, committed.
- New preview config `static-out-3007` (`autoPort: false`): port 3005 was taken by another session's server. The built-in browser pane renders stale frames while the app window is hidden, so 1280/768 captures were made with headless Edge, and 375 through a 375 px iframe.
- `check:placeholders` still lists two `example.com` strings on `/styleguide` (false positives); they fail the launch gate unless O-05 removes or excludes the styleguide.
- Next: P5 with placeholder contact details and the current `logo.png` (D-37).

### Earlier session — 2026-10-21 (P4 complete)

- Owner asked to commit P4 and move on (D-34). Cards → P6, hero panel choice → P7. Screenshots for Wondossen made from `/styleguide`.
- P4 committed.

### Earlier session — 2026-10-21 (P4, surfaces)

- Owner found the old template pages unreadable (expected since P2) and the white-on-white cards flat. Compared A/B/C surfaces on `/styleguide`; owner chose B (D-33). Cool grey-green option dropped: clashes with the warm Stone and photos.
- Applied D-33; `manifest.ts` background follows Paper, theme color stays white (header).
- The `static-out-3005` preview server stops when the agent's turn ends; the owner can run `python -m http.server 3005 -d out` themselves after `npm run build:static`.

### Earlier session — 2026-10-20 (P4, pass 1)

- Owner approved the P4 plan with recommendations 1–4 (D-28, D-31; two review passes; image script stays in P6).
- Built the §3.1 primitives plus `Scrim` and `SmartLink`, the `on-dark:` variant (D-30), `pick()` and the token-aware `cn()` (D-32), aspect-ratio tokens, and `/styleguide` pass 1.
- Measured the hero scrim: the existing 62 % is exactly the lightest opacity that keeps white text at 4.5 : 1 over pure white (the clouds left of the water column). Over blue sky alone 43 % would do, but text in any realistic layout crosses clouds, so the token is unchanged.
- Found: Tailwind's `max-w-prose` is 65ch and beats `--container-prose`; `Container size="prose"` now uses `max-w-(--container-prose)`.
- Found: R-08 (static-export prefetch 404s), not caused by P4.
- `src/components/container.tsx` (template) is superseded by `ui/container.tsx` but still used by template files; delete it when they are rebuilt (deleting needs owner approval).
- `.claude/launch.json` gained `static-out-3005` (serves `out/` with Python), because another session's `next dev` holds this folder's dev lock.

### Earlier session — 2026-10-20 (P2)

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

P9, 2026-10-21:

- `npm run validate` → pass. `npm run check:design` → pass (LEGACY shrank by 3). Clean `npm run build:static` → pass, 8 project pages.
- Captured `/projects`, Ethiopian Airlines, CREDOCS and SD Salt at 1280 and 768 (headless Edge) and reviewed; 375 in the browser pane (mobile emulation): `/projects`, CREDOCS, Ethiopian Airlines and pumping tests have no horizontal overflow; the CREDOCS header photo is 343 × 229 (3:2) at 375 and the gallery stacks at 343 × 229 / 343 × 429 / 343 × 229.
- At 1280 the Ethiopian Airlines header photo is 379 × 474 (4:5), eager (`cover-800.webp`); the other images are lazy. One `h1`, one `<main>`. Facts: client, location, services, "Tested yield 40 L/s" in `rgb(11 92 160)` (Water Blue); missing facts render no row.
- All 25 image URLs (`src` + `srcset`) on `/projects` return 200. Console: only the R-08 `__PAGE__.txt` prefetch 404s.
- JS first load (gzip, without the polyfill): `/projects`, project pages, `/services/pumping-tests` and home all 167.4 KB (unchanged).

P7, 2026-10-21:

- `npm run validate` → pass. `npm run check:design` → pass (LEGACY shrank by 7). Clean `npm run build:static` → pass, 29 pages.
- Home captured at 1280 and 768 (headless Edge) and 375 (iframe) and reviewed. Found and fixed: client cards with a logo collapsed to an empty strip at 375 (`flex-1` on the logo box); the "Wellhead" label touched the ground line.
- Browser (static `out/`, port 3007): one `h1` ("Know better. Drill better."), one `<main>`; the only eager images are the logo and the hero (`water-column-640.webp` at 375); no horizontal overflow at 375. Hovering "Pumping Tests" leaves the water levels at full strength and fades the other parts (screenshot). Console: only the R-08 `__PAGE__.txt` prefetch 404s.
- JS first load (gzip, without the polyfill): home 167.4 KB (was 251.9), `/projects` 167.4 KB.

P5, 2026-10-21:

- `npm run validate` → pass. `npm run check:design` → pass (LEGACY shrank by 4). Clean `npm run build:static` → pass, 29 pages.
- Browser (static `out/`, port 3007): one `<main id="main">` per page and one h1; first Tab = "Skip to content" (visible at top left, green outline); Enter → `#main`, next Tab lands inside main. Header `position: sticky`, white, 2 px `rgb(21 102 53)` bottom border, `box-shadow: none`; logo 84 px wide. Current page green with `aria-current="page"` (Projects, Testimonials, Services, Equipment checked).
- Mobile menu at 375: button 44 × 44 named "Open menu"; Enter opens a modal dialog (375 × 812), focus on "Close menu", body overflow hidden; 9 × Tab stays inside; Esc closes, focus back on the button, scroll restored. Following "Services" navigates and closes the menu.
- No horizontal overflow at 375 (375), 768 (753 + scrollbar) or 1280. Footer at 768: brand block full width, Pages and Contact side by side. Header, CtaBand and footer captured at 1280, 768 and 375 and reviewed. No console errors besides the R-08 prefetch 404s.
- JS first load (gzip, without the `noModule` polyfill): `/projects` 167.4 KB, `/styleguide` 168.1 KB (P4: ≈ 171 KB), home 251.9 KB (contact form, R-07). No icon map in client chunks.

P6, 2026-10-21:

- `npm run validate` → pass. `npm run check:design` → pass (no file added to LEGACY). `npm run check:placeholders` → 25 hits: C-03, C-04, C-05, C-07, C-08, C-09, C-10, C-11, C-12, C-13, C-14, C-15, C-16, C-23 in data/config, C-22 on the styleguide, plus 2 `example.com` false positives.
- Clean `npm run build:static` → pass, 29 pages; new slugs generated (`/services/hydrogeological-survey`…, `/projects/credocs-shoring`).
- Every `src`/`srcset` in the built home, projects, styleguide and CREDOCS pages resolves to a file in `out/` (229 refs checked; the client logos needed `unoptimized` removed). Srcset example: `cover-400.webp 400w, cover-800.webp 800w, cover-901.webp 1024w`. Project OG image → `…/cover-901.webp`.
- Image sizes (`npm run images`): hero water column 19/34/56/72 KB at 640/1024/1600/1920 (budget 180 KB ✔); project covers at 800 px 92–208 KB (budget 70 KB ✘ → R-09); 400 px 24–67 KB.
- Browser (static `out/` on port 3007): network shows every image 200; console errors are only the R-08 `__PAGE__.txt` prefetch 404s. No horizontal overflow at 375 (scrollWidth 375). Cards captured at 1280 and 768 (headless Edge) and 375 (iframe) and reviewed; fixed the testimonial divider touching the quote, and the styleguide's testimonial (3 → 2 columns at 768) and reference (max width) layout.

P4 pass 1, 2026-10-20:

- `npm run validate` → pass. `npm run check:design` → pass (no file added to LEGACY). `npm run check:placeholders` → 5 hits: C-12 (testimonials) plus C-22, C-10, C-11 and C-09 on the styleguide samples, as intended.
- Clean `npm run build:static` → pass, 29 pages including `/styleguide` (`noindex`, not in the sitemap).
- Browser (static `out/` on port 3005), computed styles at 1280: primary button on Ink = white background, `rgb(21 102 53)` text, 44 px tall; on paper = green, white text; a link inside a card on Ink stays green; eyebrow and water figure on Ink turn white; water figure on paper = `rgb(11 92 160)`; scrim `rgba(29 37 33 / 0.62)`; ratios 3/2, 4/3, 4/5 and 1/1 applied; the invalid email has `aria-invalid`, the Alert border and `aria-describedby="sg-email-hint sg-email-error"`; the external link has `target=_blank` and "(opens in a new tab)". The focus rule `[data-on-dark] :focus-visible:not([data-on-light] *)` matches buttons on Ink and not links inside cards.
- No horizontal overflow at 375 (scrollWidth 375), 768 and 1280. Full-page screenshots at 1280 (headless Edge) and pane screenshots at 375 reviewed; at 375 the hero text stacks on Ink below the photo. Headless Edge cannot render narrower than about 500 px, so its "375" capture was discarded.
- Scrim measurement (`sharp` on `hero-water-column.webp`): brightest pixel left of the column = `#FFFFFF` → needs α ≥ 0.62; blue sky only = `#7FB8FB` → α ≥ 0.43.
- JS: `Reveal` chunk 726 B gzip; `/styleguide` first load ≈ 171 KB gzip excluding the 38 KB `nomodule` polyfill (same as `/about`), within D-24.
- Console: no errors from the styleguide; only the R-08 prefetch 404s for template routes.

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

**P10 — About page.** See §4 P10. P3 still waits for C-01.
