import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/gallery', label: 'GALLERY' },
    { path: '/equipment', label: 'EQUIPMENT' },
    { path: '/quote', label: 'REQUEST QUOTE' },
    { path: '/contact', label: 'CONTACT' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2C3E50]/95 backdrop-blur-sm border-b border-[#34495E]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center p-1">
              <img src="/logo.png" alt="Shree Ganesh Fabrication" className="w-full h-full object-contain" />
            </div>
            <div className="hidden md:block">
              <div className="text-white font-bold text-xl uppercase tracking-tighter" style={{ fontFamily: 'Barlow Condensed' }}>Shree Ganesh</div>
              <div className="text-orange-500 text-xs uppercase tracking-widest">Fabrication</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-[#F39C12] border-b-2 border-[#F39C12]'
                    : 'text-[#BDC3C7] hover:text-white'
                }`}
                style={{ fontFamily: 'Barlow Condensed' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Call Button */}
          <a
            href="tel:+919226281112"
            className="hidden lg:flex items-center space-x-2 bg-[#F39C12] hover:bg-[#E67E22] text-white px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 border border-[#F39C12] hover:border-glow"
            data-testid="header-call-button"
          >
            <Phone className="w-5 h-5" />
            <span>CALL NOW</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            data-testid="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-[#34495E]" data-testid="mobile-menu">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-[#F39C12] bg-[#F39C12]/10'
                    : 'text-[#BDC3C7] hover:text-white hover:bg-[#34495E]'
                }`}
                style={{ fontFamily: 'Barlow Condensed' }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+919226281112"
              className="flex items-center justify-center space-x-2 mx-4 mt-4 bg-[#F39C12] hover:bg-[#E67E22] text-white px-6 py-3 font-bold uppercase tracking-wider transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>CALL NOW</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
