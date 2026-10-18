/**
 * Client Logos Marquee - World Class Trust Banner
 * Premium infinite scrolling logo showcase with sophisticated interactions
 * Inspired by Stripe, Linear, and Apple-level polish
 */

'use client';

import { useEffect, useState, useRef, type CSSProperties } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import type { Partner } from '@/types/content';

interface ClientLogosMarqueeProps {
  logos: Partner[];
}

export function ClientLogosMarquee({ logos }: ClientLogosMarqueeProps) {
  const [hoveredId, setHoveredId] = useState<string | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate exactly 2x; then animate by the exact pixel width of 1 copy.
  // This avoids rounding issues from percentage-based translateX that can cause a visible reset.
  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateShift = () => {
      // With 2 copies, half the scrollWidth corresponds to one full set.
      const total = el.scrollWidth;
      const shift = total / 2;
      if (Number.isFinite(shift) && shift > 0) {
        el.style.setProperty('--marquee-shift', `${shift}px`);

        const speedRaw = getComputedStyle(el).getPropertyValue('--marquee-speed');
        const speed = Number.parseFloat(speedRaw);
        const resolvedSpeed = Number.isFinite(speed) && speed > 0 ? speed : 70;
        el.style.setProperty('--marquee-duration', `${shift / resolvedSpeed}s`);
      }
    };

    updateShift();

    const ro = new ResizeObserver(() => updateShift());
    ro.observe(el);

    // Recompute once images settle (common cause of a seam if widths change post-mount).
    const t = window.setTimeout(updateShift, 250);

    return () => {
      window.clearTimeout(t);
      ro.disconnect();
    };
  }, [logos.length]);

  if (logos.length === 0) return;

  return (
    <div className="relative w-full">
      {/* Premium container with subtle glass effect - full width edge to edge */}
      <div className="relative w-full overflow-hidden border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
        {/* Top gold accent line - full width */}
        <div className="via-brand-accent/40 absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent to-transparent" />

        {/* Bottom gold accent line - full width */}
        <div className="via-brand-accent/40 absolute right-0 bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent to-transparent" />

        {/* Left fade gradient */}
        <div className="from-brand-primary/80 via-brand-primary/40 pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-24 bg-gradient-to-r to-transparent" />

        {/* Right fade gradient */}
        <div className="from-brand-primary/80 via-brand-primary/40 pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-24 bg-gradient-to-l to-transparent" />

        {/* Scrolling container */}
        <div
          ref={containerRef}
          className="da-marquee flex flex-nowrap items-center py-5 [@media(max-height:850px)]:py-4"
          style={
            {
              animation: 'marquee-scroll var(--marquee-duration, 20s) linear infinite',
              willChange: 'transform',
              // Luxury/calm default speed (px/sec). Duration is computed from content width.
              '--marquee-speed': '70',
            } as CSSProperties
          }
          onMouseEnter={(e) => {
            e.currentTarget.style.animationPlayState = 'paused';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animationPlayState = 'running';
            setHoveredId(undefined);
          }}
        >
          <style>{`
            @keyframes marquee-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-1 * var(--marquee-shift, 0px))); }
            }

            @media (max-width: 640px) {
              .da-marquee {
                --marquee-speed: 90;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .da-marquee {
                animation: none !important;
              }
            }
          `}</style>

          {duplicatedLogos.map((logo, index) => {
            const uniqueKey = `${logo.name}-${index}`;
            const isHovered = hoveredId === uniqueKey;
            const hasAnyHover = hoveredId !== undefined;

            return (
              <div
                key={uniqueKey}
                className="group flex-shrink-0 px-6"
                onMouseEnter={() => setHoveredId(uniqueKey)}
                onMouseLeave={() => setHoveredId(undefined)}
              >
                {logo.url ? (
                  <a
                    href={logo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block"
                  >
                    <LogoCard logo={logo} isHovered={isHovered} hasAnyHover={hasAnyHover} />
                  </a>
                ) : (
                  <LogoCard logo={logo} isHovered={isHovered} hasAnyHover={hasAnyHover} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface LogoCardProps {
  logo: Partner;
  isHovered: boolean;
  hasAnyHover: boolean;
}

function LogoCard({ logo, isHovered, hasAnyHover }: LogoCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative flex h-14 items-center justify-center px-3 [@media(max-height:850px)]:h-12"
      animate={shouldReduceMotion ? undefined : { scale: isHovered ? 1.12 : 1 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Subtle glow on hover */}
      {shouldReduceMotion ? undefined : (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-full"
          animate={{
            boxShadow: isHovered
              ? '0 0 40px rgba(201, 162, 39, 0.25), 0 0 80px rgba(201, 162, 39, 0.1)'
              : '0 0 0px rgba(201, 162, 39, 0)',
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      {logo.logo ? (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          <Image
            src={logo.logo}
            alt={logo.name}
            width={140}
            height={40}
            unoptimized
            className="h-10 w-auto max-w-[140px] min-w-[60px] object-contain transition-all duration-400 [@media(max-height:850px)]:h-9"
            style={{
              filter: hasAnyHover
                ? isHovered
                  ? 'grayscale(0) brightness(1.25) drop-shadow(0 4px 16px rgba(201, 162, 39, 0.35))'
                  : 'grayscale(0.7) brightness(0.6) opacity(0.35)'
                : 'grayscale(0.2) brightness(1) opacity(0.9)',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
        </div>
      ) : (
        <span
          className="text-center text-sm font-bold tracking-widest uppercase transition-all duration-400"
          style={{
            color: isHovered
              ? 'var(--color-brand-accent)'
              : hasAnyHover
                ? 'rgba(255, 255, 255, 0.35)'
                : 'rgba(255, 255, 255, 0.8)',
            textShadow: isHovered ? '0 0 30px rgba(201, 162, 39, 0.6)' : 'none',
            letterSpacing: isHovered ? '0.15em' : '0.1em',
            transform: isHovered ? 'scale(1.08)' : 'scale(1)',
          }}
        >
          {logo.name}
        </span>
      )}
    </motion.div>
  );
}
