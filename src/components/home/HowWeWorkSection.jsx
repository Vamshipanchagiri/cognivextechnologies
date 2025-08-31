import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Target, Lightbulb, Shield, Zap } from 'lucide-react';

const HowWeWorkSection = () => {
  const workProcess = [
    {
      icon: Users,
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, requirements, and challenges to create a comprehensive project roadmap.',
    },
    {
      icon: Lightbulb,
      title: 'Design & Architecture',
      description: 'Our team designs intuitive user experiences and robust system architectures tailored to your specific needs.',
    },
    {
      icon: Zap,
      title: 'Development & Testing',
      description: 'We build your solution using agile methodologies with continuous testing and quality assurance throughout.',
    },
    {
      icon: Target,
      title: 'Deployment & Launch',
      description: 'Seamless deployment to production environments with comprehensive monitoring and performance optimization.',
    },
    {
      icon: Shield,
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and maintenance to ensure your solution continues to perform at its best.',
    },
    {
      icon: CheckCircle,
      title: 'Continuous Improvement',
      description: 'Regular reviews and enhancements based on user feedback and evolving business requirements.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Our proven methodology ensures successful project delivery from concept to completion
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {workProcess.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-6"
            >
              <div className="flex-shrink-0 p-3 bg-white rounded-lg border border-gray-200">
                <step.icon className="h-7 w-7 text-gray-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;