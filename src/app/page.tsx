import { Hero } from '@/components/hero';
import { AboutSection } from '@/components/about-section';
import { ServicesSection } from '@/components/services-section';
import { ProjectsSection } from '@/components/projects-section';
import { PartnersSection } from '@/components/partners-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ContactSection } from '@/components/contact-section';
import { CtaBand } from '@/components/sections/cta-band';
import { CTA_BAND } from '@/data/cta';
import { siteConfig } from '@/config/site';
import { HOME_PAGE } from '@/data/home';
import { ABOUT_SUMMARY } from '@/data/about';
import { SERVICES } from '@/data/services';
import { FEATURED_PROJECTS } from '@/data/projects';
import { PARTNERS } from '@/data/partners';
import { TESTIMONIALS } from '@/data/testimonials';
import { CONTACT_PAGE } from '@/data/contact';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero homePage={HOME_PAGE} />
      <AboutSection about={ABOUT_SUMMARY} />
      <ServicesSection
        title={HOME_PAGE.servicesTitle}
        subtitle={HOME_PAGE.servicesSubtitle}
        services={SERVICES}
      />
      <ProjectsSection
        title={HOME_PAGE.projectsTitle}
        subtitle={HOME_PAGE.projectsSubtitle}
        projects={FEATURED_PROJECTS}
      />
      <PartnersSection title={HOME_PAGE.partnersTitle} partners={PARTNERS} />
      <TestimonialsSection
        title={HOME_PAGE.testimonialsTitle}
        subtitle={HOME_PAGE.testimonialsSubtitle}
        testimonials={TESTIMONIALS}
      />
      <ContactSection contactPage={CONTACT_PAGE} />
      <CtaBand {...CTA_BAND} phone={siteConfig.contact.phone} />
    </div>
  );
}
