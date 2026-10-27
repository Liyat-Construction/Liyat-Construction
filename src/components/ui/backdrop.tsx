import type { ImageAsset } from '@/types/content';
import { cn, pick } from '@/lib/utils';
import { Fade } from './fade';
import { Photo } from './photo';

/*
 * hero: the home hero (D-81). The scrim is as light as contrast allows over
 * the brightest pixels behind its text (98th percentile, 4.5 : 1, measured on
 * the Afar photo): 60 % on phones, where the text sits over pale sand (needs
 * 58 %), 40 % from lg, over the mountains (needs 34 %). Slow one-time drift and
 * a top fade under the see-through header.
 * header: the inner-page PageHeader (D-62). One flat 65 % scrim for any photo:
 * white text on it reaches 4.95 : 1 even over pure white (62 % is the minimum),
 * so no per-photo measurement is needed. Text on it is full white (`on-photo:`).
 * caption: sits low over the brightest sand, where the hero scrim leaves it at 2.5 : 1,
 * so it carries its own 65 % Ink plate (the header scrim's guarantee) (P15).
 */
const scrims = {
  hero: 'bg-ink/60 lg:bg-ink/40',
  header: 'bg-ink/65',
} as const satisfies Record<string, string>;

interface BackdropProps {
  image: ImageAsset;
  variant?: keyof typeof scrims;
  /** Where and what the photo shows, in the corner (documentary caption) */
  caption?: string;
}

/**
 * Full-bleed photograph behind white text: natural color under a flat Ink
 * scrim (PROJECT.md §5, no wash). Fills its positioned parent; LCP image.
 */
export function Backdrop({ image, variant = 'hero', caption }: BackdropProps) {
  const hero = variant === 'hero';
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Photo image={image} ratio="fill" width="full" priority drift={hero} className="bg-ink" />
      <div aria-hidden="true" className={cn('absolute inset-0', pick(scrims, variant))} />
      {hero && <Fade />}
      {caption && (
        <p className="text-small right-gutter rounded-control bg-ink/65 absolute bottom-4 px-2 py-1 text-white max-sm:hidden">
          {caption}
        </p>
      )}
    </div>
  );
}
