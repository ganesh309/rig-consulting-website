'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import Link from 'next/link';

const counterData = [
  { target: 10, label: 'Specialized Departments' },
  { target: 6, label: 'Level Career Progression' },
  { target: 85, label: '% Salary Growth Potential' },
  { target: 100, label: '% Performance-Based' }
];

export default function HeroSection() {
  const [counters, setCounters] = useState<number[]>(() => Array(counterData.length).fill(0));
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const animateCounters = useCallback(() => {
    const startTime = performance.now();
    const duration = 2000; // 2 seconds
    
    const updateCounters = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setCounters(prevCounters => 
        prevCounters.map((_, index) => {
          const target = counterData[index].target;
          return Math.round(target * progress);
        })
      );
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(updateCounters);
      }
    };
    
    animationRef.current = requestAnimationFrame(updateCounters);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animateCounters]);

  return (
    <section id="hero" className="py-20 md:py-32 bg-gradient-to-b from-[#FDFBF8] to-[#F8F5F1]">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Build Your Future with Purpose
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Join India's Most Promising Consulting Firm Where Your Growth is Guaranteed.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#openings" 
            className="bg-[#C5A47E] text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-[#b5946e] transition-transform transform hover:scale-105"
          >
            Explore Open Positions
          </a>
          <a 
            href="https://forms.gle/MbG3wAJvJRMGv26r6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-[#C5A47E] text-[#C5A47E] py-3 px-8 rounded-lg text-lg font-semibold hover:bg-[#C5A47E] hover:text-white transition-colors"
          >
            Apply for Internship
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-16" ref={statsRef}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center stats-section">
          {counters.map((count, index) => (
            <div key={index} className="p-4 md:p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl font-bold text-red-600">{count}+</div>
              <div className="mt-2 text-sm text-gray-600">{counterData[index].label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
