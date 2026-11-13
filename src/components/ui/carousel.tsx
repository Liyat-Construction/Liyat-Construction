'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { cn, pick } from '@/lib/utils';
import { Icon } from './icon';

/*
 * all: a carousel at every width: 1 per view on phones (the next one peeking in), 2, then 3.
 * Phone-only (D-146, D-148): a swipe row below sm, a plain grid from sm, where the arrows go:
 * photos: 3 columns (the Equipment photos, 3 rows of 3);
 * single: one full-width slide at every width, with a counter and an optional strip of tabs
 * (the testimonials, T10).
 */
const layouts = {
  all: 'sm:auto-cols-(--carousel-slide-2) lg:auto-cols-(--carousel-slide-3)',
  photos: 'sm:snap-none sm:grid-flow-row sm:grid-cols-3 sm:overflow-visible',
  single: '',
} as const satisfies Record<string, string>;

interface CarouselProps {
  /** Names the carousel for screen readers, e.g. "Photos from our work" */
  label: string;
  /** One element per slide */
  slides: { key: string; content: React.ReactNode }[];
  /** At every width, or a swipe row on phones only that becomes a grid from sm */
  layout?: keyof typeof layouts;
  /** Read out on the arrows: "Previous photos", "Next photos" */
  itemName?: string;
  /** layout="single" only: one tab per slide (who is speaking), shown from sm */
  tabs?: { title: string; caption: string }[];
}

/**
 * A row of slides that scrolls sideways: 1 (with the next one peeking in), 2 or 3 per view, or
 * one full-width slide (`single`). Swipe or scroll on any device; the arrow buttons move one view
 * at a time. Without JavaScript it is still a working scroll row.
 */
export function Carousel({
  label,
  slides,
  layout = 'all',
  itemName = 'photos',
  tabs,
}: CarouselProps) {
  const track = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [active, setActive] = useState(0);
  const single = layout === 'single';

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    // 1 px of slack: scroll positions can be fractional
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
    // the slide whose left edge is nearest the left edge of the row
    const left = el.getBoundingClientRect().left;
    let nearest = 0;
    let best = Infinity;
    Array.from(el.children).forEach((slide, i) => {
      const distance = Math.abs(slide.getBoundingClientRect().left - left);
      if (distance < best) {
        best = distance;
        nearest = i;
      }
    });
    setActive(nearest);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const goTo = (index: number) => {
    const el = track.current;
    const slide = el?.children.item(index);
    if (!el || !slide) return;
    const offset = slide.getBoundingClientRect().left - el.getBoundingClientRect().left;
    el.scrollBy({ left: offset, behavior: 'smooth' });
  };

  const move = (direction: 1 | -1) => {
    const el = track.current;
    if (single) goTo(Math.min(Math.max(active + direction, 0), slides.length - 1));
    else if (el) el.scrollBy({ left: direction * el.clientWidth, behavior: 'smooth' });
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
          'rounded-card [scrollbar-width:none]',
          single ? 'auto-cols-(--carousel-slide-full)' : 'auto-cols-(--carousel-slide-1)',
          pick(layouts, layout)
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
      {single && tabs && (
        <ul className="gap-grid hidden [scrollbar-width:none] auto-cols-fr grid-flow-col overflow-x-auto sm:grid">
          {tabs.map((tab, i) => (
            <li key={`${tab.title}-${i}`} className="min-w-56">
              <button
                type="button"
                onClick={() => goTo(i)}
                aria-current={i === active}
                className={cn(
                  'rounded-card border-line ease-standard flex h-full w-full flex-col gap-0.5 border bg-white px-5 py-4 text-left',
                  'hover:border-brand transition-colors duration-(--duration-fast)',
                  i === active && 'border-brand'
                )}
              >
                <span className="font-semibold">{tab.title}</span>
                <span className="text-small text-ink-muted">{tab.caption}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
      <div
        className={cn(
          'flex items-center justify-center gap-3',
          layout !== 'all' && !single && 'sm:hidden'
        )}
      >
        <button
          type="button"
          className={arrow}
          onClick={() => move(-1)}
          disabled={single ? active === 0 : atStart}
        >
          <Icon name="chevron-left" label={`Previous ${itemName}`} />
        </button>
        {single && (
          <span
            className="text-small text-ink-muted min-w-16 text-center tabular-nums"
            aria-hidden="true"
          >
            {active + 1} / {slides.length}
          </span>
        )}
        <button
          type="button"
          className={arrow}
          onClick={() => move(1)}
          disabled={single ? active === slides.length - 1 : atEnd}
        >
          <Icon name="chevron-right" label={`Next ${itemName}`} />
        </button>
      </div>
    </div>
  );
}
