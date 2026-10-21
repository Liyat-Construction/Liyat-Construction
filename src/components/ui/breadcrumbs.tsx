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

/** Where this page sits in the site, e.g. Home › Projects › Tsedey Bank pumping test. */
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="text-small text-ink-muted on-dark:text-white/80 flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {index > 0 && <Icon name="chevron-right" size="sm" />}
            {item.href ? (
              <SmartLink
                href={item.href}
                className="text-ink on-dark:text-white underline decoration-1 underline-offset-4 hover:decoration-2"
              >
                {item.label}
              </SmartLink>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
