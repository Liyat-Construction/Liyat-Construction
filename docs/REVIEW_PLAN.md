# Liyat's website review: decisions and plan

Started 2026-11-07. The plan for this round, decided one topic at a time with the owner. Status
and the order of work stay in [`WORKFLOW.md`](../WORKFLOW.md); questions for Liyat go into
[`MEETING_QUESTIONS.md`](MEETING_QUESTIONS.md) when the list is final.

## Sources

| Source                                                       | What it is                                                                                                                                                                                          |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `docs/Web site review by Claude AI.docx` (Liyat, 2026-11-07) | Liyat's review of the preview, written with their Claude: 20 changes, draft About and Equipment copy full of `[blanks]`, and a list of what Liyat still has to supply. It gives almost no new facts |
| `public/images/New Photos/` (Liyat, 2026-11-07)              | 17 photos and 4 videos (155 MB), mostly the Ethiopian Airlines project, May–June 2024 by the camera dates                                                                                           |
| A colleague's feedback from a phone (2026-11-07)             | Use a carousel for the Equipment photos too; phones scroll too much on Home and Projects                                                                                                            |

## Decisions

| #     | Topic                           | Decision                                                                                                                                                                                                                                                                                                                                                                                         |
| ----- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| D-138 | Testimonials                    | The sample quotes stay for now (D-129 stands); real quotes go on the list to ask Liyat. Agent's objection: Liyat's own review calls this critical, and the samples show "Name Surname / Organization (C-12)" to every visitor                                                                                                                                                                    |
| D-139 | Contact form subjects           | General question, the six official service names (PROJECT.md §8), Other. "Privacy policy" and "Terms of service" go. Their review's short labels aren't used: they were their AI's own, and the six names are Liyat's (owner, 2026-11-08; replaces the 2026-11-07 choice)                                                                                                                        |
| D-140 | Belgian Embassy photo           | The illustrative photo stays (D-136 stands); a real photo goes on the list to ask Liyat                                                                                                                                                                                                                                                                                                          |
| D-141 | `New Photos` folder             | Pick the photos we use and copy them, resized, into the right `assets/images/` folder (hero, projects, equipment). Delete only what we don't use, after the owner checks the list. Nothing is deleted without that check                                                                                                                                                                         |
| D-142 | Pumping Tests page header       | `pic 5.jpg` (water through the V-notch, crew measuring) replaces the Ethiopian Airlines photo, which also sits on Home and About                                                                                                                                                                                                                                                                 |
| D-143 | Ethiopian Airlines card         | `pic 8.jpg` replaces the cover: the same scene at full resolution, and in the 4:3 card it shows the rig, the crew and the water. The plane gallery photo (`rig.webp`) stays                                                                                                                                                                                                                      |
| D-144 | Equipment photos                | Add photos so the gallery has 9 (`equpiment.jpg`, `pic 3.jpg`, `pic 2.jpg`)                                                                                                                                                                                                                                                                                                                      |
| D-145 | Home hero                       | Build a 3-photo slider (Afar, `pic 5`, `pic 3`), done properly: only the first photo loads with the page, the others after it. The owner looks at it in the browser, then decides on the slider or one photo. Replaces D-131                                                                                                                                                                     |
| D-146 | Equipment gallery layout        | A carousel on phones only; tablets and desktops keep the grid (3 rows of 3)                                                                                                                                                                                                                                                                                                                      |
| D-147 | Projects page on phones         | Phones show the first 6 cards and a "Show all projects" button that opens the rest on the same page; tablets and desktops show all 12. All 12 stay in the page's HTML (confirmed by the owner, 2026-11-08)                                                                                                                                                                                       |
| D-148 | Home testimonials               | A swipe row on phones, one quote at a time                                                                                                                                                                                                                                                                                                                                                       |
| D-149 | Home phone length               | Not chosen, so no change: the Home project cards, the client logo grid and the footer stay as they are                                                                                                                                                                                                                                                                                           |
| D-150 | Client logos (#8)               | All 14 stay; ask Liyat to back CIRHT, ET Mineral Development and Hosea Trading House with a project, or agree to remove them. The Ministry and Horn of Africa logos are backed by Liyat's profile (World Bank project)                                                                                                                                                                           |
| D-151 | Team section (#13)              | No team section; D-122 stands. Liyat's owner told the owner himself: no names                                                                                                                                                                                                                                                                                                                    |
| D-152 | Environment page (#15)          | The menu label and page title become "Safety & Environment"; the link `/environment` stays. The card "Site wells on evidence" gets a heading that doesn't promise a survey on every job (D-117), e.g. "Surveys, when the project includes one"                                                                                                                                                   |
| D-153 | Client names (#10)              | One name per client everywhere (cards, logo row, alt text): **Embassy of Belgium**, **British Embassy**, **Yekatit 12 Hospital Medical College**, **CREDOKS Digital Service** (the city is shown beside the name on cards)                                                                                                                                                                       |
| D-154 | Church in the logo row (#9)     | No: the clients row shows logos only. Kidanemihiret Church stays on its project card                                                                                                                                                                                                                                                                                                             |
| D-155 | CREDOKS card (#12)              | Labelled "Other works: excavation shoring" and kept last. The name stays CREDOKS                                                                                                                                                                                                                                                                                                                 |
| D-156 | Spelling (#17)                  | British spelling throughout (specialising, recognised, organisations…), matching "metres" and "programmes"                                                                                                                                                                                                                                                                                       |
| D-157 | Image file names (#18)          | Consistent kebab-case names with no typos: `et-mineral`, `hosea-trading-house`, `horn-of-africa-groundwater`, `credoks-shoring` (folder and slug-free paths); references updated                                                                                                                                                                                                                 |
| D-158 | Their draft copy (Sections 2–3) | Used as inspiration only. We write better About and Equipment copy that keeps Liyat's facts and our rules: no blanks, no invented reasons ("grown past a single rig"), no promise of a survey or test on every job (D-117), no equipment Liyat never named. The two safe facts go in: "Our wells run from 100 m at Afdera to 600 m beneath Addis Ababa" and "one contractor, one set of records" |
| D-159 | Milto Engineering PLC           | Ask Liyat whether to show the partnership and whether we may name Milto. Nothing on the site until then                                                                                                                                                                                                                                                                                          |
| D-160 | Contact email (#3)              | liyatconstruction@gmail.com stays (agreed with Liyat); their suggested info@liyatconstruction.com isn't used. The Web3Forms key (C-25) goes on this inbox                                                                                                                                                                                                                                        |
| D-161 | Licence and TIN (#4)            | Ask Liyat for contractor category, grade, licence number and TIN. If they give them and agree, show them on About's "Company at a glance"; not as a headline                                                                                                                                                                                                                                     |
| D-162 | Project years (#5)              | No years on the cards, and we don't ask for them                                                                                                                                                                                                                                                                                                                                                 |
| D-163 | Test results (#6)               | Keep the Ethiopian Airlines yield; don't show yield, water level or drawdown on other projects, and don't ask for them                                                                                                                                                                                                                                                                           |
| D-164 | Remaining new photos            | `equpiment` and `pic 2` go into the Projects "Photos from our work" carousel too; `in ethiopian airlines 3` (the night shot) also joins it. Nothing new on About or Environment                                                                                                                                                                                                                  |
| D-165 | Videos                          | Not used on the site (about 101 MB); they keep Liyat's originals                                                                                                                                                                                                                                                                                                                                 |
| D-166 | Unused photos and files         | A delete list is written below and shown to the owner; only after the owner's yes are files deleted or moved out of `public/` (D-141)                                                                                                                                                                                                                                                            |
| D-167 | Photo captions                  | The file names say Ethiopian Airlines, so the captions say Ethiopian Airlines; we don't ask which site they came from. The 35 L/s figure in a file name is not shown                                                                                                                                                                                                                             |

**After the owner's first look (2026-11-09):**

| #     | Topic            | Decision                                                                                                                                                                                                                                                                          |
| ----- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| D-168 | Menu label       | The menu says "Environment" again; "Safety & Environment" made "Contact us" wrap onto two lines. The page itself (eyebrow, breadcrumb) keeps "Safety & Environment". "Contact us" in the header can no longer wrap. Replaces part of D-152                                        |
| D-169 | Hero slider look | No corner captions. Thin indicator bars centred at the bottom, the active one filling over the 7 s, with a round pause button. A slower cross-fade (1.8 s), and the photo on screen zooms in very slightly. Pause freezes all of it                                               |
| D-170 | Hero candidates  | The owner's 4 "wide" photos are in the slider for him to choose from (7 photos in all); the ones not picked come out again. Agent's note: two are 1280 px (soft on large screens), one shows drilling mud on the ground, and all 4 were on the approved delete list as duplicates |

Phone lengths measured before this round (Edge, 375 px, the 2026-11-06 build; one screen = 812
px): Home 16.9 screens, Projects 14.9, Equipment 12.9, About 9.8. Measure again after the changes.

## The new photos, where each goes (D-141, D-142, D-143, D-144, D-145, D-164)

Saved at up to 2,400 px into `assets/images/`, with consistent kebab-case names (D-157), then
`npm run images <paths>` for just those files.

| Liyat's file                  | Goes to                                                      | New file name                                                    |
| ----------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------- |
| `pic 5.jpg`                   | Pumping Tests page header (D-142); also hero slide 2 (D-145) | `hero/ea-v-notch.webp`                                           |
| `pic 3.jpg`                   | Hero slide 3 (D-145) + Equipment gallery (D-144)             | `hero/ea-casing-site.webp`                                       |
| `pic 8.jpg`                   | Ethiopian Airlines card cover (D-143)                        | `projects/ethiopian-airlines-pumping-test/cover.webp` (replaces) |
| `equpiment.jpg`               | Equipment gallery (D-144) + Projects carousel (D-164)        | `equipment/rig-and-casings.webp`                                 |
| `pic 2.jpg`                   | Equipment gallery (D-144) + Projects carousel (D-164)        | `equipment/engineers-on-pipes.webp`                              |
| `in ethiopian airlines 3.jpg` | Projects carousel only, last (D-164)                         | `projects/ethiopian-airlines-pumping-test/night.webp`            |

**Delete list — approved by the owner 2026-11-08 after seeing the photos (D-166):**

| File                                                                   | Why                                                                                                                                        |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `Choose … 2.jpg` and `Choose … 3.jpg`                                  | Low-resolution copies of `pic 3.jpg` and `pic 2.jpg`                                                                                       |
| `Choose … 5.jpg`                                                       | Low-resolution copy of `equpiment.jpg`                                                                                                     |
| `Choose … 1.jpg` (welding, dusk)                                       | Only 1280 px wide and there is no slot for it                                                                                              |
| `pic 1.jpg`                                                            | Almost the same frame as `pic 2.jpg`                                                                                                       |
| `pic 6.jpg`, `pic 7.jpg`                                               | Near-duplicates of `pic 5.jpg` from the same minute                                                                                        |
| `in ethiopian airlines.jpg`, `… 2.jpg`                                 | `… .jpg` is a twin of pic 5–7 (same minute, crouching instead of standing); `… 2.jpg` (plane over trailer) stays out: cover decided, D-143 |
| `in ethiopian airlines 4.jpg`                                          | Drilling mud spread across the ground; contradicts the Environment page                                                                    |
| `June 23 … constant test … 1.jpg`                                      | Phone-quality duplicate of the pic 8 scene; its "35 l per sec" is not a fact we show                                                       |
| All 4 `.mp4` files (101 MB)                                            | Videos aren't used (D-165)                                                                                                                 |
| `assets/images/hero/credocs-shoring.webp` + its 4 built files (1.1 MB) | Nothing on the site uses it                                                                                                                |

After the pick, `public/images/New Photos/` is empty and the folder is deleted (D-133).

## Copy (D-152, D-156, D-158) — approved by the owner 2026-11-08

Rules: plain words, short sentences, facts we can show, British spelling, no promise of a survey
or test on every job, no invented facts. Liyat's own words stay as they are (D-119): the About
statement, story, vision, mission and values. Only what changes is listed; everything else
stays.

### About (`about.ts`)

- **Story, new second paragraph** (the first is Liyat's, unchanged):

  > Since then we have drilled for embassies, an airline, a bank, a teaching hospital, factories
  > and property developers. Our wells range from 100 m at a salt works in Afdera to 600 m beneath
  > Addis Ababa. Our own crews run the rig, the pumping test and the pump installation, so a client
  > who gives us the whole job deals with one contractor and receives one set of records.

  Each claim is backed: the 12 projects; SD Salt 100 m and Chaka House 600 m; "our own teams"
  (Liyat's proposal and profile); the handover file (answer 5.1).

- **Vision:** "recognized" → "recognised" (D-156). Otherwise Liyat's words.
- **Safety link:** "See our environmental practice" → "See our safety and environmental practice".

### Equipment (`equipment.ts`)

- **Header title:** "Equipment and technologies" → **"Rigs, pumps and the crews who run them"**
- **Header intro:** → "We work with our own drilling rigs, compressors and test pumps, sourced
  from Indian and Turkish manufacturers." ("our own": Liyat's review draft says "We own the rigs")
- **Rigs section title:** "The equipment behind the drilling" → **"Rigs for deep and shallow wells"**
- **Rigs section text:**

  > Our rigs drill by mud rotary and DTH (down-the-hole hammer), so one crew can work through soft
  > ground and hard rock.
  >
  > They can drill up to 800 m. The deepest well we have completed so far is 600 m, at Chaka House
  > in Addis Ababa.
  >
  > Our drilling team builds the well. Separate pumping-test and electromechanical teams take it
  > from there.

  The 800 m vs 1,200 m question (C-37) is still open; the two lines agree once Liyat answers.

- **Fleet intro:** → "The main machines and tools we bring to a well site."
- **Fleet items:**
  - Air compressor → "An Atlas Copco XRVS high-pressure compressor, 32 bar, for DTH drilling and
    well development."
  - Crane and trucks → "A crane, trucks and pickups to move rigs, pipe and crews between sites."
  - Hammers and fishing tools → "DTH hammers for hard rock, and fishing tools to recover anything
    lost down the hole."
  - Test pumps → "Submersible test pumps from 35 to 200 HP, and a V-notch weir to measure the flow."
  - Drilling rigs, drill pipe and bits: unchanged.
- **Pumping-test crew items:**
  - Variable-discharge test pumps → "The crew can change the pumping rate and watch how the water
    level responds."
  - Pumping-test crane → "Lowers the test pump into the well and lifts it out again."
  - Generators → "Power the test pumps on site, wherever the well is."
- **Methods:**
  - Ground investigation → "When the client asks for a survey, its hydrogeological and
    geophysical findings decide where we drill."
  - Well construction → "Casing, screens and development follow the agreed design and what the
    ground shows during drilling."
  - Pumping tests → "We pump at measured rates and record how the water level falls and recovers."
  - Pump installation → "We size the pump to the water the client needs and, when a pumping test
    was part of the work, to the well's tested performance."
- **New line for tenders** (from Liyat's review), at the end of the page:
  > Need our equipment list for a tender? Ask us and we'll send it.
- **Safety link:** "See our environmental practice" → "See our safety and environmental practice".

### Safety & Environment (`environment.ts`, `site.ts`)

- **Menu label:** "Environment" → **"Safety & Environment"**. The link `/environment` stays.
- **Header eyebrow:** "Environment and safety" → "Safety & Environment"
- **Header title:** "Water worth protecting" → **"Safe crews, protected water"** (it now covers both
  halves of the page; it is also the browser-tab title)
- **Card "Site wells on evidence"** →
  **"Choosing where to drill"**: "When a client asks for a survey, its hydrogeological and
  geophysical findings guide where the well goes. A survey improves the odds of finding water. It
  never guarantees it."
- **Card "Understand the well's performance"** →
  **"Knowing what the well can give"**: "When a pumping test is part of the work, we record
  pumping rates, water levels and recovery. The results show how hard the well can be pumped and
  which pump suits it."

### British spelling (D-156)

`site.ts` description and footer: "specializing" → "specialising"; `services.ts`: "Organizations"
→ "Organisations"; `about.ts`: "recognized" → "recognised". A last search catches any others.

## To do (in this order once the plan is final)

1. Contact form subjects (D-139): `src/config/site.ts`.
2. New photos (D-141–D-144): resize, copy into `assets/images/`, `npm run images <paths>`, then
   the data files.
3. Home hero slider (D-145): a new component on `/styleguide`; the owner then decides.
4. Phone layouts: Equipment carousel on phones (D-146), Projects "Show all" (D-147), Home
   testimonials swipe row (D-148). Reuse `ui/carousel.tsx`; no new package.
5. Copy and names: Safety & Environment (D-152), client names (D-153), CREDOKS label (D-155),
   British spelling (D-156), new About and Equipment copy (D-158). The rewritten copy is shown
   to the owner first.
6. Image file names (D-157), together with step 2 so the images are built once.
7. Validate, check:design, build:static, browser at 375/768/1280, and the phone lengths again.
   Then `WORKFLOW.md` and a commit on the owner's word.

## After Liyat's filled-in review (2026-11-09)

`docs/Liyat_Website_Review CLAUDE.docx` is not a new review: it is Liyat's answers written into the
same table (yellow = what Liyat added). Decided with the owner the same day. These change D-159,
D-161 and D-162.

| #     | Topic                   | Decision                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| D-171 | Registration (#4)       | Built 2026-11-09: a "Registration" card under "Company at a glance" on About (not a headline): Grade One Water Well Drilling Contractor, licence WWDC/1/227, TIN 0077049107. Liyat supplied it, so D-161 is met. Liyat's own wording is used as written, including the issuing body "Ethiopian Construction Authority" (owner, 2026-11-09: use it). No "valid to" date                                                                                                                                                           |
| D-172 | Project years (#5)      | Show Liyat's years on the cards, labelled "Year" (we don't know if it is the start or the end): Ovid 2024, British Embassy 2026, Chaka House 2022, Tsedey Bank 2025, SD Salt 2022, Yekatit 12 2024, Belayneh Kinde 2026, Entoto 2023, CREDOKS 2025, Arada 2026. Ethiopian Airlines and Belgian Embassy have none yet: ask. Replaces D-162                                                                                                                                                                                        |
| D-173 | Testimonials (#1)       | Liyat sent four contacts (Yekatit 12, Tsedey Bank, Belgian Embassy, Ovid) with phones and emails. None of it goes on the site. The owner asks Liyat to get written, approved quotes from them. D-138 stands (samples stay until real quotes arrive; they block launch)                                                                                                                                                                                                                                                           |
| D-174 | Partners (D-159 met)    | Show Milto Engineering PLC (miltoengineering.com: Grade One water-resources consultancy, since 2021) and Husky Engineering PLC as "Partners for groundwater investigation", logos side by side, in a small section on About after the story, apart from the clients row. Liyat's logos are in `public/images/`. Husky's file is only 200 × 200 px and will look soft: ask Liyat for a better one. Milto's has wide white margins, so it is cropped. The site says nothing more about what they do than Liyat's own line          |
| D-175 | Email (#3)              | The domain `liyatconstruction.com` is already bought. The owner asks Liyat to choose info@ or hello@; the chosen address goes on the website (replaces D-160). Free: email forwarding to liyatconstruction@gmail.com (Cloudflare Email Routing, or the registrar's own forwarding if it has one), and Gmail's "Send mail as" so replies go out from the new address. Mail arrives in the same Gmail inbox. Until Liyat chooses and forwarding works, the Gmail address stays on the site. Then update the Web3Forms inbox (C-25) |
| D-176 | Belgian Embassy photo   | The illustrative photo stays (D-140). Tell Liyat in the meeting; ask for a real photo                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| D-177 | Chaka House (#11)       | Client: Palace Administration / Etoile GC PLC, as Liyat wrote it. Arada location and Belayneh Kinde depth are still unanswered: ask                                                                                                                                                                                                                                                                                                                                                                                              |
| D-178 | CREDOKS card text (#12) | "Water-well drilling inside a 14 m excavation, with rigs lowered by heavy crane." Their slogan "Nothing impossible" is not used (an unprovable claim; the site has "Know better. Drill better."). Label and order stay (D-155)                                                                                                                                                                                                                                                                                                   |
| D-179 | About copy              | Our version, built on Liyat's draft. Out: "when the firm had grown past a single rig and a single crew" (a reason nobody gave us). In, if Liyat insists after the meeting. Out: "Surveys before we drill" (D-152 stands). In: "we do not guarantee a specific discharge" on the Environment page. Text below                                                                                                                                                                                                                     |

**About "Who we are" (D-179) — built differently:** the About story already opens with Liyat's own first paragraph (founded 2019, renamed May 2022) and our second paragraph, so the extra sentence below is not added; it would repeat them. Their clause "grown past a single rig and a single crew" is not used.

> Liyat Construction PLC is a groundwater development and water-well contractor based in Addis Ababa.
> We started in 2019 as Wondwossen Water Well Drilling Contractor and became Liyat Construction PLC
> in May 2022.

The second paragraph stays as already approved ("Since then we have drilled for embassies…"). The
registration box and the partners section come from D-171 and D-174; the figures list stays 7+ years,
50+ wells, 600 m (and 12,000 m+ on Equipment).

## To ask Liyat

0. New from the filled-in review (D-172, D-174, D-171): the year for Ethiopian Airlines and the
   Belgian Embassy; a sharper Husky Engineering logo and its website, and permission to name Milto
   and Husky; approved quotes from the four contacts they listed; which public email they want,
   info@ or hello@liyatconstruction.com (D-175).
1. Real client quotes: name, job title, company and permission to publish (C-12, D-138).
2. A photo of the Belgian Embassy well (C-36, D-140).
3. CIRHT, ET Mineral Development and Hosea Trading House: which project did Liyat do for each?
   If none can be shown, may we remove the logo? (D-150)
4. Milto Engineering PLC: should the site mention working with them, and may we name them? (D-159)
5. Contractor category and grade, licence number and TIN (D-161). Show on About only if they
   give them and agree.
6. Existing asks that are still open (from `MEETING_QUESTIONS.md`): the rig depth difference
   (C-37), the Belayneh Kinde depth and work, where Arada Luxury Mall is (C-36), the Web3Forms
   key for liyatconstruction@gmail.com (C-25).

## To tell Liyat in the meeting

Where we didn't follow their review, and why. Their review was written with an AI, and some of
its points go against what Liyat told us themselves.

| Their review asked                                | What we did                                                         | Why                                                                                                                                                                                     |
| ------------------------------------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Remove the sample testimonials (#1)               | Kept until real quotes arrive                                       | The section needs real quotes; please send 2–3 (D-138)                                                                                                                                  |
| Short form subjects like "New well drilling" (#2) | Removed the two legal subjects; kept the six official service names | The six names are Liyat's own (their service list and phone call); the form matches the service pages (D-139)                                                                           |
| Real photo or no photo for Belgian Embassy (#7)   | Kept the photo marked "Illustrative"                                | Until Liyat sends a real one (D-140)                                                                                                                                                    |
| Add a team section with 5 named roles (#13)       | No team section                                                     | Liyat's owner said no names, in writing (answer 2.1) and to the owner in person (D-122, D-151)                                                                                          |
| "Surveys before we drill" (#15)                   | A heading that doesn't promise it                                   | Liyat surveys only when the client asks; Liyat told us not to promise it (D-117, D-152)                                                                                                 |
| Their new About and Equipment text (Sections 2–3) | Rewritten, using their ideas                                        | Their AI's text had blanks, an invented reason for the 2022 rename, a promise to test every well, and equipment not on Liyat's list (mud pump, water tanker). We kept the facts (D-158) |
| Add Kidanemihiret Church to the clients (#9)      | Kept on its project card only                                       | The clients row shows logos only, and the church has none (D-154)                                                                                                                       |
| Set up info@liyatconstruction.com (#3)            | Keep liyatconstruction@gmail.com                                    | The address was agreed with Liyat (D-160)                                                                                                                                               |
| Show licence, grade and TIN (#4)                  | Only if Liyat supplies them                                         | We ask; nothing shown until then (D-161)                                                                                                                                                |
| Add a year to every project (#5)                  | Years from their answers; two still missing                         | Replaces D-162: they sent the years (D-172)                                                                                                                                             |
| "Grown past a single rig and a single crew"       | Left out; we say it plainly and add it back if they insist          | Nobody told us the reason for the 2022 rename (D-179)                                                                                                                                   |
| Their slogan "Nothing impossible" on CREDOKS      | Plain fact: drilling inside a 14 m excavation                       | An unprovable claim; the fact is stronger (D-178)                                                                                                                                       |
| Belgian Embassy photo                             | Illustrative photo stays                                            | We have no real one: ask (D-176)                                                                                                                                                        |
| Testimonial contacts with phones and emails       | Not published                                                       | Private details; we need written, approved quotes (D-173)                                                                                                                               |
| Show yield, water level and drawdown (#6)         | Only the Ethiopian Airlines yield                                   | Liyat called a yield figure "not important", and records may not exist per project (D-163)                                                                                              |

## Still to decide

- All 20 items in Liyat's review have a decision; the delete list and the copy are approved.
- **Only open item:** whether the finished hero slider ships. The owner decides after seeing it in
  the browser (D-145).
