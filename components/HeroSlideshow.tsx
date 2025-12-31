'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "Leaders in Scaffolding Solutions",
    subtitle: "Manufacturers & Suppliers of Custom Machinery, Scaffolding Materials and Accessories to world's leading construction & industrial sites.",
    cta: "Explore More",
    image: "hero-1.png"
  },
  {
    title: "Premium Quality Equipment",
    subtitle: "Trusted by leading construction companies across India, Europe, Africa, and the Middle East for over a decade.",
    cta: "View Products",
    image: "hero-2.jpg"
  },
  {
    title: "Custom Solutions for Your Projects",
    subtitle: "Expert engineering and manufacturing services tailored to meet your specific scaffolding and machinery needs.",
    cta: "Contact Us",
    image: "hero-3.jpg"
  }
];

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Initial load animation
    setTimeout(() => setHasLoaded(true), 100);
    setTimeout(() => setShowContent(true), 600);
    
    const timer = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNextSlide = () => {
    setIsTransitioning(true);
    setShowContent(false);
    const next = (currentSlide + 1) % slides.length;
    setNextSlide(next);
    
    setTimeout(() => {
      setCurrentSlide(next);
      setIsTransitioning(false);
      setTimeout(() => setShowContent(true), 300);
    }, 800);
  };

  const handlePrevSlide = () => {
    setIsTransitioning(true);
    setShowContent(false);
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    setNextSlide(prev);
    
    setTimeout(() => {
      setCurrentSlide(prev);
      setIsTransitioning(false);
      setTimeout(() => setShowContent(true), 300);
    }, 800);
  };

  const handleGoToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setShowContent(false);
    setNextSlide(index);
    
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
      setTimeout(() => setShowContent(true), 300);
    }, 800);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0 w-full h-full">
        {/* Current Image */}
        <div className="absolute inset-0">
          <Image
            src={`/assets/${slides[currentSlide].image}`}
            alt="Venta Scaffolding"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
          />
        </div>
        
        {/* Next Image for Crossfade */}
        {isTransitioning && (
          <div className={`absolute inset-0 transition-opacity duration-1000 ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src={`/assets/${slides[nextSlide].image}`}
              alt="Venta Scaffolding"
              fill
              className="object-cover object-center"
              quality={90}
              sizes="100vw"
            />
          </div>
        )}
        
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] w-full">
          <div 
            className={`transition-all duration-700 ${
              showContent && hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#fac938] mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="font-medium text-xl md:text-2xl lg:text-3xl text-white mb-8 max-w-[800px] leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
            <Link 
              href="#services"
              className="inline-block bg-[#fac938] hover:bg-[#e8b821] transition-colors px-8 py-4 rounded-lg font-bold text-[#1e1e1e] text-lg uppercase"
            >
              {slides[currentSlide].cta}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleGoToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              currentSlide === index 
                ? 'w-8 bg-[#fac938]' 
                : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
