import { Suspense } from 'react';
import { Spinner } from '@/components/spinner';
import { Layout } from '@/layout';
import ErrorBoundary from '@/pages/error';

export const PrivateRouter = () => {
  return (
    <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Layout />
        </Suspense>
    </ErrorBoundary>
  );
};
