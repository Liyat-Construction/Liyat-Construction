# Liyat Construction — website

Website for Liyat Construction PLC, water well drilling and engineering in
Ethiopia. Built by Digital Aksumite with Next.js, React, TypeScript and Tailwind CSS.
Fully static; all content lives in this repository.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

## Documentation

| Read                                                       | For                                                    |
| ---------------------------------------------------------- | ------------------------------------------------------ |
| [`WORKFLOW.md`](WORKFLOW.md)                               | Current status, next step, decisions, client checklist |
| [`docs/ENGINEERING.md`](docs/ENGINEERING.md)               | Architecture, code rules, commands, how-to recipes     |
| [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md)           | Design tokens, component library, page blueprints      |
| [`docs/BRAND_GUIDELINES.md`](docs/BRAND_GUIDELINES.md)     | Liyat brand: color, type, photography, voice           |
| [`AGENTS.md`](AGENTS.md)                                   | Rules for AI coding tools                              |
| [`docs/NEW_SESSION_PROMPT.md`](docs/NEW_SESSION_PROMPT.md) | Prompt to start a new AI chat on this project          |

## Deployment

- **Next.js host (e.g. Vercel):** `npm run build`
- **Static host (cPanel etc.):** `npm run build:static` → upload `out/`

Set `NEXT_PUBLIC_SITE_URL` to the production domain before building.
