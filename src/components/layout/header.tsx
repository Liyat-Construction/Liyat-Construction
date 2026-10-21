import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Icon } from '@/components/ui/icon';
import { Logo } from '@/components/ui/logo';
import { siteConfig } from '@/config/site';
import { MobileMenu } from './mobile-menu';
import { NavLinks } from './nav-links';

const { main, cta } = siteConfig.navigation;

/**
 * White sticky header: full-color logo with name and descriptor, the main
 * links, and "Contact us". The green rule along its bottom edge separates it
 * from the page; no shadow (D-39). Below `lg` the links move into MobileMenu.
 */
export function Header() {
  return (
    <header className="border-brand sticky top-0 z-40 border-b-(length:--rule-width) bg-white">
      <Container className="flex h-(--header-height) items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Logo alt="" eager />
          <span className="flex flex-col">
            <span className="font-heading text-h4 text-ink font-bold">{siteConfig.name}</span>
            <span className="text-small text-ink-muted max-sm:sr-only">
              {siteConfig.descriptor}
            </span>
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <nav aria-label="Main" className="max-lg:hidden">
            <NavLinks links={main} layout="bar" />
          </nav>
          <Button href={cta.href} className="max-sm:hidden">
            {cta.label}
          </Button>
          <MobileMenu
            links={main}
            openIcon={<Icon name="menu" size="lg" label="Open menu" />}
            closeIcon={<Icon name="close" size="lg" label="Close menu" />}
            action={
              <Button href={cta.href} size="lg">
                {cta.label}
              </Button>
            }
          />
        </div>
      </Container>
    </header>
  );
}
