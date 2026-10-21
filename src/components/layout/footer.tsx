import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Icon } from '@/components/ui/icon';
import { Logo } from '@/components/ui/logo';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

const { main, cta, legal } = siteConfig.navigation;
const { phone, email, address, officeHours } = siteConfig.contact;

const linkStyle =
  'text-white underline-offset-4 decoration-1 hover:underline ease-standard transition-colors duration-(--duration-fast)';

/**
 * Ink footer with the green rule on its top edge: logo, descriptor, company
 * description, links, contact details, legal name in English and Amharic.
 * Rows without a value render nothing.
 */
export function Footer() {
  return (
    <footer data-on-dark className="bg-ink border-brand border-t-(length:--rule-width) text-white">
      <Container>
        <div className="py-section-sm gap-grid grid md:grid-cols-2 lg:grid-cols-12">
          <div className="flex flex-col gap-5 md:col-span-2 lg:col-span-5">
            <Link href="/" className="flex items-center gap-3 self-start">
              <Logo variant="white" alt="" />
              <span className="flex flex-col">
                <span className="font-heading text-h4 font-bold">{siteConfig.name}</span>
                <span className="text-small text-white/80">{siteConfig.descriptor}</span>
              </span>
            </Link>
            <p className="max-w-prose text-white/80">{siteConfig.footer.description}</p>
          </div>

          <nav aria-labelledby="footer-pages" className="flex flex-col gap-4 lg:col-span-3">
            <h2 id="footer-pages" className="text-eyebrow text-white/80 uppercase">
              Pages
            </h2>
            <ul className="flex flex-col gap-3">
              {[...main, cta].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkStyle}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4 lg:col-span-4">
            <h2 className="text-eyebrow text-white/80 uppercase">Contact</h2>
            <ul className="flex flex-col gap-3">
              {phone && (
                <li className="flex items-start gap-3">
                  <Icon name="phone" className="mt-0.5" />
                  <a href={`tel:${phone.replaceAll(' ', '')}`} className={linkStyle}>
                    {phone}
                  </a>
                </li>
              )}
              {email && (
                <li className="flex items-start gap-3">
                  <Icon name="mail" className="mt-0.5" />
                  <a href={`mailto:${email}`} className={cn(linkStyle, 'break-all')}>
                    {email}
                  </a>
                </li>
              )}
              {address && (
                <li className="flex items-start gap-3">
                  <Icon name="map-pin" className="mt-0.5" />
                  <span className="text-white/80">{address}</span>
                </li>
              )}
              {officeHours && (
                <li className="flex items-start gap-3">
                  <Icon name="clock" className="mt-0.5" />
                  <span className="text-white/80">{officeHours}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="text-small flex flex-col gap-4 border-t border-white/20 py-6 text-white/80 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-1">
            <p>
              © {new Date().getFullYear()} {siteConfig.legalName}
            </p>
            <p lang="am">{siteConfig.legalNameAmharic}</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkStyle}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
