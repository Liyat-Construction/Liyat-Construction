# WORKFLOW — Liyat Construction website

The live status of the project. Read it first, work on the step marked **▶**, and update it
before you stop. How the site is built is in [`docs/PROJECT.md`](docs/PROJECT.md).

## ▶ You are here

|                    |                                                                                                                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Current step**   | **P18 review round**: decisions recorded in [`docs/REVIEW_PLAN.md`](docs/REVIEW_PLAN.md); next is the owner's yes on the delete list, then steps 1–7 there                             |
| **Last completed** | 2026-11-12: SEO_PLAN steps 1, 2 and 5 (the three project pages; photos for two still to come). Not committed                                                                           |
| **Waiting on**     | Meeting answers of 2026-11-10 are in `docs/CLIENT_ANSWERS.md`. Still open: address Woreda 03 vs 04, Arada "320", info@ set up, access choice (D-183), quotes, photos, Husky logo, C-37 |
| **Next**           | One item from "What is left" in `docs/SEO_PLAN.md` (A1–E4). Step 5, the three project pages, is finished and reviewed                                                                  |
| **Not committed**  | Step 13's changes. Liyat's original files are copied into `docs/LIYAT_ORIGINALS.md` and deleted (D-133)                                                                                |

## SEO and being found (started 2026-11-10)

The plan, the steps in order and the baseline are in [`docs/SEO_PLAN.md`](docs/SEO_PLAN.md). Decisions
D-180 to D-184 are below. Work one step at a time and tick it in that file. Step 1 (Search Console,
Bing, redirect check, AI baseline) and step 2 (site name, titles, fact sentence, sitemap dates) need
no client answers. Steps 3–5 wait for the meeting answers: profiles, structured data and the three
project pages.

## Plan to launch

| Step | What                                                                                        | Status      |
| ---- | ------------------------------------------------------------------------------------------- | ----------- |
| P15  | Quality and performance audit (results below)                                               | Done        |
| —    | Commit everything since `bc67ac9`                                                           | Done        |
| P16  | Swap in the client's answers; `check:placeholders` reaches zero                             | ▶ Part 2    |
| P17a | Deploy a preview to Vercel; the owner shows it to Liyat; PageSpeed Insights on it (D-118)   | Not started |
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

## P16 part 2: apply Liyat's answers

Liyat's answers and the reason for each change are in
[`docs/CLIENT_ANSWERS.md`](docs/CLIENT_ANSWERS.md). Work one step at a time, in this order. After
each step: `npm run validate` (see the CRLF note under Known issues), `npm run check:design`,
and a look in the browser. Tick the step here.

| Step | What to change                                                                                                                                                                                                                                                             | Where                                                              | Status      |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ----------- |
| 1    | Service names, keeping the slugs so the URLs don't change. "Mud rotary and DTH rotary drilling" replaces "Rotary and air drilling". Find every hard-coded old name                                                                                                         | `services.ts`, `contact.ts`, `PROJECT.md` §8                       | Done        |
| 2    | Figures: 7+ years, 50+ wells, 600 m deepest, 15,000 m+ drilled. Remove the GM's 20+ figure and the years in company facts; keep the sentence in his story                                                                                                                  | `company.ts`, `about.ts`, `PROJECT.md` §8                          | Done        |
| 3    | Remove the team section and use his "Expert team" line. Delete `team-grid.tsx` and `team-card.tsx` once unused, and take them off `/styleguide`                                                                                                                            | `company.ts`, `about/page.tsx`, `styleguide`                       | Done        |
| 4    | Home projects: Chaka House replaces Tsedey Bank. Entoto well: 200 m                                                                                                                                                                                                        | `projects.ts`                                                      | Done        |
| 5    | Ovid: name Ovid Group; move the photo to `assets/images/projects/ovid-real-estate-turnkey-wells/cover.jpg`, run `npm run images`, remove "Illustrative", caption "Casing installation at Kings Tower, Arat Kilo", check the crop                                           | `projects.ts`, images                                              | Done        |
| 6    | CREDOKS spelling in all names and alt text. Keep it as a past project, not a service. The `credocs-shoring` slug and image folder stay, because visitors don't see them                                                                                                    | `projects.ts`, `partners.ts`                                       | Done        |
| 7    | Equipment: "Indian and Turkish manufacturers"; rigs can drill up to 800 m, kept separate from the 600 m deepest well. Fix the lines that say the page shows no capacity                                                                                                    | `equipment.ts`, `home.ts`                                          | Done        |
| 8    | Not done, on the owner's word (D-129): the section and sample quotes stay while the owner asks Liyat for real ones. No social links                                                                                                                                        | `testimonials.ts`, `site.ts`, `home-sections.tsx`                  | Skipped     |
| 9    | Remove the placeholder marks that are now answered (C-09 names, C-17, C-31). The C-10 and C-12 marks stay until he answers (D-126, D-129). Run `check:placeholders`; what's left must match the table below                                                                | `src/`                                                             | Done        |
| 10   | Full check: `validate`, `check:design`, `build:static`, the tests, and the browser at 375, 768 and 1280 px. This also covers the D-119 browser check that is still open                                                                                                    | The whole site                                                     | Done        |
| 11   | Commit on the owner's word. The owner sends the must-ask questions; deploy the preview (P17a) so Liyat can read the site                                                                                                                                                   | Owner, Vercel                                                      | ▶ Next      |
| 12   | Projects page, "Photos from Our Work": on phones, a sideways swipe row with the next photo peeking in; the grid stays on desktop; check tablets. No new dependency (D-131)                                                                                                 | `photo-gallery.tsx`, `/styleguide`                                 | Not started |
| 13   | Liyat's follow-up answers, equipment list and photos (2026-11-05): 12,000 m+; Ovid at Arat Kilo with pump installation; hand pumps stay; new Arada and Belayneh Kinde cards (9 → 11); Equipment page fleet list and photos; new drilling, pump and Equipment header photos | `company.ts`, `projects.ts`, `services.ts`, `equipment.ts`, images | Done        |

**Step 13 in detail.** Photos moved from `public/images/NEW PHOTOS` into `assets/images/`
(saved at up to 2,400 px; list in `docs/LIYAT_ORIGINALS.md`), built with `npm run images
<paths>` only — a full `npm run images` empties `public/images/`. The Arada casing photo is
cropped to leave out a bystander. The Equipment page gains "What we bring to site" (FeatureGrid,
six items, no counts) and an "Our equipment" PhotoGallery (six photos). The drilling page and
the Equipment header now use the Bole Lemi rig photo; Pump Supply & Installation uses the Ovid
pump photo. The Home hero stays one photo (D-131): only two new photos are wide and sharp.

## Open client items

The must-ask questions are at the top of `docs/MEETING_QUESTIONS.md` and the Notion copy. Codes
appear in `PLACEHOLDER(C-xx)` comments in the code.

| Code | Still open                                                                          | Type       |
| ---- | ----------------------------------------------------------------------------------- | ---------- |
| C-12 | Real testimonials; the owner asks him. The samples must go before launch (D-129)    | Owner asks |
| C-36 | Belayneh Kinde depth and work; where Arada Luxury Mall is; a Belgian Embassy photo  | Owner asks |
| C-37 | Rigs "up to 800m" (his answer) vs "1200 m" and "300 m" (his equipment list), D-132  | Owner asks |
| C-29 | Legal pages: no reply means no changes                                              | Preview    |
| C-25 | Our task: Web3Forms access key for liyatconstruction@gmail.com                      | Our task   |
| C-39 | Husky Engineering: a sharp logo and website; may we name Milto and Husky (D-174)    | Owner asks |
| C-40 | More photos for the British Embassy and Chaka House pages (D-184); requirements doc | Owner asks |

Answered and closed: C-09 (hand pumps: yes), C-10 (50+ wells, 12,000 m+), C-15 (no team names),
C-16 (equipment list received), C-17 (Environment), C-20 (no social links yet), C-23 (CREDOKS),
C-27 (well drawing treated as correct; the owner talks to Liyat in private), C-31 (structure and
credit), C-32 (six services), C-35 (Kings Tower is the Ovid project).

## Decisions that still apply

Settled — reopen only with a new fact. Numbers match the comments in the code; the full
log up to D-115 is in git (`git show bc67ac9:WORKFLOW.md`).

- **Scope:** static Next.js site, no CMS, English only; hosting on Vercel (D-01, D-04).
- **Pages:** Home, About, Projects (list only), Equipment, Environment, six service pages,
  legal pages. No services overview, testimonials or contact pages — those live on Home
  (D-60, D-74, D-96). Project detail pages: none, except three (D-184).
- **Brand:** green `#156635` for actions, Ink for dark surfaces, Paper pages with White
  cards, Water Blue for water data only; no gold, no navy (D-05–D-07, D-33, D-58, D-70).
- **Frame:** full-screen Afar photo hero (D-81, D-98); Ink page header with a real site photo
  on every inner page (D-62, D-72, D-113); see-through header that turns white on scroll
  (D-63, D-95); hamburger menu below 1280 px (D-97); Ink closing section and footer on every
  page (D-64, D-69, D-80, D-90); hairlines between sections (D-82, D-102).
- **Content rule:** show the best honest draft and mark it for the client; never invent
  figures, client names, people's names, quotes or certifications (D-36, D-100).
- **Projects:** nine cards; Ovid uses Liyat's own photo with a caption; the gallery
  uses 4:5 tiles (D-107–D-109). **Equipment:** no invented specs or ratings (D-106).
- **About:** mission and vision, values, clients; no team section (D-122); no licences section (D-101). The
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
- **D-119 — owner, 2026-11-03:** use Liyat's copy review in their own words, lightly polished,
  only where it is unambiguous: hero line "Groundwater engineering from survey to tank.", the
  home "Who we are" paragraph, the About statement, the About story word for word (owner's
  choice over a reordered version; it says "Liyat Construction PLC was established" for 2019,
  when the business was still Wondwossen Water Well Drilling Contractor), GM 20+ years, vision and mission (vision first), the three values
  ("most competitive" softened to "competitive", an uncheckable superlative), the address and
  hours, and pump installation on the Ethiopian Airlines project. Held for the follow-up: the
  new figures, the four-service structure and new service names, the equipment lines, and
  showing only two projects on Home.
- **D-120 — Liyat, 2026-11-04:** six services. His written list left out Turnkey by mistake, which
  he confirmed by phone to the owner. Names are in `docs/CLIENT_ANSWERS.md`.
- **D-121 — owner, 2026-11-04:** the Ovid project uses the name Ovid Group, as Liyat named it
  with the photo. His profile and the old site said Ovid Real Estate.
- **D-122 — Liyat, 2026-11-04:** no team names or photos; his "Expert team" line replaces the
  team section. Agent's objection: named engineers build trust with embassies and government
  clients. His story still names the founder.
- **D-123 — default, 2026-11-04:** the GM's 20+ figure and the years in company facts go, as
  Liyat allowed; the sentence in his own story stays, because it's the strongest proof of
  experience for a 7-year-old company. He can change this on the preview.
- **D-124 — owner, 2026-11-04:** the service is named "Pumping Tests". Liyat's list says "Pumping
  Test of Variable discharge"; his profile and review say "Pumping tests". He also confirmed
  constant-rate tests, which "variable discharge" doesn't cover, and the Equipment page already
  names the variable-discharge pumps. The owner will check the name with him; build it now.
- **D-125 — owner, 2026-11-04:** ask Liyat only what can't be decided without him. He checks the
  rest by reading the preview.
- **D-126 — owner, 2026-11-04:** 50+ wells and 15,000 m+ show on the preview but keep their
  placeholder mark until Liyat says yes, so `check:placeholders` blocks launch without his answer.
- **D-127 — owner, 2026-11-04:** the survey "helps locate" aquifers, as Liyat agreed, and its card
  says "so the well is sited on the evidence" (the agent's wording, not his), because a survey
  doesn't guarantee water.
- **D-128 — owner, 2026-11-04:** the drilling card and page say "Wells drilled, cased, screened and
  developed to specification." (the agent's wording), so they don't repeat the new service name.
- **D-129 — owner, 2026-11-04:** the testimonials section and its sample quotes stay for now; the
  owner will ask Liyat for real ones. Replaces step 8. Agent's objection: the samples read like real
  praise from clients who never said it, under "Name Surname". Keep them off anything public: tell
  Liyat on the preview, and replace or remove them before launch. The C-12 mark blocks launch.
- **D-130 — owner, 2026-11-04:** the commit holds the site and our text documents
  (`CLIENT_ANSWERS.md`, `MEETING_QUESTIONS.md`). Liyat's four files in `docs/` stay out of git.
- **D-131 — owner, 2026-11-04:** after a reviewer's feedback from a phone, the Projects gallery gets a
  swipe row on phones and keeps the grid on desktop (step 12). The Home hero stays one photo for
  now: the photos we have aren't sharp enough to fill the screen one after another. Look at a slider
  again if Liyat sends 3–4 good, wide, high-quality photos.
- **D-132 — owner, 2026-11-05:** the site says what Liyat says, in both places: "Our rigs can drill
  up to 800 m" (his answer to 3.4 and 3.5) and, in the fleet list, rigs "rated 1,200 m and 300 m"
  (his equipment list). The owner asks him about the difference with the testimonials (C-37).
  Agent's note: the two lines sit close together on the Equipment page and can read as a
  contradiction until he explains; make them agree once he does.
- **D-133 — owner, 2026-11-05:** Liyat's raw files don't belong in GitHub. All six were copied word
  for word into `docs/LIYAT_ORIGINALS.md`, then deleted, with the full-size `NEW PHOTOS` folder.
  Replaces D-130. The owner keeps the originals.
- **D-134 — owner, 2026-11-05:** work with what we have. Don't ask Liyat about model numbers,
  counts or small mismatches between a list and a photo; a rig in his photos is his. Use general
  wording where a detail isn't known, never an invented one. So: no survey tools named, the
  compressor is "Atlas Copco XRVS", no counts except the rig ratings, and the well drawing stays.
- **D-135 — owner, 2026-11-05:** each service link matches its name, e.g.
  `/services/deep-shallow-water-well-drilling` (was `borehole-drilling`); also
  `hydrogeological-geophysical-survey` and `turnkey-water-projects`. Safe before launch: no old
  links are out yet.
- **D-136 — owner, 2026-11-05:** 12 projects, so the grid's rows come out full. The 12th is the
  Belgian Embassy, a 200 m well from Liyat's company profile, with a general Liyat photo captioned
  "Illustrative photo" (owner's choice over "Photo from another Liyat site") until he sends a real
  one (C-36). Agent's note: a borrowed photo is weaker than a real one; the caption keeps it
  honest. Project order: Chaka House 3rd, Tsedey Bank 4th.
- **D-137 — owner, 2026-11-05:** the Projects page's "Photos from our work" is a carousel, so the
  page stays short: one row to swipe or step through with arrows, 1 photo (the next peeking in)
  on phones, 2 on tablets, 3 on desktop. `PhotoGallery layout="carousel"` with the new
  `ui/carousel.tsx`; no new package. The Equipment page keeps its grid of 6.
- **D-180 — owner, 2026-11-10:** Search Console is verified with the agency Gmail as a Domain
  property (DNS TXT; we own the domain), and `liyatconstruction@gmail.com` is added as Owner so
  Liyat keeps access if the agency ends.
- **D-181 — owner, 2026-11-10:** the Google Business Profile is owned by Liyat, with the agency as
  Manager. One profile only; Liyat deletes the other. A Business Profile has no email field.
- **D-182 — owner, 2026-11-10:** profiles are Business Profile, LinkedIn company page, Facebook
  page and WhatsApp Business. Not Telegram, Instagram, TikTok, X or YouTube for now. Same name,
  descriptor, address, phones, website and logo everywhere.
- **D-183 — owner, 2026-11-10:** Liyat chooses how we get access (meeting question 15): A, a
  sit-down where he adds us as manager or admin and we never need his password (agent's
  recommendation), or B, his Gmail login shared privately and changed after. Never write a
  password in any file or in Notion. He owns everything either way.
- **D-184 — owner, 2026-11-10:** three projects get their own page, shown on Home; the rest stay
  cards. Reopens D-74 and D-96. Chosen by the owner, agent agreeing: Ethiopian Airlines, British
  Embassy and Chaka House (the three Liyat chose for Home; trusted names; three different stories).
  The embassy and Chaka House have one photo each, so a page waits for more photos from Liyat, with
  Ovid (Kings Tower) as the fallback. CREDOKS stays a card. Details in `docs/SEO_PLAN.md`.
- **D-185 — owner, 2026-11-12:** Ovid's year is 2025 (2024 was a mistake); Ethiopian Airlines is 2024
  and the Belgian Embassy 2025 (meeting 2026-11-10); the British Embassy stays 2026 (Liyat's own
  document). The three project pages are built now and the missing photos are added after the
  requirements session; a page with one photo shows the cover beside the text (replaces "a page is
  not built with one photo"). The pages say only confirmed facts: the owner's idea of an invented
  "hardest part of the job" was not used (agent's objection: a false claim about a named client);
  no duration.
- **Open:** keep `/styleguide` hidden at launch, or delete it (O-05; currently kept).

## How we work

- One topic at a time. The agent gives an honest view with reasons; the owner decides; the
  agent builds it in the shared layer and records the decision here.
- Ask before deleting files, adding dependencies, committing or pushing.
- After each change: browser at 375/768/1280, then `validate`, `check:design`, `build:static`.

## Known issues

- Card photos exceed the 70 KB budget (recompressed social-media images; no originals) —
  accepted (D-118).
- The rig depth question (C-37) has no `PLACEHOLDER` marker, only a comment in `equipment.ts`, so
  `check:placeholders` can reach zero while it is open: tick it off by hand.
- `.devin/skills/senior-website-engineer/SKILL.md` still lists the deleted ENGINEERING,
  DESIGN_SYSTEM and BRAND_GUIDELINES docs.
- On this Windows checkout `core.autocrlf=true` writes CRLF, so `npm run validate`'s Prettier
  step flags every file (`endOfLine: lf`). Git stores LF, so commits are clean; check edits with
  `npx prettier --check --end-of-line auto <files>`.
- The preview's testimonials are layout samples ("Name Surname", C-12): tell Liyat, or empty
  the list before showing it.
- Static hosts may 404 the `__next.*.txt` files used for client navigation; test on Vercel. A plain
  local server does 404 the `__next.*.__PAGE__.txt` ones (P16 step 10); pages still load.
- `npm run lint` covers `src/` only; `eslint .` reports 3 older errors in `scripts/`
  (`check-design.mjs`, `optimize-images.mjs`).
- The dev server warns about the header logo's width and height; dev only, not an error.
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
as designed), 768 and 1280 (caption plate, card titles unchanged). Committed and pushed as
`9c86f6a`.

**2026-11-03, P16 part 1 (D-119).** Put in the clear parts of Liyat's copy review (home.ts,
about.ts, company.ts, projects.ts, site.ts; mission/vision icons swapped in about/page.tsx).
Placeholders 21 → 18. Type-check, lint, check:design and `build:static` (19 routes) pass;
Prettier passes on the changed files (CRLF note under Known issues); new text confirmed in
`out/`. **Not yet done:** the browser check at 375/768/1280 (the running dev server needs a
restart after `npm ci`). **Next:** browser check; the owner sends the follow-up questions;
then commit on the owner's word.

**2026-11-04, P16 part 2 planned.** Recorded Liyat's written answers, company profile and phone
call in `docs/CLIENT_ANSWERS.md`; cut the questions to 5 must-asks in
`docs/MEETING_QUESTIONS.md` and Notion; wrote the steps under "P16 part 2". Documents only: no
site code, images or copy changed. The Ovid photo is still in `assets/images/clients/` until
step 5. **Next:** step 1.

**2026-11-04, P16 part 2, step 1.** Renamed the service to "Deep and Shallow Water-Well Drilling"
in `services.ts`, `contact.ts`, the form subjects (`site.ts`), `legal.ts`, the style guide samples
and `PROJECT.md` §8; the `borehole-drilling` slug stays (changed later, D-135). "Mud rotary and DTH rotary drilling"
replaces "Rotary and air drilling". Also made "turnkey water systems" in the meta description
"turnkey water projects", and applied D-127 and D-128. Type-check, lint, check:design,
`build:static` (the first run stopped with font fetch errors, the rerun passed) and tests 12/12
pass; Prettier passes on the changed files. Browser at 375, 768 and 1280: no sideways scroll, no
console errors, old name gone from the pages checked. At 768 the card heading breaks at the hyphen
("Water-" / "Well Drilling"); left as it is. **Next:** step 2.

**2026-11-04, P16 part 2, step 2.** About figures are now 7+ years, 50+ wells, 600 m and
15,000 m+; Equipment shows the last three. "Company experience" is the agent's label for his
"7+ years experience". The GM's 20+ figure and the years in company facts are gone; the sentence in
his story stays. The C-10 mark now sits only on 50+ and 15,000 m+ (D-126). `about.ts` needed no
change. Type-check, lint, check:design, `build:static` and tests 12/12 pass; Prettier passes on
the changed files. Browser at 375, 768 and 1280: no sideways scroll, no console errors, the old
figures are gone from About and Equipment. **For step 7:** Equipment's "From Liyat's
completed-project records" no longer fits, because 50+ and 15,000 m+ come from his review, not a
project list. **Next:** step 3.

**2026-11-04, P16 part 2, step 3.** Removed About's team section and the team data, type and copy;
deleted `team-card.tsx` and `team-grid.tsx` on the owner's word and took them off `/styleguide`.
His "Expert team" line replaces the "A professional team" value (owner, 2026-11-04), because a
separate block would have repeated it. Placeholders 18 → 17 (C-15). Type-check, lint, check:design,
`build:static` and tests 12/12 pass; Prettier passes on the changed files. Browser: no sideways
scroll at 375, 768 and 1280, and About and `/styleguide` load with no team content. Viewed the
values cards at 1280; at 375 the screenshot stopped above the "Expert team" card and at 768 it
failed, so those two were checked by page measurements, not by eye. The console's only errors came
from a moment mid-edit, when the open page saw `about/page.tsx` still importing `TEAM`; no new ones
after reloading. **Next:** step 4.

**2026-11-04, P16 part 2, step 4.** Home now shows Ethiopian Airlines, British Embassy and Chaka
House; Tsedey Bank stays on /projects and Pumping Tests. The Entoto card shows 200 m. The drilling
page's related projects now end in Chaka House instead of Tsedey Bank. Type-check, lint,
check:design, `build:static` and tests 12/12 pass; Prettier passes on `projects.ts`. Browser: all
three cards at 375 and 1280, no sideways scroll at 375, 768 and 1280. The preview pane didn't paint
the Chaka House photo, so its file was checked directly (loads, 200). **Still open:** at 768 the
third Home card is hidden by design, so tablets don't see Chaka House; the centre crop cuts the
top of the rig's mast; the church is spelled two ways on the Entoto card. **Next:** step 5.

**2026-11-04, P16 part 2, step 5.** Moved Liyat's photo to
`assets/images/projects/ovid-real-estate-turnkey-wells/cover.jpg` and built its web images (this
one folder only, so the others weren't regenerated). The card now says Ovid Group, shows the
caption "Casing installation at Kings Tower, Arat Kilo" and has lost "Illustrative"; the default
centre crop is the best of the three looked at. Depth and location unchanged. A C-35 mark now sits
on the card until he confirms the link, so placeholders are back to 18. Type-check, lint,
check:design, `build:static` and tests 12/12 pass; Prettier passes on the changed files. Browser:
no sideways scroll at 375, 768 and 1280; the photo loads, but the preview pane didn't paint it, so
the crop was judged from the file. Its 800 px file is 92 KB, over the 70 KB budget. **Still open:**
`assets/images/site/water-column.webp` is now unused (ask before deleting); the crop and church
spelling from step 4. **Next:** step 6.

**2026-11-04, P16 part 2, steps 6 and 7.** CREDOKS replaces CREDOCS in every name and alt text; the
`credocs-shoring` slug and image folder stay. Shoring is noted as a past project, not a service.
Equipment now says "Indian and Turkish manufacturers" and "Our rigs can drill up to 800 m. The
deepest well we have completed so far is 600 m."; the two lines about no rated capacity are gone,
and the figures intro says "Wells completed and metres drilled from 2019 to 2026." Added two facts
to the rig on Home's equipment section (up to 800 m, Indian and Turkish); `home.ts` itself needed
no change. Placeholders 18 → 15. Type-check, lint, check:design, `build:static` and tests 12/12
pass; Prettier passes on the changed files. Browser at 375, 768 and 1280: no sideways scroll; old
spelling gone from the visible text and alt text of Home and Projects, and only in image paths in
the build. **Step 8 not done** (D-129). **Next:** step 9.

**2026-11-04, P16 part 2, step 9.** Removed the answered marks (service names, site practices,
agency credit), comments only, nothing visitors see. The hand pump mark moved onto the Pump Supply
service and now asks only that. Placeholders 15 → 8, matching the open table: C-09 hand pumps, C-10,
C-12, C-16, C-25, C-29 (2), C-35. C-20, C-27 and C-36 have no mark. Type-check, lint, check:design
and Prettier pass; no browser check or build for comments, covered by step 10. **Next:** step 10.

**2026-11-04, three small fixes (owner's word).** Added an `upper` photo focus (token, `Photo`, type,
`/styleguide`) and set it on Chaka House, so the card keeps both the top of the mast and the truck
wheels. The Entoto card now spells the church "Kidanemihiret" throughout, his spelling. Deleted the
unused `assets/images/site/water-column.webp`, its two web versions and its list entry; the
`hero/water-column.webp` copy stays. Type-check, lint, check:design, `build:static` and tests 12/12
pass; Prettier passes on the changed code files. Browser: no sideways scroll on Home at 375, Projects
at 768 and 1280, and `/styleguide` at 1280; the crop setting is applied, but its picture was judged
from the file, not on the page. **Still open:** `assets/images/site/test-tank-discharge.webp` is also
unused (ask before deleting). **Next:** step 10.

**2026-11-04, P16 part 2, step 10.** Type-check, lint, Prettier (`--end-of-line auto`, whole project),
check:design, `build:static` and tests 12/12 pass on a fresh build. Built pages: no old wording left
(old names, figures, spelling, team, "Illustrative"); the D-119 copy is on the pages, which closes
that check. Measured on the built site at 375, 768 and 1280: Home, About, Projects, Equipment,
Environment, six services, two legal pages, 404 and `/styleguide`: one h1, no sideways scroll, every
image loads with alt text, no duplicate ids or dead anchors. Phone menu opens and closes; the form's
subject list has the new name. Fixed: `/styleguide` scrolled sideways on phones, because "15,000 + m"
no longer fit three columns. Seen by eye, in headless Edge: Home hero at 375, projects at 1280,
Chaka House at 375, equipment at 768, testimonials at 1280; About and Projects at 1280, top of
Projects at 375, Equipment and the drilling page at 768. The Chaka House crop is confirmed on the
page. **Not seen by eye:** Environment, the other five services and the legal pages (measured only).
**Not tested:** sending the form (no key yet, by plan), a keyboard pass, real phones. The header
looks see-through in some screenshots taken right after a jump, mid-fade; solid in others, so it
works, but look at it on the preview. **Next:** step 11.

**2026-11-04, two more small fixes (owner's word).** Very small phones: Home and About no longer
scroll sideways at 320 px. `Button` can now wrap a long label, and the contact column can shrink,
with the email address allowed to break. Deleted the unused
`assets/images/site/test-tank-discharge.webp`, its two web versions and its list entry. Type-check,
lint, check:design, `build:static` and tests 12/12 pass; Prettier passes on the changed files. All
15 pages measured at 320, 375, 768 and 1280: no sideways scroll, one h1, no broken images. Seen by
eye: the contact section at 320 and 1280, and the About button at 320. **Next:** step 11.

**2026-11-04, P16 part 2, step 11 started.** Committed everything since `9c86f6a` on branch
`p16-client-answers`, without Liyat's four files (D-130). Not merged into `main` and not pushed.
**Next:** the owner decides on merging and pushing; the owner sends the 5 must-ask questions and
the testimonial request; deploy the preview (P17a), and tell Liyat the testimonials are samples.

**2026-11-05, step 13.** Applied Liyat's follow-up answers (Doc 3), his equipment list and 12 of
his 17 photos, as listed under step 13 and D-132–D-134. Copied all six of his files word for word
into `docs/LIYAT_ORIGINALS.md` and recorded the new answers in `CLIENT_ANSWERS.md`; then deleted
the six files and `public/images/NEW PHOTOS`. Placeholders 8 → 6 (C-12, C-25, C-29 ×2, C-36 ×2).
Type-check, lint, check:design, `build:static` and tests 12/12 pass; Prettier passes on the
changed files. Browser: Projects at 375 (no sideways scroll; new covers load and crop well),
service pages and Equipment at 768, Equipment at 1280 (fleet list and photos). Not committed.
**Next:** commit on the owner's word; the owner asks Liyat the C-12, C-36 and C-37 questions.

**2026-11-05, before the commit (owner's word).** Service links now match the names (D-135); the
12th project card is the Belgian Embassy with an illustrative photo (D-136); Chaka House now
comes before Tsedey Bank; the Projects photos are a carousel (D-137). Placeholders 6 → 7
(C-36 ×3). **Next:** commit on the owner's word.

**2026-11-06 (owner).** Home hero headline and buttons moved a little lower from md up
(`md:pt-16` → `md:pt-24 lg:pt-28`); phones unchanged (centred). Checked at 768 and 1440.
Favicon (owner's word): the full logo shrunk lost its divider and drop at 16/32 px, so all icons
(favicon .ico/16/32/96, apple-touch, android 192/512) are now the full L | C logo (owner: the C alone
is not the logo), centred on a white rounded tile with about 11–12% white space on each side (owner approved this size) (square white for Apple), cut from `public/logo.png`. White tile so it reads
on dark browser tabs too and matches the white logo box in the header. `build:static` passes.
Not committed.

**2026-11-09, after Liyat's filled-in review (D-171–D-179, `docs/REVIEW_PLAN.md`).** Built: project years on the
cards (beside the client, replacing the newest-first sort so the curated order stands), Chaka House client
"Palace Administration / Etoile GC PLC", the CREDOKS line about drilling inside a 14 m excavation, a
"Registration" card on About (Grade One, licence WWDC/1/227, TIN, with the Ethiopian Construction Authority as
Liyat wrote it), a "Partners for groundwater investigation" section on About (Milto logo from
`assets/images/clients/`, Husky as text until a sharp logo arrives; C-39), and "we do not guarantee a specific
discharge" on the Environment page. Type-check, lint, check:design and `build:static` pass; the About and Projects
pages checked in the browser at 1024 and 375 px (no sideways scroll). Not committed. **Next:** the owner talks to Liyat
(quotes, Husky logo, email choice info@ or hello@, years for Ethiopian Airlines and Belgian Embassy, Belgian photo),
then the hero slider decision, then commit on the owner's word.

**2026-11-10, SEO plan (D-180–D-184).** Checked the live site (indexed, first for "Liyat Construction";
two Google Maps profiles; the AI answer ignores the site) and wrote `docs/SEO_PLAN.md` with the steps
in order. Chose the three project pages by measuring the source photos. No site code changed. The
Notion page "Meeting questions for Liyat" was rewritten for today's meeting: 14 questions, each a
must. **Next:** the meeting; then SEO_PLAN step 1, then step 2 (both need no answers).

**2026-11-12, SEO_PLAN steps 1 and 2.** Step 1: the owner set up Search Console (Domain, sitemap,
Home indexing, Liyat as Owner) and Bing (imported). I checked the redirects (all permanent 308, the
`www` address is canonical) and wrote the AI baseline into `SEO_PLAN.md` from the owner's
answers: only Gemini uses the site; Google AI, ChatGPT and Perplexity describe a general building
contractor, and Google AI calls it closed. Copilot was not checked. Step 2: Home title is "Liyat
Construction | Water-Well Drilling in Ethiopia"; service titles are "<name> in Ethiopia", each
with a new `metaDescription`; About's description is shorter; `WebSite` has `alternateName` and the
business has `legalName`; the sitemap has one `lastmod` (`contentUpdated`). Later the same day: wrote the meeting answers into `docs/CLIENT_ANSWERS.md` and the step 5 build plan into `SEO_PLAN.md` (documents only). The fact sentence was
already on Home and About, so it was not changed. `seo.test.mjs` has three new checks (14 tests
pass); type-check, lint, check:design and `build:static` pass; Prettier passes with
`--end-of-line auto`. I removed a corrupted generated folder, `.next/dev` (git-ignored), that broke
the type-check. **Not done:** no browser look at 375/768/1280 (only page titles and descriptions
changed, nothing visible); not committed; the live site shows the new titles only after a deploy,
then ask Search Console to re-index Home. **Left as is:** the old `keywords` meta tag (Google
ignores it; the owner may remove it). **Next:** SEO_PLAN step 3 needs Liyat, so step 5 (project
pages) is the next work, starting with 5a.

**2026-11-12, SEO_PLAN step 5 (D-185).** Built the three project pages: `src/app/projects/[slug]/page.tsx`
(only projects with a `story`; `PROJECT_PAGES`), the `ProjectDetail` section (story, services linking to
their pages, facts table, site photos, button to Contact; the cover sits beside the text when there are
fewer than three site photos), new `Project.story` (with `metaTitle`) and `ProjectsPage.detail` labels,
`ProjectCard` linked with a "View project" arrow only when a page exists, the sitemap (14 URLs) and a
specimen on `/styleguide`. Years: Ethiopian Airlines 2024, Belgian Embassy 2025, Ovid 2025 (was 2024).
Ethiopian Airlines has four site photos (rig, rig and casings, engineers, night); British Embassy and
Chaka House have the cover only (C-40). `seo.test.mjs` has a test for the three pages (15 tests pass);
type-check, lint, Prettier (`--end-of-line auto`), check:design and `build:static` (22 routes) pass.
Browser: all three pages at 375, 768 and 1280 measured in the pane (no sideways scroll, one h1, no
broken images); looked at by eye at 375 (Ethiopian Airlines, text) and 1280 (Chaka House). **Not seen by eye:**
the photos on the page (this pane doesn't paint them; their files load), the Ethiopian Airlines gallery and
the 768 layout. **Not done:** 5c photos (C-40), the Ethiopian Airlines yield still to be checked against the
test report (C-11), not committed. **Next:** the owner reviews the pages; then the requirements and
"what Liyat does" documents (step 3); step 4 when the answers arrive.

**2026-11-12, step 5 rewrite (owner's word).** The owner found the first project texts too thin and the cover
photo beside the text unwanted. Now: no photo beside the text; the facts table and the contact button sit in the
right column; a key-figures row (tested yield in blue, depth, year) sits under the header; the stories are fuller,
in the site's voice and with only confirmed facts or general explanation of how wells are built (`Project.story`
now holds paragraphs, numbered steps and a `metaDescription`); each service on the page shows its one-line summary.
Ethiopian Airlines' depth label is "Depth of each well". Type-check, lint, check:design, `build:static` (22 routes)
and 15 tests pass; the text was proofread from the built pages. **To confirm with the owner:** the casing "stepped,
wider at the top" is general practice, not stated by Liyat; "the national airline" and "dealt with one contractor"
are our explanation of the facts. Not seen by eye after this change (owner's dev server shows it). Not committed.

**2026-11-12, step 5, second round (owner's word).** The key figures moved from under the header into the header band
(`ProjectFigures`, white on Ink). The facts table and the "Discuss your project" button now stay in view while the
story scrolls, from lg (new token `--sticky-top`, shared with the legal contents). Ethiopian Airlines has six site
photos (added `/images/hero/ethiopian-airlines.webp` and `/images/hero/ea-casing-site.webp`, both named for the
project; `ea-v-notch` left out because its surroundings look like another site); the gallery is a swipe row on phones
and 3 columns by 2 rows from tablet up (`layout="phone-carousel"`). Type-check, lint, check:design, `build:static` and
15 tests pass. Browser (pane): the column held at 106 px under the header from the top of the story to its end; at
375 the six photos sit in one swipe row, at 768 and 1280 in 3 columns and 2 rows; no sideways scroll on the three
pages at 375 and 768; header figures seen at 1280. **Not seen by eye:** the photos themselves (pane does not paint
them). Not committed.

**2026-11-12, step 5, third round (owner's word).** Phones only: the header figures sit in one row with a smaller
figure (`Stat size="compact"`, 28 px; wider screens unchanged), and the "Explore all projects" button under "More
projects" is centred just below the title (it stays at the right from sm). The button change is in
`FeaturedProjects`, so a service page with one or two related projects behaves the same. Measured at 320, 375, 768
and 1280 on the Ethiopian Airlines and Chaka House pages: figures in one row everywhere, no sideways scroll;
type-check, lint, check:design, `build:static` and 15 tests pass. Not committed.
