import type { SectionCopy, TeamMember } from '@/types/content';
import { TeamCard } from '@/components/cards/team-card';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

interface TeamGridProps extends SectionCopy {
  members: TeamMember[];
}

/** Leadership and team as TeamCards. Renders nothing when empty (C-15). */
export function TeamGrid({ eyebrow, title, intro, members }: TeamGridProps) {
  if (members.length === 0) return;
  return (
    <Section labelledBy="team-title">
      <div className="flex flex-col gap-12">
        <SectionHeading id="team-title" eyebrow={eyebrow} title={title} intro={intro} />
        <ul className="gap-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {members.map((member, index) => (
            <li key={`${member.name}-${index}`}>
              <TeamCard member={member} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
