import Image from 'next/image';
import type { Partner } from '@/types/content';
import { Card } from '@/components/ui/card';

interface ClientCardProps {
  client: Partner;
  className?: string;
}

/**
 * A client in the "Clients we have worked for" row (ClientList, which supplies the list
 * item): the logo when there is one, otherwise the name.
 */
export function ClientCard({ client, className }: ClientCardProps) {
  return (
    <Card className={className}>
      {/* Fixed height, centered in a taller row; flex-1 would collapse it to 0 around the absolute logo */}
      <div className="my-auto flex min-h-16 items-center justify-center">
        {client.logo ? (
          <div className="relative h-16 w-full">
            <Image
              src={client.logo}
              alt={client.name}
              fill
              sizes="200px"
              className="object-contain"
            />
          </div>
        ) : (
          // hyphens-auto: long words ("Manufacturing") fit a half-width card on phones
          <p className="font-heading text-h4 text-center text-balance hyphens-auto">
            {client.name}
          </p>
        )}
      </div>
    </Card>
  );
}
