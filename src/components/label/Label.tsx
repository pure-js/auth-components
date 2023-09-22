import classes from './label.module.scss';

interface LabelProps {
  label?: string;
  htmlFor?: string;
}

export const Label = ({ label, htmlFor }: LabelProps) => (
  <label htmlFor={htmlFor} className={classes.label}>
    {label}
  </label>
);
