import Image from 'next/image';
import type { ImageAsset, ImageFocus } from '@/types/content';
import { cn, pick } from '@/lib/utils';

// PROJECT.md §9
const ratios = {
  wide: 'aspect-wide',
  card: 'aspect-card',
  portrait: 'aspect-portrait',
  /** Fills a parent that sets its size (full-bleed backdrop) */
  fill: 'size-full',
} as const satisfies Record<string, string>;

// How wide the photo is in the layout. Never write `sizes` by hand.
const widths = {
  full: '100vw',
  half: '(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw',
  third: '(min-width: 1280px) 400px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
} as const satisfies Record<string, string>;

const focuses = {
  center: 'object-center',
  top: 'object-top',
  upper: 'object-(--focus-upper)',
  right: 'object-right',
  'upper-left': 'object-(--focus-upper-left)',
  'left-third': 'object-(--focus-left-third)',
  'mid-left': 'object-(--focus-mid-left)',
  'right-third': 'object-(--focus-right-third)',
} as const satisfies Record<ImageFocus, string>;

const zooms = {
  left: 'max-md:origin-(--zoom-left-origin) max-md:scale-(--zoom-in-scale)',
} as const satisfies Record<NonNullable<ImageAsset['zoom']>, string>;

// The same, from lg (Tailwind needs the full class names written out)
const focusesWide = {
  center: 'lg:object-center',
  top: 'lg:object-top',
  upper: 'lg:object-(--focus-upper)',
  right: 'lg:object-right',
  'upper-left': 'lg:object-(--focus-upper-left)',
  'left-third': 'lg:object-(--focus-left-third)',
  'mid-left': 'lg:object-(--focus-mid-left)',
  'right-third': 'lg:object-(--focus-right-third)',
} as const satisfies Record<ImageFocus, string>;

interface PhotoProps {
  image: ImageAsset;
  ratio?: keyof typeof ratios;
  width?: keyof typeof widths;
  /** Only the page's LCP image */
  priority?: boolean;
  /** Rounded corners; off for full-bleed and for photos inside a Card */
  rounded?: boolean;
  /** The photo settles slowly into place once (full-bleed hero only) */
  drift?: boolean;
  className?: string;
}

/**
 * A photograph at a fixed ratio (no layout shift), in natural color (D-27).
 * Inside a linked Card it zooms slightly on hover.
 */
export function Photo({
  image,
  ratio = 'card',
  width = 'full',
  priority = false,
  rounded = false,
  drift = false,
  className,
}: PhotoProps) {
  return (
    <div
      className={cn(
        'bg-stone relative overflow-hidden',
        pick(ratios, ratio),
        rounded && 'rounded-card',
        className
      )}
    >
      <Image
        src={image.url}
        alt={image.alt}
        fill
        sizes={pick(widths, width)}
        // Next 16 only preloads; the LCP photo also needs a high fetch priority (P15)
        preload={priority}
        fetchPriority={priority ? 'high' : undefined}
        className={cn(
          'ease-standard object-cover transition-transform duration-(--duration-base) group-hover/card:scale-105',
          pick(focuses, image.focus ?? 'center'),
          image.focusWide && pick(focusesWide, image.focusWide),
          image.zoom && pick(zooms, image.zoom),
          drift && 'animate-drift'
        )}
      />
    </div>
  );
}
