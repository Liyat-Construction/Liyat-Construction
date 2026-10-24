import { ContactPanel } from '@/components/sections/contact-panel';
import { EquipmentTeaser } from '@/components/sections/equipment-teaser';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { ServiceLifecycle } from '@/components/sections/service-lifecycle';
import { Story } from '@/components/sections/story';
import { Testimonials } from '@/components/sections/testimonials';
import { SectionGroup } from '@/components/ui/section-group';
import { siteConfig } from '@/config/site';
import { CONTACT_PAGE } from '@/data/contact';
import { EQUIPMENT } from '@/data/equipment';
import { HOME_PAGE } from '@/data/home';
import { PARTNERS } from '@/data/partners';
import { FEATURED_PROJECTS } from '@/data/projects';
import { getServiceTitles, SERVICES } from '@/data/services';
import { TESTIMONIALS } from '@/data/testimonials';

/**
 * Everything on the home page below the hero, in the navigation order (D-59, D-61),
 * each section with the `id` its nav anchor uses, all on Paper (one page color).
 * The closing section and footer come from the layout (D-69).
 */
export function HomeSections() {
  const { about, lifecycle, projects, equipment, testimonials } = HOME_PAGE;
  return (
    <SectionGroup>
      <Story id="about" {...about} />
      <ServiceLifecycle id="services" {...lifecycle} services={SERVICES} />
      <FeaturedProjects
        id="projects"
        {...projects}
        projects={FEATURED_PROJECTS.map((project) => ({
          project,
          serviceNames: getServiceTitles(project.services),
        }))}
        clients={PARTNERS}
      />
      <EquipmentTeaser id="equipment" {...equipment} equipment={EQUIPMENT[0]} />
      <Testimonials id="testimonials" {...testimonials} testimonials={TESTIMONIALS} />
      {/* The contact page moved here (D-74); the nav button and every "Contact us" go to /#contact */}
      <ContactPanel
        id="contact"
        copy={CONTACT_PAGE}
        contact={siteConfig.contact}
        configuration={siteConfig.contactForm}
        sender={siteConfig.name}
      />
    </SectionGroup>
  );
}
