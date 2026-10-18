/**
 * Animated Gradient Background
 * Subtle, slow-moving mesh gradient for premium hero sections
 * Inspired by Stripe's atmospheric backgrounds
 */

'use client';

import { motion, useReducedMotion } from 'framer-motion';

export function AnimatedGradientBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary gradient orbs */}
      {shouldReduceMotion ? (
        <div className="from-brand-accent/20 absolute -top-1/2 -left-1/2 h-full w-full rounded-full bg-gradient-to-br via-transparent to-transparent" />
      ) : (
        <motion.div
          className="from-brand-accent/20 absolute -top-1/2 -left-1/2 h-full w-full rounded-full bg-gradient-to-br via-transparent to-transparent"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      {shouldReduceMotion ? (
        <div className="from-brand-primary-light/40 absolute -right-1/2 -bottom-1/2 h-full w-full rounded-full bg-gradient-to-tl via-transparent to-transparent" />
      ) : (
        <motion.div
          className="from-brand-primary-light/40 absolute -right-1/2 -bottom-1/2 h-full w-full rounded-full bg-gradient-to-tl via-transparent to-transparent"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      {/* Secondary subtle glow */}
      {shouldReduceMotion ? (
        <div className="bg-brand-accent/10 absolute top-1/3 left-1/3 h-96 w-96 rounded-full opacity-40 blur-3xl" />
      ) : (
        <motion.div
          className="bg-brand-accent/10 absolute top-1/3 left-1/3 h-96 w-96 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      {/* Noise texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(201,162,39,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,162,39,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}
