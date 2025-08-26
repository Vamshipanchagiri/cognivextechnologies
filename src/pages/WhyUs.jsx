import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Lightbulb, 
  Target,
  TrendingUp,
  Heart,
  Star,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const WhyUs = () => {
  const { toast } = useToast();

  const reasons = [
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Over 500+ successful projects delivered with 99% client satisfaction rate",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with 10+ years of experience in cutting-edge technologies",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Agile methodology ensures on-time project completion without compromising quality",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security measures and compliance with industry standards",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description: "Leveraging latest technologies and best practices to deliver future-ready solutions",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Target,
      title: "Results Focused",
      description: "ROI-driven approach with measurable outcomes and continuous optimization",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Enterprise Clients", icon: Users },
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "99%", label: "Client Satisfaction", icon: Heart }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CTO, TechCorp India",
      content: "Cognivex transformed our legacy systems with their AI-powered solutions. The results exceeded our expectations.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      position: "VP Engineering, DataFlow Solutions",
      content: "Their cloud migration expertise saved us 40% in infrastructure costs while improving performance significantly.",
      rating: 5
    },
    {
      name: "Arjun Reddy",
      position: "Founder, StartupHub",
      content: "The mobile app they developed for us has over 1M downloads. Exceptional quality and support throughout.",
      rating: 5
    }
  ];

  const handleGetStarted = () => {
    toast({
      title: "🚧 Contact form isn't implemented yet—but don't worry!",
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
        <title>Why Choose Us - Cognivex Technologies</title>
        <meta name="description" content="Discover why leading enterprises choose Cognivex Technologies. Proven excellence, expert team, timely delivery, and innovation-driven solutions with 99% client satisfaction." />
        <meta property="og:title" content="Why Choose Us - Cognivex Technologies" />
        <meta property="og:description" content="Discover why leading enterprises choose Cognivex Technologies. Proven excellence, expert team, timely delivery, and innovation-driven solutions with 99% client satisfaction." />
      </Helmet>

      <div id="why-us" className="min-h-screen pt-24 pb-16 wave-bg">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-4"
        >
          <h1 className="text-6xl font-bold gradient-text mb-6">Why Choose Us</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover what makes Cognivex Technologies the preferred partner for digital transformation
          </p>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-20 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card rounded-2xl p-8 text-center"
                >
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Reasons Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 px-4"
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
                What Sets Us Apart
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our commitment to excellence and innovation drives everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  viewport={{ once: true }}
                  className="service-card-3d glass-card rounded-2xl p-8 group"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:gradient-text transition-all duration-300">
                    {reason.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 px-4"
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
                Client Success Stories
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Hear what our clients say about their experience working with us
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-8"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-slate-600 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div>
                    <div className="font-bold text-slate-800">{testimonial.name}</div>
                    <div className="text-slate-500 text-sm">{testimonial.position}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold gradient-text mb-6">
                Our Proven Process
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                A systematic approach that ensures project success from concept to deployment
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", desc: "Understanding your requirements and goals" },
                { step: "02", title: "Strategy", desc: "Crafting the perfect solution architecture" },
                { step: "03", title: "Development", desc: "Building with agile methodology and best practices" },
                { step: "04", title: "Deployment", desc: "Seamless launch with ongoing support" }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{process.title}</h3>
                  <p className="text-slate-600">{process.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card rounded-3xl p-12">
              <h2 className="text-4xl font-bold gradient-text mb-6">
                Ready to Experience the Difference?
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Join the ranks of successful enterprises who trust Cognivex Technologies
              </p>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="magnetic-hover bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg rounded-full shadow-lg"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Get Started Today
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default WhyUs;