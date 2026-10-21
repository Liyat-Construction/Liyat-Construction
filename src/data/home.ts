/**
 * Home Page Content
 * Hero, section headings and call-to-action copy for the homepage.
 */

import type { HomePage } from '@/types/content';

export const HOME_PAGE: HomePage = {
  heroTitleLines: ['Groundwater', 'Development', 'Engineered Right'],
  heroSlides: [
    {
      url: '/images/hero/water-column.webp',
      alt: 'Water column rising from a newly developed Liyat well',
    },
    {
      url: '/images/hero/afar-rig-fleet.webp',
      alt: 'Liyat drilling rig and support fleet at Afdera, Afar Region',
    },
    { url: '/images/hero/ethiopian-airlines.webp', alt: 'Pumping test for Ethiopian Airlines' },
    {
      url: '/images/hero/credocs-shoring.webp',
      alt: 'Drilling rig in the 14 m deep shored excavation for CREDOCS Digital Service',
    },
    {
      url: '/images/hero/yekatit-12.webp',
      alt: 'Well development at Yekatit 12 Hospital Medical College',
    },
  ],
  heroSubtitle:
    'Liyat Construction PLC delivers groundwater investigation, water-well drilling, pumping tests, and turnkey water works across Ethiopia for institutional and commercial clients.',
  heroPrimaryButtonText: 'Contact Us',
  heroPrimaryButtonUrl: '/contact',
  heroSecondaryButtonText: 'Explore Projects',
  heroSecondaryButtonUrl: '/projects',

  servicesTitle: 'What We Do',
  servicesSubtitle:
    'From hydrogeological investigation to final pump installation, we provide the full range of groundwater and water-well services your project needs.',
  projectsTitle: 'Selected Projects',
  projectsSubtitle:
    'Trusted by government agencies, international organizations, and leading Ethiopian institutions for water works that perform.',
  partnersTitle: 'Trusted By',
  testimonialsTitle: 'What Clients Say',
  testimonialsSubtitle:
    'Feedback from institutional and commercial clients who rely on Liyat for groundwater and water works.',

  ctaTitle: 'Start Your Water Project Today',
  ctaSubtitle:
    'Tell us what you need. We will review your requirements and respond with a clear, practical plan.',
  ctaPrimaryButtonText: 'Contact Us',
  ctaPrimaryButtonUrl: '/contact',
  ctaSecondaryButtonText: 'View Services',
  ctaSecondaryButtonUrl: '/services',
};
