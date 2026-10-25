/**
 * Contact Form
 * Validation schema + submission to a third-party form service (Formspree or Web3Forms).
 * Runs entirely in the browser, so it works on Vercel and on static hosting alike.
 * Provider and key are configured in src/config/site.ts → contactForm.
 */

import * as z from 'zod/mini';
import type { ContactFormProvider } from '@/config/site';
import type { ContactPage } from '@/types/content';

// Digits with optional +, spaces, dashes and parentheses; 7–20 characters.
const phonePattern = /^\+?[\d\s()-]{7,20}$/;

export interface ContactFormConfiguration {
  provider: ContactFormProvider;
  formKey: string;
  subjects: string[];
}

export function isContactFormEnabled({ provider, formKey }: ContactFormConfiguration) {
  return provider !== 'none' && formKey.trim().length > 0;
}

export function createContactFormSchema(
  messages: ContactPage['form']['validation'],
  subjects: string[]
) {
  return z.object({
    name: z.string().check(z.trim(), z.minLength(2, messages.name), z.maxLength(80, messages.name)),
    email: z.string().check(z.trim(), z.email(messages.email), z.maxLength(120, messages.email)),
    phone: z.string().check(
      z.trim(),
      z.refine((value) => {
        const digits = value.replace(/\D/g, '').length;
        return phonePattern.test(value) && digits >= 7 && digits <= 15;
      }, messages.phone)
    ),
    subject: z.string().check(z.refine((value) => subjects.includes(value), messages.subject)),
    message: z
      .string()
      .check(z.trim(), z.minLength(10, messages.message), z.maxLength(2000, messages.message)),
  });
}

export type ContactFormValues = z.output<ReturnType<typeof createContactFormSchema>>;

export async function submitContactForm(
  values: ContactFormValues,
  configuration: ContactFormConfiguration,
  sender: string
): Promise<void> {
  if (!isContactFormEnabled(configuration)) throw new Error('Contact form is not configured');

  const { provider, formKey } = configuration;
  const subject = `${values.subject} — ${sender} website`;

  const request =
    provider === 'web3forms'
      ? {
          url: 'https://api.web3forms.com/submit',
          body: { access_key: formKey, from_name: sender, ...values, subject, botcheck: false },
        }
      : {
          url: `https://formspree.io/f/${encodeURIComponent(formKey)}`,
          body: { ...values, _subject: subject, _replyto: values.email },
        };

  const response = await fetch(request.url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(request.body),
    signal: AbortSignal.timeout(15000),
  });

  const result: unknown = await response.json();
  const accepted =
    result &&
    typeof result === 'object' &&
    (provider === 'web3forms'
      ? 'success' in result && result.success === true
      : !('success' in result) || result.success !== false);

  if (!response.ok || !accepted) {
    throw new Error('Form submission failed');
  }
}
