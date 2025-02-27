import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, User, ChevronRight } from 'lucide-react';
import { BlogPost } from '../types';
import SEO from '../components/SEO';

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 10 Corporate Gift Ideas for 2025",
    slug: "top-corporate-gift-ideas-2025",
    excerpt: "Discover innovative and meaningful corporate gift ideas that will strengthen your business relationships in 2025.",
    content: "Full blog post content here...",
    author: "Sarah Wilson",
    date: "2025-03-15",
    category: "Corporate Gifts",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80",
    tags: ["Corporate Gifts", "Business Relations", "Gift Ideas"]
  },
  {
    id: 2,
    title: "Sustainable Printing: The Future of Business Cards",
    slug: "sustainable-printing-business-cards",
    excerpt: "Learn how eco-friendly materials and sustainable printing practices are revolutionizing business card production.",
    content: "Full blog post content here...",
    author: "Michael Chen",
    date: "2025-03-10",
    category: "Printing Trends",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&q=80",
    tags: ["Sustainability", "Business Cards", "Eco-Friendly"]
  },
  {
    id: 3,
    title: "Color Psychology in Marketing Materials",
    slug: "color-psychology-marketing-materials",
    excerpt: "Understanding how color choices in your marketing materials can influence customer behavior and brand perception.",
    content: "Full blog post content here...",
    author: "Emma Rodriguez",
    date: "2025-03-05",
    category: "Design Tips",
    image: "https://images.unsplash.com/photo-1505322033502-1f4385692e6b?auto=format&fit=crop&q=80",
    tags: ["Design", "Marketing", "Color Theory"]
  }
];

const categories = ["All", "Corporate Gifts", "Printing Trends", "Design Tips"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = blogPosts.filter(post => 
    selectedCategory === "All" || post.category === selectedCategory
  );

  return (
    <div className="min-h-screen py-16">
      <SEO 
        title="Blog"
        description="Stay updated with the latest trends in printing, corporate gifting, and design tips from Pixel Print Studios."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600">
            Insights, trends, and tips from the world of printing and corporate gifting
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="card group">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Read More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}