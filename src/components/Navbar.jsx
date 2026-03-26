import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ isBannerVisible }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Customers', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Blog', href: '#' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${isScrolled
        ? 'top-0 py-3 bg-white/80 backdrop-blur-md shadow-md'
        : `${isBannerVisible ? 'top-16 sm:top-12' : 'top-0'} py-5 bg-transparent`
        }`}
    >
      <div className="container mx-auto px-15 flex items-center">

        {/* Left: Logo */}
        <div className="flex-1 flex justify-start items-center space-x-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl leading-none">S</span>
          </div>
          <span className="text-xl font-bold text-slate-900">
            Space
          </span>
        </div>

        {/* Middle: Desktop Menu */}
        <div className="hidden md:flex flex-[2] justify-center items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold transition-colors hover:text-indigo-600 whitespace-nowrap ${isScrolled ? 'text-slate-600' : 'text-slate-700'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Login Button */}
        <div className="flex-1 flex justify-end items-center">
          <div className="hidden md:block">
            <button className="bg-white text-black px-6 py-2 rounded-full  text-sm font-bold border border-slate-200 shadow-sm hover:shadow-md hover:bg-slate-50 transition-all active:scale-95">
              Login
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
        <div className="flex flex-col items-center space-y-6 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-slate-600 hover:text-indigo-600 transition-colors w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-white text-black border border-slate-200 px-6 py-3  text-base font-bold rounded-lg shadow-sm">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
