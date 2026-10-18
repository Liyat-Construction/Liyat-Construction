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
    <section id="partners" className="bg-surface-elevated dark:bg-surface-page py-14 md:py-20">
      <ScrollReveal>
        <p className="text-brand-accent mb-2 text-center text-sm font-semibold tracking-widest uppercase dark:text-white/80">
          {title}
        </p>
        <div className="bg-brand-primary mx-auto mb-4 h-1 w-12 rounded-full md:mb-6" />
      </ScrollReveal>
      <ClientLogosMarquee logos={partners} />
    </section>
  );
}
