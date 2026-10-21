import { cn, pick } from '@/lib/utils';
import { SmartLink } from './smart-link';

const paddings = {
  none: '',
  md: 'p-6',
  lg: 'p-8',
} as const satisfies Record<string, string>;

interface CardProps {
  children: React.ReactNode;
  as?: 'div' | 'article' | 'li';
  /** Makes the whole card one link; its Photo zooms and the border turns green on hover */
  href?: string;
  padding?: keyof typeof paddings;
  className?: string;
}

/**
 * White surface on the warm paper page (D-33), with a hairline border. Always light, even inside an ink or
 * brand section (data-on-light switches `on-dark:` styles back off).
 */
export function Card({ children, as: Root = 'div', href, padding = 'md', className }: CardProps) {
  const surface = cn(
    'bg-white text-ink border-line flex h-full flex-col overflow-hidden rounded-card border',
    pick(paddings, padding)
  );
  if (!href) {
    return (
      <Root data-on-light className={cn(surface, className)}>
        {children}
      </Root>
    );
  }
  return (
    <Root data-on-light className={cn('h-full', className)}>
      <SmartLink
        href={href}
        className={cn(
          surface,
          'group/card ease-standard hover:border-brand transition-colors duration-(--duration-fast)'
        )}
      >
        {children}
      </SmartLink>
    </Root>
  );
}
