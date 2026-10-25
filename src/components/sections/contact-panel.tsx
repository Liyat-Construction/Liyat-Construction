import { FeatureCard } from '@/components/cards/feature-card';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ContactList } from '@/components/ui/contact-list';
import { Icon } from '@/components/ui/icon';
import { MapFacade } from '@/components/ui/map-facade';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
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
              <SectionHeading id="contact-form-title" as="h3" {...copy.form} />
              <ContactForm copy={copy.form} configuration={configuration} sender={sender}>
                <Button type="submit" icon="arrow">
                  {copy.form.submit}
                </Button>
              </ContactForm>
            </div>
          </Card>
          <div className="flex flex-col gap-6 lg:col-span-5">
            {(phones.length > 0 || contact.email) && (
              <FeatureCard feature={{ title: copy.details.title }}>
                <ContactList
                  rows={[
                    {
                      label: copy.details.phone,
                      icon: 'phone',
                      values: phones.map((text) => ({
                        text,
                        href: `tel:${text.replace(/[^+\d]/g, '')}`,
                      })),
                    },
                    {
                      label: copy.details.email,
                      icon: 'mail',
                      values: [{ text: contact.email, href: `mailto:${contact.email}` }],
                    },
                  ]}
                />
              </FeatureCard>
            )}
            {contact.address && (
              <FeatureCard
                feature={{ title: copy.details.address, text: contact.address }}
                icon="map-pin"
              >
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
              <FeatureCard
                feature={{ title: copy.details.hours, text: contact.officeHours }}
                icon="clock"
              />
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
