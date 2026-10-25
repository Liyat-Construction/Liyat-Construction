import { LegalContent } from '@/components/sections/legal-content';
import { PageHeader } from '@/components/sections/page-header';
import { PRIVACY_PAGE } from '@/data/legal';
import { siteConfig } from '@/config/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = {
  ...pageMetadata('/privacy-policy', PRIVACY_PAGE.header.title, PRIVACY_PAGE.header.description),
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        {...PRIVACY_PAGE.header}
        eyebrowTone="accent"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: PRIVACY_PAGE.header.title }]}
      />
      <LegalContent copy={PRIVACY_PAGE} email={siteConfig.contact.email} />
    </>
  );
}
