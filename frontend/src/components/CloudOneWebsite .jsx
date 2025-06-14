import React, { useState, useEffect } from "react";
import {
  Cloud,
  Server,
  Users,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";

const CloudOneWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white">
    
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                  <span className="text-orange-500">#cloudone</span> is a
                  cutting edge cloud infrastructure outsourcing
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A cutting age cloud infrastructure outsourcing service that
                  helps customers enjoy cloud infrastructure management which
                  includes procurement, management, recommendations,
                  consultation, support, and optimization services for the
                  cloud.
                </p>
                <p className="text-lg text-gray-500">
                  This service has the following elements that help the
                  customers with their cloud infrastructure needs:
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Start Your Journey
                </button>
                <button className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                  alt="Cloud Infrastructure"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">
                      Live Infrastructure
                    </span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-orange-500" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl transform -rotate-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive cloud solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Cloud className="h-8 w-8" />,
                title: "Cloud Management",
                description:
                  "Complete cloud infrastructure management and optimization",
                image:
                  "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              },
              {
                icon: <Server className="h-8 w-8" />,
                title: "Infrastructure Procurement",
                description:
                  "Strategic procurement and deployment of cloud resources",
                image:
                  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Expert Consultation",
                description:
                  "Professional guidance from cloud infrastructure specialists",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-orange-500 text-white p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-black">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Service Pricing Components
            </h2>
            <p className="text-xl text-gray-600">
              Transparent pricing structure for our cloud services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <DollarSign className="h-8 w-8" />,
                title: "Consumption-Based",
                description: "Pay only for actual cloud consumption costs",
                highlight: "Per Usage",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Management Fee",
                description:
                  "20% of cloud consumption cost for comprehensive management",
                highlight: "20% Fee",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Monthly Retention",
                description:
                  "Fixed support hours allocation based on selected package",
                highlight: "Fixed Hours",
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "License Coverage",
                description:
                  "All Office licenses and supporting software included",
                highlight: "All Inclusive",
              },
            ].map((pricing, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className="text-center">
                  <div className="bg-orange-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    {pricing.icon}
                  </div>
                  <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {pricing.highlight}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {pricing.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {pricing.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Service Benefits
            </h2>
            <p className="text-xl text-gray-600">
              How CloudOne transforms your business operations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-orange-50 transition-colors duration-300 group">
                <div className="bg-orange-500 text-white p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    Budget Management
                  </h3>
                  <p className="text-gray-600">
                    Effectively managing IT outsourcing budgets and improving
                    the financial health of your projects with transparent cost
                    structures.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-orange-50 transition-colors duration-300 group">
                <div className="bg-orange-500 text-white p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    Smart Scaling
                  </h3>
                  <p className="text-gray-600">
                    No need to worry about scaling up and down cloud resources.
                    Choose optimal services that enhance project profitability
                    without cost spillage.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-orange-50 transition-colors duration-300 group">
                <div className="bg-orange-500 text-white p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    Expert Oversight
                  </h3>
                  <p className="text-gray-600">
                    Get the best oversight and optimization consultation from
                    experienced cloud infrastructure teams ensuring excellent
                    resource management.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
                  alt="Business Growth"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-lg">
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-sm">Uptime Guarantee</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent rounded-2xl transform rotate-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Services */}
      <section
        id="upcoming"
        className="py-20 bg-gradient-to-br from-gray-900 to-black text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Upcoming Services</h2>
            <p className="text-xl text-gray-300">
              This is just the beginning. Our upcoming services to benefit
              students achieve their best in life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="group">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Counselling Services"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">
                  Counselling Aggregation Services
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  You need a friend who will listen to you and help you
                  understand your goals for you to make the best of your life.
                </p>
                <div className="mt-6 flex items-center text-orange-400 group-hover:text-orange-300">
                  <span className="mr-2">Coming Soon</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Talent Profiling"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">
                  Talent Profiling Services
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our upcoming AI-based Talent Profiling features give you an
                  option to understand and create the best professional path in
                  your life.
                </p>
                <div className="mt-6 flex items-center text-orange-400 group-hover:text-orange-300">
                  <span className="mr-2">Coming Soon</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default CloudOneWebsite;
