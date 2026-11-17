# Direction — what we do, in order

Work **one task at a time**, top to bottom. Tick a task when it is done ("- done YYYY-MM-DD") and
add a dated handoff to `WORKFLOW.md`. Nothing is committed or pushed without the owner's word.

## Decisions (owner, 2026-11-13 and 2026-11-16)

- **D-186 Profiles are Liyat's job.** He opens Google, LinkedIn, Facebook and WhatsApp himself from
  `liyatconstruction@gmail.com`, following the Online Presence Guide (T1): same logo, bio, address,
  phones and website. Founder line: "Founder and General Manager at Liyat Construction".
- **D-187 Business Profile.** The second Maps profile is not his and cannot be deleted; he corrects
  his own (hours Mon–Sat 8:00–5:00, address, category, services, photos).
- **D-188 Public email** `info@liyatconstruction.com`, forwarded to the Gmail by Namecheap. Set up;
  the test is T4.
- **D-189** No `keywords` tag. `/styleguide` stays for development only (T15).
- **D-190 Depth wording:** "Our drilling depth is up to 800 m. Our rigs are rated 300 m and
  1,200 m." Confirmed by Liyat (R5).
- **D-191 Arada Luxury Mall:** a 320 m deep well and pump installation, Piassa, Addis Ababa.
- **D-192 Legal pages** stay as written; `noindex` comes off at launch (T20).
- **D-193 Founding:** 2019, named Liyat Construction PLC in May 2022. Footer uses the service names.
- **D-194 / D-196 Team section** on About: facts only, no names or photos; the staffing PDF is the
  team today; no years of experience; the table names the training a role requires.
- **D-195** Softer wording instead of "we do not guarantee a specific discharge".
- **D-197 No partners row.** The clients row stays, with CIRHT, ET Mineral and Hosea.
- **D-198 No video on the site** (18–28 MB each); Liyat can post them on his own pages.
- **D-199 New project photos** for Chaka House and the British Embassy (headers approved by the
  owner, 2026-11-17).
- **Belgian Embassy** keeps its illustrative photo (owner, 2026-11-16).

## Done

T1 Online Presence Guide · T2 requirements list · T5 content pass · T6 softer wording · T7, T8
hero · T9 photo framing · T10 testimonial slider · T11 team section · T11a partners row out ·
T11b new project photos · T12 map on Contact · T13 copy review · T14 titles and structured data ·
T15 style guide development-only · T15a cleanup · T16 final checks · T17 part 1 commit and push
(`5e34a17`, 2026-11-16). Detail: `git show 5e34a17:docs/DIRECTION.md`.

## Open

| ID  | Task                                                                                                                                       | Waits on                     |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| T3  | Web3Forms key (we paste it into `src/config/site.ts` → `contactForm.formKey`, delete the C-25 line) and Liyat accepts Search Console Owner | Liyat, on the call           |
| T4  | `info@` test: a mail from another account arrives at the Gmail (inbox or spam noted). Forwarding, MX and SPF are already live              | Owner and Liyat, on the call |
| R2  | Real client quotes (name, job title, permission) replace the samples, or the samples come off (C-12, D-129)                                | Liyat, through the owner     |
| T17 | Rest: Search Console → URL Inspection → Request indexing for Home and the three project pages                                              | Owner, after R2 is settled   |
| T18 | Share the link on WhatsApp and Telegram; Claude checks the share tags; the browser tab shows "Liyat Construction"                          | Nothing (site is live)       |
| T19 | PageSpeed on the live site; fix what is under target                                                                                       | Nothing (site is live)       |
| T20 | Launch: key in place and a real test inquiry arrives; `check:placeholders` at zero; legal `noindex` out; commit and push                   | T3, R2                       |
| T21 | Handover facts: who owns the domain, hosting and accounts, renewal date, how Liyat asks for changes                                        | Owner                        |
| T22 | Liyat's profile links in the footer and `sameAs`; Bing Places, Apple Business Connect, 2–3 Ethiopian directories                           | Liyat's profiles             |
| T23 | 4–6 weeks after launch: ask the AI tools the baseline question again, read Search Console, decide the next round                           | Time                         |

## The road from here (2026-11-17)

1. **R2:** the owner talks with Liyat about the testimonials: real quotes in, or the samples out.
2. **T17** re-index, once Home no longer shows samples as if real.
3. **T18, T19** any time now; they need nobody.
4. **T3 / T4** on the call with Liyat, whenever it happens.
5. **T20** launch when T3 and R2 are done, then **T21**.
6. **T22** when Liyat has his profiles; **T23** 4–6 weeks after launch.
