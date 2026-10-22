import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { PageHeader } from '@/components/sections/page-header';
import { ProofStrip } from '@/components/sections/proof-strip';
import { ReferenceGrid } from '@/components/sections/reference-grid';
import { Testimonials } from '@/components/sections/testimonials';
import { REFERENCES } from '@/data/company';
import { PARTNERS } from '@/data/partners';
import { TESTIMONIALS, TESTIMONIALS_PAGE } from '@/data/testimonials';

const { header, testimonials, references, clients } = TESTIMONIALS_PAGE;

export const metadata: Metadata = pageMetadata('/testimonials', header.title, header.description);

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: header.title }]}
        eyebrow={header.eyebrow}
        title={header.title}
        intro={header.intro}
      />
      <Testimonials {...testimonials} testimonials={TESTIMONIALS} />
      <ReferenceGrid id="references" {...references} references={REFERENCES} />
      <ProofStrip {...clients} figures={[]} clients={PARTNERS} />
    </>
  );
}
