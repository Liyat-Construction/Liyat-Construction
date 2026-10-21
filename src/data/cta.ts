/**
 * Call to action
 * The band at the end of every page except Contact.
 */

import type { CtaBandContent } from '@/types/content';

export const CTA_BAND: CtaBandContent = {
  title: 'Planning a new water source?',
  text: 'Tell us where the site is and how much water you need. We will tell you what it takes, from survey to handover.',
  action: { label: 'Contact us', href: '/contact' },
};
