import Image from 'next/image';
import type { Partner } from '@/types/content';
import { Card } from '@/components/ui/card';

interface ClientCardProps {
  client: Partner;
  className?: string;
}

/**
 * A client in the "Clients we have worked for" row: the logo when there is one,
 * otherwise the name. Site photos are not logos, so they are not used here.
 */
export function ClientCard({ client, className }: ClientCardProps) {
  return (
    <Card as="li" className={className}>
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
          <p className="font-heading text-h4 text-center text-balance">{client.name}</p>
        )}
      </div>
    </Card>
  );
}
