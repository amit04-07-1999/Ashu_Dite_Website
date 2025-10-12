import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-50 to-green-100 py-24 md:py-36 lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Personalized Nutrition Plans for a{' '}
              <span className="text-green-600">Healthier You</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
              Certified dietitians offering tailored diet and lifestyle plans to help you achieve your health goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-green-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started
              </button>
              <button className="bg-white text-green-600 px-10 py-4 rounded-full text-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition-all duration-300">
                Learn More
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">5000+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fadeIn mt-12 md:mt-0">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                alt="Friendly Dietitian"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">Certified</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

