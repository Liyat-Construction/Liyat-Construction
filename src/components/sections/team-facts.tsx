import type { ComponentProps } from 'react';
import type { SectionCopy, StaffGroup, Stat as StatData } from '@/types/content';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { SiteTeams } from '@/components/ui/site-teams';
import { StaffTable } from '@/components/ui/staff-table';
import { StatRow } from '@/components/ui/stat-row';

interface TeamFactsProps extends SectionCopy {
  figures: StatData[];
  siteTeams?: ComponentProps<typeof SiteTeams>;
  groups: StaffGroup[];
  total?: { label: string; staff: string };
  footnote?: string;
  id?: string;
}

/**
 * The team as facts, not faces (D-194, D-196, T11): a split heading, a ruled row of figures,
 * the site teams as a picture, then the staff table with headcount bars. No names, no photos.
 * Renders nothing when there are no groups.
 */
export function TeamFacts({
  eyebrow,
  title,
  intro,
  figures,
  siteTeams,
  groups,
  total,
  footnote,
  id = 'team',
}: TeamFactsProps) {
  if (groups.length === 0) return;
  return (
    <Section id={id} labelledBy={`${id}-title`}>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-12">
          <SectionHeading
            id={`${id}-title`}
            layout="split"
            eyebrow={eyebrow}
            title={title}
            intro={intro}
          />
          <StatRow figures={figures} variant="ruled" />
        </div>
        {siteTeams && <SiteTeams {...siteTeams} />}
        <StaffTable caption={title} groups={groups} total={total} footnote={footnote} />
      </div>
    </Section>
  );
}
