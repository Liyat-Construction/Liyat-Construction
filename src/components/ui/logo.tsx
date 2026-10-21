import Image from 'next/image';
import { cn, pick } from '@/lib/utils';

// PLACEHOLDER(C-01): the 446 × 256 PNG stands in until P3 delivers the vector logo.
// Its counters are opaque white, so it cannot be recolored: the white version is
// the color logo on a white plate until then (D-38).
const variants = {
  color: '',
  white: 'rounded-control bg-white p-1.5',
  /** The header: color on white, and on its white plate while floating over a photo */
  adaptive: 'rounded-control over-photo:bg-white p-1.5',
} as const satisfies Record<string, string>;

interface LogoProps {
  /** `color` on white and stone; `white` on Ink, Green or a dark photo (Brand §3) */
  variant?: keyof typeof variants;
  /** The company name, or "" when the name is written next to the logo */
  alt: string;
  /** Load at once: the header logo is above the fold on every page */
  eager?: boolean;
  className?: string;
}

/** The Liyat logo, never below 80 px wide (Brand §3). P3 swaps the artwork here only. */
export function Logo({ variant = 'color', alt, eager = false, className }: LogoProps) {
  return (
    <span className={cn('inline-flex shrink-0', pick(variants, variant), className)}>
      {/* One prepared size: unoptimized keeps the loader from looking for widths */}
      <Image
        src="/logo.png"
        alt={alt}
        width={84}
        height={48}
        unoptimized
        loading={eager ? 'eager' : 'lazy'}
        className="h-12 w-auto"
      />
    </span>
  );
}
