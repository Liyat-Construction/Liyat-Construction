import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CtaBand } from '@/components/sections/cta-band';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { PageHeader } from '@/components/sections/page-header';
import { ServiceDetail } from '@/components/sections/service-detail';
import { siteConfig } from '@/config/site';
import { CTA_BAND } from '@/data/cta';
import { getProjectsByService } from '@/data/projects';
import { getServiceBySlug, getServiceTitles, SERVICES, SERVICES_PAGE } from '@/data/services';

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug((await params).slug);
  if (!service) return {};
  return { title: service.title, description: service.intro };
}

// Design System §4 (Service detail)
export default async function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug((await params).slug);
  if (!service) notFound();

  const number = SERVICES.indexOf(service) + 1;
  const related = getProjectsByService(service.slug).map((project) => ({
    project,
    serviceNames: getServiceTitles(project.services),
  }));

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
        eyebrow={`${SERVICES_PAGE.header.eyebrow} · ${String(number).padStart(2, '0')}`}
        title={service.title}
        intro={service.intro}
        image={service.image}
      />
      <ServiceDetail service={service} labels={SERVICES_PAGE.detail} />
      <FeaturedProjects
        id="related-projects"
        tone="paper"
        title={SERVICES_PAGE.detail.related}
        projects={related}
        link={SERVICES_PAGE.detail.allProjects}
      />
      <CtaBand {...CTA_BAND} phone={siteConfig.contact.phone} />
    </>
  );
}
