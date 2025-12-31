'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { ContactForm } from '@/components/ContactForm';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Factory, Cog, Zap, Mail, X } from 'lucide-react';
import solutionsData from '@/data/solutions.json';

interface Solution {
  title: string;
  slug: string;
  image: string;
  description: string;
}

export default function SolutionsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);
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
        tag="Manufacturing Excellence"
        tagIcon={<Factory className="w-5 h-5 text-[#fac938]" />}
        title={<>Our <span className="text-[#fac938]">Solutions</span></>}
        description="The Venta Team understands the challenges and complexities of large-scale projects as well as turnkey developments. With experience supporting offshore oil rigs, shipyards, major construction projects and high-volume importers, Venta has a custom package for every kind of scaffolding materials demand."
        backgroundImage="/assets/section1.webp"
        backgroundGradient="from-[#3b2f0d]/80 via-[#4a3a10]/70 to-[#3b2f0d]/80"
        minHeight="min-h-[500px]"
        textColor="light"
      />

      {/* Solutions Grid */}
      <section ref={sectionRef} className="py-12 md:py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4">
              Advanced Manufacturing <span className="text-[#fac938]">Solutions</span>
            </h2>
            <p className="text-[#1C1C1C]/70 text-lg max-w-3xl mx-auto">
              Discover our comprehensive range of automated machinery and industrial processes
            </p>
          </div>

          <div className="space-y-12">
            {solutionsData.map((solution: Solution, index: number) => (
              <div
                key={solution.slug}
                ref={(el) => {
                  if (el) {
                    itemRefs.current[index] = el;
                  }
                }}
                className={`group transition-all duration-700 ${
                  visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index % 4) * 100}ms` }}
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#fac938] hover:shadow-2xl transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                    {/* Image - Takes 2 columns */}
                    <div className="md:col-span-2 relative h-64 md:h-auto min-h-[300px] bg-gray-100">
                      <Image
                        src={`/assets/solutions/${solution.image}`}
                        alt={solution.title}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>

                    {/* Content - Takes 3 columns */}
                    <div className="md:col-span-3 p-8 flex flex-col">
                      <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4 group-hover:text-[#fac938] transition-colors">
                        {solution.title}
                      </h3>
                      <div 
                        className="text-[#1C1C1C]/70 leading-relaxed solution-content flex-grow"
                        dangerouslySetInnerHTML={{ __html: solution.description }}
                      />
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <button
                          onClick={() => setSelectedSolution(solution.title)}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-[#fac938] text-[#3b2f0d] rounded-lg font-semibold hover:bg-[#e8b830] transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                          Inquiry Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#3b2f0d] text-white">
        <div className="max-w-[1400px] mx-auto text-center">
          <Factory className="w-16 h-16 text-[#fac938] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Your <span className="text-[#fac938]">Production?</span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Contact us to learn more about our manufacturing solutions and how we can support your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#fac938] text-[#3b2f0d] rounded-lg font-semibold text-lg hover:bg-[#e8b830] transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="/shop" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#3b2f0d] rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              View Products
            </a>
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      {selectedSolution && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-[#fac938] p-6 flex items-center justify-between rounded-t-2xl">
              <div>
                <h3 className="text-2xl font-bold text-[#3b2f0d]">Inquiry</h3>
                <p className="text-[#3b2f0d]/70 text-sm mt-1">{selectedSolution}</p>
              </div>
              <button
                onClick={() => setSelectedSolution(null)}
                className="text-[#3b2f0d] hover:bg-[#e8b830] p-2 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8">
              <ContactForm defaultInquiryType={selectedSolution} />
            </div>
          </div>
        </div>
      )}

      <Footer />

      <style jsx global>{`
        .solution-content h4 {
          font-size: 1.125rem;
          font-weight: 700;
          color: #1C1C1C;
          margin-top: 1rem;
          margin-bottom: 0.75rem;
        }
        .solution-content ul {
          list-style: none;
          padding-left: 0;
          margin-top: 0.5rem;
        }
        .solution-content li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: #1C1C1C;
          opacity: 0.85;
        }
        .solution-content li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #fac938;
          font-weight: bold;
        }
        .solution-content p {
          margin-bottom: 0.75rem;
        }
      `}</style>
      </div>
    </div>
  );
}
