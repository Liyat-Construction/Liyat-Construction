# AGENTS.md — start here (AI tools and developers)

Website for **Liyat Construction PLC**, an Ethiopian water-well drilling and
groundwater engineering company. Built by Digital Aksumite. Next.js 16 + React 19 +
TypeScript strict + Tailwind CSS 4, static-export compatible. All content lives
in this repository as TypeScript data — no CMS.

## Before you do anything

Read, in this order:

1. **[`WORKFLOW.md`](WORKFLOW.md)** — "You are here": current step, blockers, next action. Work only on the step marked ▶.
2. **[`docs/ENGINEERING.md`](docs/ENGINEERING.md)** — architecture, rules, performance budget, definition of done.
3. **[`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md)** — tokens, component library, page blueprints.
4. **[`docs/BRAND_GUIDELINES.md`](docs/BRAND_GUIDELINES.md)** — colors, voice, photography, service names.

Then read the source files the current step touches, plus their callers and types.

## Non-negotiable rules

- **Be honest, not agreeable.** Judge every idea on its merits, including the
  owner's. If you disagree or know a better option, say so with concrete reasons
  before acting. Hold your position unless given a new fact or a better argument.
  If the owner decides otherwise, implement it well and record the decision and
  your objection in `WORKFLOW.md`. Never hide failures or praise weak work.

- **One source for every decision.** Raw design values (hex, px, rem, ms) exist
  only in `src/styles/tokens.css`. Visual styling exists only in
  `src/components/ui/` and `src/components/cards/`. Pages compose sections;
  sections compose components. Need a new look? Add a variant to the component,
  never a one-off class in a page.
- **Reuse before you create.** Check the component library in Design System §3
  first. A new component goes into the library and onto `/styleguide`.
- **Content lives in `src/data/` and `src/config/site.ts`**, typed by `src/types/content.ts`.
  Only `src/app/` imports data; components receive it as props.
- **Server components by default.** Client components only from the allowed list in Engineering §3.
- **Never invent facts:** company details, figures, credentials, testimonials or
  client names. Use realistic placeholders marked `// PLACEHOLDER(C-xx)` that
  point to the client checklist in `WORKFLOW.md` §5.
- **No new dependencies** without the owner's approval.
- **Brand:** green `brand` for actions; `water` only for water data; never
  `text-brand` on `bg-ink`; sentence-case headings; no gradients, glows, or
  repeated water drops.
- Kebab-case filenames, no `any`, no `@ts-ignore`.

## Commands

```bash
npm run dev                 # dev server
npm run validate            # type-check + lint + format — must pass
npm run check:design        # no raw design values outside tokens.css — must pass
npm run check:placeholders  # PLACEHOLDER markers; must be zero at launch
npm run build:static        # static export → out/ — must pass
npm run images              # prepare web images from assets/images/
```

## Finishing a session

1. Meet the definition of done (Engineering §10) for whatever you completed.
2. Update `WORKFLOW.md`: "You are here", step status, verification evidence,
   handoff, and any new decision (§6) or client item (§5).
3. If you changed a design decision, update `DESIGN_SYSTEM.md` or `BRAND_GUIDELINES.md` in the same change.
4. When a step reaches `Complete`, commit it: one commit per step, message as in
   `WORKFLOW.md` §3. Never push unless the owner asks.
