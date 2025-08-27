'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      id="navbar" 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">
            RIG Global Solutions
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#mission" onClick={closeMenu}>
              Our Mission
            </NavLink>
            <NavLink href="#philosophy" onClick={closeMenu}>
              Why Us
            </NavLink>
            <NavLink href="#pathway" onClick={closeMenu}>
              Career Path
            </NavLink>
            <NavLink href="#departments" onClick={closeMenu}>
              Departments
            </NavLink>
            <NavLink href="#openings" onClick={closeMenu}>
              Openings
            </NavLink>
            <Link 
              href="#apply" 
              className="bg-[#C5A47E] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#b5946e] transition-colors"
              onClick={closeMenu}
            >
              Apply Now
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="text-3xl">{isMenuOpen ? '✕' : '☰'}</span>
          </button>
        </nav>
        
        {/* Mobile Menu */}
        <div 
          className={`md:hidden mt-4 transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-64' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-3 py-4">
            <MobileNavLink href="#mission" onClick={closeMenu}>
              Our Mission
            </MobileNavLink>
            <MobileNavLink href="#philosophy" onClick={closeMenu}>
              Why Us
            </MobileNavLink>
            <MobileNavLink href="#pathway" onClick={closeMenu}>
              Career Path
            </MobileNavLink>
            <MobileNavLink href="#departments" onClick={closeMenu}>
              Departments
            </MobileNavLink>
            <MobileNavLink href="#openings" onClick={closeMenu}>
              Openings
            </MobileNavLink>
            <Link 
              href="#apply" 
              className="bg-[#C5A47E] text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-[#b5946e] transition-colors"
              onClick={closeMenu}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

// Reusable NavLink component for desktop
function NavLink({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <a 
      href={href}
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        onClick();
      }}
      className="text-gray-600 hover:text-[#C5A47E] transition-colors font-medium"
    >
      {children}
    </a>
  );
}

// Reusable MobileNavLink component
function MobileNavLink({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <a 
      href={href}
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        onClick();
      }}
      className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
    >
      {children}
    </a>
  );
}
