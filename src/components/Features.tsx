import React from 'react';
import { Plane, Globe, Users, Diamond, Bot } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Plane,
      title: 'Concierge Access',
      description: 'From private jets to superyachts, Biluxr delivers seamless, white-glove travel experiences designed for those who expect more than first class.',
      gradient: 'from-amber-400/20 to-orange-500/20'
    },
    {
      icon: Globe,
      title: 'Global Experiences',
      description: 'Gain entry to the world\'s most exclusive events, nightlife, and fine dining — curated to ensure every moment feels cinematic and unforgettable.',
      gradient: 'from-blue-400/20 to-cyan-500/20'
    },
    {
      icon: Users,
      title: 'Elite Network',
      description: 'Step into private circles of founders, investors, and global operators. Biluxr is more than a concierge — it\'s access to influence.',
      gradient: 'from-purple-400/20 to-pink-500/20'
    },
    {
      icon: Diamond,
      title: 'Luxury Rewards',
      description: 'Enjoy tailored perks, personalized upgrades, and lifestyle benefits that transcend traditional loyalty programs — crafted to fit your world.',
      gradient: 'from-green-400/20 to-emerald-500/20'
    },
    {
      icon: Bot,
      title: '24/7 AI Concierge',
      description: 'Instant, intelligent service that never sleeps — Biluxr\'s AI concierge handles your requests with speed, precision, and discretion.',
      gradient: 'from-gray-400/20 to-slate-500/20'
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
            Elevated Access
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Five pillars of luxury that transform how you experience the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-amber-400/30 transition-all duration-700 hover:transform hover:scale-105 hover:shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  <feature.icon size={48} className="text-amber-400 group-hover:text-amber-300 transition-colors duration-500" />
                </div>
                
                <h3 className="text-2xl font-light mb-4 text-white group-hover:text-amber-100 transition-colors duration-500">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                  {feature.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;