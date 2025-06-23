'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Smartphone, 
  Gamepad2, 
  CreditCard, 
  Crown,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Filter,
  Grid,
  List,
  Heart,
  Share2,
  Eye,
  Zap
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const categories = [
  { name: 'Semua', slug: 'all', icon: Grid, count: 150, active: true },
  { name: 'Social Media', slug: 'social-media', icon: Smartphone, count: 45 },
  { name: 'Gaming', slug: 'gaming', icon: Gamepad2, count: 38 },
  { name: 'PPOB', slug: 'ppob', icon: CreditCard, count: 42 },
  { name: 'Premium', slug: 'premium', icon: Crown, count: 25 }
];

const featuredProducts = [
  {
    id: 1,
    name: 'Instagram Followers 1K',
    category: 'Social Media',
    price: 'Rp 15.000',
    originalPrice: 'Rp 20.000',
    rating: 4.9,
    sold: 500,
    image: '/api/placeholder/300/200',
    badge: 'Terlaris',
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
    badge: 'Promo',
    description: 'Proses instant, aman dan terpercaya'
  },
  {
    id: 3,
    name: 'Netflix Premium 1 Bulan',
    category: 'Streaming',
    price: 'Rp 55.000',
    originalPrice: 'Rp 89.000',
    rating: 4.9,
    sold: 280,
    image: '/api/placeholder/300/200',
    badge: 'Hemat',
    description: 'Private account, garansi replace'
  },
  {
    id: 4,
    name: 'Pulsa Telkomsel 50K',
    category: 'PPOB',
    price: 'Rp 51.000',
    originalPrice: 'Rp 50.000',
    rating: 5.0,
    sold: 150,
    image: '/api/placeholder/300/200',
    description: 'Proses otomatis 24/7'
  }
];

const resellerInfo = {
  name: 'TokoDigital Store',
  slug: 'tokodigital',
  description: 'Toko digital terpercaya sejak 2020. Melayani kebutuhan digital Anda dengan harga terbaik dan pelayanan 24/7.',
  rating: 4.9,
  totalReviews: 1250,
  totalProducts: 150,
  joined: '2020',
  location: 'Jakarta, Indonesia',
  whatsapp: '+6281234567890',
  email: 'admin@tokodigital.com',
  logo: '/api/placeholder/100/100',
  verified: true
};

export default function ResellerWebsite({ params }: { params: { slug: string } }) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (productId: number) => {
    setCartCount(cartCount + 1);
    // Implement cart logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo & Store Info */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">TD</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{resellerInfo.name}</h1>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{resellerInfo.rating} ({resellerInfo.totalReviews} review)</span>
                  {resellerInfo.verified && (
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                  )}
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Cari produk..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <Heart className="w-6 h-6" />
              </button>
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-purple-500 text-white text-xs rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <Link href={`/reseller/${params.slug}/login`}>
                <Button variant="outline" className="border-purple-200 text-purple-600">
                  <User className="w-4 h-4 mr-2" />
                  Masuk
                </Button>
              </Link>
              <Link href={`/reseller/${params.slug}/register`}>
                <Button className="bg-purple-500 hover:bg-purple-600">
                  Daftar
                </Button>
              </Link>
              <Button className="bg-green-500 hover:bg-green-600">
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Store Banner */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <motion.div className="lg:col-span-2" {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-4">{resellerInfo.description}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">{resellerInfo.totalProducts}+</div>
                  <div className="text-purple-200">Produk</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{resellerInfo.totalReviews}+</div>
                  <div className="text-purple-200">Review</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-purple-200">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{resellerInfo.joined}</div>
                  <div className="text-purple-200">Sejak</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="text-center lg:text-right"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <MapPin className="w-5 h-5" />
                <span>{resellerInfo.location}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Kategori Produk</h2>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-400'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-400'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex space-x-4 overflow-x-auto pb-4">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === category.slug
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Produk Unggulan</h2>
            <Button variant="outline" className="border-purple-200 text-purple-600">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>

          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'} gap-6`}>
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">{product.name}</span>
                  </div>
                  {product.badge && (
                    <span className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold ${
                      product.badge === 'Terlaris' ? 'bg-red-100 text-red-600' :
                      product.badge === 'Promo' ? 'bg-orange-100 text-orange-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {product.badge}
                    </span>
                  )}
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:shadow-md">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600">({product.sold} terjual)</span>
                    </div>
                    <span className="text-xs text-gray-500">{product.category}</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-lg font-bold text-purple-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button 
                      onClick={() => addToCart(product.id)}
                      className="flex-1 bg-purple-500 hover:bg-purple-600"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Beli
                    </Button>
                    <Button variant="outline" className="px-3">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-purple-200 text-purple-600">
              Lihat Semua Produk <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Butuh Bantuan?</h2>
              <p className="text-gray-600 mb-6">
                Tim customer service kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami jika ada pertanyaan.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                  <Phone className="w-8 h-8 text-green-500" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-sm text-gray-600">Respon cepat</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                  <Mail className="w-8 h-8 text-blue-500" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-gray-600">Max 24 jam</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                  <Clock className="w-8 h-8 text-purple-500" />
                  <div>
                    <p className="font-semibold">24/7</p>
                    <p className="text-sm text-gray-600">Selalu online</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
              <div className="space-y-4">
                <Button className="w-full bg-green-500 hover:bg-green-600">
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button variant="outline" className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
                <Button variant="outline" className="w-full">
                  <Share2 className="w-4 h-4 mr-2" />
                  Bagikan Toko
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">TD</span>
                </div>
                <h3 className="text-xl font-bold">{resellerInfo.name}</h3>
              </div>
              <p className="text-gray-400 mb-4">{resellerInfo.description}</p>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Powered by</span>
                <Link href="/" className="text-purple-400 font-semibold">UniBox</Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kategori</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Social Media</Link></li>
                <li><Link href="#" className="hover:text-white">Gaming</Link></li>
                <li><Link href="#" className="hover:text-white">PPOB</Link></li>
                <li><Link href="#" className="hover:text-white">Premium Accounts</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Informasi</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Tentang Kami</Link></li>
                <li><Link href="#" className="hover:text-white">Cara Pemesanan</Link></li>
                <li><Link href="#" className="hover:text-white">Syarat & Ketentuan</Link></li>
                <li><Link href="#" className="hover:text-white">Kebijakan Privasi</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 {resellerInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}