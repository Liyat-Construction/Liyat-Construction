import type { ImageAsset } from '@/types/content';
import { Fade } from './fade';
import { Photo } from './photo';

interface BackdropProps {
  image: ImageAsset;
  /** Where and what the photo shows, in the corner (documentary caption) */
  caption?: string;
}

/**
 * Full-bleed photograph behind white text: natural color under a flat Ink
 * scrim (Brand §7, no wash). The scrim is as light as contrast allows over the
 * brightest pixels behind the text (98th percentile, 4.5 : 1, measured on the
 * Afar photo): 60 % on phones, where the text sits over pale sand (needs 58 %),
 * 40 % from lg, over the mountains (needs 34 %). A top fade darkens the strip
 * under the see-through header. Fills its positioned parent; LCP image.
 */
export function Backdrop({ image, caption }: BackdropProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Photo image={image} ratio="fill" width="full" priority drift className="bg-ink" />
      <div aria-hidden="true" className="bg-ink/60 lg:bg-ink/40 absolute inset-0" />
      <Fade edge="top" />
      {caption && (
        <p className="text-small right-gutter absolute bottom-4 text-white/80 max-sm:hidden">
          {caption}
        </p>
      )}
    </div>
  );
}
