import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Printer, Apple as WhatsApp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Printer className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">Pixel Print Studios</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your premier destination for premium printing and corporate gifting solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400">
                <WhatsApp className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-indigo-400">Products</Link>
              </li>
              <li>
                <Link to="/customers" className="text-gray-400 hover:text-indigo-400">Customers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-indigo-400">Contact Us</Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 hover:text-indigo-400">Shopping Cart</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-indigo-400 mr-2" />
                <span>123 Print Studio Lane<br />Design City, DC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-indigo-400 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-indigo-400 mr-2" />
                <span>info@pixelprintstudios.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and exclusive offers.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-indigo-400 focus:ring focus:ring-indigo-400 focus:ring-opacity-50"
              />
              <button type="submit" className="w-full btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Pixel Print Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}