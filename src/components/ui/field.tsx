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
  /** Fields are required unless marked optional; the label says "(optional)" */
  optional?: boolean;
  children: (control: ControlProps) => React.ReactNode;
  className?: string;
}

/**
 * Label + control + hint + error, wired with aria-describedby. Usage:
 * <Field id="email" label="Email">{(p) => <Input {...p} type="email" />}</Field>
 */
export function Field({
  id,
  label,
  hint,
  error,
  optional = false,
  children,
  className,
}: FieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={id} className="text-small text-ink font-semibold">
        {label}
        {optional && <span className="text-ink-muted font-normal"> (optional)</span>}
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
        required: !optional,
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
  'bg-white text-ink text-body border-ink-muted placeholder:text-ink-muted w-full rounded-control border px-3 aria-invalid:border-alert';

type InputProps = ControlProps & React.ComponentPropsWithoutRef<'input'>;

export function Input({ className, ...props }: InputProps) {
  return <input {...props} className={cn(control, 'min-h-11', className)} />;
}

type TextareaProps = ControlProps & React.ComponentPropsWithoutRef<'textarea'>;

export function Textarea({ className, rows = 5, ...props }: TextareaProps) {
  return <textarea rows={rows} {...props} className={cn(control, 'py-2.5', className)} />;
}

type SelectProps = ControlProps & React.ComponentPropsWithoutRef<'select'>;

export function Select({ className, children, ...props }: SelectProps) {
  return (
    <div className={cn('relative', className)}>
      <select {...props} className={cn(control, 'min-h-11 appearance-none pe-10')}>
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
