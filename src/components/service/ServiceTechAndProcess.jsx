import React from 'react';
import { motion } from 'framer-motion';

const ServiceTechAndProcess = ({ technologies, process }) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies We Use</h2>
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="bg-gray-50 p-4 text-center hover-lift subtle-shadow"
                >
                  <span className="font-medium text-gray-900">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Process</h2>
            <div className="space-y-4">
              {process.map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTechAndProcess;