import { Route } from '@tanstack/react-router';

import { Form } from '@/components/form';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { Label } from '@/components/label/Label';
import { rootRoute } from '@/pages/__root';

export const SignInPage = () => {
  return (
    <Form onSubmit={() => {}}>
      <Label label="Username" htmlFor="username" />
      <Input type="text" id="username" autoFocus={true} />
      <Label label="Password" htmlFor="password" />
      <Input type="password" minLength={8} id="password" />
      <Button primary size="large" onClick={() => {}} label="Log in" />
    </Form>
  );
};

export const SignInRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/sign-in',
  component: SignInPage,
});
