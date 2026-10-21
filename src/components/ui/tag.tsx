import { cn, pick } from '@/lib/utils';

const tones = {
  neutral: 'border border-line bg-white text-ink',
  brand: 'bg-brand-tint text-brand',
} as const satisfies Record<string, string>;

interface TagProps {
  children: React.ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}

/** Short label, e.g. the services on a project. Not interactive. */
export function Tag({ children, tone = 'neutral', className }: TagProps) {
  return (
    <span
      className={cn(
        'text-small rounded-control inline-flex items-center px-2.5 py-0.5 font-medium',
        pick(tones, tone),
        className
      )}
    >
      {children}
    </span>
  );
}
