import { Route } from '@tanstack/react-router';

import Form from '@/components/form';
import Input from '@/components/input';
import Button from '@/components/button';
import { rootRoute } from '../__root';

export const SignInPage = () => {
  return (
    <Form onSubmit={() => {}}>
      <Input label="Username" type="text" id="username" autoFocus={true} />
      <Input label="Password" type="password" minLength={8} id="password" />
      <Button isPrimary size="lg" onClick={() => {}} label="Log in" />
    </Form>
  );
};

export const SignInRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/sign-in',
  component: SignInPage,
});
