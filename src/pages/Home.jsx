import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Home = () => {
  const [currentText, setCurrentText] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const { toast } = useToast();

  const morphingTexts = useMemo(() => [
    "Innovating Tomorrow",
    "Empowering Enterprises", 
    "Cognivex Technologies"
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % morphingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [morphingTexts.length]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Cognivex Technologies - Innovating Tomorrow's Enterprise Solutions</title>
        <meta name="description" content="Leading IT solutions company in Hyderabad specializing in AI/ML, Cloud DevOps, and Full-Stack Development. Transform your business with cutting-edge technology." />
        <meta property="og:title" content="Cognivex Technologies - Innovating Tomorrow's Enterprise Solutions" />
        <meta property="og:description" content="Leading IT solutions company in Hyderabad specializing in AI/ML, Cloud DevOps, and Full-Stack Development. Transform your business with cutting-edge technology." />
      </Helmet>

      <div id="home" className="relative min-h-screen overflow-hidden wave-bg">
        <div className="floating-particles">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <motion.section 
          className="relative pt-32 pb-20 px-4"
          style={{ y, opacity, willChange: 'transform, opacity' }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-8xl font-black mb-6 text-morph">
                <motion.span
                  key={currentText}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="gradient-text block"
                >
                  {morphingTexts[currentText]}
                </motion.span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl md:text-2xl text-text-light-muted dark:text-text-dark-muted max-w-4xl mx-auto leading-relaxed"
              >
                Transforming businesses through cutting-edge technology solutions. 
                From AI-powered innovations to cloud-native architectures, we build the future today.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <Button 
                onClick={() => scrollToSection('services')}
                className="magnetic-hover bg-gradient-to-r from-primary-blue to-secondary-purple hover:shadow-lg hover:shadow-primary-blue/30 text-white px-8 py-4 text-lg rounded-full dark:from-accent-cyan dark:to-primary-blue dark:hover:shadow-accent-cyan/30"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {[
                { number: "500+", label: "Projects Delivered", icon: Rocket },
                { number: "50+", label: "Enterprise Clients", icon: Sparkles },
                { number: "99%", label: "Client Satisfaction", icon: Sparkles }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card rounded-2xl p-8 text-center"
                >
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary-blue dark:text-accent-cyan" />
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-text-light-muted dark:text-text-dark-muted font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          className="py-20 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold gradient-text mb-6">
                Powered by Innovation
              </h2>
              <p className="text-xl text-text-light-muted dark:text-text-dark-muted max-w-3xl mx-auto">
                We leverage the latest technologies to deliver exceptional results for our clients
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                'React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes',
                'TensorFlow', 'MongoDB', 'PostgreSQL', 'Redis', 'GraphQL', 'TypeScript'
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-6 text-center transition-all duration-300"
                >
                  <div className="tech-font font-semibold text-text-light dark:text-text-dark">{tech}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="py-20 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-12"
            >
              <h2 className="text-4xl font-bold gradient-text mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-text-light-muted dark:text-text-dark-muted mb-8">
                Let's discuss how we can help you achieve your technology goals
              </p>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="magnetic-hover bg-gradient-to-r from-primary-blue to-secondary-purple hover:shadow-lg hover:shadow-primary-blue/30 text-white px-10 py-4 text-lg rounded-full dark:from-accent-cyan dark:to-primary-blue dark:hover:shadow-accent-cyan/30"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Home;