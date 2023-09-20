import classes from './input.module.scss';

export const Input = ({ type }: { type: string }) => (
  <input className={classes.input} type={type} />
);
