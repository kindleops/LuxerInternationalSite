import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Button from './ui/Button';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Private conversation request:', formData);
  };

  return (
    <footer className="relative py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900/80 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Brand Section */}
          <div>
            <h2 className="text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
              LUXER
              <br />
              <span className="text-4xl md:text-5xl font-thin">INTERNATIONAL</span>
            </h2>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-8 max-w-lg">
              The future of global conglomerates. Building, acquiring, and scaling elite ventures across industries and continents.
            </p>
            
            <div className="flex space-x-6">
              <a
                href="https://crunchbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-400 hover:text-amber-400 transition-colors duration-300 group"
              >
                <ExternalLink size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Crunchbase</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-400 hover:text-amber-400 transition-colors duration-300 group"
              >
                <ExternalLink size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* High-Status Contact Form */}
          <div>
            <h3 className="text-3xl font-light mb-4 text-white">Request a Private Conversation</h3>
            <p className="text-slate-400 mb-8 font-light">
              Connect with our executive team to explore strategic partnerships, acquisitions, or investment opportunities.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-black/50 border border-slate-700/50 rounded-xl px-6 py-4 text-white placeholder-slate-500 focus:border-amber-400/50 focus:outline-none transition-colors duration-300"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-black/50 border border-slate-700/50 rounded-xl px-6 py-4 text-white placeholder-slate-500 focus:border-amber-400/50 focus:outline-none transition-colors duration-300"
                  required
                />
              </div>
              
              <input
                type="text"
                placeholder="Company / Organization"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-black/50 border border-slate-700/50 rounded-xl px-6 py-4 text-white placeholder-slate-500 focus:border-amber-400/50 focus:outline-none transition-colors duration-300"
              />
              
              <textarea
                rows={4}
                placeholder="Describe your inquiry or partnership opportunity"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-black/50 border border-slate-700/50 rounded-xl px-6 py-4 text-white placeholder-slate-500 focus:border-amber-400/50 focus:outline-none transition-colors duration-300 resize-none"
                required
              />
              
              <Button type="submit" variant="primary" className="w-full">
                Request Private Conversation
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>&copy; 2025 Luxer International. All rights reserved.</p>
            <p className="mt-2 md:mt-0 font-light">Luxury redefined for the modern elite.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;