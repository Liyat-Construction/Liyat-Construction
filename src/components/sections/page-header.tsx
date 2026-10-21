import type { ImageAsset } from '@/types/content';
import { Breadcrumbs, type Crumb } from '@/components/ui/breadcrumbs';
import { Photo } from '@/components/ui/photo';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

interface PageHeaderProps {
  title: string;
  eyebrow?: string;
  intro?: string;
  /** Home first, the current page last (without href) */
  breadcrumbs: Crumb[];
  /** Optional photo on the right; it is the page's LCP image */
  image?: ImageAsset;
}

/** Top of every inner page, on Stone: breadcrumb, eyebrow, the page's h1, intro and an optional photo. */
export function PageHeader({ title, eyebrow, intro, breadcrumbs, image }: PageHeaderProps) {
  return (
    <Section tone="stone" spacing="compact" labelledBy="page-title">
      <div className="gap-grid grid items-center lg:grid-cols-12">
        <div className="flex flex-col gap-8 lg:col-span-7">
          <Breadcrumbs items={breadcrumbs} />
          <SectionHeading as="h1" id="page-title" eyebrow={eyebrow} title={title} intro={intro} />
        </div>
        {image && (
          <Photo
            image={image}
            ratio="wide"
            width="half"
            priority
            rounded
            className="lg:col-span-5"
          />
        )}
      </div>
    </Section>
  );
}
