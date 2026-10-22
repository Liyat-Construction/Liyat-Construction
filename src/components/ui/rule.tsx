import { cn, pick } from '@/lib/utils';

const lengths = {
  short: 'w-12',
  full: 'w-full',
} as const satisfies Record<string, string>;

interface RuleProps {
  length?: keyof typeof lengths;
  className?: string;
}

/** The signature line: Liyat Green; Green Light on dark surfaces (D-70). Decorative. */
export function Rule({ length = 'short', className }: RuleProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'bg-brand on-dark:bg-brand-light block h-(--rule-width)',
        pick(lengths, length),
        className
      )}
    />
  );
}
