'use client';

import { useEffect, useRef } from 'react';
import { cn, pick } from '@/lib/utils';

const delays = {
  0: 'delay-0',
  1: 'delay-100',
  2: 'delay-200',
  3: 'delay-300',
} as const satisfies Record<number, string>;

const HIDDEN = ['opacity-0', 'translate-y-3'];

interface RevealProps {
  children: React.ReactNode;
  /** Stagger step for items in a row */
  delay?: keyof typeof delays;
  className?: string;
}

/**
 * Fade + 12 px rise, once, when scrolled into view. Content is visible in the
 * server HTML: only elements still below the fold after hydration are hidden
 * and then revealed, so nothing waits on JavaScript and nothing above the fold
 * flickers. Off under reduced motion.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (element.getBoundingClientRect().top < window.innerHeight) return;

    element.classList.add(...HIDDEN);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        element.classList.remove(...HIDDEN);
        observer.disconnect();
      },
      { rootMargin: '0px 0px -10% 0px' }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'ease-standard transition duration-(--duration-base)',
        pick(delays, delay),
        className
      )}
    >
      {children}
    </div>
  );
}
