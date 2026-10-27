/**
 * Contact section copy (the last section on Home, `/#contact` — D-74). `header` supplies
 * the section's centred eyebrow and title (D-93).
 * Contact details (phone, email, address, hours) live in src/config/site.ts.
 */

import type { ContactPage } from '@/types/content';

export const CONTACT_PAGE: ContactPage = {
  header: {
    eyebrow: 'Get in touch',
    title: 'Let’s start a conversation',
    intro:
      'Planning a new well, testing an existing source or installing a pump? Tell us where your project is and what you need.',
    description:
      'Contact Liyat Construction about hydrogeological surveys, borehole drilling, pumping tests, borehole rehabilitation, pump supply and installation, and turnkey water projects in Ethiopia.',
  },
  form: {
    title: 'Send us a message',
    // Owner, 2026-10-27: softened to 48 hours (was Mekan's 24); client corrects it
    // if they disagree — no C-33 ask
    intro: "We'll respond within 48 hours with a clear path forward.",
    fields: {
      name: 'Full name',
      email: 'Email address',
      phone: 'Phone number',
      subject: 'What do you need?',
      message: 'Project details',
    },
    placeholders: {
      name: 'e.g. Dawit Alemu',
      email: 'you@company.com',
      phone: '+251 91 234 5678',
      message: 'Tell us about your project, its location and any planned dates.',
    },
    subjectPrompt: 'Choose a subject',
    messageHint:
      'Include the location, the service you need and any planned dates. Please do not send sensitive documents through this form.',
    submit: 'Send inquiry',
    sending: 'Sending your inquiry…',
    success: 'Your inquiry has been sent. Thank you for telling us about your project.',
    error: 'Your inquiry could not be sent. Please try again or use the contact details alongside.',
    noScript: 'To send an inquiry online, enable JavaScript or contact us by phone or email.',
    validation: {
      name: 'Enter your name using 2–80 characters.',
      email: 'Enter a valid email address using no more than 120 characters.',
      phone: 'Enter a phone number with 7–15 digits.',
      subject: 'Choose a subject from the list.',
      message: 'Describe your project using 10–2,000 characters.',
    },
  },
  details: {
    phone: 'Phone',
    email: 'Email',
    address: 'Visit our office',
    hours: 'Office hours',
  },
};
