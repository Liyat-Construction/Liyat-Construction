# WORKFLOW — Liyat Construction website

The live status of the project. Read it first, work on the step marked **▶**, and update it
before you stop. The order of work is [`docs/DIRECTION.md`](docs/DIRECTION.md); how the site is
built is [`docs/PROJECT.md`](docs/PROJECT.md).

## ▶ You are here

|                    |                                                                                                                                                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Current step**   | Rest of T17 (Search Console re-index), after the owner has talked with Liyat about the testimonials (C-12)                                                                                                       |
| **Last completed** | 2026-11-17: docs brought up to date (only open items left); Arada location set to Piassa; live deploy of `5e34a17` checked. 2026-11-16: T11–T16, T17 part 1 (commit and push). Earlier: T1, T2, T5–T10, T12–T15a |
| **Waiting on**     | Liyat: real client quotes (C-12), Web3Forms key and accepting Search Console Owner (T3). Owner and Liyat: the `info@` test (T4)                                                                                  |
| **Next**           | T17 re-index; T18 and T19 can run now (the site is live). Launch (T20) needs C-12 and C-25                                                                                                                       |
| **Not committed**  | Nothing. 2026-11-17: docs and the Arada location committed and pushed to `origin/main` (owner's word); see `git log`                                                                                             |

## Open client items

Codes appear in `PLACEHOLDER(C-xx)` comments in the code; `npm run check:placeholders` must
reach zero at launch (T20). Only open items are listed; answered ones are in
[`docs/CLIENT_ANSWERS.md`](docs/CLIENT_ANSWERS.md).

| Code | Open                                                                                                                                                    | Who        |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| C-12 | Real client quotes (name, job title, permission), or the sample quotes come off before launch (D-129). The owner is asking Liyat                        | Owner      |
| C-25 | Web3Forms key: paste it into `src/config/site.ts` → `contactForm.formKey` (public by design), delete the `PLACEHOLDER(C-25)` line, build, one real test | Liyat (T3) |
| C-29 | No question left: the legal pages stay as written; their `noindex` comes off at launch (T20)                                                            | Us (T20)   |

Not a code item: the `info@` test (T4) and accepting Search Console Owner (T3), on the call with
Liyat (checklist under "Handoff").

## Decisions that still apply

Settled; reopen only with a new fact. Numbers match the comments in the code. Decisions from
2026-11-13 on (D-186–D-199) are in `docs/DIRECTION.md`; the review log D-138–D-179 is in
`docs/REVIEW_PLAN.md`; the full older log is in git (`git show 5e34a17:WORKFLOW.md`).

- **Scope:** static Next.js site, no CMS, English only, hosted on Vercel (D-01, D-04).
  `NEXT_PUBLIC_SITE_URL` is set in Vercel (checked 2026-11-17: canonical, sitemap and share tags
  use `https://www.liyatconstruction.com`).
- **Pages:** Home, About, Projects, Equipment, Environment, six service pages, three project
  pages (Ethiopian Airlines, British Embassy, Chaka House; D-184), legal pages. Services,
  testimonials and contact are sections of Home (D-60, D-74, D-96).
- **Brand:** green `#156635` for actions, Ink for dark surfaces, Paper pages with White cards,
  Water Blue for water data only; no gold, no navy (D-05–D-07, D-33, D-58, D-70).
- **Frame:** a five-photo hero with a crop per screen width (T8); Ink page header with a real site
  photo on every inner page (D-62, D-72, D-113); see-through header that turns white on scroll
  (D-63, D-95); hamburger menu below 1280 px (D-97); Ink closing section and footer on every page
  (D-64, D-69, D-80, D-90); hairlines between sections (D-82, D-102).
- **Content:** never invent figures, client names, people's names, quotes or certifications
  (D-36, D-100). Work with what we have: no model numbers or counts we do not know; general
  wording instead (D-134). Never promise a survey or a test on every job (D-117).
- **About:** story and facts, mission and vision, values, team section without names or photos
  (D-194, D-196), clients row. No licences section (D-101); the Amharic legal name only in About's
  facts (D-80).
- **Projects:** twelve cards; the Belgian Embassy uses a general Liyat photo captioned
  "Illustrative photo" (D-136, kept by the owner 2026-11-16); gallery as a carousel (D-137).
  **Equipment:** no invented specs (D-106); rigs "rated 300 m and 1,200 m", drilling "up to
  800 m" (D-190).
- **Contact:** on Home; Web3Forms; every field required; "We'll respond within 48 hours" (D-53,
  D-95); lazy Google Maps embed with a directions button (T12); public email `info@` (D-188).
- **Testimonials:** the samples stay only until launch; real quotes or none (D-129).
- **Removed for good:** analytics, floating chat button, the drilling-log drawing, the
  groundwater partners row (D-197), video (D-198), the `keywords` tag (D-189). `/styleguide` is
  development only, never in the build (T15). The logo stays the current PNG (no vector exists).
- **Performance:** judged on the live site with PageSpeed (D-118); card photos over 70 KB are an
  accepted exception.
- **Search Console:** Domain property on the agency Gmail, `liyatconstruction@gmail.com` invited
  as Owner (D-180). Profiles are Liyat's own job (D-186, D-187).

## How we work

- One task at a time, in the order of `docs/DIRECTION.md`. The agent gives an honest view with
  reasons; the owner decides; the agent builds it in the shared layer and records it here.
- Ask before deleting files, adding dependencies, committing or pushing.
- Done means: Prettier (`--end-of-line auto`), `validate`, `check:design`, `build:static`, the
  browser at 375/768/1280.

## Known issues

- On this Windows checkout `core.autocrlf=true` writes CRLF, so `npm run validate`'s
  `format:check` flags many files. Git stores LF, so commits are clean; check with
  `npx prettier --check --end-of-line auto <files>`.
- Stop `npm run dev` before `build:static`: the dev server corrupts `.next/dev/types/*` and a stale
  `.next` gives 404s on `[slug]` pages.
- `npm test` reads the built site: run `npm run build:static` first.
- `npm run lint` covers `src/` only; `eslint .` reports 3 older errors in `scripts/`.
- Static hosts may 404 the `__next.*.txt` files used for client navigation; Vercel serves them.
- The dev server warns about the header logo's width and height; dev only.
- `npm run images` without paths empties `public/images/`: always pass the paths.

## Handoff

**Before 2026-11-17 (short).** Up to 2026-11-12: build, Liyat's answers (P16), SEO plan, three
project pages. 2026-11-13 to 16: T1–T16 (guide and requirements list for Liyat, content pass,
hero, photo framing, testimonial slider, map, review, titles and structured data, share
pictures, style guide dev-only, cleanup, team section, partners row out, new Chaka and British
photos, final checks). 2026-11-16: T17 part 1, `5e34a17` committed and pushed on the owner's word;
my objection (untested `info@`, sample quotes live, no form key) is recorded in
`git show 5e34a17:WORKFLOW.md`, with all earlier handoffs.

**Call checklist (owner and Liyat).** (1) Send a mail to `info@` from another account; note inbox
or spam. (2) Web3Forms: Liyat confirms the email and sends the key (C-25); after deploy a real
test inquiry arrives. (3) Search Console: Liyat accepts the Owner invitation; the owner sees Owner
in Settings → Users and permissions. (4) Liyat decides about sending as `info@`. Tick T3 and T4
only when they pass.

**2026-11-17, live check and docs brought up to date (owner).** **Live site:** the deploy of
`5e34a17` is live (owner saw it); canonical, `og:url`, JSON-LD `@id`, sitemap and `robots.txt`
all use `https://www.liyatconstruction.com`, no `localhost`; the owner confirmed
`NEXT_PUBLIC_SITE_URL` in Vercel. **Owner's yes** on the British Embassy and Chaka House headers.
**Closed:** C-38 (CIRHT, ET Mineral and Hosea stay in the clients row; closed with R6 on
2026-11-16), C-36 (Belgian Embassy keeps its illustrative photo, owner 2026-11-16; Arada Luxury
Mall's location is "Piassa, Addis Ababa", from the meeting of 2026-11-10). **Code:** Arada
`location` is now "Piassa, Addis Ababa" and both `PLACEHOLDER(C-36)` lines are gone
(`src/data/projects.ts`). **Docs:** this file shortened to the current state; `DIRECTION.md` keeps
only open tasks in full and drops the answered requirements list; `SEO_PLAN.md` box 5c ticked and
its stale "What is left" tables replaced by a pointer; `CLIENT_ANSWERS.md` no longer lists
answered items as open; `TEAM_SECTION.md` now describes what was built; `PROJECT.md` mentions the
map embed; `WORK_PROMPT.md` updated. **Checked:** Prettier (`--end-of-line auto`), type-check, lint,
`check:design`, `build:static`, tests 17/17; `check:placeholders` lists only C-12, C-25 and C-29
(x2), all launch items; "Piassa, Addis Ababa" is in the built Projects page, one line at 768
(284 px) and 1280 (308 px), no sideways scroll at 375, 768 or 1280 (on phones the card sits under
"show more", like "Arat Kilo, Addis Ababa", which fits in one line at 294 px). **Not checked:** a
visual look. **Open:** C-12, C-25,
T3, T4; T17 re-index after the testimonials talk.
