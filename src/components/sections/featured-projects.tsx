import type { Action, Partner, Project, SectionCopy } from '@/types/content';
import { ProjectCard } from '@/components/cards/project-card';
import { ClientList } from '@/components/sections/client-list';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

interface FeaturedProjectsProps extends SectionCopy {
  /** Up to three; with their service names (getServiceTitles) */
  projects: { project: Project; serviceNames: string[] }[];
  link?: Action;
  /** The static clients row under the cards (Home); hidden when empty */
  clientsTitle?: string;
  clients?: Partner[];
  id?: string;
}

/**
 * Three project cards in a row (two from md, where the third would sit alone),
 * the link to all projects above them and the clients row (optional) below.
 * Renders nothing without projects.
 */
export function FeaturedProjects({
  eyebrow,
  title,
  intro,
  projects,
  link,
  clientsTitle,
  clients = [],
  id = 'featured-projects',
}: FeaturedProjectsProps) {
  if (projects.length === 0) return;
  return (
    <Section id={id} labelledBy={`${id}-title`}>
      <div className="flex flex-col gap-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id={`${id}-title`}
            align="start"
            eyebrow={eyebrow}
            title={title}
            intro={intro}
          />
          {link && (
            <Button href={link.href} icon="arrow" className="shrink-0">
              {link.label}
            </Button>
          )}
        </div>
        <ul className="gap-grid grid md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map(({ project, serviceNames }, index) => (
            <li key={project.slug} className={index === 2 ? 'md:max-lg:hidden' : undefined}>
              <ProjectCard project={project} serviceNames={serviceNames} />
            </li>
          ))}
        </ul>
        <ClientList clients={clients} title={clientsTitle} />
      </div>
    </Section>
  );
}
