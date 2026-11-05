'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Icon } from './icon';

interface CarouselProps {
  /** Names the carousel for screen readers, e.g. "Photos from our work" */
  label: string;
  /** One element per slide */
  slides: { key: string; content: React.ReactNode }[];
}

/**
 * A row of slides that scrolls sideways: 1 (with the next one peeking in), 2 or 3 per view.
 * Swipe or scroll on any device; the arrow buttons move one view at a time. Without
 * JavaScript it is still a working scroll row.
 */
export function Carousel({ label, slides }: CarouselProps) {
  const track = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    // 1 px of slack: scroll positions can be fractional
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const move = (direction: 1 | -1) => {
    const el = track.current;
    if (el) el.scrollBy({ left: direction * el.clientWidth, behavior: 'smooth' });
  };

  const arrow =
    'inline-flex size-11 items-center justify-center rounded-full border border-brand text-brand ' +
    'duration-(--duration-fast) ease-standard transition-colors hover:bg-brand-tint ' +
    'disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent';

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className="flex flex-col gap-6"
    >
      <ul
        ref={track}
        onScroll={update}
        tabIndex={0}
        className={cn(
          'gap-grid grid snap-x snap-mandatory grid-flow-col overflow-x-auto overscroll-x-contain',
          'auto-cols-(--carousel-slide-1) sm:auto-cols-(--carousel-slide-2) lg:auto-cols-(--carousel-slide-3)',
          'rounded-card [scrollbar-width:none]'
        )}
      >
        {slides.map((slide, i) => (
          <li
            key={slide.key}
            className="snap-start"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
          >
            {slide.content}
          </li>
        ))}
      </ul>
      <div className="flex justify-center gap-3">
        <button type="button" className={arrow} onClick={() => move(-1)} disabled={atStart}>
          <Icon name="chevron-left" label="Previous photos" />
        </button>
        <button type="button" className={arrow} onClick={() => move(1)} disabled={atEnd}>
          <Icon name="chevron-right" label="Next photos" />
        </button>
      </div>
    </div>
  );
}
