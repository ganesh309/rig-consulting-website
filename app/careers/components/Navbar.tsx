'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      id="navbar" 
      className={`sticky-nav ${scrolled ? 'shadow-md' : ''}`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          RIG Global Solutions
        </div>
        
        <div className="hidden md:flex space-x-6">
          {['mission', 'philosophy', 'pathway', 'departments', 'openings'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              className="nav-link text-gray-600 hover:text-[#C5A47E] transition-colors"
            >
              {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </a>
          ))}
        </div>
        
        <a 
          href="#apply" 
          className="hidden md:block bg-[#3A3A3A] text-white py-2 px-4 rounded-lg hover:bg-[#505050] transition-colors"
        >
          Apply Now
        </a>
        
        <button 
          id="mobile-menu-button" 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-3xl">☰</span>
        </button>
      </nav>
      
      <div 
        id="mobile-menu" 
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}
      >
        {['mission', 'philosophy', 'pathway', 'departments', 'openings'].map((item) => (
          <a 
            key={item}
            href={`#${item}`} 
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </a>
        ))}
        <a 
          href="#apply" 
          className="block py-2 px-4 text-sm bg-[#3A3A3A] text-white text-center rounded-b-lg hover:bg-[#505050] transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Apply Now
        </a>
      </div>
    </header>
  );
}
