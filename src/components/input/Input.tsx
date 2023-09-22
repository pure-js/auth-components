import classes from './input.module.scss';

interface ButtonProps {
  type?: string;
  minLength?: number;
  id?: string;
  autoFocus?: boolean;
}

export const Input = ({ type, minLength, id, autoFocus }: ButtonProps) => (
  <input
    id={id}
    autoFocus={autoFocus}
    minLength={minLength}
    className={classes.input}
    type={type}
  />
);
