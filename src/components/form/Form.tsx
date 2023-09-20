import { PropsWithChildren } from 'react';

import { Button } from '@/components/button';

import classes from './form.module.scss';

type User = {
  name: string;
};

interface FormProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Form = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  children,
}: PropsWithChildren<FormProps>) => (
  <form className={classes.form}>
    {children}
    <div>
      <div>
        {user ? (
          <>
            <span className={classes.welcome}>
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button
              primary
              size="small"
              onClick={onCreateAccount}
              label="Sign up"
            />
          </>
        )}
      </div>
    </div>
  </form>
);
