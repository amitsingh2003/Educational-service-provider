import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Send,
  Bell,
  Star,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
  Globe,
  TrendingUp,
  Calendar,
  Eye,
  MessageSquare,
  Share2,
  Bookmark,
  Clock,
  User,
  Filter,
  Search,
  ChevronRight,
  Play,
  ExternalLink,
} from "lucide-react";

const NewsletterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
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

  const handleSubscribe = () => {
    if (!email) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail("");
    }, 2000);
  };

  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Industry Insights",
      description: "Latest trends in education and technology",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Expert Analysis",
      description: "Deep dives from industry leaders",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Success Stories",
      description: "Real stories from our community",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Exclusive Content",
      description: "Premium content just for subscribers",
    },
  ];

  const stats = [
    { number: "50K+", label: "Subscribers" },
    { number: "95%", label: "Open Rate" },
    { number: "Weekly", label: "Delivery" },
  ];

  const categories = ["All", "AI & Tech", "Education", "Business", "Interviews", "Announcements"];

  const newsArticles = [
    {
      id: 1,
      category: "AI & Tech",
      title: "The Dark Side of AI Tutors: How Over-Personalization is Creating Education 'Filter Bubbles'",
      excerpt: "AI tutors are transforming education, but over-personalization risks creating filter bubbles that limit student's growth, curiosity, and subject diversity.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      author: "Sumit Shukla",
      role: "CEO, ScholarsMerit",
      date: "Apr 22, 2025",
      views: "2.1K",
      readTime: "5 min read",
      featured: true,
      tags: ["AI", "Education", "Personalization"]
    },
    {
      id: 2,
      category: "Education",
      title: "Breaking Barriers: Women Redefining Leadership Across Industries",
      excerpt: "Exploring how women leaders are transforming traditional industries through innovative approaches and inclusive leadership styles.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=300&fit=crop",
      author: "SM News Desk",
      date: "Mar 8, 2025",
      views: "1.8K",
      readTime: "4 min read",
      tags: ["Leadership", "Women", "Industry"]
    },
    {
      id: 3,
      category: "Business",
      title: "Business Worth ₹7 Crore in 3 Months: Left His Job to Start a Company, Made 1500 Students from 10 Colleges Skilled",
      excerpt: "An inspiring entrepreneurship story of building a successful ed-tech company from scratch and impacting thousands of students.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      author: "SM News Desk",
      date: "Jan 29, 2025",
      views: "3.2K",
      readTime: "6 min read",
      tags: ["Entrepreneurship", "Success Story", "Ed-tech"]
    },
    {
      id: 4,
      category: "Education",
      title: "Budget 2025: Will India's Education System Finally Get the Transformative reforms it Deserves?",
      excerpt: "Analyzing the education budget allocations and their potential impact on India's learning ecosystem transformation.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      author: "SM News Desk",
      date: "Jan 27, 2025",
      views: "2.8K",
      readTime: "7 min read",
      tags: ["Budget", "Policy", "Reform"]
    },
    {
      id: 5,
      category: "AI & Tech",
      title: "The EdTech Revolution: What's Next After the AI Boom?",
      excerpt: "Exploring the future of educational technology beyond artificial intelligence and its implications for learners worldwide.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      author: "SM News Desk",
      date: "Mar 6, 2025",
      views: "1.9K",
      readTime: "5 min read",
      tags: ["EdTech", "Innovation", "Future"]
    },
    {
      id: 6,
      category: "Interviews",
      title: "Voices of Innovation: Industry Leaders on 2024's Tech Milestones and 2025's Promising Trends",
      excerpt: "Exclusive interviews with technology leaders sharing insights on breakthrough innovations and future predictions.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop",
      author: "SM News Desk",
      date: "Jan 17, 2025",
      views: "2.2K",
      readTime: "8 min read",
      tags: ["Innovation", "Leadership", "Technology"]
    },
  ];

  const popularArticles = [
    { title: "Business worth ₹7 crore in 3 months:Left his job to start a company, made 1500 students from 10 colleges skilled", views: "144 Views" },
    { title: "The EdTech Revolution: What's Next After the AI Boom?", views: "90 Views" },
    { title: "Budget 2025: Will India's Education system finally get the transformative reforms it deserves?", views: "85 Views" },
    { title: "The Role of Hybrid Learnings: Balancing Accessibility and Quality", views: "39 Views" },
    { title: "Voices of innovation: Industry Leaders on 2024's Tech Milestones and 2025's Promising Trends", views: "22 Views" },
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Newsletter Subscription Section */}
      <section
        ref={sectionRef}
        className="relative py-20 lg:py-32 bg-white overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-96 h-96 rounded-full opacity-5 blur-3xl transition-all duration-1000 ease-out"
            style={{
              background: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
              left: mousePosition.x * 0.02 + "px",
              top: mousePosition.y * 0.02 + "px",
              transform: `translate(-50%, -50%)`,
            }}
          />
          <div
            className="absolute w-64 h-64 rounded-full opacity-5 blur-2xl transition-all duration-700 ease-out"
            style={{
              background: "linear-gradient(225deg, #000000 0%, #ff6b35 100%)",
              right: mousePosition.x * -0.01 + 200 + "px",
              bottom: mousePosition.y * -0.01 + 200 + "px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Newsletter Form */}
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              <div className="mb-12">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-full mb-8">
                  <Mail className="w-5 h-5 text-orange-500 mr-3" />
                  <span className="text-orange-600 font-bold text-sm tracking-wide">
                    STAY INFORMED
                  </span>
                </div>

                <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black text-black mb-8 leading-tight">
                  Join Our
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700">
                    Newsletter
                  </span>
                </h2>

                <div className="flex items-center mb-8">
                  <div className="w-20 h-1 bg-gradient-to-r from-transparent to-orange-500 rounded-full mr-4"></div>
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <div className="w-20 h-1 bg-gradient-to-l from-transparent to-orange-500 rounded-full ml-4"></div>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Get exclusive insights, industry trends, and success stories
                  delivered directly to your inbox. Join our community of
                  forward-thinking professionals and students.
                </p>
              </div>

              {!isSubscribed ? (
                <div className="mb-12">
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 text-lg"
                        />
                        <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                      <button
                        onClick={handleSubscribe}
                        disabled={isLoading || !email}
                        className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px]"
                      >
                        {isLoading ? (
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <>
                            <span>Subscribe</span>
                            <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 mt-4 flex items-center">
                    <Bell className="w-4 h-4 mr-2" />
                    No spam, unsubscribe anytime. We respect your privacy.
                  </p>
                </div>
              ) : (
                <div className="mb-12 p-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-3xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-800">
                        Welcome Aboard!
                      </h3>
                      <p className="text-green-600">
                        You've successfully subscribed to our newsletter.
                      </p>
                    </div>
                  </div>
                  <p className="text-green-700">
                    Check your inbox for a welcome email with exclusive content.
                    Get ready for amazing insights!
                  </p>
                </div>
              )}

              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-3xl lg:text-4xl font-black text-black mb-2 group-hover:text-orange-500 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Features */}
            <div
              className={`transform transition-all duration-1000 delay-300 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }`}
            >
              <div className="relative mb-12">
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 overflow-hidden">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black">
                          ScholarsMerit Weekly
                        </h3>
                        <p className="text-gray-500 text-sm">
                          Industry Insights & Trends
                        </p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">This Week</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="h-3 bg-gray-200 rounded-full w-full"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>

                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl mt-6">
                      <h4 className="font-bold text-black mb-2">
                        Featured Article
                      </h4>
                      <p className="text-gray-700 text-sm">
                        The Future of AI in Education: Transforming Learning
                        Experiences
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" />
                      <span>Premium Content</span>
                    </div>
                    <div className="flex items-center text-sm text-orange-500 font-medium">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2 group-hover:text-orange-500 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`mt-20 text-center transform transition-all duration-1000 delay-500 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-black to-gray-800 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Users className="w-5 h-5 mr-3" />
              <span>Join 50,000+ professionals staying ahead of the curve</span>
            </div>
          </div>
        </div>
      </section>

      {/* News Feed Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-full mb-8">
              <TrendingUp className="w-5 h-5 text-orange-500 mr-3" />
              <span className="text-orange-600 font-bold text-sm tracking-wide">
                LATEST NEWS
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-black mb-6">
              Stay Updated with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700">
                Industry Insights
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the latest trends, insights, and stories shaping the future of education and technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {/* Search and Filter Bar */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/20 transition-all duration-300"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-gray-400" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-3 border border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 bg-white"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Featured Article */}
              {filteredArticles.length > 0 && filteredArticles[0].featured && (
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8 border border-gray-100 group hover:shadow-2xl transition-all duration-500">
                  <div className="relative">
                    <img
                      src={filteredArticles[0].image}
                      alt={filteredArticles[0].title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full">
                        FEATURED
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                        <Bookmark className="w-5 h-5 text-gray-700" />
                      </button>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm font-medium rounded-full">
                        {filteredArticles[0].category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {filteredArticles[0].readTime}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Eye className="w-4 h-4 mr-1" />
                        {filteredArticles[0].views}
                      </div>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-black mb-4 group-hover:text-orange-600 transition-colors duration-300">
                      {filteredArticles[0].title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {filteredArticles[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-black">{filteredArticles[0].author}</p>
                          <p className="text-gray-500 text-sm">{filteredArticles[0].role || filteredArticles[0].date}</p>
                        </div>
                      </div>
                      <button className="group flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        Read More
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredArticles.slice(filteredArticles[0]?.featured ? 1 : 0).map((article) => (
                  <div
                    key={article.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                          {article.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                          <Share2 className="w-4 h-4 text-gray-700" />
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Eye className="w-4 h-4 mr-1" />
                          {article.views}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-black mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-black text-sm">{article.author}</p>
                            <p className="text-gray-500 text-xs">{article.date}</p>
                          </div>
                        </div>
                        <button className="group flex items-center text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors duration-300">
                         Read
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {filteredArticles.length > 6 && (
                <div className="text-center mt-12">
                  <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Load More Articles
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Popular Articles */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
                <h3 className="text-xl font-black text-black mb-6 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-orange-500" />
                  Popular Articles
                </h3>
                <div className="space-y-4">
                  {popularArticles.map((article, index) => (
                    <div
                      key={index}
                      className="group p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
                    >
                      <h4 className="font-medium text-black text-sm mb-2 line-clamp-3 group-hover:text-orange-600 transition-colors duration-300">
                        {article.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{article.views}</span>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter CTA */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Don't Miss Out!
                  </h3>
                  <p className="text-orange-100 text-sm mb-6">
                    Get the latest insights delivered to your inbox weekly.
                  </p>
                  <button className="w-full px-6 py-3 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-50 transition-colors duration-300">
                    Subscribe Now
                  </button>
                </div>
              </div>

              {/* Tags Cloud */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mt-8 border border-gray-100">
                <h3 className="text-xl font-black text-black mb-6">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["AI", "Education", "Technology", "Innovation", "Leadership", "Business", "Startup", "EdTech", "Future", "Trends"].map((tag, index) => (
                    <button
                      key={index}
                      className="px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-orange-100 hover:text-orange-600 transition-colors duration-300"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
              <Zap className="w-5 h-5 text-orange-400 mr-3" />
              <span className="text-orange-400 font-bold text-sm tracking-wide">
                JOIN THE MOVEMENT
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Ready to Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                Learning Journey?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              Join thousands of professionals who are staying ahead with our premium insights and exclusive content.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center">
              <Mail className="w-5 h-5 mr-3" />
              Subscribe to Newsletter
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center">
              <ExternalLink className="w-5 h-5 mr-3" />
              Explore Platform
              <ChevronRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterSection;