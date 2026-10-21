import type { Service, ServicesPage } from '@/types/content';
import { FeatureCard } from '@/components/cards/feature-card';
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
 * The body of a service page (Design System §4): overview and who it is for,
 * with what the client receives, then what is included beside the method.
 */
export function ServiceDetail({ service, labels }: ServiceDetailProps) {
  return (
    <>
      <Section labelledBy="service-overview">
        <div className="gap-grid grid lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <SectionHeading id="service-overview" title={labels.overview} />
            <Prose>
              <p>{service.overview}</p>
            </Prose>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-4 lg:col-start-9">
            <FeatureCard feature={{ title: labels.forWho, text: service.forWho }} />
            {service.deliverables.length > 0 && (
              <FeatureCard feature={{ title: labels.deliverables }} icon="document">
                <CheckList items={service.deliverables} />
              </FeatureCard>
            )}
            <Button href="/contact" icon="arrow" className="self-start">
              {service.cta}
            </Button>
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
