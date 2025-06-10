import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Star, Users, Award, Zap, ArrowRight, Eye } from 'lucide-react';

const LeadershipTeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const leaders = [
    {
      id: 'sumit',
      name: 'Sumit Shukla',
      position: 'Chief Executive Officer',
      image: 'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uc3xlbnwwfHwwfHx8MA%3D%3D',
      linkedin: true,
      description: 'Visionary leader driving innovation and excellence in corporate solutions.'
    },
    {
      id: 'nancy',
      name: 'Nancy D.',
      position: 'Chief Business Officer',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D',
      linkedin: true,
      description: 'Strategic business development expert with a passion for growth and partnerships.'
    },
    {
      id: 'ashu',
      name: 'Ashu Tosh Bhardwaj',
      position: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww',
      linkedin: true,
      description: 'Technology innovator leading digital transformation and technical excellence.'
    },
    {
      id: 'rashi',
      name: 'Rashi Wadhwa',
      position: 'EVP Scholars Merit',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D',
      linkedin: true,
      description: 'Educational excellence advocate empowering scholars to achieve their potential.'
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-15 blur-3xl transition-all duration-1000 ease-out"
          style={{
            background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
            left: mousePosition.x * 0.02 + 'px',
            top: mousePosition.y * 0.02 + 'px',
            transform: `translate(-50%, -50%)`,
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-10 blur-2xl transition-all duration-700 ease-out"
          style={{
            background: 'linear-gradient(225deg, #000000 0%, #ff6b35 100%)',
            right: mousePosition.x * -0.01 + 100 + 'px',
            bottom: mousePosition.y * -0.01 + 100 + 'px',
          }}
        />
        
        {/* Floating Geometric Elements */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-orange-500/30 rotate-45 animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-black/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-32 w-4 h-4 bg-orange-400/40 rotate-45 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-orange-600/30 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Header Section */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            {/* Premium Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-full mb-8">
              <Users className="w-5 h-5 text-orange-500 mr-3" />
              <span className="text-orange-600 font-bold text-sm tracking-wide">LEADERSHIP EXCELLENCE</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-black mb-8 leading-tight">
              Leadership
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700">
                Team
              </span>
            </h1>

            {/* Decorative Line */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent to-orange-500 rounded-full mr-4"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <div className="w-20 h-1 bg-gradient-to-l from-transparent to-orange-500 rounded-full ml-4"></div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-16 items-start mb-20">
          
          {/* Left Section - Company Description */}
          <div className={`xl:col-span-2 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="relative">
              {/* Decorative Side Line */}
              <div className="absolute -left-6 top-0 w-1 h-40 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
              
              <div className="pl-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                  Our People and 
                  <span className="text-orange-600"> Leadership</span>
                </h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-10">
                  At <span className="font-bold text-black">Scholars Merit</span>, we believe in empowering individuals through personalized support and expert guidance. Our people and leadership team is dedicated to fostering growth, unlocking potential, and helping students and professionals achieve their academic and career goals.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                  With a passion for excellence, we deliver tailored programs, and resources to pave the way for success in every journey.
                </p>

                {/* Feature Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-xl hover:border-orange-200 transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-black text-black">10+</p>
                        <p className="text-gray-600 font-medium">Years Experience</p>
                      </div>
                    </div>
                  </div>

                  <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-xl hover:border-orange-200 transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-black to-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-black text-black">500+</p>
                        <p className="text-gray-600 font-medium">Success Stories</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Team Grid */}
          <div className="xl:col-span-3">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transform transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}>
              {leaders.map((leader, index) => (
                <div
                  key={leader.id}
                  className={`group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden cursor-pointer border-2 border-transparent hover:border-orange-200 transform hover:scale-105 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 2) * 200}ms` }}
                  onMouseEnter={() => setHoveredCard(leader.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${
                    hoveredCard === leader.id 
                      ? index % 2 === 0 
                        ? 'from-orange-500/10 to-orange-600/5 opacity-100'
                        : 'from-black/5 to-gray-900/10 opacity-100'
                      : 'opacity-0'
                  }`}></div>
                  
                  {/* Floating Decorative Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 border border-gray-200 rounded-full group-hover:border-orange-300 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-orange-500/10 rounded-full blur-lg group-hover:bg-orange-500/20 transition-colors duration-300"></div>
                  
                  <div className="relative z-10 p-8">
                    {/* Profile Image Container */}
                    <div className="relative mb-6">
                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-orange-200 transition-all duration-300 shadow-lg">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* LinkedIn Badge */}
                      {leader.linkedin && (
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <ExternalLink className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Name and Position */}
                    <div className="text-center mb-6">
                      <h3 className={`text-xl font-bold text-black mb-2 transition-all duration-300 ${
                        hoveredCard === leader.id ? 'transform -translate-y-1' : ''
                      }`}>
                        {leader.name}
                      </h3>
                      <p className="text-gray-600 font-medium text-sm mb-4">{leader.position}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{leader.description}</p>
                    </div>

                    {/* Action Button */}
                    <div className="flex justify-center">
                      <button className={`group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r font-bold text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                        index % 2 === 0 
                          ? 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
                          : 'from-black to-gray-800 hover:from-gray-800 hover:to-black'
                      }`}>
                        <Eye className="w-4 h-4 mr-2" />
                        <span>View Profile</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center transform transition-all duration-1000 delay-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Work with Excellence?</h3>
              <p className="text-orange-100 text-xl mb-8 max-w-2xl mx-auto">
                Join thousands who have transformed their careers with our leadership and expertise.
              </p>
              <button className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <span>Connect with Our Team</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
        
        @media (max-width: 768px) {
          .text-5xl {
            font-size: 3rem;
          }
          
          .lg\\:text-7xl {
            font-size: 4rem;
          }
          
          .xl\\:text-8xl {
            font-size: 4.5rem;
          }
        }
        
        @media (max-width: 640px) {
          .text-5xl {
            font-size: 2.5rem;
          }
          
          .py-20 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          
          .lg\\:py-28 {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default LeadershipTeamSection;