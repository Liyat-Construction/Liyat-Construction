import type { Project } from '@/types/content';
import { ProjectCard } from '@/components/cards/project-card';
import { Section } from '@/components/ui/section';
import { ShowMore } from '@/components/ui/show-more';

/** Cards phones see before "Show all projects" (D-147) */
const PHONE_LIMIT = 6;

interface ProjectGridProps {
  /** In display order; with their service names (getServiceTitles) */
  projects: { project: Project; serviceNames: string[] }[];
}

/**
 * Every project as a card: three columns from lg, two from md. Phones see the first six and
 * a button that shows the rest in place (D-147). Renders nothing without projects.
 * No section heading, so the card titles are h2s under the page's h1 (P15, heading order).
 */
export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) return;
  const list = (
    <ul className="gap-grid grid md:grid-cols-2 lg:grid-cols-3">
      {projects.map(({ project, serviceNames }, index) => {
        const later = index >= PHONE_LIMIT;
        return (
          <li
            key={project.slug}
            className={later ? 'phone-collapsed:hidden' : undefined}
            {...(index === PHONE_LIMIT && { 'data-show-more-start': '', tabIndex: -1 })}
          >
            <ProjectCard project={project} serviceNames={serviceNames} headingAs="h2" />
          </li>
        );
      })}
    </ul>
  );
  return (
    <Section>
      {projects.length > PHONE_LIMIT ? (
        <ShowMore label={`Show all ${projects.length} projects`}>{list}</ShowMore>
      ) : (
        list
      )}
    </Section>
  );
}
