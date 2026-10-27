import { useId } from 'react';
import type { ServiceSlug } from '@/types/content';

/*
 * Cross-section of a drilled water well (PROJECT.md §6), drawn to read at
 * 320 px wide. Colors are tokens only: water in Water Blue, the well structure
 * Liyat builds in Liyat Green, pump equipment and labels in Ink, ground in the
 * neutrals. Each group carries `data-part` = the services that work on it (a
 * space-separated list), so ServiceLifecycle can highlight it (globals.css,
 * D-45). Rehabilitation cleans the screen and gravel pack that drilling built.
 * Turnkey covers all parts.
 *
 * Ground, top to bottom: topsoil, weathered rock, rock, aquifer. The aquifer is
 * confined, so the static water level stands above it. The pump hangs below the
 * pumping level and above the screen; gravel pack surrounds the screen; a grout
 * seal closes the top of the annulus under the wellhead.
 */

type Part = Exclude<ServiceSlug, 'turnkey-projects'>;

const SURFACE = 100;
const STATIC_LEVEL = 200;
const PUMPING_LEVEL = 268;
const SCREEN_TOP = 380;
const SCREEN_BOTTOM = 530;
const BOTTOM = 552;

function Label({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <text x={x} y={y} className="fill-ink text-small font-body">
      {children}
    </text>
  );
}

/** Leader line from a part to its label in the right-hand column. */
function Leader({ from, y }: { from: number; y: number }) {
  return <line x1={from} y1={y} x2={238} y2={y} className="stroke-ink-muted" strokeWidth={1} />;
}

function Group({ parts, children }: { parts: Part[]; children: React.ReactNode }) {
  return <g data-part={parts.join(' ')}>{children}</g>;
}

interface WellDiagramProps {
  className?: string;
}

export function WellDiagram({ className }: WellDiagramProps) {
  const uid = useId();
  const ids = {
    title: `${uid}-title`,
    desc: `${uid}-desc`,
    rock: `${uid}-rock`,
    gravel: `${uid}-gravel`,
  };

  return (
    <svg
      viewBox="0 0 360 600"
      role="img"
      aria-labelledby={ids.title}
      aria-describedby={ids.desc}
      className={className}
    >
      <title id={ids.title}>Cross-section of a water well</title>
      <desc id={ids.desc}>
        From the surface down: the wellhead with its control panel; steel casing through topsoil,
        weathered rock and rock; the rising main down to a submersible pump below the pumping water
        level; the screen and gravel pack in the aquifer.
      </desc>
      <defs>
        <pattern
          id={ids.rock}
          width={10}
          height={10}
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line x1={0} y1={0} x2={0} y2={10} className="stroke-line" strokeWidth={2} />
        </pattern>
        <pattern id={ids.gravel} width={6} height={6} patternUnits="userSpaceOnUse">
          <circle cx={3} cy={3} r={1.3} className="fill-ink-muted" />
        </pattern>
      </defs>

      {/* Survey: the ground and the aquifer it locates */}
      <Group parts={['hydrogeological-survey']}>
        <rect x={0} y={SURFACE} width={360} height={40} className="fill-stone" />
        <rect x={0} y={140} width={360} height={110} className="fill-line" />
        <rect x={0} y={250} width={360} height={130} className="fill-stone" />
        <rect x={0} y={250} width={360} height={130} fill={`url(#${ids.rock})`} />
        <rect x={0} y={SCREEN_TOP} width={360} height={160} className="fill-water/15" />
        <rect x={0} y={540} width={360} height={60} className="fill-line" />
        <text x={12} y={126} className="fill-ink-muted text-small font-body">
          Topsoil
        </text>
        <text x={12} y={200} className="fill-ink-muted text-small font-body">
          Weathered rock
        </text>
        <text x={12} y={320} className="fill-ink-muted text-small font-body">
          Rock
        </text>
        <text x={12} y={465} className="fill-water text-small font-body font-semibold">
          Aquifer
        </text>
      </Group>
      <line x1={0} y1={SURFACE} x2={360} y2={SURFACE} className="stroke-ink" strokeWidth={1.5} />

      {/* Drilling: borehole and casing */}
      <Group parts={['borehole-drilling']}>
        <rect x={150} y={SURFACE} width={60} height={BOTTOM + 6 - SURFACE} className="fill-paper" />
        {[164, 196].map((x) => (
          <line
            key={x}
            x1={x}
            y1={64}
            x2={x}
            y2={SCREEN_TOP}
            className="stroke-brand"
            strokeWidth={3}
          />
        ))}
        <Leader from={196} y={165} />
        <Label x={244} y={169}>
          Casing
        </Label>
      </Group>

      {/* Drilling builds the screen and gravel pack; rehabilitation cleans them */}
      <Group parts={['borehole-drilling', 'borehole-rehabilitation']}>
        <rect
          x={150}
          y={SCREEN_TOP - 20}
          width={14}
          height={BOTTOM + 6 - SCREEN_TOP + 20}
          fill={`url(#${ids.gravel})`}
        />
        <rect
          x={196}
          y={SCREEN_TOP - 20}
          width={14}
          height={BOTTOM + 6 - SCREEN_TOP + 20}
          fill={`url(#${ids.gravel})`}
        />
        {[164, 196].map((x) => (
          <g key={x} className="stroke-brand" strokeWidth={3}>
            <line x1={x} y1={SCREEN_TOP} x2={x} y2={SCREEN_BOTTOM} strokeDasharray="6 4" />
            <line x1={x} y1={SCREEN_BOTTOM} x2={x} y2={BOTTOM} />
          </g>
        ))}
        <line x1={164} y1={BOTTOM} x2={196} y2={BOTTOM} className="stroke-brand" strokeWidth={3} />
        <Leader from={196} y={450} />
        <Label x={244} y={454}>
          Screen
        </Label>
        <Leader from={210} y={510} />
        <Label x={244} y={514}>
          Gravel pack
        </Label>
      </Group>

      {/* Water standing in the well */}
      <rect
        x={166}
        y={STATIC_LEVEL}
        width={28}
        height={BOTTOM - STATIC_LEVEL - 1.5}
        className="fill-water/25"
      />

      {/* Wellhead, built when the borehole is completed: grout seal, concrete apron, well cap */}
      <Group parts={['borehole-drilling']}>
        <rect x={150} y={SURFACE} width={14} height={50} className="fill-ink-muted/50" />
        <rect x={196} y={SURFACE} width={14} height={50} className="fill-ink-muted/50" />
        <rect
          x={120}
          y={88}
          width={120}
          height={12}
          rx={2}
          className="stroke-brand fill-white"
          strokeWidth={2}
        />
        <rect x={158} y={56} width={44} height={10} rx={2} className="fill-brand" />
        <Label x={248} y={91}>
          Wellhead
        </Label>
      </Group>

      {/* Pump supply and installation: control panel, cable, rising main, submersible pump */}
      <Group parts={['pump-supply-installation']}>
        <rect
          x={56}
          y={40}
          width={34}
          height={36}
          rx={2}
          className="stroke-ink fill-white"
          strokeWidth={2}
        />
        <line x1={73} y1={76} x2={73} y2={SURFACE} className="stroke-ink" strokeWidth={2} />
        <path d="M90 58 H158" className="stroke-ink" strokeWidth={1.5} fill="none" />
        <Label x={20} y={30}>
          Control panel
        </Label>
        <line x1={180} y1={66} x2={180} y2={318} className="stroke-ink" strokeWidth={4} />
        <rect x={172} y={318} width={16} height={50} rx={3} className="fill-ink" />
        <Leader from={180} y={125} />
        <Label x={244} y={129}>
          Rising main
        </Label>
        <Leader from={188} y={343} />
        <Label x={244} y={347}>
          Pump
        </Label>
      </Group>

      {/* Pumping tests: static and pumping water levels */}
      <Group parts={['pumping-tests']}>
        <line
          x1={140}
          y1={STATIC_LEVEL}
          x2={238}
          y2={STATIC_LEVEL}
          className="stroke-water"
          strokeWidth={2}
        />
        <path d={`M214 ${STATIC_LEVEL - 12} h12 l-6 9 z`} className="fill-water" />
        <Label x={244} y={STATIC_LEVEL + 4}>
          Water level
        </Label>
        <line
          x1={140}
          y1={PUMPING_LEVEL}
          x2={238}
          y2={PUMPING_LEVEL}
          className="stroke-water"
          strokeWidth={2}
          strokeDasharray="5 4"
        />
        <Label x={244} y={PUMPING_LEVEL + 4}>
          Pumping level
        </Label>
      </Group>
    </svg>
  );
}
