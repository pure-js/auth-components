import { rootRoute } from '@/pages/__root';
import { HomeRoute } from '@/pages/index';
import { SignInRoute } from '@/pages/sign-in';

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      parentRoute: typeof rootRoute;
    };
    '/sign-in': {
      parentRoute: typeof rootRoute;
    };
  }
}

Object.assign(HomeRoute.options, {
  path: '/',
  getParentRoute: () => rootRoute,
});

Object.assign(SignInRoute.options, {
  path: '/sign-in',
  getParentRoute: () => rootRoute,
});

export const routeTree = rootRoute.addChildren([HomeRoute, SignInRoute]);
