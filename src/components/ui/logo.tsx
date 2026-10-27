import Image from 'next/image';
import { cn, pick } from '@/lib/utils';

// Liyat has no vector logo (owner, 2026-10-27), so the 446 × 256 PNG is the logo
// (public/logo.png for structured data; a 12 KB WebP copy for the page).
// Its counters are opaque white, so it cannot be recolored: the white version is
// the color logo on a white plate (D-38).
const variants = {
  color: '',
  white: 'rounded-control bg-white p-1.5',
  /** The header: color on white, and on its white plate while floating over a photo */
  adaptive: 'rounded-control over-photo:bg-white p-1.5',
} as const satisfies Record<string, string>;

interface LogoProps {
  /** `color` on white and stone; `white` on Ink, Green or a dark photo (PROJECT.md §5) */
  variant?: keyof typeof variants;
  /** The company name, or "" when the name is written next to the logo */
  alt: string;
  /** Load at once: the header logo is above the fold on every page */
  eager?: boolean;
  className?: string;
}

/** The Liyat logo, never below 80 px wide (PROJECT.md §5). P3 swaps the artwork here only. */
export function Logo({ variant = 'color', alt, eager = false, className }: LogoProps) {
  return (
    <span className={cn('inline-flex shrink-0', pick(variants, variant), className)}>
      {/* One prepared size, 3× the layout width (`npm run images`, assets/images/brand) */}
      <Image
        src="/images/brand/logo.webp"
        alt={alt}
        width={84}
        height={48}
        loading={eager ? 'eager' : 'lazy'}
        className="h-12 w-auto"
      />
    </span>
  );
}
