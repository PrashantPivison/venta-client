import { QueryClient } from '@tanstack/react-query';

/**
 * Create a QueryClient instance with default configuration
 * 
 * Configuration:
 * - No staleTime: Data is fresh immediately
 * - No cacheTime: Data persists in memory until the app restarts
 * - No polling or background refetching
 * - No persistence (localStorage/sessionStorage)
 */
export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Data is always fresh on initial load, refetch only on explicit action
        staleTime: Infinity,
        // Data persists in memory for the lifetime of the app
        gcTime: Infinity,
        // Disable automatic retries on error
        retry: false,
      },
    },
  });
};

// Create a singleton instance for the app
export const queryClient = createQueryClient();
