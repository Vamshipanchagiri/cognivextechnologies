import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Cognivex Technologies - Leading IT Solutions in Hyderabad</title>
        <meta name="description" content="Cognivex Technologies provides cutting-edge IT solutions and services in Hyderabad. Expert software development, consulting, and technology solutions for businesses." />
        <meta property="og:title" content="Cognivex Technologies - Leading IT Solutions in Hyderabad" />
        <meta property="og:description" content="Cognivex Technologies provides cutting-edge IT solutions and services in Hyderabad. Expert software development, consulting, and technology solutions for businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100">
        <Navbar />
        <Hero />
        <Services />
        <WhyUs />
        <Clients />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;