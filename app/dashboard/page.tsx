
'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  ShoppingCart,
  TrendingUp,
  TrendingDown,
  Eye,
  Settings,
  Bell,
  Search,
  Plus,
  Download,
  Filter,
  Calendar,
  Globe,
  Smartphone,
  Gamepad2,
  CreditCard,
  Crown,
  LogOut,
  Menu,
  X
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stats = [
  {
    title: 'Total Penjualan',
    value: 'Rp 2.450.000',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-green-400'
  },
  {
    title: 'Transaksi Hari Ini',
    value: '24',
    change: '+8.3%',
    trend: 'up',
    icon: ShoppingCart,
    color: 'text-blue-400'
  },
  {
    title: 'Total Customer',
    value: '156',
    change: '+15.2%',
    trend: 'up',
    icon: Users,
    color: 'text-purple-400'
  },
  {
    title: 'Kunjungan Website',
    value: '1.2K',
    change: '-2.1%',
    trend: 'down',
    icon: Eye,
    color: 'text-orange-400'
  }
];

const recentTransactions = [
  {
    id: 'TRX001',
    customer: 'Ahmad Rizki',
    product: 'Instagram Followers 1K',
    amount: 'Rp 15.000',
    status: 'success',
    time: '2 menit lalu'
  },
  {
    id: 'TRX002',
    customer: 'Sari Indah',
    product: 'Netflix Premium 1 Bulan',
    amount: 'Rp 55.000',
    status: 'processing',
    time: '5 menit lalu'
  },
  {
    id: 'TRX003',
    customer: 'Budi Santoso',
    product: 'Mobile Legends 100 Diamond',
    amount: 'Rp 25.000',
    status: 'success',
    time: '12 menit lalu'
  },
  {
    id: 'TRX004',
    customer: 'Lisa Permata',
    product: 'Spotify Premium 1 Bulan',
    amount: 'Rp 25.000',
    status: 'failed',
    time: '18 menit lalu'
  }
];

const topProducts = [
  { name: 'Instagram Followers 1K', sales: 45, revenue: 'Rp 675.000', category: 'Social Media' },
  { name: 'Mobile Legends Diamond', sales: 38, revenue: 'Rp 950.000', category: 'Gaming' },
  { name: 'Netflix Premium', sales: 32, revenue: 'Rp 1.760.000', category: 'Streaming' },
  { name: 'Pulsa Telkomsel 50K', sales: 28, revenue: 'Rp 1.400.000', category: 'PPOB' }
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [timeRange, setTimeRange] = useState('7d');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-black/20 backdrop-blur-md border-r border-white/10 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0`}>
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            UniBox
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="mt-6 px-6">
          <div className="space-y-1">
            <Link href="/dashboard" className="flex items-center px-4 py-3 text-purple-400 bg-purple-500/20 rounded-lg">
              <BarChart3 className="w-5 h-5 mr-3" />
              Dashboard
            </Link>
            <Link href="/dashboard/products" className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
              <ShoppingCart className="w-5 h-5 mr-3" />
              Produk
            </Link>
            <Link href="/dashboard/transactions" className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
              <DollarSign className="w-5 h-5 mr-3" />
              Transaksi
            </Link>
            <Link href="/dashboard/customers" className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
              <Users className="w-5 h-5 mr-3" />
              Customer
            </Link>
            <Link href="/dashboard/website" className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
              <Globe className="w-5 h-5 mr-3" />
              Website Saya
            </Link>
            <Link href="/dashboard/settings" className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
              <Settings className="w-5 h-5 mr-3" />
              Pengaturan
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-4">Kategori Produk</p>
            <div className="space-y-1">
              <Link href="/dashboard/social-media" className="flex items-center px-4 py-2 text-gray-400 hover:text-white text-sm">
                <Smartphone className="w-4 h-4 mr-3" />
                Social Media
              </Link>
              <Link href="/dashboard/gaming" className="flex items-center px-4 py-2 text-gray-400 hover:text-white text-sm">
                <Gamepad2 className="w-4 h-4 mr-3" />
                Gaming
              </Link>
              <Link href="/dashboard/ppob" className="flex items-center px-4 py-2 text-gray-400 hover:text-white text-sm">
                <CreditCard className="w-4 h-4 mr-3" />
                PPOB
              </Link>
              <Link href="/dashboard/premium" className="flex items-center px-4 py-2 text-gray-400 hover:text-white text-sm">
                <Crown className="w-4 h-4 mr-3" />
                Premium
              </Link>
            </div>
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
          <button className="flex items-center w-full px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
            <LogOut className="w-5 h-5 mr-3" />
            Keluar
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-40">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-400 hover:text-white mr-4"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Cari transaksi, customer..."
                  className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 w-64"
                />
              </div>
              <button className="relative p-2 text-gray-400 hover:text-white">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">JD</span>
                </div>
                <div className="hidden md:block">
                  <p className="text-white font-medium">John Doe</p>
                  <p className="text-gray-400 text-sm">johndoe.unibox.id</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">{stat.title}</p>
                    <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      {stat.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-400 mr-1" />
                      )}
                      <span className={`text-sm ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Transactions */}
            <motion.div
              className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              {...fadeInUp}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Transaksi Terbaru</h2>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="border-white/20 text-gray-300">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/20 text-gray-300">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {transaction.customer.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{transaction.customer}</p>
                        <p className="text-gray-400 text-sm">{transaction.product}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">{transaction.amount}</p>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          transaction.status === 'success' ? 'bg-green-500/20 text-green-400' :
                          transaction.status === 'processing' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {transaction.status === 'success' ? 'Berhasil' :
                           transaction.status === 'processing' ? 'Proses' : 'Gagal'}
                        </span>
                        <span className="text-gray-400 text-xs">{transaction.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Button variant="outline" className="border-purple-400 text-purple-400">
                  Lihat Semua Transaksi
                </Button>
              </div>
            </motion.div>

            {/* Top Products */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-xl font-bold text-white mb-6">Produk Terlaris</h2>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium text-sm">{product.name}</p>
                      <p className="text-gray-400 text-xs">{product.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold text-sm">{product.sales}</p>
                      <p className="text-gray-400 text-xs">{product.revenue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-xl font-bold text-white mb-6">Aksi Cepat</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 flex-col">
                <Plus className="w-6 h-6 mb-2" />
                Tambah Produk
              </Button>
              <Button className="h-20 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 flex-col">
                <Globe className="w-6 h-6 mb-2" />
                Lihat Website
              </Button>
              <Button className="h-20 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 flex-col">
                <BarChart3 className="w-6 h-6 mb-2" />
                Laporan
              </Button>
              <Button className="h-20 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 flex-col">
                <Settings className="w-6 h-6 mb-2" />
                Pengaturan
              </Button>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
