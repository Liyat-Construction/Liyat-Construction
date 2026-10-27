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

// PROJECT.md §7 (Home): the full-screen photo hero (D-81), then the home sections.
export default function Home() {
  return (
    <>
      <Hero {...HOME_PAGE.hero} />
      <HomeSections />
    </>
  );
}
