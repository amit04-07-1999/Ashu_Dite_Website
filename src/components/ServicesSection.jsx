import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: 'Weight Management',
      description: 'Achieve your ideal weight with customized meal plans and sustainable lifestyle changes tailored to your metabolism.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Diabetes Care',
      description: 'Expert guidance for managing blood sugar levels through proper nutrition and lifestyle modifications.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Sports Nutrition',
      description: 'Optimize your athletic performance with specialized nutrition plans designed for your training needs.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Heart Health',
      description: 'Protect your cardiovascular health with heart-friendly nutrition plans and lifestyle recommendations.'
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-orange-100 text-orange-500 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="text-orange-500">Nutrition Care</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We offer a wide range of specialized nutrition services to meet your unique health needs and goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="bg-orange-100 text-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>View All Services</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-orange-500 rounded-3xl p-10 md:p-16 text-center text-white shadow-xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Not Sure Which Service is Right for You?</h3>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a free consultation and let our experts guide you to the perfect nutrition plan
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-orange-500 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

