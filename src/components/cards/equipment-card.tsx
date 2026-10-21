import type { Equipment } from '@/types/content';
import { Card } from '@/components/ui/card';
import { FactsTable } from '@/components/ui/facts-table';
import { Photo } from '@/components/ui/photo';

interface EquipmentCardProps {
  equipment: Equipment;
  className?: string;
}

/** A machine by name: photo, type, and its key specs as a data sheet. */
export function EquipmentCard({ equipment, className }: EquipmentCardProps) {
  return (
    <Card as="article" padding="none" className={className}>
      {equipment.image && <Photo image={equipment.image} ratio="card" width="third" />}
      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="flex flex-col gap-2">
          <p className="text-small text-ink-muted font-medium">{equipment.type}</p>
          <h3 className="text-h3">{equipment.name}</h3>
        </div>
        <FactsTable rows={equipment.specs} />
      </div>
    </Card>
  );
}
