import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import ForensicSoftware from './components/ForensicSoftware';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <Services />
      <ForensicSoftware />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}