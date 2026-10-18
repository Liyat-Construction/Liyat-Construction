'use client';

import PhoneInput from 'react-phone-number-input';
import { cn } from '@/lib/utils';
import 'react-phone-number-input/style.css';
import './styled-phone-input.css';

interface StyledPhoneInputProps {
  id?: string;
  value?: string;
  onChange?: (value?: string | undefined) => void;
  placeholder?: string;
  defaultCountry?: string;
  international?: boolean;
  className?: string;
  error?: boolean;
}

export function StyledPhoneInput({
  id,
  value,
  onChange,
  placeholder = 'Enter phone number',
  defaultCountry = 'ET',
  international = true,
  className,
  error,
}: StyledPhoneInputProps) {
  return (
    <div className={cn('phone-input-wrapper', className)}>
      <PhoneInput
        id={id}
        value={value}
        onChange={onChange as (value?: string | undefined) => void}
        placeholder={placeholder}
        defaultCountry={defaultCountry as 'ET'}
        international={international}
        className={cn(
          'block w-full rounded-lg border px-4 py-3',
          'focus:border-brand-accent focus:ring-brand-accent border-border-default bg-white focus:ring-1 focus:outline-none',
          'text-brand-primary',
          'dark:border-border-dark dark:bg-surface-card dark:text-white',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500'
        )}
      />
    </div>
  );
}
