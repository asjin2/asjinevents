import { Metadata } from 'next';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';

function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Wedding Decoration Trends in 2024 for South Indian Weddings',
      excerpt: 'Discover the latest wedding decoration trends that are making waves in Tamil Nadu weddings this year.',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
      author: 'Asjin Events Team',
      date: '2024-01-15',
      readTime: '5 min',
      category: 'Wedding Trends'
    },
    {
      id: 2,
      title: 'Planning a Budget-Friendly Wedding in Nagercoil: Complete Guide',
      excerpt: 'Learn how to plan a beautiful wedding without breaking the bank. Tips and tricks from our experienced planners.',
      image: 'https://images.pexels.com/photos/3585810/pexels-photo-3585810.jpeg',
      author: 'Asjin Events Team',
      date: '2024-01-10',
      readTime: '7 min',
      category: 'Wedding Planning'
    },
    {
      id: 3,
      title: 'Best Wedding Venues in Kanyakumari District for 2024',
      excerpt: 'A comprehensive guide to the most beautiful wedding venues across Kanyakumari district.',
      image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg',
      author: 'Asjin Events Team',
      date: '2024-01-05',
      readTime: '6 min',
      category: 'Venues'
    },
    {
      id: 4,
      title: 'Traditional Tamil Wedding Decor Elements and Their Significance',
      excerpt: 'Understanding the cultural importance of various decoration elements in Tamil weddings.',
      image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg',
      author: 'Asjin Events Team',
      date: '2023-12-28',
      readTime: '8 min',
      category: 'Culture & Tradition'
    },
    {
      id: 5,
      title: 'How to Choose the Perfect Color Scheme for Your Wedding',
      excerpt: 'Expert tips on selecting colors that complement your venue, season, and personal style.',
      image: 'https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg',
      author: 'Asjin Events Team',
      date: '2023-12-20',
      readTime: '4 min',
      category: 'Design Tips'
    },
    {
      id: 6,
      title: 'Pre-Wedding Event Ideas: Sangeet, Mehendi, and More',
      excerpt: 'Creative ideas for your pre-wedding celebrations that will make them unforgettable.',
      image: 'https://images.pexels.com/photos/3585800/pexels-photo-3585800.jpeg',
      author: 'Asjin Events Team',
      date: '2023-12-15',
      readTime: '6 min',
      category: 'Pre-Wedding Events'
    }
  ];

  const categories = ['All', 'Wedding Trends', 'Wedding Planning', 'Venues', 'Culture & Tradition', 'Design Tips', 'Pre-Wedding Events'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Wedding Planning <span className="text-purple-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Expert tips, trends, and insights for planning your perfect wedding 
            in Nagercoil and Kanyakumari district.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-purple-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter(post => activeCategory === 'All' || post.category === activeCategory)
              .map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1 mr-4">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-IN', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime} read</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-purple-600 transition-colors duration-300">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{post.author}</span>
                    </div>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Wedding Trends</h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter for the latest wedding planning tips and decoration ideas.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-900"
            />
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
'use client';
}

export default Blog;