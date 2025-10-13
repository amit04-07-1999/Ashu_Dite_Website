import React, { useState } from 'react';

const TestimonialsSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Weight Loss Success',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'I lost 30 pounds in 4 months with NutriCare! The personalized meal plans were easy to follow and the support from my dietitian was incredible. I finally feel confident and healthy!',
      result: 'Lost 30 lbs'
    },
    {
      name: 'Michael Chen',
      role: 'Athlete',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'The sports nutrition plan helped me improve my performance significantly. My recovery time is faster and I have more energy during training. Highly recommend for any athlete!',
      result: '15% Performance Boost'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Diabetes Management',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'Managing my diabetes has become so much easier with their expert guidance. My blood sugar levels are stable and I\'ve learned to make better food choices without feeling restricted.',
      result: 'HbA1c from 8.5 to 6.2'
    },
    {
      name: 'David Thompson',
      role: 'Heart Health',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'After my heart health scare, NutriCare helped me completely transform my diet. My cholesterol is down, I feel great, and I\'ve never eaten better. Thank you!',
      result: 'Cholesterol -45 points'
    },
    {
      name: 'Jessica Williams',
      role: 'New Mom',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'The postpartum nutrition plan helped me regain my energy and lose the baby weight safely. The dietitians understood my needs as a breastfeeding mom perfectly.',
      result: 'Lost 25 lbs safely'
    },
    {
      name: 'Robert Martinez',
      role: 'Corporate Executive',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'With my busy schedule, I thought eating healthy was impossible. NutriCare created a plan that fits my lifestyle perfectly. I have more energy and focus at work.',
      result: 'Energy Level +80%'
    },
    {
      name: 'Amanda Lee',
      role: 'Busy Professional',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'Working 60+ hours a week, I needed a nutrition plan that was simple yet effective. NutriCare delivered exactly that! I feel energized and my productivity has soared.',
      result: 'Lost 20 lbs, More Energy'
    },
    {
      name: 'James Wilson',
      role: 'Fitness Enthusiast',
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'As someone who trains 6 days a week, proper nutrition was the missing piece. Now I\'m hitting new PRs and recovering faster than ever. Game changer!',
      result: 'Gained 10 lbs Muscle'
    },
    {
      name: 'Lisa Anderson',
      role: 'Senior Citizen',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'At 65, I thought it was too late to change my eating habits. NutriCare proved me wrong! My doctor is amazed at my improved health markers. Thank you!',
      result: 'Blood Pressure Normalized'
    },
    {
      name: 'Kevin Brown',
      role: 'College Student',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'Eating healthy on a college budget seemed impossible. The team helped me create affordable meal plans that actually taste great. My grades improved too!',
      result: 'Better Focus & Health'
    }
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-orange-100 text-orange-500 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="text-orange-500">Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hear from our clients who have transformed their lives with our nutrition programs
          </p>
        </div>

        {/* Endless Scrolling Testimonials */}
        <div className="mb-16 relative overflow-hidden">
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div 
            className={`flex gap-6 ${isPaused ? '' : 'animate-scroll-testimonials'}`}
            style={{ width: 'max-content' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 relative w-[400px] flex-shrink-0 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-orange-100 transition-all duration-300 group-hover:text-orange-200">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-orange-100 transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      {/* Stars */}
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                    {testimonial.text}
                  </p>

                  <div className="inline-block bg-orange-100 text-orange-500 px-4 py-2 rounded-full font-semibold text-xs transition-all duration-300 group-hover:bg-orange-200">
                    ✨ {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Status Indicator */}
          <div className="text-center mt-6">
            {/* <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
              isPaused ? 'bg-orange-100 text-orange-500' : 'bg-orange-100 text-orange-500'
            }`}>
              <span className="text-sm font-medium">
                {isPaused ? '⏸️ Paused - Reading Mode' : '♾️ Endless Scrolling'}
              </span>
              {!isPaused && (
                <div className="flex space-x-1">
                  <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                  <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
              )}
            </div>
            <p className="text-gray-500 text-xs mt-2">Hover over any card to pause</p> */}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-3">5000+</div>
            <div className="text-gray-600 text-lg">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-3">98%</div>
            <div className="text-gray-600 text-lg">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-3">10+</div>
            <div className="text-gray-600 text-lg">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-3">4.9/5</div>
            <div className="text-gray-600 text-lg">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

