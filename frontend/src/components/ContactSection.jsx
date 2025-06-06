import React, { useState, useEffect } from 'react';
import { Phone, Mail, ChevronDown, Send, Sparkles, Users, Award, Zap } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    service: 'Scholar Services',
    message: ''
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    'Scholar Services',
    'Corporate Solutions',
    'Academic Research',
    'Consulting Services',
    'Technical Support'
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-1000 ease-out"
          style={{
            background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
            left: mousePosition.x * 0.02 + 'px',
            top: mousePosition.y * 0.02 + 'px',
            transform: `translate(-50%, -50%)`,
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-15 blur-2xl transition-all duration-700 ease-out"
          style={{
            background: 'linear-gradient(225deg, #ff6b35 0%, #000000 100%)',
            right: mousePosition.x * -0.01 + 100 + 'px',
            bottom: mousePosition.y * -0.01 + 100 + 'px',
          }}
        />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-orange-500 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-black rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-orange-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-orange-600 rounded-full animate-bounce opacity-60"></div>
      </div>

      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-20">
           
            <h1 className="text-6xl lg:text-8xl font-black text-black mb-6 leading-tight">
              Work With
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 animate-pulse">
                Excellence
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-black mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 items-start">
            
            {/* Left Section - Enhanced Content */}
            <div className="xl:col-span-3 space-y-12">
              
              {/* Main Content */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500 to-transparent opacity-10 rounded-full -mr-16 -mt-16"></div>
                
                <p className="text-2xl text-gray-700 leading-relaxed mb-8 relative z-10">
                  Transform your challenges into <span className="font-bold text-black">breakthrough solutions</span>. 
                  Whether you're a scholar pushing boundaries or a corporation seeking excellence, 
                  we deliver <span className="text-orange-600 font-semibold">extraordinary results</span>.
                </p>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-orange-50 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-2">Excellence Delivered</h3>
                      <p className="text-gray-600">Premium solutions for your corporate journey</p>
                    </div>
                  </div>

                  <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-orange-50 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-black to-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-2">Smart Solutions</h3>
                      <p className="text-gray-600">Complex problems, simplified results</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div 
                  className="group bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-transparent hover:border-orange-200 relative overflow-hidden cursor-pointer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-black rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <p className="text-orange-600 font-bold text-lg mb-2">Quick Response</p>
                    <p className="text-3xl font-black text-black mb-1">+91 120 435 7129</p>
                    <p className="text-gray-500">Available 24/7</p>
                  </div>
                </div>

                <div className="group bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-transparent hover:border-orange-200 relative overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-black to-gray-800 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-orange-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <p className="text-black font-bold text-lg mb-2">Direct Email</p>
                    <p className="text-2xl font-black text-black mb-1">services@smopl.biz</p>
                    <p className="text-gray-500">Professional support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Enhanced Form */}
            <div className="xl:col-span-2">
              <div className="sticky top-8">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden backdrop-blur-sm">
                  {/* Form Header with Gradient */}
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 relative">
                    <div className="absolute inset-0 bg-black opacity-10"></div>
                    <div className="relative z-10">
                      <div className="flex items-center space-x-3 mb-4">
                        <Users className="w-8 h-8 text-white" />
                        <h2 className="text-3xl font-black text-white">Get Started</h2>
                      </div>
                      <p className="text-orange-100">Transform your vision into reality</p>
                    </div>
                  </div>

                  {/* Form Content */}
                  <div className="p-8 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative group">
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-black placeholder-gray-400 group-hover:border-gray-300"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
                      </div>

                      <div className="relative group">
                        <input
                          type="tel"
                          placeholder="Your Number"
                          value={formData.number}
                          onChange={(e) => handleInputChange('number', e.target.value)}
                          className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-black placeholder-gray-400 group-hover:border-gray-300"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    <div className="relative group">
                      <input
                        type="email"
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-black placeholder-gray-400 group-hover:border-gray-300"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-black text-left flex items-center justify-between hover:border-gray-300 group"
                      >
                        <span className="font-medium">{formData.service}</span>
                        <ChevronDown className={`w-5 h-5 transition-all duration-300 ${isDropdownOpen ? 'rotate-180 text-orange-500' : 'text-gray-400'}`} />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
                      </button>
                      
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-2xl shadow-2xl z-20 overflow-hidden backdrop-blur-sm">
                          {services.map((service, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => {
                                handleInputChange('service', service);
                                setIsDropdownOpen(false);
                              }}
                              className="w-full px-6 py-4 text-left hover:bg-orange-50 hover:text-orange-600 transition-all duration-200 text-black font-medium border-b border-gray-100 last:border-b-0"
                            >
                              {service}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="relative group">
                      <textarea
                        placeholder="Tell us about your project or requirements..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-black placeholder-gray-400 resize-none group-hover:border-gray-300"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-5 px-8 rounded-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center space-x-3 group"
                    >
                      <span className="text-lg">Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    
                    <div className="text-center">
                      <p className="text-gray-500 text-sm">
                        We'll respond within <span className="font-semibold text-orange-600">24 hours</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}