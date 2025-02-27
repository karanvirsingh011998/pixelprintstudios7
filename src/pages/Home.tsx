import React from 'react';
import { Link } from 'react-router-dom';
import {
  Printer, Gift, Clock, Truck,
  Palette, Package, Building2, GraduationCap,
  Building, Users2, ChevronRight, CheckCircle2
} from 'lucide-react';
import { FeatureCard } from '../components/home/FeatureCard';
import { Step } from '../components/home/Steps';

export default function Home() {
  const industries = [
    { icon: <Building2 className="h-12 w-12" />, name: 'Corporate Offices' },
    { icon: <Palette className="h-12 w-12" />, name: 'Creative Agencies' },
    { icon: <Package className="h-12 w-12" />, name: 'Event Planners' },
    { icon: <GraduationCap className="h-12 w-12" />, name: 'Educational Institutions' },
    { icon: <Building className="h-12 w-12" />, name: 'Startups' },
    { icon: <Users2 className="h-12 w-12" />, name: 'Marketing Agencies' },
  ];
  const features = [
    { icon: <Printer className="h-8 w-8" />, title: "Quality Printing", description: "State-of-the-art printing technology for exceptional results" },
    { icon: <Gift className="h-8 w-8" />, title: "Custom Gifts", description: "Unique and personalized corporate gifting solutions" },
    { icon: <Clock className="h-8 w-8" />, title: "Fast Turnaround", description: "Quick delivery without compromising on quality" },
    { icon: <Truck className="h-8 w-8" />, title: "Bulk Orders", description: "Special discounts for large quantity orders" },
  ];

  const steps = [
    { number: 1, title: "Browse Products", description: "Explore our wide range of products" },
    { number: 2, title: "Customize Order", description: "Choose specifications and quantity" },
    { number: 3, title: "Get Quote", description: "Receive detailed pricing information" },
    { number: 4, title: "Fast Delivery", description: "Get your order delivered quickly" },
  ];
  

  const testimonials = [
    {
      name: "John Smith",
      company: "Tech Solutions Inc.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      text: "The quality of their prints and corporate gifts has helped us maintain a professional image with our clients.",
      productImage: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&q=80"
    },
    {
      name: "Sarah Johnson",
      company: "Creative Co.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      text: "Exceptional service and attention to detail. Our branded merchandise looks fantastic!",
      productImage: "https://images.unsplash.com/photo-1574278143308-e4929ea4807a?auto=format&fit=crop&q=80"
    }
  ];
  const products = [
    {
      img: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&q=80",
      alt: "Business Cards",
      title: "Premium Business Cards",
      description: "High-quality business cards that make a lasting impression",
    },
    {
      img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80",
      alt: "Corporate Gifts",
      title: "Corporate Gifts",
      description: "Customized gifts that strengthen business relationships",
    },
    {
      img: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&q=80",
      alt: "Corporate Brochures",
      title: "Corporate Brochures",
      description: "Professional brochures that tell your brand story",
    },
  ];

  const clients = [
    { name: 'Company One', logo: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&q=80' },
    { name: 'Company Two', logo: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&q=80' },
    { name: 'Company Three', logo: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&q=80' },
    { name: 'Company Four', logo: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&q=80' },
    { name: 'Company Five', logo: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&q=80' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[600px]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Pixel Print Studios
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Your premier destination for premium printing and corporate gifting solutions
            </p>
            <Link
              to="/products"
              className="btn-primary text-lg inline-block"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Pixel Print Studios</h2>
              <p className="text-gray-600 mb-6">
                Since 2010, we've been delivering exceptional printing solutions and corporate gifts
                that help businesses make lasting impressions. Our commitment to quality, innovation,
                and customer satisfaction has made us a trusted partner for companies across industries.
              </p>
              <p className="text-gray-600 mb-6">
                We combine cutting-edge printing technology with creative design expertise to produce
                materials that elevate your brand and engage your audience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">15+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">100% Satisfaction</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">24/7 Support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Fast Delivery</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80"
                alt="Printing Process"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Discover our most popular printing solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {products.map((product, index) => (
              <div key={index} className="card group">
                <div className="relative overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.alt}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link to="/products" className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center">
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">Experience the Pixel Print Studios difference</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Tailored solutions for various business sectors</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md mb-4 text-indigo-600">
                  {industry.icon}
                </div>
                <h3 className="font-medium text-gray-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to get started with your order</p>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step) => (
                <Step key={step.number} {...step} />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Featured Clents */}
      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Clients & Partners</h2>
          <p className="text-xl text-gray-600">Trusted by top companies around the world</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center w-48 h-24 bg-white rounded-lg shadow-md p-4">
              <img src={client.logo} alt={client.name} className="h-16 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">What our clients say about us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-1">
                    <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                  </div>
                  <div className="w-24 h-24">
                    <img
                      src={testimonial.productImage}
                      alt="Product"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}



