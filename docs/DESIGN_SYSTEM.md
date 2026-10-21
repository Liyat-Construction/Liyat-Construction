# Design System

> How the [brand](BRAND_GUIDELINES.md) becomes code. **Every visual decision is
> made exactly once, in one file, and reused everywhere.** If you are about to
> type a color, a font size, a radius or a button style inside a page or
> section, stop: it belongs in a token or a component listed here.

---

## 1. The principle — one source for every decision

The site is built in four layers. Each layer only uses the layer below it.

```
┌──────────────────────────────────────────────────────────────────────┐
│ 4. PAGES       src/app/**/page.tsx                                   │
│    Pick sections, pass them data from src/data. No styling.          │
├──────────────────────────────────────────────────────────────────────┤
│ 3. SECTIONS    src/components/sections/*   (+ layout/, diagrams/)    │
│    Hero, ProofStrip, FeaturedProjects… Arrange cards and primitives. │
│    Layout classes only (grid, gap, order). No colors, no type sizes. │
├──────────────────────────────────────────────────────────────────────┤
│ 2. COMPONENTS  src/components/ui/*  and  src/components/cards/*      │
│    Button, Card, Section, Heading, Stat, ProjectCard…                │
│    The ONLY place visual styling is written.                         │
├──────────────────────────────────────────────────────────────────────┤
│ 1. TOKENS      src/styles/tokens.css                                 │
│    Colors, fonts, type scale, spacing, radii, shadows, motion.       │
│    The ONLY place raw values (hex, px, rem, ms) are written.         │
└──────────────────────────────────────────────────────────────────────┘
```

**What this buys us**

| I want to change…              | I edit exactly                           |
| ------------------------------ | ---------------------------------------- |
| The brand green, everywhere    | `tokens.css` → `--color-brand`           |
| Every heading size             | `tokens.css` → `--text-h1` … `--text-h4` |
| How every primary button looks | `ui/button.tsx` → `variants.primary`     |
| Corner radius of every card    | `tokens.css` → `--radius-card`           |
| Padding of every section       | `tokens.css` → `--spacing-section`       |
| How every project card looks   | `cards/project-card.tsx`                 |
| Homepage section order         | `src/app/page.tsx`                       |
| Any text on the site           | `src/data/*.ts` or `src/config/site.ts`  |

**Enforcement.** Tailwind's default colors, fonts, type sizes, radii and shadows
are switched off (`--color-*`, `--font-*`, `--text-*`, `--radius-*`, `--shadow-*`
and the other shadow namespaces set to `initial` — D-25), so `bg-red-500`,
`text-sm`, `rounded-xl` or `shadow-lg` simply do not exist — only Liyat tokens do.
Tailwind ignores unknown classes silently, so `npm run check:design` fails if a
hex value, `rgb()`, an arbitrary value (`text-[17px]`, `bg-[#…]`), a default
palette class, a switched-off default (`text-sm`, `rounded-lg`, `shadow-md`,
`font-sans`, `*-black`) or a template-era token (`brand-primary`, `brand-accent`,
`text-secondary`, `surface-*`) appears outside `tokens.css`.
Still available from Tailwind: the 4 px spacing scale, breakpoints, default
containers (`max-w-xl`…), `rounded-none`/`rounded-full`, font weights, leading,
tracking and easing helpers.
A genuine exception needs a `// design-exception: <reason>` comment on that line.

---

## 2. Tokens — `src/styles/tokens.css`

Tokens are Tailwind 4 `@theme` variables. Each token automatically becomes
utility classes (`--color-brand` → `bg-brand`, `text-brand`, `border-brand`).
Components use **token names only**. Tokens outside a Tailwind namespace
(`--header-height`, `--rule-width`, `--focus-*`, `--duration-*`) are used as CSS
variables, e.g. `duration-(--duration-fast)`, `h-(--header-height)`.

### 2.1 Color

| Token                | Value     | Utility examples                    | Role                                      |
| -------------------- | --------- | ----------------------------------- | ----------------------------------------- |
| `--color-brand`      | `#156635` | `bg-brand` `text-brand`             | Actions, links, rule, highlights          |
| `--color-brand-dark` | `#0F4F28` | `hover:bg-brand-dark`               | Hover / pressed of brand elements only    |
| `--color-brand-tint` | `#E7F0EA` | `bg-brand-tint`                     | Callouts, table rows, selected states     |
| `--color-ink`        | `#1D2521` | `text-ink` `bg-ink`                 | Text, headings, footer, dark sections     |
| `--color-ink-muted`  | `#56615B` | `text-ink-muted` `border-ink-muted` | Secondary text, captions, input borders   |
| `--color-paper`      | `#F8F7F3` | `bg-paper`                          | Page background (warm off-white, D-33)    |
| `--color-stone`      | `#EEEBE3` | `bg-stone`                          | Alternating sections                      |
| `--color-line`       | `#DCDAD3` | `border-line`                       | Hairlines, card borders                   |
| `--color-water`      | `#0B5CA0` | `text-water` `fill-water`           | **Water data only**                       |
| `--color-alert`      | `#B42318` | `text-alert` `border-alert`         | Form errors only                          |
| `--color-white`      | `#FFFFFF` | `bg-white` `text-white`             | Cards, inputs, tags, header; text on dark |

Plus `transparent` and `current`. Nothing else exists.
Contrast proofs and forbidden pairs: [Brand §4](BRAND_GUIDELINES.md#4-color).
**Hard rule: never `text-brand` on `bg-ink` (2.2 : 1).** On Ink, actions are white.
**Surfaces (D-33):** the page is `paper`, anything that sits on it (cards, inputs,
tags, header) is `white` — never `bg-paper` inside a component.

### 2.2 Typography

Fonts load through `next/font` (self-hosted, no Google request at runtime),
exposed as `--font-heading` (Manrope 600/700) and `--font-body` (Inter 400/500/600),
with Arial-metric fallbacks to prevent layout shift.

Sizes are fluid (`clamp`) so one token works from 375 px to 1440 px — no
per-breakpoint font classes in components.

| Token            | Size (min → max)     | Line height | Font / weight                 | Used for                        |
| ---------------- | -------------------- | ----------- | ----------------------------- | ------------------------------- |
| `--text-display` | 2.5rem → 4.25rem     | 1.05        | Manrope 700, −0.02em          | Home hero headline only         |
| `--text-h1`      | 2.25rem → 3.25rem    | 1.1         | Manrope 700, −0.015em         | Page titles                     |
| `--text-h2`      | 1.75rem → 2.5rem     | 1.15        | Manrope 700, −0.01em          | Section titles                  |
| `--text-h3`      | 1.25rem → 1.5rem     | 1.3         | Manrope 600                   | Card titles, sub-sections       |
| `--text-h4`      | 1.0625rem → 1.125rem | 1.4         | Manrope 600                   | Small headings, table headers   |
| `--text-figure`  | 2rem → 3rem          | 1           | Manrope 700, tabular          | Stats: depths, yields, counts   |
| `--text-lead`    | 1.125rem → 1.25rem   | 1.6         | Inter 400                     | Intro paragraphs                |
| `--text-body`    | 1rem                 | 1.6         | Inter 400                     | Body                            |
| `--text-small`   | 0.875rem             | 1.5         | Inter 400/500                 | Captions, metadata, table cells |
| `--text-eyebrow` | 0.8125rem            | 1.2         | Inter 600, +0.08em, UPPERCASE | Labels above headings           |

Rules: one `h1` per page; heading levels never skip; headings in sentence case;
paragraph width ≤ 68 characters (`max-w-prose`); figures always `tabular-nums`.

### 2.3 Spacing and layout

Base unit 4 px (Tailwind's default spacing scale stays on).

| Token                  | Value                        | Use                                              |
| ---------------------- | ---------------------------- | ------------------------------------------------ |
| `--spacing-section`    | `clamp(4rem, 8vw, 7.5rem)`   | Vertical padding of every `<Section>`            |
| `--spacing-section-sm` | `clamp(3rem, 5vw, 4.5rem)`   | Compact sections (proof strip, CTA)              |
| `--spacing-gutter`     | `clamp(1rem, 4vw, 2rem)`     | Container side padding                           |
| `--container-content`  | `75rem` (1200 px)            | Default container width                          |
| `--container-wide`     | `87.5rem` (1400 px)          | Full-bleed-ish galleries                         |
| `--container-prose`    | `45rem` (720 px)             | Long text, legal pages                           |
| `--spacing-grid`       | `clamp(1.5rem, 2.5vw, 2rem)` | Grid gap (`gap-grid`)                            |
| `--header-height`      | `4.5rem`                     | Sticky header; used for scroll offset            |
| `--aspect-hero`        | `3 / 2` (phones `4 / 5`)     | Hero photo (`aspect-hero`, `aspect-hero-mobile`) |
| `--aspect-wide`        | `3 / 2`                      | Page header, gallery                             |
| `--aspect-card`        | `4 / 3`                      | Cards                                            |
| `--aspect-portrait`    | `4 / 5`                      | Team portraits                                   |

`--container-prose` is used as `max-w-(--container-prose)`: Tailwind's own
`max-w-prose` (65ch) wins over the token, and is what paragraphs use for line length.

Grid: 12 columns on `lg`, gap `gap-grid` (1.5rem → 2rem). Breakpoints: Tailwind defaults
(`sm 640`, `md 768`, `lg 1024`, `xl 1280`). Design and test at **375, 768, 1280, 1440**.

### 2.4 Shape, depth, motion

| Token              | Value                                                           | Use                                                                   |
| ------------------ | --------------------------------------------------------------- | --------------------------------------------------------------------- |
| `--radius-control` | `6px`                                                           | Buttons, inputs, tags                                                 |
| `--radius-card`    | `8px`                                                           | Cards, images                                                         |
| `--shadow-raise`   | `0 1px 2px rgb(29 37 33 / .06), 0 8px 24px rgb(29 37 33 / .08)` | The focused skip link, menus. Nothing else (no header shadow — D-39). |
| `--rule-width`     | `2px`                                                           | The signature rule                                                    |
| `--focus-width`    | `2px`                                                           | Focus outline width                                                   |
| `--focus-offset`   | `2px`                                                           | Focus outline offset                                                  |
| `--duration-fast`  | `150ms`                                                         | Hover, focus                                                          |
| `--duration-base`  | `300ms`                                                         | Reveal, menu open                                                     |
| `--ease-standard`  | `cubic-bezier(.2, .7, .2, 1)`                                   | Everything                                                            |
| `--diagram-dim`    | `0.2`                                                           | Well-diagram parts that are not highlighted (D-45)                    |

Motion rules: animate only `opacity` and `transform`; reveal = fade + 12 px
rise, once; no parallax, no auto-playing carousels, no shine/glow effects;
`prefers-reduced-motion` turns all motion off globally (in `globals.css`).

### 2.5 Base styles — `src/app/globals.css`

Applied once, from tokens: body in `font-body` / `text-body`, Ink on Paper;
headings in `font-heading`; `:focus-visible` = `--focus-width` Brand outline at
`--focus-offset`, switched to White inside any element with `data-on-dark`
(`Section` sets it on `ink` and `brand` tones, and on photo overlays);
`::selection` White on Brand; `[id]` anchors offset by header height + gutter;
smooth scroll, and all animation and transition, off under reduced motion.

**`current:` variant.** `@custom-variant current` styles a link whose `aria-current` is `page`
(main navigation). **Mobile menu:** `body:has(dialog[open])` locks page scroll.

**`on-dark:` variant (D-30).** `globals.css` defines `@custom-variant on-dark`:
it applies inside any element with `data-on-dark` (Section `ink`/`brand`),
except inside a light surface marked `data-on-light` (`Card`).
Components style themselves for both, e.g. `text-brand on-dark:text-white`, so
nothing needs an `onDark` prop and a dark section cannot be given light-surface
colors by mistake. Nesting rule: dark surfaces may contain light cards; light
cards never contain dark surfaces.

---

## 3. Component library

### 3.1 Primitives — `src/components/ui/`

Every primitive except `Reveal` is a **server component**, typed, and accepts `className` only
for layout (margin, grid placement) — never to override its look. Variants are
plain typed maps inside the file (no extra library):

```tsx
// pattern used by every primitive
const variants = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  secondary: 'border border-brand text-brand hover:bg-brand-tint',
  text: 'text-brand underline-offset-4 hover:underline',
} as const satisfies Record<string, string>;
type Variant = keyof typeof variants;
```

| Component        | Props (essential)                                                                                                                                            | Notes                                                                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `Container`      | `size: 'content' \| 'wide' \| 'prose'`                                                                                                                       | Max width + `px-gutter`                                                                                                                   |
| `Section`        | `tone: 'paper' \| 'stone' \| 'tint' \| 'ink' \| 'brand'`, `spacing: 'default' \| 'compact' \| 'none'`, `container` (or `'none'`), `id?`, `labelledBy?`       | Background, vertical rhythm, text color. `ink`/`brand` set `data-on-dark`. Wraps `Container`; `container="none"` for full-bleed (hero)    |
| `SectionHeading` | `eyebrow?`, `title`, `intro?`, `align: 'start' \| 'center'`, `as?: 'h1' \| 'h2'`, `size?: 'display' \| 'h1' \| 'h2'`, `id?`                                  | Rule + eyebrow + title + intro — the one way every section starts. Pass `id` to Section `labelledBy`. `display` = home hero only          |
| `Eyebrow`        | `children`, `align?`                                                                                                                                         | Small uppercase label, preceded by the rule                                                                                               |
| `Rule`           | `length: 'short' \| 'full'`                                                                                                                                  | The signature line. Green; white on dark surfaces by itself (no `tone` prop — D-30)                                                       |
| `Button`         | `variant: 'primary' \| 'secondary' \| 'text'`, `size: 'md' \| 'lg'`, `href?` or `type?`/`disabled?`, `icon?: 'arrow' \| 'phone' \| 'mail'`                   | Renders `SmartLink` or `<button>`. Swaps to the white palette on dark surfaces by itself (replaces `onDark` — D-30). Min height 44 px     |
| `TextLink`       | `href`, `arrow?`                                                                                                                                             | Inline link; always underlined, so color is never the only cue                                                                            |
| `SmartLink`      | `href`                                                                                                                                                       | Internal → `next/link`; tel/mailto/files → `<a>`; other sites → new tab, announced to screen readers. Used by Button, TextLink, Card      |
| `Card`           | `as?: 'div' \| 'article' \| 'li' \| 'figure'`, `href?` (makes whole card a link), `padding: 'md' \| 'lg' \| 'none'`                                          | White surface, `border-line`, `radius-card`, `data-on-light`. Linked cards: border-brand + photo zoom on hover                            |
| `Tag`            | `children`, `tone: 'neutral' \| 'brand'`                                                                                                                     | Service labels on projects                                                                                                                |
| `Stat`           | `value`, `unit?`, `label`, `tone: 'ink' \| 'brand' \| 'water'`                                                                                               | Big figure + label as `dt`/`dd`; place inside a `<dl>`. `water` for yields/levels only; every tone turns white on dark                    |
| `FactsTable`     | `rows: { label: string; value: ReactNode }[]`                                                                                                                | Key-value technical data (projects, equipment) as a `<dl>`. Striped with `brand-tint`; renders nothing when empty                         |
| `Photo`          | `image: ImageAsset`, `ratio: 'hero' \| 'wide' \| 'card' \| 'portrait' \| 'square'`, `width: 'full' \| 'major' \| 'half' \| 'third'`, `priority?`, `rounded?` | Wraps `next/image` (`fill`) in a fixed-ratio box — no layout shift. `width` picks the `sizes` preset; `image.focus` picks the crop (D-31) |
| `Icon`           | `name`, `size: 'sm' \| 'md' \| 'lg'`, `label?`                                                                                                               | Wraps lucide-react with stroke 1.5. Only icons registered in the map can be used; hidden from screen readers unless `label` is given      |
| `Logo`           | `variant: 'color' \| 'white'`, `alt`, `eager?`                                                                                                               | At least 80 px wide (Brand §3). Until P3: `logo.png`; `white` = the color logo on a white plate (D-38). P3 swaps the artwork here only    |
| `Subheading`     | `as: 'h3' \| 'h4'`, `size?`                                                                                                                                  | A heading inside a section, below its SectionHeading                                                                                      |
| `CheckList`      | `items: string[]`                                                                                                                                            | Included items, each with a green check; renders nothing when empty                                                                       |
| `Steps`          | `items: string[]`                                                                                                                                            | Numbered method steps (01, 02…) between hairlines                                                                                         |
| `Breadcrumbs`    | `items: { label, href? }[]`                                                                                                                                  | `nav` + `ol`; the current page last, without `href`, marked `aria-current`                                                                |
| `Prose`          | `children`                                                                                                                                                   | Typography for long-form text (legal pages, project stories)                                                                              |
| `Field`          | `id`, `label`, `hint?`, `error?`, `optional?`, `children: (control) => ReactNode` (+ `Input`, `Textarea`, `Select`)                                          | Render prop passes `id`, `aria-describedby`, `aria-invalid`, `required` to the control. Fields are required unless `optional`             |
| `Reveal`         | `children`, `delay?: 0 \| 1 \| 2 \| 3`                                                                                                                       | The only animation wrapper. Client island (~0.7 KB gzip). Hides only what is still below the fold after hydration                         |

Variant lookups use `pick(map, key)` from `lib/utils.ts`: the `security/detect-object-injection`
lint rule rejects `map[key]`, and the key is a typed union, so the one exception lives in one place.
`cn()` is `tailwind-merge` extended with the token names; add new token names there too.

### 3.2 Cards — `src/components/cards/`

Domain cards compose primitives. Each takes **one data object** typed from
`src/types/content.ts`, so a change in the data shape shows up as a type error.
Two need one extra value the object cannot hold: `ProjectCard` gets `serviceNames`
(from `getServiceTitles(project.services)`, so cards never import data) and
`ServiceCard` gets its lifecycle `number`. A fact that is missing renders nothing (D-36).

| Card              | Data          | Content                                                                                                                       |
| ----------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `ProjectCard`     | `Project`     | Photo (card ratio), client, title, location · year, key figure (tested yield, else depth), service tags; links to the project |
| `ServiceCard`     | `Service`     | Number (01–06), icon (slug → icon map in the card), official name, one-line summary; links to the service                     |
| `TestimonialCard` | `Testimonial` | Rule, quote, name, role, organization (`figure` + `blockquote` + `figcaption`)                                                |
| `EquipmentCard`   | `Equipment`   | Photo, name, type, FactsTable of key specs (e.g. rated depth)                                                                 |
| `TeamCard`        | `TeamMember`  | Portrait, name, role                                                                                                          |
| `ReferenceCard`   | `Reference`   | Letter thumbnail (document icon until a scan exists), organization, month · year; links to the full scan                      |
| `FeatureCard`     | `Feature`     | Optional icon, title, optional sentence, optional children (e.g. a CheckList): deliverables, principles, capabilities         |
| `ClientCard`      | `Partner`     | The client's logo, else its name. Site photos are not shown as logos                                                          |

### 3.3 Layout — `src/components/layout/`

| Component    | Behavior                                                                                                                                                                                                                                                                                |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Header`     | White, sticky, full-color logo + name + descriptor, `NavLinks` from `siteConfig.navigation.main`, primary "Contact us" button (hidden below `sm`, in the menu instead), green rule bottom edge, no shadow (D-39). Server component; `NavLinks` and `MobileMenu` are the client islands. |
| `MobileMenu` | Below `lg`. Native modal `<dialog>`, full height: page behind inert, Esc closes, focus returns to the button, body scroll locked, closes on navigation. Icons and the button arrive pre-rendered from `Header`.                                                                         |
| `NavLinks`   | The main links as a bar (header) or a stack (menu); the current section is green and underlined with the rule width, `aria-current="page"`.                                                                                                                                             |
| `Footer`     | Ink, green rule on the top edge. White logo (plate until P3), descriptor, Brand §10 description, pages, contact details (rows hide when empty), © legal name + Amharic name, legal links.                                                                                               |
| `SkipLink`   | "Skip to content" — first focusable element; targets the layout's single `<main id="main">` (D-40). Pages render no `<main>`.                                                                                                                                                           |

### 3.4 Sections — `src/components/sections/`

Sections are props-driven (no data imports inside), so any page can reuse them.

| Section            | Used on                    | Composition                                                                                                                                                                                                                    |
| ------------------ | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Hero`             | Home                       | Option C (D-44): from `lg`, text on Ink (5 columns) beside the whole photo (7 columns, priority, natural color, nothing over it); below `lg` the photo first, text below on Ink. Eyebrow + display headline + lead + 2 Buttons |
| `PageHeader`       | All inner pages            | Stone tone; breadcrumb, eyebrow, h1, intro; optional photo on the right                                                                                                                                                        |
| `ProofStrip`       | Home, About                | 3–4 `Stat`s + a row of `ClientCard`s; each part hides when empty                                                                                                                                                               |
| `FeaturedProjects` | Home, Service detail       | `SectionHeading` + "Explore all projects" + 3 equal `ProjectCard`s (2 at `md`) — D-46                                                                                                                                          |
| `ServiceLifecycle` | Home, Services             | Promise heading; 6 `ServiceCard`s beside the sticky `WellDiagram`; pointing at or focusing a service highlights its part of the well, in CSS only (`:has()`, D-45)                                                             |
| `EquipmentTeaser`  | Home                       | Photo + 3 key specs + link to Equipment                                                                                                                                                                                        |
| `Testimonials`     | Home, Testimonials         | `TestimonialCard` grid; renders nothing when the list is empty                                                                                                                                                                 |
| `FeatureGrid`      | Services, About, Equipment | `SectionHeading` + 2–4 columns of `FeatureCard`s; renders nothing when empty                                                                                                                                                   |
| `ServiceDetail`    | Service detail             | Overview + sidebar (who it is for, what you receive, CTA); then what is included beside the method `Steps`                                                                                                                     |
| `CtaBand`          | End of every page          | Brand tone, compact; h2, one sentence, `Button primary` (white on green) + phone as a text button. Copy in `src/data/cta.ts`; not on Contact                                                                                   |
| `ContactPanel`     | Contact                    | Form + details + lazy map facade                                                                                                                                                                                               |

### 3.5 Diagrams — `src/components/diagrams/`

`WellDiagram` — inline SVG cross-section of a water well: ground layers, aquifer,
borehole, casing, screen, gravel pack, grout seal, wellhead, pump, rising main,
control panel, static and pumping water levels. Colors from tokens only
(`fill-water` for water, `stroke-brand` for the well structure, `ink` for pump
equipment and labels, `stone`/`line` for ground). Each group has `data-part` =
the service slug that delivers it; Turnkey covers all. The highlight rules live
in `globals.css` (one line per slug — add one with a new service). Must stay
technically correct (Wondossen checks it, C-27) and readable at 320 px wide.

---

## 4. Page blueprints

Every page ends with `CtaBand`, then the footer. Section tones alternate
paper ↔ stone; Ink only for the footer; Brand only for `CtaBand`.

### Home — `/`

| #   | Section            | Tone  | Purpose (blueprint priority)                                                      |
| --- | ------------------ | ----- | --------------------------------------------------------------------------------- |
| 1   | `Hero`             | photo | Identity: descriptor, "Know better. Drill better.", Contact us / Explore projects |
| 2   | `ProofStrip`       | paper | Credibility at a glance: figures + client logos                                   |
| 3   | `FeaturedProjects` | stone | Evidence near the top (brand rule: real projects up front)                        |
| 4   | `ServiceLifecycle` | paper | Services + "Every well surveyed, drilled and proven." + well diagram              |
| 5   | `EquipmentTeaser`  | stone | Capability: rig by name, rated depth                                              |
| 6   | `Testimonials`     | paper | Client confidence (hidden if empty)                                               |
| 7   | `CtaBand`          | brand | Primary action                                                                    |

### About — `/about`

`PageHeader` → company description + story → `ProofStrip` (founded, HQ, licence
grade, wells completed) → how we work (principles from Brand §2) → leadership &
team (`TeamCard`) → licences & credentials → safety & responsibility → `CtaBand`.

### Services — `/services` and `/services/[slug]`

Index: `PageHeader` → `ServiceLifecycle` → "What you receive at every stage"
(deliverables: survey report, drilling log, test report, handover file) → `CtaBand`.
Detail: `PageHeader` (photo only when one really shows the service) → overview with
who it is for and what you receive → what's included beside the method steps →
related projects (`FeaturedProjects`, hidden when none) → `CtaBand`.

### Projects — `/projects` and `/projects/[slug]`

Index: `PageHeader` → grid of `ProjectCard` (sorted newest first) → `CtaBand`.
Detail: full-width `Photo` → title, client, location → `FactsTable` (client,
location, year, services, depth, yield, duration) → scope / approach / result →
gallery → related projects → `CtaBand`.

### Equipment & Capabilities — `/equipment-capabilities`

`PageHeader` → drilling rigs (`EquipmentCard`) → support & testing equipment
(`FactsTable`) → capability figures (`Stat`) → safety & site practice → `CtaBand`.

### Testimonials — `/testimonials`

`PageHeader` → `Testimonials` → reference letters (`ReferenceCard`) → client
logos → `CtaBand`.

### Contact — `/contact`

`PageHeader` → `ContactPanel` (form left; phones, email, address, hours, map right) → no CtaBand.

### System pages

Privacy policy, Terms of service (`Prose`), 404, error — all use `PageHeader` + `Container size="prose"`.

### Style guide — `/styleguide` (development review page)

Renders every token and component in every variant. Token values are read
from `tokens.css` at build time. Its specimen chrome (`src/app/styleguide/_parts/`)
is the one place outside `ui/`/`cards/` with visual classes (D-29). Used for the aesthetic
review gate after each design step. `noindex`, excluded from the sitemap,
removed or kept private before launch (decision O-05).
