# Team section (About)

Built 2026-11-16 (T11), approved by the owner the same day. Facts only, no names or photos
(D-194, D-196). This note says what is there; the code is the source.

- **Where:** `/about#team`, after the values, before "Clients we work for".
- **Order:** heading and subheading (Liyat's words), four figures (37+ permanent staff, 22+
  technical and field staff, 3 complete site teams, 9 university-trained engineers and
  scientists), the three site teams as a picture, then the staff table by role with headcount bars.
- **Code:** data `src/data/team.ts`; components `sections/team-facts.tsx`, `ui/site-teams.tsx`,
  `ui/staff-table.tsx`, `ui/stat-row.tsx`; all on `/styleguide`.
- **Facts:** only from Liyat's staffing PDF (R8 in `CLIENT_ANSWERS.md`). The table names the
  training a role **requires**, never the degrees people hold. No years of experience were given.
- **If Liyat sends average years per field:** the bars can show years instead of people with a
  data change only.
