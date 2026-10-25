import type { MetadataRoute } from 'next';
import { pageUrl } from '@/lib/metadata';
import { siteConfig } from '@/config/site';
import { SERVICES } from '@/data/services';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    // Anchor links (/#services, /#contact) point into the home page and are dropped below
    ...siteConfig.navigation.main.map((link) => link.href),
    ...SERVICES.map((service) => `/services/${service.slug}`),
  ];
  return [...new Set(paths.filter((path) => !path.includes('#')))].map((path) => ({
    url: pageUrl(path),
  }));
}
