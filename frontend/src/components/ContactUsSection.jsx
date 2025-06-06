import React from "react";

const ContactSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Image with Overlays */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/50"></div>

        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/8 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] lg:min-h-[85vh]">
          {/* Left Content Section */}
          <div className="py-12 lg:py-16 space-y-6 lg:space-y-8 z-10 relative order-2 lg:order-1">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Contact us Today And Let us
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 mt-2">
                Know What you Need
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-5xl opacity-90">
              Scholarsmerit aims to become your premium partner in helping you
              deliver quality solutions and makes you stay in front of the
              latest industry trends. When it's time to partner, think of us and
              together we achieve greater heights.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-2xl text-base lg:text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/25 focus:outline-none focus:ring-4 focus:ring-orange-300/30 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Contact Us</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group relative border-2 border-white/20 hover:border-orange-400/50 text-white hover:text-orange-400 font-semibold px-8 py-4 rounded-2xl text-base lg:text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-orange-500/10">
                <span className="flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <svg
                    className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right Image Section - Hidden on mobile */}
          <div className="relative hidden lg:flex justify-center items-end order-1 lg:order-2 h-full">
            {/* Decorative Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-80 h-80 xl:w-96 xl:h-96 rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-transparent animate-pulse"
                style={{ animationDuration: "4s" }}
              ></div>
            </div>

            {/* Original Arrow Shape */}
            <div
              className="absolute top-50 left-15 z-20 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <img
                src="https://www.scholarsmerit.com/assets/images/resource/contact-shape.webp"
                alt="Arrow decoration"
                className="w-16 h-16 xl:w-20 xl:h-20 opacity-80 filter drop-shadow-lg"
              />
            </div>

            {/* Main Image Container */}
            <div className="relative z-10 group h-full flex items-end">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-32 bg-gradient-to-t from-orange-500/20 to-transparent rounded-full blur-2xl"></div>
              <img
                src="https://www.scholarsmerit.com/assets/images/resource/contact-thumb.png"
                alt="Professional businessman"
                className="relative w-full max-w-sm xl:max-w-md h-11/12 object-contain filter drop-shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                style={{ maxHeight: "90vh" }}
              />
            </div>

            {/* Floating Dots */}
            <div className="absolute top-1/3 right-10 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
            <div className="absolute top-2/3 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div
              className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-purple-400/60 rounded-full animate-bounce"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default ContactSection;
