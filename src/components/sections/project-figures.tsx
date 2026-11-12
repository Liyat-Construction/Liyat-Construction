import type { Project, Stat as StatData } from '@/types/content';
import { Stat } from '@/components/ui/stat';

interface ProjectFiguresProps {
  project: Project;
  /** Label of the year, e.g. "Completed" */
  completedLabel: string;
}

/**
 * The project's key figures, centred, for the page header (white on its Ink band): the tested
 * yield first, then the depth, then the year. Renders nothing without any figure.
 */
export function ProjectFigures({ project, completedLabel }: ProjectFiguresProps) {
  const measures = [project.depth, project.yield, project.shoringDepth].filter(
    (figure) => figure !== undefined
  );
  const figures: StatData[] = [
    // The tested yield first: it is the figure clients ask about (as on the cards)
    ...[...measures].sort((a, b) => Number(b.water ?? false) - Number(a.water ?? false)),
    ...(project.year ? [{ value: String(project.year), label: completedLabel }] : []),
  ];
  if (figures.length === 0) return;
  return (
    // One row on phones (smaller figures, tight gaps); wider screens keep generous gaps
    <dl className="flex justify-center gap-x-4 sm:flex-wrap sm:gap-x-16 sm:gap-y-6">
      {figures.map((figure) => (
        <Stat
          key={figure.label}
          value={figure.value}
          unit={figure.unit}
          label={figure.label}
          align="center"
          size="compact"
          className="min-w-0"
        />
      ))}
    </dl>
  );
}
