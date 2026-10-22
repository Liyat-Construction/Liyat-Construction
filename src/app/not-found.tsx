import { PageHeader } from '@/components/sections/page-header';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { siteConfig } from '@/config/site';

export default function NotFound() {
  const { system } = siteConfig;
  return (
    <>
      <PageHeader
        {...system.notFound}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: system.notFound.title }]}
      />
      <Section container="prose">
        <div className="flex flex-wrap gap-4">
          <Button href="/">{system.home}</Button>
          <Button href="/#contact" variant="secondary">
            {system.contact}
          </Button>
        </div>
      </Section>
    </>
  );
}
