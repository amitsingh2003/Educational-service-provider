import React from 'react';
import { Book, Users, Brain, Zap, Globe, BookOpen, Calculator, Bot, ArrowRight, GraduationCap, Target, TrendingUp } from 'lucide-react';

const SM360Platform = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                  SM<span className="text-orange-500">360</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                  SM Bundle is meticulously designed to empower students and educators alike, 
                  revolutionizing traditional educational methods through innovation and practicality.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Started
                </button>
                <button className="border-2 border-white/30 hover:border-orange-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-orange-500/10">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-orange-500/20 to-transparent p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-black/50 p-4 rounded-lg">
                    <GraduationCap className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <p className="text-sm font-semibold">KoeKraft</p>
                  </div>
                  <div className="bg-black/50 p-4 rounded-lg">
                    <BookOpen className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <p className="text-sm font-semibold">English Lab</p>
                  </div>
                  <div className="bg-black/50 p-4 rounded-lg">
                    <Calculator className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <p className="text-sm font-semibold">Maths Lab</p>
                  </div>
                  <div className="bg-black/50 p-4 rounded-lg">
                    <Bot className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <p className="text-sm font-semibold">AI Toolkit</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-orange-500 rounded-full opacity-30 animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Welcome to SM360 - Your Ladder to <span className="text-orange-500">NEP Compliance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Welcome to SM360, the all-inclusive platform that revolutionizes education through a comprehensive 
              suite of products tailored for the modern learner. At SM360, educators and students alike are 
              empowered with innovative tools that enhance the teaching and learning experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
              <Users className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-black">eLite SIS K12</h3>
              <p className="text-gray-600">
                State-of-the-art Student Information System that streamlines administrative tasks, 
                simplifies communication, and provides actionable insights to educators.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
              <Book className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-black">KoeKraft LMS</h3>
              <p className="text-gray-600">
                Learning Management System designed to engage students in dynamic and interactive 
                learning experiences with collaborative tools.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
              <Brain className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-black">Specialized Labs</h3>
              <p className="text-gray-600">
                Interactive modules including English Lab, Maths Lab, and AI Lab with assessments 
                and resources to strengthen foundational skills.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto">
              The platform offers a holistic approach to education that prioritizes accessibility, innovation, 
              and student success. With SM360, educators can unlock new possibilities in teaching methodologies, 
              while students embark on a journey of discovery and academic excellence.
            </p>
            <div className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
              Join the Community
            </div>
          </div>
        </div>
      </section>

      {/* Explore SM360 Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Explore <span className="text-orange-500">SM360</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Dive into the diverse range of innovative educational tools that make up the SM360 Platform, 
              each crafted to elevate learning experiences and empower educators and students alike.
            </p>
          </div>

          {/* KoeKraft LMS */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-2xl shadow-2xl">
                  <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 text-center">
                    <GraduationCap className="w-16 h-16 text-white mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">ONLINE COURSE</h3>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center justify-center space-x-2 text-white">
                        <Globe className="w-5 h-5" />
                        <span className="text-sm">Global Access</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-white">
                        <Users className="w-5 h-5" />
                        <span className="text-sm">Collaborative</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-black">KoeKraft LMS</h3>
                <p className="text-gray-600 italic">
                  As an authorized reseller of koekraft LMS, we bring you a cutting-edge Learning 
                  Management Platform designed to revolutionize the way you learn and teach.
                </p>
                <p className="text-gray-700">
                  KoeKraft is a Learning Management System (LMS) designed to empower educators and 
                  learners alike. With its intuitive interface and robust features, KoeKraft offers 
                  a comprehensive solution for online education, training, and skill development.
                </p>
                <p className="text-gray-700">
                  From interactive courses and assessments to collaborative tools and analytics, 
                  KoeKraft provides everything you need to create, deliver, and track engaging 
                  learning experiences.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 group">
                  <span>Click Here</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* English Language Lab */}
          <div className="mb-20 bg-gray-50 p-12 rounded-3xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-black">English Language Lab</h3>
                <p className="text-gray-600 italic">
                  An In-Depth Examination of the AI-Based English Language Lab by Liquid available 
                  on SM360 Platform as a bundled offering.
                </p>
                <p className="text-gray-700">
                  Unlock the power of language with the English Language Lab (ELL), a dynamic component 
                  of SM360 designed to enhance students' proficiency in English. Through immersive activities, 
                  interactive exercises, and engaging resources, ELL empowers students to develop their 
                  reading, writing, speaking, and listening skills with confidence.
                </p>
                <p className="text-gray-700">
                  With ELL, students embark on a personalized learning journey tailored to their individual 
                  needs and learning styles. From beginner to advanced levels, ELL offers comprehensive 
                  learning modules that cover a wide range of topics and language competencies.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 group">
                  <span>Click Here</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl shadow-2xl">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                    <BookOpen className="w-16 h-16 text-white mx-auto mb-4" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/30 p-3 rounded-lg">
                        <span className="text-white font-semibold text-sm">ENGLISH</span>
                      </div>
                      <div className="bg-white/30 p-3 rounded-lg">
                        <span className="text-white font-semibold text-sm">A-Z</span>
                      </div>
                      <div className="bg-white/30 p-3 rounded-lg">
                        <span className="text-white font-semibold text-sm">SPEAKING</span>
                      </div>
                      <div className="bg-white/30 p-3 rounded-lg">
                        <span className="text-white font-semibold text-sm">LISTENING</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Math Lab & Math Kit */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="bg-gradient-to-br from-green-500 to-teal-600 p-8 rounded-2xl shadow-2xl">
                  <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 text-center">
                    <Calculator className="w-16 h-16 text-white mx-auto mb-4" />
                    <div className="bg-white/20 p-4 rounded-lg">
                      <div className="text-white text-2xl font-bold mb-2">∑ ∫ π √</div>
                      <div className="text-white text-sm">Mathematical Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-black">Math Lab & Math Kit</h3>
                <p className="text-gray-600 italic">
                  Scholars Merit's SM360 offers a comprehensive range of resources for math education, 
                  including Math Lab and Math Kits designed to enhance learning and engagement.
                </p>
                <p className="text-gray-700">
                  The Math Lab provided by Scholars Merit offers a dynamic platform for students to 
                  explore mathematical concepts through hands-on activities and interactive experiments. 
                  With a focus on experiential learning, the Math Lab provides students with the 
                  opportunity to deepen their understanding of mathematical principles.
                </p>
                <p className="text-gray-700">
                  Additionally, Scholars Merit's Math Kits provide students with the tools and resources 
                  they need to excel in mathematics. Each Math Kit is carefully curated to align with 
                  the curriculum and promote conceptual understanding.
                </p>
              </div>
            </div>
          </div>

          {/* AI Toolkit */}
          <div className="bg-black text-white p-12 rounded-3xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">AI Toolkit — Dive Into the Future</h3>
                <p className="text-gray-300">
                  Dive into the future with the AI Toolkit Lab, an exciting addition to SM360 that 
                  empowers students to explore the fascinating world of artificial intelligence. 
                  With access to cutting-edge tools and resources, students can unleash their 
                  creativity and delve into AI concepts.
                </p>
                <p className="text-gray-300">
                  The AI Toolkit Lab provides hands-on experience with real-world applications of AI, 
                  allowing students to develop problem-solving skills and critical thinking abilities 
                  essential for success in today's digital age.
                </p>
                <p className="text-gray-300">
                  Whether they're building their own chatbots, analyzing big data sets, or creating 
                  intelligent algorithms, the AI Toolkit Lab offers endless possibilities for 
                  innovation and discovery.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-500/20 to-purple-500/20 p-8 rounded-2xl border border-orange-500/30">
                  <Bot className="w-20 h-20 text-orange-500 mx-auto mb-6" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-3 rounded-lg text-center">
                      <Brain className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                      <span className="text-sm">Machine Learning</span>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg text-center">
                      <Zap className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                      <span className="text-sm">Neural Networks</span>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg text-center">
                      <Globe className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                      <span className="text-sm">Data Analysis</span>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg text-center">
                      <TrendingUp className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                      <span className="text-sm">Algorithms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Services */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Our Upcoming <span className="text-orange-500">Services</span>
            </h2>
            <p className="text-xl text-gray-600">
              This is just the beginning. Our upcoming services to benefit the students achieve their best in life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-start space-x-6">
                <div className="bg-orange-100 p-4 rounded-2xl">
                  <Users className="w-12 h-12 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-4">Counselling Aggregation Services</h3>
                  <p className="text-gray-600 mb-6">
                    You need a friend who will listen to you and help you understand your goals 
                    for you to make the best of your life.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-center">
                      <div className="bg-orange-500 w-3 h-3 rounded-full animate-pulse"></div>
                      <div className="ml-2 text-sm text-gray-600">Coming Soon</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-start space-x-6">
                <div className="bg-orange-100 p-4 rounded-2xl">
                  <Target className="w-12 h-12 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-4">Talent Profiling Services</h3>
                  <p className="text-gray-600 mb-6">
                    Our upcoming AI based Talent Profiling features gives you an option to understand 
                    and create the best professional path in your life.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-center">
                      <div className="bg-orange-500 w-3 h-3 rounded-full animate-pulse"></div>
                      <div className="ml-2 text-sm text-gray-600">Coming Soon</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default SM360Platform;