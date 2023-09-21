import classes from './input.module.scss';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type?: string;
  minLength?: number;
}

export const Input = ({ type, minLength }: ButtonProps) => (
  <input minLength={minLength} className={classes.input} type={type} />
);
