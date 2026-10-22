import type { LegalPage } from '@/types/content';

// PLACEHOLDER(C-29): client and qualified reviewer must approve privacy practices before launch.
export const PRIVACY_PAGE: LegalPage = {
  header: {
    eyebrow: 'Legal',
    title: 'Privacy policy',
    intro:
      'How this website handles project inquiries and information shared with Liyat Construction.',
    description:
      'Information about inquiry data, third-party form processing and optional maps on the Liyat Construction website.',
  },
  notice:
    'Draft for review. Liyat must confirm its data handling, retention and provider arrangements before this policy is published.',
  updated: 'Draft updated: October 2026',
  sections: [
    {
      title: 'Information you share',
      paragraphs: [
        'When enabled, the inquiry form asks for your name, email address, inquiry subject and project details. Organization and phone number are optional. Please do not include sensitive personal information or confidential project documents.',
      ],
    },
    {
      title: 'Sending an inquiry',
      paragraphs: [
        'The online form is unavailable until Liyat configures its receiving inbox. When enabled, it sends your inquiry to Web3Forms for processing and delivery to that inbox. A successful form response acknowledges provider acceptance, not that Liyat has read or replied to your inquiry.',
      ],
    },
    {
      title: 'Hosting and third-party services',
      paragraphs: [
        'The website host and inquiry or email providers may process technical information, including IP addresses, to operate their services. The final hosting provider, processing locations and applicable provider terms must be confirmed before launch.',
      ],
    },
    {
      title: 'Optional office map',
      paragraphs: [
        'If an office map is available, Google Maps loads only after you choose to load it. Loading the map connects your browser to Google and shares technical information such as your IP address. Hiding the map removes the frame but cannot undo information already sent.',
      ],
    },
    {
      title: 'Analytics',
      paragraphs: [
        'Analytics are disabled in the current website configuration. Any future analytics service requires a separate decision and an update to this policy before activation.',
      ],
    },
    {
      title: 'Use, retention and requests',
      paragraphs: [
        'Inquiry details are intended for responding to your request and discussing the relevant water project. Liyat must approve its access controls, retention periods and process for handling access, correction or deletion requests before launch. Contact Liyat using the contact section on our home page for questions about information you have shared.',
      ],
    },
  ],
  contact: { label: 'Contact us about privacy', href: '/#contact' },
};

// PLACEHOLDER(C-29): client and qualified reviewer must approve website terms before launch.
export const TERMS_PAGE: LegalPage = {
  header: {
    eyebrow: 'Legal',
    title: 'Terms of service',
    intro: 'Information about using this website and making a project inquiry.',
    description:
      'Draft website terms for Liyat Construction. Project scope, pricing and contractual obligations require a separate written agreement.',
  },
  notice:
    'Draft for review. These website terms require Liyat’s approval and appropriate legal review before publication.',
  updated: 'Draft updated: October 2026',
  sections: [
    {
      title: 'Website information',
      paragraphs: [
        'This website introduces Liyat Construction’s groundwater development and water-well engineering services. Information here is general and is not a site-specific engineering assessment, quotation or guarantee of groundwater availability, depth or yield.',
      ],
    },
    {
      title: 'Project inquiries and agreements',
      paragraphs: [
        'Sending an inquiry does not create a contract or reserve equipment or project dates. Scope, specifications, price, payment schedule, responsibilities, warranties and delivery dates must be established in a separate written project agreement. No standard deposit percentage or cancellation period is established by this website.',
      ],
    },
    {
      title: 'Responsible use',
      paragraphs: [
        'Use the website and inquiry form for legitimate inquiries. Do not submit unlawful material, attempt to disrupt the website or send information you are not authorized to share.',
      ],
    },
    {
      title: 'Photographs and project references',
      paragraphs: [
        'Project descriptions and photographs provide context for the work shown. They do not establish that the same ground conditions, equipment or results will apply at another site. Permission to reuse photographs, logos or documents must be obtained from the relevant rights holder.',
      ],
    },
    {
      title: 'Availability and external services',
      paragraphs: [
        'Website availability and third-party inquiry or map services may be interrupted. If the form is unavailable or a submission fails, use the phone or email details on the contact section on our home page. External services operate under their own terms and privacy notices.',
      ],
    },
    {
      title: 'Questions and updates',
      paragraphs: [
        'Ask Liyat to clarify any website information before relying on it for a project decision. The final terms, applicable law and any dispute provisions must be reviewed and approved by Liyat; this draft does not replace a signed agreement or applicable law.',
      ],
    },
  ],
  contact: { label: 'Contact us about these terms', href: '/#contact' },
};
