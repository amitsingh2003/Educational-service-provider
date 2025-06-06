import React from 'react';
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

const Footer = () => {
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
                src="https://www.scholarsmerit.com/assets/images/logo.svg" 
                alt="Scholars Merit Online" 
                className="h-12 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-sm text-gray-300 leading-relaxed">
                Transcend Professional Excellence
              </p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Scholars Merit is a dynamic online platform committed to fostering holistic 
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
              {[
                { name: 'About us', href: '#' },
                { name: 'Blog', href: '#' },
                { name: 'SMLC', href: '#' },
                { name: 'Latest news', href: '#' },
                { name: 'Contact', href: '#' }
              ].map((link, index) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={link.href}
                    className="flex items-center text-sm text-gray-300 hover:text-orange-500 transition-colors duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:text-orange-500 transition-colors duration-300" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Other Links */}
          <motion.div 
            className="lg:col-span-1"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-6">Other Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'i-merit', href: '#' },
                { name: '#taskone', href: '#' },
                { name: '#cloudone', href: '#' },
                { name: 'Math Lab', href: '#' },
                { name: 'SM 360', href: '#' }
              ].map((link, index) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={link.href}
                    className="flex items-center text-sm text-gray-300 hover:text-orange-500 transition-colors duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:text-orange-500 transition-colors duration-300" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
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

            {/* Social Media */}
            <div>
              <h4 className="text-sm font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  { Icon: Facebook, href: 'https://www.facebook.com/scholarsmerit1/' },
                  { Icon: Instagram, href: '#' },
                  { Icon: Twitter, href: '#' },
                  { Icon: Linkedin, href: '#' }
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-orange-500 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
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
              Copyright © 2023 - 27{' '}
              <a 
                href="#" 
                className="text-white hover:text-orange-500 transition-colors duration-300 underline"
              >
                Scholars Merit Online Pvt. Ltd.
              </a>{' '}
              All Rights Reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              {[
                'Privacy Policy',
                'Terms and Conditions',
                'Shipping and Delivery',
                'Refund Policy'
              ].map((link, index) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </footer>
  );
};

export default Footer;