import { PropsWithChildren } from 'react';
import { cn } from '@/utils/index.ts';
import layout from '@/components/layout/index.module.scss';
import { form } from './form.css.ts';

interface FormProps {
  onSubmit: () => void;
}

export const Form = ({ onSubmit, children }: PropsWithChildren<FormProps>) => (
  <form onSubmit={onSubmit} className={cn(form, layout.container)}>
    {children}
  </form>
);
