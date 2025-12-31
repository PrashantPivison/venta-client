'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

// Counter animation hook
function useCounterAnimation(end: number, duration: number = 2000, isVisible: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuad = (t: number) => t * (2 - t);
      const currentCount = Math.floor(easeOutQuad(progress) * (end - startValue) + startValue);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return count;
}

interface StatCardProps {
  value: string;
  label: string;
  isVisible: boolean;
  delay: number;
}

function StatCard({ value, label, isVisible, delay }: StatCardProps) {
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  const animatedValue = useCounterAnimation(numericValue, 2000, isVisible);

  return (
    <div 
      className="bg-[#F7EDD3] rounded-[16px] p-6 border border-[#F2C236]/100 transition-all duration-700"
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <div className="text-[#F2C236] mb-2" style={{ fontSize: '48px', fontWeight: '700', lineHeight: '1' }}>
        {animatedValue}{suffix}
      </div>
      <div className="text-[#1C1C1C] opacity-80" style={{ fontSize: '16px', fontWeight:'600' }}>
        {label}
      </div>
    </div>
  );
}

export function AboutStatistics() {
  const stats = [
    { number: "14+", label: "Trusted Years" },
    { number: "2K+", label: "Satisfied Customers" },
    { number: "90+", label: "Projects Executed" },
    { number: "80K+", label: "Orders Fulfilled" }
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
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
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F9F9F9] py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* About Text */}
            <div className="mb-12">
              <p className="text-[#1C1C1C] opacity-80" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                Venta International is a trusted name in the scaffolding industry with over a decade of experience. Our clients include commercial & infrastructure construction companies, premier residential projects, oil rigs, shipyards, high-volume importers and mid-to-large developers in the domestic and international markets.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  value={stat.number}
                  label={stat.label}
                  isVisible={isVisible}
                  delay={300 + index * 100}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Image with Featured Stat */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative rounded-[20px] overflow-hidden h-[650px]">
              <Image 
                src="/assets/section1.webp"
                alt="Venta International Construction"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Featured Stat Card */}
              <div className="absolute top-8 left-8 bg-white rounded-[16px] p-6 shadow-lg">
                <div className="text-[#1C1C1C] mb-1" style={{ fontSize: '48px', fontWeight: '700', lineHeight: '1' }}>
                  2000+
                </div>
                <div className="text-[#1C1C1C] opacity-70" style={{ fontSize: '14px' }}>
                  Satisfied Customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}