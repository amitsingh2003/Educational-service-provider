import React, { useState, useEffect, useRef } from 'react';

const WhoWeAreSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '30px'
      }
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

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-gray-50 to-white py-12 lg:py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-black rounded-full blur-3xl transform translate-x-24 translate-y-24"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Image Section */}
          <div className={`relative transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="relative h-full min-h-[400px] lg:min-h-[480px] group">
              {/* Main Image Container */}
              <div className="relative h-full overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-orange-500/10 to-black/10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=faces"
                  alt="Professional team celebrating success"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-black/30"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-orange-500 font-bold text-sm">Excellence Delivered</span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-80 blur-sm"></div>
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-r from-black to-gray-800 rounded-xl opacity-60 blur-sm"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`flex flex-col justify-center space-y-6 transform transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            
            {/* Header */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                <p className="text-orange-500 font-bold text-sm tracking-wider uppercase">
                  Excellence in Delivering the Future
                </p>
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Are</span>
              </h2>
            </div>

            {/* Content Cards */}
            <div className="space-y-4">
              {/* First paragraph */}
              <div className={`transform transition-all duration-700 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}>
                <div className="relative p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow duration-300">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-black">Scholars Merit</span> is a dynamic online platform committed to fostering holistic growth in education and professional spheres, leading to evolution from student life to corporate life.
                  </p>
                </div>
              </div>

              {/* Second paragraph */}
              <div className={`transform transition-all duration-700 delay-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}>
                <div className="relative p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow duration-300">
                  <p className="text-gray-700 leading-relaxed">
                    Our multifaceted approach encompasses <span className="font-semibold text-orange-600">SM360</span> for K12 students, <span className="font-semibold text-orange-600">eLite Suite</span> for institutions, and <span className="font-semibold text-orange-600">iQuest</span> for interview skills, topped with <span className="font-semibold text-orange-600">i-merit Programs</span> for career success.
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate Excellence Section */}
            <div className={`transform transition-all duration-700 delay-900 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}>
              <div className="relative p-6 bg-gradient-to-r from-gray-900 to-black rounded-2xl shadow-xl border border-gray-800">
                <div className="space-y-3">
                  <h3 className="text-xl lg:text-2xl font-bold text-white flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></span>
                    We Propel Corporate Excellence
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    With our <span className="text-orange-400 font-bold">#taskone</span> and <span className="text-orange-400 font-bold">#cloudone</span> programs, corporates can rely on us like never before. Excellence delivered at their doorsteps.
                  </p>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-500/20 to-transparent rounded-bl-2xl"></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .min-h-[480px] {
            min-height: 350px;
          }
        }
        
        @media (max-width: 768px) {
          .text-4xl {
            font-size: 2rem;
          }
          
          .text-3xl {
            font-size: 1.75rem;
          }
          
          .min-h-[400px] {
            min-height: 280px;
          }
          
          .py-12 {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          
          .lg\\:py-16 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
        }
        
        @media (max-width: 640px) {
          .text-3xl {
            font-size: 1.5rem;
          }
          
          .xl\\:text-5xl {
            font-size: 1.75rem;
          }
          
          .space-y-6 > * + * {
            margin-top: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default WhoWeAreSection;