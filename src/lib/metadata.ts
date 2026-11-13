import type { Metadata } from 'next';
import { siteUrl } from '@/config/env';
import { siteConfig } from '@/config/site';
import { preparedImageUrl } from '@/lib/image-loader';
import type { ImageAsset } from '@/types/content';

export function pageUrl(path: string): string {
  const normalized = path === '/' ? '/' : path.replace(/\/$/, '');
  const suffix = process.env.STATIC_EXPORT === 'true' && normalized !== '/' ? '/' : '';
  return `${siteUrl}${normalized}${suffix}`;
}

export function pageMetadata(
  path: string,
  title: string,
  description: string,
  image?: ImageAsset
): Metadata {
  const url = pageUrl(path);
  // Our own 1200 × 630 share pictures (scripts/prepare-og.mjs) declare their size, which helps
  // WhatsApp and Facebook show them on the first share
  const share = { width: 1200, height: 630 };
  const cover = image
    ? {
        url: preparedImageUrl(image.url),
        alt: image.alt,
        ...(image.url.endsWith('/og.jpg') && share),
      }
    : { url: siteConfig.seo.ogImage, alt: siteConfig.seo.ogImageAlt, ...share };
  return {
    title: path === '/' ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [cover],
    },
    twitter: { card: 'summary_large_image', title, description, images: [cover.url] },
  };
}

export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
