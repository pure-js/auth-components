import { FileRoute } from '@tanstack/react-router';

import { SortableTable } from '@/components/sortable-table';

export const HomePage = () => (
  <>
    <SortableTable />
  </>
);

export const HomeRoute = new FileRoute('/').createRoute({
  component: HomePage,
});
