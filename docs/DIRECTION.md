# Direction — what we do, in order (decided 2026-11-13)

This replaces the "Suggested order" in `SEO_PLAN.md`. Work **one task at a time**, top to bottom.
Tick a task here when it is done; add a dated handoff to `WORKFLOW.md`. `SEO_PLAN.md` keeps the
detail of steps 3–7 and the baseline. Nothing is committed or pushed until Phase 6 (owner's word).

## Decisions (owner, 2026-11-13)

- **D-186 Profiles are Liyat's job.** We do not build his Google, LinkedIn, Facebook or WhatsApp
  profiles. We give him the **Online Presence Guide** (D-181 to D-183 are replaced: no shared
  access, no sit-down for accounts, no C4). He opens each account himself from
  `liyatconstruction@gmail.com`, with the same logo, bio, address, phones and website. The founder
  gets a LinkedIn profile: "Founder and General Manager at Liyat Construction" (Wondwossen's choice, 2026-11-13). Everyone asks future clients
  for a Google review and a testimonial. Tone: polite, confident, short, exact.
- **D-187 Business Profile.** He cannot delete the second Maps profile (he does not own it). The
  guide tells him to correct his own: hours Mon–Sat 8:00–5:00, address (after C1), category,
  services, photos, and to claim or report the other.
- **D-188 Public email** shown on the site: `info@liyatconstruction.com`, forwarded to the Gmail by
  Namecheap Email Forwarding (the owner manages the domain). Replies from info@ are not set up.
- **D-189 Remove** the `keywords` meta tag and `/styleguide` (O-05). The style guide goes **last
  before the commit** (T15), because we use it while we rework photos, team and testimonials.
- **D-190 Depth wording.** "Our drilling depth is up to 800 m. Our rigs are rated 300 m and 1,200 m."
  One check question goes to Liyat (R5). The same wording everywhere the numbers appear.
- **D-191 Arada.** Pump installation is confirmed by Liyat; the "320" is not. No number on the card
  until he answers (R4).
- **D-192 Legal pages** stay as written (read fully in T5); `noindex` is removed at launch.
- **D-193 Founding date and service names** need no question: 2019, named Liyat Construction PLC in
  May 2022, as About says. The footer must use the same service names (check in T5).
- **D-194 Team section** on About: not a photo-and-name grid; the look follows the owner's
  screenshot (like the partner row). The testimonial look also follows his screenshot.
- **D-195 Softer wording** for "we do not guarantee a specific discharge" (T6).

## Phase 1 — Documents for Liyat (send first: his answers take the longest)

| ID  | Task                                                                                                                                                                                                                                                                                                       | Needs                             |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| T1  | - done 2026-11-13. **Online Presence Guide** (short): why the same details everywhere; account steps; the logo; ready-to-paste bio, short description and founder line; website link; reviews                                                                                                              | Owner: logo files                 |
| T2  | - done 2026-11-13. **Requirements list** R1–R9 (below), one line each, with answer choices                                                                                                                                                                                                                 | —                                 |
| T3  | Two things only Liyat can do, in one call with him: Web3Forms key (he logs in or confirms the email, sends the key) and accepting Search Console Owner. Address, Arada and the 800/1,200 question are already answered or sent (R1, R4 done 2026-11-13; R5 is in the requirements list).                   | Liyat, with the owner on the call |
| T4  | - set up 2026-11-13, **not ticked: test pending (do it on the call with Liyat).** Owner: `info@` forwarding in Namecheap → Gmail. Forwarder `info` → Gmail saved; MX and SPF live. Site email already switched to `info@` in code; do not deploy before the test passes. Do not touch existing DNS records | Owner, Namecheap login            |

**Requirements list (T2).**

- R1 Address: Mickey Leland St is Woreda 03 on Google Maps, he said 04; which is right?
- R2 Real client quotes: name, job title, permission (C-12). The samples go before launch.
- R3 More photos: British Embassy, Chaka House; an illustrative photo for the Belgian Embassy (C-36, C-40).
- R4 Arada Luxury Mall: is "320" a 320 m deep well, a pump set at 320 m, or something else?
- R5 Depth: is it right that 1,200 m is the rating of your biggest rig and 800 m the depth you drill in practice?
- R6 Partners (Milto, Husky and the others he will send): name, logo, website link if any; may we name them (C-36, C-38, C-39).
- R7 Belayneh Kinde: depth and the work done (C-36).
- R8 Team: the facts for the team section (see D-194 and `TEAM_SECTION.md` for the exact five questions); no photos or names needed.
- R9 Legal pages: no reply means no changes (C-29).

## Phase 2 — Small fixes (no input needed)

| ID  | Task                                                                                                                                                                                                                                                                                                                                                                                                   |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| T5  | - done 2026-11-13. Content pass: remove `keywords` (`site.ts`, `layout.tsx`); depth wording (D-190: `equipment.ts` lines 32, 50, 189, `projects.ts` 229, `services.ts` 50); Arada card without the number (D-191); name Kibish Construction on Ethiopian Airlines; footer vs service names; one Equipment photo out; read the legal pages in full                                                      |
| T6  | - done 2026-11-13. Soften "we do not guarantee a specific discharge": `about.ts` line 34 and `environment.ts` line 48. Proposal, owner decides: About — "Every site is different, so we explain what the ground and the tests show and never promise a yield before the work is done." Environment — "Every well is different, so we report what the tests show and never promise a yield in advance." |

## Phase 3 — Images (the biggest job; do it properly, measured at 375, 768, 1280)

| ID  | Task                                                                                                                                                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| T7  | - done 2026-11-13. **Hero**: scan `assets/` and `public/images/` for the strongest photos; compare with the current seven; owner picks the top 3–4                                                            |
| T8  | - done 2026-11-13. Build the hero with the chosen photos: the best crop on phone, tablet and desktop (focal point per breakpoint); `npm run images <paths>` only, never the full run                          |
| T9  | - done 2026-11-13. **Photo framing audit** of every header, card and gallery: list each image that is cut badly at any of the three widths; fix with the component's focal-point setting, not one-off classes |

## Phase 4 — New sections (each waits for the owner's screenshot)

| ID  | Task                                                                                                                                                                                                                       | Needs     |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| T10 | - done 2026-11-13. Testimonial look: one large quote at a time with a strip of names (owner's Mekan reference); samples stay until R2                                                                                      | —         |
| T11 | About team section as in D-194. **Spec written 2026-11-13: [`TEAM_SECTION.md`](TEAM_SECTION.md) (anatomy, data, wording, steps; no screenshot needed). Build it when R8 (C-41) is answered; never with invented numbers.** | Liyat: R8 |
| T12 | - done 2026-11-13. Contact: Google Map of the location (embedded map, lazy, with a "Get directions from your location" button)                                                                                             | —         |

## Phase 5 — Review before commit

| ID   | Task                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| T13  | - done 2026-11-13. **A2 review**: every page's copy, `check:placeholders` list, links, titles; proofread from the built pages                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| T14  | - done 2026-11-13 for what is known (titles, structured data, founding date, `info@` in code); answers still to come (R2, R3, R5, R6, R8) are applied when Liyat sends them, and profile links in T22. Apply the answers that have arrived (R1–R9); structured data with address, hours, founding date, services (step 4 code; profile links are added when Liyat has them)                                                                                                                                                                                                                                                                                                               |
| T15  | - done 2026-11-13, changed by the owner from "delete" to "keep, development only" (option A). `/styleguide` stays for work with `npm run dev`; production builds do not contain it. Testimonials slider added to it first                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| T15a | - done 2026-11-14 (owner approved groups A, B and C). **Cleanup of unused files, last before the commit (owner, 2026-11-13).** Delete unused images, data and code only after proving each one is unused: grep the name and its base name (without size suffix) in `src/`, `public/`, `scripts/`, `docs/` and the built `out/`; check `image-widths.json`, metadata and OG images, the sitemap and structured data; list every candidate with the proof and wait for the owner's yes. A file that might help the site (a spare photo for a section still open, such as the hero, team or testimonials) stays. Known candidates: `casings*.webp` and `assets/images/equipment/casings.jpg` |
| T16  | `validate`, `check:design`, `build:static`, tests, the browser at 375/768/1280                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Phase 6 — Commit, deploy, check (owner's word for each)

| ID  | Task                                                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| T17 | Commit and push (owner's word), deploy on Vercel; Search Console: re-index Home and the three project pages                              |
| T18 | Share the link on WhatsApp and Telegram; Claude checks the tags (B2). Check the browser tab shows "Liyat Construction"                   |
| T19 | PageSpeed on the live site; fix what is under target (B3)                                                                                |
| T20 | Web3Forms key in place, a real test inquiry arrives (D3); `NEXT_PUBLIC_SITE_URL`; `check:placeholders` at zero; legal `noindex` out (E3) |
| T21 | Handover facts: who owns the domain, hosting and accounts, renewal date, how Liyat asks for changes (B4)                                 |

## Phase 7 — After launch

| ID  | Task                                                                                                                                                                           |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| T22 | When Liyat has his profiles: add their links to the footer and `sameAs` (step 4); Bing Places, Apple Business Connect, 2–3 Ethiopian directories, links from partners (step 6) |
| T23 | 4–6 weeks later: ask the AI tools the baseline question again, read Search Console, decide the next round (step 7)                                                             |

## Why this order

Phase 1 first, because Liyat's answers are the slowest and the code tasks can run while he replies.
Phase 2 before images, because it is quick and removes wrong claims. Images before the new sections,
because the team and testimonial blocks use the same photo components. The style guide stays until
the new sections are done. Nothing goes live until Phase 5 is clean.
