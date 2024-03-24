import type { PropsWithChildren } from 'react';
import { cn } from '@/utils/index.ts';
import { container } from '@/components/layout/index.css.ts';
import { form } from './form.css.ts';

interface FormProps {
  onSubmit: () => void;
}

export const Form = ({ onSubmit, children }: PropsWithChildren<FormProps>) => (
  <form onSubmit={onSubmit} className={cn(form, container)}>
    {children}
  </form>
);
