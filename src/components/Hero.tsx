import React, { useEffect, useState } from 'react';
import { Globe, Building2, TrendingUp, Zap } from 'lucide-react';
import Button from './ui/Button';

const Hero = () => {
  const [currentHub, setCurrentHub] = useState(0);
  
  const globalHubs = [
    { city: 'Dubai', x: '75%', y: '40%', icon: Building2 },
    { city: 'Miami', x: '25%', y: '45%', icon: TrendingUp },
    { city: 'Los Angeles', x: '15%', y: '35%', icon: Zap },
    { city: 'London', x: '50%', y: '25%', icon: Globe },
    { city: 'Singapore', x: '80%', y: '60%', icon: Building2 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHub((prev) => (prev + 1) % globalHubs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-900/5 to-transparent animate-pulse" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Interactive Globe */}
      <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2">
        <div className="relative w-96 h-96">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-800/30 via-black/50 to-slate-900/30 backdrop-blur-sm border border-slate-700/30 animate-glow-pulse" />
          
          {/* Globe Grid Lines */}
          <div className="absolute inset-0 rounded-full border-2 border-slate-600/20" />
          <div className="absolute inset-4 rounded-full border border-slate-600/10" />
          <div className="absolute inset-8 rounded-full border border-slate-600/10" />
          
          {/* Global Hub Markers */}
          {globalHubs.map((hub, index) => (
            <div
              key={index}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-1000 ${
                currentHub === index ? 'scale-125' : 'scale-100'
              }`}
              style={{ left: hub.x, top: hub.y }}
            >
              <div className="relative">
                <div className={`w-6 h-6 rounded-full shadow-lg transition-all duration-1000 ${
                  currentHub === index 
                    ? 'bg-amber-400 shadow-amber-400/50 animate-pulse' 
                    : 'bg-slate-400 shadow-slate-400/30'
                }`} />
                <div className={`absolute inset-0 w-6 h-6 rounded-full animate-ping transition-opacity duration-1000 ${
                  currentHub === index ? 'bg-amber-400 opacity-30' : 'opacity-0'
                }`} />
                
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/90 border border-amber-400/30 rounded-lg px-3 py-1 whitespace-nowrap">
                    <p className="text-amber-400 text-sm font-light">{hub.city}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(251, 191, 36)" stopOpacity="0" />
                <stop offset="50%" stopColor="rgb(251, 191, 36)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="rgb(251, 191, 36)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 25 45 Q 50 20 75 40 Q 80 50 80 60 Q 60 50 50 25 Q 30 30 15 35"
              stroke="url(#connectionGrad)"
              strokeWidth="0.3"
              fill="none"
              className="animate-pulse"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-left">
        <h1 className="text-7xl md:text-9xl font-light mb-8 bg-gradient-to-r from-white via-slate-100 to-amber-400 bg-clip-text text-transparent leading-tight">
          The Future of<br />
          <span className="font-thin">Global Conglomerates</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-slate-300 font-light leading-relaxed mb-12 max-w-3xl">
          Luxer International builds, acquires, and scales elite ventures across industries and continents.
        </p>

        <Button variant="primary" size="lg" className="animate-pulse-gold">
          Explore the Empire
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-amber-400 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;