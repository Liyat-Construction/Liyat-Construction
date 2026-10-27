# Liyat Construction — website

The website of **Liyat Construction PLC**, a water-well drilling and groundwater
engineering company in Ethiopia: surveys, borehole drilling, pumping tests, borehole
rehabilitation, pump installation and turnkey water projects.

Built by [Digital Aksumite](https://digitalaksumite.com) with Next.js 16, React 19,
TypeScript and Tailwind CSS 4. Fully static, no CMS: every page's content is a typed
TypeScript file in this repository.

## Quick start

Requires Node.js 22 or newer.

```bash
npm install
npm run dev          # http://localhost:3000
```

## Before you change anything

| Read                                 | For                                                    |
| ------------------------------------ | ------------------------------------------------------ |
| [`docs/PROJECT.md`](docs/PROJECT.md) | How the site is built: structure, rules, design, pages |
| [`WORKFLOW.md`](WORKFLOW.md)         | Where the project stands, next step, open client items |
| [`AGENTS.md`](AGENTS.md)             | Working rules for AI coding assistants                 |

## Common tasks

| To change…                   | Edit                                                                                            |
| ---------------------------- | ----------------------------------------------------------------------------------------------- |
| Any text on a page           | `src/data/<page>.ts`                                                                            |
| Phone, email, address, menu  | `src/config/site.ts`                                                                            |
| Colours, type sizes, spacing | `src/styles/tokens.css`                                                                         |
| How a button or card looks   | `src/components/ui/` or `src/components/cards/`                                                 |
| Add a project                | photos → `assets/images/projects/<slug>/`, run `npm run images`, entry → `src/data/projects.ts` |
| Turn on the contact form     | `src/config/site.ts` → `contactForm.formKey` (Web3Forms)                                        |

## Checks

```bash
npm run validate        # types, lint, formatting
npm run check:design    # design values only in tokens.css
npm run build:static    # builds the site into out/
```

All three must pass before a change is done. `npm run check:placeholders` lists what
the client still has to confirm; it must report zero before launch.

## Deploy

- **Vercel:** import the repository; set `NEXT_PUBLIC_SITE_URL` to the live domain.
- **Any static host:** `npm run build:static`, then upload the `out/` folder.
