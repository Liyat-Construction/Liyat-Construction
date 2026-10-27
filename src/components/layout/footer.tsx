import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Icon } from '@/components/ui/icon';
import { FooterSurface } from '@/components/ui/footer-surface';
import { Logo } from '@/components/ui/logo';
import { SmartLink } from '@/components/ui/smart-link';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

const { main, cta, legal } = siteConfig.navigation;
const { phone, secondaryPhone, email, address, officeHours } = siteConfig.contact;

const linkStyle =
  'text-white underline-offset-4 decoration-1 hover:underline ease-standard transition-colors duration-(--duration-fast)';

// Icon links: a 44 px target (PROJECT.md §10) around a small 32 px outlined box, so they look
// light beside the credit while staying easy to tap (D-80)
const iconLinkStyle = 'group inline-flex size-11 items-center justify-center text-white';
const iconBoxStyle =
  'inline-flex size-8 items-center justify-center rounded-control border border-white/30 group-hover:bg-white/10 ease-standard transition-colors duration-(--duration-fast)';

interface FooterLink {
  href: string;
  label: string;
}

function LinkColumn({ id, title, links }: { id: string; title: string; links: FooterLink[] }) {
  return (
    <nav aria-labelledby={id} className="flex flex-col gap-4">
      <h2 id={id} data-footer-heading>
        {title}
      </h2>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={linkStyle}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

interface FooterProps {
  /** The six service pages, in lifecycle order (passed in by the layout, D-64) */
  services: FooterLink[];
}

/**
 * Ink footer under the closing section (D-64, D-69), divided from it by a hairline: brand, Pages,
 * Services and Contact columns; a bottom bar with the agency credit and its icon links, ©
 * with the legal name, and the legal links. Rows without a value render nothing.
 */
export function Footer({ services }: FooterProps) {
  const { credit } = siteConfig.footer;
  return (
    <FooterSurface>
      <Container>
        <div className="py-section-sm gap-grid grid gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="flex min-w-0 flex-col gap-5 sm:col-span-2 lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 self-start">
              <Logo variant="white" alt="" />
              <span className="flex flex-col">
                <span className="font-heading text-h4 font-bold">{siteConfig.name}</span>
                <span className="text-small text-white/80">{siteConfig.descriptor}</span>
              </span>
            </Link>
            <p className="max-w-prose text-white/80">{siteConfig.footer.description}</p>
          </div>

          <div className="lg:col-span-2">
            <LinkColumn
              id="footer-pages"
              title={siteConfig.footer.headings.pages}
              links={[...main, cta]}
            />
          </div>
          <div className="min-w-0 lg:col-span-3">
            <LinkColumn
              id="footer-services"
              title={siteConfig.footer.headings.services}
              links={services}
            />
          </div>

          <div className="flex min-w-0 flex-col gap-4 sm:col-span-2 lg:col-span-3">
            <h2 data-footer-heading>{siteConfig.footer.headings.contact}</h2>
            <ul className="flex flex-col gap-3">
              {[phone, secondaryPhone].filter(Boolean).map((number) => (
                <li key={number} className="flex items-start gap-3">
                  <Icon name="phone" className="mt-0.5" />
                  <a href={`tel:${number.replaceAll(' ', '')}`} className={linkStyle}>
                    {number}
                  </a>
                </li>
              ))}
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

        {/* Phones: ©, legal, credit. From lg: credit · © · legal, the © centred */}
        <div className="text-small flex flex-col gap-4 border-t border-white/20 py-6 text-white/80 lg:grid lg:grid-cols-3 lg:items-center">
          {/* The year of the build, not hard-coded (D-64); English legal name only (D-80) */}
          <p className="lg:order-2 lg:text-center">
            © {new Date().getFullYear()} {siteConfig.legalName}. {siteConfig.footer.rights}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 lg:order-3 lg:justify-end">
            {legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkStyle}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {credit.href && (
            <div className="flex items-center gap-1 lg:order-1">
              {/* The 44 px icon targets carry their own 6 px margin, so the gaps stay small */}
              <span data-footer-credit>
                {credit.prefix}{' '}
                <span data-footer-agency>
                  <SmartLink href={credit.href} className={linkStyle}>
                    {credit.name}
                  </SmartLink>
                </span>
              </span>
              <ul className="flex">
                {credit.links.map((link) => (
                  <li key={link.href}>
                    <SmartLink href={link.href} className={iconLinkStyle}>
                      <span className={iconBoxStyle}>
                        <Icon name={link.icon} size="sm" label={link.label} />
                      </span>
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </FooterSurface>
  );
}
