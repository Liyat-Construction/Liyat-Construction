/**
 * Partners Section
 * "Trusted By" strip with the scrolling partner/client logo marquee.
 * Placed between Projects and Testimonials on the homepage.
 */

import { ClientLogosMarquee } from '@/components/client-logos-marquee';
import { ScrollReveal } from '@/components/scroll-reveal';
import type { Partner } from '@/types/content';

interface PartnersSectionProps {
  title: string;
  partners: Partner[];
}

export function PartnersSection({ title, partners }: PartnersSectionProps) {
  if (partners.length === 0) return;

  return (
    <section id="partners" className="bg-brand-primary py-12 md:py-16">
      <ScrollReveal>
        <p className="text-brand-accent mb-6 text-center text-sm font-semibold tracking-widest uppercase md:mb-8">
          {title}
        </p>
      </ScrollReveal>
      <ClientLogosMarquee logos={partners} />
    </section>
  );
}
