import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ChevronDown,
  Menu,
  X,
  Users,
  FileText,
  UserCheck,
  Calculator,
  GraduationCap,
  Hash,
  Cloud,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const dropdownTimeoutRef = useRef(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 80);
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const navigationItems = [
    { name: "Home", href: "/", hasDropdown: false },
    {
      name: "About Us",
      href: "/about",
      hasDropdown: true,
      type: "about",
      dropdownItems: [
        {
          name: "About Us",
          href: "/about",
          icon: Users,
          description:
            "Discover our mission, values, and journey toward transformative impact.",
          badge: "New",
        },
        {
          name: "Leadership Team",
          href: "/leadership",
          icon: UserCheck,
          description:
            "Meet our team guiding our strategy, innovation, and growth.",
        },
        {
          name: "News & Updates",
          href: "/news",
          icon: FileText,
          description:
            "Stay informed with our latest achievements, events, and announcements.",
        },
        {
          name: "Contact Us",
          href: "/contact",
          icon: Phone,
          description:
            "Reach out for inquiries, collaborations, or support—let's connect today.",
        },
      ],
    },
    { name: "i-merit", href: "https://i-merit.com/", hasDropdown: false },
    {
      name: "Scholar Services",
      href: "/scholar-services",
      hasDropdown: true,
      type: "scholar",
      dropdownItems: [
        {
          name: "Mathlab",
          href: "/mathlab",
          icon: Calculator,
          description:
            "Interactive platform offering transformative math learning for all skill levels.",
          badge: "Popular",
        },
        {
          name: "SM360",
          href: "/sm360",
          icon: GraduationCap,
          description:
            "Empowering education through innovation for students and educators.",
        },
      ],
    },
    {
      name: "Professional Services",
      href: "/professional-services",
      hasDropdown: true,
      type: "professional",
      dropdownItems: [
        {
          name: "#taskone",
          href: "/taskone",
          icon: Hash,
          description:
            "Top-tier development and support services with flexible, on-demand pricing.",
          badge: "Featured",
        },
        {
          name: "#cloudone",
          href: "/cloudone",
          icon: Cloud,
          description:
            "Cloud infrastructure management with procurement, support, and optimization services.",
        },
      ],
    },
    { name: "Careers", href: "/careers", hasDropdown: false },
    {
      name: "Linked Sites",
      href: "#linked-sites",
      hasDropdown: true,
      type: "linked",
      dropdownItems: [
        {
          name: "#taskone",
          href: "https://taskone.world/",
          icon: Hash,
          description: "iTechWorks",
        },
      ],
    },
  ];

  const socialIcons = [
    {
      Icon: Facebook,
      href: "#facebook",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      Icon: Instagram,
      href: "#instagram",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      Icon: Twitter,
      href: "#twitter",
      label: "Twitter",
      color: "hover:bg-blue-400",
    },
    {
      Icon: Linkedin,
      href: "#linkedin",
      label: "LinkedIn",
      color: "hover:bg-blue-700",
    },
  ];

  const handleDropdownHover = (index) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(index);
    setHoveredItem(index);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredItem(null);
    }, 150);
  };

  const handleDropdownStay = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const renderDropdownContent = (item, index) => {
    const baseClasses =
      "absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[100] backdrop-blur-lg";

    if (item.type === "about") {
      return (
        <div
          className={`${baseClasses} w-screen max-w-4xl`}
          onMouseEnter={handleDropdownStay}
          onMouseLeave={handleDropdownLeave}
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600"></div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {item.dropdownItems?.map((dropdownItem, dropIndex) => (
                <a
                  key={dropdownItem.name}
                  href={dropdownItem.href}
                  className="group relative p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 hover:from-orange-50 hover:to-orange-100 transition-all duration-500 cursor-pointer border border-transparent hover:border-orange-200 hover:shadow-lg transform hover:-translate-y-1"
                  style={{
                    animationDelay: `${dropIndex * 100}ms`,
                    animation:
                      "slideInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                  }}
                >
                  {dropdownItem.badge && (
                    <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {dropdownItem.badge}
                    </span>
                  )}
                  <div className="flex items-start space-x-4">
                    <div className="relative p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-500 shadow-sm">
                      <dropdownItem.icon className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300 flex items-center">
                        {dropdownItem.name}
                        <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {dropdownItem.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Ready to get started?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Connect with Scholars Merit for expert guidance and seamless
                    collaboration.
                  </p>
                </div>
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-black hover:to-gray-900 text-white px-8 py-3 rounded-full font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-xl shadow-lg flex items-center space-x-2 group">
                  <span>Get In Touch</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (item.type === "scholar" || item.type === "professional") {
      return (
        <div
          className={`${baseClasses} w-screen max-w-3xl`}
          onMouseEnter={handleDropdownStay}
          onMouseLeave={handleDropdownLeave}
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600"></div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {item.dropdownItems?.map((dropdownItem, dropIndex) => (
                <a
                  key={dropdownItem.name}
                  href={dropdownItem.href}
                  className="group relative p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 hover:from-orange-50 hover:to-orange-100 transition-all duration-500 cursor-pointer border border-transparent hover:border-orange-200 hover:shadow-lg transform hover:-translate-y-1"
                  style={{
                    animationDelay: `${dropIndex * 100}ms`,
                    animation:
                      "slideInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                  }}
                >
                  {dropdownItem.badge && (
                    <span
                      className={`absolute top-3 right-3 text-white text-xs px-2 py-1 rounded-full font-medium ${
                        dropdownItem.badge === "Popular"
                          ? "bg-green-500"
                          : dropdownItem.badge === "Featured"
                          ? "bg-purple-500"
                          : "bg-orange-500"
                      }`}
                    >
                      {dropdownItem.badge}
                    </span>
                  )}
                  <div className="flex items-start space-x-4">
                    <div className="relative p-3 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-500 shadow-sm">
                      {item.type === "professional" ? (
                        <span className="text-2xl font-bold text-orange-600 group-hover:text-white transition-colors duration-500">
                          #
                        </span>
                      ) : (
                        <dropdownItem.icon className="w-6 h-6 text-orange-700 group-hover:text-white transition-colors duration-500" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300 flex items-center">
                        {dropdownItem.name}
                        <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {dropdownItem.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Ready to get started?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Connect with Scholars Merit for expert guidance and seamless
                    collaboration.
                  </p>
                </div>
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-black hover:to-gray-900 text-white px-8 py-3 rounded-full font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-xl shadow-lg flex items-center space-x-2 group">
                  <span>Get In Touch</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (item.type === "linked") {
      return (
        <div
          className="absolute top-full right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[100] backdrop-blur-lg"
          onMouseEnter={handleDropdownStay}
          onMouseLeave={handleDropdownLeave}
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600"></div>
          <div className="p-6">
            {item.dropdownItems?.map((dropdownItem, dropIndex) => (
              <a
                key={dropdownItem.name}
                href={dropdownItem.href}
                className="group block p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 hover:from-orange-50 hover:to-orange-100 transition-all duration-500 cursor-pointer border border-transparent hover:border-orange-200 hover:shadow-lg transform hover:-translate-y-1"
                style={{
                  animationDelay: `${dropIndex * 100}ms`,
                  animation:
                    "slideInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative p-2 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-500 shadow-sm">
                    <span className="text-lg font-bold text-orange-600 group-hover:text-white transition-colors duration-500">
                      #
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 flex items-center">
                      {dropdownItem.name}
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {dropdownItem.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
        }

        .navbar-shadow {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        @media (max-width: 1024px) {
          .dropdown-container {
            position: static !important;
          }
        }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ">
        {/* Top Social Media Bar - Hidden on scroll */}
        <div
          className={`bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white transition-all duration-500 ${
            isScrolled
              ? "opacity-0 -translate-y-full pointer-events-none h-0"
              : "opacity-100 translate-y-0 py-1"
          }`}
        >
          <div className="container mx-auto ">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium hidden sm:block">
                  Follow Us
                </span>
                <div className="flex space-x-2">
                  {socialIcons.map(({ Icon, href, label, color }, index) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className={`w-8 h-8 bg-orange-600  bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 ${color} transition-all duration-300 transform hover:scale-110 hover:rotate-12`}
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation:
                          "fadeInScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                      }}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center space-x-4 text-sm"></div>
                <button className="bg-orange-600 bg-opacity-20 hover:bg-white hover:text-orange-600 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-white border-opacity-30 transform hover:scale-105 backdrop-blur-sm">
                  Request A Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav
          className={`transition-all duration-500 ${
            isScrolled
              ? "glass-effect navbar-shadow backdrop-blur-xl"
              : "bg-white shadow-md"
          }`}
        >
          <div className="container mx-auto px-2">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="flex items-center">
                <a href="#home" className="block">
                  <img
                    src="https://www.scholarsmerit.com/assets/images/logo-3.svg"
                    alt="Scholars Merit Online"
                    className={`transition-all duration-500 hover:scale-105 ${
                      isScrolled ? "h-10" : "h-12"
                    }`}
                  />
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navigationItems.map((item, index) => (
                  <div key={item.name} className="relative dropdown-container">
                    <Link
                      to={item.href}
                      className="relative flex items-center space-x-1 text-gray-700 hover:text-orange-500 font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:bg-orange-50 group"
                      onMouseEnter={() =>
                        item.hasDropdown && handleDropdownHover(index)
                      }
                      onMouseLeave={() =>
                        item.hasDropdown && handleDropdownLeave()
                      }
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                      </span>
                      {item.hasDropdown && (
                        <ChevronDown
                          className={`w-4 h-4 transition-all duration-300 ${
                            activeDropdown === index
                              ? "rotate-180 text-orange-500"
                              : "group-hover:text-orange-500"
                          }`}
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {item.hasDropdown && activeDropdown === index && (
                      <div className="dropdown-content">
                        {renderDropdownContent(item, index)}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden relative text-gray-700 hover:text-orange-500 transition-colors duration-300 p-2 rounded-lg hover:bg-orange-50"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "opacity-0 rotate-180"
                        : "opacity-100 rotate-0"
                    }`}
                  />
                  <X
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "opacity-100 rotate-0"
                        : "opacity-0 -rotate-180"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden transition-all duration-500 overflow-hidden ${
              isMobileMenuOpen
                ? "max-h-screen opacity-100 bg-white border-t border-gray-200"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navigationItems.map((item, index) => (
                <div
                  key={item.name}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  {!item.hasDropdown ? (
                    item.href.startsWith("http") ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full text-left py-4 text-gray-700 hover:text-orange-500 font-medium transition-all duration-300 group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="flex items-center space-x-3">
                          <span>{item.name}</span>
                        </span>
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className="flex items-center justify-between w-full text-left py-4 text-gray-700 hover:text-orange-500 font-medium transition-all duration-300 group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="flex items-center space-x-3">
                          <span>{item.name}</span>
                        </span>
                      </Link>
                    )
                  ) : (
                    <>
                      <button
                        className="flex items-center justify-between w-full text-left py-4 text-gray-700 hover:text-orange-500 font-medium transition-all duration-300 group"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setMobileDropdownOpen(
                            mobileDropdownOpen === index ? null : index
                          );
                        }}
                      >
                        <span className="flex items-center space-x-3">
                          <span>{item.name}</span>
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-all duration-300 group-hover:text-orange-500 ${
                            mobileDropdownOpen === index
                              ? "rotate-180 text-orange-500"
                              : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Dropdown */}
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          mobileDropdownOpen === index
                            ? "max-h-screen pb-4"
                            : "max-h-0"
                        }`}
                      >
                        <div className="pl-4 space-y-2">
                          {item.dropdownItems?.map((dropdownItem, dropIndex) =>
                            dropdownItem.href.startsWith("http") ? (
                              <a
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start space-x-3 py-3 px-4 text-sm text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-300 group"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setMobileDropdownOpen(null);
                                }}
                                style={{
                                  animationDelay: `${dropIndex * 50}ms`,
                                  animation:
                                    mobileDropdownOpen === index
                                      ? "slideInUp 0.3s ease-out forwards"
                                      : "none",
                                }}
                              >
                                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-orange-500 transition-all duration-300 flex-shrink-0">
                                  {dropdownItem.icon ? (
                                    <dropdownItem.icon className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
                                  ) : (
                                    <Hash className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
                                  )}
                                </div>
                                <div>
                                  <div className="font-medium group-hover:text-orange-600 transition-colors duration-300">
                                    {dropdownItem.name}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-1 group-hover:text-gray-600 transition-colors duration-300">
                                    {dropdownItem.description}
                                  </div>
                                </div>
                              </a>
                            ) : (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className="flex items-start space-x-3 py-3 px-4 text-sm text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-300 group"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setMobileDropdownOpen(null);
                                }}
                                style={{
                                  animationDelay: `${dropIndex * 50}ms`,
                                  animation:
                                    mobileDropdownOpen === index
                                      ? "slideInUp 0.3s ease-out forwards"
                                      : "none",
                                }}
                              >
                                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-orange-500 transition-all duration-300 flex-shrink-0">
                                  {dropdownItem.icon ? (
                                    <dropdownItem.icon className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
                                  ) : (
                                    <Hash className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
                                  )}
                                </div>
                                <div>
                                  <div className="font-medium group-hover:text-orange-600 transition-colors duration-300">
                                    {dropdownItem.name}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-1 group-hover:text-gray-600 transition-colors duration-300">
                                    {dropdownItem.description}
                                  </div>
                                </div>
                              </Link>
                            )
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 mt-4 border-t border-gray-200">
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Request A Quote
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer to prevent content overlap */}
      <div
        className={`transition-all duration-500 ${
          isScrolled ? "h-20" : "h-32 md:h-32 lg:h-32"
        }`}
      />
    </>
  );
};

export default Header;
