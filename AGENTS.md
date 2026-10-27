# AGENTS.md — rules for AI assistants and developers

Website for **Liyat Construction PLC** (Ethiopian water-well drilling). Next.js 16,
React 19, TypeScript strict, Tailwind CSS 4, static export. All content is TypeScript
in `src/data/` and `src/config/site.ts`.

## Read first

1. [`WORKFLOW.md`](WORKFLOW.md) — where the project stands and the next step (▶).
2. [`docs/PROJECT.md`](docs/PROJECT.md) — architecture, rules, design, pages, content.

Then read the files the task touches, plus their callers and types.

## Rules

- **Be honest, not agreeable.** Judge every idea on its merits, including the owner's;
  give concrete reasons and the better option. If the owner decides otherwise, build it
  well and record the decision and your objection in `WORKFLOW.md`.
- **One source for every decision:** raw design values only in `src/styles/tokens.css`;
  visual styling only in `src/components/ui/` and `src/components/cards/`; pages compose
  sections. A new look is a new variant in the component, never a one-off class.
- **Reuse before you create; delete what is unused.** New components go onto `/styleguide`.
- **Only `src/app/` imports data;** components get it as props. Server components by default.
- **Never invent facts** (figures, clients, names, quotes, credentials). Mark unconfirmed
  wording `// PLACEHOLDER(C-xx)` with the client item from `WORKFLOW.md`.
- **Never promise** a survey or a pumping test on every job — Liyat does them when the
  client asks (D-117).
- **Ask the owner** before adding dependencies, deleting files, committing or pushing.
- Kebab-case filenames, no `any`, no `@ts-ignore`.

## Done means

`npm run validate`, `npm run check:design` and `npm run build:static` pass; the change is
checked in the browser at 375, 768 and 1280 px; `WORKFLOW.md` is updated (status, decision,
handoff), and `docs/PROJECT.md` too if how the site is built changed.
