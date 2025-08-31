import React from 'react';
import { motion } from 'framer-motion';
import { Award, ThumbsUp, Eye, Sparkles } from 'lucide-react';

const WhyChooseUsSection = () => {
  const whyChooseUsItems = [
    {
      icon: Award,
      title: 'Proven Experience',
      description: 'With years of experience and a portfolio of successful projects, we have a track record of delivering excellence.'
    },
    {
      icon: ThumbsUp,
      title: 'Uncompromising Quality',
      description: 'We adhere to the highest standards of quality, ensuring that every solution we deliver is robust, scalable, and secure.'
    },
    {
      icon: Eye,
      title: 'Full Transparency',
      description: 'Our process is built on open communication and collaboration, keeping you informed and involved at every stage.'
    },
    {
      icon: Sparkles,
      title: 'Continuous Innovation',
      description: 'We stay at the forefront of technology, leveraging the latest tools and trends to create future-proof solutions.'
    }
  ];

  return (
    <section id="why-us" className="py-20" style={{ backgroundColor: '#F2EFEA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Our commitment to excellence sets us apart from the competition.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {whyChooseUsItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex items-start space-x-6"
            >
              <div className="flex-shrink-0 p-4 bg-white rounded-lg border border-gray-200">
                <item.icon className="h-8 w-8 text-gray-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;