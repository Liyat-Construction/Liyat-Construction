import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { HeroBackdrop } from '@/components/sections/hero-backdrop';
import { DraftLabel } from '@/components/ui/draft-label';
import { siteConfig } from '@/config/site';
import { HOME_PAGE } from '@/data/home';
import { PREVIEW_OPTIONS } from '@/data/preview';
import { HomeSections } from '@/app/_home/home-sections';

const option = PREVIEW_OPTIONS.a;

// Temporary review page: the home page with hero option A. Not indexed.
export const metadata: Metadata = {
  ...pageMetadata(option.path, option.title, siteConfig.seo.metaDescription),
  robots: { index: false, follow: false },
};

export default function HomeOptionA() {
  return (
    <>
      <HeroBackdrop {...HOME_PAGE.hero} />
      <HomeSections />
      <DraftLabel>{option.label}</DraftLabel>
    </>
  );
}
