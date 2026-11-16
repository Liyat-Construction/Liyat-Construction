import type { Partner, SectionCopy, Stat as StatData } from '@/types/content';
import { ClientList } from '@/components/sections/client-list';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { StatRow } from '@/components/ui/stat-row';

interface ProofStripProps extends SectionCopy {
  figures: StatData[];
  figuresAlign?: 'start' | 'center';
  id?: string;
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
  figuresAlign = 'start',
  id = 'proof',
  clientsTitle,
  clients = [],
}: ProofStripProps) {
  if (figures.length === 0 && clients.length === 0) return;
  return (
    <Section id={id} labelledBy={`${id}-title`}>
      <div className="flex flex-col gap-12">
        <SectionHeading
          id={`${id}-title`}
          align="center"
          eyebrow={eyebrow}
          title={title}
          intro={intro}
        />
        <StatRow figures={figures} align={figuresAlign} />
        <ClientList clients={clients} title={clientsTitle} />
      </div>
    </Section>
  );
}
