import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About NutriCare Clinic</h1>
            <p className="text-xl lg:text-2xl text-green-50">
              Your Trusted Partner in Health and Nutrition Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Founded in 2015, NutriCare Clinic was born from a simple yet powerful vision: to make personalized nutrition accessible to everyone. What started as a small consultation room has grown into a comprehensive nutrition and wellness center serving thousands of clients.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Our journey began when our founder, Dr. Sarah Mitchell, recognized the growing need for evidence-based nutrition guidance in a world filled with conflicting diet information. Today, we're proud to be a leading nutrition clinic with a team of certified nutritionists and dietitians.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We've helped over 5,000 clients achieve their health goals, from weight management to managing chronic conditions through proper nutrition.
                </p>
              </div>
              <div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=700&fit=crop" 
                    alt="NutriCare Clinic Office" 
                    className="rounded-2xl shadow-xl w-full h-auto object-cover"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-3xl font-bold text-green-700 mb-1">2015</div>
                    <div className="text-gray-700 font-semibold">Since</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-md">
                <div className="text-4xl font-bold text-green-700 mb-2">2015</div>
                <div className="text-gray-700 font-semibold">Established</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-md">
                <div className="text-4xl font-bold text-green-700 mb-2">5000+</div>
                <div className="text-gray-700 font-semibold">Happy Clients</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-md">
                <div className="text-4xl font-bold text-green-700 mb-2">15+</div>
                <div className="text-gray-700 font-semibold">Expert Team</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-md">
                <div className="text-4xl font-bold text-green-700 mb-2">98%</div>
                <div className="text-gray-700 font-semibold">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To empower individuals to achieve optimal health through personalized nutrition guidance, evidence-based practices, and compassionate care. We believe that proper nutrition is the foundation of a healthy, vibrant life, and we're committed to making it accessible to everyone.
                </p>
              </div>
              <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To become the leading nutrition and wellness center, recognized for transforming lives through innovative nutrition solutions and holistic health approaches. We envision a world where everyone has access to the knowledge and support needed to live their healthiest life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Evidence-Based</h3>
                <p className="text-gray-600 leading-relaxed">
                  We rely on the latest scientific research and proven methodologies to provide the most effective nutrition guidance.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every client is unique. We create customized nutrition plans tailored to your specific needs, lifestyle, and goals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compassionate</h3>
                <p className="text-gray-600 leading-relaxed">
                  We understand that changing eating habits is challenging. We provide supportive, judgment-free guidance every step of the way.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Holistic Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  We consider all aspects of your life - physical, mental, and lifestyle factors - for comprehensive wellness.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Education First</h3>
                <p className="text-gray-600 leading-relaxed">
                  We empower you with knowledge, teaching you the 'why' behind nutrition recommendations for lasting change.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Results-Driven</h3>
                <p className="text-gray-600 leading-relaxed">
                  We track progress, adjust plans as needed, and celebrate milestones to ensure you achieve your health goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
              Our team of certified nutritionists and dietitians bring years of experience and a passion for helping you achieve your health goals.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop" 
                    alt="Dr. Sarah Mitchell" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Sarah Mitchell</h3>
                  <p className="text-green-600 font-semibold mb-3">Clinical Nutritionist & Founder</p>
                  <p className="text-gray-600 mb-4">
                    15+ years of experience in clinical nutrition. Specializes in metabolic disorders and weight management.
                  </p>
                  <div className="text-sm text-gray-500">
                    • PhD in Nutrition Science<br/>
                    • Board Certified Specialist<br/>
                    • Published Researcher
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=300&fit=crop" 
                    alt="Michael Chen" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Michael Chen</h3>
                  <p className="text-green-600 font-semibold mb-3">Sports Nutritionist</p>
                  <p className="text-gray-600 mb-4">
                    Expert in sports nutrition and athletic performance optimization. Works with professional athletes.
                  </p>
                  <div className="text-sm text-gray-500">
                    • MS in Sports Nutrition<br/>
                    • CSSD Certified<br/>
                    • Former Olympic Consultant
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=300&fit=crop" 
                    alt="Emily Rodriguez" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Emily Rodriguez</h3>
                  <p className="text-green-600 font-semibold mb-3">Pediatric Nutritionist</p>
                  <p className="text-gray-600 mb-4">
                    Specializes in children's nutrition and family wellness. Passionate about healthy eating habits from early age.
                  </p>
                  <div className="text-sm text-gray-500">
                    • RD, CDN Certified<br/>
                    • Pediatric Specialist<br/>
                    • Family Wellness Expert
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">Why Choose NutriCare Clinic?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <div className="text-3xl font-bold text-green-700 mb-3">100%</div>
                <div className="text-gray-800 font-semibold mb-2">Personalized Plans</div>
                <p className="text-gray-600 text-sm">Every plan is customized to your unique needs and goals</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <div className="text-3xl font-bold text-blue-700 mb-3">24/7</div>
                <div className="text-gray-800 font-semibold mb-2">Support Available</div>
                <p className="text-gray-600 text-sm">Access to our team whenever you need guidance</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                <div className="text-3xl font-bold text-purple-700 mb-3">15+</div>
                <div className="text-gray-800 font-semibold mb-2">Years Experience</div>
                <p className="text-gray-600 text-sm">Trusted expertise in nutrition and wellness</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                <div className="text-3xl font-bold text-orange-700 mb-3">98%</div>
                <div className="text-gray-800 font-semibold mb-2">Client Satisfaction</div>
                <p className="text-gray-600 text-sm">Proven track record of happy, healthy clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Health Journey?</h2>
            <p className="text-xl text-green-50 mb-8">
              Join thousands of satisfied clients who have transformed their lives with NutriCare Clinic
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Book a Consultation
              </Link>
              <Link
                to="/services"
                className="bg-green-800 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

