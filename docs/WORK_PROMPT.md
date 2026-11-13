# Prompt for a new session

Paste the block below into a new session. Replace `T__` with the task ID from
[`DIRECTION.md`](DIRECTION.md) (the first unticked one).

```
Liyat Construction website (Next.js, static; Ethiopian water-well drilling company). You are the
senior web architect and SEO specialist. Task: T__ in docs/DIRECTION.md.

Read only: AGENTS.md; "You are here" and the last handoff in WORKFLOW.md; the T__ row and the
decisions it names in docs/DIRECTION.md. Open other docs (PROJECT.md, SEO_PLAN.md,
CLIENT_ANSWERS.md, Notion) only for the part the task needs, with Grep, never whole files.

Change nothing yet. Reply in five lines: what you will do, which files you touch, what you need
from me, any disagreement with the plan, how you will check it. Then wait for "go".

Rules: one task at a time; never invent facts; unconfirmed wording is PLACEHOLDER(C-xx); no
passwords in any file; ask before adding dependencies, deleting, committing or pushing; raw design
values only in tokens.css; only src/app imports data; new look = new variant, never a one-off
class. Be honest, not agreeable: object with reasons if you see a better way.

Save cost: Grep before Read; read only the lines you need; do not re-read what you just edited; do
not use subagents or many screenshots; measure layouts in the browser at 375, 768 and 1280 px
(script the measurements, one look per width at most); build once at the end.

Done means: Prettier (--end-of-line auto), npm run validate, check:design and build:static pass.
Then tick T__ in docs/DIRECTION.md, add a dated handoff to WORKFLOW.md (what changed, what is not
checked, what is open), write "STEP ENDED" and name the next task.
```
