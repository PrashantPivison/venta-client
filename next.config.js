/** @type {import('next').NextConfig} */

// Get API base URL from environment variable
const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Parse hostname from API URL (e.g., 'http://localhost:5000/api' -> 'localhost')
const getHostnameFromUrl = (url) => {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch (error) {
    console.error('Invalid API URL:', error);
    return 'localhost';
  }
};

// Get protocol from API URL (e.g., 'http://localhost:5000/api' -> 'http')
const getProtocolFromUrl = (url) => {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol.replace(':', '');
  } catch (error) {
    console.error('Invalid API URL:', error);
    return 'http';
  }
};

const apiHostname = getHostnameFromUrl(apiUrl);
const apiProtocol = getProtocolFromUrl(apiUrl);

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 90],
    remotePatterns: [
      // Backend API images (from NEXT_PUBLIC_API_URL environment variable)
      {
        protocol: apiProtocol,
        hostname: apiHostname,
      },
      // Allow https external images (for future integrations)
      {
        protocol: 'https',
        hostname: '**',
      },
      // Allow http external images (for future integrations)
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
