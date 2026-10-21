import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ContactList } from '@/components/ui/contact-list';
import { Icon } from '@/components/ui/icon';
import { MapFacade } from '@/components/ui/map-facade';
import { Prose } from '@/components/ui/prose';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { TextLink } from '@/components/ui/text-link';
import type { SiteConfig } from '@/config/site';
import type { ContactFormConfiguration } from '@/lib/contact-form';
import type { ContactPage } from '@/types/content';
import { ContactForm } from './contact-form';

interface ContactPanelProps {
  copy: ContactPage;
  contact: SiteConfig['contact'];
  configuration: ContactFormConfiguration;
  sender: string;
}

export function ContactPanel({ copy, contact, configuration, sender }: ContactPanelProps) {
  const phones = [contact.phone, contact.secondaryPhone].filter(Boolean);
  return (
    <Section labelledBy="contact-form-title">
      <div className="gap-grid grid items-start lg:grid-cols-12">
        <Card className="lg:col-span-7">
          <div className="flex flex-col gap-8">
            <SectionHeading id="contact-form-title" {...copy.form} />
            <ContactForm copy={copy.form} configuration={configuration} sender={sender}>
              <Button type="submit" icon="arrow">
                {copy.form.submit}
              </Button>
            </ContactForm>
            <Prose>
              <p>
                {copy.form.privacy}{' '}
                <TextLink href={copy.form.privacyLink.href}>{copy.form.privacyLink.label}</TextLink>
                .
              </p>
            </Prose>
          </div>
        </Card>
        <div className="flex flex-col gap-8 lg:col-span-5">
          <SectionHeading {...copy.details} />
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
              { label: copy.details.address, icon: 'map-pin', values: [{ text: contact.address }] },
              { label: copy.details.hours, icon: 'clock', values: [{ text: contact.officeHours }] },
            ]}
          />
          {contact.mapEmbedUrl && (
            <MapFacade
              url={contact.mapEmbedUrl}
              copy={copy.map}
              icon={<Icon name="map-pin" size="lg" />}
            />
          )}
        </div>
      </div>
    </Section>
  );
}
