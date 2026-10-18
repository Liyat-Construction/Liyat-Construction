import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: siteConfig.brand.colors.primary,
    icons: [
      { src: '/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
