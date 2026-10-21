import type { Action, Project, SectionCopy } from '@/types/content';
import { ProjectCard } from '@/components/cards/project-card';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { TextLink } from '@/components/ui/text-link';

interface FeaturedProjectsProps extends SectionCopy {
  /** Up to three; with their service names (getServiceTitles) */
  projects: { project: Project; serviceNames: string[] }[];
  link?: Action;
  id?: string;
}

/**
 * Three project cards in a row (two from md, where the third would sit alone),
 * then the link to all projects. Renders nothing without projects.
 */
export function FeaturedProjects({
  eyebrow,
  title,
  intro,
  projects,
  link,
  id = 'featured-projects',
}: FeaturedProjectsProps) {
  if (projects.length === 0) return;
  return (
    <Section labelledBy={`${id}-title`}>
      <div className="flex flex-col gap-12">
        <div className="gap-grid flex flex-col md:flex-row md:items-end md:justify-between">
          <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} intro={intro} />
          {link && (
            <TextLink href={link.href} arrow className="shrink-0">
              {link.label}
            </TextLink>
          )}
        </div>
        <ul className="gap-grid grid md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map(({ project, serviceNames }, index) => (
            <li key={project.slug} className={index === 2 ? 'md:max-lg:hidden' : undefined}>
              <ProjectCard project={project} serviceNames={serviceNames} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
