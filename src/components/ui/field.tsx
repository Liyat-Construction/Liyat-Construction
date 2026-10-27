import { clsx as cn } from 'clsx';
import { ChevronDown, CircleAlert } from 'lucide-react';

/** Props a control needs so its label, hint and error are announced. */
export interface ControlProps {
  id: string;
  'aria-describedby'?: string;
  'aria-invalid'?: true;
  required?: boolean;
}

interface FieldProps {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: (control: ControlProps) => React.ReactNode;
  className?: string;
}

/**
 * Label + control + hint + error, wired with aria-describedby. Usage:
 * <Field id="email" label="Email">{(p) => <Input {...p} type="email" />}</Field>
 */
export function Field({ id, label, hint, error, children, className }: FieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={id} className="text-small text-ink font-semibold">
        {label}
      </label>
      {hint && (
        <p id={hintId} className="text-small text-ink-muted">
          {hint}
        </p>
      )}
      {children({
        id,
        'aria-describedby': describedBy,
        'aria-invalid': error ? true : undefined,
        // Every field on the site is required (D-95)
        required: true,
      })}
      {error && (
        <p id={errorId} className="text-small text-alert flex items-center gap-1.5 font-medium">
          <CircleAlert aria-hidden="true" strokeWidth={1.5} className="size-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

const control =
  'bg-white text-ink text-body border-ink-muted/70 placeholder:text-ink-muted focus-visible:border-brand ease-standard w-full rounded-card border px-4 transition-colors duration-(--duration-fast) aria-invalid:border-alert focus-visible:aria-invalid:border-alert';

type InputProps = ControlProps & React.ComponentPropsWithoutRef<'input'>;

export function Input({ className, ...props }: InputProps) {
  return <input {...props} className={cn(control, 'min-h-12', className)} />;
}

type TextareaProps = ControlProps & React.ComponentPropsWithoutRef<'textarea'>;

export function Textarea({ className, rows = 5, ...props }: TextareaProps) {
  return <textarea rows={rows} {...props} className={cn(control, 'resize-y py-3', className)} />;
}

type SelectProps = ControlProps & React.ComponentPropsWithoutRef<'select'>;

export function Select({ className, children, ...props }: SelectProps) {
  return (
    <div className={cn('relative', className)}>
      <select {...props} className={cn(control, 'min-h-12 appearance-none pe-10')}>
        {children}
      </select>
      <ChevronDown
        aria-hidden="true"
        strokeWidth={1.5}
        className="text-ink-muted pointer-events-none absolute end-3 top-1/2 size-4 -translate-y-1/2"
      />
    </div>
  );
}
