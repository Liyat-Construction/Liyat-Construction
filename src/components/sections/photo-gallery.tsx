import type { ImageAsset, SectionCopy } from '@/types/content';
import { Carousel } from '@/components/ui/carousel';
import { Photo } from '@/components/ui/photo';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

interface PhotoGalleryProps extends SectionCopy {
  images: ImageAsset[];
  id: string;
  /**
   * `carousel` for a long set: one row the visitor flips through, so the page stays short.
   * `phone-carousel`: that row on phones only, a grid of 3 columns from sm (D-146)
   */
  layout?: 'grid' | 'carousel' | 'phone-carousel';
}

/**
 * Site photographs, every frame 4:5 so the tiles match (D-109); landscape originals crop
 * to fill. Fixed ratios, so nothing shifts. Renders nothing when empty.
 */
export function PhotoGallery({
  eyebrow,
  title,
  intro,
  images,
  id,
  layout = 'grid',
}: PhotoGalleryProps) {
  if (images.length === 0) return;
  const photo = (image: ImageAsset) => (
    <Photo image={image} ratio="portrait" width="third" rounded />
  );
  return (
    <Section labelledBy={`${id}-title`}>
      <div className="flex flex-col gap-12">
        <SectionHeading
          id={`${id}-title`}
          align="center"
          eyebrow={eyebrow}
          title={title}
          intro={intro}
        />
        {layout === 'grid' ? (
          <ul className="gap-grid columns-1 sm:columns-2 lg:columns-3">
            {images.map((image) => (
              <li key={image.url} className="mb-grid break-inside-avoid">
                {photo(image)}
              </li>
            ))}
          </ul>
        ) : (
          <Carousel
            label={title}
            layout={layout === 'carousel' ? 'all' : 'photos'}
            slides={images.map((image) => ({ key: image.url, content: photo(image) }))}
          />
        )}
      </div>
    </Section>
  );
}
