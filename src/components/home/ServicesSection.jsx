import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, Cloud, Brain, Lock, MessageSquare } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      icon: Globe,
    },
    {
      id: 'mobile-app-development',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: Smartphone,
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      icon: Cloud,
    },
    {
      id: 'ai-data-analytics',
      title: 'AI & Data Analytics',
      description: 'Intelligent solutions powered by machine learning and advanced analytics.',
      icon: Brain,
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: Lock,
    },
    {
      id: 'software-consulting',
      title: 'Software Consulting',
      description: 'Expert guidance on technology strategy and digital transformation.',
      icon: MessageSquare,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive software solutions tailored to meet your business objectives
          </motion.p>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/services/${service.id}`}
                className="block p-6 border-b border-gray-200 group transition-all duration-300 hover:bg-gray-50"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className="p-3 bg-gray-100 rounded-lg mr-5">
                      <service.icon className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-800">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 group-hover:text-gray-700 transition-colors self-end sm:self-center">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;