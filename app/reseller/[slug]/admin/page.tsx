
'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { 
  Users, 
  Package, 
  TrendingUp, 
  DollarSign,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Download,
  Settings,
  Bell,
  User,
  LogOut,
  BarChart3,
  ShoppingCart,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

// Dummy data
const users = [
  { id: 1, name: 'John Doe', email: 'john@email.com', phone: '08123456789', orders: 5, totalSpent: 'Rp 125.000', joinDate: '2024-12-01' },
  { id: 2, name: 'Jane Smith', email: 'jane@email.com', phone: '08123456788', orders: 3, totalSpent: 'Rp 95.000', joinDate: '2024-12-03' },
  { id: 3, name: 'Bob Wilson', email: 'bob@email.com', phone: '08123456787', orders: 8, totalSpent: 'Rp 285.000', joinDate: '2024-11-28' }
];

const products = [
  { id: 1, name: 'Instagram Followers 1K', category: 'Social Media', price: 'Rp 15.000', stock: 'Unlimited', sold: 125, status: 'active' },
  { id: 2, name: 'Mobile Legends 100 Diamond', category: 'Gaming', price: 'Rp 25.000', stock: 'Unlimited', sold: 89, status: 'active' },
  { id: 3, name: 'Netflix Premium 1 Bulan', category: 'Streaming', price: 'Rp 55.000', stock: '15', sold: 45, status: 'active' }
];

const transactions = [
  { id: 'TRX-001', user: 'John Doe', product: 'Instagram Followers 1K', amount: 'Rp 15.000', status: 'completed', date: '2024-12-15 14:30' },
  { id: 'TRX-002', user: 'Jane Smith', product: 'Mobile Legends Diamond', amount: 'Rp 25.000', status: 'processing', date: '2024-12-15 13:45' },
  { id: 'TRX-003', user: 'Bob Wilson', product: 'Netflix Premium', amount: 'Rp 55.000', status: 'pending', date: '2024-12-15 12:20' }
];

export default function ResellerAdminDashboard({ params }: { params: { slug: string } }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      case 'active': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Selesai';
      case 'processing': return 'Diproses';
      case 'pending': return 'Menunggu';
      case 'active': return 'Aktif';
      default: return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href={`/reseller/${params.slug}`} className="text-xl font-bold text-purple-600">
                {params.slug}.unibox.id
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">Admin Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Admin</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">Admin Panel</h3>
                <p className="text-gray-600 text-sm">{params.slug}</p>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'overview' ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <BarChart3 className="w-5 h-5" />
                  <span>Overview</span>
                </button>
                <button
                  onClick={() => setActiveTab('users')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'users' ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Users className="w-5 h-5" />
                  <span>Kelola User</span>
                </button>
                <button
                  onClick={() => setActiveTab('products')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'products' ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Package className="w-5 h-5" />
                  <span>Kelola Produk</span>
                </button>
                <button
                  onClick={() => setActiveTab('transactions')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'transactions' ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Transaksi</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'settings' ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Settings className="w-5 h-5" />
                  <span>Pengaturan</span>
                </button>
                <Link
                  href="/dashboard"
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Kembali ke UniBox</span>
                </Link>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-4">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                  <Button>
                    <Download className="w-4 h-4 mr-2" />
                    Export Report
                  </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm">Total User</p>
                        <p className="text-2xl font-bold text-gray-900">1,247</p>
                        <p className="text-green-600 text-sm">+12% dari bulan lalu</p>
                      </div>
                      <Users className="w-8 h-8 text-blue-500" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm">Total Transaksi</p>
                        <p className="text-2xl font-bold text-gray-900">3,892</p>
                        <p className="text-green-600 text-sm">+8% dari bulan lalu</p>
                      </div>
                      <ShoppingCart className="w-8 h-8 text-green-500" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm">Total Revenue</p>
                        <p className="text-2xl font-bold text-gray-900">Rp 12.5M</p>
                        <p className="text-green-600 text-sm">+15% dari bulan lalu</p>
                      </div>
                      <DollarSign className="w-8 h-8 text-yellow-500" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm">Produk Aktif</p>
                        <p className="text-2xl font-bold text-gray-900">156</p>
                        <p className="text-green-600 text-sm">+3 produk baru</p>
                      </div>
                      <Package className="w-8 h-8 text-purple-500" />
                    </div>
                  </div>
                </div>

                {/* Recent Activities */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Transaksi Terbaru</h2>
                    <div className="space-y-4">
                      {transactions.slice(0, 5).map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">{transaction.user}</p>
                            <p className="text-gray-600 text-sm">{transaction.product}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-900">{transaction.amount}</p>
                            <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(transaction.status)}`}>
                              {getStatusText(transaction.status)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Produk Terlaris</h2>
                    <div className="space-y-4">
                      {products.slice(0, 5).map((product, index) => (
                        <div key={product.id} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="text-lg font-bold text-purple-600">#{index + 1}</div>
                            <div>
                              <p className="font-medium text-gray-900">{product.name}</p>
                              <p className="text-gray-600 text-sm">{product.category}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-900">{product.sold} terjual</p>
                            <p className="text-gray-600 text-sm">{product.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Users Tab */}
            {activeTab === 'users' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold text-gray-900">Kelola User</h1>
                  <div className="flex space-x-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Cari user..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Tambah User
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            User
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Kontak
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Total Pesanan
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Total Belanja
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tanggal Gabung
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Aksi
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user) => (
                          <tr key={user.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                                  <User className="w-5 h-5 text-white" />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                  <div className="text-sm text-gray-500">ID: {user.id}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{user.email}</div>
                              <div className="text-sm text-gray-500">{user.phone}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {user.orders}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {user.totalSpent}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {user.joinDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Products Tab */}
            {activeTab === 'products' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold text-gray-900">Kelola Produk</h1>
                  <div className="flex space-x-3">
                    <Button variant="outline">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Tambah Produk
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Produk
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Kategori
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Harga
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Stok
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Terjual
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Aksi
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {products.map((product) => (
                          <tr key={product.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{product.name}</div>
                              <div className="text-sm text-gray-500">ID: {product.id}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {product.category}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {product.price}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {product.stock}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {product.sold}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(product.status)}`}>
                                {getStatusText(product.status)}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Transactions Tab */}
            {activeTab === 'transactions' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold text-gray-900">Kelola Transaksi</h1>
                  <div className="flex space-x-3">
                    <Button variant="outline">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Transaction ID
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            User
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Produk
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Jumlah
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tanggal
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Aksi
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {transactions.map((transaction) => (
                          <tr key={transaction.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {transaction.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {transaction.user}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {transaction.product}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {transaction.amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(transaction.status)}`}>
                                {getStatusText(transaction.status)}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {transaction.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Edit className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h1 className="text-2xl font-bold text-gray-900">Pengaturan Website</h1>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6">Informasi Website</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Website
                        </label>
                        <input
                          type="text"
                          defaultValue={`${params.slug} Store`}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Kontak
                        </label>
                        <input
                          type="email"
                          defaultValue={`admin@${params.slug}.com`}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nomor WhatsApp
                        </label>
                        <input
                          type="tel"
                          defaultValue="+6281234567890"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Alamat
                        </label>
                        <input
                          type="text"
                          defaultValue="Jakarta, Indonesia"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Deskripsi Website
                      </label>
                      <textarea
                        rows={4}
                        defaultValue="Toko digital terpercaya yang menyediakan berbagai layanan digital dengan harga terbaik dan pelayanan 24/7."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div className="flex space-x-4">
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        Simpan Perubahan
                      </Button>
                      <Button variant="outline">
                        Reset
                      </Button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
