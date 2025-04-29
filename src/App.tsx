import React from 'react';
import Hero from './components/Hero';
import ForensicSoftware from './components/ForensicSoftware';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Hero />
      <ForensicSoftware />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
