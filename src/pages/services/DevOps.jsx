import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { GitBranch, Zap, Settings, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const DevOps = () => {
  const services = [
    {
      icon: GitBranch,
      title: 'CI/CD Pipeline Setup',
      description: 'Automated build, test, and deployment pipelines for faster and more reliable software delivery.',
      features: ['Automated Testing', 'Code Quality Gates', 'Deployment Automation', 'Release Management']
    },
    {
      icon: Settings,
      title: 'Infrastructure as Code',
      description: 'Manage and provision infrastructure through code for consistency and scalability.',
      features: ['Terraform', 'CloudFormation', 'Ansible', 'Configuration Management']
    },
    {
      icon: Zap,
      title: 'Container Orchestration',
      description: 'Docker and Kubernetes solutions for scalable, portable application deployment.',
      features: ['Docker Containerization', 'Kubernetes Clusters', 'Service Mesh', 'Auto-scaling']
    },
    {
      icon: TrendingUp,
      title: 'Monitoring & Analytics',
      description: 'Comprehensive monitoring, logging, and analytics for optimal system performance.',
      features: ['Application Monitoring', 'Log Aggregation', 'Performance Analytics', 'Alerting Systems']
    }
  ];

  const tools = [
    {
      category: 'CI/CD Tools',
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure DevOps', 'CircleCI', 'TeamCity']
    },
    {
      category: 'Infrastructure',
      technologies: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi', 'Chef', 'Puppet']
    },
    {
      category: 'Containerization',
      technologies: ['Docker', 'Kubernetes', 'OpenShift', 'Helm', 'Istio', 'Docker Swarm']
    },
    {
      category: 'Monitoring',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'New Relic', 'Splunk']
    },
    {
      category: 'Cloud Platforms',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean', 'Heroku', 'Vercel']
    },
    {
      category: 'Version Control',
      technologies: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Azure Repos', 'SVN']
    }
  ];

  const benefits = [
    {
      title: 'Faster Time to Market',
      description: 'Reduce deployment time from weeks to minutes with automated pipelines',
      metric: '90% faster deployments'
    },
    {
      title: 'Improved Quality',
      description: 'Automated testing and quality gates ensure higher code quality',
      metric: '75% fewer bugs in production'
    },
    {
      title: 'Enhanced Reliability',
      description: 'Consistent environments and automated processes reduce human error',
      metric: '99.9% uptime achieved'
    },
    {
      title: 'Cost Optimization',
      description: 'Efficient resource utilization and automated scaling reduce costs',
      metric: '40% infrastructure cost savings'
    },
    {
      title: 'Better Collaboration',
      description: 'Unified tools and processes improve team collaboration',
      metric: '50% improvement in team productivity'
    },
    {
      title: 'Scalability',
      description: 'Auto-scaling and container orchestration handle traffic spikes',
      metric: 'Handle 10x traffic increases'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Evaluate current development and deployment processes to identify improvement opportunities.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Design a comprehensive DevOps strategy aligned with business objectives and technical requirements.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Set up CI/CD pipelines, infrastructure automation, and monitoring systems.'
    },
    {
      step: '04',
      title: 'Integration',
      description: 'Integrate DevOps tools with existing systems and train teams on new processes.'
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Continuously monitor and optimize processes for better performance and efficiency.'
    }
  ];

  const caseStudies = [
    {
      company: 'E-commerce Platform',
      challenge: 'Manual deployments taking 4+ hours with frequent rollbacks',
      solution: 'Implemented automated CI/CD pipeline with blue-green deployments',
      result: 'Reduced deployment time to 15 minutes with zero-downtime deployments',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'AWS']
    },
    {
      company: 'Financial Services',
      challenge: 'Inconsistent environments causing production issues',
      solution: 'Infrastructure as Code with automated environment provisioning',
      result: '95% reduction in environment-related issues',
      technologies: ['Terraform', 'Ansible', 'Azure', 'Prometheus']
    },
    {
      company: 'Healthcare SaaS',
      challenge: 'Scaling issues during peak usage periods',
      solution: 'Container orchestration with auto-scaling capabilities',
      result: 'Seamless handling of 500% traffic increases',
      technologies: ['Kubernetes', 'Docker', 'Grafana', 'GCP']
    }
  ];

  return (
    <>
      <Helmet>
        <title>DevOps Services - CI/CD, Infrastructure Automation | Cognivex Technologies</title>
        <meta name="description" content="Professional DevOps services including CI/CD pipelines, infrastructure as code, container orchestration, and monitoring. Accelerate your software delivery." />
        <meta property="og:title" content="DevOps Services - CI/CD, Infrastructure Automation | Cognivex Technologies" />
        <meta property="og:description" content="Professional DevOps services including CI/CD pipelines, infrastructure as code, container orchestration, and monitoring. Accelerate your software delivery." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-2xl mx-auto mb-6">
              <GitBranch className="w-10 h-10 text-indigo-600" />
            </div>
            <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
              DevOps & Automation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Accelerate Development with
              <span className="gradient-text block">Modern DevOps</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Streamline your development lifecycle with automated CI/CD pipelines, 
              infrastructure as code, and comprehensive monitoring solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Transform Your Workflow
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="btn-outline">
                DevOps Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our DevOps Services"
            title="Complete DevOps Solutions"
            description="From CI/CD pipelines to infrastructure automation, we provide end-to-end DevOps services."
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:bg-indigo-50 transition-colors"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-lg mb-6">
                  <service.icon className="w-8 h-8 text-indigo-600" />
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

      {/* Tools & Technologies */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Tools & Technologies"
            title="DevOps Technology Stack"
            description="We leverage industry-leading tools and technologies to build robust DevOps solutions."
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">{tool.category}</h3>
                <div className="space-y-2">
                  {tool.technologies.map((tech, idx) => (
                    <span key={idx} className="inline-block bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full mr-2 mb-2">
                      {tech}
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
          <SectionTitle
            subtitle="Benefits"
            title="DevOps Transformation Impact"
            description="See the measurable benefits that DevOps implementation brings to your organization."
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-indigo-50 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block">
                  {benefit.metric}
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
            title="DevOps Implementation Methodology"
            description="Our proven approach ensures successful DevOps transformation with minimal disruption."
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
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Success Stories"
            title="DevOps Transformation Results"
            description="Real-world examples of how our DevOps solutions have transformed businesses."
            className="mb-16"
          />
          
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-indigo-600 mb-2">{study.company}</h3>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Result:</h4>
                    <p className="text-green-600 font-medium text-sm">{study.result}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {study.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Culture */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle
                subtitle="DevOps Culture"
                title="Beyond Tools and Technology"
                description="DevOps is not just about tools—it's about creating a culture of collaboration, automation, and continuous improvement."
                centered={false}
                className="mb-8"
              />
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Collaboration</h4>
                    <p className="text-gray-600 text-sm">Breaking down silos between development and operations teams</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Automation</h4>
                    <p className="text-gray-600 text-sm">Automating repetitive tasks to focus on value-added activities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Continuous Improvement</h4>
                    <p className="text-gray-600 text-sm">Regular feedback loops and iterative improvements</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img  className="w-full h-auto rounded-2xl shadow-xl" alt="DevOps collaboration" src="https://images.unsplash.com/photo-1552664730-d307ca884978" />
              <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">10x</div>
                <div className="text-sm">Faster Deployments</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Accelerate Your Development?
            </h2>
            <p className="text-xl text-indigo-100">
              Transform your development workflow with our comprehensive DevOps solutions. 
              Get faster deployments, better quality, and improved team collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Start DevOps Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center justify-center"
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

export default DevOps;