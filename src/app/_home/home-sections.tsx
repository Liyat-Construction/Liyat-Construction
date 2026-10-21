import { CtaBand } from '@/components/sections/cta-band';
import { EquipmentTeaser } from '@/components/sections/equipment-teaser';
import { FeaturedProjects } from '@/components/sections/featured-projects';
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

/**
 * Everything on the home page below the hero, in Design System §4 order, all on
 * Paper (one page color). Shared by `/` and the hero preview pages, so a
 * change here shows on all of them; only the hero differs.
 */
export function HomeSections() {
  const { proof, projects, lifecycle, equipment, testimonials } = HOME_PAGE;
  return (
    <>
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
