/**
 * Contact Section
 * Contact details, social links, Google Map and an optional contact form.
 * Everything is driven by src/config/site.ts — empty values are hidden.
 */

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Container } from '@/components/container';
import {
  SocialLinks,
  TelegramIcon,
  WhatsAppIcon,
  telegramUrl,
  whatsappUrl,
} from '@/components/social-links';
import { cn } from '@/lib/utils';
import {
  contactFormSchema,
  isContactFormEnabled,
  submitContactForm,
  type ContactFormInput,
  type ContactFormValues,
} from '@/lib/contact-form';
import { siteConfig } from '@/config/site';
import type { ContactPage } from '@/types/content';

interface ContactSectionProps {
  contactPage: ContactPage;
}

const { email, phone, address, officeHours, mapEmbedUrl } = siteConfig.contact;

export function ContactSection({ contactPage }: ContactSectionProps) {
  const hasDirectChannels = Boolean(phone || whatsappUrl || telegramUrl);
  const formOrMap = isContactFormEnabled ? (
    <ContactForm contactPage={contactPage} />
  ) : mapEmbedUrl ? (
    <MapEmbed />
  ) : undefined;

  return (
    <section id="contact" className={cn('py-20 md:py-28 lg:py-32', 'bg-brand-primary')}>
      <Container>
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase">
            Contact Us
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {contactPage.title}
          </h2>

          <p className="text-text-inverse/80 mx-auto mt-4 max-w-2xl text-base md:mt-6 md:text-lg lg:text-xl">
            {contactPage.description}
          </p>
        </div>

        <div
          className={cn('grid gap-8 md:gap-12', formOrMap ? 'lg:grid-cols-2' : 'mx-auto max-w-xl')}
        >
          {formOrMap}

          {/* Contact Info */}
          <div className={cn('flex flex-col justify-center', formOrMap && 'lg:pl-8')}>
            <h3 className="text-xl font-bold text-white md:text-2xl">Contact Information</h3>
            <p className="text-text-inverse/70 mt-2 text-sm md:text-base">
              Reach out to us directly through any of these channels.
            </p>

            <div className="mt-8 space-y-6 md:mt-10 md:space-y-8">
              {phone && (
                <ContactItem
                  icon={PhoneIcon}
                  label="Phone"
                  value={phone}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                />
              )}
              {email && (
                <ContactItem
                  icon={EmailIcon}
                  label="Email"
                  value={email}
                  href={`mailto:${email}`}
                />
              )}
              {address && <ContactItem icon={LocationIcon} label="Address" value={address} />}
              {officeHours && (
                <ContactItem icon={ClockIcon} label="Office Hours" value={officeHours} />
              )}
            </div>

            <SocialLinks
              className="mt-8 md:mt-10"
              linkClassName="text-text-inverse/60 hover:text-brand-accent"
              iconClassName="h-6 w-6"
            />

            {/* Direct channels */}
            {hasDirectChannels && (
              <div className="border-brand-accent/20 from-brand-accent/10 mt-8 rounded-xl border bg-gradient-to-br to-transparent p-5 md:mt-10 md:p-6">
                <h4 className="text-base font-semibold text-white md:text-lg">
                  Prefer to talk directly?
                </h4>
                <p className="text-text-inverse/70 mt-2 text-sm">
                  Call or message us and we will get back to you as soon as possible.
                </p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                  {phone && (
                    <QuickLink
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      icon={PhoneIcon}
                      label="Call us now"
                    />
                  )}
                  {whatsappUrl && (
                    <QuickLink href={whatsappUrl} icon={WhatsAppIcon} label="WhatsApp" external />
                  )}
                  {telegramUrl && (
                    <QuickLink href={telegramUrl} icon={TelegramIcon} label="Telegram" external />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Map below the grid when the form takes the left column */}
        {isContactFormEnabled && mapEmbedUrl && (
          <div className="mt-12 md:mt-16">
            <MapEmbed className="aspect-[16/9] md:aspect-[21/9]" />
          </div>
        )}
      </Container>
    </section>
  );
}

function ContactForm({ contactPage }: { contactPage: ContactPage }) {
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const { subjects } = siteConfig.contactForm;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput, unknown, ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: undefined,
      subject: subjects[0] ?? 'General Inquiry',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Honeypot: bots fill the hidden field; pretend success without sending
    if (honeypot) {
      setIsSuccess(true);
      return;
    }
    setIsSubmitting(true);
    setError(undefined);

    try {
      await submitContactForm(data);
      setIsSuccess(true);
      reset();
    } catch {
      setError(
        'Unable to send your message right now. Please try again later or contact us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
      <h3 className="text-xl font-bold text-white md:text-2xl">{contactPage.formTitle}</h3>
      <p className="text-text-inverse/70 mt-2 text-sm md:text-base">
        {contactPage.formDescription}
      </p>

      {isSuccess ? (
        <div className="mt-8 rounded-xl border border-green-500/20 bg-green-500/10 p-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
            <svg
              className="h-8 w-8 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold text-white">Message Sent!</h4>
          <p className="text-text-inverse/70 mt-2">{contactPage.successMessage}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5" noValidate>
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '-9999px',
              width: '1px',
              height: '1px',
              opacity: 0,
            }}
          />
          {error && (
            <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-red-300">
              {error}
            </div>
          )}

          <FormField label="Full Name" htmlFor="contact-name" error={errors.name?.message}>
            <input
              id="contact-name"
              type="text"
              autoComplete="name"
              {...register('name')}
              className={formInputStyles}
              placeholder="Your full name"
            />
          </FormField>

          <FormField label="Email Address" htmlFor="contact-email" error={errors.email?.message}>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              {...register('email')}
              className={formInputStyles}
              placeholder="your@email.com"
            />
          </FormField>

          <FormField label="Phone Number" htmlFor="contact-phone" error={errors.phone?.message}>
            <input
              id="contact-phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              {...register('phone')}
              className={formInputStyles}
              placeholder="+251 9X XXX XXXX"
            />
          </FormField>

          <FormField
            label="What can we help you with?"
            htmlFor="contact-subject"
            error={errors.subject?.message}
          >
            <select id="contact-subject" {...register('subject')} className={formSelectStyles}>
              {subjects.map((subject) => (
                <option key={subject} value={subject} className="bg-brand-primary">
                  {subject}
                </option>
              ))}
            </select>
          </FormField>

          <FormField label="Your Message" htmlFor="contact-message" error={errors.message?.message}>
            <textarea
              id="contact-message"
              {...register('message')}
              rows={4}
              className={formInputStyles}
              placeholder="How can we help you?"
            />
          </FormField>

          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              'w-full rounded-lg px-8 py-4 text-base font-semibold',
              'bg-brand-primary text-white',
              'transition-all duration-300',
              'hover:scale-[1.02] hover:shadow-[0_0_30px_color-mix(in_srgb,var(--brand-primary)_30%,transparent)]',
              'disabled:cursor-not-allowed disabled:opacity-50',
              'focus:ring-brand-primary/50 focus:ring-2 focus:outline-none'
            )}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
}

function MapEmbed({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'h-full min-h-[320px] overflow-hidden rounded-xl border border-white/10 bg-white/5',
        className
      )}
    >
      <iframe
        src={mapEmbedUrl}
        title={`${siteConfig.name} location on Google Maps`}
        className="h-full min-h-[320px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}

function FormField({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-text-inverse/90 mb-1.5 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-sm text-red-400">{error}</p>}
    </div>
  );
}

const formInputStyles = cn(
  'block w-full rounded-lg px-4 py-3.5',
  'bg-white/5 border border-white/10',
  'text-white placeholder-white/40',
  'transition-all duration-200',
  'focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/30 focus:outline-none',
  'hover:border-white/20'
);

const formSelectStyles = cn(
  'block w-full rounded-lg px-4 py-3.5',
  'bg-brand-primary border border-white/10',
  'text-white',
  'transition-all duration-200',
  'focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:outline-none',
  'hover:border-white/20'
);

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="bg-brand-accent/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
        <Icon className="text-brand-accent h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="text-text-inverse/60 text-sm">{label}</p>
        <p className="text-lg font-medium break-words text-white">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block transition-opacity hover:opacity-80">
        {content}
      </a>
    );
  }

  return content;
}

function QuickLink({
  href,
  icon: Icon,
  label,
  external,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="text-brand-accent hover:text-brand-accent-dark inline-flex items-center text-sm transition-colors md:text-base"
    >
      <Icon className="mr-2 h-4 w-4" />
      {label}
    </a>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
