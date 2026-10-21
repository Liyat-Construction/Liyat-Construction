'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * On a page whose hero is marked `data-header-overlay`, the header floats
 * see-through over it (`over-photo:` in globals.css). This island sets
 * `data-solid` on the header once the hero has scrolled up behind it, so the
 * header turns white again. Renders nothing; does nothing on other pages.
 */
export function HeaderSolid() {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.querySelector<HTMLElement>('[data-site-header]');
    const hero = document.querySelector<HTMLElement>('[data-header-overlay]');
    if (!header || !hero) return;

    // One layout read per event: cheap enough without throttling
    const update = () => {
      header.toggleAttribute(
        'data-solid',
        hero.getBoundingClientRect().bottom <= header.offsetHeight
      );
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      header.removeAttribute('data-solid');
    };
  }, [pathname]);

  return undefined;
}
