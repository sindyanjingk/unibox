
'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  ArrowLeft,
  Search,
  Filter,
  Download,
  Eye,
  Calendar,
  DollarSign,
  TrendingUp,
  Users
} from 'lucide-react';
import PageLayout from '@/components/ui/page-layout';

const transactions = [
  {
    id: 'TRX-001',
    customer: 'Ahmad Rizki',
    email: 'ahmad@email.com',
    product: 'Instagram Followers 1K',
    category: 'Social Media',
    amount: 15000,
    fee: 1500,
    profit: 3000,
    status: 'success',
    paymentMethod: 'QRIS',
    date: '2024-12-15 14:30:25',
    orderId: 'INV-20241215-001'
  },
  {
    id: 'TRX-002',
    customer: 'Sari Dewi',
    email: 'sari@email.com',
    product: 'Mobile Legends 275 Diamond',
    category: 'Gaming',
    amount: 75000,
    fee: 7500,
    profit: 12000,
    status: 'processing',
    paymentMethod: 'Bank Transfer',
    date: '2024-12-15 13:45:12',
    orderId: 'INV-20241215-002'
  },
  {
    id: 'TRX-003',
    customer: 'Budi Santoso',
    email: 'budi@email.com',
    product: 'PLN Token 50K',
    category: 'PPOB',
    amount: 51000,
    fee: 2500,
    profit: 1500,
    status: 'success',
    paymentMethod: 'E-Wallet',
    date: '2024-12-15 12:20:08',
    orderId: 'INV-20241215-003'
  },
  {
    id: 'TRX-004',
    customer: 'Maya Lestari',
    email: 'maya@email.com',
    product: 'Netflix Premium 1 Bulan',
    category: 'Premium',
    amount: 65000,
    fee: 6500,
    profit: 15000,
    status: 'success',
    paymentMethod: 'QRIS',
    date: '2024-12-15 10:15:30',
    orderId: 'INV-20241215-004'
  },
  {
    id: 'TRX-005',
    customer: 'Andi Pratama',
    email: 'andi@email.com',
    product: 'YouTube Premium 1 Bulan',
    category: 'Premium',
    amount: 35000,
    fee: 3500,
    profit: 8000,
    status: 'failed',
    paymentMethod: 'Bank Transfer',
    date: '2024-12-15 09:30:45',
    orderId: 'INV-20241215-005'
  }
];

export default function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('today');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'success': return 'Berhasil';
      case 'processing': return 'Diproses';
      case 'failed': return 'Gagal';
      default: return 'Unknown';
    }
  };

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         transaction.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         transaction.orderId.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || transaction.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const totalRevenue = transactions.filter(t => t.status === 'success').reduce((sum, t) => sum + t.amount, 0);
  const totalProfit = transactions.filter(t => t.status === 'success').reduce((sum, t) => sum + t.profit, 0);
  const totalTransactions = transactions.length;
  const successRate = Math.round((transactions.filter(t => t.status === 'success').length / totalTransactions) * 100);

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
            <Button className="bg-green-500 hover:bg-green-600">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
          </motion.div>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-3xl font-bold text-white mb-2">Riwayat Transaksi</h1>
            <p className="text-gray-300">Kelola dan pantau semua transaksi di website Anda</p>
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
                <DollarSign className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Rp {totalRevenue.toLocaleString()}</h3>
                <p className="text-gray-400 text-sm">Total Revenue</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Rp {totalProfit.toLocaleString()}</h3>
                <p className="text-gray-400 text-sm">Total Profit</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{totalTransactions}</h3>
                <p className="text-gray-400 text-sm">Total Transaksi</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-8 h-8 text-pink-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{successRate}%</h3>
                <p className="text-gray-400 text-sm">Success Rate</p>
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
                  Cari Transaksi
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari customer, produk, atau order ID..."
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
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
                  <option value="success" className="bg-gray-900">Berhasil</option>
                  <option value="processing" className="bg-gray-900">Diproses</option>
                  <option value="failed" className="bg-gray-900">Gagal</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Periode
                </label>
                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="today" className="bg-gray-900">Hari Ini</option>
                  <option value="week" className="bg-gray-900">7 Hari Terakhir</option>
                  <option value="month" className="bg-gray-900">30 Hari Terakhir</option>
                  <option value="all" className="bg-gray-900">Semua Waktu</option>
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

          {/* Transactions Table */}
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
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Order ID</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Customer</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Produk</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Kategori</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Profit</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Tanggal</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {filteredTransactions.map((transaction, index) => (
                    <tr key={transaction.id} className="hover:bg-white/5">
                      <td className="px-6 py-4 text-sm text-white font-mono">{transaction.orderId}</td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm text-white font-medium">{transaction.customer}</div>
                          <div className="text-sm text-gray-400">{transaction.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-white">{transaction.product}</td>
                      <td className="px-6 py-4 text-sm text-gray-300">{transaction.category}</td>
                      <td className="px-6 py-4 text-sm text-white font-medium">
                        Rp {transaction.amount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-green-400 font-medium">
                        Rp {transaction.profit.toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(transaction.status)}`}>
                          {getStatusText(transaction.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">{transaction.date}</td>
                      <td className="px-6 py-4">
                        <Button size="sm" variant="outline" className="border-purple-400 text-purple-400">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredTransactions.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400">Tidak ada transaksi yang ditemukan</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
