import React, { useState } from 'react';
import { Building, Cpu, DollarSign, Crown, Home, FileText, Shield, Zap, MessageSquare, TrendingUp, CreditCard, Megaphone } from 'lucide-react';

const EmpireMap = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const brands = [
    {
      id: 'reivesti',
      name: 'Reivesti',
      category: 'Real Estate',
      icon: Home,
      description: 'The nation\'s #1 source for wholesale real estate deals. Operating in top-tier markets nationwide, Reivesti connects investors to vetted residential, commercial, and development opportunities at scale.',
      color: 'from-green-400 to-emerald-600'
    },
    {
      id: 'prominent',
      name: 'Prominent Cash Offer',
      category: 'Real Estate',
      icon: Building,
      description: 'A direct-to-seller acquisitions firm built for speed, trust, and transparency. Prominent specializes in helping motivated property owners unlock liquidity through seamless, off-market transactions.',
      color: 'from-blue-400 to-cyan-600'
    },
    {
      id: 'everline',
      name: 'Everline Asset Group',
      category: 'AI & Software',
      icon: MessageSquare,
      description: 'A communications powerhouse delivering AI-driven, 10DLC-compliant outreach. Everline bridges asset holders, operators, and capital partners with trust-first messaging and precision targeting.',
      color: 'from-purple-400 to-violet-600'
    },
    {
      id: 'nexta',
      name: 'Nexta Technology',
      category: 'AI & Software',
      icon: Cpu,
      description: 'A vertically integrated technology company building elite AI-powered platforms for CRM, outreach, automation, and growth. Home to NextaOS, SignPro.ai, Vaultir.ai, Flownetic.ai, and LeadCommand.ai.',
      color: 'from-indigo-400 to-blue-600'
    },
    {
      id: 'signpro',
      name: 'SignPro.ai',
      category: 'AI & Software',
      icon: FileText,
      description: 'The cinematic alternative to DocuSign. SignPro delivers real-time AI editing, cinematic signing experiences, and secure contract execution designed for founders, dealmakers, and enterprises.',
      color: 'from-cyan-400 to-teal-600'
    },
    {
      id: 'vaultir',
      name: 'Vaultir.ai',
      category: 'AI & Software',
      icon: Shield,
      description: 'The ultra-secure document intelligence vault. Vaultir encrypts, analyzes, and archives contracts with blockchain-grade precision — transforming how businesses manage trust and compliance.',
      color: 'from-slate-400 to-gray-600'
    },
    {
      id: 'flownetic',
      name: 'Flownetic.ai',
      category: 'AI & Software',
      icon: Zap,
      description: 'An automation engine that unifies tasks, apps, and data into cinematic workflows. Flownetic executes with precision, speed, and total control, empowering companies to scale without limits.',
      color: 'from-yellow-400 to-orange-600'
    },
    {
      id: 'leadcommand',
      name: 'LeadCommand.ai',
      category: 'AI & Software',
      icon: TrendingUp,
      description: 'The next generation of outreach. LeadCommand delivers AI-powered SMS and 10DLC-compliant campaigns with smart scoring, automated replies, and seamless deal flow.',
      color: 'from-pink-400 to-rose-600'
    },
    {
      id: 'ascendrix',
      name: 'Ascendrix Capital',
      category: 'Capital & Equity',
      icon: TrendingUp,
      description: 'A private equity group acquiring and scaling undervalued companies. Ascendrix uses creative capital structures and AI-driven systems to unlock hidden value and accelerate growth.',
      color: 'from-emerald-400 to-green-600'
    },
    {
      id: 'biluxr',
      name: 'Biluxr',
      category: 'Lifestyle & Influence',
      icon: Crown,
      description: 'The world\'s most advanced luxury concierge brand. Biluxr offers global black card access to private jets, supercars, villas, and curated experiences in the world\'s most elite circles.',
      color: 'from-amber-400 to-yellow-600'
    },
    {
      id: 'luxercapital',
      name: 'Luxer Capital',
      category: 'Capital & Equity',
      icon: DollarSign,
      description: 'A boutique capital group supporting high-status ventures, luxury real estate, and strategic private investments. Luxer Capital fuels the ecosystem with precision and exclusivity.',
      color: 'from-gold-400 to-amber-600'
    },
    {
      id: 'luxerpay',
      name: 'Luxer Pay',
      category: 'Capital & Equity',
      icon: CreditCard,
      description: 'A fintech platform redefining luxury payments. Luxer Pay delivers elite-tier cards, tailored rewards, and seamless financial services across the Luxer ecosystem.',
      color: 'from-violet-400 to-purple-600'
    },
    {
      id: 'influencive',
      name: 'Influencive Marketing',
      category: 'Lifestyle & Influence',
      icon: Megaphone,
      description: 'A branding and media command firm for elite founders and operators. Influencive builds influence, credibility, and inbound authority at scale through precision storytelling and distribution.',
      color: 'from-red-400 to-pink-600'
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/50 to-black" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-light mb-6 bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
            Empire Map
          </h2>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
            Thirteen elite brands across four pillars of global commerce
          </p>
        </div>

        {/* Interactive Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16">
          {brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => setSelectedBrand(selectedBrand?.id === brand.id ? null : brand)}
              className={`group relative p-6 bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border rounded-2xl transition-all duration-500 hover:scale-105 ${
                selectedBrand?.id === brand.id 
                  ? 'border-amber-400/50 shadow-2xl shadow-amber-400/20' 
                  : 'border-slate-700/50 hover:border-amber-400/30'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10 text-center">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-500">
                  <brand.icon size={32} className={`mx-auto transition-colors duration-500 ${
                    selectedBrand?.id === brand.id ? 'text-amber-400' : 'text-slate-400 group-hover:text-amber-300'
                  }`} />
                </div>
                
                <h3 className={`text-sm font-light mb-1 transition-colors duration-500 ${
                  selectedBrand?.id === brand.id ? 'text-amber-100' : 'text-white group-hover:text-amber-100'
                }`}>
                  {brand.name}
                </h3>
                
                <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors duration-500">
                  {brand.category}
                </p>
              </div>

              {selectedBrand?.id === brand.id && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              )}
            </button>
          ))}
        </div>

        {/* Selected Brand Details */}
        {selectedBrand && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900/80 to-black/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-12 animate-fade-in">
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${selectedBrand.color} rounded-2xl flex items-center justify-center mr-6`}>
                  <selectedBrand.icon size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-light text-white mb-2">{selectedBrand.name}</h3>
                  <p className="text-amber-400 font-medium">{selectedBrand.category}</p>
                </div>
              </div>
              
              <p className="text-lg text-slate-300 font-light leading-relaxed">
                {selectedBrand.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EmpireMap;