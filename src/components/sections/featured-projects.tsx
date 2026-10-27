import { cn } from '@/lib/utils';
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
  const shown = projects.slice(0, 3);
  // Fewer than three cards centre under the heading — and centre the heading
  // with them — instead of hugging the left edge (D-113)
  const few = shown.length < 3;
  const columns = few
    ? shown.length === 1
      ? 'w-full sm:mx-auto sm:max-w-sm'
      : 'md:grid-cols-2 lg:mx-auto lg:w-full lg:max-w-3xl'
    : 'md:grid-cols-2 lg:grid-cols-3';
  return (
    <Section id={id} labelledBy={`${id}-title`}>
      <div className="flex flex-col gap-12">
        <div
          className={cn(
            'flex flex-wrap gap-6',
            few ? 'relative flex-col items-center' : 'items-end justify-between'
          )}
        >
          <SectionHeading
            id={`${id}-title`}
            align={few ? 'center' : 'start'}
            eyebrow={eyebrow}
            title={title}
            intro={intro}
          />
          {link && (
            <Button
              href={link.href}
              icon="arrow"
              className={cn(
                'shrink-0',
                few && 'max-sm:self-end sm:absolute sm:right-0 sm:bottom-0'
              )}
            >
              {link.label}
            </Button>
          )}
        </div>
        <ul className={cn('gap-grid grid', columns)}>
          {shown.map(({ project, serviceNames }, index) => (
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
