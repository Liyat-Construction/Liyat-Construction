import type { Project, ProjectsPage } from '@/types/content';
import { PhotoGallery } from '@/components/sections/photo-gallery';
import { Button } from '@/components/ui/button';
import { FactsTable, type FactsRow } from '@/components/ui/facts-table';
import { Prose } from '@/components/ui/prose';
import { Section } from '@/components/ui/section';
import { SmartLink } from '@/components/ui/smart-link';

interface ProjectDetailProps {
  /** A project with a `story` */
  project: Project;
  /** The services used, each with its page link and one-line summary */
  services: { title: string; href: string; summary: string }[];
  labels: ProjectsPage['detail'];
  /** Prefix of the section ids; differs when two appear on one page (/styleguide) */
  id?: string;
}

/**
 * The body of a project page (D-184): the story and the services, with the facts table and the
 * contact button in a column that stays in view while the story scrolls (from lg), then the site
 * photos (a swipe row on phones). Facts the client has not confirmed are missing from the data
 * and render nothing. Renders nothing for a project without a story.
 */
export function ProjectDetail({ project, services, labels, id = 'project' }: ProjectDetailProps) {
  const { story } = project;
  if (!story) return;

  const rows: FactsRow[] = [
    { label: 'Client', value: project.client },
    { label: 'Place', value: project.location },
    ...(project.year ? [{ label: 'Year', value: String(project.year) }] : []),
    ...(project.scope ? [{ label: 'Scope', value: project.scope }] : []),
    ...[project.depth, project.yield, project.shoringDepth]
      .filter((figure) => figure !== undefined)
      .map((figure) => ({
        label: figure.label,
        value: `${figure.value} ${figure.unit ?? ''}`.trim(),
        water: figure.water,
      })),
  ];

  return (
    <>
      <Section labelledBy={`${id}-story`}>
        <div className="gap-grid grid lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <Prose>
              <h2 id={`${id}-story`}>{labels.job}</h2>
              {story.job.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <h2>{labels.work}</h2>
              {story.work.intro && <p>{story.work.intro}</p>}
              <ol>
                {story.work.steps.map((step) => (
                  <li key={step.title}>
                    <strong>{step.title}</strong> {step.text}
                  </li>
                ))}
              </ol>
              {story.work.note && <p>{story.work.note}</p>}
              <h2>{labels.result}</h2>
              {story.result.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {services.length > 0 && (
                <>
                  <h2>{labels.services}</h2>
                  <ul>
                    {services.map((service) => (
                      <li key={service.href}>
                        <SmartLink href={service.href}>{service.title}</SmartLink>
                        {`: ${service.summary}`}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </Prose>
          </div>
          {/* Stays in view while the story scrolls, so the contact button is always there */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-(--sticky-top) lg:col-span-4 lg:col-start-9">
            <FactsTable rows={rows} />
            <Button href="/#contact" icon="arrow" className="self-start">
              {labels.cta}
            </Button>
          </div>
        </div>
      </Section>
      <PhotoGallery
        id={`${id}-photos`}
        title={labels.photos}
        images={story.photos}
        layout="phone-carousel"
      />
    </>
  );
}
