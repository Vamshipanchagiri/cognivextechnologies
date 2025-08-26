import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Code, Smartphone, Globe, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const WebDevelopment = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Web Applications',
      description: 'Tailored web applications built with modern frameworks and best practices for optimal performance.',
      features: ['React & Angular Development', 'Node.js Backend', 'Database Integration', 'API Development']
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first responsive designs that provide excellent user experience across all devices.',
      features: ['Mobile Optimization', 'Cross-browser Compatibility', 'Touch-friendly Interfaces', 'Performance Optimization']
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with secure payment integration and inventory management.',
      features: ['Shopping Cart Development', 'Payment Gateway Integration', 'Inventory Management', 'Order Processing']
    },
    {
      icon: Zap,
      title: 'Progressive Web Apps',
      description: 'Fast, reliable web applications that work offline and provide native app-like experiences.',
      features: ['Offline Functionality', 'Push Notifications', 'App-like Experience', 'Fast Loading']
    }
  ];

  const technologies = [
    {
      category: 'Frontend',
      tools: ['React', 'Angular', 'Vue.js', 'TypeScript', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      tools: ['Node.js', 'Express.js', 'Python', 'Django', 'PHP', 'Laravel', 'Java', 'Spring Boot']
    },
    {
      category: 'Databases',
      tools: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'DynamoDB']
    },
    {
      category: 'Tools & Platforms',
      tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Netlify', 'Webpack', 'Vite', 'Jest']
    }
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      industry: 'Retail',
      description: 'Built a scalable e-commerce platform handling 10,000+ daily transactions with real-time inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: ['Multi-vendor Support', 'Real-time Analytics', 'Mobile App', 'Payment Integration'],
      result: '300% increase in online sales'
    },
    {
      title: 'Healthcare Portal',
      industry: 'Healthcare',
      description: 'Developed a HIPAA-compliant patient portal with telemedicine capabilities and appointment scheduling.',
      technologies: ['Angular', 'Python', 'PostgreSQL', 'WebRTC'],
      features: ['Video Consultations', 'Secure Messaging', 'Appointment Booking', 'Medical Records'],
      result: '50% reduction in administrative overhead'
    },
    {
      title: 'Financial Dashboard',
      industry: 'Finance',
      description: 'Created a real-time financial analytics dashboard with advanced reporting and data visualization.',
      technologies: ['Vue.js', 'Express.js', 'MySQL', 'Chart.js'],
      features: ['Real-time Data', 'Custom Reports', 'Data Export', 'Role-based Access'],
      result: '40% faster decision making'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding requirements, user needs, and technical specifications for your project.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes, mockups, and interactive prototypes for user validation.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building the application using agile methodology with regular progress updates.'
    },
    {
      step: '04',
      title: 'Testing & QA',
      description: 'Comprehensive testing including functionality, performance, and security validation.'
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'Launching the application and providing ongoing maintenance and support.'
    }
  ];

  const benefits = [
    'Faster time-to-market with agile development',
    'Scalable architecture for future growth',
    'SEO-optimized for better search rankings',
    'Cross-platform compatibility',
    'Secure coding practices and data protection',
    'Ongoing maintenance and support'
  ];

  return (
    <>
      <Helmet>
        <title>Web Development Services - Custom Web Applications | Cognivex Technologies</title>
        <meta name="description" content="Professional web development services including custom web applications, e-commerce solutions, and progressive web apps. Built with React, Angular, and modern technologies." />
        <meta property="og:title" content="Web Development Services - Custom Web Applications | Cognivex Technologies" />
        <meta property="og:description" content="Professional web development services including custom web applications, e-commerce solutions, and progressive web apps. Built with React, Angular, and modern technologies." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-2xl mx-auto mb-6">
              <Code className="w-10 h-10 text-green-600" />
            </div>
            <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Web Development
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Modern Web Applications for
              <span className="gradient-text block">Digital Success</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Create powerful, scalable web applications that engage users and drive business growth 
              with our expert development team and cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="btn-outline">
                View Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our Web Development Services"
            title="Comprehensive Web Solutions"
            description="From simple websites to complex web applications, we deliver solutions that meet your business objectives."
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:bg-green-50 transition-colors"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-6">
                  <service.icon className="w-8 h-8 text-green-600" />
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

      {/* Technologies */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Technologies & Tools"
            title="Modern Development Stack"
            description="We use the latest technologies and frameworks to build robust, scalable web applications."
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.tools.map((tool, idx) => (
                    <span key={idx} className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2 mb-2">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Featured Projects"
            title="Our Work in Action"
            description="Explore some of our recent web development projects and their impact on business success."
            className="mb-16"
          />
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full mr-3">
                        {project.industry}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="text-green-600 font-semibold">{project.result}</div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our Process"
            title="Development Methodology"
            description="Our proven development process ensures quality delivery and client satisfaction."
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle
                subtitle="Benefits"
                title="Why Choose Our Web Development"
                description="Our web development services deliver measurable business value and exceptional user experiences."
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
              <img  className="w-full h-auto rounded-2xl shadow-xl" alt="Web development" src="https://images.unsplash.com/photo-1627398242454-45a1465c2479" />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Build Your Web Application?
            </h2>
            <p className="text-xl text-green-100">
              Let's discuss your project requirements and create a web solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
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

export default WebDevelopment;