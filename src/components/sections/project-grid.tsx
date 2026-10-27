import type { Project } from '@/types/content';
import { ProjectCard } from '@/components/cards/project-card';
import { Section } from '@/components/ui/section';

interface ProjectGridProps {
  /** In display order; with their service names (getServiceTitles) */
  projects: { project: Project; serviceNames: string[] }[];
}

/**
 * Every project as a card: three columns from lg, two from md. Renders nothing without projects.
 * No section heading, so the card titles are h2s under the page's h1 (P15, heading order).
 */
export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) return;
  return (
    <Section>
      <ul className="gap-grid grid md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ project, serviceNames }) => (
          <li key={project.slug}>
            <ProjectCard project={project} serviceNames={serviceNames} headingAs="h2" />
          </li>
        ))}
      </ul>
    </Section>
  );
}
