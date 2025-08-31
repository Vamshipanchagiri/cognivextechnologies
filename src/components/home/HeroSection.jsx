import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleGetStartedClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-white/50 geometric-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tighter"
          >
            Building Tomorrow's
            <span className="block text-gradient">Software Solutions</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            We are a leading software development company that transforms innovative ideas into 
            powerful digital solutions. Our expert team delivers cutting-edge technology that 
            drives business growth and success.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              onClick={handleGetStartedClick}
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg hover-lift"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg hover-lift"
            >
              View Services
            </Button>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-20 left-10 w-20 h-20 bg-gray-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gray-300 rounded-full opacity-15 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gray-400 rounded-full opacity-10 animate-pulse delay-2000"></div>
    </section>
  );
};

export default HeroSection;