/**
 * Premium Hero Section
 * Hero with photo slideshow (template; rebuilt in P7)
 */

import { HeroSlideshow } from '@/components/hero-slideshow';
import { PremiumButton } from '@/components/premium-button';
import { Container } from '@/components/container';
import type { HomePage } from '@/types/content';

interface HeroProps {
  homePage: HomePage;
}

export function Hero({ homePage }: HeroProps) {
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
      {homePage.heroSlides?.length ? <HeroSlideshow slides={homePage.heroSlides} /> : undefined}

      {/* Content */}
      <Container className="relative z-10">
        <div className="flex min-h-[100svh] flex-col pt-16 md:pt-12 lg:pt-16 [@media(min-width:768px)_and_(max-height:850px)]:h-auto [@media(min-width:768px)_and_(max-height:850px)]:min-h-0">
          <div className="mt-3 flex flex-1 items-start md:mt-0 md:items-center">
            <div className="grid w-full grid-cols-1 items-start gap-3 lg:grid-cols-2 lg:gap-5">
              {/* Left side - Text content */}
              <div className="flex flex-col items-center pt-0 text-center lg:items-start lg:pt-1 lg:text-left [@media(min-width:768px)_and_(max-height:850px)]:pb-3">
                {/* Title - 3 lines: editable via heroTitleLines */}
                <h1 className="w-full">
                  <span className="block text-[4rem] leading-[1.01] font-bold tracking-tight text-white sm:text-[4.5rem] sm:leading-[1.05] sm:whitespace-nowrap md:text-[5.5rem] lg:text-[5.75rem] xl:text-[6.25rem] 2xl:text-[6.75rem] [@media(min-width:768px)_and_(max-height:850px)]:text-[6rem]">
                    {line1}
                  </span>
                  <span className="mt-1.5 block text-[4rem] leading-[1.01] font-bold tracking-tight text-white sm:text-[4.5rem] sm:leading-[1.05] sm:whitespace-nowrap md:text-[5.5rem] lg:text-[5.75rem] xl:text-[6.25rem] 2xl:text-[6.75rem] [@media(min-width:768px)_and_(max-height:850px)]:text-[6rem]">
                    {line2}
                  </span>
                  <span className="mt-1.5 block text-[4rem] leading-[1.01] font-bold tracking-tight text-white sm:text-[4.5rem] sm:leading-[1.05] sm:whitespace-nowrap md:text-[5.5rem] lg:text-[5.75rem] xl:text-[6.25rem] 2xl:text-[6.75rem] [@media(min-width:768px)_and_(max-height:850px)]:text-[6rem]">
                    {line3}
                  </span>
                </h1>

                {/* Subtitle - stepped back to let title dominate */}
                <p className="text-text-inverse/65 mt-2 max-w-xl text-sm leading-relaxed sm:mt-3 sm:text-base md:text-lg lg:text-xl">
                  {subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="mt-4 flex w-full flex-col gap-3 sm:mt-5 sm:w-auto sm:flex-row sm:items-center md:mt-7 lg:mt-6 [@media(min-width:768px)_and_(max-height:850px)]:mt-4">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
