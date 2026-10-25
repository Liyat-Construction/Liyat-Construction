import { cn, pick } from '@/lib/utils';

const aligns = {
  start: 'items-start',
  center: 'items-center',
} as const satisfies Record<string, string>;

export type Align = keyof typeof aligns;

const tones = {
  default: 'text-brand on-dark:text-white',
  accent: 'text-brand on-dark:text-brand-light on-photo:text-white',
} as const satisfies Record<string, string>;

export type EyebrowTone = keyof typeof tones;

interface EyebrowProps {
  children: React.ReactNode;
  align?: Align;
  tone?: EyebrowTone;
  className?: string;
}

/** Small uppercase label above a heading, preceded by the rule. */
export function Eyebrow({ children, align = 'start', tone = 'default', className }: EyebrowProps) {
  return (
    <div className={cn('flex flex-col gap-3', pick(aligns, align), className)}>
      <p className={cn('text-eyebrow uppercase', pick(tones, tone))}>{children}</p>
    </div>
  );
}
