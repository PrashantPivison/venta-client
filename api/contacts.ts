import apiClient from './client';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  inquiryType: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}

/**
 * Contact API - Handles all contact form submissions from the client side
 * This is the centralized API layer for contact operations
 */
class ContactAPI {
  /**
   * Submit a contact form inquiry
   * POST /contacts
   */
  async submitContact(contactData: ContactFormData): Promise<ContactResponse> {
    try {
      const response = await apiClient.post<ApiResponse>('/client/contacts', contactData);
      return {
        success: true,
        message: response.data.message || 'Contact submitted successfully',
        data: response.data.data
      };
    } catch (error: any) {
      console.error('Error submitting contact:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to submit contact',
        message: error.response?.data?.error || 'An error occurred while submitting your contact'
      };
    }
  }
}

const contactAPI = new ContactAPI();
export default contactAPI;
