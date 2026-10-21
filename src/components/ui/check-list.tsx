import { cn } from '@/lib/utils';
import { Icon } from './icon';

interface CheckListProps {
  items: string[];
  className?: string;
}

/** A list of included items, each marked with a green check. Renders nothing when empty. */
export function CheckList({ items, className }: CheckListProps) {
  if (items.length === 0) return;
  return (
    <ul className={cn('flex flex-col gap-3', className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Icon name="check" className="text-brand on-dark:text-white mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
