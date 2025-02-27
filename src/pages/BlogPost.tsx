import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Tag, User, ArrowLeft } from 'lucide-react';
import { BlogPost as BlogPostType } from '../types';
import SEO from '../components/SEO';

// This would typically come from an API
const blogPosts: BlogPostType[] = [
  {
    id: 1,
    title: "Top 10 Corporate Gift Ideas for 2025",
    slug: "top-corporate-gift-ideas-2025",
    excerpt: "Discover innovative and meaningful corporate gift ideas that will strengthen your business relationships in 2025.",
    content: `
      <p>In today's competitive business landscape, corporate gifting has evolved beyond traditional items to become a strategic tool for building and maintaining professional relationships. Here are our top 10 corporate gift ideas for 2025:</p>

      <h2>1. Sustainable Tech Accessories</h2>
      <p>Eco-friendly phone chargers, laptop stands, and other tech accessories made from recycled materials show both environmental consciousness and practicality.</p>

      <h2>2. Personalized Wellness Packages</h2>
      <p>Curated wellness boxes containing premium self-care items, healthy snacks, and mindfulness tools demonstrate care for recipients' well-being.</p>

      <h2>3. Custom Printed Merchandise</h2>
      <p>High-quality, branded items like notebooks, water bottles, and bags that combine functionality with style.</p>

      [Rest of the blog post content...]
    `,
    author: "Sarah Wilson",
    date: "2025-03-15",
    category: "Corporate Gifts",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80",
    tags: ["Corporate Gifts", "Business Relations", "Gift Ideas"]
  },
  // Add other blog posts...
];

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
          <Link to="/blog" className="text-indigo-600 hover:text-indigo-700">
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <SEO 
        title={post.title}
        description={post.excerpt}
        image={post.image}
        type="article"
      />
      
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog */}
        <Link
          to="/blog"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Blog
        </Link>

        {/* Featured Image */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
        />

        {/* Article Header */}
        <header className="mb-8">
          <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm inline-block mb-4">
            {post.category}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4 mb-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(post.date).toLocaleDateString()}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
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
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share and Navigation */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link
              to="/blog"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Blog
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}