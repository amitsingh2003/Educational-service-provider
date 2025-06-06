import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Settings, Zap, ArrowRight, Star } from 'lucide-react';

const PremiumServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Experience the power of Experiments with SM360"
    },
    {
      icon: <Star className="w-5 h-5" />,
      text: "Join the Premium Job Club with i-merit Programs"
    },
    {
      icon: <Settings className="w-5 h-5" />,
      text: "Eliminate Development Worries with #taskone Programs"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-black/5 to-gray-900/10 rounded-full blur-3xl"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-1/4 w-4 h-4 bg-orange-500/20 rotate-45 animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-1/3 w-3 h-3 bg-black/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-orange-600/30 rotate-45 animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Section - Think Beyond Ordinary */}
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="relative">
              {/* Decorative Line */}
              <div className="absolute -left-4 top-0 w-1 h-32 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
              
              <div className="pl-8">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-orange-50 border border-orange-200 rounded-full mb-6">
                  <Star className="w-4 h-4 text-orange-500 mr-2" />
                  <span className="text-orange-600 font-semibold text-sm">Premium Excellence</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Think Beyond
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                    Ordinary
                  </span>
                </h1>
                
                <div className="flex items-center mb-8">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 mr-4"></div>
                  <p className="text-xl font-semibold text-gray-800">Step into Premium Club</p>
                </div>
                
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Delivering Professional Excellence is a way of life rooted in our culture. 
                  We help our clients achieve their goals through innovative solutions.
                </p>
                
                {/* Features List */}
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className={`flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100/50 hover:shadow-md hover:border-orange-200 transition-all duration-300 transform ${
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                      }`}
                      style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                        {feature.icon}
                      </div>
                      <p className="text-gray-800 font-medium flex-1">{feature.text}</p>
                      <ArrowRight className="w-4 h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Premium Services Cards */}
          <div className={`flex flex-col space-y-6 transform transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            
            {/* Premium Scholar Services Card */}
            <div 
              className="group relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredCard('scholar')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className={`absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform transition-transform duration-1000 ${
                  hoveredCard === 'scholar' ? 'translate-x-full' : '-translate-x-full'
                }`}></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-white/80 text-sm font-medium">Premium</div>
                    <div className="text-white text-lg font-bold">01</div>
                  </div>
                </div>
                
                <h3 className={`text-2xl lg:text-3xl font-bold mb-4 transition-all duration-300 ${
                  hoveredCard === 'scholar' ? 'transform -translate-y-1' : ''
                }`}>
                  Scholar Services
                </h3>
                
                <p className="text-orange-100 text-lg leading-relaxed mb-6">
                  Tailored programs with curated learning paths and premium skill development for academic excellence.
                </p>

                {/* CTA Button */}
                <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore Programs</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>

            {/* Premium Professional Services Card */}
            <div 
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredCard('professional')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className={`absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent transform transition-transform duration-1000 ${
                  hoveredCard === 'professional' ? 'translate-x-full' : '-translate-x-full'
                }`}></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border border-orange-500/30 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-orange-500/20 rounded-full blur-xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-orange-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-orange-500/30 group-hover:scale-110 transition-all duration-300">
                    <Settings className="w-8 h-8 text-orange-400" />
                  </div>
                  <div className="text-right">
                    <div className="text-gray-400 text-sm font-medium">Premium</div>
                    <div className="text-orange-400 text-lg font-bold">02</div>
                  </div>
                </div>
                
                <h3 className={`text-2xl lg:text-3xl font-bold mb-4 transition-all duration-300 ${
                  hoveredCard === 'professional' ? 'transform -translate-y-1' : ''
                }`}>
                  Professional Services
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Corporate Excellence Programs crafted to elevate businesses through innovative solutions and strategic advancements.
                </p>

                {/* CTA Button */}
                <div className="flex items-center text-orange-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Discover Solutions</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
        
        @media (max-width: 768px) {
          .text-4xl {
            font-size: 2.5rem;
          }
          
          .lg\\:text-5xl {
            font-size: 3rem;
          }
          
          .xl\\:text-6xl {
            font-size: 3.5rem;
          }
        }
        
        @media (max-width: 640px) {
          .text-4xl {
            font-size: 2rem;
          }
          
          .py-16 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          
          .lg\\:py-20 {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default PremiumServicesSection;