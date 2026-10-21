import type { Action, Project, ProjectsPage, Stat } from '@/types/content';
import { FeatureCard } from '@/components/cards/feature-card';
import { Button } from '@/components/ui/button';
import { FactsTable, type FactsRow } from '@/components/ui/facts-table';
import { Prose } from '@/components/ui/prose';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { TextLink } from '@/components/ui/text-link';

const figure = (stat: Stat) => [stat.value, stat.unit].filter(Boolean).join(' ');

interface ProjectDetailProps {
  project: Project;
  labels: ProjectsPage['detail'];
  /** The project's services as links to their pages */
  services: Action[];
}

/**
 * The body of a project page (Design System §4): scope, approach and result beside the
 * project facts. A fact the client has not confirmed renders no row (D-36).
 */
export function ProjectDetail({ project, labels, services }: ProjectDetailProps) {
  const { depth, yield: tested, year, duration } = project;
  const candidates: (FactsRow | false | undefined)[] = [
    { label: labels.factLabels.client, value: project.client },
    { label: labels.factLabels.location, value: project.location },
    year !== undefined && { label: labels.factLabels.year, value: year },
    services.length > 0 && {
      label: labels.factLabels.services,
      value: (
        <ul className="flex flex-col gap-1">
          {services.map((service) => (
            <li key={service.href}>
              <TextLink href={service.href}>{service.label}</TextLink>
            </li>
          ))}
        </ul>
      ),
    },
    depth && { label: depth.label, value: figure(depth) },
    tested && { label: tested.label, value: figure(tested), water: tested.water },
    duration !== undefined && { label: labels.factLabels.duration, value: duration },
  ];
  const rows = candidates.filter((row) => row !== false && row !== undefined);

  return (
    <Section labelledBy="project-overview">
      <div className="gap-grid grid max-lg:gap-y-12 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <SectionHeading id="project-overview" title={labels.overview} />
          <Prose>
            <p>{project.description}</p>
            {project.approach && (
              <>
                <h3>{labels.approach}</h3>
                <p>{project.approach}</p>
              </>
            )}
            {project.result && (
              <>
                <h3>{labels.result}</h3>
                <p>{project.result}</p>
              </>
            )}
          </Prose>
        </div>
        <div className="flex flex-col gap-6 lg:col-span-4 lg:col-start-9">
          <FeatureCard feature={{ title: labels.facts }}>
            <FactsTable rows={rows} />
          </FeatureCard>
          <Button href={labels.contact.href} icon="arrow" className="self-start">
            {labels.contact.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}
