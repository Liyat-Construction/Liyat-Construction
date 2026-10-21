import { useId } from 'react';
import type { BoreholeLogData, LogMaterial } from '@/types/content';
import { cn, pick } from '@/lib/utils';

/*
 * A drilling log drawn as an engineering figure (hero candidate): the ground
 * column with its layers, the casing and screen built in it, and the water
 * level. It stretches to the height of its container, so layers are sized by
 * their thickness, not in pixels. Colors follow WellDiagram: ground in the
 * neutrals, the well in Liyat Green, water in Water Blue. On load the well
 * drills down once and the water fills it (CSS only; off under reduced motion).
 * `compact` (phones) draws the column only; the full figure adds the depth
 * scale on the left and the layer names on the right.
 */

const fills = {
  soil: 'bg-stone',
  clay: 'bg-line',
  weathered: 'bg-stone',
  rock: 'bg-line',
  aquifer: 'bg-water/15',
} as const satisfies Record<LogMaterial, string>;

/** Depth labels and layer names closer than this share of the log are skipped (they would overlap). */
const MIN_LABEL_GAP = 0.06;

/** Hatching per material, as on a printed log: none, diagonal, cross or dots. */
function Pattern({ material }: { material: LogMaterial }) {
  const id = `${useId()}-pattern`;
  if (material === 'soil' || material === 'clay') return;
  return (
    <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
      <defs>
        {material === 'aquifer' ? (
          <pattern id={id} width={8} height={8} patternUnits="userSpaceOnUse">
            <circle cx={4} cy={4} r={1.2} className="fill-water/60" />
          </pattern>
        ) : (
          <pattern
            id={id}
            width={10}
            height={10}
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1={0} y1={0} x2={0} y2={10} className="stroke-ink-muted/30" strokeWidth={1.5} />
            {material === 'rock' && (
              <line
                x1={0}
                y1={5}
                x2={10}
                y2={5}
                className="stroke-ink-muted/30"
                strokeWidth={1.5}
              />
            )}
          </pattern>
        )}
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

interface BoreholeLogProps {
  log: BoreholeLogData;
  compact?: boolean;
  className?: string;
}

export function BoreholeLog({ log, compact = false, className }: BoreholeLogProps) {
  const depth = log.layers.at(-1)?.to ?? 0;
  if (depth === 0) return;
  const at = (metres: number) => `${(metres / depth) * 100}%`;
  /** Position inside the well, which ends at the bottom of the screen */
  const inWell = (metres: number) => `${(metres / log.screenTo) * 100}%`;
  const depthLabels = [...log.layers.map((layer) => layer.from), depth].filter(
    (metres, index, all) => index === 0 || (metres - all[index - 1]) / depth >= MIN_LABEL_GAP
  );

  const column = (
    <div className={cn('border-ink relative flex flex-col border', compact ? 'w-14' : 'w-36')}>
      {log.layers.map((layer) => (
        <div
          key={layer.name}
          className={cn('relative', pick(fills, layer.material))}
          style={{ flexGrow: layer.to - layer.from }}
        >
          <Pattern material={layer.material} />
        </div>
      ))}
      {/* The well: casing to the aquifer, then the slotted screen; water stands inside from the water level */}
      <div
        className={cn(
          'animate-drill absolute top-0 left-1/2 origin-top -translate-x-1/2',
          compact ? 'w-5' : 'w-8'
        )}
        style={{ height: at(log.screenTo) }}
      >
        <div className="bg-paper absolute inset-0" />
        <div
          className="bg-water/30 animate-fill absolute inset-x-0 bottom-0 origin-bottom"
          style={{ top: inWell(log.waterLevel) }}
        />
        <div
          className="border-brand absolute inset-x-0 top-0 border-x-2"
          style={{ height: inWell(log.casingTo) }}
        />
        <div
          className="border-brand absolute inset-x-0 bottom-0 border-x-2 border-b-2 border-dashed"
          style={{ top: inWell(log.casingTo) }}
        />
      </div>
      {/* Water level: a line across the column with the surveyor's triangle */}
      <div className="animate-fill absolute inset-x-0" style={{ top: at(log.waterLevel) }}>
        <div className="bg-water h-0.5" />
        <svg viewBox="0 0 12 10" aria-hidden="true" className="absolute right-1 bottom-1 w-3">
          <path d="M0 0 H12 L6 10 Z" className="fill-water" />
        </svg>
      </div>
    </div>
  );

  if (compact) {
    return (
      <div aria-hidden="true" className={cn('flex', className)}>
        {column}
      </div>
    );
  }

  return (
    <figure className={cn('flex flex-col gap-4', className)}>
      <p className="text-eyebrow text-ink uppercase">{log.title}</p>
      <div className="flex flex-1 gap-4">
        {/* Depth scale */}
        <div
          aria-hidden="true"
          className="text-small text-ink-muted relative w-12 shrink-0 tabular-nums"
        >
          {depthLabels.map((metres) => (
            <span
              key={metres}
              className="absolute right-0 -translate-y-1/2 whitespace-nowrap"
              style={{ top: at(metres) }}
            >
              {metres} m
            </span>
          ))}
        </div>
        {column}
        {/* Layer names at the top of each layer; the water level at its line */}
        <div className="text-small relative flex-1">
          {log.layers
            .filter((layer) => (layer.to - layer.from) / depth >= MIN_LABEL_GAP)
            .map((layer) => (
              <span
                key={layer.name}
                className={cn(
                  'absolute mt-1 whitespace-nowrap',
                  layer.material === 'aquifer' ? 'text-water font-semibold' : 'text-ink'
                )}
                style={{ top: at(layer.from) }}
              >
                {layer.name}
              </span>
            ))}
          <span
            className="text-water absolute -translate-y-full pb-1 font-semibold whitespace-nowrap tabular-nums"
            style={{ top: at(log.waterLevel) }}
          >
            {log.waterLevelLabel} {log.waterLevel} m
          </span>
        </div>
      </div>
      <figcaption className="text-small text-ink-muted">{log.caption}</figcaption>
    </figure>
  );
}
