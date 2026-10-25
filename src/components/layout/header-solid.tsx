'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * On a page whose hero is marked `data-header-overlay`, the header floats
 * see-through over it (`over-photo:` in globals.css) only at the very top.
 * This island sets `data-solid` on the header after a small scroll, so white
 * links never collide with the bright photo while the hero is still in view.
 * Renders nothing; does nothing on other pages.
 */
// Scroll distance (px) after which the see-through header turns solid
const SOLID_AFTER = 64;

export function HeaderSolid() {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.querySelector<HTMLElement>('[data-site-header]');
    const hero = document.querySelector<HTMLElement>('[data-header-overlay]');
    if (!header || !hero) return;

    const update = () => {
      header.toggleAttribute('data-solid', window.scrollY >= SOLID_AFTER);
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
