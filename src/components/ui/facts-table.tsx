import { cn } from '@/lib/utils';

export interface FactsRow {
  label: string;
  value: React.ReactNode;
  /** Water data (yields, water levels) in Water Blue (Brand §4) */
  water?: boolean;
}

interface FactsTableProps {
  rows: FactsRow[];
  className?: string;
}

/** Key–value technical data (projects, equipment), striped like a data sheet. */
export function FactsTable({ rows, className }: FactsTableProps) {
  if (rows.length === 0) return;
  return (
    <dl className={cn('border-line text-small border-y', className)}>
      {rows.map((row) => (
        <div key={row.label} className="odd:bg-brand-tint grid grid-cols-5 gap-4 px-3 py-2.5">
          <dt className="text-ink-muted col-span-2 font-medium">{row.label}</dt>
          <dd className={cn('col-span-3 tabular-nums', row.water ? 'text-water' : 'text-ink')}>
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
