
'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  ArrowLeft,
  Package,
  Users,
  BarChart3,
  Upload,
  Settings,
  ChevronRight,
  TrendingUp,
  ShoppingCart,
  DollarSign,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  X
} from 'lucide-react';
import PageLayout from '@/components/ui/page-layout';

interface SiteData {
  id: string;
  name: string;
  slug: string;
  description: string;
  status: 'active' | 'inactive';
  totalProducts: number;
  totalUsers: number;
  totalOrders: number;
  totalRevenue: number;
  createdAt: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  cost: number;
  profit: number;
  stock: number;
  status: 'active' | 'inactive';
  sold: number;
}

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'admin' | 'user';
  status: 'active' | 'inactive';
  joinedAt: string;
  totalOrders: number;
}

interface Transaction {
  id: string;
  orderNumber: string;
  customer: string;
  product: string;
  amount: number;
  profit: number;
  status: 'success' | 'processing' | 'failed';
  date: string;
}

export default function SiteDashboard({ params }: { params: { id: string } }) {
  const [siteData, setSiteData] = useState<SiteData | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sample data - replace with actual API calls
  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'Instagram Followers 1K',
      category: 'Social Media',
      price: 15000,
      cost: 12000,
      profit: 3000,
      stock: 999,
      status: 'active',
      sold: 250
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
      sold: 189
    }
  ]);

  const [users] = useState<User[]>([
    {
      id: '1',
      name: 'Ahmad Rizki',
      email: 'ahmad@email.com',
      phone: '081234567890',
      role: 'user',
      status: 'active',
      joinedAt: '2024-01-15',
      totalOrders: 25
    },
    {
      id: '2',
      name: 'Sari Dewi',
      email: 'sari@email.com',
      phone: '081234567891',
      role: 'admin',
      status: 'active',
      joinedAt: '2024-02-01',
      totalOrders: 45
    }
  ]);

  const [transactions] = useState<Transaction[]>([
    {
      id: '1',
      orderNumber: 'ORD-001',
      customer: 'Ahmad Rizki',
      product: 'Instagram Followers 1K',
      amount: 15000,
      profit: 3000,
      status: 'success',
      date: '2024-12-15 14:30'
    },
    {
      id: '2',
      orderNumber: 'ORD-002',
      customer: 'Sari Dewi',
      product: 'Mobile Legends 275 Diamond',
      amount: 75000,
      profit: 12000,
      status: 'processing',
      date: '2024-12-15 13:45'
    }
  ]);

  useEffect(() => {
    // Simulate loading site data
    setTimeout(() => {
      setSiteData({
        id: params.id,
        name: 'TokoDigi Store',
        slug: 'tokodigi',
        description: 'Toko digital terpercaya untuk semua kebutuhan Anda',
        status: 'active',
        totalProducts: products.length,
        totalUsers: users.length,
        totalOrders: transactions.length,
        totalRevenue: transactions.reduce((sum, t) => sum + t.amount, 0),
        createdAt: '2024-01-01'
      });
      setIsLoading(false);
    }, 1000);
  }, [params.id]);

  if (isLoading) {
    return (
      <PageLayout showRegisterButton={false}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
        </div>
      </PageLayout>
    );
  }

  const sidebarItems = [
    { icon: BarChart3, label: 'Overview', tab: 'overview', active: activeTab === 'overview' },
    { icon: Package, label: 'Kelola Produk', tab: 'products', active: activeTab === 'products' },
    { icon: Upload, label: 'Import Produk', tab: 'import', active: activeTab === 'import' },
    { icon: Users, label: 'Kelola User', tab: 'users', active: activeTab === 'users' },
    { icon: BarChart3, label: 'Transaksi', tab: 'transactions', active: activeTab === 'transactions' },
    { icon: Settings, label: 'Pengaturan', tab: 'settings', active: activeTab === 'settings' },
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <Package className="w-8 h-8 text-blue-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{siteData?.totalProducts}</h3>
            <p className="text-gray-400 text-sm">Total Produk</p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8 text-green-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{siteData?.totalUsers}</h3>
            <p className="text-gray-400 text-sm">Total User</p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <ShoppingCart className="w-8 h-8 text-purple-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{siteData?.totalOrders}</h3>
            <p className="text-gray-400 text-sm">Total Order</p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="w-8 h-8 text-pink-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Rp {siteData?.totalRevenue.toLocaleString()}</h3>
            <p className="text-gray-400 text-sm">Total Revenue</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <button
          onClick={() => setActiveTab('products')}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group text-left"
        >
          <div className="flex items-center justify-between mb-4">
            <Package className="w-8 h-8 text-blue-400" />
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Kelola Produk</h3>
          <p className="text-gray-300 text-sm">Tambah, edit, atau hapus produk</p>
        </button>

        <button
          onClick={() => setActiveTab('import')}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group text-left"
        >
          <div className="flex items-center justify-between mb-4">
            <Upload className="w-8 h-8 text-purple-400" />
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Import Produk</h3>
          <p className="text-gray-300 text-sm">Import produk dari catalog utama</p>
        </button>

        <button
          onClick={() => setActiveTab('users')}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group text-left"
        >
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8 text-green-400" />
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Kelola User</h3>
          <p className="text-gray-300 text-sm">Manajemen user dan permissions</p>
        </button>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Kelola Produk</h2>
        <Button className="bg-purple-500 hover:bg-purple-600">
          <Plus className="w-4 h-4 mr-2" />
          Tambah Produk
        </Button>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
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
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-white/5">
                  <td className="px-6 py-4 text-sm text-white font-medium">{product.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{product.category}</td>
                  <td className="px-6 py-4 text-sm text-white">Rp {product.price.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-green-400">Rp {product.profit.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-white">{product.stock === 999 ? '∞' : product.stock}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{product.sold}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      product.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {product.status === 'active' ? 'Aktif' : 'Nonaktif'}
                    </span>
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
      </div>
    </div>
  );

  const renderImportProducts = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Import Produk</h2>
        <Button className="bg-green-500 hover:bg-green-600">
          <Upload className="w-4 h-4 mr-2" />
          Import Produk Terpilih
        </Button>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Import dari Catalog Utama</h3>
        <p className="text-gray-300 mb-6">Pilih produk yang ingin Anda import ke website ini</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h4 className="text-white font-medium mb-2">Produk Example {item}</h4>
              <p className="text-gray-400 text-sm mb-3">Deskripsi produk singkat</p>
              <div className="flex items-center justify-between">
                <span className="text-purple-400 font-bold">Rp 25.000</span>
                <Button size="sm" className="bg-purple-500 hover:bg-purple-600">
                  <Plus className="w-4 h-4 mr-1" />
                  Import
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Kelola User</h2>
        <Button className="bg-blue-500 hover:bg-blue-600">
          <Plus className="w-4 h-4 mr-2" />
          Tambah User
        </Button>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">User</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Email</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Phone</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Role</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Total Order</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-white/5">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm text-white font-medium">{user.name}</div>
                      <div className="text-sm text-gray-400">Bergabung: {user.joinedAt}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">{user.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{user.phone}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user.role === 'admin' ? 'Admin' : 'User'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-white">{user.totalOrders}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status === 'active' ? 'Aktif' : 'Nonaktif'}
                    </span>
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
      </div>
    </div>
  );

  const renderTransactions = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Riwayat Transaksi</h2>
        <Button className="bg-green-500 hover:bg-green-600">
          <TrendingUp className="w-4 h-4 mr-2" />
          Export Data
        </Button>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Order ID</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Customer</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Produk</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Profit</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Tanggal</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-white/5">
                  <td className="px-6 py-4 text-sm text-white font-mono">{transaction.orderNumber}</td>
                  <td className="px-6 py-4 text-sm text-white">{transaction.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{transaction.product}</td>
                  <td className="px-6 py-4 text-sm text-white font-medium">Rp {transaction.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-green-400 font-medium">Rp {transaction.profit.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      transaction.status === 'success' ? 'bg-green-100 text-green-800' :
                      transaction.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {transaction.status === 'success' ? 'Berhasil' :
                       transaction.status === 'processing' ? 'Diproses' : 'Gagal'}
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
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'products': return renderProducts();
      case 'import': return renderImportProducts();
      case 'users': return renderUsers();
      case 'transactions': return renderTransactions();
      default: return renderOverview();
    }
  };

  return (
    <PageLayout showRegisterButton={false}>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white/10 backdrop-blur-sm border-r border-white/10 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0`}>
          <div className="flex items-center justify-between h-16 px-6 border-b border-white/10">
            <h2 className="text-xl font-bold text-white">Site Dashboard</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white hover:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 border-b border-white/10">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white">{siteData?.name}</h3>
              <p className="text-gray-400 text-sm">/{siteData?.slug}</p>
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mt-2 ${
                siteData?.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {siteData?.status === 'active' ? 'Aktif' : 'Nonaktif'}
              </span>
            </div>
          </div>

          <nav className="mt-8 px-4">
            <ul className="space-y-2">
              {sidebarItems.map((item) => (
                <li key={item.tab}>
                  <button
                    onClick={() => setActiveTab(item.tab)}
                    className={`w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      item.active 
                        ? 'bg-purple-500 text-white' 
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden text-white hover:text-gray-300"
                >
                  <Package className="w-6 h-6" />
                </button>
                <Link
                  href="/dashboard"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Kembali ke Dashboard</span>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link href={`/${siteData?.slug}`} target="_blank">
                  <Button variant="outline" className="border-blue-400 text-blue-400">
                    <Eye className="w-4 h-4 mr-2" />
                    Lihat Website
                  </Button>
                </Link>
              </div>
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {renderContent()}
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
