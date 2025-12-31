'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { ContactForm } from '@/components/ContactForm';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Package, Mail, X } from 'lucide-react';
import customOrdersData from '@/data/custom-orders.json';

interface CustomOrder {
  title: string;
  slug: string;
  description: string;
  image: string;
}

export default function CustomOrdersPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
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
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24">
      
      <Hero
        tag="Made to Order"
        tagIcon={<Package className="w-5 h-5 text-[#fac938]" />}
        title={<>Custom <span className="text-[#fac938]">Order</span> Products</>}
        description="Premium scaffolding components manufactured to your exact specifications. From cuplock systems to specialized accessories, we deliver quality and precision."
        backgroundImage="/assets/section1.webp"
        backgroundGradient="from-[#3b2f0d]/90 via-[#4a3a10]/90 to-[#3b2f0d]/90"
        textColor="light"
      />

      {/* Products Gallery */}
      <section ref={sectionRef} className="py-12 md:py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-4">
              Our Custom <span className="text-[#fac938]">Products</span>
            </h2>
            <p className="text-[#1C1C1C]/70 text-base md:text-lg max-w-3xl mx-auto">
              Explore our comprehensive range of custom-manufactured scaffolding products
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {customOrdersData.map((product: CustomOrder, index: number) => (
              <div
                key={product.slug}
                ref={(el) => {
                  if (el) {
                    itemRefs.current[index] = el;
                  }
                }}
                className={`group transition-all duration-700 ${
                  visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index % 8) * 50}ms` }}
              >
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#fac938] hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Product Image */}
                  <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100">
                    <Image
                      src={`/assets/custom-orders/${product.image}`}
                      alt={product.title}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    <h3 className="text-sm md:text-lg font-bold text-[#1C1C1C] mb-2 group-hover:text-[#fac938] transition-colors line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#1C1C1C]/70 mb-4 line-clamp-2 flex-grow">
                      {product.description}
                    </p>
                    <button
                      onClick={() => setSelectedProduct(product.title)}
                      className="inline-flex items-center justify-center gap-1 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-[#fac938] text-[#3b2f0d] rounded-lg text-xs md:text-sm font-semibold hover:bg-[#e8b830] transition-colors w-full"
                    >
                      <Mail className="w-3 h-3 md:w-4 md:h-4" />
                      Inquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-6 md:px-12 lg:px-20 bg-[#3b2f0d] text-white">
        <div className="max-w-[1400px] mx-auto text-center">
          <Package className="w-12 h-12 md:w-16 md:h-16 text-[#fac938] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Need Custom <span className="text-[#fac938]">Specifications?</span>
          </h2>
          <p className="text-base md:text-xl text-white/80 mb-6 md:mb-8 max-w-3xl mx-auto">
            We manufacture scaffolding products to your exact requirements. Contact us to discuss your custom order needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-[#fac938] text-[#3b2f0d] rounded-lg font-semibold text-base md:text-lg hover:bg-[#e8b830] transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="/shop" 
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-[#3b2f0d] rounded-lg font-semibold text-base md:text-lg hover:bg-gray-100 transition-colors"
            >
              View Ready Stock
            </a>
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-[#fac938] p-4 md:p-6 flex items-center justify-between rounded-t-2xl">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#3b2f0d]">Custom Order Inquiry</h3>
                <p className="text-[#3b2f0d]/70 text-sm mt-1">{selectedProduct}</p>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-[#3b2f0d] hover:bg-[#e8b830] p-2 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 md:p-8">
              <ContactForm defaultInquiryType={`Custom Order: ${selectedProduct}`} />
            </div>
          </div>
        </div>
      )}

      <Footer />
      </div>
    </div>
  );
}
