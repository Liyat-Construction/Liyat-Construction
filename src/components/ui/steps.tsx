import { cn } from '@/lib/utils';

interface StepsProps {
  items: string[];
  className?: string;
}

/** Numbered method steps (01, 02…) separated by hairlines, like a method statement. */
export function Steps({ items, className }: StepsProps) {
  if (items.length === 0) return;
  return (
    <ol className={cn('border-line border-b', className)}>
      {items.map((item, index) => (
        <li key={item} className="border-line flex gap-5 border-t py-4">
          <span className="font-heading text-h4 text-brand on-dark:text-white tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="pt-0.5">{item}</span>
        </li>
      ))}
    </ol>
  );
}
