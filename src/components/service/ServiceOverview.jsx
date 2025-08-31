import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServiceOverview = ({ longDescription, title, onContactClick }) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {longDescription}
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Key Benefits:</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Scalable and future-proof solutions
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Expert team with proven experience
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Agile development methodology
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Ongoing support and maintenance
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 subtle-shadow"
          >
            <img  class="w-full h-64 object-cover rounded-lg mb-6" alt={`${title} illustration`} src="https://images.unsplash.com/photo-1685773375066-2744f8a96c98" />
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-4">Let's discuss your project requirements</p>
              <Button 
                onClick={onContactClick}
                className="bg-gray-900 hover:bg-gray-800 text-white"
              >
                Contact Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;