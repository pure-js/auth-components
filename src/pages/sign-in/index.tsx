import { Route } from '@tanstack/react-router';
import { rootRoute } from '../__root';

import classes from './index.module.scss';

export const SignInPage = () => {
  return (
    <section>
      <input type="text" />
      <input type="password" />
      <button className={classes.btn} type="button">
        Log in
      </button>
    </section>
  );
};

export const SignInRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: SignInPage,
});
