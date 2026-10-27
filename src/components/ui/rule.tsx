import { cn } from '@/lib/utils';

interface RuleProps {
  className?: string;
}

/** The signature line: a short Liyat Green stroke; Green Light on dark surfaces (D-70). Decorative. */
export function Rule({ className }: RuleProps) {
  return (
    <span
      aria-hidden="true"
      className={cn('bg-brand on-dark:bg-brand-light block h-(--rule-width) w-12', className)}
    />
  );
}
