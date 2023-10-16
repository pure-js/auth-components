import type { HTMLInputTypeAttribute } from 'react';
import classes from './input.module.scss';

interface InputProps {
  type?: HTMLInputTypeAttribute;
  minLength?: number;
  label?: string;
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
    <label htmlFor={id} className={`${classes.label} ${classes[size]}`}>
      {label}
      <input
        id={id}
        autoFocus={autoFocus}
        minLength={minLength}
        placeholder={placeholder}
        className={`${classes.input} ${classes[size]}`}
        type={type}
      />
    </label>
  </>
);
