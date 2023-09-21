import { PropsWithChildren } from 'react';

import classes from './form.module.scss';

interface FormProps {
  onSubmit: () => void;
}

export const Form = ({ onSubmit, children }: PropsWithChildren<FormProps>) => (
  <form onSubmit={onSubmit} className={classes.form}>
    {children}
  </form>
);
