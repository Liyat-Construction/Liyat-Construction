import { serializeJsonLd } from '@/lib/metadata';
import { siteConfig } from '@/config/site';

interface OrganizationSchemaProps {
  siteUrl: string;
  /** The six services, from the app layer (components do not import data) */
  services: { name: string; path: string }[];
}

export function OrganizationSchema({ siteUrl, services }: OrganizationSchemaProps) {
  const { contact, schema, social } = siteConfig;
  const businessId = `${siteUrl}/#business`;
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
    ...(schema.alternateName.length > 0 && { alternateName: schema.alternateName }),
    url: siteUrl,
    publisher: { '@id': businessId },
  };

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': schema.type,
    '@id': businessId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}${siteConfig.seo.ogImage}`,
    description: siteConfig.description,
    ...(schema.alternateName.length > 0 && { alternateName: schema.alternateName }),
    ...(schema.slogan && { slogan: schema.slogan }),
    ...(contact.phone && { telephone: contact.phone }),
    ...(contact.email && { email: contact.email }),
    ...(schema.foundingDate && { foundingDate: schema.foundingDate }),
    ...(schema.founder.name && {
      founder: { '@type': 'Person', name: schema.founder.name, jobTitle: schema.founder.jobTitle },
    }),
    ...(contact.address && { address: { '@type': 'PostalAddress', ...schema.postalAddress } }),
    ...(contact.map.latitude && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: contact.map.latitude,
        longitude: contact.map.longitude,
      },
    }),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: schema.openingHours.days,
      opens: schema.openingHours.opens,
      closes: schema.openingHours.closes,
    },
    ...(services.length > 0 && {
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Water-well drilling and groundwater services',
        itemListElement: services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            url: `${siteUrl}${service.path}`,
            provider: { '@id': businessId },
          },
        })),
      },
    }),
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
