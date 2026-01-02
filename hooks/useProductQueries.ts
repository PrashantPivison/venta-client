import { useQuery } from '@tanstack/react-query';
import productAPI, { Product } from '@/api/products';
import customOrdersAPI, { CustomProduct } from '@/api/customOrders';

/**
 * Hook to fetch all products with caching
 * 
 * Behavior:
 * - Fetches products on first load
 * - Caches data in memory for the app lifetime
 * - Does not refetch on navigation or re-renders
 * - Refetches only on page refresh (new app instance)
 */
export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      return await productAPI.getProducts();
    },
  });
}

/**
 * Hook to fetch a single product by ID
 * 
 * Behavior:
 * - Fetches product by ID when params change
 * - Caches data in memory for the app lifetime
 * - Does not refetch on navigation or re-renders
 */
export function useProductById(id: string | null) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      if (!id) throw new Error('Product ID is required');
      return await productAPI.getProductById(id);
    },
    enabled: !!id, // Only run query if id is provided
  });
}

/**
 * Hook to fetch a single product by slug
 * 
 * Behavior:
 * - Fetches product by slug when slug changes
 * - Caches data in memory for the app lifetime
 * - Does not refetch on navigation or re-renders
 */
export function useProductBySlug(slug: string | null) {
  return useQuery({
    queryKey: ['product', 'slug', slug],
    queryFn: async () => {
      if (!slug) throw new Error('Product slug is required');
      return await productAPI.getProductBySlug(slug);
    },
    enabled: !!slug, // Only run query if slug is provided
  });
}

/**
 * Hook to fetch all custom products with caching
 */
export function useCustomProducts() {
  return useQuery({
    queryKey: ['customProducts'],
    queryFn: async () => {
      return await customOrdersAPI.getCustomProducts();
    },
  });
}
