/**
 * Premium Hero Section
 * Immersive hero with animated gradient, staggered text reveal
 * Architectural, precise, calm - inspired by Stripe and Apple
 */

'use client';

import { AnimatedGradientBackground } from '@/components/animated-gradient-background';
import { PremiumButton } from '@/components/premium-button';
import { Container } from '@/components/container';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { HomePage } from '@/types/content';

interface HeroProps {
  homePage: HomePage;
}

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const titleWordVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export function Hero({ homePage }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const [line1, line2, line3] = homePage.heroTitleLines;

  const subtitle = homePage.heroSubtitle;

  const primaryText = homePage.heroPrimaryButtonText?.trim();
  const primaryUrl = homePage.heroPrimaryButtonUrl?.trim();
  const secondaryText = homePage.heroSecondaryButtonText?.trim();
  const secondaryUrl = homePage.heroSecondaryButtonUrl?.trim();

  const ctaButtonText = primaryText ?? 'Contact Us';
  const ctaButtonUrl = primaryUrl ?? '/#contact';
  const secondaryButtonText = secondaryText ?? 'Learn More';
  const secondaryButtonUrl = secondaryUrl ?? '/services';

  return (
    <section className="bg-brand-primary relative min-h-screen">
      {/* Animated Gradient Background */}
      <AnimatedGradientBackground />

      {/* Content */}
      <Container className="relative z-10">
        <div className="flex min-h-[100svh] flex-col pt-16 md:pt-12 lg:pt-16 [@media(min-width:768px)_and_(max-height:850px)]:h-auto [@media(min-width:768px)_and_(max-height:850px)]:min-h-0">
          <div className="mt-3 flex flex-1 items-start md:mt-0 md:items-center">
            <div className="grid w-full grid-cols-1 items-start gap-3 lg:grid-cols-2 lg:gap-5">
              {/* Left side - Text content */}
              <motion.div
                className="flex flex-col items-center pt-0 text-center lg:items-start lg:pt-1 lg:text-left [@media(min-width:768px)_and_(max-height:850px)]:pb-3"
                variants={containerVariants}
                initial={shouldReduceMotion ? 'visible' : 'hidden'}
                animate="visible"
              >
                {/* Title - 3 lines: editable via heroTitleLines */}
                <motion.h1 className="w-full" variants={containerVariants}>
                  <motion.span
                    className="block text-[4rem] leading-[1.01] font-bold tracking-tight text-white sm:text-[4.5rem] sm:leading-[1.05] sm:whitespace-nowrap md:text-[5.5rem] lg:text-[5.75rem] xl:text-[6.25rem] 2xl:text-[6.75rem] [@media(min-width:768px)_and_(max-height:850px)]:text-[6rem]"
                    variants={titleWordVariants}
                  >
                    {line1}
                  </motion.span>
                  <motion.span
                    className="mt-1.5 block text-[4rem] leading-[1.01] font-bold tracking-tight text-white sm:text-[4.5rem] sm:leading-[1.05] sm:whitespace-nowrap md:text-[5.5rem] lg:text-[5.75rem] xl:text-[6.25rem] 2xl:text-[6.75rem] [@media(min-width:768px)_and_(max-height:850px)]:text-[6rem]"
                    variants={titleWordVariants}
                  >
                    {line2}
                  </motion.span>
                  <motion.span
                    className="mt-1.5 block text-[4rem] leading-[1.01] font-bold tracking-tight text-white sm:text-[4.5rem] sm:leading-[1.05] sm:whitespace-nowrap md:text-[5.5rem] lg:text-[5.75rem] xl:text-[6.25rem] 2xl:text-[6.75rem] [@media(min-width:768px)_and_(max-height:850px)]:text-[6rem]"
                    variants={titleWordVariants}
                  >
                    {line3}
                  </motion.span>
                </motion.h1>

                {/* Subtitle - stepped back to let title dominate */}
                <motion.p
                  className="text-text-inverse/65 mt-2 max-w-xl text-sm leading-relaxed sm:mt-3 sm:text-base md:text-lg lg:text-xl"
                  variants={itemVariants}
                >
                  {subtitle}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="mt-4 flex w-full flex-col gap-3 sm:mt-5 sm:w-auto sm:flex-row sm:items-center md:mt-7 lg:mt-6 [@media(min-width:768px)_and_(max-height:850px)]:mt-4"
                  variants={itemVariants}
                >
                  <PremiumButton
                    href={ctaButtonUrl}
                    variant="primary"
                    className="min-w-[160px] text-sm md:px-8 md:py-4 md:text-base"
                  >
                    {ctaButtonText}
                  </PremiumButton>

                  <PremiumButton
                    href={secondaryButtonUrl}
                    variant="secondary"
                    className="min-w-[160px] text-sm md:px-8 md:py-4 md:text-base"
                  >
                    {secondaryButtonText}
                  </PremiumButton>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
