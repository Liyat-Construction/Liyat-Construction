import type { SiteRole } from '@/types/content';
import { cn } from '@/lib/utils';
import { Icon } from './icon';

interface SiteTeamsProps {
  /** How many identical teams (Liyat: three, one per rig) */
  count: number;
  title: string;
  intro?: string;
  /** "Site team" → "Site team 1", "Site team 2"… */
  teamLabel: string;
  roles: SiteRole[];
  /** One line under the teams: who supports all of them */
  support?: string;
  className?: string;
}

/**
 * The team as a picture (T11): identical site teams side by side, each under a thick Ink rule,
 * every role with its icon in a green-tint circle. From md all teams show; on phones one team
 * with a "× 3" mark, so the list is not repeated down the page. The copies are aria-hidden: a
 * screen reader hears the roles once.
 */
export function SiteTeams({
  count,
  title,
  intro,
  teamLabel,
  roles,
  support,
  className,
}: SiteTeamsProps) {
  if (count === 0 || roles.length === 0) return;
  return (
    <div className={cn('flex flex-col gap-8', className)}>
      <div className="flex max-w-prose flex-col gap-2">
        <h3 className="text-h3">{title}</h3>
        {intro && <p className="text-ink-muted">{intro}</p>}
      </div>
      <div className="gap-grid grid md:grid-cols-3">
        {Array.from({ length: count }, (_, index) => (
          <div
            key={index}
            aria-hidden={index > 0 || undefined}
            className={cn(
              'border-ink border-t-(length:--rule-width) pt-5',
              index > 0 && 'hidden md:block'
            )}
          >
            <p className="text-eyebrow text-brand flex items-center justify-between uppercase">
              <span className="md:hidden">Each {teamLabel.toLowerCase()}</span>
              <span className="hidden md:inline">
                {teamLabel} {index + 1}
              </span>
              <span className="bg-brand text-small rounded-full px-3 py-0.5 text-white normal-case md:hidden">
                × {count}
              </span>
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {roles.map((role) => (
                <li key={role.role} className="text-ink flex items-center gap-3">
                  <span className="bg-brand-tint text-brand flex size-10 shrink-0 items-center justify-center rounded-full">
                    <Icon name={role.icon} />
                  </span>
                  {role.role}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {support && <p className="text-small text-ink-muted border-line border-t pt-4">{support}</p>}
    </div>
  );
}
