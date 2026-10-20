/**
 * Premium Button Component
 * Template button (replaced by ui/button in P4)
 */

import { cn } from '@/lib/utils';
import Link from 'next/link';

interface PremiumButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  external?: boolean;
}

export function PremiumButton({
  href,
  children,
  variant = 'primary',
  className,
  external = false,
}: PremiumButtonProps) {
  const baseStyles = cn(
    'group relative inline-flex items-center justify-center',
    'overflow-hidden rounded-lg px-8 py-4',
    'text-base font-semibold',
    'transition-all duration-300',
    'focus:outline-none focus:ring-2 focus:ring-brand-accent/50',
    variant === 'primary' && [
      'border border-transparent bg-brand-primary text-white',
      'hover:border-brand-primary hover:bg-brand-primary-dark hover:text-white',
      'hover:scale-[1.02]',
    ],
    variant === 'secondary' && [
      'border border-white/30 bg-white/5 text-white',
      'hover:border-brand-accent/70 hover:text-brand-accent hover:bg-brand-accent/10',
    ],
    className
  );

  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <Link href={href} className={baseStyles} {...externalProps}>
      {/* Content */}
      <span className="relative flex items-center gap-2">
        {children}
        {variant === 'primary' && (
          <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </Link>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
