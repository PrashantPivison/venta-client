'use client';

import Image from 'next/image';
import { ReactNode } from 'react';

interface HeroProps {
  tag?: string;
  tagIcon?: ReactNode;
  title: ReactNode;
  description: string;
  backgroundImage?: string;
  backgroundGradient?: string;
  minHeight?: string;
  textColor?: 'light' | 'dark';
}

export function Hero({
  tag,
  tagIcon,
  title,
  description,
  backgroundImage,
  backgroundGradient = 'from-[#fac938] to-[#e8b821]',
  minHeight = 'min-h-[400px]',
  textColor = 'dark'
}: HeroProps) {
  const titleColorClass = textColor === 'light' ? 'text-white' : 'text-[#3b2f0d]';
  const descColorClass = textColor === 'light' ? 'text-white/80' : 'text-[#3b2f0d]/80';
  const tagColorClass = 'text-[#fac938]';

  return (
    <section className={`relative ${minHeight} overflow-hidden py-16 md:py-20 lg:py-24`}>
      {/* Background */}
      {backgroundImage ? (
        <>
          <div className="absolute inset-0">
            <Image 
              src={backgroundImage}
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${backgroundGradient}`} />
          </div>
        </>
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${backgroundGradient}`} />
      )}
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
        {tag && (
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#fac938]/20 rounded-full backdrop-blur-sm">
            {tagIcon}
            <span className={`${tagColorClass} uppercase tracking-wider text-sm font-semibold`}>
              {tag}
            </span>
          </div>
        )}
        
        <h1 className={`font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl ${titleColorClass} mb-6 leading-tight`}>
          {title}
        </h1>
        
        <p className={`text-lg md:text-xl lg:text-2xl ${descColorClass} max-w-3xl mx-auto leading-relaxed`}>
          {description}
        </p>
      </div>
    </section>
  );
}
