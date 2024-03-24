import { RouterProvider, createRouter } from '@tanstack/react-router';

import { routeTree } from './routeTree';

// eslint-disable-next-line react-refresh/only-export-components
export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const Providers = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <RouterProvider router={router} />
      {children}
    </>
  );
};
