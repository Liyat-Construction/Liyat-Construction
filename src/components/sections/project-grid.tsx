import type { Project } from '@/types/content';
import { ProjectCard } from '@/components/cards/project-card';
import { Section, type SectionTone } from '@/components/ui/section';

interface ProjectGridProps {
  /** In display order; with their service names (getServiceTitles) */
  projects: { project: Project; serviceNames: string[] }[];
  tone?: SectionTone;
}

/** Every project as a card: three columns from lg, two from md. Renders nothing without projects. */
export function ProjectGrid({ projects, tone = 'paper' }: ProjectGridProps) {
  if (projects.length === 0) return;
  return (
    <Section tone={tone}>
      <ul className="gap-grid grid md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ project, serviceNames }) => (
          <li key={project.slug}>
            <ProjectCard project={project} serviceNames={serviceNames} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
