import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Helmet>
          <title>Cognivex Technologies - Leading Software Development Company</title>
          <meta name="description" content="Professional software development services including web development, mobile apps, cloud solutions, AI analytics, cybersecurity, and consulting." />
          <meta property="og:title" content="Cognivex Technologies - Leading Software Development Company" />
          <meta property="og:description" content="Professional software development services including web development, mobile apps, cloud solutions, AI analytics, cybersecurity, and consulting." />
        </Helmet>
        
        <Header />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          </Routes>
        </main>
        
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;