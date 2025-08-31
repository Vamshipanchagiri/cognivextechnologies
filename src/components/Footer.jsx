import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import Logo from '@/components/Logo';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSocialClick = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: "You can provide your social media links for me to add them.",
    });
  };

  const handleCompanyLinkClick = (e, sectionId) => {
    e.preventDefault();
    const path = `/#${sectionId}`;
    if (location.pathname === '/') {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };
  
  const services = [
    { id: 'web-development', title: 'Web Development' },
    { id: 'mobile-app-development', title: 'Mobile App Development' },
    { id: 'cloud-solutions', title: 'Cloud Solutions' },
    { id: 'ai-data-analytics', title: 'AI & Data Analytics' },
    { id: 'cybersecurity', title: 'Cybersecurity' },
    { id: 'software-consulting', title: 'Software Consulting' },
  ];

  const companyLinks = [
    { name: 'About Us', sectionId: 'about' },
    { name: 'Why Choose Us', sectionId: 'why-us' },
    { name: 'Contact', sectionId: 'contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Github, href: "#" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <Logo className="h-10 w-10 text-white bg-black rounded-full p-2" />
              <span className="text-2xl font-bold text-gradient tracking-tight font-company-name">Cognivex Technologies</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Leading software development company delivering innovative solutions for businesses worldwide. 
              We transform ideas into powerful digital experiences.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@cognivextechnologies.in" className="text-sm hover:text-gray-900">info@cognivextechnologies.in</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">123 Tech Street, Innovation City, IN</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold text-gray-900 mb-4 block">Services</span>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/services/${service.id}`}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-sm font-semibold text-gray-900 mb-4 block">Company</span>
            <ul className="space-y-2">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <a 
                    href={`#${item.sectionId}`}
                    onClick={(e) => handleCompanyLinkClick(e, item.sectionId)}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2025 Cognivex Technologies. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  onClick={handleSocialClick}
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;