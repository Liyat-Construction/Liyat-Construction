import { pageMetadata } from '@/lib/metadata';
import { CtaBand } from '@/components/sections/cta-band';
import { EquipmentTeaser } from '@/components/sections/equipment-teaser';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { Hero } from '@/components/sections/hero';
import { ProofStrip } from '@/components/sections/proof-strip';
import { ServiceLifecycle } from '@/components/sections/service-lifecycle';
import { Testimonials } from '@/components/sections/testimonials';
import { siteConfig } from '@/config/site';
import { KEY_FIGURES } from '@/data/company';
import { CTA_BAND } from '@/data/cta';
import { EQUIPMENT } from '@/data/equipment';
import { HOME_PAGE } from '@/data/home';
import { PARTNERS } from '@/data/partners';
import { FEATURED_PROJECTS } from '@/data/projects';
import { getServiceTitles, SERVICES } from '@/data/services';
import { TESTIMONIALS } from '@/data/testimonials';

export const metadata = pageMetadata(
  '/',
  siteConfig.seo.titleDefault,
  siteConfig.seo.metaDescription
);

// Design System §4 (Home): tones alternate paper ↔ stone after the hero.
export default function Home() {
  const { hero, proof, projects, lifecycle, equipment, testimonials } = HOME_PAGE;
  return (
    <>
      <Hero eyebrow={siteConfig.descriptor} {...hero} />
      <ProofStrip {...proof} figures={KEY_FIGURES} clients={PARTNERS} />
      <FeaturedProjects
        {...projects}
        projects={FEATURED_PROJECTS.map((project) => ({
          project,
          serviceNames: getServiceTitles(project.services),
        }))}
      />
      <ServiceLifecycle {...lifecycle} services={SERVICES} />
      <EquipmentTeaser {...equipment} equipment={EQUIPMENT[0]} />
      <Testimonials {...testimonials} testimonials={TESTIMONIALS} />
      <CtaBand {...CTA_BAND} phone={siteConfig.contact.phone} />
    </>
  );
}
