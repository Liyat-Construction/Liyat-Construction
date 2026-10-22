import type { Partner } from '@/types/content';
import { ClientCard } from '@/components/cards/client-card';
import { Subheading } from '@/components/ui/subheading';

interface ClientListProps {
  clients: Partner[];
  /** Sub-heading above the row (h3, centred); leave out when the section heading already says it */
  title?: string;
}

/**
 * The static row of clients (O-11: no moving strip), used inside a section: two per row on
 * phones, three from md, four from lg. A wrapping flex row, not a grid, so a part-filled last
 * row sits centred under the centred heading above it (D-76). Renders nothing when empty.
 */
export function ClientList({ clients, title }: ClientListProps) {
  if (clients.length === 0) return;
  return (
    <div className="flex flex-col gap-6">
      {title && (
        <Subheading size="h4" align="center">
          {title}
        </Subheading>
      )}
      {/* Gutters as padding on the items (negative margin on the list), so basis-1/4 stays exact */}
      <ul className="-mx-2 -mb-4 flex flex-wrap justify-center">
        {clients.map((client) => (
          // min-w-0: a long name must not widen its item past the basis and break the row
          <li
            key={client.name}
            className="flex min-w-0 basis-1/2 px-2 pb-4 md:basis-1/3 lg:basis-1/4"
          >
            <ClientCard client={client} className="w-full" />
          </li>
        ))}
      </ul>
    </div>
  );
}
