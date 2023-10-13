import type { HTMLInputTypeAttribute } from 'react';
import classes from './input.module.scss';

interface InputProps {
  type?: HTMLInputTypeAttribute;
  minLength?: number;
  label?: string;
  id?: string;
  autoFocus?: boolean;
  placeholder?: string;
}

export const Input = ({
  type,
  minLength,
  id,
  label,
  autoFocus,
  placeholder,
}: InputProps) => (
  <>
    <label htmlFor={id} className={classes.label}>
      {label}
    </label>
    <input
      id={id}
      autoFocus={autoFocus}
      minLength={minLength}
      placeholder={placeholder}
      className={classes.input}
      type={type}
    />
  </>
);
