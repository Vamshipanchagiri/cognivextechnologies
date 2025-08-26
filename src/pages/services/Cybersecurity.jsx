import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Shield, Lock, Eye, AlertTriangle, ArrowRight, CheckCircle } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const Cybersecurity = () => {
  const services = [
    {
      icon: Shield,
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of your current security posture with detailed vulnerability analysis.',
      features: ['Vulnerability Scanning', 'Risk Assessment', 'Security Audits', 'Compliance Review']
    },
    {
      icon: Eye,
      title: 'Threat Detection',
      description: 'Advanced monitoring and detection systems to identify and respond to security threats in real-time.',
      features: ['24/7 Monitoring', 'Intrusion Detection', 'Behavioral Analysis', 'Incident Response']
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Robust data encryption and protection strategies to safeguard sensitive information.',
      features: ['Data Encryption', 'Access Control', 'Data Loss Prevention', 'Backup Security']
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'Rapid response and recovery services to minimize damage from security incidents.',
      features: ['Emergency Response', 'Forensic Analysis', 'Recovery Planning', 'Post-incident Review']
    }
  ];

  const threats = [
    {
      name: 'Malware & Ransomware',
      description: 'Protection against malicious software and ransomware attacks',
      impact: 'Data encryption, system lockdown, financial loss'
    },
    {
      name: 'Phishing Attacks',
      description: 'Defense against social engineering and credential theft',
      impact: 'Identity theft, unauthorized access, data breaches'
    },
    {
      name: 'DDoS Attacks',
      description: 'Mitigation of distributed denial-of-service attacks',
      impact: 'Service disruption, revenue loss, reputation damage'
    },
    {
      name: 'Insider Threats',
      description: 'Detection and prevention of internal security risks',
      impact: 'Data theft, sabotage, compliance violations'
    },
    {
      name: 'Zero-Day Exploits',
      description: 'Protection against unknown vulnerabilities',
      impact: 'System compromise, data exposure, business disruption'
    },
    {
      name: 'Supply Chain Attacks',
      description: 'Security for third-party integrations and vendors',
      impact: 'Widespread compromise, trust erosion, operational impact'
    }
  ];

  const compliance = [
    {
      standard: 'GDPR',
      description: 'General Data Protection Regulation compliance for EU data protection',
      requirements: ['Data Privacy', 'Consent Management', 'Right to be Forgotten', 'Data Portability']
    },
    {
      standard: 'HIPAA',
      description: 'Healthcare data protection and privacy compliance',
      requirements: ['PHI Protection', 'Access Controls', 'Audit Trails', 'Risk Assessments']
    },
    {
      standard: 'SOC 2',
      description: 'Service Organization Control 2 for service providers',
      requirements: ['Security Controls', 'Availability', 'Processing Integrity', 'Confidentiality']
    },
    {
      standard: 'ISO 27001',
      description: 'International standard for information security management',
      requirements: ['ISMS Implementation', 'Risk Management', 'Continuous Improvement', 'Documentation']
    }
  ];

  const solutions = [
    {
      category: 'Network Security',
      tools: ['Firewalls', 'IDS/IPS', 'VPN', 'Network Segmentation', 'WAF', 'DDoS Protection']
    },
    {
      category: 'Endpoint Security',
      tools: ['Antivirus/EDR', 'Device Management', 'Patch Management', 'Application Control', 'USB Security']
    },
    {
      category: 'Identity & Access',
      tools: ['Multi-factor Authentication', 'Single Sign-On', 'Privileged Access Management', 'Identity Governance']
    },
    {
      category: 'Security Monitoring',
      tools: ['SIEM', 'Log Management', 'Threat Intelligence', 'Security Analytics', 'Incident Response']
    }
  ];

  const benefits = [
    'Protect sensitive data and intellectual property',
    'Ensure regulatory compliance and avoid penalties',
    'Maintain business continuity and reputation',
    'Reduce risk of financial losses from breaches',
    'Build customer trust and confidence',
    'Enable secure digital transformation'
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Services - Protect Your Business | Cognivex Technologies</title>
        <meta name="description" content="Comprehensive cybersecurity services including threat detection, data protection, compliance management, and incident response. Secure your business with expert solutions." />
        <meta property="og:title" content="Cybersecurity Services - Protect Your Business | Cognivex Technologies" />
        <meta property="og:description" content="Comprehensive cybersecurity services including threat detection, data protection, compliance management, and incident response. Secure your business with expert solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center w-20 h-20 bg-red-100 rounded-2xl mx-auto mb-6">
              <Shield className="w-10 h-10 text-red-600" />
            </div>
            <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Cybersecurity
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Security for
              <span className="gradient-text block">Digital Assets</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Protect your business from cyber threats with our advanced security solutions, 
              compliance management, and 24/7 monitoring services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Secure Your Business
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="btn-outline">
                Security Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our Security Services"
            title="Complete Cybersecurity Solutions"
            description="From assessment to incident response, we provide comprehensive security services to protect your business."
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:bg-red-50 transition-colors"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-lg mb-6">
                  <service.icon className="w-8 h-8 text-red-600" />
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

      {/* Threat Landscape */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Threat Landscape"
            title="Common Cyber Threats"
            description="Understanding the threats your business faces is the first step in building effective defenses."
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threats.map((threat, index) => (
              <motion.div
                key={threat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{threat.name}</h3>
                <p className="text-gray-600 mb-4">{threat.description}</p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-red-600 mb-2">Potential Impact:</h4>
                  <p className="text-sm text-gray-600">{threat.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Compliance & Standards"
            title="Regulatory Compliance"
            description="Ensure your business meets industry standards and regulatory requirements with our compliance expertise."
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {compliance.map((comp, index) => (
              <motion.div
                key={comp.standard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="flex items-center mb-4">
                  <span className="bg-red-600 text-white text-lg font-bold px-4 py-2 rounded-lg mr-4">
                    {comp.standard}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{comp.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {comp.requirements.map((req, idx) => (
                      <span key={idx} className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Solutions */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Security Solutions"
            title="Advanced Security Technologies"
            description="We implement cutting-edge security technologies to protect your business from evolving threats."
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">{solution.category}</h3>
                <div className="space-y-2">
                  {solution.tools.map((tool, idx) => (
                    <span key={idx} className="inline-block bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full mr-2 mb-2">
                      {tool}
                    </span>
                  ))}
                </div>
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
                title="Why Invest in Cybersecurity"
                description="Strong cybersecurity is essential for business continuity, compliance, and customer trust."
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
              <img  className="w-full h-auto rounded-2xl shadow-xl" alt="Cybersecurity protection" src="https://images.unsplash.com/photo-1563013544-824ae1b704d3" />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Protection</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Security Statistics"
            title="The Cost of Cyber Threats"
            description="Understanding the financial and operational impact of cyber threats on businesses."
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: '$4.45M', label: 'Average cost of a data breach', source: 'IBM 2023' },
              { stat: '277 days', label: 'Average time to identify and contain a breach', source: 'IBM 2023' },
              { stat: '43%', label: 'Of cyber attacks target small businesses', source: 'Verizon 2023' },
              { stat: '95%', label: 'Of successful attacks are due to human error', source: 'Cybint 2023' }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="text-3xl font-bold text-red-600 mb-2">{item.stat}</div>
                <div className="text-gray-900 font-medium mb-2">{item.label}</div>
                <div className="text-sm text-gray-500">{item.source}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Don't Wait for a Security Incident
            </h2>
            <p className="text-xl text-red-100">
              Protect your business today with our comprehensive cybersecurity solutions. 
              Get a free security assessment and consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors inline-flex items-center justify-center"
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

export default Cybersecurity;