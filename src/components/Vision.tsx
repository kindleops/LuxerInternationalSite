import React, { useEffect, useState } from 'react';

const Vision = () => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/30 to-black" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-amber-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Flowing Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(251, 191, 36)" stopOpacity="0" />
            <stop offset="50%" stopColor="rgb(251, 191, 36)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(251, 191, 36)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 0 20 Q 25 10 50 20 T 100 20"
          stroke="url(#flowGrad)"
          strokeWidth="0.2"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M 0 50 Q 25 40 50 50 T 100 50"
          stroke="url(#flowGrad)"
          strokeWidth="0.2"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <path
          d="M 0 80 Q 25 70 50 80 T 100 80"
          stroke="url(#flowGrad)"
          strokeWidth="0.2"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </svg>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="mb-16">
            <h2 className={`text-6xl md:text-8xl font-light mb-8 transition-all duration-2000 ${
              animationPhase === 0 
                ? 'bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent' 
                : animationPhase === 1
                ? 'bg-gradient-to-r from-amber-400 to-white bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-white via-amber-400 to-white bg-clip-text text-transparent'
            }`}>
              Where Capital<br />
              <span className="font-thin">Meets Innovation</span>
            </h2>
            
            <div className="h-24 flex items-center justify-center">
              <p className={`text-4xl md:text-5xl font-thin transition-all duration-2000 ${
                animationPhase === 0 
                  ? 'text-slate-300 opacity-100 transform translate-y-0' 
                  : 'text-amber-400 opacity-80 transform -translate-y-2'
              }`}>
                Where Vision Becomes Empire
              </p>
            </div>
          </div>

          {/* Cinematic Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              { number: '13', label: 'Elite Brands', suffix: '' },
              { number: '5', label: 'Global Hubs', suffix: '' },
              { number: '4', label: 'Strategic Pillars', suffix: '' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <h3 className="text-6xl md:text-7xl font-light bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                    {stat.number}{stat.suffix}
                  </h3>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <p className="text-slate-400 font-light text-lg group-hover:text-amber-300 transition-colors duration-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <p className="text-xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
              From real estate to AI, from capital to influence — Luxer International orchestrates the future of global commerce through strategic vision and relentless execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;