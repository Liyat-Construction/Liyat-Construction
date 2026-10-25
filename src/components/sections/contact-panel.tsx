import { FeatureCard } from '@/components/cards/feature-card';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { MapFacade } from '@/components/ui/map-facade';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Subheading } from '@/components/ui/subheading';
import type { SiteConfig } from '@/config/site';
import type { ContactFormConfiguration } from '@/lib/contact-form';
import type { ContactPage } from '@/types/content';
import { ContactForm } from './contact-form';

interface ContactPanelProps {
  copy: ContactPage;
  contact: SiteConfig['contact'];
  configuration: ContactFormConfiguration;
  sender: string;
  /** Anchor for the navigation (`/#contact`) */
  id?: string;
}

export function ContactPanel({ copy, contact, configuration, sender, id }: ContactPanelProps) {
  const phones = [contact.phone, contact.secondaryPhone].filter(Boolean);
  return (
    <Section id={id} labelledBy="contact-title">
      <div className="flex flex-col gap-12">
        <SectionHeading
          id="contact-title"
          align="center"
          eyebrow={copy.header.eyebrow}
          title={copy.header.title}
        />
        <div className="gap-grid grid items-start lg:grid-cols-12">
          <Card padding="lg" className="lg:col-span-7">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <Subheading as="h3" size="h4">
                  {copy.form.title}
                </Subheading>
                <p className="text-ink-muted">{copy.form.intro}</p>
              </div>
              <ContactForm copy={copy.form} configuration={configuration} sender={sender}>
                <Button type="submit" icon="arrow">
                  {copy.form.submit}
                </Button>
              </ContactForm>
            </div>
          </Card>
          <div className="flex flex-col gap-6 lg:col-span-5">
            {phones.length > 0 && (
              <FeatureCard feature={{ title: copy.details.phone }}>
                <ul className="flex flex-col gap-1">
                  {phones.map((text) => (
                    <li key={text} className="flex items-center gap-3">
                      <Icon name="phone" className="text-brand" />
                      <a href={`tel:${text.replace(/[^+\d]/g, '')}`} className="hover:underline">
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </FeatureCard>
            )}
            {contact.email && (
              <FeatureCard feature={{ title: copy.details.email }}>
                <div className="flex items-center gap-3">
                  <Icon name="mail" className="text-brand" />
                  <a href={`mailto:${contact.email}`} className="hover:underline">
                    {contact.email}
                  </a>
                </div>
              </FeatureCard>
            )}
            {contact.address && (
              <FeatureCard feature={{ title: copy.details.address }}>
                <div className="flex items-center gap-3">
                  <Icon name="map-pin" className="text-brand" />
                  <span>{contact.address}</span>
                </div>
                {contact.mapEmbedUrl && (
                  <MapFacade
                    url={contact.mapEmbedUrl}
                    copy={copy.map}
                    icon={<Icon name="map-pin" size="lg" />}
                  />
                )}
              </FeatureCard>
            )}
            {contact.officeHours && (
              <FeatureCard feature={{ title: copy.details.hours }}>
                <div className="flex items-center gap-3">
                  <Icon name="clock" className="text-brand" />
                  <span>{contact.officeHours}</span>
                </div>
              </FeatureCard>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
