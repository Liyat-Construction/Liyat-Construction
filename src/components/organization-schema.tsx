import { siteConfig } from '@/config/site';
import { socialLinks } from '@/components/social-links';

interface OrganizationSchemaProps {
  siteUrl: string;
}

export function OrganizationSchema({ siteUrl }: OrganizationSchemaProps) {
  const { contact, schema } = siteConfig;

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteUrl,
  };

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': schema.type,
    name: siteConfig.name,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}${siteConfig.seo.ogImage}`,
    description: siteConfig.description,
    ...(schema.alternateName.length > 0 && { alternateName: schema.alternateName }),
    ...(schema.slogan && { slogan: schema.slogan }),
    ...(contact.phone && { telephone: contact.phone }),
    ...(contact.email && { email: contact.email }),
    ...(contact.address && { address: contact.address }),
    ...(schema.priceRange && { priceRange: schema.priceRange }),
    ...((contact.phone || contact.email) && {
      contactPoint: {
        '@type': 'ContactPoint',
        ...(contact.phone && { telephone: contact.phone }),
        ...(contact.email && { email: contact.email }),
        contactType: 'customer service',
        availableLanguage: schema.availableLanguage,
      },
    }),
    ...(socialLinks.length > 0 && { sameAs: socialLinks.map((link) => link.href) }),
    ...(schema.areaServed.length > 0 && {
      areaServed: schema.areaServed.map((name) => ({ '@type': 'Place', name })),
    }),
    ...(schema.knowsAbout.length > 0 && { knowsAbout: schema.knowsAbout }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([websiteSchema, businessSchema]) }}
    />
  );
}
