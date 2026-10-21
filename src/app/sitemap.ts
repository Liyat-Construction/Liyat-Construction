import type { MetadataRoute } from 'next';
import { pageUrl } from '@/lib/metadata';
import { siteConfig } from '@/config/site';
import { SERVICES } from '@/data/services';
import { PROJECTS } from '@/data/projects';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    ...siteConfig.navigation.main.map((link) => link.href),
    siteConfig.navigation.cta.href,
    ...SERVICES.map((service) => `/services/${service.slug}`),
    ...PROJECTS.map((project) => `/projects/${project.slug}`),
  ];
  return [...new Set(paths)].map((path) => ({ url: pageUrl(path) }));
}
