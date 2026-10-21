import { cn } from '@/lib/utils';
import { Rule } from './rule';

interface StatementProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A short company statement set large under the rule. It is the company speaking,
 * not a quotation: no quotation marks and no attribution (Brand §8).
 */
export function Statement({ children, className }: StatementProps) {
  return (
    <div className={cn('flex flex-col gap-5', className)}>
      <Rule />
      <p className="font-heading text-h3 text-balance">{children}</p>
    </div>
  );
}
