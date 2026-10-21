interface FormFeedbackProps {
  children?: React.ReactNode;
  tone?: 'neutral' | 'success' | 'error';
}

export function FormFeedback({ children, tone = 'neutral' }: FormFeedbackProps) {
  return (
    <p
      role={tone === 'error' ? 'alert' : 'status'}
      aria-atomic="true"
      className={
        children
          ? `text-small rounded-control border p-4 ${
              tone === 'error'
                ? 'border-alert text-alert bg-white'
                : tone === 'success'
                  ? 'border-brand bg-brand-tint text-ink'
                  : 'border-line text-ink-muted bg-white'
            }`
          : 'sr-only'
      }
    >
      {children}
    </p>
  );
}
