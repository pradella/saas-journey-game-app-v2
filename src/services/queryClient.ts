import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: Infinity,
      retry: false,
    },
  },
});

export const queryKeys = {
  USER_GAMES: 'USER_GAMES',
  PEOPLE: 'PEOPLE',
};
