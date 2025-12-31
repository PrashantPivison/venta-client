'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText, Shield, RefreshCw, Truck } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';

interface PolicyLayoutProps {
  children: React.ReactNode;
  title: string;
}

const policyLinks = [
  {
    href: '/shipping-policy',
    label: 'Shipping Policy',
    icon: Truck
  },
  {
    href: '/cancellation-refund-policy',
    label: 'Cancellation & Refund Policy',
    icon: RefreshCw
  },
  {
    href: '/terms-conditions',
    label: 'Terms & Conditions',
    icon: FileText
  },
  {
    href: '/privacy-policy',
    label: 'Privacy Policy',
    icon: Shield
  }
];

export function PolicyLayout({ children, title }: PolicyLayoutProps) {
  const pathname = usePathname();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-24">
      {/* Page Title */}
      <div className="bg-gradient-to-br from-[#3b2f0d] to-[#5a4a1f] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
        </div>
      </div>

      {/* Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="prose prose-lg max-w-none">
              {children}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 order-1 lg:order-2">
            <div className="lg:sticky lg:top-24">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-[#1C1C1C] mb-4">Our Policies</h3>
                <nav className="space-y-2">
                  {policyLinks.map(({ href, label, icon: Icon }) => {
                    const isActive = pathname === href;
                    return (
                      <Link
                        key={href}
                        href={href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                          isActive
                            ? 'bg-[#fac938] text-[#1C1C1C] font-semibold'
                            : 'text-[#1C1C1C]/70 hover:bg-white hover:text-[#1C1C1C]'
                        }`}
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm">{label}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          </aside>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
