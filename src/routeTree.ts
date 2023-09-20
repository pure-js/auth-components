import { rootRoute } from './pages/__root';
import { SignInRoute } from './pages/sign-in';
// import { LayoutRoute } from './pages/_layout';
// import { IndexRoute } from './pages';

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    // '/': {
    //   parentRoute: typeof rootRoute;
    // };
    // '/_layout': {
    //   parentRoute: typeof rootRoute;
    // };
    '/sign-in': {
      parentRoute: typeof rootRoute;
    };
  }
}

// Object.assign(IndexRoute.options, {
//   path: '/',
//   getParentRoute: () => rootRoute,
// });

// Object.assign(LayoutRoute.options, {
//   id: '/layout',
//   getParentRoute: () => rootRoute,
// });

Object.assign(SignInRoute.options, {
  path: '/sign-in',
  getParentRoute: () => rootRoute,
});

export const routeTree = rootRoute.addChildren([
  //   IndexRoute,
  //   LayoutRoute,
  SignInRoute,
]);
