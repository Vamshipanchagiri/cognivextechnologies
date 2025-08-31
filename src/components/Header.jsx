import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleContactClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Why Us', path: '/#why-us' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors">
              <Logo className="h-6 w-6 text-gray-700" />
            </div>
            <span className="text-xl font-bold text-gradient tracking-tight">Cognivex Technologies</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => {
                  if (item.path.includes('#')) {
                    e.preventDefault();
                    const targetElement = document.querySelector(item.path.substring(1));
                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className={`text-sm font-medium transition-colors hover:text-gray-900 ${
                  location.pathname === item.path || 
                  (item.path.includes('#') && location.pathname === '/')
                    ? 'text-gray-900' 
                    : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              onClick={handleContactClick}
              className="bg-gray-800 hover:bg-gray-700 text-white px-6"
            >
              Contact Us
            </Button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={(e) => {
                    if (item.path.includes('#')) {
                      e.preventDefault();
                      const targetElement = document.querySelector(item.path.substring(1));
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                    setIsMenuOpen(false);
                  }}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                onClick={handleContactClick}
                className="bg-gray-800 hover:bg-gray-700 text-white w-full"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;