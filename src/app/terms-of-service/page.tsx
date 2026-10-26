import { LegalContent } from '@/components/sections/legal-content';
import { PageHeader } from '@/components/sections/page-header';
import { SectionGroup } from '@/components/ui/section-group';
import { TERMS_PAGE } from '@/data/legal';
import { siteConfig } from '@/config/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = {
  ...pageMetadata('/terms-of-service', TERMS_PAGE.header.title, TERMS_PAGE.header.description),
  robots: { index: false, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader
        {...TERMS_PAGE.header}
        eyebrowTone="accent"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: TERMS_PAGE.header.title }]}
      />
      <SectionGroup>
        <LegalContent copy={TERMS_PAGE} email={siteConfig.contact.email} />
      </SectionGroup>
    </>
  );
}
