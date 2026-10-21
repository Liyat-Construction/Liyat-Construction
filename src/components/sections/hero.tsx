import type { Action, ImageAsset } from '@/types/content';
import { Button } from '@/components/ui/button';
import { Photo } from '@/components/ui/photo';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

interface HeroProps {
  eyebrow: string;
  title: string;
  lead: string;
  image: ImageAsset;
  primary: Action;
  secondary: Action;
  /** h2 where the page already has its h1 (the style guide) */
  as?: 'h1' | 'h2';
}

/**
 * Home hero, option C (D-44): from lg, the text on Ink at the left and the
 * whole photo at the right, so nothing covers the photo and the headline is
 * above the fold. Below lg the photo comes first and the text sits under it.
 * The photo is the page's LCP image.
 */
export function Hero({ eyebrow, title, lead, image, primary, secondary, as = 'h1' }: HeroProps) {
  return (
    <Section
      tone="ink"
      spacing="none"
      container="none"
      labelledBy="hero-title"
      className="lg:grid lg:grid-cols-12"
    >
      <Photo
        image={image}
        ratio="hero"
        width="major"
        priority
        className="lg:order-last lg:col-span-7"
      />
      <div className="px-gutter flex flex-col gap-8 py-12 md:py-16 lg:col-span-5 lg:justify-center lg:px-12 xl:px-16">
        <SectionHeading
          as={as}
          size="display"
          id="hero-title"
          eyebrow={eyebrow}
          title={title}
          intro={lead}
        />
        <div className="flex flex-wrap gap-4">
          <Button href={primary.href} size="lg">
            {primary.label}
          </Button>
          <Button href={secondary.href} size="lg" variant="secondary">
            {secondary.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}
