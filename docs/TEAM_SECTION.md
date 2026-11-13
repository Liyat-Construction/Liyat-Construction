# Team section (About): build spec for T11

Decided 2026-11-13 (owner, D-194). **Status: documented, not built.** Build it when Liyat's
answer to R8 (client item C-41) arrives. This file is everything a new session needs; the owner
does not have to share the screenshots again.

Reference pictures (another consultancy's site; **look only, copy nothing from them**):
[`reference/team-reference-header.png`](reference/team-reference-header.png) (heading, intro, four
figures, start of the table) and [`reference/team-reference-table.png`](reference/team-reference-table.png)
(the full table and its footnote). Every number, discipline and sentence in those pictures belongs
to that company. Ours come only from Liyat.

## What the owner wants

A **facts-first team section**, not a photo-and-name grid: no staff photos, no staff names
(owner, meeting 2026-11-10; Liyat: "no need of names"). It shows how strong the team is with
figures and a table. Calm and white, with hairlines and no cards, in the spirit of the partner row.

## Where it goes

`/about`, as its own section **after the values and commitments section (`values`) and before the
clients section (`about-clients`, "Clients we work for")** (owner's choice, 2026-11-13): the visitor has
just read what the company stands for, then sees the people who deliver it, then the clients. Server
component, composed in `src/app/about/page.tsx`; the page imports the data (only `src/app` imports
data) and passes it as props. The Home "Expert team" feature line stays (D-122).

## Anatomy, top to bottom

1. **Header, two columns from `lg`.** Left: eyebrow and big heading (two lines). Right: one intro
   paragraph in muted ink. Stacked on phones and tablets. Reuse `SectionHeading` if it can take an
   aside; otherwise add a variant `split`, never a one-off class.
2. **Figure row: four figures** separated by hairline vertical dividers, with a thick dark rule
   above. Each: a large figure (a small raised `+` in the accent colour when the number means "at
   least"), and a short label under it (up to two lines). 4 across from `md`, 2 by 2 on phones.
   Reuse `Stat` and `ProofStrip` figures; add a `dividers` variant if the dividers need new styling.
3. **Discipline table.** Thick dark rule above, then a header row in small spaced capitals, then one
   row per discipline with hairlines between rows. Four columns:
   - **Discipline** (bold, dark),
   - **Staff** (a number, brand colour, bold),
   - **Qualifications** (plain text, for example "1 Ph.D., 6 M.Sc., 1 B.Sc."),
   - **Average experience**: a short horizontal bar (brand colour fading to the accent) and the
     number in words ("16 years"). Bar length = years divided by the scale.
4. **Footnote** under the table, small and muted: how the bars are scaled, plus one line on what
   else Liyat can show (for example CVs on request), only if Liyat confirms that offer.

## Phones (375 px)

No sideways scroll and no squeezed four-column table. Each discipline becomes a stacked block:
the discipline name on top, then three short lines ("Staff 8", "Qualifications ...", then the bar
with its years). A hairline between blocks. Figures 2 by 2. Header stacked.

## Build rules (this project)

- **New component, with variants:** `src/components/ui/discipline-table.tsx` (table and bars) and
  a section `src/components/sections/team-facts.tsx`. A new look is a variant, never a one-off
  class. Add both to `/styleguide` (development only since T15).
- **Colours and sizes only from `src/styles/tokens.css`.** The bar gradient (brand to accent)
  becomes a token there. The bar width is data, so set it with a CSS variable or a `style` width in
  percent, and make sure `npm run check:design` passes; never hard-code pixel widths.
- **Bar scale comes from the data, never from looks:** scale = the largest "average experience" in
  the table, rounded up to the next 5 years. The footnote states the real scale ("Bars are drawn
  to a N-year scale"). The reference used 35 years; ours is whatever Liyat's numbers give.
- **Accessibility:** a real `<table>` from `md` up (`<th scope>`), stacked blocks on phones; every
  bar has the years as text beside it (the bar itself is decoration, `aria-hidden`).
- **Renders nothing when `TEAM_DISCIPLINES` is empty** (same as Testimonials), so the site is safe
  before the data arrives.

## Data

`src/data/team.ts`, types in `src/types/content.ts`:

```ts
export interface TeamDiscipline {
  discipline: string; // Liyat's own disciplines, not the reference's
  staff: number;
  qualifications: string; // e.g. "1 Ph.D., 6 M.Sc., 1 B.Sc."
  averageYears: number;
}
// TEAM_SECTION: SectionCopy (eyebrow, title, intro)
// TEAM_FIGURES: StatData[] (up to four figures)
// TEAM_DISCIPLINES: TeamDiscipline[]
// TEAM_FOOTNOTE: string (without the scale; the scale is added from the data)
```

## What we need from Liyat (R8 / C-41), exactly

Ask in this order, one line each, with a "not sure" option. Only answers he gives are published.

1. How many permanent and associate professionals work for Liyat in total?
2. What are the disciplines (for example hydrogeology, drilling, geophysics, civil, electrical,
   finance)? For each: how many staff, which qualifications (how many Ph.D., M.Sc., B.Sc.,
   diploma), and the average years of experience.
3. How many years of experience does the most senior person have?
4. Does Liyat call in outside or on-call experts? In which fields, and how many?
5. May we say that CVs of the proposed experts come with a technical proposal?

The figures are chosen from these answers (total staff, average experience, the most senior
person's years, on-call experts, in this order, if they exist). If he answers fewer than four,
show fewer; never pad.

## Wording rules

- Polite, confident, short, exact. No invented numbers, no rounding up, no "leading" or "best".
- Never promise what Liyat does not do (survey and pumping test only when the client asks, D-117).
- The reference heading and intro are theirs. Ours are drafted from Liyat's real facts and marked
  `// PLACEHOLDER(C-41)` until the owner approves the wording.
- The founder line stays as About says (Wondwossen Ayalew, hydrogeologist, 20+ years of drilling).

## Steps for the session that builds it

1. Check `docs/CLIENT_ANSWERS.md` for the R8 answer; if it is not there, stop and tell the owner.
2. Write `src/data/team.ts` and the types from the answer only; wording as PLACEHOLDER(C-41).
3. Build `discipline-table` and `team-facts`; add the `dividers` or `split` variants only if reuse
   fails; add them to `/styleguide`.
4. Compose in `src/app/about/page.tsx` between `values` and `about-clients`.
5. Prettier (`--end-of-line auto`), `npm run validate`, `check:design`, `build:static`; measure at
   375, 768 and 1280 px by script (no sideways scroll; table stacked on phones; bars not longer than
   their cell). One look per width at most.
6. Tick T11 in `docs/DIRECTION.md`, add the handoff and update "You are here" in `WORKFLOW.md`;
   clear C-41 when the owner approves the wording.
