import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      // Navigate to home first, then scroll
      navigate(`/#${sectionId}`);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed w-full bg-white shadow z-50">
      <ul className="flex space-x-6 p-4 justify-center">
        <li>
          <button
            onClick={() => handleNavClick('hero')}
            className="hover:text-gray-800 text-gray-600"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick('about')}
            className="hover:text-gray-800 text-gray-600"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick('services')}
            className="hover:text-gray-800 text-gray-600"
          >
            Services
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick('why-us')}
            className="hover:text-gray-800 text-gray-600"
          >
            Why Us
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick('contact')}
            className="hover:text-gray-800 text-gray-600"
          >
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
