import type { HTMLInputTypeAttribute } from 'react';
import input from './input.module.scss';

interface InputProps {
  type?: HTMLInputTypeAttribute;
  minLength?: number;
  label: string;
  id?: string;
  autoFocus?: boolean;
  placeholder?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export const Input = ({
  type,
  minLength,
  id,
  label,
  autoFocus,
  placeholder,
  size = 'medium',
}: InputProps) => (
  <>
    <label htmlFor={id} className={[input.label, input[size]].join(' ')}>
      <span className={[input.labelText, input[size]].join(' ')}>{label}</span>
      <input
        id={id}
        autoFocus={autoFocus}
        minLength={minLength}
        placeholder={placeholder}
        className={[input.base, input[size]].join(' ')}
        type={type}
      />
    </label>
  </>
);
