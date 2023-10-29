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
  size?: 'sm' | 'md' | 'lg';
  validationMessage?: string;
}

const getCssNameBySize = (size: 'sm' | 'md' | 'lg') => {
  switch (size) {
    case 'sm':
      return '--small';
    case 'md':
      return '--medium';
    case 'lg':
      return '--large';
  }
};

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
  const $size = getCssNameBySize(size);
  return (
    <>
      <label
        htmlFor={id}
        className={[input.label, input[$size], className].join(' ')}
      >
        <span className={[input.label_txt, input[$size]].join(' ')}>
          {label}
        </span>
        <input
          id={id}
          autoFocus={autoFocus}
          minLength={minLength}
          placeholder={placeholder}
          className={[
            input.default,
            validationMessage && input.m_invalid,
            input[$size],
          ].join(' ')}
          type={type}
        />
        {validationMessage && (
          <span className={input.invalid_txt}>{validationMessage}</span>
        )}
      </label>
    </>
  );
};
