import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Play, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(true);
  const heroRef = useRef(null);

  const slides = [
    {
      category: "Premium Scholar Services",
      title: "i-merit",
      subtitle: "Empowering Future Professionals",
      description:
        "Transform your career trajectory with our comprehensive platform designed to bridge the gap between academic excellence and industry readiness.",
      video:
        "https://videos.pexels.com/video-files/6774633/6774633-uhd_2560_1440_30fps.mp4",
      stats: { number: "10K+", label: "Graduates Trained" },
    },
    {
      category: "Premium Professional Services",
      title: "#taskone",
      subtitle: "Next-Gen Outsourcing Solutions",
      description:
        "Revolutionary pay-as-you-go development services that scale with your business needs without the overhead of traditional outsourcing.",
      video:
        "https://videos.pexels.com/video-files/8425706/8425706-uhd_2560_1440_25fps.mp4", // team discussion
      stats: { number: "500+", label: "Projects Delivered" },
    },
    {
      category: "Premium Scholar Services",
      title: "Math Lab",
      subtitle: "Interactive Learning Experience",
      description:
        "State-of-the-art mathematical laboratory equipped with cutting-edge tools for hands-on exploration and deep conceptual understanding.",
      video:
        "https://videos.pexels.com/video-files/3196425/3196425-uhd_2560_1440_25fps.mp4", // kids in STEM lab
      stats: { number: "95%", label: "Success Rate" },
    },
    {
      category: "Premium Professional Services",
      title: "#cloudone",
      subtitle: "Cloud Infrastructure Excellence",
      description:
        "Comprehensive cloud management services that optimize performance, reduce costs, and ensure scalable infrastructure solutions.",
      video:
        "https://videos.pexels.com/video-files/8716587/8716587-uhd_2560_1440_25fps.mp4", // cloud computing
      stats: { number: "99.9%", label: "Uptime Guarantee" },
    },
    {
      category: "Premium Scholar Services",
      title: "SM 360",
      subtitle: "Complete Educational Revolution",
      description:
        "Comprehensive educational bundle that transforms traditional learning through innovative methodologies and practical applications.",
      video:
        "https://videos.pexels.com/video-files/8141400/8141400-uhd_2560_1440_25fps.mp4", // smart classroom
      stats: { number: "360°", label: "Learning Approach" },
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
    let interval;

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [slides.length, isPlaying]);

  const handleMouseMove = (e) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent"
          style={{
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
      </div>

      {/* Background Videos with Advanced Transitions */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        const isPrevious =
          index === (currentSlide - 1 + slides.length) % slides.length;
        const isNext = index === (currentSlide + 1) % slides.length;

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-out ${
              isActive
                ? "opacity-100 scale-100 z-10"
                : isPrevious || isNext
                ? "opacity-20 scale-105 z-5"
                : "opacity-0 scale-95 z-0"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <video
                key={`${slide.video}-${index}`} // Force re-render when needed
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                style={{
                  filter: isActive
                    ? "grayscale(60%) brightness(0.8) contrast(1.15) saturate(0.9)"
                    : "grayscale(80%) brightness(0.6) contrast(1.0)",
                  transform: `scale(${
                    isActive ? "1.02" : "1.05"
                  }) translate3d(${mousePos.x * 8}px, ${mousePos.y * 4}px, 0)`,
                  transition:
                    "all 0.8s cubic-bezier(0.4, 0, 0.2, 1), filter 2s ease-out",
                  willChange: "transform, filter",
                }}
              >
                <source src={slide.video} type="video/mp4" />
              </video>

              {/* Enhanced Multi-layer Gradient System */}
              {/* Base darkness layer */}
              <div
                className="absolute inset-0 bg-black transition-opacity duration-2000"
                style={{
                  opacity: isActive ? 0.3 : 0.6,
                }}
              />

              {/* Dynamic gradient based on slide position */}
              <div
                className={`absolute inset-0 transition-all duration-2000 ${
                  isActive
                    ? "bg-gradient-to-r from-black/50 via-black/30 to-transparent"
                    : "bg-gradient-to-r from-black/70 via-black/50 to-black/30"
                }`}
              />

              {/* Bottom fade for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Interactive color accent */}
              <div
                className="absolute inset-0 transition-all duration-1000"
                style={{
                  background: `radial-gradient(circle at ${mousePos.x * 100}% ${
                    mousePos.y * 100
                  }%, 
              rgba(251, 146, 60, ${isActive ? 0.08 : 0.03}) 0%, 
              transparent 50%)`,
                }}
              />

              {/* Subtle vignette effect */}
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />
            </div>

            {/* Smooth edge blur for non-active slides */}
            {!isActive && (
              <div
                className="absolute inset-0 backdrop-blur-[1px] transition-all duration-2000"
                style={{ opacity: 0.3 }}
              />
            )}
          </div>
        );
      })}

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`,
            }}
          >
            <div className="w-2 h-2 bg-orange-500/30 rounded-full blur-sm"></div>
          </div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 flex items-center min-h-screen">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Category Badge */}
              <div className="overflow-hidden">
                <div
                  className={`inline-block transition-all duration-1000 transform ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                ></div>
              </div>

              {/* Main Title */}
              <div className="overflow-hidden">
                <h1
                  className={`text-white font-black leading-[0.9] tracking-tight transition-all duration-1200 transform ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                  style={{
                    transitionDelay: "400ms",
                    fontSize: "clamp(3rem, 8vw, 6rem)",
                    textShadow: "0 8px 32px rgba(0,0,0,0.5)",
                  }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-orange-300">
                    {slides[currentSlide].title}
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <div className="overflow-hidden">
                <h2
                  className={`text-orange-400 text-xl lg:text-2xl font-bold transition-all duration-1000 transform ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  {slides[currentSlide].subtitle}
                </h2>
              </div>

              {/* Description */}
              <div className="overflow-hidden">
                <p
                  className={`text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl transition-all duration-1000 transform ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: "800ms",
                    textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                  }}
                >
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="overflow-hidden">
                <div
                  className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 transform ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "1200ms" }}
                >
                  {/* Primary CTA */}
                  <button className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/25 hover:scale-105">
                    <span className="relative z-10 flex items-center space-x-3">
                      <span>Explore Services</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </button>

                  {/* Secondary CTA */}
                  <button className="group flex items-center space-x-3 text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:border-orange-500 hover:text-orange-500 transition-all duration-300">
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Watch Demo</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Slide Navigation */}
            <div className="hidden lg:flex flex-col justify-center items-end space-y-6">
              {/* Slide Indicators */}
              <div className="flex flex-col space-y-4">
                {slides.map((slide, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`group flex items-center space-x-4 p-4 rounded-2xl transition-all duration-500 ${
                      index === currentSlide
                        ? "bg-white/10 backdrop-blur-sm border border-orange-500/50"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-orange-500 shadow-lg shadow-orange-500/50"
                          : "bg-white/30 group-hover:bg-white/50"
                      }`}
                    ></div>
                    <div className="text-left">
                      <div
                        className={`text-sm font-bold transition-colors duration-300 ${
                          index === currentSlide
                            ? "text-orange-400"
                            : "text-white/70 group-hover:text-white"
                        }`}
                      >
                        {slide.title}
                      </div>
                      <div className="text-xs text-gray-400">
                        {slide.category}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Play/Pause Control */}
              <button
                onClick={togglePlayPause}
                className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 group"
              >
                {isPlaying ? (
                  <div className="flex space-x-1">
                    <div className="w-1 h-4 bg-white group-hover:bg-black transition-colors duration-300"></div>
                    <div className="w-1 h-4 bg-white group-hover:bg-black transition-colors duration-300"></div>
                  </div>
                ) : (
                  <Play className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300 ml-0.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
