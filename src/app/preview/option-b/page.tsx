import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { HeroBlend } from '@/components/sections/hero-blend';
import { DraftLabel } from '@/components/ui/draft-label';
import { siteConfig } from '@/config/site';
import { HOME_PAGE } from '@/data/home';
import { PREVIEW_OPTIONS } from '@/data/preview';
import { HomeSections } from '@/app/_home/home-sections';

const option = PREVIEW_OPTIONS.b;

// Temporary review page: the home page with hero option B. Not indexed.
export const metadata: Metadata = {
  ...pageMetadata(option.path, option.title, siteConfig.seo.metaDescription),
  robots: { index: false, follow: false },
};

export default function HomeOptionB() {
  const { hero } = HOME_PAGE;
  return (
    <>
      <HeroBlend {...hero} image={hero.blendImage} />
      <HomeSections />
      <DraftLabel>{option.label}</DraftLabel>
    </>
  );
}
