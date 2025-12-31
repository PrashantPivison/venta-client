'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, Phone, ArrowRight } from 'lucide-react';
import svgPaths from "../imports/svg-b1zekj1qtn";
import contactInfo from '@/data/contactInfo.json';

export function Footer() {
  const policyLinks = [
    { label: "Shipping Policy", href: "/shipping-policy" },
    { label: "Cancellation & Refund Policy", href: "/cancellation-refund-policy" },
    { label: "Terms & Conditions", href: "/terms-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" }
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Shop Online", href: "/shop" },
    { label: "Custom Orders", href: "/custom-orders" },
    { label: "Solutions", href: "/solutions" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Venta Logo */}
            <div className="mb-4 w-[180px] h-[50px]">
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMinYMin meet" viewBox="0 0 226 64">
                <g clipPath="url(#clip0_1_54)">
                  <g>
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
            <p className="text-[#1C1C1C]/70 mb-6" style={{ fontSize: '14px', lineHeight: '1.6' }}>
              Manufacturers & Traders of Scaffoldings, Fittings & Machine Parts
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <a 
                href={contactInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#1C1C1C] flex items-center justify-center hover:border-[#F2C236] hover:bg-[#F2C236] transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-[#1C1C1C] group-hover:text-[#1C1C1C]" strokeWidth={2} />
              </a>
              <a 
                href={contactInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#1C1C1C] flex items-center justify-center hover:border-[#F2C236] hover:bg-[#F2C236] transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#1C1C1C] group-hover:text-[#1C1C1C]" strokeWidth={2} />
              </a>
              <a 
                href={contactInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#1C1C1C] flex items-center justify-center hover:border-[#F2C236] hover:bg-[#F2C236] transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-[#1C1C1C] group-hover:text-[#1C1C1C]" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Policy Links */}
          <div>
            <h4 className="text-[#1C1C1C] mb-4" style={{ fontSize: '16px', fontWeight: '600' }}>
              Policies
            </h4>
            <ul className="space-y-3">
              {policyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-[#1C1C1C]/70 hover:text-[#F2C236] transition-colors" 
                    style={{ fontSize: '14px' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-[#1C1C1C] mb-4" style={{ fontSize: '16px', fontWeight: '600' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-[#1C1C1C]/70 hover:text-[#F2C236] transition-colors" 
                    style={{ fontSize: '14px' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#1C1C1C] mb-4" style={{ fontSize: '16px', fontWeight: '600' }}>
              Contact Us
            </h4>
            <div className="space-y-4 mb-6">
              <a 
                href={`tel:${contactInfo.phones[0].replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-[#1C1C1C]/70 hover:text-[#F2C236] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span style={{ fontSize: '14px' }}>{contactInfo.phones[0]}</span>
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-[#1C1C1C]/70 hover:text-[#F2C236] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span style={{ fontSize: '14px' }}>{contactInfo.email}</span>
              </a>
            </div>
            
            <Link href="/contact" className="block">
              <button className="bg-[#f2c236] px-[35px] py-[17px] rounded-[38px] text-[#3b2f0d] hover:bg-[#f2c236]/90 transition-colors w-full justify-center" style={{ fontWeight: '600', fontSize: '20px' }}>
                Get in touch
              </button>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-[#1C1C1C]/60 text-center" style={{ fontSize: '13px' }}>
            © {new Date().getFullYear()} by Venta International. Designed by <a href="https://www.pivisions.com" className="text-[#F2C236] hover:underline">PiVisions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}