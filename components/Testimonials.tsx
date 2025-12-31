'use client';

import { Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function Testimonials() {
  const testimonials = [
    {
      title: "Reliable Quality & Timely Delivery",
      text: "Venta consistently delivers high-quality scaffolding materials on time. They are our preferred supplier for industrial and commercial projects.",
      author: "Akhil Menon"
    },
    {
      title: "Excellent Custom Machinery Support",
      text: "Their engineering team helped us build customized machinery perfectly suited to our workflow. Outstanding workmanship.",
      author: "Ravi Sheth"
    },
    {
      title: "Smooth International Shipping",
      text: "Our imports always arrive safely and well-packed. Venta is incredibly dependable for overseas shipments.",
      author: "Omar Al-Farsi"
    },
    {
      title: "Trusted by Our Construction Teams",
      text: "The safety-tested materials from Venta help ensure smooth site operations. They maintain excellent quality standards.",
      author: "George Mathew"
    },
    {
      title: "Professional & Responsive Service",
      text: "Working with Venta has been seamless. Their team is always ready to support us with technical guidance and quick delivery.",
      author: "Priya Sharma"
    },
    {
      title: "Best Value for Money",
      text: "Competitive pricing without compromising on quality. Venta offers the best value proposition in the scaffolding industry.",
      author: "James Chen"
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
    <section ref={sectionRef} className="bg-[#1C1C1C] py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Section Header */}
        <div className={`text-center mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#F2C236]">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#F2C236] uppercase tracking-wider" style={{ fontSize: '14px' }}>
              TESTIMONIAL
            </span>
          </div>
          
          <h2 className="text-white" style={{ fontSize: '56px', fontWeight: '700', lineHeight: '1.2' }}>
            Happy Customers,<br />
            <span className="text-white">Happy World</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              ref={(el) => {
                if (el) {
                  cardRefs.current[index] = el;
                }
              }}
              className={`bg-white/5 backdrop-blur-sm rounded-[20px] p-8 border border-white/10 hover:border-[#F2C236]/50 transition-all duration-700 ${
                visibleCards.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F2C236] text-[#F2C236]" />
                ))}
              </div>
              
              {/* Title */}
              <h3 className="text-white mb-3" style={{ fontSize: '18px', fontWeight: '600' }}>
                {testimonial.title}
              </h3>
              
              {/* Text */}
              <p className="text-white/70 mb-6" style={{ fontSize: '14px', lineHeight: '1.7' }}>
                {testimonial.text}
              </p>
              
              {/* Author */}
              <p className="text-white" style={{ fontSize: '14px', fontWeight: '500' }}>
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}