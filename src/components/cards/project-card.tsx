import type { Project } from '@/types/content';
import { Card } from '@/components/ui/card';
import { Photo } from '@/components/ui/photo';
import { Stat } from '@/components/ui/stat';
import { Tag } from '@/components/ui/tag';

interface ProjectCardProps {
  project: Project;
  /** Official names of `project.services` (getServiceTitles), shown as tags */
  serviceNames: string[];
  className?: string;
}

/** Project summary: photo, client, title, location · year, one key figure, services.
 *  Not linked — project pages return when C-11 brings real detail (D-60). */
export function ProjectCard({ project, serviceNames, className }: ProjectCardProps) {
  // The tested yield is the outcome clients ask about first; depth when there is no yield
  const figure = project.yield ?? project.depth;
  const meta = [project.location, project.year].filter(Boolean).join(' · ');

  return (
    <Card as="article" padding="none" className={className}>
      <Photo image={project.image} ratio="card" width="third" />
      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="flex flex-col gap-2">
          <p className="text-small text-ink-muted font-medium">{project.client}</p>
          <h3 className="text-h3">{project.title}</h3>
          <p className="text-small text-ink-muted">{meta}</p>
        </div>
        {figure && (
          <dl>
            <Stat
              value={figure.value}
              unit={figure.unit}
              label={figure.label}
              tone={figure.water ? 'water' : 'ink'}
            />
          </dl>
        )}
        {serviceNames.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-2">
            {serviceNames.map((name) => (
              <li key={name}>
                <Tag tone="brand">{name}</Tag>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
}
