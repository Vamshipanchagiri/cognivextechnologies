import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Globe, Smartphone, Cloud, Brain, Lock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    e.target.reset();
  };

  const services = [
    { id: 'web-development', title: 'Web Development' },
    { id: 'mobile-app-development', title: 'Mobile App Development' },
    { id: 'cloud-solutions', title: 'Cloud Solutions' },
    { id: 'ai-data-analytics', title: 'AI & Data Analytics' },
    { id: 'cybersecurity', title: 'Cybersecurity' },
    { id: 'software-consulting', title: 'Software Consulting' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Have a project in mind? We'd love to hear from you.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white p-8 border border-gray-200 rounded-lg"
          >
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Your Name" required className="bg-gray-50" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" required className="bg-gray-50" />
              </div>
              <div>
                <Label htmlFor="services">Service of Interest</Label>
                <Select>
                  <SelectTrigger id="services" className="bg-gray-50">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map(service => (
                      <SelectItem key={service.id} value={service.id}>{service.title}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" size="lg" className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                Send Message
              </Button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white rounded-lg border border-gray-200">
                <Mail className="h-6 w-6 text-gray-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <a href="mailto:info@cognivextechnologies.in" className="text-gray-600 hover:text-gray-900">info@cognivextechnologies.in</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white rounded-lg border border-gray-200">
                <Phone className="h-6 w-6 text-gray-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;