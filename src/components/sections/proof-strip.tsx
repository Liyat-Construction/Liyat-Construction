import type { Partner, SectionCopy, Stat as StatData } from '@/types/content';
import { ClientCard } from '@/components/cards/client-card';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Stat } from '@/components/ui/stat';
import { Subheading } from '@/components/ui/subheading';

interface ProofStripProps extends SectionCopy {
  figures: StatData[];
  /** Heading of the client row; the row hides when `clients` is empty */
  clientsTitle?: string;
  clients?: Partner[];
}

/** Credibility at a glance: key figures and the clients behind them. Renders nothing when both are empty. */
export function ProofStrip({
  eyebrow,
  title,
  intro,
  figures,
  clientsTitle,
  clients = [],
}: ProofStripProps) {
  if (figures.length === 0 && clients.length === 0) return;
  return (
    <Section labelledBy="proof-title">
      <div className="flex flex-col gap-12">
        <SectionHeading id="proof-title" eyebrow={eyebrow} title={title} intro={intro} />
        {figures.length > 0 && (
          <dl className="gap-grid grid grid-cols-2 lg:grid-cols-4">
            {figures.map((figure) => (
              <Stat
                key={figure.label}
                value={figure.value}
                unit={figure.unit}
                label={figure.label}
                tone={figure.water ? 'water' : 'ink'}
              />
            ))}
          </dl>
        )}
        {clients.length > 0 && clientsTitle && (
          <div className="flex flex-col gap-6">
            <Subheading size="h4">{clientsTitle}</Subheading>
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {clients.map((client) => (
                <ClientCard key={client.name} client={client} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}
