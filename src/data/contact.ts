/**
 * Contact section copy (the last section on Home, `/#contact` — D-74). `header` is unused
 * since the contact page was removed; kept for the section's future heading.
 * Contact details (phone, email, address, map, socials) live in src/config/site.ts.
 */

import type { ContactPage } from '@/types/content';

export const CONTACT_PAGE: ContactPage = {
  header: {
    eyebrow: 'Contact us',
    title: 'Tell us about your water project',
    intro:
      'Planning a new well, testing an existing source or installing a pump? Tell us where your project is and what you need.',
    description:
      'Contact Liyat Construction about hydrogeological surveys, borehole drilling, pumping tests, borehole rehabilitation, pump supply and installation, and turnkey water projects in Ethiopia.',
  },
  form: {
    title: 'Send an inquiry',
    intro: 'Share the details you have. You do not need a finished brief to start a conversation.',
    fields: {
      name: 'Full name',
      organization: 'Organization',
      email: 'Email address',
      phone: 'Phone number',
      subject: 'What do you need?',
      message: 'Project details',
    },
    subjectPrompt: 'Choose a subject',
    messageHint:
      'Include the location, the service you need and any planned dates. Please do not send sensitive documents through this form.',
    submit: 'Send inquiry',
    sending: 'Sending your inquiry…',
    success: 'Your inquiry has been sent. Thank you for telling us about your project.',
    error: 'Your inquiry could not be sent. Please try again or use the contact details alongside.',
    unavailable:
      'Online inquiries are not available yet. Please use the contact details alongside.',
    privacy: 'Your details will be used to respond to your inquiry.',
    privacyLink: { label: 'Read our privacy policy', href: '/privacy-policy' },
    noScript: 'To send an inquiry online, enable JavaScript or contact us by phone or email.',
    validation: {
      name: 'Enter your name using 2–80 characters.',
      organization: 'Use no more than 120 characters for your organization.',
      email: 'Enter a valid email address using no more than 120 characters.',
      phone: 'Enter a phone number with 7–15 digits, or leave this field empty.',
      subject: 'Choose a subject from the list.',
      message: 'Describe your project using 10–2,000 characters.',
    },
  },
  details: {
    title: 'Talk to Liyat',
    intro: 'For project inquiries, you can also reach us directly.',
    phone: 'Phone',
    email: 'Email',
    address: 'Office',
    hours: 'Office hours',
  },
  map: {
    title: 'Liyat Construction office on Google Maps',
    notice: 'Loading the map connects to Google Maps and shares your IP address with Google.',
    load: 'Load office map',
    hide: 'Hide office map',
  },
};
