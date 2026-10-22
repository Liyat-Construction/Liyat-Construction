import { Icon } from './icon';
import { SmartLink } from './smart-link';

export interface Crumb {
  label: string;
  /** Omitted for the current page, which is always last */
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  className?: string;
}

/**
 * Where this page sits in the site, e.g. ⌂ Home › Services › Pumping Tests. The first
 * crumb (Home) carries a house icon. Like the main navigation, the underline marks
 * where you are: the current page is underlined with the rule; links underline on hover.
 */
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="text-small text-ink-muted on-dark:text-white/80 on-photo:text-white flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {index > 0 && <Icon name="chevron-right" size="sm" />}
            {item.href ? (
              <SmartLink
                href={item.href}
                className="hover:text-ink on-dark:hover:text-white inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
              >
                {index === 0 && <Icon name="home" size="sm" />}
                {item.label}
              </SmartLink>
            ) : (
              <span
                aria-current="page"
                className="text-ink decoration-brand on-dark:text-white on-dark:decoration-brand-light font-medium underline decoration-(length:--rule-width) underline-offset-8"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
