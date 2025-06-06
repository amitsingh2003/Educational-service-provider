import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Monitor, Users, ArrowRight, Sparkles } from 'lucide-react';

const SMLCLearningCafe = () => {
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

  const learningModes = [
    { icon: <Monitor className="w-5 h-5" />, title: "Online" },
    { icon: <Users className="w-5 h-5" />, title: "Offline" },
    { icon: <BookOpen className="w-5 h-5" />, title: "Hybrid" }
  ];

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-black/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content Section */}
          <div className={`space-y-8 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-orange-50 border border-orange-200 rounded-full">
              <Sparkles className="w-4 h-4 text-orange-500 mr-2" />
              <span className="text-orange-600 font-medium text-sm">Premium Learning Experience</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  SMLC
                </span>{' '}
                Learning Café
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                Premium concept for Personalized Attention
              </p>
            </div>

            {/* Learning Modes */}
            <div className="flex flex-wrap gap-4">
              {learningModes.map((mode, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 px-5 py-3 bg-white rounded-full shadow-sm border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white">
                    {mode.icon}
                  </div>
                  <span className="font-medium text-gray-800">{mode.title}</span>
                </div>
              ))}
            </div>
            
            {/* Description */}
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                A hybrid model of learning where students can opt for offline, online, or hybrid mode 
                in a premium environment.
              </p>
              
              <p>
                Our content is designed for maximum learning in a "Teacher Mode" environment, 
                reducing dependence on video-based content that students find difficult to concentrate upon.
              </p>
              
              <p>
                SMLC faculties are extensively trained for hybrid content delivery before conducting 
                classes for students.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300">
                <span>Know More</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className={`transform transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Students learning in SMLC environment"
                  className="w-full h-96 object-cover"
                />
                
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Teacher Mode</div>
                      <div className="text-gray-600">Interactive Learning</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-100 rounded-full opacity-60"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gray-100 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMLCLearningCafe;