import type { StaffGroup } from '@/types/content';
import { cn } from '@/lib/utils';

interface StaffTableProps {
  /** Visually hidden table name for screen readers */
  caption: string;
  groups: StaffGroup[];
  total?: { label: string; staff: string };
  /** Small muted line under the table */
  footnote?: string;
  className?: string;
}

const headCell = 'text-eyebrow text-ink-muted py-3 text-start uppercase';

const percent = (value: number, scale: number) => `${Math.round((value / scale) * 100)}%`;

/**
 * The team by role (T11), after the owner's reference: a thick Ink rule, small spaced-capital
 * headings, hairlines between rows, one tbody per department. Each role shows the training it
 * requires under its name and a bar of its headcount beside the number; a range (5–7) draws its
 * upper part lighter. The bar scale is the largest headcount in the data, never a look. One real
 * two-column <table> at every width, so it never scrolls sideways. Renders nothing without groups.
 */
export function StaffTable({ caption, groups, total, footnote, className }: StaffTableProps) {
  if (groups.length === 0) return;
  const scale = Math.max(...groups.flatMap((g) => g.roles.map((r) => r.max ?? r.staff)));
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <table className="border-ink w-full border-t-(length:--rule-width)">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-line border-b">
            <th scope="col" className={cn(headCell, 'pe-4')}>
              Role and training
            </th>
            <th scope="col" className={cn(headCell, 'w-32 md:w-64')}>
              Staff
            </th>
          </tr>
        </thead>
        {groups.map((group) => (
          <tbody key={group.title}>
            <tr className="border-line border-b">
              <th
                scope="rowgroup"
                colSpan={2}
                className="text-eyebrow text-brand pt-8 pb-3 text-start uppercase"
              >
                {group.title}
                <span className="text-ink-muted"> · {group.staff}</span>
              </th>
            </tr>
            {group.roles.map((role) => (
              <tr key={role.role} className="border-line border-b">
                <th scope="row" className="py-4 pe-4 text-start align-top font-normal">
                  <span className="text-ink block font-semibold">{role.role}</span>
                  <span className="text-small text-ink-muted mt-1 block">{role.training}</span>
                </th>
                <td className="py-4 align-middle">
                  <span className="flex items-center gap-3">
                    <span aria-hidden="true" className="flex h-2 w-16 md:w-44">
                      <span
                        className="bg-brand block h-full"
                        style={{ width: percent(role.staff, scale) }}
                      />
                      {role.max && (
                        <span
                          className="bg-brand-light block h-full"
                          style={{ width: percent(role.max - role.staff, scale) }}
                        />
                      )}
                    </span>
                    <span className="text-brand font-bold tabular-nums">
                      {role.max ? `${role.staff}–${role.max}` : role.staff}
                    </span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        ))}
        {total && (
          <tfoot>
            <tr className="border-ink border-b-(length:--rule-width)">
              <th scope="row" className="text-ink py-4 pe-4 text-start font-semibold">
                {total.label}
              </th>
              <td className="text-brand py-4 font-bold tabular-nums">{total.staff}</td>
            </tr>
          </tfoot>
        )}
      </table>
      {footnote && <p className="text-small text-ink-muted max-w-prose">{footnote}</p>}
    </div>
  );
}
