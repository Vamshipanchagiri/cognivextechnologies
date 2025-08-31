import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ServiceFeatures = ({ title, features }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive {title.toLowerCase()} services tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 hover-lift subtle-shadow"
            >
              <CheckCircle className="h-6 w-6 text-green-500 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">{feature}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;