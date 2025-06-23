
'use client'

import { useState } from 'react';
import { Search, Filter, Star, ShoppingCart } from 'lucide-react';

const categories = [
  'Semua Kategori',
  'Social Media',
  'Gaming',
  'Streaming',
  'PPOB',
  'Premium Apps'
];

const products = [
  {
    id: 1,
    name: 'Instagram Followers 1K',
    category: 'Social Media',
    price: 'Rp 15.000',
    originalPrice: 'Rp 20.000',
    rating: 4.9,
    sold: 500,
    image: '/api/placeholder/300/200',
    description: 'Real followers Indonesia, garansi 30 hari'
  },
  {
    id: 2,
    name: 'Mobile Legends 100 Diamond',
    category: 'Gaming',
    price: 'Rp 25.000',
    originalPrice: 'Rp 30.000',
    rating: 4.8,
    sold: 320,
    image: '/api/placeholder/300/200',
    description: 'Proses instant, aman dan terpercaya'
  },
  // Add more products as needed
];

export default function ResellerProductsPage({ params }: { params: { slug: string } }) {
  const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Semua Kategori' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Semua Produk</h1>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded">
                  {product.category}
                </span>
                <div className="flex items-center text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
                </div>
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                {product.name}
              </h3>
              
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-lg font-bold text-purple-600">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through ml-2">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                <span className="text-xs text-gray-500">{product.sold} terjual</span>
              </div>
              
              <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Beli Sekarang
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Produk tidak ditemukan</h3>
          <p className="text-gray-600">Coba ubah kata kunci pencarian atau kategori</p>
        </div>
      )}
    </div>
  );
}
