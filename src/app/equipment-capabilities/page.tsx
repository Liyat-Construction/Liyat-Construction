import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { Story } from '@/components/sections/story';
import { FeatureGrid } from '@/components/sections/feature-grid';
import { PageHeader } from '@/components/sections/page-header';
import { SectionGroup } from '@/components/ui/section-group';
import { ProofStrip } from '@/components/sections/proof-strip';
import { PROJECT_FIGURES } from '@/data/company';
import { EQUIPMENT_PAGE } from '@/data/equipment';

const { header, rigs, support, methods, figures, readiness } = EQUIPMENT_PAGE;

export const metadata: Metadata = pageMetadata(
  '/equipment-capabilities',
  header.title,
  header.description
);

export default function EquipmentCapabilitiesPage() {
  return (
    <>
      {/* Hero */}
      <PageHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Equipment' }]}
        eyebrow={header.eyebrow}
        title={header.title}
        intro={header.intro}
        image={header.image}
      />
      <SectionGroup>
        {/* Equipment Note */}
        <Story id="rigs" {...rigs} />
        <FeatureGrid id="support-equipment" {...support} columns={3} />
        <FeatureGrid id="methods" {...methods} columns={4} />
        {/* Capabilities Grid */}
        <ProofStrip id="equipment-figures" {...figures} figures={PROJECT_FIGURES} />
        <Story id="site-readiness" {...readiness} spacing="compact" />
      </SectionGroup>
    </>
  );
}
