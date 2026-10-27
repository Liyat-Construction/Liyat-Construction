import type { Metadata } from 'next';
import { PageHeader } from '@/components/sections/page-header';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

// Its own tab title; it had the home page's (P15)
export const metadata: Metadata = { title: siteConfig.system.notFound.title };

export default function NotFound() {
  const { system } = siteConfig;
  return (
    <PageHeader
      {...system.notFound}
      eyebrowTone="accent"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: system.notFound.title }]}
      actions={
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/">{system.home}</Button>
          <Button href="/#contact" variant="secondary">
            {system.contact}
          </Button>
        </div>
      }
    />
  );
}
