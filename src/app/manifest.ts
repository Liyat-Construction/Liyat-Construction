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
    background_color: '#f8f7f3', // design-exception: manifest literal, mirrors --color-paper
    theme_color: '#ffffff', // design-exception: manifest literal, mirrors the white header (--color-white)
    icons: [
      { src: '/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
