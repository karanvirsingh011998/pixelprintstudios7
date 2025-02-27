import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Product } from '../types';
import { useCartStore } from '../store/cartStore';

const products: Product[] = [
  {
    id: 1,
    name: "Business Cards - Premium",
    description: "High-quality business cards printed on 350gsm silk card",
    price: 49.99,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Custom Company Diary",
    description: "Personalized corporate diaries with company branding",
    price: 29.99,
    category: "Corporate Gifts",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Corporate Brochure",
    description: "Professional tri-fold brochures on premium paper",
    price: 149.99,
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Branded Water Bottles",
    description: "Eco-friendly water bottles with company logo",
    price: 19.99,
    category: "Corporate Gifts",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80"
  }
];

const categories = ["All", "Stationery", "Marketing", "Corporate Gifts"];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const addToCart = useCartStore((state) => state.addToCart);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search products..."
              className="input-field pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md ${selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-indigo-600">
                  ${product.price}
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="btn-primary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}