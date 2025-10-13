import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Image */}
          <div className="relative mb-12 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
              alt="Professional Dietitian"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="text-sm font-semibold mb-2">Professional Care</p>
              <p className="text-xs">Evidence-based nutrition guidance tailored to your unique needs</p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="inline-block bg-orange-100 text-orange-500 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Your Partner in <span className="text-orange-500">Optimal Health</span>
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              At NutriCare Clinic, we believe that nutrition is the foundation of good health. With over 10 years of experience, our team of certified dietitians is dedicated to helping you achieve your wellness goals through personalized, science-backed nutrition plans.
            </p>
            <p className="text-gray-700 mb-10 leading-relaxed text-lg">
              We understand that every individual is unique, which is why we take a holistic approach to nutrition counseling. Whether you're looking to manage your weight, improve athletic performance, or address specific health concerns, we're here to support you every step of the way.
            </p>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start space-x-5">
                <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                  <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Certified Professionals</h3>
                  <p className="text-gray-600">All our dietitians are registered and certified with extensive experience</p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                  <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Personalized Approach</h3>
                  <p className="text-gray-600">Custom nutrition plans designed specifically for your lifestyle and goals</p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                  <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Results-Driven</h3>
                  <p className="text-gray-600">Proven track record with thousands of successful transformations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

