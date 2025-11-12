import React, { useState } from 'react';

const TestimonialsSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: 'Neha Sharma',
      role: 'Corporate Professional, Connaught Place',
      image: 'https://images.pexels.com/photos/30809734/pexels-photo-30809734.jpeg?_gl=1*irhxpm*_ga*MTkyMTE1MjMxMS4xNzYyOTM2ODI0*_ga_8JE65Q40S6*czE3NjI5MzY4MjQkbzEkZzEkdDE3NjI5MzY4NjckajE3JGwwJGgw',
      rating: 5,
      text: 'Managing back-to-back meetings in Connaught Place left no time for my health. Dr. Ashu Basist crafted a realistic plan that fits my Delhi lifestyle and the results show on the scale and my energy.',
      result: 'Lost 12 kg'
    },
    {
      name: 'Arjun Mehta',
      role: 'Marathon Runner, South Delhi',
      image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      rating: 5,
      text: "Preparing for the Delhi Half Marathon was tough until Dr. Basist dialed in my sports nutrition. My timing improved and I recover faster even after long training runs on Lodhi Road.",
      result: '10% Pace Improvement'
    },
    {
      name: 'Priya Verma',
      role: 'Type 2 Diabetes, Lajpat Nagar',
      image: 'https://images.pexels.com/photos/31851800/pexels-photo-31851800.jpeg?_gl=1*1dmxwpg*_ga*MTkyMTE1MjMxMS4xNzYyOTM2ODI0*_ga_8JE65Q40S6*czE3NjI5MzY4MjQkbzEkZzEkdDE3NjI5MzY5NTMkajIyJGwwJGgw',
      rating: 5,
      text: "Thanks to Dr. Basist's structured meal plans, my blood sugar stay steady even with a busy Delhi household. I finally understand what to eat and my HbA1c reports look better than ever.",
      result: 'HbA1c from 8.4 to 6.1'
    },
    {
      name: 'Rohan Kapoor',
      role: 'Hypertension Reversal, Rajouri Garden',
      image: 'https://images.pexels.com/photos/1544928/pexels-photo-1544928.jpeg?_gl=1*l2foy3*_ga*MTkyMTE1MjMxMS4xNzYyOTM2ODI0*_ga_8JE65Q40S6*czE3NjI5MzY4MjQkbzEkZzEkdDE3NjI5Mzc1OTckajI3JGwwJGgw',
      rating: 5,
      text: 'Long hours in NCR traffic spiked my blood pressure. Dr. Basist reset my food habits with practical Delhi-friendly swaps and my cardiologist is delighted with the improvement.',
      result: 'BP 150/100 to 120/80'
    },
    {
      name: 'Ananya Singh',
      role: 'Postpartum Recovery, Greater Kailash',
      image: 'https://images.pexels.com/photos/3760856/pexels-photo-3760856.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      rating: 5,
      text: 'Balancing newborn care and recovery felt overwhelming until Dr. Basist designed a postpartum plan using local seasonal produce. I regained strength and shed the extra weight safely.',
      result: 'Lost 9 kg safely'
    },
    {
      name: 'Sameer Khanna',
      role: 'Entrepreneur, Gurgaon',
      image: 'https://images.pexels.com/photos/938639/pexels-photo-938639.jpeg?_gl=1*12736k6*_ga*MTkyMTE1MjMxMS4xNzYyOTM2ODI0*_ga_8JE65Q40S6*czE3NjI5MzY4MjQkbzEkZzEkdDE3NjI5MzczMTckajYwJGwwJGgw',
      rating: 5,
      text: 'Between client meetings in Cyber City and odd meal timings, I was exhausted. Dr. Basist gave me a simple structure and smart ordering tips. My focus is sharper and I no longer crash mid-day.',
      result: 'Energy Level +80%'
    },
    {
      name: 'Meera Gupta',
      role: 'Senior Citizen, Pitampura',
      image: 'https://images.pexels.com/photos/31759291/pexels-photo-31759291.jpeg?_gl=1*14hnyx*_ga*MTkyMTE1MjMxMS4xNzYyOTM2ODI0*_ga_8JE65Q40S6*czE3NjI5MzY4MjQkbzEkZzEkdDE3NjI5MzY5NTMkajIyJGwwJGgw',
      rating: 5,
      text: 'At 63, I wanted to keep up with my grandkids. Dr. Basist personalised my diet with familiar North Indian dishes while improving my joint health and stamina.',
      result: 'Improved Mobility'
    },
    {
      name: 'Aakash Jain',
      role: 'B.Tech Student, Dwarka',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      rating: 5,
      text: "Hostel food and late-night studying wrecked my routine. Dr. Basist gave me budget-friendly snack ideas and a plan I can follow even during exam season. My concentration is back.",
      result: 'Better Focus & Health'
    },
    {
      name: 'Kavya Malhotra',
      role: 'PCOS Management, Punjabi Bagh',
      image: 'https://images.pexels.com/photos/30825994/pexels-photo-30825994.jpeg?_gl=1*1cap7n*_ga*MTkyMTE1MjMxMS4xNzYyOTM2ODI0*_ga_8JE65Q40S6*czE3NjI5MzY4MjQkbzEkZzEkdDE3NjI5MzY5NTMkajIyJGwwJGgw',
      rating: 5,
      text: 'Dr. Basist helped me balance my hormones with tailored nutrition and mindful lifestyle tweaks. My cycles are regular now and the cravings are totally under control.',
      result: 'PCOS Symptoms Reduced'
    },
    {
      name: 'Dhruv Bhatia',
      role: 'Corporate Wellness, Noida',
      image: 'https://images.pexels.com/photos/265917/pexels-photo-265917.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      rating: 5,
      text: 'Frequent travel across NCR meant irregular meals. Dr. Basist designed a travel-friendly plan and guided me on reading menus wisely. My weight is stable and productivity is up.',
      result: 'Lost 8 kg, Sustained'
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
            Success <span className="text-orange-500">Stories with Dr. Ashu Basist</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hear from clients who have transformed their lives through direct consultations with Dr. Ashu Basist
          </p>
        </div>

        {/* Endless Scrolling Testimonials */}
        <div className="mb-16 relative overflow-hidden">
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div 
            className="flex gap-6 animate-scroll-testimonials"
            style={{ width: 'max-content', animationPlayState: isPaused ? 'paused' : 'running' }}
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
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-3">200+</div>
            <div className="text-gray-600 text-lg">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-3">90%</div>
            <div className="text-gray-600 text-lg">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-3">4+</div>
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

