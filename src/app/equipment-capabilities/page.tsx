import type { Metadata } from 'next';
import { CtaBand } from '@/components/sections/cta-band';
import { EquipmentGrid } from '@/components/sections/equipment-grid';
import { FeatureGrid } from '@/components/sections/feature-grid';
import { PageHeader } from '@/components/sections/page-header';
import { ProofStrip } from '@/components/sections/proof-strip';
import { siteConfig } from '@/config/site';
import { KEY_FIGURES, SAFETY_PRACTICES } from '@/data/company';
import { CTA_BAND } from '@/data/cta';
import { EQUIPMENT, EQUIPMENT_PAGE } from '@/data/equipment';

const { header, rigs, support, figures, safety } = EQUIPMENT_PAGE;
const drillingRigs = EQUIPMENT.filter((item) => item.category === 'rig');
const supportEquipment = EQUIPMENT.filter((item) => item.category === 'support');
const equipmentSections = Number(drillingRigs.length > 0) + Number(supportEquipment.length > 0);
const safetySections = equipmentSections + Number(KEY_FIGURES.length > 0);

export const metadata: Metadata = {
  title: 'Equipment & Capabilities',
  description: header.description,
};

export default function EquipmentCapabilitiesPage() {
  return (
    <>
      {/* Hero */}
      <PageHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: header.title }]}
        eyebrow={header.eyebrow}
        title={header.title}
        intro={header.intro}
      />
      {/* Equipment Note */}
      <EquipmentGrid id="rigs" {...rigs} equipment={drillingRigs} />
      <EquipmentGrid
        id="support-equipment"
        tone={drillingRigs.length > 0 ? 'stone' : 'paper'}
        {...support}
        equipment={supportEquipment}
        presentation="specifications"
      />
      {/* Capabilities Grid */}
      <ProofStrip
        {...figures}
        figures={KEY_FIGURES}
        tone={equipmentSections % 2 === 0 ? 'paper' : 'stone'}
      />
      <FeatureGrid
        id="safety"
        tone={safetySections % 2 === 0 ? 'paper' : 'stone'}
        {...safety}
        items={SAFETY_PRACTICES}
      />
      <CtaBand {...CTA_BAND} phone={siteConfig.contact.phone} />
    </>
  );
}
