import Image from 'next/image';
import type { ImageAsset, ImageFocus } from '@/types/content';
import { cn, pick } from '@/lib/utils';

// Engineering §5. The hero crops to 4:5 on phones so the subject stays large.
const ratios = {
  hero: 'aspect-hero-mobile md:aspect-hero',
  wide: 'aspect-wide',
  card: 'aspect-card',
  portrait: 'aspect-portrait',
  square: 'aspect-square',
} as const satisfies Record<string, string>;

// How wide the photo is in the layout. Never write `sizes` by hand.
const widths = {
  full: '100vw',
  /** 7 of 12 columns from lg, edge to edge (the home hero) */
  major: '(min-width: 1024px) 60vw, 100vw',
  half: '(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw',
  third: '(min-width: 1280px) 400px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
} as const satisfies Record<string, string>;

const focuses = {
  center: 'object-center',
  top: 'object-top',
  bottom: 'object-bottom',
  left: 'object-left',
  right: 'object-right',
} as const satisfies Record<ImageFocus, string>;

interface PhotoProps {
  image: ImageAsset;
  ratio?: keyof typeof ratios;
  width?: keyof typeof widths;
  /** Only the page's LCP image */
  priority?: boolean;
  /** Rounded corners; off for full-bleed and for photos inside a Card */
  rounded?: boolean;
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
        priority={priority}
        className={cn(
          'ease-standard object-cover transition-transform duration-(--duration-base) group-hover/card:scale-105',
          pick(focuses, image.focus ?? 'center')
        )}
      />
    </div>
  );
}
