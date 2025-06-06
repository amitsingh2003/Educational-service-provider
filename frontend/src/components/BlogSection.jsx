import React from 'react';
import { ArrowRight, User, Calendar, Clock, Eye } from 'lucide-react';

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "i-merit Signs MoU with Kanpur Institute of Technology (KIT) to Implement Skill Development...",
      author: "The Hindu",
      date: "18 Mar",
      readTime: "5 min read",
      views: "2.1k",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Technology Partnership",
      excerpt: "Revolutionary partnership aims to bridge the skill gap in emerging technologies through comprehensive training programs."
    },
    {
      id: 2,
      title: "Top Certified Data Analytics Courses For A High-Paying Career In 2025",
      author: "Good Returns",
      date: "10 Mar",
      readTime: "8 min read",
      views: "3.4k",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Data Analytics",
      excerpt: "Discover the most sought-after data analytics certifications that guarantee lucrative career opportunities in 2025."
    },
    {
      id: 3,
      title: "Breaking Barriers: Industry Insights on Women's Advancement",
      author: "The Hans India",
      date: "07 Mar",
      readTime: "6 min read",
      views: "1.8k",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Women's Advancement",
      excerpt: "Exploring innovative strategies and real-world success stories that are reshaping workplace diversity and inclusion."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black mb-8 leading-[0.9] tracking-tight">
            Latest Industry{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Insights
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stay ahead with our curated collection of industry-leading articles and expert insights
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-4 cursor-pointer"
              style={{
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Animated Shadow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl group-hover:blur-2xl"></div>
              
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-100 group-hover:border-orange-200 transition-all duration-500">
                
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Floating Action Button */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                      <ArrowRight className="w-6 h-6 text-orange-500 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-black text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Date Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span className="text-sm font-bold text-black">{post.date}</span>
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1 text-orange-500">
                        <User className="w-4 h-4" />
                        <span className="text-sm font-semibold">{post.author}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs">{post.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span className="text-xs">{post.views}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-black mb-4 leading-tight group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <div className="flex items-center justify-between">
                    <button className="group/btn flex items-center space-x-2 text-orange-500 font-bold hover:text-orange-600 transition-all duration-300">
                      <span className="relative">
                        Read Article
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 group-hover/btn:w-full transition-all duration-300"></div>
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-1000 ease-out"></div>
              </div>
            </div>
          ))}
        </div>

       

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-orange-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-black/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
}