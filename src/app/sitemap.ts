import type { MetadataRoute } from 'next';
import { siteUrl } from '@/config/env';
import { SERVICES } from '@/data/services';
import { PROJECTS } from '@/data/projects';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/projects`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${siteUrl}/equipment-capabilities`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    { url: `${siteUrl}/testimonials`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${siteUrl}/terms-of-service`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
