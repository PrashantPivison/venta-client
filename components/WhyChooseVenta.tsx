'use client';

import { Package, Wrench, Building2, Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function WhyChooseVenta() {
  const features = [
    {
      icon: Package,
      title: "Ready Stock",
      description: "Quality-checked scaffolding materials ready to be shipped on-demand."
    },
    {
      icon: Wrench,
      title: "Custom Solutions",
      description: "Made-to-order machinery synchronized with your existing operations."
    },
    {
      icon: Building2,
      title: "Turnkey Projects",
      description: "On-time turnkey solutions with competitive pricing and reliable service."
    },
    {
      icon: Award,
      title: "Uncompromising Quality",
      description: "We never compromise on quality or safety. High satisfaction scores prove it."
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
    <section ref={sectionRef} className="bg-[#F7EDD3] py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Section Header */}
        <div className={`mb-20 flex flex-col md:flex-row md:items-start md:justify-between gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#F2C236]">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[#1C1C1C] uppercase tracking-wider" style={{ fontSize: '14px', fontWeight: '600' }}>
                VENTA INTERNATIONAL
              </span>
            </div>
            
            <h2 className="text-[#1C1C1C] max-w-[700px]" style={{ fontSize: '64px', fontWeight: '700', lineHeight: '1.1' }}>
              A Positive <span className="text-[#F2C236]">Impact</span> for you,<br />
              Your Business and the Industry
            </h2>
          </div>
          
          <button className="bg-[#f2c236] px-[35px] py-[17px] rounded-[38px] text-[#3b2f0d] hover:bg-[#f2c236]/90 transition-colors w-fit" style={{ fontWeight: '600', fontSize: '20px' }}>
            Explore More
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                ref={(el) => {
                  if (el) {
                    cardRefs.current[index] = el;
                  }
                }}
                className={`group h-full transition-all duration-700 ${
                  visibleCards.has(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-6 w-16 h-16 rounded-[16px] bg-[#F2C236]/10 border-2 border-[#F2C236]/30 flex items-center justify-center group-hover:bg-[#F2C236] group-hover:border-[#F2C236] transition-all duration-300">
                  <Icon className="w-8 h-8 text-[#F2C236] group-hover:text-[#1C1C1C] transition-colors duration-300" strokeWidth={1.5} />
                </div>
                
                {/* Title */}
                <h3 className="text-[#1C1C1C] mb-3" style={{ fontSize: '20px', fontWeight: '600' }}>
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#1C1C1C]/60" style={{ fontSize: '14px', lineHeight: '1.7' }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}