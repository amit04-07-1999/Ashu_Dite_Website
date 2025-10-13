import React from 'react';

const DietPlansSection = () => {
  const dietPlans = [
    {
      name: 'Weight Loss Plan',
      price: '$99',
      duration: 'per month',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
      features: [
        'Customized calorie targets',
        'Weekly meal plans & recipes',
        'Grocery shopping lists',
        'Progress tracking tools',
        'Bi-weekly check-ins',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Performance Plan',
      price: '$149',
      duration: 'per month',
      image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=800&q=80',
      features: [
        'Athlete-specific nutrition',
        'Pre & post-workout meals',
        'Supplement recommendations',
        'Body composition analysis',
        'Weekly consultations',
        '24/7 priority support'
      ],
      popular: true
    },
    {
      name: 'Wellness Plan',
      price: '$79',
      duration: 'per month',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
      features: [
        'Balanced nutrition guide',
        'Healthy eating habits',
        'Recipe recommendations',
        'Monthly consultations',
        'Educational resources',
        'Community access'
      ],
      popular: false
    }
  ];

  return (
    <section id="diet-plans" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-orange-100 text-orange-500 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            Diet Plans
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-orange-500">Perfect Plan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Flexible nutrition plans designed to fit your lifestyle, goals, and budget
          </p>
        </div>

        {/* Diet Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {dietPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular ? 'ring-2 ring-orange-500' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                  Most Popular
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">{plan.name}</h3>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2 text-lg">/ {plan.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-orange-500 text-white hover:bg-orange-500 shadow-lg'
                      : 'bg-orange-100 text-orange-500 hover:bg-orange-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4 text-lg">
            All plans include a money-back guarantee if you're not satisfied within the first 30 days
          </p>
          <button className="text-orange-500 font-semibold hover:text-orange-500 transition-colors duration-300 text-lg">
            Compare All Plans →
          </button>
        </div>

        {/* Custom Plan CTA */}
        <div className="mt-20 bg-gradient-to-r from-orange-50 to-blue-50 rounded-3xl p-10 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Need a Custom Plan?</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Our team can create a fully personalized nutrition plan tailored specifically to your unique needs, preferences, and medical requirements.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">One-on-one consultation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Comprehensive health assessment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Unlimited revisions</span>
                </li>
              </ul>
              <button className="bg-orange-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Request Custom Plan
              </button>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80"
                alt="Custom Nutrition Plan"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DietPlansSection;

