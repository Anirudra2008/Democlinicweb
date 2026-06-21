'use client';

import React, { useState } from 'react';
import { Globe2, Calendar, Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  isHindi?: boolean;
  setIsHindi?: (val: boolean) => void;
  setIsCursorHovering?: (val: boolean) => void;
}

export default function Navbar({ isHindi: propIsHindi, setIsHindi: propSetIsHindi, setIsCursorHovering }: NavbarProps) {
  const [localIsHindi, localSetIsHindi] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHindi = propIsHindi !== undefined ? propIsHindi : localIsHindi;
  const setIsHindi = propSetIsHindi !== undefined ? propSetIsHindi : localSetIsHindi;

  const hoverEnter = () => setIsCursorHovering && setIsCursorHovering(true);
  const hoverLeave = () => setIsCursorHovering && setIsCursorHovering(false);

  const navLinks = [
    { id: 'home', label: 'Home', labelHn: 'होम', href: '/' },
    { id: 'about', label: 'About', labelHn: 'हमारे बारे में', href: '/#about' },
    { id: 'departments', label: 'Departments', labelHn: 'विभाग', href: '/#departments' },
    { id: 'doctor', label: 'Doctor Profile', labelHn: 'चिकित्सक विवरण', href: '/doctor-gaurav-nakra' },
    { id: 'testimonials', label: 'Testimonials', labelHn: 'अभिप्राय', href: '/#testimonials' },
    { id: 'gallery', label: 'Clinic Gallery', labelHn: 'गैलरी', href: '/#gallery' },
    { id: 'contact', label: 'Contact', labelHn: 'संपर्क करें', href: '/#contact' },
  ];

  return (
    <header 
      id="clinic-header"
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-xl border-b border-[#7DA0CA]/10 shadow-md shadow-[#021024]/3"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <a 
          href="/" 
          className="flex items-center gap-3 group focus:outline-2 focus:outline-[#052659] rounded-lg"
          aria-label="Centre For Skin — Dr. Gaurav Nakra Homepage"
          onMouseEnter={hoverEnter}
          onMouseLeave={hoverLeave}
        >
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl overflow-hidden bg-[#052659] flex items-center justify-center shadow-lg shadow-[#052659]/30 group-hover:scale-105 transition-transform duration-300">
            <img src="/logo.png" alt="Centre For Skin Logo" className="w-full h-full object-cover" width={44} height={44} />
          </div>
          <div>
            <div className="font-serif text-base md:text-xl font-bold text-[#021024] leading-tight flex items-center gap-1">
              Centre For Skin
            </div>
            <div className="font-sans text-[10px] md:text-xs text-[#5483B3] tracking-widest uppercase font-semibold">
              {isHindi ? 'डॉ. गौरव नकरा' : 'Dr. Gaurav Nakra'}
            </div>
          </div>
        </a>

        {/* Desktop Navigation Link rails */}
        <nav 
          className="hidden lg:flex items-center gap-1"
          aria-label="Main Clinical Directories"
        >
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={link.href} 
              className="px-4 py-2 text-sm font-semibold text-[#052659] hover:text-[#5483B3] transition-colors relative group focus:outline-2 focus:outline-[#5483B3] rounded-md"
              onMouseEnter={hoverEnter}
              onMouseLeave={hoverLeave}
            >
              {isHindi ? link.labelHn : link.label}
              <span className="absolute bottom-1.5 left-4 right-4 h-[2px] bg-[#5483B3] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </a>
          ))}
        </nav>

        {/* Languages, CTA buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Language Translator toggle */}
          <button
            onClick={() => setIsHindi(!isHindi)}
            className="px-2.5 py-1.5 rounded-lg border border-[#7DA0CA] bg-white hover:bg-[#C1E8FF]/30 text-xs font-bold text-[#052659] flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
            aria-label="HINDI Translate Toggle"
            onMouseEnter={hoverEnter}
            onMouseLeave={hoverLeave}
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span>{isHindi ? 'English' : 'हिंदी'}</span>
          </button>

          {/* Booking CTA trigger */}
          <a 
            href="/#booking"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#052659] hover:bg-[#5483B3] text-white font-sans text-xs uppercase tracking-wider font-bold rounded-xl shadow-md hover:shadow-lg transition-all border border-[#052659] hover:scale-102 focus:outline-2 focus:outline-offset-2 focus:outline-[#052659]"
            onMouseEnter={hoverEnter}
            onMouseLeave={hoverLeave}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{isHindi ? 'अपॉइंटमेंट लें' : 'Book Appointment'}</span>
          </a>

          {/* Mobile Hamburger menu */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#021024] hover:bg-[#C1E8FF]/50 rounded-lg focus:outline-2 focus:outline-[#052659] select-none cursor-pointer"
            aria-label="Toggle Mobile Directory Drawer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Hamburger slide Drawer */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-drawer"
          className="lg:hidden w-full bg-white border-t border-[#7DA0CA]/30 shadow-xl transition-all duration-300 flex flex-col p-4 gap-2 pb-6"
        >
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 px-4 text-base font-bold text-[#052659] hover:bg-[#C1E8FF]/20 rounded-lg flex justify-between items-center transition-colors"
            >
              <span>{isHindi ? link.labelHn : link.label}</span>
              <ChevronRight className="w-4 h-4 text-[#7DA0CA]" />
            </a>
          ))}
          <a 
            href="/#booking"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-3 w-full py-3.5 bg-[#052659] text-white flex justify-center items-center gap-2 font-bold uppercase tracking-wider text-xs rounded-xl shadow-md"
          >
            <Calendar className="w-4 h-4" />
            <span>{isHindi ? 'अपॉइंटमेंट लें' : 'Book Appointment'}</span>
          </a>
        </div>
      )}
    </header>
  );
}
