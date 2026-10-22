import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { EquipmentGrid } from '@/components/sections/equipment-grid';
import { FeatureGrid } from '@/components/sections/feature-grid';
import { PageHeader } from '@/components/sections/page-header';
import { ProofStrip } from '@/components/sections/proof-strip';
import { KEY_FIGURES, SAFETY_PRACTICES } from '@/data/company';
import { EQUIPMENT, EQUIPMENT_PAGE } from '@/data/equipment';

const { header, rigs, support, figures, safety } = EQUIPMENT_PAGE;
const drillingRigs = EQUIPMENT.filter((item) => item.category === 'rig');
const supportEquipment = EQUIPMENT.filter((item) => item.category === 'support');

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
      {/* Equipment Note */}
      <EquipmentGrid id="rigs" {...rigs} equipment={drillingRigs} />
      <EquipmentGrid
        id="support-equipment"
        {...support}
        equipment={supportEquipment}
        presentation="specifications"
      />
      {/* Capabilities Grid */}
      <ProofStrip {...figures} figures={KEY_FIGURES} />
      <FeatureGrid id="safety" {...safety} items={SAFETY_PRACTICES} />
    </>
  );
}
