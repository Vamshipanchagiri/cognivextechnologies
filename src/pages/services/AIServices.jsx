import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Brain, Bot, Eye, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const AIServices = () => {
  const services = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Custom ML models and algorithms to solve complex business problems and automate decision-making.',
      features: ['Predictive Analytics', 'Classification Models', 'Recommendation Systems', 'Anomaly Detection']
    },
    {
      icon: Bot,
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and conversational AI.',
      features: ['Chatbots & Virtual Assistants', 'Text Analytics', 'Language Translation', 'Document Processing']
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection, recognition, and automated inspection.',
      features: ['Object Detection', 'Facial Recognition', 'Quality Inspection', 'Medical Imaging']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Data-driven insights and forecasting to help businesses make informed strategic decisions.',
      features: ['Sales Forecasting', 'Risk Assessment', 'Customer Behavior Analysis', 'Market Trend Prediction']
    }
  ];

  const technologies = [
    {
      category: 'Machine Learning Frameworks',
      tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'XGBoost', 'LightGBM']
    },
    {
      category: 'Cloud AI Platforms',
      tools: ['AWS SageMaker', 'Azure ML', 'Google AI Platform', 'IBM Watson', 'Databricks', 'MLflow']
    },
    {
      category: 'Programming Languages',
      tools: ['Python', 'R', 'Java', 'Scala', 'SQL', 'JavaScript']
    },
    {
      category: 'Data Processing',
      tools: ['Apache Spark', 'Pandas', 'NumPy', 'Apache Kafka', 'Elasticsearch', 'MongoDB']
    }
  ];

  const useCases = [
    {
      industry: 'Retail',
      application: 'Personalized Recommendation Engine',
      description: 'Implemented ML-powered recommendation system that increased sales by 25% through personalized product suggestions.',
      technologies: ['Collaborative Filtering', 'Deep Learning', 'Real-time Processing']
    },
    {
      industry: 'Healthcare',
      application: 'Medical Image Analysis',
      description: 'Developed computer vision system for early disease detection with 95% accuracy in diagnostic imaging.',
      technologies: ['Convolutional Neural Networks', 'Transfer Learning', 'Medical Imaging APIs']
    },
    {
      industry: 'Finance',
      application: 'Fraud Detection System',
      description: 'Created real-time fraud detection system that reduced false positives by 40% while maintaining high security.',
      technologies: ['Anomaly Detection', 'Ensemble Methods', 'Stream Processing']
    },
    {
      industry: 'Manufacturing',
      application: 'Predictive Maintenance',
      description: 'Implemented IoT-based predictive maintenance system that reduced equipment downtime by 30%.',
      technologies: ['Time Series Analysis', 'IoT Integration', 'Predictive Modeling']
    }
  ];

  const benefits = [
    'Automate complex decision-making processes',
    'Improve operational efficiency by up to 50%',
    'Reduce manual errors and increase accuracy',
    'Gain actionable insights from data',
    'Enhance customer experience and satisfaction',
    'Scale intelligent solutions across your organization'
  ];

  const process = [
    {
      step: '01',
      title: 'Data Assessment',
      description: 'Analyze your data quality, volume, and structure to determine AI readiness and opportunities.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a comprehensive AI strategy aligned with your business objectives and technical requirements.'
    },
    {
      step: '03',
      title: 'Model Development',
      description: 'Design, train, and validate custom AI models using state-of-the-art algorithms and techniques.'
    },
    {
      step: '04',
      title: 'Integration & Deployment',
      description: 'Seamlessly integrate AI solutions into your existing systems with minimal disruption.'
    },
    {
      step: '05',
      title: 'Monitoring & Optimization',
      description: 'Continuously monitor model performance and optimize for better accuracy and efficiency.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI & Machine Learning Services - Custom AI Solutions | Cognivex Technologies</title>
        <meta name="description" content="Advanced AI and machine learning services including custom ML models, NLP, computer vision, and predictive analytics. Transform your business with intelligent automation." />
        <meta property="og:title" content="AI & Machine Learning Services - Custom AI Solutions | Cognivex Technologies" />
        <meta property="og:description" content="Advanced AI and machine learning services including custom ML models, NLP, computer vision, and predictive analytics. Transform your business with intelligent automation." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center w-20 h-20 bg-purple-100 rounded-2xl mx-auto mb-6">
              <Brain className="w-10 h-10 text-purple-600" />
            </div>
            <span className="inline-block text-purple-600 font-semibold text-sm uppercase tracking-wider mb-4">
              AI & Machine Learning
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Intelligent Solutions for
              <span className="gradient-text block">Tomorrow's Challenges</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Harness the power of artificial intelligence and machine learning to automate processes, 
              gain insights, and create competitive advantages for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Start AI Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="btn-outline">
                View AI Demos
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our AI Services"
            title="Comprehensive AI Solutions"
            description="From machine learning to computer vision, we provide end-to-end AI services tailored to your industry needs."
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:bg-purple-50 transition-colors"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-lg mb-6">
                  <service.icon className="w-8 h-8 text-purple-600" />
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
            title="Cutting-Edge AI Stack"
            description="We leverage the latest AI technologies and frameworks to deliver robust, scalable solutions."
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
                    <span key={idx} className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full mr-2 mb-2">
                      {tool}
                    </span>
                  ))}
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
            title="AI in Action"
            description="Real-world applications of our AI solutions across different industries and use cases."
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full mr-3">
                    {useCase.industry}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.application}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {useCase.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
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
            title="AI Development Methodology"
            description="Our proven approach ensures successful AI implementation from concept to deployment."
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
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
                title="Why Choose Our AI Services"
                description="Our AI solutions deliver measurable business value and competitive advantages."
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
              <img  className="w-full h-auto rounded-2xl shadow-xl" alt="AI and machine learning" src="https://images.unsplash.com/photo-1677442136019-21780ecad995" />
              <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm">Accuracy Rate</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Embrace AI?
            </h2>
            <p className="text-xl text-purple-100">
              Let's explore how artificial intelligence can transform your business processes 
              and unlock new opportunities for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Schedule AI Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AIServices;