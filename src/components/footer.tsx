/**
 * Footer Component
 * Site footer with brand, links, contact details and social icons
 */

import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/container';
import { SocialLinks } from '@/components/social-links';
import { siteConfig } from '@/config/site';

const footerLinks = {
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/equipment-capabilities', label: 'Equipment' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Contact' },
  ],
  legal: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
  ],
};

const { email, phone, address } = siteConfig.contact;

export function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightText = `© ${currentYear} ${siteConfig.footer.copyrightEntity}. All rights reserved.`;

  return (
    <footer className="bg-brand-primary">
      <Container>
        <div className="py-12 md:py-16">
          {/* Main Footer Content */}
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-bold text-white md:text-xl"
              >
                <div className="border-brand-accent/60 flex h-8 w-8 items-center justify-center rounded-lg border bg-white/10">
                  <Image
                    src="/logo.png"
                    alt={siteConfig.logoAlt}
                    width={24}
                    height={24}
                    className="h-6 w-auto object-contain"
                  />
                </div>
                <span>{siteConfig.name}</span>
              </Link>
              <p className="text-text-inverse/80 mt-3 text-sm leading-relaxed md:mt-4">
                {siteConfig.footer.description}
              </p>
              <SocialLinks
                className="mt-4 md:mt-6"
                linkClassName="hover:text-brand-accent text-text-inverse/60"
              />
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-brand-accent text-xs font-semibold tracking-wider uppercase md:text-sm">
                Company
              </h3>
              <ul className="mt-3 space-y-2 md:mt-4 md:space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-text-inverse/80 text-sm transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-brand-accent text-xs font-semibold tracking-wider uppercase md:text-sm">
                Contact
              </h3>
              <ul className="text-text-inverse/80 mt-3 space-y-2 text-sm md:mt-4 md:space-y-3">
                {email && (
                  <li>
                    <a href={`mailto:${email}`} className="transition-colors hover:text-white">
                      {email}
                    </a>
                  </li>
                )}
                {phone && (
                  <li>
                    <a
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="transition-colors hover:text-white"
                    >
                      {phone}
                    </a>
                  </li>
                )}
                {address && <li>{address}</li>}
              </ul>
              <div className="mt-4 md:mt-6">
                <Link
                  href="/#contact"
                  className="text-brand-accent hover:text-brand-accent-dark inline-flex items-center text-sm font-medium"
                >
                  Get in Touch
                  <ArrowIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-brand-accent/30 mt-8 border-t md:mt-12" />

          {/* Bottom Bar */}
          <div className="mt-6 flex flex-col items-center justify-between gap-4 md:mt-8 md:flex-row">
            <p className="text-text-inverse/60 text-xs md:text-sm">{copyrightText}</p>
            <div className="flex gap-4 md:gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text-inverse/60 hover:text-text-inverse text-xs transition-colors md:text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
