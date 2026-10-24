import { cn, pick } from '@/lib/utils';

const aligns = {
  start: 'items-start',
  center: 'items-center',
} as const satisfies Record<string, string>;

export type Align = keyof typeof aligns;

interface EyebrowProps {
  children: React.ReactNode;
  align?: Align;
  className?: string;
}

/** Small uppercase label above a heading, preceded by the rule. */
export function Eyebrow({ children, align = 'start', className }: EyebrowProps) {
  return (
    <div className={cn('flex flex-col gap-3', pick(aligns, align), className)}>
      <p className="text-eyebrow text-brand on-dark:text-white uppercase">{children}</p>
    </div>
  );
}
