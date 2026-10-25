'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Field, Input, Select, Textarea } from '@/components/ui/field';
import { FormFeedback } from '@/components/ui/form-feedback';
import {
  createContactFormSchema,
  isContactFormEnabled,
  submitContactForm,
  type ContactFormConfiguration,
  type ContactFormValues,
} from '@/lib/contact-form';
import type { ContactPage } from '@/types/content';

interface ContactFormProps {
  copy: ContactPage['form'];
  configuration: ContactFormConfiguration;
  sender: string;
  children: React.ReactNode;
}

export function ContactForm({ copy, configuration, sender, children }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const submitting = useRef(false);
  const formRef = useRef<HTMLFormElement>(undefined);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const enabled = isContactFormEnabled(configuration);

  useEffect(() => {
    formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
  }, [errors]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!enabled || submitting.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus('idle');
    if (data.get('website')) {
      setStatus('success');
      return;
    }
    const result = createContactFormSchema(copy.validation, configuration.subjects).safeParse({
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      subject: data.get('subject') ?? '',
      message: data.get('message'),
    });
    if (!result.success) {
      const message = (field: keyof ContactFormValues) =>
        result.error.issues.find((issue) => issue.path[0] === field)?.message;
      setErrors({
        name: message('name'),
        email: message('email'),
        phone: message('phone'),
        subject: message('subject'),
        message: message('message'),
      });
      return;
    }
    setErrors({});
    submitting.current = true;
    setStatus('sending');
    try {
      await submitContactForm(result.data, configuration, sender);
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      submitting.current = false;
    }
  };

  return (
    <form
      ref={(element) => {
        formRef.current = element ?? undefined;
      }}
      onSubmit={onSubmit}
      method="post"
      onInput={() => {
        if (status !== 'sending') setStatus('idle');
      }}
      noValidate
      aria-busy={status === 'sending'}
    >
      <div className="flex flex-col gap-6">
        <FormFeedback tone={status === 'success' ? 'success' : 'neutral'}>
          {status === 'sending' ? copy.sending : status === 'success' ? copy.success : undefined}
        </FormFeedback>
        <FormFeedback tone="error">{status === 'error' ? copy.error : undefined}</FormFeedback>
        <fieldset
          disabled={!enabled || status === 'sending'}
          className="flex min-w-0 flex-col gap-6"
        >
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            <Field id="contact-name" label={copy.fields.name} error={errors.name}>
              {(control) => <Input {...control} name="name" autoComplete="name" maxLength={80} />}
            </Field>
            <Field id="contact-email" label={copy.fields.email} error={errors.email}>
              {(control) => (
                <Input
                  {...control}
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={120}
                />
              )}
            </Field>
            <Field id="contact-phone" label={copy.fields.phone} error={errors.phone} optional>
              {(control) => <Input {...control} name="phone" type="tel" autoComplete="tel" />}
            </Field>
            <Field id="contact-subject" label={copy.fields.subject} error={errors.subject}>
              {(control) => (
                <Select {...control} name="subject" defaultValue="">
                  <option value="" disabled>
                    {copy.subjectPrompt}
                  </option>
                  {configuration.subjects.map((subject) => (
                    <option key={subject}>{subject}</option>
                  ))}
                </Select>
              )}
            </Field>
          </div>
          <Field
            id="contact-message"
            label={copy.fields.message}
            hint={copy.messageHint}
            error={errors.message}
          >
            {(control) => <Textarea {...control} name="message" maxLength={2000} rows={6} />}
          </Field>
          <div>{children}</div>
        </fieldset>
        <noscript>{copy.noScript}</noscript>
      </div>
    </form>
  );
}
