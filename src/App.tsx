import React from 'react';
import Hero from './components/Hero';
import EmpireMap from './components/EmpireMap';
import Pillars from './components/Pillars';
import Vision from './components/Vision';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Hero />
      <EmpireMap />
      <Pillars />
      <Vision />
      <Footer />
    </div>
  );
}

export default App;