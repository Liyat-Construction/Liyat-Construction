'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavItem {
  href: string;
  label: string;
}

// Plain strings, no cn()/pick(): importing lib/utils would ship tailwind-merge to every page
const base =
  'text-ink hover:text-brand current:text-brand over-photo:text-white over-photo:hover:text-white/80 over-photo:current:text-white current:underline current:decoration-(length:--rule-width) current:underline-offset-8 ease-standard flex items-center font-medium transition-colors duration-(--duration-fast)';

const layouts = {
  bar: { list: 'flex items-center gap-1', link: `${base} min-h-11 px-3 text-body` },
  stack: {
    list: 'flex flex-col',
    link: `${base} min-h-14 border-b border-line text-h4 font-heading`,
  },
} as const;

interface NavLinksProps {
  links: NavItem[];
  layout: keyof typeof layouts;
  /** Called when a link is followed (the mobile menu closes itself) */
  onNavigate?: () => void;
}

/**
 * The main links, with the current section marked by aria-current and green
 * (D-39). A client island only because it reads the current path.
 */
export function NavLinks({ links, layout, onNavigate }: NavLinksProps) {
  const styles = layout === 'bar' ? layouts.bar : layouts.stack;
  // Static export uses trailing slashes (/projects/), so compare without them
  const pathname = usePathname().replace(/\/$/, '');
  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <ul className={styles.list}>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            aria-current={isCurrent(link.href) ? 'page' : undefined}
            onClick={onNavigate}
            className={styles.link}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
