import { Link, Outlet, RootRoute } from '@tanstack/react-router';

export const rootRoute = new RootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '}
        <Link
          to={'/sign-in'}
          activeProps={{
            className: 'font-bold',
          }}
        >
          Sign In
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});
