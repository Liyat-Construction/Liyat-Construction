'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { NavLinks, type NavItem } from './nav-links';

interface MobileMenuProps {
  links: NavItem[];
  /** Rendered by the server Header and passed in, so icons and Button stay out of the client bundle */
  openIcon: React.ReactNode;
  closeIcon: React.ReactNode;
  action: React.ReactNode;
}

const iconButton =
  'text-ink hover:bg-brand-tint over-photo:text-white over-photo:hover:bg-white/10 rounded-control inline-flex size-11 items-center justify-center';

/**
 * Full-height menu below `lg`, on a native modal <dialog>: the page behind is
 * inert (focus stays inside), Esc closes it and focus returns to the button.
 * Body scroll is locked in globals.css. Closes on navigation.
 */
export function MobileMenu({ links, openIcon, closeIcon, action }: MobileMenuProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    dialog.current?.close();
  }, [pathname]);

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
        className={`${iconButton} lg:hidden`}
      >
        {openIcon}
      </button>
      <dialog
        ref={dialog}
        aria-label="Menu"
        className="text-ink m-0 h-dvh max-h-none w-full max-w-none bg-white p-0 backdrop:bg-transparent lg:hidden"
      >
        <div className="px-gutter flex min-h-full flex-col pb-8">
          <div className="flex h-(--header-height) shrink-0 items-center justify-end">
            <button type="button" onClick={() => dialog.current?.close()} className={iconButton}>
              {closeIcon}
            </button>
          </div>
          <nav aria-label="Main">
            {/* Following a link closes the menu, also when it points to the current page */}
            <NavLinks links={links} layout="stack" onNavigate={() => dialog.current?.close()} />
          </nav>
          <div className="mt-8 flex flex-col">{action}</div>
        </div>
      </dialog>
    </>
  );
}
