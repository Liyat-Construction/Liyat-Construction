import { cn, pick } from '@/lib/utils';
import { Icon } from './icon';
import { SmartLink } from './smart-link';

// Each variant adapts to dark surfaces (Ink) by itself, and the header's
// primary button to the see-through header over a photo (`over-photo:`).
const variants = {
  primary:
    'bg-brand text-white hover:bg-brand-dark on-dark:bg-white on-dark:text-brand on-dark:hover:bg-brand-tint over-photo:bg-white over-photo:text-brand over-photo:hover:bg-brand-tint',
  secondary:
    'border border-brand text-brand hover:bg-brand-tint on-dark:border-white on-dark:text-white on-dark:hover:bg-white/10',
} as const satisfies Record<string, string>;

const sizes = {
  md: 'min-h-11 px-5 text-body',
  lg: 'min-h-13 px-7 text-lead',
} as const satisfies Record<string, string>;

const icons = {
  arrow: 'arrow-right',
  phone: 'phone',
  mail: 'mail',
} as const;

type ButtonIcon = keyof typeof icons;

interface CommonProps {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  /** `arrow` trails the label; `phone` and `mail` lead it */
  icon?: ButtonIcon;
  className?: string;
}

type ButtonProps = CommonProps &
  (
    | { href: string; type?: never; disabled?: never }
    | { href?: never; type?: 'button' | 'submit'; disabled?: boolean }
  );

/** Renders a link (internal, external, tel:, mailto:) or a <button>. Min 44 px tall. */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className,
  ...rest
}: ButtonProps) {
  const classes = cn(
    'group/button font-body inline-flex items-center justify-center gap-2 rounded-control font-semibold',
    'duration-(--duration-fast) ease-standard transition-colors',
    'disabled:cursor-not-allowed disabled:opacity-60',
    pick(sizes, size),
    pick(variants, variant),
    className
  );
  const glyph = icon && (
    <Icon
      name={pick(icons, icon)}
      size={size === 'lg' ? 'md' : 'sm'}
      className={cn(
        icon === 'arrow' &&
          'ease-standard order-last transition-transform duration-(--duration-fast) group-hover/button:translate-x-0.5'
      )}
    />
  );

  if (rest.href !== undefined) {
    return (
      <SmartLink href={rest.href} className={classes}>
        {glyph}
        <span>{children}</span>
      </SmartLink>
    );
  }
  return (
    <button type={rest.type ?? 'button'} disabled={rest.disabled} className={classes}>
      {glyph}
      <span>{children}</span>
    </button>
  );
}
