import { FileRoute, redirect } from '@tanstack/react-router';

import { SortableTable } from '@/components/sortable-table';
import { useDataFetch } from '@/services/hooks/useDataFetch';
// import { Auth } from '@/services/Auth';
import { Loading } from '@/components/loading';

import { router } from './../providers';

function Auth() {
  const isAuthenticated = true;
  return { isAuthenticated };
}

export const HomePage = () => {
  const { data, isLoading, error } = useDataFetch();
  console.log('data ', data);

  return (
    <>
      {isLoading && <Loading />}
      {error && <h1>Error!</h1>}
      {data && (
        <>
          <h1>Global Fundamentals Data</h1>
          <SortableTable />
        </>
      )}
    </>
  );
};

export const HomeRoute = new FileRoute('/').createRoute({
  // id: 'authenticated',
  beforeLoad: async () => {
    const { isAuthenticated } = Auth();
    if (!isAuthenticated) {
      throw redirect({
        to: '/sign-in',
        search: {
          // Use the current location to power a redirect after login
          // (Do not use `router.state.resolvedLocation` as it can
          // potentially lag behind the actual current location)
          redirect: router.state.location.href,
        },
      });
    }
  },
  component: HomePage,
});
