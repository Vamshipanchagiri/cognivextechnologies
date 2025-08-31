import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from '@/components/Logo';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Navigate to homepage when clicking logo or company name
  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompanyLinkClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const handleGetQuoteClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
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
    { name: 'Home', sectionId: '' }, // Home link
    { name: 'About Us', sectionId: 'about' },
    { name: 'Why Choose Us', sectionId: 'why-us' },
    { name: 'Contact', sectionId: 'contact' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-4 cursor-pointer" onClick={handleLogoClick}>
              <Logo className="h-10 w-10 text-white bg-black rounded-full p-2" />
              <span className="text-2xl font-bold text-gradient tracking-tight font-company-name">
                Cognivex Technologies
              </span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Leading software development company delivering innovative solutions for businesses worldwide. 
              We transform ideas into powerful digital experiences.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@cognivextechnologies.in" className="text-sm hover:text-gray-900">
                  info@cognivextechnologies.in
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91-9392286613</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">
                  12/B, Cyber Heights, Road No. 10, Hi-Tech City, Hyderabad, Telangana, India
                </span>
              </div>
            </div>
            <button
              onClick={handleGetQuoteClick}
              className="mt-4 px-4 py-2 bg-gray-900 text-white text-sm rounded hover:bg-gray-800 transition"
            >
              Get Quote
            </button>
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
                    onClick={(e) => item.name === 'Home' ? handleLogoClick() : handleCompanyLinkClick(e, item.sectionId)}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © 2020 Cognivex Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
