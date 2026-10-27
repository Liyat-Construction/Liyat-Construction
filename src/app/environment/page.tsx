import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { FeatureGrid } from '@/components/sections/feature-grid';
import { PageHeader } from '@/components/sections/page-header';
import { SectionGroup } from '@/components/ui/section-group';
import { Story } from '@/components/sections/story';
import { ENVIRONMENT_PAGE } from '@/data/environment';

const { header, story, groundwater, practices } = ENVIRONMENT_PAGE;

export const metadata: Metadata = pageMetadata('/environment', header.title, header.description);

export default function EnvironmentPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Environment' }]}
        eyebrow={header.eyebrow}
        title={header.title}
        intro={header.intro}
        image={header.image}
      />
      <SectionGroup>
        <Story id="responsibility" {...story} />
        <FeatureGrid
          id="groundwater"
          itemIcons={['survey', 'pumping-test']}
          columns={2}
          {...groundwater}
        />
        <FeatureGrid id="practices" icon="check" columns={3} {...practices} />
      </SectionGroup>
    </>
  );
}
