'use client';

import { useState, useEffect } from 'react';
import { VentaButton } from './ui/venta-button';
import customOrdersAPI from '@/api/customOrders';
import contactAPI from '@/api/contacts';

interface ContactFormProps {
  defaultInquiryType?: string;
  productId?: string; // Add productId for custom product inquiries
  productName?: string; // Add productName for display
  isCustomProduct?: boolean; // Flag to identify if it's a custom product inquiry
}

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export function ContactForm({ 
  defaultInquiryType, 
  productId, 
  productName,
  isCustomProduct = false 
}: ContactFormProps = {}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    inquiryType: defaultInquiryType || '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  // Load reCAPTCHA v3 script
  useEffect(() => {
    if (siteKey && !window.grecaptcha) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      document.body.appendChild(script);
    }
  }, [siteKey]);

  useEffect(() => {
    if (defaultInquiryType) {
      setFormData(prev => ({ ...prev, inquiryType: defaultInquiryType }));
    }
  }, [defaultInquiryType]);

  const inquiryOptions = [
    'General Inquiry',
    'Product Information',
    'Custom Order Request',
    'Technical Support',
    'Partnership Opportunity',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // If it's a custom product inquiry, use the custom inquiry API
      if (isCustomProduct && productId) {
        const inquiryData = {
          productId,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          countryCode: formData.countryCode,
          inquiryFor: formData.inquiryType || 'Custom Product Inquiry',
          message: formData.message
        };

        const result = await customOrdersAPI.createInquiry(inquiryData);
        
        if (result.success) {
          setSuccess(true);
          // Reset form
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            countryCode: '+91',
            phone: '',
            inquiryType: defaultInquiryType || '',
            message: ''
          });
          setTimeout(() => setSuccess(false), 5000);
        } else {
          setError(result.message || 'Failed to submit inquiry');
        }
        setLoading(false);
        return;
      }

      // Original email submission logic for regular contact form
      if (!siteKey) {
        // If reCAPTCHA not needed, directly submit to contact API
        const result = await contactAPI.submitContact(formData);
        
        if (result.success) {
          setSuccess(true);
          // Reset form
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            countryCode: '+91',
            phone: '',
            inquiryType: defaultInquiryType || '',
            message: ''
          });
          setTimeout(() => setSuccess(false), 5000);
        } else {
          setError(result.error || 'Failed to submit contact');
        }
        setLoading(false);
        return;
      }

      // If reCAPTCHA is configured, validate and submit
      if (!window.grecaptcha) {
        setError("reCAPTCHA not loaded. Please refresh the page.");
        setLoading(false);
        return;
      }

      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute(siteKey, { action: 'submit' });

          // Submit to contact API with reCAPTCHA token
          const result = await contactAPI.submitContact(formData);

          if (result.success) {
            setLoading(false);
            setSuccess(true);

            // Reset form after success
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              countryCode: '+91',
              phone: '',
              inquiryType: defaultInquiryType || '',
              message: ''
            });

            // Hide success message after 5 seconds
            setTimeout(() => setSuccess(false), 5000);
          } else {
            setError(result.error || "Submission failed. Please try again.");
            setLoading(false);
          }
        } catch (err: any) {
          setLoading(false);
          setError(err?.message || "Submission failed. Please try again.");
        }
      });
    } catch (err: any) {
      setLoading(false);
      setError(err?.message || "Submission failed. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Show product name if it's a custom product inquiry */}
      {isCustomProduct && productName && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm font-medium text-gray-700">
            Inquiry for: <span className="text-yellow-800">{productName}</span>
          </p>
        </div>
      )}

      {/* Name Fields */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number *
        </label>
        <div className="flex gap-2">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="w-32 px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          >
            <option value="+91">+91 (India)</option>
            <option value="+1">+1 (USA)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+971">+971 (UAE)</option>
            <option value="+966">+966 (Saudi Arabia)</option>
            <option value="+974">+974 (Qatar)</option>
            <option value="+965">+965 (Kuwait)</option>
            <option value="+968">+968 (Oman)</option>
            <option value="+973">+973 (Bahrain)</option>
          </select>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Inquiry Type */}
      <div>
        <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
          Inquiry For *
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
        >
          <option value="">Select inquiry type</option>
          {inquiryOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
        />
      </div>

      {/* Privacy Statement */}
      <p className="text-xs text-gray-600">
        By submitting this form, you agree to our Privacy Policy and consent to Venta International contacting you about your inquiry.
      </p>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          <p className="font-medium">Error: {error}</p>
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          <p className="font-medium">Success! Your message has been sent. We'll get back to you soon.</p>
        </div>
      )}

      {/* Submit Button */}
      <VentaButton
        type="submit"
        disabled={loading}
        className="w-full"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </VentaButton>

      {!isCustomProduct && (
        <p className="text-xs text-gray-500 text-center">
          This site is protected by reCAPTCHA and the Google{' '}
          <a href="https://policies.google.com/privacy" className="text-yellow-600 hover:underline">
            Privacy Policy
          </a> and{' '}
          <a href="https://policies.google.com/terms" className="text-yellow-600 hover:underline">
            Terms of Service
          </a> apply.
        </p>
      )}
    </form>
  );
}
