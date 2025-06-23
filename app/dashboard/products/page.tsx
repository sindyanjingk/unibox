
'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  ArrowLeft,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  ToggleLeft,
  ToggleRight,
  Upload,
  Download
} from 'lucide-react';
import PageLayout from '@/components/ui/page-layout';

const products = [
  {
    id: '1',
    name: 'Instagram Followers 1K',
    category: 'Social Media',
    price: 15000,
    cost: 12000,
    profit: 3000,
    stock: 999,
    status: 'active',
    sold: 250,
    rating: 4.8,
    description: 'Real followers Indonesia, garansi 30 hari',
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    name: 'Mobile Legends 275 Diamond',
    category: 'Gaming',
    price: 75000,
    cost: 63000,
    profit: 12000,
    stock: 50,
    status: 'active',
    sold: 189,
    rating: 4.9,
    description: 'Proses instant, aman dan terpercaya',
    createdAt: '2024-01-20'
  },
  {
    id: '3',
    name: 'Netflix Premium 1 Bulan',
    category: 'Premium',
    price: 65000,
    cost: 50000,
    profit: 15000,
    stock: 25,
    status: 'active',
    sold: 145,
    rating: 4.7,
    description: 'Private account, garansi replace',
    createdAt: '2024-02-01'
  },
  {
    id: '4',
    name: 'PLN Token 50K',
    category: 'PPOB',
    price: 51000,
    cost: 49500,
    profit: 1500,
    stock: 999,
    status: 'inactive',
    sold: 89,
    rating: 5.0,
    description: 'Proses otomatis 24/7',
    createdAt: '2024-01-10'
  }
];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showAddProduct, setShowAddProduct] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || product.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const totalProducts = products.length;
  const activeProducts = products.filter(p => p.status === 'active').length;
  const totalRevenue = products.reduce((sum, p) => sum + (p.price * p.sold), 0);
  const totalProfit = products.reduce((sum, p) => sum + (p.profit * p.sold), 0);

  return (
    <PageLayout showRegisterButton={false}>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4">
              <Link
                href="/dashboard"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Kembali ke Dashboard</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard/import-products">
                <Button variant="outline" className="border-blue-400 text-blue-400">
                  <Upload className="w-4 h-4 mr-2" />
                  Import Produk
                </Button>
              </Link>
              <Button className="bg-purple-500 hover:bg-purple-600" onClick={() => setShowAddProduct(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Tambah Produk
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-3xl font-bold text-white mb-2">Kelola Produk</h1>
            <p className="text-gray-300">Tambah, edit, dan kelola semua produk di website Anda</p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">{totalProducts}</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{totalProducts}</h3>
                <p className="text-gray-400 text-sm">Total Produk</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">{activeProducts}</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{activeProducts}</h3>
                <p className="text-gray-400 text-sm">Produk Aktif</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">Rp</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Rp {totalRevenue.toLocaleString()}</h3>
                <p className="text-gray-400 text-sm">Total Revenue</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">↗</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Rp {totalProfit.toLocaleString()}</h3>
                <p className="text-gray-400 text-sm">Total Profit</p>
              </div>
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Cari Produk
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari nama produk..."
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Kategori
                </label>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all" className="bg-gray-900">Semua Kategori</option>
                  <option value="Social Media" className="bg-gray-900">Social Media</option>
                  <option value="Gaming" className="bg-gray-900">Gaming</option>
                  <option value="PPOB" className="bg-gray-900">PPOB</option>
                  <option value="Premium" className="bg-gray-900">Premium</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Status
                </label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all" className="bg-gray-900">Semua Status</option>
                  <option value="active" className="bg-gray-900">Aktif</option>
                  <option value="inactive" className="bg-gray-900">Nonaktif</option>
                </select>
              </div>

              <div className="flex items-end">
                <Button variant="outline" className="w-full border-purple-400 text-purple-400">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter Lanjutan
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Products Table */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Produk</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Kategori</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Harga</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Profit</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Stok</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Terjual</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Rating</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {filteredProducts.map((product, index) => (
                    <tr key={product.id} className="hover:bg-white/5">
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm text-white font-medium">{product.name}</div>
                          <div className="text-sm text-gray-400">{product.description}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">{product.category}</td>
                      <td className="px-6 py-4 text-sm text-white font-medium">
                        Rp {product.price.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-green-400 font-medium">
                        Rp {product.profit.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-white">
                        {product.stock === 999 ? '∞' : product.stock}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">{product.sold}</td>
                      <td className="px-6 py-4 text-sm text-yellow-400">★ {product.rating}</td>
                      <td className="px-6 py-4">
                        <button className="flex items-center">
                          {product.status === 'active' ? (
                            <ToggleRight className="w-6 h-6 text-green-400" />
                          ) : (
                            <ToggleLeft className="w-6 h-6 text-gray-400" />
                          )}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline" className="border-blue-400 text-blue-400">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-purple-400 text-purple-400">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-red-400 text-red-400">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400">Tidak ada produk yang ditemukan</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
