import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '@/components/home/HeroSection';
import HowWeWorkSection from '@/components/home/HowWeWorkSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import ContactSection from '@/components/home/ContactSection';

const HomePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  
  return (
    <div className="min-h-screen animated-bg">
      <HeroSection />
      <HowWeWorkSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;