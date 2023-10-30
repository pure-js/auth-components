import { PropsWithChildren } from 'react';

import layout from '@/components/layout/index.module.scss';
import form from './form.module.scss';

interface FormProps {
  onSubmit: () => void;
}

export const Form = ({ onSubmit, children }: PropsWithChildren<FormProps>) => (
  <form
    onSubmit={onSubmit}
    className={[form.default, layout.container].join(' ')}
  >
    {children}
  </form>
);
