import type { Stat as StatData } from '@/types/content';
import { cn, pick } from '@/lib/utils';
import { Stat } from './stat';

const variants = {
  plain: '',
  /** Thick Ink rule above, hairlines between the figures; paper sections only (team, T11) */
  ruled: 'border-ink border-t-(length:--rule-width) pt-8',
} as const satisfies Record<string, string>;

interface StatRowProps {
  figures: StatData[];
  variant?: keyof typeof variants;
  align?: 'start' | 'center';
  className?: string;
}

/**
 * A row of figures in one <dl>: three across from sm, otherwise two by two, four across from
 * lg (`ruled`: from md). Renders nothing when there are no figures.
 */
export function StatRow({ figures, variant = 'plain', align = 'start', className }: StatRowProps) {
  if (figures.length === 0) return;
  const ruled = variant === 'ruled';
  return (
    <dl
      className={cn(
        'grid',
        figures.length === 3
          ? 'gap-grid sm:grid-cols-3'
          : cn('grid-cols-2', ruled ? 'gap-y-8 md:grid-cols-4' : 'gap-grid lg:grid-cols-4'),
        pick(variants, variant),
        className
      )}
    >
      {figures.map((figure) => (
        <Stat
          key={figure.label}
          value={figure.value}
          unit={figure.unit}
          label={figure.label}
          tone={figure.water ? 'water' : 'ink'}
          align={align}
          className={
            ruled
              ? 'border-line pe-4 even:border-s even:ps-5 md:not-first:border-s md:not-first:ps-6'
              : undefined
          }
        />
      ))}
    </dl>
  );
}
