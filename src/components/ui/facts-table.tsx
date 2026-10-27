import { cn } from '@/lib/utils';

export interface FactsRow {
  label: string;
  value: React.ReactNode;
  /** Water data (yields, water levels) in Water Blue (PROJECT.md §5) */
  water?: boolean;
}

interface FactsTableProps {
  rows: FactsRow[];
  className?: string;
}

/** Key–value technical data (projects, equipment), striped like a data sheet.
 *  Rows stack the label over the value in narrow containers (asides), so a
 *  long label can never crowd the value. */
export function FactsTable({ rows, className }: FactsTableProps) {
  if (rows.length === 0) return;
  return (
    <dl className={cn('border-line text-small @container border-y', className)}>
      {rows.map((row) => (
        <div
          key={row.label}
          className="odd:bg-brand-tint grid gap-x-4 gap-y-1 px-3 py-2.5 @sm:grid-cols-5"
        >
          <dt className="text-ink-muted font-medium @sm:col-span-2">{row.label}</dt>
          <dd className={cn('tabular-nums @sm:col-span-3', row.water ? 'text-water' : 'text-ink')}>
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
