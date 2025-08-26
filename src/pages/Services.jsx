import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Code, 
  Shield, 
  Database, 
  Smartphone,
  X,
  ArrowRight,
  Zap,
  Cpu,
  Globe,
  Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const { toast } = useToast();

  const services = [
    {
      id: 1,
      title: "Artificial Intelligence & Machine Learning",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      description: "Model development, predictive analytics, NLP, and AI-driven automation.",
      features: [
        "Custom ML Model Development",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI-Powered Automation",
        "Deep Learning Architectures"
      ],
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face"],
      details: "Transform your business with cutting-edge AI solutions. Our team develops custom machine learning models, implements natural language processing systems, and creates intelligent automation workflows that drive efficiency and innovation."
    },
    {
      id: 2,
      title: "Cloud & DevOps Solutions",
      icon: Cloud,
      gradient: "from-blue-500 to-cyan-500",
      description: "Cloud migration, CI/CD pipelines, Kubernetes, Docker orchestration.",
      features: [
        "Cloud Migration Strategy",
        "CI/CD Pipeline Setup",
        "Kubernetes Orchestration",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Security & Compliance"
      ],
      technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
      details: "Accelerate your digital transformation with our comprehensive cloud and DevOps services. We help organizations migrate to the cloud, implement robust CI/CD pipelines, and establish scalable infrastructure that grows with your business."
    },
    {
      id: 3,
      title: "Full-Stack Web & Mobile Development",
      icon: Code,
      gradient: "from-green-500 to-teal-500",
      description: "React, Node.js, Flutter apps, enterprise-grade scalable platforms.",
      features: [
        "Progressive Web Applications",
        "Mobile App Development",
        "API Development & Integration",
        "Database Design & Optimization",
        "Real-time Applications",
        "E-commerce Platforms"
      ],
      technologies: ["React", "Node.js", "Flutter", "MongoDB", "PostgreSQL", "GraphQL"],
      details: "Build powerful, scalable applications that deliver exceptional user experiences. Our full-stack development team creates responsive web applications, native mobile apps, and robust backend systems using the latest technologies."
    },
    {
      id: 4,
      title: "Cybersecurity & Data Protection",
      icon: Shield,
      gradient: "from-red-500 to-orange-500",
      description: "Advanced security audits, penetration testing, and compliance solutions.",
      features: [
        "Security Audits & Assessments",
        "Penetration Testing",
        "Compliance Management",
        "Identity & Access Management",
        "Threat Detection & Response",
        "Security Training Programs"
      ],
      technologies: ["OWASP", "Nessus", "Metasploit", "Wireshark", "Splunk", "CrowdStrike"],
      details: "Protect your digital assets with comprehensive cybersecurity solutions. We provide security audits, implement robust protection measures, and ensure compliance with industry standards to safeguard your business from evolving threats."
    },
    {
      id: 5,
      title: "Data Engineering & Analytics",
      icon: Database,
      gradient: "from-indigo-500 to-purple-500",
      description: "Big data processing, real-time analytics, and business intelligence solutions.",
      features: [
        "Data Pipeline Development",
        "Real-time Analytics",
        "Business Intelligence Dashboards",
        "Data Warehouse Design",
        "ETL/ELT Processes",
        "Data Governance & Quality"
      ],
      technologies: ["Apache Spark", "Kafka", "Elasticsearch", "Tableau", "Power BI", "Snowflake"],
      details: "Unlock the power of your data with advanced engineering and analytics solutions. We build scalable data pipelines, create insightful dashboards, and implement real-time analytics systems that drive data-driven decision making."
    },
    {
      id: 6,
      title: "Enterprise Mobile Solutions",
      icon: Smartphone,
      gradient: "from-yellow-500 to-red-500",
      description: "Native iOS/Android apps, cross-platform solutions, and enterprise mobility.",
      features: [
        "Native Mobile Development",
        "Cross-platform Solutions",
        "Enterprise App Distribution",
        "Mobile Device Management",
        "Offline-first Applications",
        "Push Notification Systems"
      ],
      technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Xamarin", "Ionic"],
      details: "Empower your workforce with powerful mobile solutions. We develop native and cross-platform applications that enhance productivity, streamline operations, and provide seamless user experiences across all devices."
    }
  ];

  const handleLearnMore = (service) => {
    toast({
      title: "🚧 Detailed service information isn't implemented yet—but don't worry!",
      description: "You can request it in your next prompt! 🚀",
    });
  };

  const handleGetQuote = () => {
    toast({
      title: "🚧 Quote request form isn't implemented yet—but don't worry!",
      description: "You can request it in your next prompt! 🚀",
    });
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Our Services - Cognivex Technologies</title>
        <meta name="description" content="Comprehensive IT services including AI/ML, Cloud DevOps, Full-Stack Development, Cybersecurity, Data Engineering, and Mobile Solutions. Transform your business with our expert team." />
        <meta property="og:title" content="Our Services - Cognivex Technologies" />
        <meta property="og:description" content="Comprehensive IT services including AI/ML, Cloud DevOps, Full-Stack Development, Cybersecurity, Data Engineering, and Mobile Solutions. Transform your business with our expert team." />
      </Helmet>

      <div id="services" className="min-h-screen pt-24 pb-16 wave-bg">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-4"
        >
          <h1 className="text-6xl font-bold gradient-text mb-6">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation
          </p>
        </motion.section>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="service-card-3d glass-card rounded-2xl p-8 cursor-pointer group"
                onClick={() => setSelectedService(service)}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold gradient-text mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Let's discuss your project requirements and create a custom solution for your business
              </p>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="magnetic-hover bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg rounded-full shadow-lg"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass-card rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedService.gradient} flex items-center justify-center mr-4`}>
                      <selectedService.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold gradient-text">{selectedService.title}</h2>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedService(null)}
                    className="hover:bg-red-100"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {selectedService.details}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                      <Cpu className="w-5 h-5 mr-2 text-blue-600" />
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-slate-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-purple-600" />
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-slate-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => handleLearnMore(selectedService)}
                    className="magnetic-hover bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full"
                  >
                    <Lock className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                  <Button 
                    onClick={handleGetQuote}
                    variant="outline" 
                    className="magnetic-hover border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Get Quote
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Services;