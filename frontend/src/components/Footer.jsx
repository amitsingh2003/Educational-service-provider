import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Phone, 
  Mail, 
  ArrowUp,
  ChevronRight
} from 'lucide-react';
import scsLogo from "../assets/logo.png"

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Quick Links matching Header navigation
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Leadership Team', href: '/leadership' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Careers', href: '/careers' }
  ];

  // Services and Other Links
  const serviceLinks = [
    { name: 'Mathlab', href: '/mathlab' },
    { name: 'SM360', href: '/sm360' },
    { name: '#taskone', href: '/taskone' },
    { name: '#cloudone', href: '/cloudone' },
    { name: 'News & Updates', href: '/news' }
  ];

  // Social Media Links with gradients
  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/scholarsmerit1/', 
      label: 'Facebook',
      gradient: 'from-blue-600 to-blue-800'
    },
    { 
      icon: Instagram, 
      href: '#instagram', 
      label: 'Instagram',
      gradient: 'from-pink-500 via-red-500 to-yellow-500'
    },
    { 
      icon: Twitter, 
      href: '#twitter', 
      label: 'Twitter',
      gradient: 'from-cyan-400 to-blue-500'
    },
    { 
      icon: Linkedin, 
      href: '#linkedin', 
      label: 'LinkedIn',
      gradient: 'from-blue-600 to-blue-800'
    }
  ];

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 border border-white rounded-full"></div>
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-6 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-1"
            variants={itemVariants}
          >
            <div className="mb-6">
              <img 
                src={scsLogo} 
                alt="Scholars Merit Online" 
                className="h-29 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-sm text-gray-300 leading-relaxed">
                Transcend Professional Excellence
              </p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              SCS Globals is a dynamic online platform committed to fostering holistic 
              growth in education and professional spheres of an individual leading to their 
              evolution from student life to corporate life.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="lg:col-span-1"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={link.href}
                    className="flex items-center text-sm text-gray-300 hover:text-orange-500 transition-colors duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:text-orange-500 transition-colors duration-300" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services & Other Links */}
          <motion.div 
            className="lg:col-span-1"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.href.startsWith('/') ? (
                    <Link 
                      to={link.href}
                      className="flex items-center text-sm text-gray-300 hover:text-orange-500 transition-colors duration-300 group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 group-hover:text-orange-500 transition-colors duration-300" />
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-300 hover:text-orange-500 transition-colors duration-300 group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 group-hover:text-orange-500 transition-colors duration-300" />
                      {link.name}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>

            {/* External Links */}
            <div className="mt-6 pt-4 border-t border-gray-700">
              <h4 className="text-sm font-medium mb-3 text-gray-400">External Links</h4>
              <ul className="space-y-2">
                <motion.li 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href="https://i-merit.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-300 hover:text-orange-500 transition-colors duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:text-orange-500 transition-colors duration-300" />
                    i-merit
                  </a>
                </motion.li>
                <motion.li 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href="https://taskone.world/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-300 hover:text-orange-500 transition-colors duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:text-orange-500 transition-colors duration-300" />
                    #taskone
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>

          {/* Contact & Enhanced Social Media */}
          <motion.div 
            className="lg:col-span-1"
            variants={itemVariants}
          >
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <motion.a 
                  href="tel:+918002036639"
                  className="flex items-center text-sm text-gray-300 hover:text-orange-500 transition-colors duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <Phone className="w-4 h-4 mr-3 group-hover:text-orange-500 transition-colors duration-300" />
                  +91 1800 203 6639
                </motion.a>
                <motion.a 
                  href="mailto:services@smopl.biz"
                  className="flex items-center text-sm text-gray-300 hover:text-orange-500 transition-colors duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <Mail className="w-4 h-4 mr-3 group-hover:text-orange-500 transition-colors duration-300" />
                  services@smopl.biz
                </motion.a>
              </div>
            </div>

            {/* Enhanced Neumorphic Social Media */}
            <div className="flex flex-col items-center gap-6">
              <span className="text-xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                Connect With Us
              </span>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    whileHover={{ scale: 1.1, rotate: 12 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : '_self'}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className={`w-14 h-14 bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)] hover:shadow-[12px_12px_24px_rgba(0,0,0,0.5),-12px_-12px_24px_rgba(255,255,255,0.08)] flex items-center justify-center transition-all duration-500 border border-gray-700/40 group relative overflow-hidden`}
                      aria-label={social.label}
                    >
                      <social.icon
                        className={`w-6 h-6 transition-all duration-300 z-10 relative ${
                          hoveredSocial === index
                            ? "text-white"
                            : "text-gray-300"
                        }`}
                      />
                      
                      {/* Gradient Background on Hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${social.gradient} rounded-2xl transition-all duration-300 ${
                          hoveredSocial === index ? 'opacity-100' : 'opacity-0'
                        }`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredSocial === index ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                        style={{ width: '200%' }}
                      />
                    </a>
                    
                    {/* Glow Effect */}
                    {hoveredSocial === index && (
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${social.gradient} rounded-2xl blur-lg opacity-50 -z-10`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.2, opacity: 0.5 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-700 mt-12 pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              Copyright © 2023 - {new Date().getFullYear()}{' '}
              <a 
                href="/" 
                className="text-white hover:text-orange-500 transition-colors duration-300 underline"
              >
                Scholars Merit Online Pvt. Ltd.
              </a>{' '}
              All Rights Reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              {[
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Terms and Conditions', href: '/terms-conditions' },
                { name: 'Shipping and Delivery', href: '/shipping-delivery' },
                { name: 'Refund Policy', href: '/refund-policy' }
              ].map((link, index) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Animated Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center shadow-[8px_8px_16px_rgba(255,165,0,0.3),-8px_-8px_16px_rgba(255,255,255,0.1)] hover:shadow-[12px_12px_24px_rgba(255,165,0,0.4),-12px_-12px_24px_rgba(255,255,255,0.15)] transition-all duration-300 z-50 backdrop-blur-lg border border-orange-400/30 group overflow-hidden"
        whileHover={{ 
          scale: 1.1, 
          rotate: [0, -10, 10, 0],
          boxShadow: "0 0 30px rgba(255,165,0,0.6)"
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20, rotate: 0 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          delay: 1,
          rotate: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        aria-label="Scroll to top"
      >
        {/* Gradient Background Animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-2xl"
          animate={{
            background: [
              "linear-gradient(135deg, #f97316, #ea580c)",
              "linear-gradient(135deg, #ea580c, #dc2626)",
              "linear-gradient(135deg, #dc2626, #f97316)",
              "linear-gradient(135deg, #f97316, #ea580c)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Arrow with Bounce Animation */}
        <motion.div
          animate={{ 
            y: [0, -3, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative z-10"
        >
          <ArrowUp className="w-6 h-6 filter drop-shadow-sm" />
        </motion.div>
        
        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl"
          style={{ width: '200%' }}
        />
        
        {/* Pulse Ring */}
        <motion.div
          className="absolute inset-0 border-2 border-white/30 rounded-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.button>
    </footer>
  );
};

export default Footer;