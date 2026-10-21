import { cn, pick } from '@/lib/utils';

// On dark surfaces every tone turns white: Green and Water Blue fail on Ink.
const tones = {
  ink: 'text-ink',
  brand: 'text-brand',
  water: 'text-water',
} as const satisfies Record<string, string>;

interface StatProps {
  value: string;
  unit?: string;
  label: string;
  /** `water` for yields, water levels and flow only (Brand §4) */
  tone?: keyof typeof tones;
  className?: string;
}

/** Big tabular figure + label. Place several inside a <dl>. */
export function Stat({ value, unit, label, tone = 'ink', className }: StatProps) {
  return (
    <div className={cn('flex flex-col-reverse gap-2', className)}>
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
