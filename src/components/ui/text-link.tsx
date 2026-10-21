import { cn } from '@/lib/utils';
import { Icon } from './icon';
import { SmartLink } from './smart-link';

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  /** Trailing arrow, for a link that ends a block ("Explore all projects") */
  arrow?: boolean;
  className?: string;
}

/** Inline link inside prose or after a block. Always underlined, so color is never the only cue. */
export function TextLink({ href, children, arrow = false, className }: TextLinkProps) {
  return (
    <SmartLink
      href={href}
      className={cn(
        'group/link text-brand on-dark:text-white font-medium underline decoration-1 underline-offset-4 hover:decoration-2',
        arrow && 'inline-flex items-center gap-1.5',
        className
      )}
    >
      {children}
      {arrow && (
        <Icon
          name="arrow-right"
          size="sm"
          className="ease-standard transition-transform duration-(--duration-fast) group-hover/link:translate-x-0.5"
        />
      )}
    </SmartLink>
  );
}
