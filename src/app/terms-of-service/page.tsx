import { LegalContent } from '@/components/sections/legal-content';
import { PageHeader } from '@/components/sections/page-header';
import { TERMS_PAGE } from '@/data/legal';
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
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: TERMS_PAGE.header.title }]}
      />
      <LegalContent copy={TERMS_PAGE} />
    </>
  );
}
