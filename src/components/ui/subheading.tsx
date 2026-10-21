import { cn, pick } from '@/lib/utils';

const sizes = {
  h3: 'text-h3',
  h4: 'text-h4',
} as const satisfies Record<string, string>;

interface SubheadingProps {
  children: React.ReactNode;
  as?: 'h3' | 'h4';
  /** Defaults to the size of the `as` level */
  size?: keyof typeof sizes;
  className?: string;
}

/** A heading inside a section, below its SectionHeading (h3/h4). */
export function Subheading({
  children,
  as: Heading = 'h3',
  size = Heading,
  className,
}: SubheadingProps) {
  return <Heading className={cn('text-balance', pick(sizes, size), className)}>{children}</Heading>;
}
