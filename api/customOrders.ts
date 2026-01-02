import apiClient from './client';

export interface CustomProduct {
  _id?: string;
  name: string;
  description: string;
  image: string;
  category?: string;
  isActive?: boolean;
}

export interface CustomInquiry {
  productId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryCode?: string;
  inquiryFor: string;
  message: string;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

/**
 * Custom Orders API - Fetches custom products and creates inquiries
 */
class CustomOrdersAPI {
  async getCustomProducts(): Promise<CustomProduct[]> {
    try {
      // apiClient already returns response.data due to interceptor
      const response: ApiResponse<CustomProduct[]> = await apiClient.get('/client/custom/products');
      
      // Return the data array from the response
      return response.data;
    } catch (error: any) {
      console.error('Error fetching custom products:', error);
      throw new Error(error.message || 'Failed to fetch custom products');
    }
  }

  async createInquiry(inquiry: CustomInquiry): Promise<ApiResponse<any>> {
    try {
      // apiClient already returns response.data due to interceptor
      const response: ApiResponse<any> = await apiClient.post('/client/custom/inquiries', inquiry);
      
      return response;
    } catch (error: any) {
      console.error('Error creating inquiry:', error);
      throw new Error(error.message || 'Failed to submit inquiry');
    }
  }
}

const customOrdersAPI = new CustomOrdersAPI();
export default customOrdersAPI;
