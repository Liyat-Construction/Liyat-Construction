# SEO plan — Liyat Construction

Started 2026-11-10 with the owner: being found on Google, on Maps and in AI answers. The order of
work is [`DIRECTION.md`](DIRECTION.md); this file keeps the goal, the baseline and the steps.
Full older text: `git show 5e34a17:docs/SEO_PLAN.md`.

## Goal

1. Searching **"Liyat"** or **"Liyat Construction"** shows the website, one correct Google Maps
   profile, and a correct AI answer ("water-well drilling and groundwater engineering").
2. Over months: show up for **"water well drilling Ethiopia"**, "borehole drilling Addis Ababa",
   "pumping test Ethiopia", "hydrogeological survey Ethiopia".
3. The scoreboard is Google Search Console (searches, impressions, clicks). No promise of a
   position: competitors have older sites and more links.

## Baseline, 2026-11-12

Question asked of each: "What is Liyat Construction in Ethiopia?" Owner, signed out, private
window. Recheck with the same question in step 7.

| Tool       | What it says                                                                                                                                                                                                   | Uses our site?    |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Gemini     | Groundwater development, water-well drilling and hydrogeological services; six services, up to 800 m, Ethiopian Airlines, British Embassy, Chaka House; started 2019, named Liyat Construction PLC in May 2022 | **Yes**, cites it |
| Google AI  | "Private construction and building contractor", BC-7 or similar grade, "permanently closed", old Akaky Kaliti / Nifas Silk-Lafto address; sources are a LinkedIn staff profile and an old Yandex listing       | No                |
| ChatGPT    | Construction company in Addis Ababa, industry "Construction", phone +251 930 014 711, "also categorised as a drilling contractor"; Dun & Bradstreet, government records, trade records                         | No                |
| Perplexity | Building contractor doing site supervision and quality testing; registration CON/2725, grade BC-7; says there is no official website or project portfolio                                                      | No                |
| Copilot    | Not checked                                                                                                                                                                                                    | —                 |

**What it means.** Only Gemini reads our site. The others describe a general building
contractor; there may be a second, similarly named company, which we do not claim. The fix is
the same everywhere: "water-well drilling and groundwater engineering", said the same way on the
site, in the structured data, the Business Profile and the LinkedIn page.

## Decisions

- **D-180 Search Console.** Domain property verified by DNS on the agency Gmail;
  `liyatconstruction@gmail.com` invited as Owner, so Liyat keeps access (he accepts in T3).
- **Profiles** are Liyat's own job (D-186, D-187 in `DIRECTION.md`; they replace D-181–D-183).
- **D-184 Three project pages:** Ethiopian Airlines, British Embassy and Chaka House, shown on
  Home; every other project stays a card.

## Steps

**Step 1 — Register and measure.** Done 2026-11-11 and 12: Search Console (sitemap submitted,
Home indexed), Bing Webmaster Tools, permanent redirects to `https://www.`, the baseline above.

**Step 2 — Code.** Done 2026-11-12: site name in `WebSite` data, Home title and description,
"<service> in Ethiopia" titles and descriptions, sitemap date, SEO tests.

**Step 3 — Profiles (Liyat's job, D-186).**

- [ ] Business Profile: correct address, hours, category, services, website, photos, description.
- [ ] LinkedIn company page ("water well drilling and groundwater engineering"); staff list it as
      employer.
- [ ] Facebook page; WhatsApp Business number.
- [ ] All use the same name, descriptor, address, phones, website and logo.
- [ ] Ask every client for a Google review.

**Step 4 — Code that needs the answers.**

- [x] Structured data: address, hours, founding date, legal name, six services, coordinates,
      founder, email `info@` (T14, 2026-11-13).
- [ ] Profile links in the footer and `sameAs`, when Liyat has them (T22).

**Step 5 — Three project pages.** Done: structure and content (2026-11-12), Home links and search
data, photos (T11b, 2026-11-16: British Embassy and Chaka House now have a header and three
photos on site each, like Ethiopian Airlines).

- [x] 5a structure · 5b content · 5c photos · 5d Home and search

**Step 6 — Other places to be listed (T22).**

- [ ] Bing Places and Apple Business Connect.
- [ ] Two or three Ethiopian business directories.
- [ ] Links to the site from clients Liyat agrees to.

**Step 7 — Recheck, 4–6 weeks after launch (T23).**

- [ ] AI answers again, against the baseline.
- [ ] Search Console: which searches show the site, and for which pages.
- [ ] Decide next: a short FAQ per service (needs Liyat's real answers), more project pages, more
      directories.

## Not doing

- A `keywords` meta tag (Google ignores it), an `llms.txt` file (no search engine uses it),
  invented facts or reviews, Telegram / Instagram / TikTok / X for now.
