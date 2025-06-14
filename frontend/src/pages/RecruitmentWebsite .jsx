import React from 'react';
import { Users, Briefcase, MapPin, Clock, Building, GraduationCap, ArrowRight, CheckCircle, Star, TrendingUp } from 'lucide-react';

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Join our Team
            </h1>
            <p className="text-xl sm:text-2xl font-semibold mb-8 text-orange-400">
              Make the real difference.
            </p>
            <p className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed mb-12 text-gray-200">
              Join a team where challenges drive growth, innovation shapes every project, and dedication is deeply rewarded. 
              Embark on a career journey that's engaging, impactful, and truly fulfilling. Discover your potential with us and make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                View Open Positions
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div className="text-center group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
              <p className="text-gray-600">Growth Rate</p>
            </div>
            <div className="text-center group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">4.8</h3>
              <p className="text-gray-600">Employee Rating</p>
            </div>
            <div className="text-center group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                <Building className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Global Offices</p>
            </div>
          </div>
        </div>
      </div>

      {/* Current Openings Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please find the currently open jobs with our organization in the space below. Please review 
              the job description and apply to become part of an exciting career journey.
            </p>
          </div>

          {/* Job Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-orange-100 p-3 rounded-xl mr-4">
                    <GraduationCap className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Fresh MBA or Recent Graduates
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-orange-500" />
                        Noida, India
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-green-500" />
                        Full Time
                      </div>
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-1 text-blue-500" />
                        Work From Office
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="w-4 h-4 mr-1 text-purple-500" />
                        MBA or Engineering Graduates 2023 or 2024 Pass outs
                      </div>
                    </div>
                  </div>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Apply Now
                </button>
              </div>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                We are seeking MBA students or recent graduates with at least 60% marks for a full-time internship in inside sales and business 
                development, with potential for a permanent role. This role offers hands-on experience in client engagement, lead qualification, sales 
                strategy development, and market research. Interns will gain practical insights into customer relationship management and sales 
                processes while working closely with a dynamic team. Ideal candidates are proactive communicators, strategic thinkers, and team players 
                eager to excel in sales. Join us to build a rewarding career and make a meaningful impact in a fast-paced, growth-oriented environment!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Process we Follow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined recruitment process ensures we find the best talent while providing you with a smooth application experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-center mb-6">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <span className="text-3xl font-bold text-orange-600">01</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Click on "Apply Now"
                </h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                You will be taken to the application form where you need to fill in the relevant details. 
                Please note that your email is primary for communication.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-center mb-6">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <span className="text-3xl font-bold text-orange-600">02</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Appear for Assessment & Interview
                </h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                Our recruitment team will keep in touch with you for essential assessments and interviews via email.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-center mb-6">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <span className="text-3xl font-bold text-orange-600">03</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  HR Interview and Finalization
                </h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                Once your evaluation is completed, you will be required to appear for a HR interview after which 
                your candidature will be finalized whether successfully or not.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                Why Choose Us?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-orange-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth-Oriented Environment</h3>
                    <p className="text-gray-600">Experience rapid career advancement in a dynamic, fast-paced workplace that values innovation and excellence.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-orange-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Benefits</h3>
                    <p className="text-gray-600">Comprehensive benefits package including health insurance, flexible working hours, and professional development opportunities.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-orange-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborative Culture</h3>
                    <p className="text-gray-600">Work with passionate professionals who support each other's success and celebrate achievements together.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-orange-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Impactful Work</h3>
                    <p className="text-gray-600">Make a meaningful difference through projects that challenge you and contribute to our clients' success.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                <h4 className="text-2xl font-bold">500+</h4>
                <p className="text-orange-100">Happy Employees</p>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default CareersPage;