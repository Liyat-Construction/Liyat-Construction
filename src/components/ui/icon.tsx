import { createElement } from 'react';
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleAlert,
  Clock,
  Cog,
  Drill,
  Eye,
  Target,
  FileText,
  Gauge,
  House,
  KeyRound,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  ScanSearch,
  Wrench,
  X,
  type LucideIcon,
} from 'lucide-react';
import { cn, pick } from '@/lib/utils';

// Only icons registered here can be used.
const icons = {
  'arrow-right': ArrowRight,
  check: Check,
  'chevron-right': ChevronRight,
  alert: CircleAlert,
  clock: Clock,
  document: FileText,
  eye: Eye,
  target: Target,
  home: House,
  // Brand mark (lucide's brand icons are deprecated but kept); only for the agency credit (D-79)
  instagram: Instagram,
  mail: Mail,
  'map-pin': MapPin,
  menu: Menu,
  phone: Phone,
  close: X,
  // Services (PROJECT.md §8), lifecycle order
  survey: ScanSearch,
  drilling: Drill,
  'pumping-test': Gauge,
  rehabilitation: Wrench,
  pump: Cog,
  turnkey: KeyRound,
} as const satisfies Record<string, LucideIcon>;

const sizes = {
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
} as const satisfies Record<string, string>;

export type IconName = keyof typeof icons;

export const ICON_NAMES = Object.keys(icons) as IconName[];

interface IconProps {
  name: IconName;
  size?: keyof typeof sizes;
  /** Give a label only when the icon carries meaning on its own; otherwise it is hidden. */
  label?: string;
  className?: string;
}

/** Line icon, 1.5 stroke, current text color. */
export function Icon({ name, size = 'md', label, className }: IconProps) {
  // createElement, not <Glyph />: the icon is a module-level constant picked by name
  return createElement(pick(icons, name), {
    strokeWidth: 1.5,
    'aria-hidden': label ? undefined : true,
    'aria-label': label,
    role: label ? 'img' : undefined,
    className: cn('shrink-0', pick(sizes, size), className),
  });
}
