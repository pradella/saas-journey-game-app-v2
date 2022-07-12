import { ReactNode } from 'react';
import { QueryClientProvider } from 'react-query';

import { queryClient } from '../services/queryClient';
import UIProvider from './UIContext';
import UserProvider from './UserContext';

function Providers({ children }: { children: ReactNode }) {
  return (
    <UIProvider>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </UserProvider>
    </UIProvider>
  );
}

export default Providers;
