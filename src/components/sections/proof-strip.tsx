import type { Partner, SectionCopy, Stat as StatData } from '@/types/content';
import { ClientList } from '@/components/sections/client-list';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Stat } from '@/components/ui/stat';

interface ProofStripProps extends SectionCopy {
  figures: StatData[];
  /** Sub-heading of the client row; leave out when the section heading names the clients */
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
        <SectionHeading
          id="proof-title"
          align="center"
          eyebrow={eyebrow}
          title={title}
          intro={intro}
        />
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
        <ClientList clients={clients} title={clientsTitle} />
      </div>
    </Section>
  );
}
