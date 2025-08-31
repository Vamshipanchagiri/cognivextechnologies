import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { serviceDetailsData } from '@/data/serviceDetailsData';
import ServiceHero from '@/components/service/ServiceHero';
import ServiceOverview from '@/components/service/ServiceOverview';
import ServiceFeatures from '@/components/service/ServiceFeatures';
import ServiceTechAndProcess from '@/components/service/ServiceTechAndProcess';
import ServiceCTA from '@/components/service/ServiceCTA';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = serviceDetailsData[serviceId];

  const handleContactClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-8">The service you are looking for does not exist.</p>
            <Link to="/">
              <Button className="bg-gray-800 hover:bg-gray-700 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{service.title} - Cognivex Technologies</title>
        <meta name="description" content={service.description} />
        <meta property="og:title" content={`${service.title} - Cognivex Technologies`} />
        <meta property="og:description" content={service.description} />
      </Helmet>

      <ServiceHero 
        title={service.title} 
        description={service.description} 
        onContactClick={handleContactClick} 
      />
      
      <ServiceOverview 
        longDescription={service.longDescription} 
        title={service.title}
        onContactClick={handleContactClick}
      />

      <ServiceFeatures 
        title={service.title} 
        features={service.features} 
      />

      <ServiceTechAndProcess 
        technologies={service.technologies} 
        process={service.process} 
      />

      <ServiceCTA 
        title={service.title} 
        onContactClick={handleContactClick} 
      />
    </div>
  );
};

export default ServiceDetailPage;