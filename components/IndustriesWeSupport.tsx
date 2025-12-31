'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { VentaButton } from './ui/venta-button';

export function IndustriesWeSupport() {
  const industries = [
    {
      title: "Custom Scaffolding",
      description: "Tailored scaffolding solutions designed for your specific project requirements, ensuring safety and efficiency on every site.",
      image: "/assets/custom-scaffolding.png"
    },
    {
      title: "Machine Manufacturing",
      description: "High-quality custom machinery manufacturing with precision engineering for the construction and industrial sectors.",
      image: "/assets/machine-manufacturing.png"
    },
    {
      title: "Construction Industry",
      description: "Comprehensive support for construction projects with premium materials, accessories, and dedicated technical assistance.",
      image: "/assets/construction-industry.png"
    }
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    const cardObservers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set([...prev, index]));
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
      cardObservers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Section Header */}
        <div className={`mb-4 flex items-center gap-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="w-8 h-8 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#F2C236]">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[#F2C236] uppercase tracking-wider" style={{ fontSize: '14px' }}>
            Our Services
          </span>
        </div>

        <div className={`mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <h2 className="text-[#1C1C1C] max-w-[700px]" style={{ fontSize: '48px', fontWeight: '700', lineHeight: '1.2' }}>
            We Support A Wide Range Of <span className="text-[#F2C236]">Industries</span>
          </h2>
          
          <VentaButton href="/services" className="text-base px-6 py-3">
            More Details
          </VentaButton>
        </div>

        <p className={`text-[#1C1C1C]/70 mb-16 max-w-[800px] transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`} style={{ fontSize: '16px', lineHeight: '1.7' }}>
          From custom scaffolding to precision machine manufacturing, we deliver comprehensive solutions across multiple sectors including construction, oil & gas, shipyards, and infrastructure development.
        </p>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              ref={(el) => {
                if (el) {
                  cardRefs.current[index] = el;
                }
              }}
              className={`group cursor-pointer transition-all duration-700 ${
                visibleCards.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-[20px] overflow-hidden border border-gray-200 hover:border-[#F2C236] hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-[300px] overflow-hidden bg-gray-200">
                  <Image 
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-[#1C1C1C] mb-3" style={{ fontSize: '24px', fontWeight: '600' }}>
                    {industry.title}
                  </h3>
                  <p className="text-[#1C1C1C]/70 mb-6" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                    {industry.description}
                  </p>
                  
                  <button className="text-[#F2C236] flex items-center gap-2 group-hover:gap-3 transition-all" style={{ fontSize: '14px', fontWeight: '600' }}>
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}