import type { Action, ImageAsset } from '@/types/content';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Fade } from '@/components/ui/fade';
import { Photo } from '@/components/ui/photo';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

interface HeroBlendProps {
  title: string;
  lead: string;
  image: ImageAsset;
  primary: Action;
  secondary: Action;
  as?: 'h1' | 'h2';
}

/**
 * Home hero option B (under review): the text on Ink at the left, the photo
 * filling the right 7/12 of the first screen, under the see-through header.
 * There is no hard seam: the photo fades into the Ink panel on its left and
 * under the header along its top (eased fades, ui/fade). The text sits in the
 * same Container as the header, so it starts exactly under the logo. On phones
 * the photo comes first, under the header, and fades into the text below.
 */
export function HeroBlend({ title, lead, image, primary, secondary, as = 'h1' }: HeroBlendProps) {
  return (
    <div data-header-overlay className="-mt-(--header-total)">
      <Section
        tone="ink"
        spacing="none"
        container="none"
        labelledBy="hero-title"
        className="relative lg:flex lg:min-h-svh lg:items-center"
      >
        <div className="aspect-hero-mobile md:aspect-hero relative lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-7/12">
          <div className="absolute inset-0">
            <Photo image={image} ratio="fill" width="major" priority className="bg-ink" />
          </div>
          <Fade edge="top" />
          <Fade edge="left" className="max-lg:hidden" />
          <Fade edge="bottom" className="lg:hidden" />
        </div>
        <Container className="relative pb-16 max-lg:-mt-16 lg:pt-(--header-total) lg:pb-0">
          <div className="flex flex-col gap-8 lg:max-w-lg">
            <SectionHeading as={as} size="display" id="hero-title" title={title} intro={lead} />
            <div className="flex flex-wrap gap-4">
              <Button href={primary.href} size="lg">
                {primary.label}
              </Button>
              <Button href={secondary.href} size="lg" variant="secondary">
                {secondary.label}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
