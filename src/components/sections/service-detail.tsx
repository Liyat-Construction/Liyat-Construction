import type { Service, ServicesPage } from '@/types/content';
import { FeatureCard } from '@/components/cards/feature-card';
import { WellDiagram } from '@/components/diagrams/well-diagram';
import { Button } from '@/components/ui/button';
import { CheckList } from '@/components/ui/check-list';
import { Prose } from '@/components/ui/prose';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Steps } from '@/components/ui/steps';

interface ServiceDetailProps {
  service: Service;
  labels: ServicesPage['detail'];
}

/**
 * The body of a service page (PROJECT.md §7): overview and who it is for
 * beside the deliverables card, then the well diagram with this service's part
 * lit (`[data-well]` in globals.css — the static counterpart of the lifecycle
 * hover), then what is included beside the method.
 */
export function ServiceDetail({ service, labels }: ServiceDetailProps) {
  return (
    <>
      <Section labelledBy="service-overview">
        <div className="gap-grid grid lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <SectionHeading id="service-overview" title={labels.overview} />
            <Prose>
              <p>{service.overview}</p>
              <p>
                <strong>{labels.forWho}:</strong> {service.forWho}
              </p>
            </Prose>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-4 lg:col-start-9">
            {service.deliverables.length > 0 && (
              <FeatureCard feature={{ title: labels.deliverables }} icon="document">
                <CheckList items={service.deliverables} />
              </FeatureCard>
            )}
            <Button href="/#contact" icon="arrow" className="self-start">
              {service.cta}
            </Button>
          </div>
        </div>
      </Section>

      <Section labelledBy="service-well-part">
        <div className="gap-grid grid lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <SectionHeading id="service-well-part" title={labels.wellPart} />
            <Prose>
              <p>{service.wellNote}</p>
            </Prose>
          </div>
          <div data-well={service.slug} className="lg:col-span-4 lg:col-start-9">
            <WellDiagram className="mx-auto w-full max-w-xs" />
          </div>
        </div>
      </Section>

      <Section labelledBy="service-includes">
        <div className="gap-grid grid max-lg:gap-y-16 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <SectionHeading id="service-includes" title={labels.includes} />
            <CheckList items={service.includes} />
          </div>
          <div className="flex flex-col gap-8">
            <SectionHeading id="service-method" title={labels.method} />
            <Steps items={service.method} />
          </div>
        </div>
      </Section>
    </>
  );
}
