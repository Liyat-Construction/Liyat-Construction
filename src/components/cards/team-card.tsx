import type { TeamMember } from '@/types/content';
import { Card } from '@/components/ui/card';
import { Photo } from '@/components/ui/photo';

interface TeamCardProps {
  member: TeamMember;
  className?: string;
}

/** A person: portrait (when there is one), name and role. */
export function TeamCard({ member, className }: TeamCardProps) {
  return (
    <Card as="article" padding="none" className={className}>
      {member.portrait && <Photo image={member.portrait} ratio="portrait" width="third" />}
      <div className="flex flex-col gap-1 p-6">
        <h3 className="text-h4">{member.name}</h3>
        <p className="text-small text-ink-muted">{member.role}</p>
      </div>
    </Card>
  );
}
