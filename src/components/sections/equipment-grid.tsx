import type { Equipment, SectionCopy } from '@/types/content';
import { EquipmentCard } from '@/components/cards/equipment-card';
import { FeatureCard } from '@/components/cards/feature-card';
import { FactsTable } from '@/components/ui/facts-table';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

interface EquipmentGridProps extends SectionCopy {
  id: string;
  equipment: Equipment[];
  presentation?: 'cards' | 'specifications';
}

export function EquipmentGrid({
  id,
  eyebrow,
  title,
  intro,
  equipment,
  presentation = 'cards',
}: EquipmentGridProps) {
  if (equipment.length === 0) return;
  return (
    <Section labelledBy={`${id}-title`}>
      <div
        className={
          equipment.length === 1
            ? 'gap-grid grid items-start md:grid-cols-2'
            : 'flex flex-col gap-12'
        }
      >
        {/* Beside a single card: left; above a grid: centred (D-76) */}
        <SectionHeading
          id={`${id}-title`}
          align={equipment.length === 1 ? 'start' : 'center'}
          eyebrow={eyebrow}
          title={title}
          intro={intro}
        />
        <ul className={equipment.length === 1 ? 'grid' : 'gap-grid grid md:grid-cols-2'}>
          {equipment.map((item) => (
            <li key={item.name} className="flex flex-col">
              {presentation === 'cards' ? (
                <EquipmentCard equipment={item} photoWidth="half" className="h-full" />
              ) : (
                <FeatureCard feature={{ title: item.name, text: item.type }} className="h-full">
                  <FactsTable rows={item.specs} />
                </FeatureCard>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
