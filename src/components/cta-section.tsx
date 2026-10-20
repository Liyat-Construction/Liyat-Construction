/**
 * CTA Section
 * Call-to-action band (template; replaced by CtaBand in P5)
 */

import { Container } from '@/components/container';
import { PremiumButton } from '@/components/premium-button';
import type { HomePage } from '@/types/content';

interface CTASectionProps {
  homePage: Pick<
    HomePage,
    | 'ctaTitle'
    | 'ctaSubtitle'
    | 'ctaPrimaryButtonText'
    | 'ctaPrimaryButtonUrl'
    | 'ctaSecondaryButtonText'
    | 'ctaSecondaryButtonUrl'
  >;
}

export function CTASection({ homePage }: CTASectionProps) {
  const resolvedTitle = homePage.ctaTitle;
  const resolvedSubtitle = homePage.ctaSubtitle;
  const resolvedPrimaryCta = {
    label: homePage.ctaPrimaryButtonText,
    href: homePage.ctaPrimaryButtonUrl,
  };
  const resolvedSecondaryCta = {
    label: homePage.ctaSecondaryButtonText,
    href: homePage.ctaSecondaryButtonUrl,
  };

  return (
    <section className="bg-brand-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, var(--color-brand-accent) 1px, transparent 1px),
                              linear-gradient(to bottom, var(--color-brand-accent) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Gold Accent Lines */}
      <div className="via-brand-accent/50 absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-transparent to-transparent" />
      <div className="via-brand-accent/50 absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-transparent to-transparent" />

      <Container className="relative z-10">
        <div className="py-20 text-center sm:py-24 md:py-32">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {resolvedTitle}
          </h2>

          <p className="text-text-inverse/80 mx-auto mt-6 max-w-2xl text-base sm:text-lg md:text-xl">
            {resolvedSubtitle}
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PremiumButton href={resolvedPrimaryCta.href} variant="primary">
              {resolvedPrimaryCta.label}
            </PremiumButton>

            <PremiumButton href={resolvedSecondaryCta.href} variant="secondary">
              {resolvedSecondaryCta.label}
            </PremiumButton>
          </div>

          {/* Bottom decorative line */}
          <div className="via-brand-accent/50 absolute bottom-0 left-1/2 h-[1px] w-32 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent" />
        </div>
      </Container>
    </section>
  );
}
