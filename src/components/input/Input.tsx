import classes from './input.module.scss';

interface ButtonProps {
  type?: string;
  minLength?: number;
  id?: string;
  autoFocus?: boolean;
  placeholder?: string;
}

export const Input = ({
  type,
  minLength,
  id,
  autoFocus,
  placeholder,
}: ButtonProps) => (
  <input
    id={id}
    autoFocus={autoFocus}
    minLength={minLength}
    placeholder={placeholder}
    className={classes.input}
    type={type}
  />
);
