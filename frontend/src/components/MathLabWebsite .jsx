import React, { useState } from 'react';
import { ChevronDown, Play, Users, BookOpen, Award, Target, CheckCircle, Star, Download, ArrowRight } from 'lucide-react';

const MathLabWebsite = () => {
  const [selectedKit, setSelectedKit] = useState(1);
  const [openFAQ, setOpenFAQ] = useState(null);

  const mathKits = [
    { id: 1, name: 'Math Kit for Class 1', age: '5-7', price: '₹4,905.60', originalPrice: '₹7,300.00', items: { boards: 14, charts: 28, paper: 2, working: 1, demo: 1 } },
    { id: 2, name: 'Math Kit for Class 2', age: '6-7', price: '₹5,205.60', originalPrice: '₹7,600.00', items: { boards: 16, charts: 30, paper: 2, working: 1, demo: 1 } },
    { id: 3, name: 'Math Kit for Class 3', age: '6-7', price: '₹5,505.60', originalPrice: '₹7,900.00', items: { boards: 18, charts: 32, paper: 2, working: 1, demo: 1 } },
    { id: 4, name: 'Math Kit for Class 4', age: '7-8', price: '₹5,805.60', originalPrice: '₹8,200.00', items: { boards: 20, charts: 34, paper: 2, working: 1, demo: 1 } },
    { id: 5, name: 'Math Kit for Class 5', age: '8-9', price: '₹6,105.60', originalPrice: '₹8,500.00', items: { boards: 22, charts: 36, paper: 2, working: 1, demo: 1 } },
    { id: 6, name: 'Math Kit for Class 6', age: '9-10', price: '₹6,405.60', originalPrice: '₹8,800.00', items: { boards: 24, charts: 38, paper: 2, working: 1, demo: 1 } },
    { id: 7, name: 'Math Kit for Class 7', age: '10-11', price: '₹6,705.60', originalPrice: '₹9,100.00', items: { boards: 26, charts: 40, paper: 2, working: 1, demo: 1 } },
    { id: 8, name: 'Math Kit for Class 8', age: '11-12', price: '₹7,005.60', originalPrice: '₹9,400.00', items: { boards: 28, charts: 42, paper: 2, working: 1, demo: 1 } },
    { id: 9, name: 'Math Kit for Class 9', age: '13-14', price: '₹7,305.60', originalPrice: '₹9,700.00', items: { boards: 30, charts: 44, paper: 2, working: 1, demo: 1 } },
    { id: 10, name: 'Math Kit for Class 10', age: '14+', price: '₹7,605.60', originalPrice: '₹10,000.00', items: { boards: 32, charts: 46, paper: 2, working: 1, demo: 1 } }
  ];

  const features = [
    { icon: <BookOpen className="w-6 h-6" />, title: 'Engaging Multimedia Lessons', desc: 'Interactive lessons covering diverse mathematical concepts, aligned with curriculum standards.' },
    { icon: <Target className="w-6 h-6" />, title: 'Dynamic Hands-On Activities', desc: 'Explore concepts through interactive simulations fostering deeper understanding and engagement.' },
    { icon: <CheckCircle className="w-6 h-6" />, title: 'Instant Feedback & Assessment', desc: 'Built-in assessment tools provide instant feedback, guiding students towards improvement.' },
    { icon: <Users className="w-6 h-6" />, title: 'Educator Support', desc: 'Access resources and support from education specialists to integrate Math Lab seamlessly.' }
  ];

  const benefits = {
    mathLab: [
      'Portable Math Lab',
      'Aligned with NEP 2020',
      'Covers content for classes 1-12',
      'Activity-based learning',
      'Math models, charts, and boards',
      'Training for teacher'
    ],
    mathKit: [
      'Hands-on learning',
      'Improved understanding',
      'Increased engagement',
      'Enhanced problem-solving skills',
      'Personalized learning',
      'Improved retention'
    ]
  };

  return (
    <div className="min-h-screen bg-white">
     

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Math<span className="text-orange-500">lab</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed">
                Experience a transformative approach to learning with Math Lab for schools, exclusively available through Scholars Merit under the SM360 Platform offering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 transform -rotate-3">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">Interactive Learning</h3>
                    <p className="text-gray-600">Transforming abstract concepts into tangible experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Discover the key features of <span className="text-orange-500">Math lab</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive solution offers an immersive and interactive platform designed to cater to students of all ages and skill levels.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Math Lab Selection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Select <span className="text-orange-500">Math Lab</span> for your School
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-black to-gray-800 rounded-3xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-6">Secondary Math Lab</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>Covers content necessary for class 9 & 10</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>55+ demonstration items, charts and chart display stand</span>
                </li>
              </ul>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-orange-500 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-white rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <div className="w-6 h-6 bg-orange-500 rounded"></div>
                  </div>
                </div>
                <div className="bg-orange-600 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-white rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <div className="w-6 h-6 bg-orange-600 rounded"></div>
                  </div>
                </div>
                <div className="bg-orange-700 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-white rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <div className="w-6 h-6 bg-orange-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-6">Higher Secondary Math Lab</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span>Covers content necessary for class 11 & 12</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span>25+ demonstration items, charts and chart display stand</span>
                </li>
              </ul>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-orange-700 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Math Kit Section */}
      <section id="kits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Math Kit: Elevating <span className="text-orange-500">Mathematical Learning</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Complementing the Math Lab Setup, the Math Kit for Students brings mathematics to life through hands-on exploration and experimentation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-black mb-8">Personalized Math Lab Kit</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-black mb-3">🎯 Tactile Manipulatives:</h4>
                  <p className="text-gray-600">Delve into colourful manipulatives that transform abstract mathematical concepts into tangible, relatable learning experiences.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black mb-3">📚 Guided Activities:</h4>
                  <p className="text-gray-600">Follow step-by-step activity guides designed to encourage exploration and application of mathematical knowledge in real-world scenarios.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black mb-3">🧠 Critical Thinking Challenges:</h4>
                  <p className="text-gray-600">Engage in stimulating problem-solving tasks that promote critical thinking and reasoning skills.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-yellow-400 rounded-2xl p-8 transform rotate-6">
                  <div className="text-center text-black">
                    <div className="text-4xl font-bold mb-4">MATHS LAB KIT</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-black text-white rounded-lg p-2">Class 1</div>
                      <div className="bg-black text-white rounded-lg p-2">5-7 Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kit Selection */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-bold text-black mb-6">Select your child's class</h3>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {mathKits.map((kit) => (
                    <button
                      key={kit.id}
                      onClick={() => setSelectedKit(kit.id)}
                      className={`w-full text-left p-4 rounded-lg transition-colors ${
                        selectedKit === kit.id
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-100 text-black hover:bg-gray-200'
                      }`}
                    >
                      <div className="font-semibold">{kit.name}</div>
                      <div className="text-sm opacity-75">(Age Group {kit.age})</div>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="lg:col-span-2">
                {mathKits.filter(kit => kit.id === selectedKit).map(kit => (
                  <div key={kit.id}>
                    <h3 className="text-3xl font-bold text-black mb-6">
                      {kit.name} <span className="text-orange-500">(Age Group {kit.age})</span>
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Mathematics learning kit is designed by experts and covers concepts like shapes and patterns, counting, grouping and matching, addition, subtraction, etc. These unique activity-based learning kits contain interactive learning boards, worksheets, charts, activity boards, puzzles, manuals and walk-through videos.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-semibold">Material Boards</span>
                          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">{kit.items.boards}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-semibold">Paper material</span>
                          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">{kit.items.paper}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-semibold">Working Board</span>
                          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">{kit.items.working}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-semibold">Charts</span>
                          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">{kit.items.charts}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-semibold">Demonstration Note</span>
                          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">{kit.items.demo}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl font-bold text-orange-500">{kit.price}</div>
                        <div className="text-xl text-gray-500 line-through">{kit.originalPrice}</div>
                      </div>
                      <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2">
                        Buy Now <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="mt-6 flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">Certified non-toxic materials</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Math Lab & Kit <span className="text-orange-500">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A Math Lab & Kit can provide students with a range of benefits that can improve their understanding, engagement, problem-solving skills, and preparation for real-world applications.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-black to-gray-800 rounded-3xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-8 text-orange-500">Math Lab</h3>
              <div className="space-y-4">
                {benefits.mathLab.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-8">Math Kit</h3>
              <div className="space-y-4">
                {benefits.mathKit.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-white">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-4xl font-bold mb-6">Ready to Transform Math Education?</h3>
                <p className="text-xl mb-8 opacity-90">
                  Join thousands of schools already using our innovative math solutions to enhance student learning and engagement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-orange-500 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                    <Download className="w-5 h-5 inline mr-2" />
                    Download Catalogue
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-orange-500 transition-colors font-semibold">
                    Request Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Why Choose <span className="text-orange-500">Scholars Merit?</span>
            </h2>
            <p className="text-xl text-gray-600">
              We're more than just sellers; we're partners in your educational journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Expert Guidance</h3>
              <p className="text-gray-600">Our seasoned professionals guide you through every step of implementation with finesse and expertise.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Bespoke Solution</h3>
              <p className="text-gray-600">Personalized strategies tailored to your institution's unique needs and aspirations.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Relentless Support</h3>
              <p className="text-gray-600">24/7 support ensuring your operations run smoothly without any business hour limitations.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Competitive Pricing</h3>
              <p className="text-gray-600">Affordable solutions for institutions and businesses of all sizes with competitive pricing.</p>
            </div>
          </div>
        </div>
      </section>

      </div>
    );
};
export default MathLabWebsite;


    