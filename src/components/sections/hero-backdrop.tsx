import type { Action, ImageAsset } from '@/types/content';
import { Backdrop } from '@/components/ui/backdrop';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

interface HeroBackdropProps {
  title: string;
  lead: string;
  backdrop: ImageAsset;
  backdropCaption: string;
  primary: Action;
  secondary: Action;
  as?: 'h1' | 'h2';
}

/**
 * Home hero option A (under review): one site photograph fills the whole first
 * screen, under the see-through header (`data-header-overlay`, pulled up by the
 * header's height). From lg the headline is centred high over the calm part of
 * the frame (the mountains) with the fleet below it; on phones it sits low over
 * the open ground, with the rig above. The crop is anchored upper-left so the
 * rig stays in view.
 */
export function HeroBackdrop({
  title,
  lead,
  backdrop,
  backdropCaption,
  primary,
  secondary,
  as = 'h1',
}: HeroBackdropProps) {
  return (
    <div data-header-overlay className="-mt-(--header-total)">
      <Section
        tone="ink"
        spacing="none"
        container="none"
        labelledBy="hero-title"
        className="relative flex min-h-svh max-lg:items-end"
      >
        <Backdrop image={backdrop} caption={backdropCaption} />
        <Container className="relative flex flex-col items-center gap-8 pt-(--header-total) pb-16 lg:pb-24">
          <div className="flex flex-col items-center gap-8 lg:pt-16">
            <SectionHeading
              as={as}
              size="display"
              align="center"
              id="hero-title"
              title={title}
              intro={lead}
            />
            <div className="flex flex-wrap justify-center gap-4">
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
