import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Diet Plans', path: '/diet-plans' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Info bar content for marquee
  const InfoContent = () => (
    <>
      <a href="tel:+917428430175" className="flex items-center space-x-2 hover:text-orange-100 transition-colors duration-300 flex-shrink-0">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="font-medium">+91 74284 30175</span>
      </a>
      
      <span className="text-orange-300 flex-shrink-0">|</span>
      
      <a href="mailto:ashukumar8869@gmail.com" className="flex items-center space-x-2 hover:text-orange-100 transition-colors duration-300 flex-shrink-0">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="font-medium">ashukumar8869@gmail.com</span>
      </a>
      
      <span className="text-orange-300 flex-shrink-0">|</span>
      
      <span className="text-xs font-medium flex-shrink-0">Mon - Sat</span>
      
      {/* <span className="text-orange-300 flex-shrink-0">|</span>
      
      <div className="flex items-center space-x-3 flex-shrink-0">
        <a href="#" className="hover:text-orange-100 transition-colors duration-300" aria-label="Facebook">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a href="#" className="hover:text-orange-100 transition-colors duration-300" aria-label="Instagram">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
            <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a href="#" className="hover:text-orange-100 transition-colors duration-300" aria-label="LinkedIn">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div> */}
    </>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-md'
    }`}>
          {/* Top Info Bar */}
          <div className={`bg-gradient-to-r from-orange-500 to-orange-500 text-white overflow-hidden transition-all duration-300 ${
            isScrolled ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'
          }`}>
            <div className="py-1">
              <div className="flex items-center justify-center animate-marquee-full whitespace-nowrap text-sm gap-6">
                <InfoContent />
              </div>
            </div>
          </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-6 lg:px-8 py-3 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Single Line Design */}
          <Link to="/" className="flex items-center space-x-3 group">
            
            <div className="flex items-center space-x-2">
              {/* <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-500 bg-clip-text text-transparent">
                NutriCare
              </span>
              <span className="text-xl lg:text-2xl font-bold text-gray-800">
                Clinic
              </span> */}

              <img src="./Images/logo.png" alt="logo" className="w-50 h-15" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10 xl:space-x-14">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `relative text-gray-700 hover:text-orange-500 transition-colors duration-300 font-semibold text-base group ${
                    isActive ? 'text-orange-500' : ''
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

              {/* Desktop CTA Buttons */}
              <div className="hidden lg:flex items-center space-x-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-orange-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  <span className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Book Appointment</span>
                  </span>
                </Link>
              </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fadeIn border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `text-gray-700 hover:text-orange-500 transition-colors duration-300 font-semibold ${
                      isActive ? 'text-orange-500 font-bold' : ''
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-3 space-y-2 border-t border-gray-100">
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Book Appointment</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;