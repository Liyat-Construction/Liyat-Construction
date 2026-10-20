/**
 * Client Logos Marquee
 * Infinite right-to-left strip of partner cards. A card shows a logo, a site
 * photo with the partner name, or the name alone. Pauses on hover and stays
 * still for users who prefer reduced motion.
 */

'use client';

import { useEffect, useRef, type CSSProperties } from 'react';
import Image from 'next/image';
import type { Partner } from '@/types/content';

interface ClientLogosMarqueeProps {
  logos: Partner[];
}

export function ClientLogosMarquee({ logos }: ClientLogosMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate exactly 2x; then animate by the exact pixel width of 1 copy.
  // This avoids rounding issues from percentage-based translateX that can cause a visible reset.
  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateShift = () => {
      const shift = el.scrollWidth / 2;
      if (Number.isFinite(shift) && shift > 0) {
        el.style.setProperty('--marquee-shift', `${shift}px`);
        const speed = Number.parseFloat(getComputedStyle(el).getPropertyValue('--marquee-speed'));
        el.style.setProperty('--marquee-duration', `${shift / (speed > 0 ? speed : 45)}s`);
      }
    };

    updateShift();
    const ro = new ResizeObserver(() => updateShift());
    ro.observe(el);
    const t = window.setTimeout(updateShift, 250);

    return () => {
      window.clearTimeout(t);
      ro.disconnect();
    };
  }, [logos.length]);

  if (logos.length === 0) return;

  return (
    <div className="relative w-full overflow-hidden">
      <div className="from-surface-elevated pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r to-transparent md:w-40" />
      <div className="from-surface-elevated pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l to-transparent md:w-40" />

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-1 * var(--marquee-shift, 0px))); }
        }
        .da-marquee { animation: marquee-scroll var(--marquee-duration, 30s) linear infinite; }
        .da-marquee:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .da-marquee { animation: none; }
        }
      `}</style>

      <div
        ref={containerRef}
        className="da-marquee flex w-max flex-nowrap items-center py-6"
        style={{ '--marquee-speed': '45', willChange: 'transform' } as CSSProperties}
      >
        {duplicatedLogos.map((partner, index) => {
          const card = <PartnerCard partner={partner} />;
          return (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 px-3 md:px-4"
              aria-hidden={index >= logos.length || undefined}
            >
              {partner.url ? (
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={index >= logos.length ? -1 : undefined}
                >
                  {card}
                </a>
              ) : (
                card
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="group relative flex h-28 w-52 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(23,74,112,0.08)] ring-1 ring-gray-200/80 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_36px_rgba(23,107,69,0.18)] md:h-32 md:w-64">
      {partner.logo ? (
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          sizes="256px"
          unoptimized
          className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
        />
      ) : partner.photo ? (
        <>
          <Image
            src={partner.photo}
            alt=""
            fill
            sizes="256px"
            unoptimized
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="from-brand-primary-dark/90 via-brand-primary-dark/30 absolute inset-0 bg-gradient-to-t to-transparent" />
          <span className="absolute inset-x-0 bottom-0 px-4 pb-3 text-left text-sm leading-tight font-semibold text-white">
            {partner.name}
          </span>
        </>
      ) : (
        <span className="text-brand-accent px-4 text-center text-sm font-bold tracking-wide uppercase">
          {partner.name}
        </span>
      )}
      <div className="bg-brand-primary absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
    </div>
  );
}
