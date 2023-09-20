import { RouterProvider, Router } from '@tanstack/react-router';

import { routeTree } from './routeTree';

const router = new Router({
  routeTree,
  defaultPreload: 'intent',
});

export const Providers = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <RouterProvider router={router} />
      {children}
    </>
  );
};
