import React, { useState, useEffect } from 'react';
import { Plane, Car, Home, ChefHat, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const ElitePerks = () => {
  const [currentPerk, setCurrentPerk] = useState(0);

  const perks = [
    {
      icon: Plane,
      title: 'Private Jets',
      description: 'Access to a global fleet of luxury aircraft with personalized service and flexible scheduling.',
      image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-600/20 to-cyan-500/20'
    },
    {
      icon: Car,
      title: 'Supercars',
      description: 'Drive the world\'s most exclusive vehicles with our curated collection of luxury automobiles.',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-red-600/20 to-orange-500/20'
    },
    {
      icon: Home,
      title: 'Private Villas',
      description: 'Stay in handpicked luxury properties in the world\'s most desirable destinations.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-green-600/20 to-emerald-500/20'
    },
    {
      icon: ChefHat,
      title: 'Michelin Dining',
      description: 'Reserved tables at the world\'s finest restaurants with exclusive chef experiences.',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-600/20 to-pink-500/20'
    },
    {
      icon: Calendar,
      title: 'Invite-only Events',
      description: 'Access to exclusive gatherings, private shows, and elite networking opportunities.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-amber-600/20 to-yellow-500/20'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPerk((prev) => (prev + 1) % perks.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextPerk = () => {
    setCurrentPerk((prev) => (prev + 1) % perks.length);
  };

  const prevPerk = () => {
    setCurrentPerk((prev) => (prev - 1 + perks.length) % perks.length);
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
            Elite Perks
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Curated experiences that define luxury living
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Showcase */}
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden glass border border-gray-700/30">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
              style={{ backgroundImage: `url(${perks[currentPerk].image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>
            
            <div className={`absolute inset-0 bg-gradient-to-br ${perks[currentPerk].gradient} transition-all duration-1000`} />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex items-center mb-4">
                {React.createElement(perks[currentPerk].icon, { size: 48, className: "text-amber-400 mr-4" })}
                <h3 className="text-3xl md:text-4xl font-light text-white">
                  {perks[currentPerk].title}
                </h3>
              </div>
              <p className="text-lg text-gray-200 font-light max-w-2xl">
                {perks[currentPerk].description}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevPerk}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border border-gray-600/30 rounded-full flex items-center justify-center text-white hover:bg-amber-400/20 hover:border-amber-400/50 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextPerk}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border border-gray-600/30 rounded-full flex items-center justify-center text-white hover:bg-amber-400/20 hover:border-amber-400/50 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Perk Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {perks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPerk(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPerk 
                    ? 'bg-amber-400 shadow-lg shadow-amber-400/50' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-5 gap-4 mt-12">
            {perks.map((perk, index) => (
              <button
                key={index}
                onClick={() => setCurrentPerk(index)}
                className={`relative h-24 rounded-xl overflow-hidden transition-all duration-500 ${
                  index === currentPerk 
                    ? 'ring-2 ring-amber-400 scale-105' 
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                }`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${perk.image})` }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  {React.createElement(perk.icon, { size: 24, className: "text-white" })}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElitePerks;