import React, { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Users,
  Target,
  Lightbulb,
  ArrowRight,
  Star,
  Award,
  Globe,
  Zap,
} from "lucide-react";

const ScholarsmeritAbout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const missionCards = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Improve Efficiency",
      description:
        "Our Programs are created to help students improve efficiency in what they do.",
      delay: "0ms",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Better Learning",
      description:
        "We believe to put you in the Real World to gain better learning and experience",
      delay: "100ms",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Effective Skills",
      description:
        "Learn what helps you gain professional success and helps you grow.",
      delay: "200ms",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Infuse Confidence",
      description:
        "Never fail an interview due to lack of confidence in your Professional Life.",
      delay: "300ms",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
            alt="Students learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-20 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 border border-orange-500/30 rounded-full animate-spin"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-tight">
              About
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Us
              </span>
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8"></div>

            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              ScholarsMerit is a dynamic online platform committed to fostering
              holistic growth in education and professional spheres.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <span className="flex items-center justify-center">
                  Explore Programs
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section ref={sectionRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-black mb-12">
                About <span className="text-orange-500">Scholars Merit</span>
              </h2>

              <div className="space-y-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our multifaceted approach encompasses comprehensive student
                  development programs, catering to K12 students and those
                  refining their interview skills. Simultaneously, we propel
                  corporate excellence through innovative initiatives.
                </p>

                <div className="group relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
                  <div className="pl-8">
                    <blockquote className="text-2xl font-medium text-black italic mb-2">
                      "The beautiful thing about learning is that no one can
                      take it away from you"
                    </blockquote>
                    <p className="text-gray-600">
                      and it's true in all the facets of life.
                    </p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-black to-gray-800 rounded-full"></div>
                  <div className="pl-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      While
                    </h3>
                    <blockquote className="text-2xl font-medium text-black italic">
                      "Education is the most powerful weapon you can use to
                      change the world"
                    </blockquote>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  At ScholarsMerit, we seamlessly integrate educational prowess
                  and corporate expertise, creating an inclusive space where
                  students thrive and businesses excel. Our mission is to
                  empower individuals across diverse spectrums.
                </p>
              </div>
            </div>

            {/* Right Stats Card */}
            <div
              className={`relative transform transition-all duration-1000 delay-300 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }`}
            >
              <div className="relative bg-black rounded-3xl p-12 shadow-2xl overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mr-6">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">
                        Our Vision
                      </h3>
                      <p className="text-orange-400">Empowering Excellence</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-300 leading-relaxed mb-12">
                    To create a transformative learning ecosystem that bridges
                    the gap between academic knowledge and professional
                    excellence, fostering innovation and growth at every step.
                  </p>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center group">
                      <div className="text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                        500+
                      </div>
                      <div className="text-gray-400">Institutions</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                        50K+
                      </div>
                      <div className="text-gray-400">Students</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Cards Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-black mb-6">
              Our <span className="text-orange-500">Mission</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering students and professionals through innovative programs
              and exceptional learning experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionCards.map((card, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-orange-200 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: card.delay }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-black/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-black group-hover:bg-orange-500 rounded-2xl flex items-center justify-center text-white mb-6 transition-all duration-500 group-hover:scale-110">
                    {card.icon}
                  </div>

                  <h3 className="text-xl font-bold text-black mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <div
                    className={`flex items-center text-orange-500 font-medium transition-all duration-300 ${
                      hoveredCard === index
                        ? "translate-x-2 opacity-100"
                        : "translate-x-0 opacity-0"
                    }`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-orange-500/20 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 border border-white/10 rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Ready to <span className="text-orange-500">Transform</span> Your
            Future?
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of students and professionals who have already
            started their journey with Scholars Merit
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <span className="flex items-center justify-center">
                Get Started Today
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScholarsmeritAbout;
