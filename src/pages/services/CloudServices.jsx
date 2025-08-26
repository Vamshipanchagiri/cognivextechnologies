import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Cloud, Server, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const CloudServices = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration of your existing infrastructure to cloud platforms with minimal downtime.',
      features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Testing & Validation']
    },
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Complete management of your cloud infrastructure with 24/7 monitoring and optimization.',
      features: ['Resource Optimization', 'Performance Monitoring', 'Automated Scaling', 'Backup & Recovery']
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud assets and ensure compliance.',
      features: ['Identity Management', 'Data Encryption', 'Compliance Auditing', 'Threat Detection']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize your cloud resources for maximum performance and cost efficiency.',
      features: ['Cost Analysis', 'Resource Right-sizing', 'Performance Tuning', 'Automation Setup']
    }
  ];

  const platforms = [
    {
      name: 'Amazon Web Services (AWS)',
      description: 'Comprehensive cloud services with global infrastructure and enterprise-grade security.',
      services: ['EC2', 'S3', 'RDS', 'Lambda', 'CloudFormation', 'VPC']
    },
    {
      name: 'Microsoft Azure',
      description: 'Integrated cloud platform with strong enterprise integration and hybrid capabilities.',
      services: ['Virtual Machines', 'Blob Storage', 'SQL Database', 'Functions', 'Active Directory', 'DevOps']
    },
    {
      name: 'Google Cloud Platform',
      description: 'Advanced cloud platform with cutting-edge AI/ML capabilities and data analytics.',
      services: ['Compute Engine', 'Cloud Storage', 'BigQuery', 'Kubernetes Engine', 'AI Platform', 'Firebase']
    }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      challenge: 'HIPAA-compliant data storage and processing',
      solution: 'Implemented secure cloud infrastructure with encrypted storage and audit trails',
      result: '99.9% uptime with full compliance certification'
    },
    {
      industry: 'E-commerce',
      challenge: 'Handling traffic spikes during sales events',
      solution: 'Auto-scaling infrastructure with load balancing and CDN integration',
      result: '300% traffic increase handled seamlessly'
    },
    {
      industry: 'Finance',
      challenge: 'Real-time transaction processing with high security',
      solution: 'Multi-region deployment with advanced security and monitoring',
      result: 'Sub-second transaction processing with zero security incidents'
    }
  ];

  const benefits = [
    'Reduced IT infrastructure costs by up to 40%',
    'Improved scalability and flexibility',
    'Enhanced security and compliance',
    'Faster deployment and time-to-market',
    '24/7 monitoring and support',
    'Disaster recovery and business continuity'
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - AWS, Azure, Google Cloud | Cognivex Technologies</title>
        <meta name="description" content="Professional cloud services including migration, infrastructure management, and optimization. Expert solutions for AWS, Azure, and Google Cloud platforms." />
        <meta property="og:title" content="Cloud Services - AWS, Azure, Google Cloud | Cognivex Technologies" />
        <meta property="og:description" content="Professional cloud services including migration, infrastructure management, and optimization. Expert solutions for AWS, Azure, and Google Cloud platforms." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mx-auto mb-6">
              <Cloud className="w-10 h-10 text-blue-600" />
            </div>
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Cloud Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Scalable Cloud Solutions for
              <span className="gradient-text block">Modern Businesses</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Transform your infrastructure with our comprehensive cloud services. From migration 
              to optimization, we help you leverage the full power of cloud computing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="btn-outline">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our Cloud Services"
            title="Comprehensive Cloud Solutions"
            description="From strategy to implementation, we provide end-to-end cloud services tailored to your business needs."
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:bg-blue-50 transition-colors"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Cloud Platforms"
            title="Multi-Cloud Expertise"
            description="We work with leading cloud platforms to provide you with the best solutions for your specific needs."
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{platform.name}</h3>
                <p className="text-gray-600 mb-6">{platform.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {platform.services.map((service, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Success Stories"
            title="Real-World Applications"
            description="See how we've helped businesses across different industries leverage cloud technology for success."
            className="mb-16"
          />
          
          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-blue-600 mb-2">{useCase.industry}</h3>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600">{useCase.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600">{useCase.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Result:</h4>
                    <p className="text-green-600 font-medium">{useCase.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle
                subtitle="Benefits"
                title="Why Choose Our Cloud Services"
                description="Our cloud solutions deliver tangible benefits that drive business growth and operational efficiency."
                centered={false}
                className="mb-8"
              />
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img  className="w-full h-auto rounded-2xl shadow-xl" alt="Cloud infrastructure" src="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee" />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">40%</div>
                <div className="text-sm">Cost Reduction</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-blue-100">
              Let's discuss your cloud strategy and create a roadmap for your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CloudServices;