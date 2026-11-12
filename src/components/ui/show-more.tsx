'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from './button';

interface ShowMoreProps {
  /** The list. Items to hide on phones carry `phone-collapsed:hidden` (globals.css), and the
   *  first of them `data-show-more-start` and `tabIndex={-1}` (it receives focus) */
  children: React.ReactNode;
  /** e.g. "Show all 12 projects" */
  label: string;
}

/**
 * Phones only (D-147): shows the first items and a button that reveals the rest in place.
 * Every item stays in the HTML (search engines and tablets see all of them); from md the
 * button is gone and everything shows. Focus moves to the first revealed item.
 */
export function ShowMore({ children, label }: ShowMoreProps) {
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) box.current?.querySelector<HTMLElement>('[data-show-more-start]')?.focus();
  }, [open]);

  return (
    <div ref={box} data-open={open ? '' : undefined} className="flex flex-col gap-8">
      {children}
      {!open && (
        <Button
          variant="secondary"
          className="no-script:hidden self-center md:hidden"
          onClick={() => setOpen(true)}
        >
          {label}
        </Button>
      )}
    </div>
  );
}
