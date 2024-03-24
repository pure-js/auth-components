import type { HTMLInputTypeAttribute } from 'react';
import * as s from './input.css.ts';
import { cn } from '@/utils/index';

interface InputProps {
  type?: HTMLInputTypeAttribute;
  minLength?: number;
  label: string;
  id?: string;
  autoFocus?: boolean;
  placeholder?: string;
  className?: string;
  size?: keyof typeof s.inputSize;
  validationMessage?: string;
}

export const Input = ({
  type,
  minLength,
  id,
  label,
  autoFocus,
  placeholder,
  className,
  size = 'md',
  validationMessage,
}: InputProps) => {
  return (
    <>
      <label htmlFor={id} className={cn(s.label, s.inputSize[size], className)}>
        <span className={cn(s.labelTxt, s.inputSize[size])}>{label}</span>
        <input
          id={id}
          autoFocus={autoFocus}
          minLength={minLength}
          placeholder={placeholder}
          className={cn(
            s.inputBase,
            validationMessage && s.invalid,
            s.inputSize[size],
          )}
          type={type}
        />
        {validationMessage && (
          <span className={s.invalidTxt}>{validationMessage}</span>
        )}
      </label>
    </>
  );
};
