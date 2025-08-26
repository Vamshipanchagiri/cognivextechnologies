import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Building,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@cognivex.tech",
      subDetails: "We'll respond within 24 hours",
      gradient: "from-primary-blue to-secondary-purple"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "HITEC City, Hyderabad",
      subDetails: "Telangana, India - 500081",
      gradient: "from-accent-cyan to-primary-blue"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday",
      subDetails: "9:00 AM - 6:00 PM IST",
      gradient: "from-secondary-purple to-accent-cyan"
    }
  ];

  const services = [
    "AI & Machine Learning",
    "Cloud & DevOps",
    "Full-Stack Development",
    "Cybersecurity",
    "Data Engineering",
    "Mobile Solutions",
    "Other"
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Contact form submission isn't implemented yet—but don't worry!",
      description: "You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Cognivex Technologies</title>
        <meta name="description" content="Get in touch with Cognivex Technologies. Contact our expert team for AI/ML, Cloud DevOps, Full-Stack Development, and other IT solutions. Located in Hyderabad, India." />
        <meta property="og:title" content="Contact Us - Cognivex Technologies" />
        <meta property="og:description" content="Get in touch with Cognivex Technologies. Contact our expert team for AI/ML, Cloud DevOps, Full-Stack Development, and other IT solutions. Located in Hyderabad, India." />
      </Helmet>

      <div id="contact" className="min-h-screen pt-24 pb-16 wave-bg">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
          <h1 className="text-6xl font-bold gradient-text mb-6">Contact Us</h1>
          <p className="text-xl text-text-light-muted dark:text-text-dark-muted max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="service-card-3d glass-card rounded-2xl p-8 text-center"
                >
                  <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-6`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">{info.title}</h3>
                  <p className="text-lg font-semibold gradient-text mb-2">{info.details}</p>
                  <p className="text-text-light-muted dark:text-text-dark-muted text-sm">{info.subDetails}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card rounded-3xl p-8"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold gradient-text mb-4">Send us a Message</h2>
                  <p className="text-text-light-muted dark:text-text-dark-muted">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-text-light dark:text-text-dark mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg transition-all duration-300 contact-input"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-text-light dark:text-text-dark mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg transition-all duration-300 contact-input"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text-light dark:text-text-dark mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg transition-all duration-300 contact-input"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text-light dark:text-text-dark mb-2">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg transition-all duration-300 contact-input"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text-light dark:text-text-dark mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg transition-all duration-300 contact-input resize-none"
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full magnetic-hover bg-gradient-to-r from-primary-blue to-secondary-purple hover:shadow-lg hover:shadow-primary-blue/30 text-white py-4 text-lg rounded-lg dark:from-accent-cyan dark:to-primary-blue dark:hover:shadow-accent-cyan/30"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="text-2xl font-bold gradient-text mb-6">Why Choose Cognivex?</h3>
                  <div className="space-y-4">
                    {[
                      { icon: MessageCircle, text: "24/7 Support & Communication" },
                      { icon: Building, text: "Enterprise-Grade Solutions" },
                      { icon: Globe, text: "Global Delivery Capabilities" },
                      { icon: Clock, text: "On-Time Project Delivery" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-secondary-purple rounded-lg flex items-center justify-center mr-4 dark:from-accent-cyan dark:to-primary-blue">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-text-light dark:text-text-dark font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Contact;