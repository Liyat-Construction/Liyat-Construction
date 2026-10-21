import Link from 'next/link';

interface SmartLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Internal routes → next/link; tel:, mailto: and files → <a>; other sites →
 * new tab, announced to screen readers. Used by Button, TextLink and Card.
 */
export function SmartLink({ href, className, children }: SmartLinkProps) {
  if (href.startsWith('/') && !/\.\w+$/.test(href)) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className={className}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
