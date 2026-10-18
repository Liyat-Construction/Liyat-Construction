import { Hero } from '@/components/hero';
import { AboutSection } from '@/components/about-section';
import { ServicesSection } from '@/components/services-section';
import { ProjectsSection } from '@/components/projects-section';
import { PartnersSection } from '@/components/partners-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ContactSection } from '@/components/contact-section';
import { CTASection } from '@/components/cta-section';
import { HOME_PAGE } from '@/data/home';
import { ABOUT_SUMMARY } from '@/data/about';
import { SERVICES } from '@/data/services';
import { FEATURED_PROJECTS } from '@/data/projects';
import { PARTNERS } from '@/data/partners';
import { TESTIMONIALS } from '@/data/testimonials';
import { CONTACT_PAGE } from '@/data/contact';

function GoldDivider() {
  return <div className="border-brand-accent/30 border-t" />;
}

export default function Home() {
  return (
    <main className="dark:bg-surface-page bg-white">
      <Hero homePage={HOME_PAGE} />
      <GoldDivider />
      <AboutSection about={ABOUT_SUMMARY} />
      <GoldDivider />
      <ServicesSection
        title={HOME_PAGE.servicesTitle}
        subtitle={HOME_PAGE.servicesSubtitle}
        services={SERVICES}
      />
      <GoldDivider />
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
      <GoldDivider />
      <ContactSection contactPage={CONTACT_PAGE} />
      <CTASection homePage={HOME_PAGE} />
    </main>
  );
}
