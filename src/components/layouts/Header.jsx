'use client'

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDefenceOpen, setIsDefenceOpen] = useState(false);
  const [isMobileDefenceOpen, setIsMobileDefenceOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Automation', href: '/automation' },
    { label: 'Intelligence', href: '/intelligence' },
    { label: 'Defence', href: '/defence', hasDropdown: true },
    { label: 'Governance', href: '/governance' },
    { label: 'About Pleiades', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const defenceItems = [
    { name: 'SAMSON Platform', href: '/defence/samson-platform' },
    { name: 'Defense Innovation', href: '/defence/defense-innovation' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDefenceOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B1C2D] backdrop-blur-md border-b border-[#6E7A86]/20'
            : 'bg-[#0B1C2D]/95'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2 group">
              <div className="relative w-[120px] h-[50px]">
                <Image
                  src="/logo.png"
                  alt="Pleiades Systems Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
              <ul className="flex space-x-6 lg:space-x-8">
                {navItems.map((item) => (
                  <li key={item.label} className="relative" ref={item.hasDropdown ? dropdownRef : null}>
                    {item.hasDropdown ? (
                      <div
                        className="relative"
                        onMouseEnter={() => setIsDefenceOpen(true)}
                        onMouseLeave={() => setIsDefenceOpen(false)}
                      >
                        <a
                          className="font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group cursor-pointer flex items-center gap-1"
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              isDefenceOpen ? 'rotate-180' : ''
                            }`}
                          />
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86] group-hover:w-full transition-all duration-300" />
                        </a>

                        {/* Dropdown Menu */}
                        <div
                          className={`absolute top-full left-0 mt-2 w-64 bg-[#0B1C2D] border border-[#6E7A86]/30 rounded-lg shadow-xl overflow-hidden transition-all duration-300 ${
                            isDefenceOpen
                              ? 'opacity-100 visible translate-y-0'
                              : 'opacity-0 invisible -translate-y-2'
                          }`}
                        >
                          <div className="py-2">
                            {defenceItems.map((item, index) => (
                              <Link
                                key={index}
                                href={item.href}
                                className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-[#6E7A86]/20 transition-all duration-200 border-l-2 border-transparent hover:border-[#6E7A86]"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group cursor-pointer"
                      >
                        {item.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86] group-hover:w-full transition-all duration-300" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <button className="bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86] text-white px-4 lg:px-6 py-2.5 rounded-full font-medium text-sm hover:shadow-lg hover:shadow-[#6E7A86]/25 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap">
                Book a call
              </button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden flex flex-col space-y-1.5 z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-[#0B1C2D] transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible delay-300'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full px-6 py-20 overflow-y-auto">
          {/* Mobile Navigation Items */}
          <nav className="w-full max-w-sm">
            <ul className="space-y-4 text-center">
              {navItems.map((item, index) => (
                <li
                  key={item.label}
                  className={`transition-all duration-300 ${
                    isMenuOpen
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 100 + 100}ms` : '0ms',
                  }}
                >
                  {item.hasDropdown ? (
                    <div>
                      <a
                        onClick={() => setIsMobileDefenceOpen(!isMobileDefenceOpen)}
                        className="text-2xl sm:text-3xl font-medium text-white hover:text-[#6E7A86] transition-colors duration-300 py-2 cursor-pointer flex items-center justify-center gap-2 mx-auto w-full"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
                            isMobileDefenceOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </a>
                      
                      {/* Mobile Dropdown */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isMobileDefenceOpen ? 'max-h-96 mt-3' : 'max-h-0'
                        }`}
                      >
                        <div className="space-y-2 bg-[#0B1C2D]/50 rounded-lg py-2 px-4 border border-[#6E7A86]/20">
                          {defenceItems.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              className="block text-base sm:text-lg text-gray-300 hover:text-white transition-colors duration-200 py-2.5 border-l-2 border-transparent hover:border-[#6E7A86] pl-3"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl sm:text-3xl font-medium text-white hover:text-[#6E7A86] transition-colors duration-300 block py-2 cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile CTA Button */}
          <div
            className={`mt-10 transition-all duration-300 ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: isMenuOpen ? '600ms' : '0ms',
            }}
          >
            <button className="bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:shadow-xl hover:shadow-[#6E7A86]/30 transition-all duration-300 hover:scale-105">
              Book a call
            </button>
          </div>

          {/* Close Hint */}
          {/* <div
            className={`mt-8 text-[#CBD5E0] text-xs sm:text-sm transition-all duration-300 ${
              isMenuOpen ? 'opacity-100 delay-700' : 'opacity-0'
            }`}
          >
            Tap anywhere to close
          </div> */}
        </div>
      </div>

      {/* Overlay for closing menu */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;