import { Outlet, Link } from '@tanstack/react-router';
export const Home = () => (
  <>
    <div>
      <Link to="/">Home</Link> <Link to="/about">About</Link>
    </div>
    <hr />
    <Outlet />
  </>
);
