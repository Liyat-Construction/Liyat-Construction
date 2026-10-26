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
        <SectionHeading
          id="team-title"
          align="center"
          eyebrow={eyebrow}
          title={title}
          intro={intro}
        />
        <ul className="-mx-3 -mb-6 flex flex-wrap justify-center">
          {members.map((member, index) => (
            <li
              key={`${member.name}-${index}`}
              className="flex min-w-0 basis-full px-3 pb-6 sm:basis-1/2 lg:basis-1/4"
            >
              <TeamCard member={member} className="w-full" />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
