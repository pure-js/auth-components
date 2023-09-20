import { Route } from '@tanstack/react-router';

import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { rootRoute } from '@/pages/__root';

export const SignInPage = () => {
  return (
    <form>
      <Input type="text" />
      <Input type="password" />
      <Button label="Log in" />
    </form>
  );
};

export const SignInRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: SignInPage,
});
