import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { ContactPanel } from '@/components/sections/contact-panel';
import { PageHeader } from '@/components/sections/page-header';
import { siteConfig } from '@/config/site';
import { CONTACT_PAGE } from '@/data/contact';

export const metadata: Metadata = pageMetadata(
  '/contact',
  CONTACT_PAGE.header.title,
  CONTACT_PAGE.header.description
);

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <PageHeader
        {...CONTACT_PAGE.header}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact us' }]}
      />
      <ContactPanel
        copy={CONTACT_PAGE}
        contact={siteConfig.contact}
        configuration={siteConfig.contactForm}
        sender={siteConfig.name}
      />
    </div>
  );
}
