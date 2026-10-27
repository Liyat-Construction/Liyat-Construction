import { serializeJsonLd } from '@/lib/metadata';
import { siteConfig } from '@/config/site';

interface OrganizationSchemaProps {
  siteUrl: string;
}

export function OrganizationSchema({ siteUrl }: OrganizationSchemaProps) {
  const { contact, schema, social } = siteConfig;
  // Liyat's own social profiles, when it has them (C-20); empty values are left out
  const sameAs = [
    social.whatsapp && `https://wa.me/${social.whatsapp.replace(/\D/g, '')}`,
    social.facebook,
    social.instagram,
    social.linkedin,
    social.tiktok,
    social.youtube,
    social.x,
  ].filter(Boolean);

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
    ...(sameAs.length > 0 && { sameAs }),
    ...(schema.areaServed.length > 0 && {
      areaServed: schema.areaServed.map((name) => ({ '@type': 'Place', name })),
    }),
    ...(schema.knowsAbout.length > 0 && { knowsAbout: schema.knowsAbout }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd([websiteSchema, businessSchema]) }}
    />
  );
}
