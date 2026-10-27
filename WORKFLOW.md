# WORKFLOW — Liyat Construction website

The live status of the project. Read it first, work on the step marked **▶**, and update it
before you stop. How the site is built is in [`docs/PROJECT.md`](docs/PROJECT.md).

## ▶ You are here

|                    |                                                                                                                                                                 |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Current step**   | **Commit everything since `bc67ac9`** (on the owner's word), then P17a                                                                                          |
| **Last completed** | 2026-10-28: P15 audit closed (D-118): hero contrast, LCP photo priority, logo weight, heading order, 404 title, two test-promise lines fixed                    |
| **Waiting on**     | The client's answers to the 12 asks in [`docs/CLIENT_REQUEST_LIST.md`](docs/CLIENT_REQUEST_LIST.md) (sent by the owner). Our own launch task: the Web3Forms key |
| **Not committed**  | Everything since `bc67ac9` (owner: commit after P15)                                                                                                            |

## Plan to launch

| Step | What                                                                                        | Status      |
| ---- | ------------------------------------------------------------------------------------------- | ----------- |
| P15  | Quality and performance audit (results below)                                               | Done        |
| —    | Commit everything since `bc67ac9`                                                           | ▶ Next      |
| P17a | Deploy a preview to Vercel; the owner shows it to Liyat; PageSpeed Insights on it (D-118)   | Not started |
| P16  | Swap in the client's answers; `check:placeholders` reaches zero                             | Not started |
| P17b | Final deploy: domain, `NEXT_PUBLIC_SITE_URL`, form key, a real test inquiry, Search Console | Not started |
| P18  | Client walkthrough and handoff                                                              | Not started |

**P15 results (2026-10-28)** — Lighthouse 12.8.2, mobile, all 14 routes of the static build

- **Accessibility 100, best practices 100, SEO 100** on every page; SEO 69 on the two legal
  pages is their intended `noindex` (C-29).
- **Performance 65–89, LCP 3.2–5.1 s (simulated), CLS ≤ 0.022.** Not trustworthy on this
  laptop: Lighthouse's CPU benchmark swung 496–1732 between runs, and the simulated mobile CPU
  assumes a faster host. Judged on the Vercel preview with PageSpeed Insights instead (D-118).
  Remaining levers if it is still under 95 there: card photo weight, the hydration JS.
- **First-load JS (gzip):** Home 167 KB, other routes 154 KB (≤ 190 KB). The 39 KB
  `noModule` polyfill is excluded: modern browsers never load it.
- **Hero contrast**, measured on the photo pixels behind each text box (98th percentile,
  with scrim and top fade): headline and buttons ≥ 5 : 1 at every width, also over the rig
  mast on phones. The lead (white/80) fell to 4.35 : 1 from lg and the caption to 2.5 : 1 over
  the sand — fixed (below).
- **Fixed in the shared layer:** Hero text full white (`data-on-photo`); Backdrop caption on a
  65 % Ink plate; Photo `priority` now preloads with `fetchPriority="high"` (Next 16 dropped
  it); the header logo is a 12 KB WebP from the image pipeline (`assets/images/brand`), not
  the 65 KB PNG (about 50 KB less on every page); ProjectCard `headingAs` — h2 on /projects,
  which jumped h1 → h3; the 404 page has its own title.
- **Proofread (D-117):** Pump Supply & Installation and Equipment's pump method implied a
  pumping test before every installation; now "when one is part of the work". The survey
  "names the depth and yield" became "estimates the depth to drill to and the likely yield"
  (Environment already says a survey does not guarantee water).
- **Browsers:** Chrome and Edge here; Firefox is not installed. Phones by the owner on the
  preview.
- **Skipped as not required now (owner):** a full manual keyboard and screen-reader pass
  (structure checks found only the heading jump); before the final launch.

## Open client items

Codes appear in `PLACEHOLDER(C-xx)` comments in the code.

| Code       | Ask (request-list number)                                      |
| ---------- | -------------------------------------------------------------- |
| C-03       | Office address: brochure or proposal letterhead (1)            |
| C-34, C-15 | About page: story in their words, mission, values, team (2)    |
| C-10       | Key figures: confirm 13 wells, 600 m, 4,700+ m (3)             |
| C-09, C-32 | Service scope, method and deliverables wording (4)             |
| C-16       | Equipment wording; makes and models if offered (5)             |
| C-17       | Safety and environmental practices (6)                         |
| C-27       | The well cross-section drawing is correct (7)                  |
| C-12       | Real testimonials with permission (8)                          |
| C-23       | "CREDOCS" or "CREDOCKS" (9)                                    |
| C-20       | Social media accounts they monitor (10)                        |
| C-31       | Approve the structure and the "Built by" credit (11)           |
| C-29       | Light review of the privacy policy and terms (12)              |
| C-25       | Our task: Web3Forms access key for liyatconstruction@gmail.com |

## Decisions that still apply

Settled — reopen only with a new fact. Numbers match the comments in the code; the full
log up to D-115 is in git (`git show bc67ac9:WORKFLOW.md`).

- **Scope:** static Next.js site, no CMS, English only; hosting on Vercel (D-01, D-04).
- **Pages:** Home, About, Projects (list only), Equipment, Environment, six service pages,
  legal pages. No services overview, project detail, testimonials or contact pages — those
  live on Home (D-60, D-74, D-96).
- **Brand:** green `#156635` for actions, Ink for dark surfaces, Paper pages with White
  cards, Water Blue for water data only; no gold, no navy (D-05–D-07, D-33, D-58, D-70).
- **Frame:** full-screen Afar photo hero (D-81, D-98); Ink page header with a real site photo
  on every inner page (D-62, D-72, D-113); see-through header that turns white on scroll
  (D-63, D-95); hamburger menu below 1280 px (D-97); Ink closing section and footer on every
  page (D-64, D-69, D-80, D-90); hairlines between sections (D-82, D-102).
- **Content rule:** show the best honest draft and mark it for the client; never invent
  figures, client names, people's names, quotes or certifications (D-36, D-100).
- **Projects:** nine cards; Ovid's photo is a labelled illustrative Liyat photo; the gallery
  uses 4:5 tiles (D-107–D-109). **Equipment:** no invented specs or ratings (D-106).
- **About:** mission and vision, values, clients, team; no licences section (D-101). The
  Amharic legal name appears only in About's facts (D-80).
- **Contact:** on Home; Web3Forms; every field required; "We'll respond within 48 hours"
  (D-53, D-95).
- **Removed for good:** map, analytics, floating chat button, the drilling-log drawing and
  every other unused component, option or file (O-06, D-116). The logo stays the current
  PNG (no vector exists).
- **D-117 — owner, 2026-10-28:** Liyat surveys only when a client asks for it, so no copy may
  promise a survey (or a test) on every job. The services heading "Every well surveyed,
  drilled and proven." became "One stage or the whole project."; About's values and
  Equipment's methods now say "when a survey is part of the work".
- **D-118 — owner, 2026-10-28:** P15 closes with the must-do items only. The performance
  target (PROJECT §10) is measured on the Vercel preview with PageSpeed Insights, not on this
  laptop; card photos over 70 KB are an accepted exception (no originals; harder compression
  saves ~12 % and visibly degrades them). The form key is set after the preview.
- **Open:** keep `/styleguide` hidden at launch, or delete it (O-05; currently kept).

## How we work

- One topic at a time. The agent gives an honest view with reasons; the owner decides; the
  agent builds it in the shared layer and records the decision here.
- Ask before deleting files, adding dependencies, committing or pushing.
- After each change: browser at 375/768/1280, then `validate`, `check:design`, `build:static`.

## Known issues

- Card photos exceed the 70 KB budget (recompressed social-media images; no originals) —
  accepted (D-118).
- The well diagram (C-27) and social links (C-20) have no `PLACEHOLDER` marker, so
  `check:placeholders` can reach zero while they are open: tick them off by hand.
- `.devin/skills/senior-website-engineer/SKILL.md` still lists the deleted ENGINEERING,
  DESIGN_SYSTEM and BRAND_GUIDELINES docs.
- The preview's testimonials are layout samples ("Name Surname", C-12): tell Liyat, or empty
  the list before showing it.
- Static hosts may 404 the `__next.*.txt` files used for client navigation; test on Vercel.
- Legal pages are drafts: `noindex` until the client's review (C-29).

## Handoff

**2026-10-28.** Removed every unused component, option, data list, package and image
(D-116); verified with validate, check:design, contact tests 8/8, `build:static` (19 routes),
SEO tests 4/4 and the browser at 375/768/1280. Reworded the services heading and the survey
claims (D-117), and the home equipment intro, which claimed machine ratings the site does not
show. Replaced ENGINEERING, DESIGN_SYSTEM, BRAND_GUIDELINES and the long WORKFLOW with
`docs/PROJECT.md` and this file.

**2026-10-28, P15.** Audit and fixes as listed under "P15 results"; validate, check:design
and `build:static` (19 routes) pass; browser at 375 (no overflow, lead white, caption hidden
as designed), 768 and 1280 (caption plate, card titles unchanged). **Next:** the owner's OK to
commit and push; then P17a (Vercel preview, PageSpeed Insights, phones).
