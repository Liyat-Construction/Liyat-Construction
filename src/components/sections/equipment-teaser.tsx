import type { Action, Equipment, SectionCopy } from '@/types/content';
import { Button } from '@/components/ui/button';
import { FactsTable } from '@/components/ui/facts-table';
import { Photo } from '@/components/ui/photo';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Subheading } from '@/components/ui/subheading';

interface EquipmentTeaserProps extends SectionCopy {
  /** The machine to lead with, usually the main rig */
  equipment?: Equipment;
  link: Action;
  /** Anchor for the navigation order on Home (`/#equipment`) */
  id?: string;
}

/** Capability in one view: the main rig's photo, name and up to three key specs. Renders nothing without it. */
export function EquipmentTeaser({
  id,
  eyebrow,
  title,
  intro,
  equipment,
  link,
}: EquipmentTeaserProps) {
  if (!equipment) return;
  return (
    <Section id={id} labelledBy="equipment-title">
      <div className="gap-grid grid items-center lg:grid-cols-12">
        {equipment.image && (
          <Photo
            image={equipment.image}
            ratio="card"
            width="half"
            rounded
            className="lg:col-span-6"
          />
        )}
        <div className="flex flex-col gap-8 lg:col-span-5 lg:col-start-8">
          <SectionHeading id="equipment-title" eyebrow={eyebrow} title={title} intro={intro} />
          <div className="flex flex-col gap-4">
            <Subheading>
              {equipment.name}
              <span className="sr-only">, {equipment.type}</span>
            </Subheading>
            <FactsTable rows={equipment.specs.slice(0, 3)} />
          </div>
          <Button href={link.href} variant="secondary" icon="arrow" className="self-start">
            {link.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}
