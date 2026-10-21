import { pageMetadata } from '@/lib/metadata';
import { Hero } from '@/components/sections/hero';
import { siteConfig } from '@/config/site';
import { HOME_PAGE } from '@/data/home';
import { HomeSections } from '@/app/_home/home-sections';

export const metadata = pageMetadata(
  '/',
  siteConfig.seo.titleDefault,
  siteConfig.seo.metaDescription
);

// Design System §4 (Home): the hero, then the shared home sections.
export default function Home() {
  return (
    <>
      <Hero eyebrow={siteConfig.descriptor} {...HOME_PAGE.hero} />
      <HomeSections />
    </>
  );
}
