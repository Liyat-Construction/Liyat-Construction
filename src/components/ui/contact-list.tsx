import { Icon, type IconName } from './icon';
import { TextLink } from './text-link';

export interface ContactRow {
  label: string;
  icon: IconName;
  values: { text: string; href?: string }[];
}

export function ContactList({ rows }: { rows: ContactRow[] }) {
  const visible = rows.filter((row) => row.values.some((value) => value.text));
  if (!visible.length) return;
  return (
    <dl className="divide-line divide-y">
      {visible.map((row) => (
        <div key={row.label} className="py-5 first:pt-0 last:pb-0">
          <dt className="text-small text-ink-muted flex items-center gap-3">
            <Icon name={row.icon} className="text-brand" />
            {row.label}
          </dt>
          <dd className="text-body text-ink ms-8 flex min-w-0 flex-col break-words">
            {row.values
              .filter((value) => value.text)
              .map((value) =>
                value.href ? (
                  <TextLink
                    key={value.text}
                    href={value.href}
                    className="flex min-h-11 items-center self-start break-all"
                  >
                    {value.text}
                  </TextLink>
                ) : (
                  <span key={value.text} className="mt-2">
                    {value.text}
                  </span>
                )
              )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
