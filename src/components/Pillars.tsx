import React from 'react';
import { Home, Cpu, DollarSign, Crown } from 'lucide-react';

const Pillars = () => {
  const pillars = [
    {
      icon: Home,
      title: 'Real Estate',
      brands: ['Reivesti', 'Prominent Cash Offer'],
      description: 'Wholesale deals and direct acquisitions across top-tier markets nationwide.',
      gradient: 'from-green-400/20 to-emerald-500/20',
      iconColor: 'text-green-400'
    },
    {
      icon: Cpu,
      title: 'AI & Software',
      brands: ['Nexta Technology', 'SignPro.ai', 'Vaultir.ai', 'Flownetic.ai', 'LeadCommand.ai'],
      description: 'Elite AI-powered platforms for automation, outreach, and intelligent workflows.',
      gradient: 'from-blue-400/20 to-cyan-500/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: DollarSign,
      title: 'Capital & Equity',
      brands: ['Ascendrix Capital', 'Luxer Capital', 'Luxer Pay'],
      description: 'Private equity, boutique investments, and luxury fintech solutions.',
      gradient: 'from-amber-400/20 to-yellow-500/20',
      iconColor: 'text-amber-400'
    },
    {
      icon: Crown,
      title: 'Lifestyle & Influence',
      brands: ['Biluxr', 'Influencive Marketing'],
      description: 'Luxury concierge services and elite branding for global operators.',
      gradient: 'from-purple-400/20 to-pink-500/20',
      iconColor: 'text-purple-400'
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-light mb-6 bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
            Four Pillars
          </h2>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
            Strategic verticals driving global commerce and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-amber-400/30 transition-all duration-700 hover:transform hover:scale-105 hover:shadow-2xl luxury-card"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  <pillar.icon size={56} className={`${pillar.iconColor} group-hover:drop-shadow-lg transition-all duration-500`} />
                </div>
                
                <h3 className="text-3xl font-light mb-4 text-white group-hover:text-amber-100 transition-colors duration-500">
                  {pillar.title}
                </h3>
                
                <p className="text-slate-400 font-light leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-500">
                  {pillar.description}
                </p>

                <div className="space-y-2">
                  {pillar.brands.map((brand, brandIndex) => (
                    <div key={brandIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="text-sm text-slate-300 group-hover:text-white transition-colors duration-500">
                        {brand}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;