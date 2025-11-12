import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Newsletter Section */}
      {/* <div className="bg-gradient-to-r from-orange-500 to-orange-500">
        <div className="container mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-orange-50 text-lg">
                Get healthy recipes, nutrition tips, and exclusive offers delivered to your inbox
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-l-lg w-full md:w-80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-gray-900 text-white px-8 py-4 rounded-r-lg font-semibold hover:bg-gray-800 transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* About Section */}
          <div>
            <div className="mb-6">
              <Link to="/" className="flex items-center space-x-2">
                {/* <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  NutriCare
                </span>
                <span className="text-2xl font-bold text-white">Clinic</span> */}
                <img src="./Images/logo.png" alt="logo" className="w-50 h-15" />
              </Link>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Dr. Ashu Basist offers personalized nutrition and naturopathy-led lifestyle guidance designed to restore balance and long-term wellness.
            </p>
            <div className="flex items-center space-x-2 text-orange-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">Certified Nutrition & Naturopathy Specialist</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-orange-500 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-orange-500 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-orange-500 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Services
                </Link>
              </li>
              {/* <li>
                <Link to="/diet-plans" className="hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-orange-500 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Diet Plans
                </Link>
              </li> */}
              <li>
                <Link to="/contact" className="hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-orange-500 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Popular Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500"></span>
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/services#obesity" className="hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-orange-500 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Obesity & Weight Management
                </Link>
              </li>
              <li>
                <Link to="/services#hypertension" className="hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-orange-500 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Hypertension
                </Link>
              </li>
              <li>
                <Link to="/services#hypothyroidism" className="hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-orange-500 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Hypothyroidism
                </Link>
              </li>
              <li>
                <Link to="/services#diabetes" className="hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-orange-500 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Diabetes Management
                </Link>
              </li>
              <li>
                <Link to="/services#dyslipidemia" className="hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-orange-500 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Dyslipidemia
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <svg className="w-5 h-5 mt-1 text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  <span className="font-semibold">Office Hours:</span><br />
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Sat: 10:00 AM - 2:00 PM<br />
                  Sun: Closed
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <svg className="w-5 h-5 text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+15551234567" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  +91 74284 30175
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <svg className="w-5 h-5 text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@nutricareclinic.com" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  ashukumar8869@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-white font-semibold mb-4">Follow Us</p>
              <div className="flex space-x-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 transform hover:scale-110" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/dieticsandnutrition2025?utm_source=qr&igsh=MWRwaDMzbmVyMGllYw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 transform hover:scale-110" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 transform hover:scale-110" aria-label="YouTube">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a2.946 2.946 0 0 0-2.072-2.083C19.641 3.5 12 3.5 12 3.5s-7.641 0-9.426.603a2.946 2.946 0 0 0-2.072 2.083C0 7.987 0 12 0 12s0 4.013.502 5.814a2.946 2.946 0 0 0 2.072 2.084C4.359 20.5 12 20.5 12 20.5s7.641 0 9.426-.602a2.946 2.946 0 0 0 2.072-2.084C24 16.013 24 12 24 12s0-4.013-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 transform hover:scale-110" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Dr. Ashu Basist | NutriCare Clinic. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/contact" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/contact" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/contact" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

