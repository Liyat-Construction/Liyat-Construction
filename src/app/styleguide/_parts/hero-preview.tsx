import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Photo } from '@/components/ui/photo';
import { Scrim } from '@/components/ui/scrim';
import { hero, photos } from './samples';

/**
 * Preview of the P7 hero (D-27) so the look is judged at this gate. Desktop:
 * text on a Scrim over the sky and clouds left of the water column. Phones:
 * the photo keeps the column whole and the text sits below it on Ink, so spray
 * is never behind text. The real Hero section is built in P7.
 */
export function HeroPreview() {
  return (
    <section aria-label="Hero preview" data-on-dark className="bg-ink relative">
      <Photo image={photos.hero} ratio="hero" />
      <div className="md:absolute md:inset-0 md:flex md:items-center">
        <Container>
          <Scrim className="flex max-w-xl flex-col gap-6 max-md:px-0">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <p className="text-display font-heading text-balance">{hero.title}</p>
            <p className="text-lead">{hero.lead}</p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Contact us
              </Button>
              <Button href="/projects" size="lg" variant="secondary">
                Explore projects
              </Button>
            </div>
          </Scrim>
        </Container>
      </div>
    </section>
  );
}
