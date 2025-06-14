import React, { useState } from "react";
import {
  DollarSign,
  TrendingDown,
  Cloud,
  Users,
  Shield,
  Clock,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Target,
  Heart,
} from "lucide-react";

const TaskOneWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <DollarSign className="w-12 h-12 text-orange-500" />,
      title: "Flexible Commercials",
      description:
        "A minimal retention fee per month that is depending on the package opted for by the customer. This minimal retention fee provides a fixed number of elapsing hours to be consumed within the month of allocation.",
    },
    {
      icon: <TrendingDown className="w-12 h-12 text-orange-500" />,
      title: "Control Spiraling Cost",
      description:
        "A regular fee per hour for the customer to pay for the services being obtained and not worry for the unnecessary resource cost.",
    },
    {
      icon: <Cloud className="w-12 h-12 text-orange-500" />,
      title: "Cloud Technology",
      description:
        "Cloud like availability of resources that means the customer has a pool of multiple resources on the technology with no financial liability on the customer for any of the resource.",
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Project Management Team",
      description:
        "Customer just pays for the hours of service of the development, but they get proper overview support from the Project Lead, and Solutions Architect of the team that is not billed to the customer for the hours allocated.",
    },
    {
      icon: <Shield className="w-12 h-12 text-orange-500" />,
      title: "Inbuilt Quality Controls",
      description:
        "A dedicated Project and Accounts Manager to ensure time and quality management for each of the task assigned in the project by the Customer Team.",
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-500" />,
      title: "Dedicated Account",
      description:
        "Number of hours allocated for a task assigned by Customer is properly vetted by the Account management team and work is only taken up by the team once the hours are approved by Customer Project Manager / Lead / Authorized Person.",
    },
  ];

  const benefits = [
    {
      icon: "💰",
      text: "Effectively managing their IT outsourcing budgets and improve financial health of the project.",
    },
    {
      icon: "⚡",
      text: "Not worry about constant generation of work for the outsourced resources. Just opt for the service that best suits their minimum hours requirement for a month.",
    },
    {
      icon: "📈",
      text: "Not worry about scaling up and scaling down of the resources to avoid any cost spill for the project. Just choose the number of hours that would suit best for the enhanced profitability of the project.",
    },
    {
      icon: "🚀",
      text: "Get more resources prepared to take any sudden spike in the project without wasting cost on training, handholding or waiting time.",
    },
    {
      icon: "✅",
      text: "Get best oversight from the experience delivery team members to ensure that the development of the task assigned is as per the best quality and time.",
    },
  ];

  const upcomingServices = [
    {
      title: "Counselling Aggregation Services",
      description:
        "You need a friend who will listen you and help you understand your goals for you to make the best of your life.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Talent Profiling Services",
      description:
        "Our upcoming AI based Talent Profiling features gives you an option to understand and create the best professional path in your life.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-black via-gray-900 to-black min-h-screen flex items-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-orange-500">#</span>taskone
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed">
                A new age outsourcing service that helps customers enjoy the
                best Development and Support Services in Pay as You Go mode
                without worrying about increasing cost of outsourced resources
                for the Project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Start Your Project
                  <ArrowRight className="inline ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-white hover:border-orange-500 text-white hover:text-orange-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Unique Outsourcing Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <span className="text-orange-500 font-semibold">#taskone</span> is
              a new age outsourcing service that helps customers enjoy the best
              Development and Support Services in Pay as You Go mode without
              worrying about increasing cost of outsourced resources for the
              project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-orange-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              <span className="text-orange-500">#</span>taskone
            </h2>
            <p className="text-xl text-gray-600">
              Service Benefits the Customers in
            </p>
          </div>

          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-orange-50 transition-all duration-300 group"
              >
                <div className="text-4xl group-hover:scale-125 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-700 group-hover:text-black transition-colors">
                    {benefit.text}
                  </p>
                </div>
                <div className="w-4 h-4 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Services */}
      <section id="upcoming" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Upcoming Services
            </h2>
            <p className="text-xl text-gray-300">
              This is just the beginning. Our upcoming services to benefit the
              students achieve their best in life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {upcomingServices.map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="text-white h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskOneWebsite;
