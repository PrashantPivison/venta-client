import apiClient from './client';

export interface Product {
  _id?: string;
  title: string;
  slug: string;
  price: number;
  sku: string | null;
  description: string;
  image: string;
  images: string[];
  features?: string[];
  specifications?: Array<{
    key: string;
    value: string;
  }>;
  links: {
    amazon?: string;
    industrybuy?: string | null;
  };
  featured?: boolean;
}

/**
 * Product API - Handles all product-related API calls
 * This is the centralized API layer for product operations
 */
class ProductAPI {
  /**
   * Get all products
   * @returns Promise<Product[]> Array of products
   */
  async getProducts(): Promise<Product[]> {
    try {
      const response = await apiClient.get<Product[]>('/client/products');
      return response;
    } catch (error: any) {
      console.error('Error fetching products:', error);
      throw new Error(error.message || 'Failed to fetch products');
    }
  }

  /**
   * Get product by ID (Primary method for fetching detailed product information)
   * This is the standard production-grade approach for data fetching
   * @param id - Product MongoDB ID
   * @returns Promise<Product> Single product details
   */
  async getProductById(id: string): Promise<Product> {
    try {
      const response = await apiClient.get<Product>(`/client/products/${id}`);
      return response;
    } catch (error: any) {
      console.error(`Error fetching product with ID ${id}:`, error);
      throw new Error(error.message || 'Product not found');
    }
  }

  /**
   * Get product by slug (Fallback method for slug-based lookups)
   * @param slug - Product slug identifier
   * @returns Promise<Product> Single product details
   */
  async getProductBySlug(slug: string): Promise<Product> {
    try {
      const response = await apiClient.get<Product>(`/client/products/${slug}`);
      return response;
    } catch (error: any) {
      console.error(`Error fetching product with slug ${slug}:`, error);
      throw new Error(error.message || 'Product not found');
    }
  }

  /**
   * Get featured products only
   * Returns only products marked as featured with images
   * Limit: 6 products max
   * Used by FeaturedProducts section on homepage
   * @returns Promise<Product[]> Array of featured products
   */
 async getFeaturedProducts(): Promise<Product[]> {
  try {
    const response = await apiClient.get<Product[]>('/client/products/featured');
    console.log('API response for featured products:', response);
    return response;
  } catch (error: any) {
    console.error('Error fetching featured products:', error);
    throw new Error(error.message || 'Failed to fetch featured products');
  }
}
}

// Export singleton instance
export default new ProductAPI();
