import type { ImageAsset, SectionCopy } from '@/types/content';
import { Photo } from '@/components/ui/photo';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

interface PhotoGalleryProps extends SectionCopy {
  images: ImageAsset[];
  id: string;
}

/**
 * Site photographs in columns, each at its own shape (portrait 4:5, landscape 3:2), so phone
 * shots are not cut to a strip. Fixed ratios, so nothing shifts. Renders nothing when empty.
 */
export function PhotoGallery({ eyebrow, title, intro, images, id }: PhotoGalleryProps) {
  if (images.length === 0) return;
  return (
    <Section labelledBy={`${id}-title`}>
      <div className="flex flex-col gap-12">
        <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} intro={intro} />
        <ul className="gap-grid columns-1 sm:columns-2 lg:columns-3">
          {images.map((image) => (
            <li key={image.url} className="mb-grid break-inside-avoid">
              <Photo
                image={image}
                ratio={image.orientation === 'portrait' ? 'portrait' : 'wide'}
                width="third"
                rounded
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
