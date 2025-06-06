import React from 'react';

export default function OfferingSection() {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-50/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <div className="relative py-20 px-4 lg:py-24">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Badge */}
          <div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-200 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-600 font-semibold text-sm tracking-wider uppercase">
              Our Offering
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-12 max-w-5xl mx-auto leading-[1.1] tracking-tight">
            Our Products that Help you
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 mt-2">
              Achieve the Great
            </span>
          </h1>
          
          {/* Enhanced Brand Logos Section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/50 max-w-6xl mx-auto">
            <p className="text-gray-600 text-lg mb-8 font-medium">Trusted by leading brands worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {[
                { src: "https://www.scholarsmerit.com/assets/images/brand/brand1.svg", alt: "Merit" },
                { src: "https://www.scholarsmerit.com/assets/images/brand/brand2.svg", alt: "TaskOne" },
                { src: "https://www.scholarsmerit.com/assets/images/brand/brand3.svg", alt: "CloudOne" },
                { src: "https://www.scholarsmerit.com/assets/images/brand/brand5.svg", alt: "SM360" },
                { src: "https://www.scholarsmerit.com/assets/images/brand/brand1.svg", alt: "Merit" },
                { src: "https://www.scholarsmerit.com/assets/images/brand/brand2.svg", alt: "TaskOne" }
              ].map((brand, index) => (
                <div key={index} className="group flex justify-center">
                  <img 
                    src={brand.src}
                    alt={brand.alt}
                    className="h-12 lg:h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section with Professional Background */}
      <div className="relative py-20 px-4 overflow-hidden">
        {/* Background Image Similar to Provided */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2084&q=80"
            alt="Professional team meeting background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/75 to-slate-900/85"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-transparent to-slate-900/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-0">
            
            {/* 100% Satisfaction */}
            <div className="group border-b lg:border-b-0 lg:border-r border-white/20 p-8 lg:p-12">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6 group-hover:text-orange-300 transition-colors duration-300">
                  100% Satisfaction
                </h2>
                
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mb-6 mx-auto lg:mx-0"></div>
                
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                  This is not a statement but our belief that has been built into our system.
                </p>
              </div>
            </div>

            {/* Experienced Team */}
            <div className="group border-b lg:border-b-0 lg:border-r border-white/20 p-8 lg:p-12">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 group-hover:text-orange-300 transition-colors duration-300">
                  <span className="text-orange-500">Experienced</span> <span className="text-white">Team</span>
                </h2>
                
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mb-6 mx-auto lg:mx-0"></div>
                
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                  With our consultants, we drive a team that is more than 25 years of experience in delivering quality to our customers.
                </p>
              </div>
            </div>

            {/* Positive Change */}
            <div className="group p-8 lg:p-12">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6 group-hover:text-orange-300 transition-colors duration-300">
                  Positive Change
                </h2>
                
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mb-6 mx-auto lg:mx-0"></div>
                
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                  Join hands with us to experience the change that we bring upon in the methods you perform your job.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
      </div>
    </div>
  );
}