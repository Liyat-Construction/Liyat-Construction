import type { Project } from '@/types/content';
import { Card } from '@/components/ui/card';
import { Photo } from '@/components/ui/photo';
import { Stat } from '@/components/ui/stat';

interface ProjectCardProps {
  project: Project;
  /** Official names of `project.services` (getServiceTitles), shown as tags */
  serviceNames: string[];
  /** h2 when no section heading sits above the cards (the Projects page) */
  headingAs?: 'h2' | 'h3';
  className?: string;
}

/** Project summary: photo, client, title, location · year, one key figure, services.
 *  Not linked — project pages return when C-11 brings real detail (D-60). */
export function ProjectCard({
  project,
  serviceNames,
  headingAs: Heading = 'h3',
  className,
}: ProjectCardProps) {
  // The tested yield is the outcome clients ask about first; depth when there is no yield
  const figure = project.yield ?? project.depth ?? project.shoringDepth;
  const meta = [project.location, project.year].filter(Boolean).join(' · ');

  return (
    <Card as="article" padding="none" className={className}>
      <figure>
        <Photo image={project.image} ratio="card" width="third" />
        {project.imageCaption && (
          <figcaption className="text-small text-ink-muted px-6 pt-3">
            {project.imageCaption}
          </figcaption>
        )}
      </figure>
      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="flex flex-col gap-2">
          <p className="text-small text-ink-muted font-medium">{project.client}</p>
          <Heading className="text-h3">{project.title}</Heading>
          <p className="text-small text-ink-muted">{meta}</p>
        </div>
        <p className="text-body text-ink-muted">{project.summary}</p>
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
        {(project.scope || serviceNames.length > 0) && (
          <p className="text-small text-ink-muted border-line border-t pt-4">
            {project.scope ?? serviceNames.join(' · ')}
          </p>
        )}
      </div>
    </Card>
  );
}
