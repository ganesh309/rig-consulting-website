'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [counters, setCounters] = useState({
    departments: 0,
    levels: 0,
    salary: 0,
    performance: 0
  });

  useEffect(() => {
    setIsMounted(true);
    
    // Animate counters when component is in view
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const duration = 2000; // 2 seconds
        const startTime = performance.now();
        
        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          setCounters({
            departments: Math.floor(progress * 10),
            levels: Math.floor(progress * 6),
            salary: Math.floor(progress * 85),
            performance: Math.floor(progress * 100)
          });
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.1 });
    
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      observer.observe(heroSection);
    }
    
    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  if (!isMounted) return null;

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
            className="bg-[#C5A47E] text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-[#b5946e] transition-colors"
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
      
      <div className="container mx-auto px-6 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <StatCard value={counters.departments} label="Specialized Departments" />
          <StatCard value={counters.levels} label="Level Career Progression" />
          <StatCard value={counters.salary} label="% Salary Growth Potential" />
          <StatCard value={counters.performance} label="% Performance-Based" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="text-4xl font-bold text-[#C5A47E] mb-2">
        {value}
      </div>
      <div className="text-gray-600 text-sm font-medium">
        {label}
      </div>
    </div>
  );
}
