import type { LegalPage } from '@/types/content';

// PLACEHOLDER(C-29): client and qualified reviewer must approve privacy practices before launch.
export const PRIVACY_PAGE: LegalPage = {
  header: {
    eyebrow: 'Legal',
    title: 'Privacy policy',
    intro: 'How information you share through this website is handled.',
    description:
      'How the Liyat Construction website handles project inquiries, contact information, third-party services and privacy requests.',
  },
  contentsLabel: 'On this page',
  sectionLabel: 'Section',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction',
      paragraphs: [
        'This policy explains how information is handled when you browse the Liyat Construction PLC website or contact us about a water project. It covers the website and project inquiries, rather than the separate information arrangements that may form part of a project agreement.',
      ],
    },
    {
      id: 'information',
      title: 'Information you share',
      paragraphs: [
        'You choose what to share when you contact Liyat. When the online inquiry form is available, it requests the following information:',
      ],
      items: [
        'Your name and email address, so we can respond to your inquiry.',
        'Your phone number, if you choose to provide it.',
        'An inquiry subject and the project details you enter in your message.',
        'Any further information you choose to send when continuing the conversation by email or phone.',
      ],
    },
    {
      id: 'usage',
      title: 'How inquiry information is used',
      paragraphs: [
        'Information you send is used to understand your request, respond to your questions and discuss the services relevant to your project. A site location, for example, helps explain where the work is needed; a phone number provides another way to continue the conversation.',
        'Sending an inquiry does not subscribe you to a newsletter or establish a project agreement. Please share only the information needed to explain your request.',
      ],
    },
    {
      id: 'providers',
      title: 'Form, email and hosting providers',
      paragraphs: [
        'The inquiry form uses Web3Forms when it is enabled. Your submitted details are sent to that provider for processing and delivery to Liyat’s receiving inbox. While the form is unavailable, you can contact Liyat directly using the published email address or phone numbers.',
        'Website hosting, form processing and email services may handle technical information, such as IP addresses and delivery logs, as part of operating their services. Their handling of that information is also subject to their own privacy notices. Contact Liyat if you need details about the providers involved in your inquiry.',
      ],
    },
    {
      id: 'maps-analytics',
      title: 'Maps and analytics',
      paragraphs: [
        'If an office map is offered, it loads only after you choose to display it. Loading Google Maps connects your browser to Google and shares technical information, including your IP address. Hiding the map removes it from the page but does not reverse information already sent.',
        'Analytics are disabled in the current website configuration. If analytics or other tracking services are introduced, this policy should be updated to explain them before they are activated.',
      ],
    },
    {
      id: 'security-retention',
      title: 'Security and retention',
      paragraphs: [
        'Please do not send sensitive personal information, passwords or confidential project documents through the inquiry form. If a project requires confidential documents, ask Liyat how to share them before sending them.',
        'No internet transmission can be guaranteed to be completely secure. This policy does not promise a particular security certification or a fixed retention period. Contact Liyat to ask how long information relating to your inquiry is kept and whether it can be removed.',
      ],
    },
    {
      id: 'requests',
      title: 'Your privacy requests',
      paragraphs: [
        'You can contact Liyat to ask about information you have shared, request a correction, or ask for deletion. Explain the inquiry concerned so that the relevant correspondence can be identified; do not send identification documents unless a suitable verification method has been agreed.',
        'The rights available and any limits on a request depend on applicable law and the circumstances. Some information may need to be retained where a legal or contractual obligation applies.',
      ],
    },
    {
      id: 'privacy-contact',
      title: 'Contact us',
      paragraphs: [
        'For questions about this policy or information you have shared, use the email address below or the contact section on our home page. Mention that your message concerns privacy and include enough context to identify the original inquiry.',
      ],
    },
  ],
  questions: {
    title: 'Questions about your privacy?',
    intro: 'Ask about your information or the way this website handles an inquiry.',
    emailLabel: 'Email us about privacy',
  },
  contact: { label: 'Contact us', href: '/#contact' },
};

// PLACEHOLDER(C-29): client and qualified reviewer must approve website terms before launch.
export const TERMS_PAGE: LegalPage = {
  header: {
    eyebrow: 'Legal',
    title: 'Terms of service',
    intro: 'Using this website, making an inquiry and discussing a water project.',
    description:
      'Website terms for Liyat Construction, covering responsible use, project inquiries, content permissions and separate project agreements.',
  },
  contentsLabel: 'On this page',
  sectionLabel: 'Section',
  sections: [
    {
      id: 'introduction',
      title: 'About these terms',
      paragraphs: [
        'These terms describe the use of the Liyat Construction PLC website and its inquiry facilities. They concern the website, not the detailed engineering, commercial or delivery terms of a water project.',
        'Please read these terms before using the inquiry form or relying on website information. If something is unclear, contact Liyat before making a project decision.',
      ],
    },
    {
      id: 'services',
      title: 'Our services',
      paragraphs: [
        'The website introduces Liyat’s groundwater development and water-well engineering work. The service areas presented are:',
      ],
      items: [
        'Hydrogeological & Geophysical Survey',
        'Borehole Drilling',
        'Pumping Tests',
        'Borehole Rehabilitation',
        'Pump Supply & Installation',
        'Turnkey Water Projects',
      ],
    },
    {
      id: 'website-use',
      title: 'Responsible website use',
      paragraphs: [
        'Use this website for lawful purposes and legitimate inquiries. When submitting a message, provide information you are authorized to share. Do not use the website to:',
      ],
      items: [
        'Send spam, misleading inquiries or unlawful material.',
        'Attempt to access systems or information without authorization.',
        'Introduce malicious code or interfere with the website’s operation.',
        'Submit another person’s confidential or sensitive information without permission.',
      ],
    },
    {
      id: 'project-agreements',
      title: 'Inquiries and project agreements',
      paragraphs: [
        'An inquiry starts a conversation. It does not create a contract, confirm a price, reserve equipment or secure project dates. A successful form submission indicates provider acceptance of the message, not that Liyat has read it or agreed to carry out work.',
        'Project scope, specifications, fees, payment schedules, responsibilities, confidentiality, warranties and delivery dates need to be agreed in a separate written project agreement. These website terms do not set a standard deposit, cancellation charge or ownership arrangement for project deliverables.',
      ],
    },
    {
      id: 'content-rights',
      title: 'Content, photographs and client identities',
      paragraphs: [
        'Website copy, photographs, drawings, logos and documents may belong to Liyat or to their respective rights holders. A client logo identifies the organization or project shown; its presence does not transfer any right to use that identity.',
        'You may share links to the website. Ask the relevant rights holder before reproducing, adapting or using photographs, logos, drawings or documents in other materials, except where use is permitted by applicable law.',
      ],
    },
    {
      id: 'project-information',
      title: 'Understanding project information',
      paragraphs: [
        'The website provides general information. It is not a site-specific engineering assessment, quotation or guarantee of groundwater availability, well depth or yield. Ground conditions and project requirements vary, and earlier results do not establish what will be achieved at another site.',
        'Service descriptions, diagrams and equipment information help explain the work. Confirm the relevant technical details and suitability with Liyat before using them to specify or plan a project.',
      ],
    },
    {
      id: 'external-services',
      title: 'Availability and external services',
      paragraphs: [
        'The website and third-party services may be interrupted or unavailable. If the inquiry form is unavailable or a submission fails, use the published phone or email details to contact Liyat.',
        'External websites, form delivery and optional maps operate under their providers’ own terms and privacy notices. Follow external links only after considering the information you are sharing with those services.',
      ],
    },
    {
      id: 'applicable-terms',
      title: 'Applicable rights and project disputes',
      paragraphs: [
        'These website terms do not replace applicable law or a signed project agreement. Any project-specific governing law, dispute process, warranty or allocation of liability belongs in the relevant agreement and should be clarified before work is commissioned.',
        'Nothing on this page is intended to exclude rights or obligations that cannot lawfully be excluded. Raise questions about a proposed project directly with Liyat before accepting its commercial terms.',
      ],
    },
    {
      id: 'terms-contact',
      title: 'Contact us',
      paragraphs: [
        'If you have a question about these terms, need permission to reuse material or want to clarify a service description, contact Liyat using the email address below or the contact section on our home page.',
      ],
    },
  ],
  questions: {
    title: 'Questions about these terms?',
    intro: 'Talk to Liyat before relying on website information for your project.',
    emailLabel: 'Email us about these terms',
  },
  contact: { label: 'Contact us', href: '/#contact' },
};
