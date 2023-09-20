import { Route } from '@tanstack/react-router';

import { Form } from '@/components/form';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { rootRoute } from '@/pages/__root';

export const SignInPage = () => {
  return (
    <Form>
      <Input type="text" />
      <Input type="password" />
      <Button label="Log in" />
    </Form>
  );
};

export const SignInRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: SignInPage,
});
