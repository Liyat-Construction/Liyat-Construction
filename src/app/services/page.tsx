import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { FeatureGrid } from '@/components/sections/feature-grid';
import { PageHeader } from '@/components/sections/page-header';
import { ServiceLifecycle } from '@/components/sections/service-lifecycle';
import { SERVICES, SERVICES_PAGE } from '@/data/services';

const { header, lifecycle, deliverables } = SERVICES_PAGE;

export const metadata: Metadata = pageMetadata('/services', header.title, header.description);

// Design System §4 (Services index)
export default function ServicesPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        eyebrow={header.eyebrow}
        title={header.title}
        intro={header.intro}
      />
      <ServiceLifecycle {...lifecycle} services={SERVICES} />
      <FeatureGrid id="deliverables" columns={4} icon="document" {...deliverables} />
    </>
  );
}
