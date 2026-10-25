interface SystemMessageProps {
  copy: { eyebrow: string; title: string; intro: string };
  home: string;
  contact: string;
  retry?: { label: string; onClick: () => void };
  as?: 'h1' | 'h2';
}

export function SystemMessage({
  copy,
  home,
  contact,
  retry,
  as: Heading = 'h1',
}: SystemMessageProps) {
  const action =
    'text-body inline-flex min-h-11 items-center justify-center rounded-control px-5 font-semibold';
  return (
    <section aria-labelledby="system-title" className="bg-stone text-ink py-section">
      <div className="px-gutter mx-auto flex max-w-(--container-prose) flex-col items-center gap-6 text-center">
        <p className="text-eyebrow text-brand uppercase">{copy.eyebrow}</p>
        <Heading id="system-title" className="font-heading text-h1">
          {copy.title}
        </Heading>
        <p className="text-lead text-ink-muted max-w-prose">{copy.intro}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {retry && (
            <button
              type="button"
              onClick={retry.onClick}
              className={`${action} bg-brand hover:bg-brand-dark text-white`}
            >
              {retry.label}
            </button>
          )}
          <a href="/" className={`${action} border-brand text-brand hover:bg-brand-tint border`}>
            {home}
          </a>
          <a href="/#contact" className={`${action} text-brand underline underline-offset-4`}>
            {contact}
          </a>
        </div>
      </div>
    </section>
  );
}
