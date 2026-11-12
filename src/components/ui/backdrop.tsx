import type { ImageAsset } from '@/types/content';
import { cn, pick } from '@/lib/utils';
import { Fade } from './fade';
import { Photo } from './photo';

/*
 * hero: the home hero (D-81). The scrim is as light as contrast allows over
 * the brightest pixels behind its text (98th percentile, 4.5 : 1, measured on
 * the Afar photo): 60 % on phones, where the text sits over pale sand (needs
 * 58 %), 40 % from lg, over the mountains (needs 34 %). A top fade under the
 * see-through header.
 * hero-bright: a hero slide with bright sky or water behind the text (D-145). Liyat's
 * Ethiopian Airlines photos need 50–60 % at every width (measured the same way, 2026-11-08/09).
 * header: the inner-page PageHeader (D-62). One flat 65 % scrim for any photo:
 * white text on it reaches 4.95 : 1 even over pure white (62 % is the minimum),
 * so no per-photo measurement is needed. Text on it is full white (`on-photo:`).
 */
const scrims = {
  hero: 'bg-ink/60 lg:bg-ink/40',
  'hero-bright': 'bg-ink/60',
  header: 'bg-ink/65',
} as const satisfies Record<string, string>;

interface BackdropProps {
  image: ImageAsset;
  variant?: keyof typeof scrims;
  /** The page's LCP image (default). A later hero slide loads without priority */
  priority?: boolean;
  /** The photo settles slowly into place once (a single hero photo; the slider zooms instead) */
  drift?: boolean;
  /** The Ink fade under the see-through header; hero only. A slider draws one fade over all slides */
  fade?: boolean;
}

/**
 * Full-bleed photograph behind white text: natural color under a flat Ink
 * scrim (PROJECT.md §5, no wash). Fills its positioned parent; LCP image.
 * No caption: the owner removed the hero's corner caption (2026-11-09).
 */
export function Backdrop({
  image,
  variant = 'hero',
  priority = true,
  drift = false,
  fade = variant === 'hero',
}: BackdropProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Photo
        image={image}
        ratio="fill"
        width="full"
        priority={priority}
        drift={drift}
        className="bg-ink"
      />
      <div aria-hidden="true" className={cn('absolute inset-0', pick(scrims, variant))} />
      {fade && <Fade />}
    </div>
  );
}
