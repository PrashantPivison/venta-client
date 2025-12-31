'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ShoppingBag } from 'lucide-react';
import svgPaths from "@/imports/svg-b1zekj1qtn";
import contactInfo from '@/data/contactInfo.json';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    if (path === '/shop') {
      return pathname === '/shop' || pathname.startsWith('/shop/');
    }
    return pathname === path;
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#fac938] z-50 shadow-md">
      <div className="w-full px-6 md:px-12 lg:px-20 py-6">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-12 w-44 relative">
              <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 226 64">
                <g clipPath="url(#clip0_1_54)">
                  <g>
                    <path d={svgPaths.p35a46580} fill="#3B2F0D" />
                    <path d={svgPaths.p369e7780} fill="#3B2F0D" />
                    <path d={svgPaths.p2cd18900} fill="#3B2F0D" />
                    <path d={svgPaths.p13593d80} fill="#3B2F0D" />
                    <path d={svgPaths.p188d8880} fill="#3B2F0D" />
                    <g>
                      <path d={svgPaths.p37d9c130} fill="#3B2F0D" />
                      <path d={svgPaths.pc560f00} fill="#3B2F0D" />
                      <path d={svgPaths.p2a512b40} fill="#3B2F0D" />
                      <path d={svgPaths.p293b3e00} fill="#3B2F0D" />
                      <path d={svgPaths.p68ef900} fill="#3B2F0D" />
                      <path d={svgPaths.p3c39b800} fill="#3B2F0D" />
                      <path d={svgPaths.p1f0bfe32} fill="#3B2F0D" />
                      <path d={svgPaths.p1a0b100} fill="#3B2F0D" />
                      <path d={svgPaths.p31c9140} fill="#3B2F0D" />
                      <path d={svgPaths.p1b110c00} fill="#3B2F0D" />
                      <path d={svgPaths.p2ee84e00} fill="#3B2F0D" />
                      <path d={svgPaths.pa215e00} fill="#3B2F0D" />
                      <path d={svgPaths.p30cf3a80} fill="#3B2F0D" />
                    </g>
                  </g>
                  <path d={svgPaths.p3214940} fill="#3B2F0D" />
                </g>
                <defs>
                  <clipPath id="clip0_1_54">
                    <rect fill="white" height="64" width="226" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className={`relative font-medium text-base hover:text-[#1e1e1e] transition-colors group ${
                isActive('/') ? 'font-semibold text-[#1e1e1e]' : 'text-[#3b2f0d]'
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1e1e1e] transform origin-left transition-transform duration-300 ${
                isActive('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </Link>
            <Link 
              href="/about" 
              className={`relative font-medium text-base hover:text-[#1e1e1e] transition-colors group ${
                isActive('/about') ? 'font-semibold text-[#1e1e1e]' : 'text-[#3b2f0d]'
              }`}
            >
              About Us
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1e1e1e] transform origin-left transition-transform duration-300 ${
                isActive('/about') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </Link>
            <Link 
              href="/shop" 
              className={`relative font-medium text-base hover:text-[#1e1e1e] transition-colors group ${
                isActive('/shop') ? 'font-semibold text-[#1e1e1e]' : 'text-[#3b2f0d]'
              }`}
            >
              Online Shop
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1e1e1e] transform origin-left transition-transform duration-300 ${
                isActive('/shop') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </Link>
            <Link 
              href="/custom-orders" 
              className={`relative font-medium text-base hover:text-[#1e1e1e] transition-colors group ${
                isActive('/custom-orders') ? 'font-semibold text-[#1e1e1e]' : 'text-[#3b2f0d]'
              }`}
            >
              Custom Orders
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1e1e1e] transform origin-left transition-transform duration-300 ${
                isActive('/custom-orders') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </Link>
            <Link 
              href="/solutions" 
              className={`relative font-medium text-base hover:text-[#1e1e1e] transition-colors group ${
                isActive('/solutions') ? 'font-semibold text-[#1e1e1e]' : 'text-[#3b2f0d]'
              }`}
            >
              Solutions
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1e1e1e] transform origin-left transition-transform duration-300 ${
                isActive('/solutions') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </Link>
            <Link 
              href="/contact" 
              className={`relative font-medium text-base hover:text-[#1e1e1e] transition-colors group ${
                isActive('/contact') ? 'font-semibold text-[#1e1e1e]' : 'text-[#3b2f0d]'
              }`}
            >
              Contact
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1e1e1e] transform origin-left transition-transform duration-300 ${
                isActive('/contact') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#3b2f0d] hover:text-[#1e1e1e] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 top-[88px] bg-white z-40 transform transition-transform duration-300 ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Navigation Links */}
          <nav className="flex flex-col p-6 space-y-1">
            <Link 
              href="/" 
              onClick={closeMobileMenu}
              className={`px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                isActive('/') ? 'bg-[#fac938] text-[#1e1e1e] font-semibold' : 'text-[#3b2f0d] hover:bg-gray-100'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={closeMobileMenu}
              className={`px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                isActive('/about') ? 'bg-[#fac938] text-[#1e1e1e] font-semibold' : 'text-[#3b2f0d] hover:bg-gray-100'
              }`}
            >
              About Us
            </Link>
            <Link 
              href="/shop" 
              onClick={closeMobileMenu}
              className={`px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                isActive('/shop') ? 'bg-[#fac938] text-[#1e1e1e] font-semibold' : 'text-[#3b2f0d] hover:bg-gray-100'
              }`}
            >
              Online Shop
            </Link>
            <Link 
              href="/custom-orders" 
              onClick={closeMobileMenu}
              className={`px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                isActive('/custom-orders') ? 'bg-[#fac938] text-[#1e1e1e] font-semibold' : 'text-[#3b2f0d] hover:bg-gray-100'
              }`}
            >
              Custom Orders
            </Link>
            <Link 
              href="/solutions" 
              onClick={closeMobileMenu}
              className={`px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                isActive('/solutions') ? 'bg-[#fac938] text-[#1e1e1e] font-semibold' : 'text-[#3b2f0d] hover:bg-gray-100'
              }`}
            >
              Solutions
            </Link>
            <Link 
              href="/contact" 
              onClick={closeMobileMenu}
              className={`px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                isActive('/contact') ? 'bg-[#fac938] text-[#1e1e1e] font-semibold' : 'text-[#3b2f0d] hover:bg-gray-100'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Order Online Button */}
          <div className="px-6 py-4">
            <Link 
              href="/shop" 
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 w-full bg-[#fac938] text-[#3b2f0d] px-6 py-4 rounded-lg font-semibold text-lg hover:bg-[#e8b830] transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              Order Online
            </Link>
          </div>

          {/* Contact Info */}
          <div className="px-6 py-4 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-[#3b2f0d] uppercase tracking-wider mb-4">Contact Us</h3>
            <div className="space-y-3">
              {contactInfo.phones.slice(0, 2).map((phone, index) => (
                <a key={index} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-start gap-3 text-[#1e1e1e] hover:text-[#fac938] transition-colors">
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{phone}</p>
                    {index === 0 && <p className="text-sm text-gray-600">Mon-Sat, 9am-6pm</p>}
                  </div>
                </a>
              ))}
              <a href={`mailto:${contactInfo.email}`} className="flex items-start gap-3 text-[#1e1e1e] hover:text-[#fac938] transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium break-all">{contactInfo.email}</p>
                </div>
              </a>
              <div className="flex items-start gap-3 text-[#1e1e1e]">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">{contactInfo.addresses[0].type}</p>
                  <p className="text-sm text-gray-600">{contactInfo.addresses[0].address.split(',').slice(-2).join(',').trim()}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="px-6 py-4 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-[#3b2f0d] uppercase tracking-wider mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href={contactInfo.social.facebook}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#fac938] text-[#3b2f0d] hover:bg-[#e8b830] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={contactInfo.social.instagram}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#fac938] text-[#3b2f0d] hover:bg-[#e8b830] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={contactInfo.social.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#fac938] text-[#3b2f0d] hover:bg-[#e8b830] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
