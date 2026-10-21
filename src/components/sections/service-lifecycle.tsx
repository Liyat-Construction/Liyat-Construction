import type { SectionCopy, Service } from '@/types/content';
import { ServiceCard } from '@/components/cards/service-card';
import { WellDiagram } from '@/components/diagrams/well-diagram';
import { Section, type SectionTone } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

interface ServiceLifecycleProps extends SectionCopy {
  services: Service[];
  tone?: SectionTone;
}

/**
 * The six services in lifecycle order beside the well diagram. Pointing at or
 * focusing a service highlights the part of the well it delivers — pure CSS
 * (`:has()` in globals.css, D-45), so no JavaScript ships. Phones see the
 * diagram first, then the cards.
 */
export function ServiceLifecycle({
  eyebrow,
  title,
  intro,
  services,
  tone = 'paper',
}: ServiceLifecycleProps) {
  return (
    <Section tone={tone} labelledBy="lifecycle-title">
      <div data-lifecycle className="gap-grid grid lg:grid-cols-12 lg:items-start">
        <SectionHeading
          id="lifecycle-title"
          eyebrow={eyebrow}
          title={title}
          intro={intro}
          className="mb-8 lg:col-span-12 lg:mb-4"
        />
        <WellDiagram className="mx-auto w-full max-w-sm lg:sticky lg:top-28 lg:order-last lg:col-span-5 lg:max-w-none" />
        <ol className="gap-grid grid sm:grid-cols-2 lg:col-span-7">
          {services.map((service, index) => (
            <li key={service.slug} data-service={service.slug}>
              <ServiceCard service={service} number={index + 1} />
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
