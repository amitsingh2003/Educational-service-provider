import React, { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  ChevronDown,
  Send,
  Sparkles,
  Users,
  Award,
  Zap,
  MapPin,
  Globe,
  ExternalLink,
  CheckCircle,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    website: "",
    program: "Scholar Services",
    comment: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const programs = [
    "Scholar Services",
    "Corporate Solutions",
    "Academic Research",
    "Consulting Services",
    "Technical Support",
  ];

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
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      id: "phone",
      icon: Phone,
      title: "Contact Number",
      primary: "+91 120 435 7129",
      secondary: [
        "Toll Free: (IN) 1800 203 6639",
        "(Australia) +61 426 403 966",
      ],
      gradient: "from-orange-500 to-orange-600",
      hoverGradient: "from-orange-600 to-orange-700",
    },
    {
      id: "email",
      icon: Mail,
      title: "Email Address",
      primary: "services@smopl.biz",
      secondary: ["Available 24/7 for support"],
      gradient: "from-black to-gray-800",
      hoverGradient: "from-gray-800 to-black",
    },
  ];

  const offices = [
    {
      id: "india",
      country: "India",
      flag: "🇮🇳",
      title: "India Corporate Address",
      address: [
        "Highway Tower-1, A-13/2, Sector - 62",
        "Noida 201309 (U.P.)",
        "India",
      ],
      gradient: "from-orange-500 via-white to-green-500",
    },
    {
      id: "australia",
      country: "Australia",
      flag: "🇦🇺",
      title: "Australia Address",
      address: [
        "iTechWorks Australia 40 Fireside Avenue",
        "Point Cook, VIC 3030",
        "Australia",
      ],
      gradient: "from-blue-600 via-blue-800 to-red-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic Gradient Orbs */}
        <div
          className="absolute w-96 h-96 rounded-full opacity-15 blur-3xl transition-all duration-1000 ease-out"
          style={{
            background: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
            left: mousePosition.x * 0.02 + "px",
            top: mousePosition.y * 0.02 + "px",
            transform: `translate(-50%, -50%)`,
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full opacity-10 blur-2xl transition-all duration-700 ease-out"
          style={{
            background: "linear-gradient(225deg, #000000 0%, #ff6b35 100%)",
            right: mousePosition.x * -0.01 + 100 + "px",
            bottom: mousePosition.y * -0.01 + 100 + "px",
          }}
        />

        {/* Floating Geometric Elements */}
        <div
          className="absolute top-20 left-20 w-3 h-3 bg-orange-500/30 rotate-45 animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-40 right-32 w-2 h-2 bg-black/20 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-32 w-4 h-4 bg-orange-400/40 rotate-45 animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-2 h-2 bg-orange-600/30 rounded-full animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Header Section */}
        <div className="text-center mb-20">
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            {/* Premium Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-full mb-8">
              <Sparkles className="w-5 h-5 text-orange-500 mr-3" />
              <span className="text-orange-600 font-bold text-sm tracking-wide">
                GET IN TOUCH
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-black mb-8 leading-tight">
              Let's Create
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700">
                Excellence
              </span>
            </h1>

            {/* Decorative Line */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent to-orange-500 rounded-full mr-4"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <div className="w-20 h-1 bg-gradient-to-l from-transparent to-orange-500 rounded-full ml-4"></div>
            </div>

            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Good talks make good projects. We would be happy to hear from you.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-16 mb-20">
          {/* Left Section - Contact Information */}
          <div
            className={`xl:col-span-2 space-y-12 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            {/* Office Locations */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full -mr-16 -mt-16"></div>

              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-black">FIND US</h2>
                  <p className="text-orange-600 font-bold">
                    Our Global Offices
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {offices.map((office, index) => (
                  <div
                    key={office.id}
                    className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-orange-50 hover:to-orange-100 transition-all duration-300 border-2 border-transparent hover:border-orange-200 transform hover:scale-105 cursor-pointer"
                    onMouseEnter={() => setHoveredCard(office.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg ring-2 ring-gray-200 group-hover:ring-orange-300 transition-all duration-300">
                          <div
                            className={`w-full h-full bg-gradient-to-b ${office.gradient} flex items-center justify-center text-2xl`}
                          >
                            {office.flag}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-black text-lg mb-2 group-hover:text-orange-600 transition-colors duration-300">
                          {office.title}
                        </h3>
                        <div className="space-y-1">
                          {office.address.map((line, idx) => (
                            <p
                              key={idx}
                              className="text-gray-600 text-sm leading-relaxed"
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div
                    key={contact.id}
                    className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-transparent hover:border-orange-200 relative overflow-hidden cursor-pointer transform hover:scale-105"
                    onMouseEnter={() => setHoveredCard(contact.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${contact.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="w-8 h-8 border-2 border-gray-200 rounded-full group-hover:border-orange-300 transition-colors duration-300"></div>
                      </div>
                      <h3 className="text-orange-600 font-bold text-lg mb-4">
                        {contact.title}
                      </h3>
                      <p className="text-xl font-black text-black mb-3">
                        {contact.primary}
                      </p>
                      <div className="space-y-1">
                        {contact.secondary.map((text, idx) => (
                          <p key={idx} className="text-sm text-gray-600">
                            {text}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div
            className={`xl:col-span-1 transform transition-all duration-1000 delay-300 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div className="sticky top-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 relative">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>
                  <div className="relative z-10 text-center">
                    <h2 className="text-3xl font-black text-white mb-2">
                      Have Questions?
                    </h2>
                    <p className="text-orange-100 font-medium">
                      Feel free to contact us
                    </p>
                  </div>
                </div>

                {/* Form Content */}
                <div className="p-8">
                  <div className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative group">
                        <input
                          type="text"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-black placeholder-gray-400 group-hover:border-gray-300 group-hover:bg-gray-100/50"
                          required
                        />
                      </div>
                      <div className="relative group">
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-black placeholder-gray-400 group-hover:border-gray-300 group-hover:bg-gray-100/50"
                          required
                        />
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative group">
                        <input
                          type="tel"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-black placeholder-gray-400 group-hover:border-gray-300 group-hover:bg-gray-100/50"
                          required
                        />
                      </div>
                      <div className="relative group">
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-black placeholder-gray-400 group-hover:border-gray-300 group-hover:bg-gray-100/50"
                          required
                        />
                      </div>
                    </div>

                    {/* Website Field */}
                    <div className="relative group">
                      <input
                        type="url"
                        placeholder="Website (optional)"
                        value={formData.website}
                        onChange={(e) =>
                          handleInputChange("website", e.target.value)
                        }
                        className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-black placeholder-gray-400 group-hover:border-gray-300 group-hover:bg-gray-100/50"
                      />
                    </div>

                    {/* Program Dropdown */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-black text-left flex items-center justify-between hover:border-gray-300 hover:bg-gray-100/50 group"
                      >
                        <span className="font-medium">{formData.program}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-all duration-300 ${
                            isDropdownOpen
                              ? "rotate-180 text-orange-500"
                              : "text-gray-400"
                          }`}
                        />
                      </button>

                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-2xl z-20 overflow-hidden backdrop-blur-sm">
                          {programs.map((program, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => {
                                handleInputChange("program", program);
                                setIsDropdownOpen(false);
                              }}
                              className="w-full px-4 py-3 text-left hover:bg-orange-50 hover:text-orange-600 transition-all duration-200 text-black font-medium border-b border-gray-100 last:border-b-0"
                            >
                              {program}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Comment Field */}
                    <div className="relative group">
                      <textarea
                        placeholder="Your message..."
                        rows={4}
                        value={formData.comment}
                        onChange={(e) =>
                          handleInputChange("comment", e.target.value)
                        }
                        className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-black placeholder-gray-400 resize-none group-hover:border-gray-300 group-hover:bg-gray-100/50"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitted}
                      className={`w-full font-bold py-4 px-8 rounded-xl transform transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center space-x-3 group ${
                        isSubmitted
                          ? "bg-green-500 text-white cursor-not-allowed"
                          : "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white hover:scale-105 active:scale-95"
                      }`}
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          <span className="text-lg">Message Sent!</span>
                          <Sparkles className="w-5 h-5" />
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          <span className="text-lg">Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`text-center transform transition-all duration-1000 delay-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8 w-16 h-16 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-black">
                  Ready to Start Your Journey?
                </h3>
              </div>
              <p className="text-orange-100 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Join thousands who have transformed their careers with our
                expertise. Let's create excellence together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                  <Users className="w-5 h-5 mr-2" />
                  <span>Schedule a Call</span>
                </button>
                <button className="inline-flex items-center px-8 py-4 bg-black/20 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group border-2 border-white/20 hover:border-white/40">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  <span>View Our Work</span>
                </button>
              </div>
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

export default ContactSection;
