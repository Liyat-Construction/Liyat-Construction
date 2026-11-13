import type { Project } from '@/types/content';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
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

/** Project summary: photo, client with the year beside it, title, location, one key figure, services.
 *  Linked only when the project has its own page (D-184); the other cards stay plain. */
export function ProjectCard({
  project,
  serviceNames,
  headingAs: Heading = 'h3',
  className,
}: ProjectCardProps) {
  // The tested yield is the outcome clients ask about first; depth when there is no yield
  const figure = project.yield ?? project.depth ?? project.shoringDepth;

  return (
    <Card
      as="article"
      padding="none"
      href={project.story ? `/projects/${project.slug}` : undefined}
      className={className}
    >
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
          {/* The year sits opposite the client so it reads at a glance (owner, 2026-11-09, D-172) */}
          <div className="text-small text-ink-muted flex items-baseline justify-between gap-4 font-medium">
            <p>{project.client}</p>
            {project.year && (
              <p className="text-ink tabular-nums" aria-label={`Year ${project.year}`}>
                {project.year}
              </p>
            )}
          </div>
          <Heading className="text-h3">{project.title}</Heading>
          <p className="text-small text-ink-muted">{project.location}</p>
        </div>
        <p className="text-body text-ink-muted">{project.summary}</p>
        {figure && (
          <dl>
            <Stat
              value={figure.value}
              unit={figure.unit}
              label={figure.label}
              tone={figure.water ? 'water' : 'ink'}
              size={figure.value.length > 5 ? 'long' : 'default'}
            />
          </dl>
        )}
        {(project.scope || serviceNames.length > 0) && (
          <p className="text-small text-ink-muted border-line border-t pt-4">
            {project.scope ?? serviceNames.join(' · ')}
          </p>
        )}
        {/* Only a project with its own page shows the arrow (D-184) */}
        {project.story && (
          <span className="text-brand mt-auto flex items-center justify-end gap-2 font-medium">
            <span className="text-small">View project</span>
            <Icon
              name="arrow-right"
              className="ease-standard block transition-transform duration-(--duration-fast) group-hover/card:translate-x-1"
            />
          </span>
        )}
      </div>
    </Card>
  );
}
