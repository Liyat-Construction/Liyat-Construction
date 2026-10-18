# AGENTS.md — Instructions for AI coding tools

## What this project is

A reusable static business-website template. Next.js (App Router) + React +
TypeScript + Tailwind CSS 4 + Framer Motion. Every piece of content lives in
this repository as TypeScript data — there is nothing external to manage.

Before any work, read `PROJECT_WORKFLOW.md` for the approved scope, current
phase, decisions, blockers, verification evidence, and next action. Update its
handoff section before ending a work session. Use the `senior-website-engineer`
project skill for the implementation workflow and quality standard.

## Where things live

| What                                                                              | Where                      |
| --------------------------------------------------------------------------------- | -------------------------- |
| Brand, colors, fonts, contact, socials, SEO, legal details, contact-form provider | `src/config/site.ts`       |
| Page copy (hero, sections, CTA)                                                   | `src/data/home.ts`         |
| About page copy                                                                   | `src/data/about.ts`        |
| Services (cards + detail pages)                                                   | `src/data/services.ts`     |
| Portfolio projects                                                                | `src/data/projects.ts`     |
| Testimonials                                                                      | `src/data/testimonials.ts` |
| Trusted partner logos                                                             | `src/data/partners.ts`     |
| Contact section copy                                                              | `src/data/contact.ts`      |
| Shared TypeScript types                                                           | `src/types/content.ts`     |
| Pages / routes                                                                    | `src/app/`                 |
| Components                                                                        | `src/components/`          |
| Images, logos, partner logos                                                      | `public/`                  |

**Rule of thumb:** to rebrand for a client you edit `src/config/site.ts`, the
files in `src/data/`, and the images in `public/`. Rarely anything else.

## Behavior rules worth knowing

- Empty string in `site.ts` hides the related UI (no `social.telegram` → no
  floating Telegram button; no `contact.mapEmbedUrl` → no map; etc.).
- `contactForm.provider` in `site.ts` is `'none'` | `'formspree'` | `'web3forms'`.
  `'none'` hides the form entirely.
- Sections (Projects, Testimonials, Partners) render only when their data
  arrays are non-empty.
- Brand colors flow from `site.ts` → CSS variables in `src/app/layout.tsx` →
  Tailwind classes like `bg-brand-primary`, `text-brand-accent`. Do not
  hard-code brand hex values in components.

## Commands

```bash
npm run dev                 # dev server
npm run type-check          # TypeScript — must pass before finishing
npm run lint                # ESLint — must pass
npm run build               # production build (Vercel / next start)
npm run build:static        # static export → out/ (cPanel, any static host)
npm run check:placeholders  # scan for leftover template placeholder text
npm run format              # Prettier write
```

## Conventions

- Kebab-case file names, TypeScript strict mode, no `any`.
- Reuse existing components (`Container`, `PremiumButton`, `ScrollReveal`,
  `GoldDivider`, …) before creating new ones.
- No new dependencies without asking.
- Keep changes focused; run `npm run validate` + `npm run check:placeholders`
  before considering work done.
- Never commit secrets. `.env.local` stays local.
