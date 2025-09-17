import React, { useState, useEffect } from 'react';
import { Bot, Send, Check } from 'lucide-react';

const AIConcierge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);
  const [showResponse, setShowResponse] = useState(false);

  const demoRequests = [
    {
      request: "Book me a private driver in Dubai.",
      response: "Confirmed. Driver en route in 8 minutes.",
      location: "Dubai"
    },
    {
      request: "Reserve a table at Nobu for tonight.",
      response: "Secured. 8:30 PM reservation confirmed.",
      location: "London"
    },
    {
      request: "Arrange helicopter transfer to Monaco.",
      response: "Booked. Departure in 45 minutes from helipad.",
      location: "Monaco"
    }
  ];

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowResponse(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, currentDemo]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isOpen) {
        setCurrentDemo((prev) => (prev + 1) % demoRequests.length);
        setShowResponse(false);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isOpen]);

  const toggleDemo = () => {
    setIsOpen(!isOpen);
    setShowResponse(false);
  };

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
            AI Concierge
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Instant, intelligent service that anticipates your every need
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Floating Chat Widget */}
          <div className="fixed bottom-8 right-8 z-50">
            <button
              onClick={toggleDemo}
              className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full shadow-2xl flex items-center justify-center text-black hover:scale-110 transition-all duration-300 animate-pulse-gold"
            >
              <Bot size={28} />
            </button>
          </div>

          {/* Demo Interface */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 md:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center mr-4">
                  <Bot size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-white">Biluxr AI</h3>
                  <p className="text-amber-400 text-sm">Always available • Always discreet</p>
                </div>
              </div>

              {/* Chat Demo */}
              <div className="space-y-6 mb-8">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-amber-400 text-black rounded-2xl rounded-br-md px-6 py-3 max-w-md">
                    <p className="font-medium">{demoRequests[currentDemo].request}</p>
                  </div>
                </div>

                {/* AI Response */}
                <div className={`flex justify-start transition-all duration-1000 ${showResponse ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="bg-gray-800 text-white rounded-2xl rounded-bl-md px-6 py-3 max-w-md border border-gray-700">
                    <div className="flex items-center mb-2">
                      <Check size={16} className="text-green-400 mr-2" />
                      <span className="text-green-400 text-sm font-medium">Confirmed</span>
                    </div>
                    <p>{demoRequests[currentDemo].response}</p>
                  </div>
                </div>
              </div>

              {/* Input Field */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Try: 'Book a table at the best restaurant in Paris'"
                  className="w-full bg-black/50 border border-gray-700/50 rounded-full px-6 py-4 pr-14 text-white placeholder-gray-500 focus:border-amber-400/50 focus:outline-none transition-colors duration-300"
                  readOnly
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-black hover:bg-amber-300 transition-colors duration-300">
                  <Send size={18} />
                </button>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { title: 'Instant Response', desc: 'Average response time: 0.3 seconds' },
                { title: 'Global Network', desc: 'Connected to 10,000+ luxury providers' },
                { title: 'Always Learning', desc: 'Adapts to your preferences over time' }
              ].map((feature, index) => (
                <div key={index} className="text-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800/50">
                  <h4 className="text-lg font-light text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConcierge;