'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  delay?: number;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.1, delay = 0 } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, delay]);

  return { ref, isVisible };
}

export function getScrollAnimationClass(
  isVisible: boolean,
  animation: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade' = 'fade-up'
) {
  const animations = {
    'fade-up': isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    'fade-down': isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8',
    'fade-left': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8',
    'fade-right': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8',
    'fade': isVisible ? 'opacity-100' : 'opacity-0',
  };

  return `transition-all duration-700 ${animations[animation]}`;
}
