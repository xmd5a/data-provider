import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { queryConfig } from './config';

const queryClient = new QueryClient(queryConfig);

export const QueryProvider = ({ children }: PropsWithChildren<{}>): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools />
  </QueryClientProvider>
);
