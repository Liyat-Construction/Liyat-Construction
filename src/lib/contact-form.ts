/**
 * Contact Form
 * Validation schema + submission to a third-party form service (Formspree or Web3Forms).
 * Runs entirely in the browser, so it works on Vercel and on static hosting alike.
 * Provider and key are configured in src/config/site.ts → contactForm.
 */

import { z } from 'zod';
import { siteConfig } from '@/config/site';

// Digits with optional +, spaces, dashes and parentheses; 7–20 characters.
const phonePattern = /^\+?[\d\s()-]{7,20}$/;

const { provider, formKey } = siteConfig.contactForm;

export const isContactFormEnabled = provider !== 'none' && formKey.trim().length > 0;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(80, 'Name too long')
    .regex(/^[\p{L}\p{M}\s'.-]+$/u, 'Name contains invalid characters'),
  email: z.string().trim().min(1, 'Email is required').email('Invalid email address').max(120),
  phone: z
    .string()
    .optional()
    .transform((value) => (value ?? '').trim() || undefined)
    .refine((value) => value === undefined || phonePattern.test(value), 'Invalid phone number'),
  subject: z.string().min(1, 'Please choose a subject'),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message too long'),
});

export type ContactFormInput = z.input<typeof contactFormSchema>;
export type ContactFormValues = z.output<typeof contactFormSchema>;

export async function submitContactForm(values: ContactFormValues): Promise<void> {
  if (!isContactFormEnabled) throw new Error('Contact form is not configured');

  const subject = `${values.subject} — ${siteConfig.name} website`;

  const request =
    provider === 'web3forms'
      ? {
          url: 'https://api.web3forms.com/submit',
          body: { access_key: formKey, from_name: siteConfig.name, ...values, subject },
        }
      : {
          url: `https://formspree.io/f/${encodeURIComponent(formKey)}`,
          body: { ...values, _subject: subject, _replyto: values.email },
        };

  const response = await fetch(request.url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(request.body),
  });

  const result = (await response.json().catch(() => ({}))) as { success?: boolean };

  if (!response.ok || result.success === false) {
    throw new Error('Form submission failed');
  }
}
