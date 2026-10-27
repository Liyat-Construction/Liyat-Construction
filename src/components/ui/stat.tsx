import { cn, pick } from '@/lib/utils';

// On dark surfaces every tone turns white: Green and Water Blue fail on Ink.
const tones = {
  ink: 'text-ink',
  water: 'text-water',
} as const satisfies Record<string, string>;

interface StatProps {
  value: string;
  unit?: string;
  label: string;
  /** `water` for yields, water levels and flow only (PROJECT.md §5) */
  tone?: keyof typeof tones;
  align?: 'start' | 'center';
  className?: string;
}

/**
 * Big tabular figure + label. Place several inside a <dl>. The figure stays at the
 * top of its cell (`justify-end` in a reversed column), so a row of figures lines
 * up even when one label wraps to two lines.
 */
export function Stat({ value, unit, label, tone = 'ink', align = 'start', className }: StatProps) {
  return (
    <div
      className={cn(
        'flex flex-col-reverse justify-end gap-2',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      <dt className="text-small text-ink-muted on-dark:text-white/80">{label}</dt>
      <dd
        className={cn(
          'font-heading text-figure on-dark:text-white tabular-nums',
          pick(tones, tone)
        )}
      >
        {value}
        {unit && <span className="text-h4 ms-1">{unit}</span>}
      </dd>
    </div>
  );
}
