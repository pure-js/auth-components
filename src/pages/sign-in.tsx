import { Route } from '@tanstack/react-router';
import { rootRoute } from './__root';

export const SignInPage = () => {
  return (
    <section>
      <input type="text" />
      <input type="password" />
      <button type="button">Log in</button>
    </section>
  );
};

export const SignInRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: SignInPage,
});
