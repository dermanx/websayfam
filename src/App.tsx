import React from 'react';
import Hero from './components/Hero';
import ForensicSoftware from './components/ForensicSoftware';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Hero />
      <ForensicSoftware />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;