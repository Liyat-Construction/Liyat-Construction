import { pageUrl, serializeJsonLd } from '@/lib/metadata';
import type { ImageAsset } from '@/types/content';
import { Backdrop } from '@/components/ui/backdrop';
import { Breadcrumbs, type Crumb } from '@/components/ui/breadcrumbs';
import type { EyebrowTone } from '@/components/ui/eyebrow';
import type { ReactNode } from 'react';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

interface PageHeaderProps {
  title: string;
  eyebrow?: string;
  eyebrowTone?: EyebrowTone;
  intro?: string;
  /** Home first, the current page last (without href) */
  breadcrumbs: Crumb[];
  /**
   * Optional background photo under a flat Ink scrim (D-62). Only landscape
   * photos are used: portrait phone shots blur and crop to a strip at full width,
   * so they leave the band plain Ink.
   */
  image?: ImageAsset;
  /** Optional centred actions under the heading (e.g. the 404 recovery buttons) */
  actions?: ReactNode;
}

/**
 * Top of every inner page (D-62): an Ink band with the breadcrumb at the top
 * left and the eyebrow, the page's h1 and the intro centred. Marked
 * `data-header-overlay` and pulled up under the site header, which floats
 * see-through over it until the band has scrolled past (D-63).
 */
export function PageHeader({
  title,
  eyebrow,
  eyebrowTone = 'default',
  intro,
  breadcrumbs,
  image,
  actions,
}: PageHeaderProps) {
  const photo = image && image.orientation !== 'portrait' ? image : undefined;
  return (
    <div
      data-header-overlay
      data-on-photo={photo ? true : undefined}
      className="-mt-(--header-total)"
    >
      <Section
        tone="ink"
        spacing="compact"
        pattern={photo ? 'none' : 'grid'}
        labelledBy="page-title"
        className="relative"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: breadcrumbs.map((crumb, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: crumb.label,
                ...(crumb.href && { item: pageUrl(crumb.href) }),
              })),
            }),
          }}
        />
        {photo && <Backdrop image={photo} variant="header" />}
        <div className="relative flex flex-col gap-10 pt-(--header-total) lg:gap-12">
          <Breadcrumbs items={breadcrumbs} />
          <div className="flex flex-col items-center gap-8">
            <SectionHeading
              as="h1"
              id="page-title"
              align="center"
              eyebrow={eyebrow}
              eyebrowTone={photo ? 'default' : eyebrowTone}
              title={title}
              intro={intro}
              className="mx-auto pb-4"
            />
            {actions}
          </div>
        </div>
      </Section>
    </div>
  );
}
