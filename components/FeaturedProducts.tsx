'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import productsData from '@/data/products.json';

interface Product {
  title: string;
  slug: string;
  price: string | null;
  sku: string | null;
  images: string[];
  description: string;
  featured?: boolean;
  links: {
    amazon: string;
    industrybuy: string | null;
  };
}

export function FeaturedProducts() {
  // Get featured products from JSON
  const products = productsData
    .filter((p: Product) => p.featured && p.images && p.images.length > 0)
    .slice(0, 6)
    .map((p: Product) => ({
      name: p.title,
      category: p.sku || 'Product',
      image: `/assets/${p.images[0]}`,
      price: p.price,
      slug: p.slug
    }));

  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set([...prev, index]));
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      sectionObserver.disconnect();
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Section Header */}
        <div className={`mb-4 flex items-center gap-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="w-8 h-8 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#F2C236]">
              <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[#F2C236] uppercase tracking-wider" style={{ fontSize: '14px' }}>
            Our Products
          </span>
        </div>

        <div className={`mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <h2 className="text-[#1C1C1C] max-w-[700px]" style={{ fontSize: '48px', fontWeight: '700', lineHeight: '1.2' }}>
            Featured <span className="text-[#F2C236]">Products</span>
          </h2>
          
          <Link href="/shop" className="bg-[#f2c236] px-[35px] py-[17px] rounded-[38px] text-[#3b2f0d] hover:bg-[#f2c236]/90 transition-colors w-fit" style={{ fontWeight: '600', fontSize: '20px' }}>
            Shop Online
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              ref={(el) => {
                if (el) {
                  itemRefs.current[index] = el;
                }
              }}
              className={`group cursor-pointer transition-all duration-700 ${
                visibleItems.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link href={`/shop/${product.slug}`} className="block">
                <div className="bg-white rounded-[20px] overflow-hidden border border-gray-200 hover:border-[#F2C236] transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-[280px] overflow-hidden bg-gray-100">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 right-4 bg-[#F2C236] text-[#1C1C1C] px-4 py-2 rounded-full" style={{ fontSize: '12px', fontWeight: '600' }}>
                      Featured
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-[#F2C236] mb-2" style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.05em' }}>
                      {product.category}
                    </p>
                    <h3 className="text-[#1C1C1C] mb-4" style={{ fontSize: '22px', fontWeight: '600' }}>
                      {product.name}
                    </h3>
                    {product.price && (
                      <p className="text-[#1C1C1C] mb-4" style={{ fontSize: '18px', fontWeight: '700' }}>
                        {product.price}
                      </p>
                    )}
                    
                    <div className="text-[#F2C236] flex items-center gap-2 group-hover:gap-3 transition-all" style={{ fontSize: '14px', fontWeight: '600' }}>
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
