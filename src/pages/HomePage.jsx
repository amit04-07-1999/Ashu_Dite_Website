import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import DietPlansSection from '../components/DietPlansSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      {/* <AboutSection /> */}
      <ServicesSection />
      <DietPlansSection />
      <TestimonialsSection />
      {/* <ContactSection /> */}
    </div>
  );
};

export default HomePage;

