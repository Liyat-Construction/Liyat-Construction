# Aksumite Web — Next.js Static Website Template

> A fast, SEO-ready business website template. Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4. All content lives in code — fully static, nothing to manage. Deploy on Vercel or export as plain static files for cPanel/shared hosting.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Turn it into a client website

1. **`src/config/site.ts`** — brand name, colors, fonts, contact details, social links, Telegram username, Google Maps embed URL, SEO, structured data, legal info. An empty string hides the related UI.
2. **`src/data/`** — all page copy: `home.ts`, `about.ts`, `services.ts`, `projects.ts`, `testimonials.ts`, `partners.ts`, `contact.ts`.
3. **`public/`** — replace `logo.png`, `og-image.png`, `favicon`, and add project/partner images.
4. **Contact form (optional)** — set `contactForm.provider` in `site.ts` to `'formspree'` or `'web3forms'` and paste the key. `'none'` hides the form.
5. **Before delivering:** `npm run check:placeholders` lists any leftover template text.

## Commands

```bash
npm run dev                 # dev server
npm run type-check          # TypeScript check
npm run lint                # ESLint
npm run build               # production build (Vercel / Node hosting)
npm run build:static        # static export → out/ for cPanel / any static host
npm run check:placeholders  # find leftover placeholder text
npm run validate            # type-check + lint + format check
```

## Deployment

- **Vercel / Node host:** `npm run build` — works out of the box.
- **Static hosting (cPanel, Netlify, GitHub Pages):** `npm run build:static` produces an `out/` folder you can upload as-is. Set `NEXT_PUBLIC_SITE_URL` to the real domain first so sitemap/metadata are correct.

## Environment

Only one variable is needed — see `.env.example`:

| Variable                               | Purpose                                |
| -------------------------------------- | -------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`                 | Site URL for SEO, sitemap, Open Graph  |
| `NEXT_PUBLIC_GA_ID`                    | (optional) Google Analytics            |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | (optional) Search Console verification |

See `PROJECT_DOCUMENTATION.md` for the architecture, `PROJECT_WORKFLOW.md` for client requirements and cross-session handoff, and `AGENTS.md` for AI-tooling guidance.
