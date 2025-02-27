import React from 'react';
import { Customer } from '../types';

const customers: Customer[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Tech Innovations Inc.",
    testimonial: "Pixel Print Studios has been instrumental in helping us create a strong brand identity. Their attention to detail and quality is unmatched.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Global Solutions Ltd.",
    testimonial: "The team's professionalism and quick turnaround time have made them our go-to printing partner for all our corporate needs.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Creative Design Co.",
    testimonial: "Their corporate gifting solutions have helped us strengthen relationships with our clients. Highly recommended!",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
  }
];

export default function Customers() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Happy Customers</h2>
        <p className="text-xl text-gray-600">
          Don't just take our word for it - hear what our customers have to say
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {customers.map((customer) => (
          <div key={customer.id} className="card p-6">
            <div className="flex items-center mb-4">
              <img
                src={customer.image}
                alt={customer.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{customer.name}</h3>
                <p className="text-gray-600">{customer.company}</p>
              </div>
            </div>
            <blockquote className="text-gray-700 italic">
              "{customer.testimonial}"
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}