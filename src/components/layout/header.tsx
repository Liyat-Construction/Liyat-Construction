import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Icon } from '@/components/ui/icon';
import { Logo } from '@/components/ui/logo';
import { siteConfig } from '@/config/site';
import { HeaderSolid } from './header-solid';
import { MobileMenu } from './mobile-menu';
import { NavLinks } from './nav-links';

const { main, cta } = siteConfig.navigation;

/**
 * White sticky header: full-color logo with name and descriptor, the main
 * links, and "Contact us". The green rule along its bottom edge separates it
 * from the page; no shadow (D-39). Below `lg` the links move into MobileMenu.
 * Over a hero marked `data-header-overlay` it floats see-through with white
 * text (`over-photo:`), and HeaderSolid turns it white after a small scroll.
 */
export function Header() {
  return (
    <header
      data-site-header
      className="border-brand ease-standard over-photo:border-transparent over-photo:bg-transparent sticky top-0 z-40 border-b-(length:--rule-width) bg-white transition-colors duration-(--duration-base)"
    >
      <HeaderSolid />
      <Container className="flex h-(--header-height) items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Logo variant="adaptive" alt="" eager />
          <span className="flex flex-col">
            <span className="font-heading text-h4 text-ink over-photo:text-white font-bold">
              {siteConfig.name}
            </span>
            <span className="text-small text-ink-muted over-photo:text-white/80 max-sm:sr-only lg:max-xl:sr-only">
              {siteConfig.descriptor}
            </span>
          </span>
        </Link>
        {/* mx-auto centres the links between the logo and the button, so air sits on both sides */}
        <nav aria-label="Main" className="mx-auto max-lg:hidden">
          <NavLinks links={main} layout="bar" />
        </nav>
        <div className="flex items-center gap-4">
          <Button href={cta.href} className="shrink-0 max-sm:hidden">
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
