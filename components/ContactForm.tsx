'use client';

import { useState, useEffect } from 'react';
import { VentaButton } from './ui/venta-button';

interface ContactFormProps {
  defaultInquiryType?: string;
}

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export function ContactForm({ defaultInquiryType }: ContactFormProps = {}) {
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
      // Get reCAPTCHA v3 token
      if (!window.grecaptcha || !siteKey) {
        setError("reCAPTCHA not loaded. Please refresh the page.");
        setLoading(false);
        return;
      }

      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute(siteKey, { action: 'submit' });
          
          // Send data to API route
          const response = await fetch("/api/sendEmail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...formData,
              recaptchaToken: token,
            }),
          });

          const result = await response.json();
          
          if (!response.ok) {
            setError(result.error || "Submission failed. Please try again.");
            setLoading(false);
            return;
          }

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-[#1C1C1C] mb-2">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#fac938] focus:ring-2 focus:ring-[#fac938]/20 outline-none transition-all"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-[#1C1C1C] mb-2">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#fac938] focus:ring-2 focus:ring-[#fac938]/20 outline-none transition-all"
            placeholder="Doe"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-[#1C1C1C] mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#fac938] focus:ring-2 focus:ring-[#fac938]/20 outline-none transition-all"
          placeholder="john.doe@example.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-[#1C1C1C] mb-2">
          Phone Number *
        </label>
        <div className="flex gap-2">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg border border-gray-300 focus:border-[#fac938] focus:ring-2 focus:ring-[#fac938]/20 outline-none transition-all bg-white"
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
            required
            value={formData.phone}
            onChange={handleChange}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#fac938] focus:ring-2 focus:ring-[#fac938]/20 outline-none transition-all"
            placeholder="9876543210"
          />
        </div>
      </div>

      {/* Inquiry Type */}
      <div>
        <label htmlFor="inquiryType" className="block text-sm font-semibold text-[#1C1C1C] mb-2">
          Inquiry For *
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          required
          value={formData.inquiryType}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#fac938] focus:ring-2 focus:ring-[#fac938]/20 outline-none transition-all bg-white"
        >
          <option value="">Select inquiry type</option>
          {inquiryOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#1C1C1C] mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#fac938] focus:ring-2 focus:ring-[#fac938]/20 outline-none transition-all resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>

      {/* Privacy Statement */}
      <div className="text-sm text-[#1C1C1C]/70">
        By submitting this form, you agree to our <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#fac938] hover:underline">Privacy Policy</a> and consent to Venta International contacting you about your inquiry.
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          <span className="font-semibold">Error:</span> {error}
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          <span className="font-semibold">Success!</span> Your message has been sent. We'll get back to you soon.
        </div>
      )}

      {/* Submit Button */}
      <VentaButton type="submit" className="w-full" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </VentaButton>
      
      <p className="text-xs text-center text-[#1C1C1C]/60">
        This site is protected by reCAPTCHA and the Google{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#fac938] hover:underline">Privacy Policy</a> and{' '}
        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#fac938] hover:underline">Terms of Service</a> apply.
      </p>
    </form>
  );
}
