
'use client'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  ShoppingCart,
  TrendingUp,
  Eye,
  Settings,
  LogOut,
  Plus,
  Globe,
  History,
  Package,
  Upload,
  Menu,
  X,
  ChevronRight,
  Store,
  ExternalLink
} from 'lucide-react';
import PageLayout from '@/components/ui/page-layout';

interface Website {
  id: string;
  name: string;
  subdomain: string;
  description: string;
  status: 'active' | 'inactive';
  totalProducts: number;
  totalSales: number;
  createdAt: string;
}

export default function Dashboard() {
  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeWebsite, setActiveWebsite] = useState<Website | null>(null);
  const [websites, setWebsites] = useState<Website[]>([]);
  const [showAddWebsite, setShowAddWebsite] = useState(false);
  const [newWebsite, setNewWebsite] = useState({ name: '', subdomain: '', description: '' });

  useEffect(() => {
    // Check if user is logged in
    const storedUserData = localStorage.getItem('userData');
    if (!storedUserData) {
      window.location.href = '/login';
      return;
    }

    const user = JSON.parse(storedUserData);
    setUserData(user);

    // Load user's websites (demo data)
    const demoWebsites: Website[] = [
      {
        id: '1',
        name: 'TokoDigital Store',
        subdomain: 'tokodigital',
        description: 'Toko digital terpercaya sejak 2020',
        status: 'active',
        totalProducts: 125,
        totalSales: 2450000,
        createdAt: '2023-01-15'
      },
      {
        id: '2',
        name: 'GameStore Pro',
        subdomain: 'gamestore',
        description: 'Spesialis top up gaming',
        status: 'active',
        totalProducts: 89,
        totalSales: 1850000,
        createdAt: '2023-06-20'
      }
    ];

    setWebsites(demoWebsites);
    setActiveWebsite(demoWebsites[0]);
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    window.location.href = '/';
  };

  const handleAddWebsite = () => {
    if (newWebsite.name && newWebsite.subdomain) {
      const website: Website = {
        id: Date.now().toString(),
        name: newWebsite.name,
        subdomain: newWebsite.subdomain,
        description: newWebsite.description,
        status: 'active',
        totalProducts: 0,
        totalSales: 0,
        createdAt: new Date().toISOString().split('T')[0]
      };
      
      setWebsites([...websites, website]);
      setNewWebsite({ name: '', subdomain: '', description: '' });
      setShowAddWebsite(false);
    }
  };

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
    { icon: BarChart3, label: 'Dashboard', path: '/dashboard', active: true },
    { icon: History, label: 'Riwayat Transaksi', path: '/dashboard/transactions' },
    { icon: Package, label: 'Daftar Produk', path: '/dashboard/products' },
    { icon: Upload, label: 'Import Produk', path: '/dashboard/import-products' },
    { icon: Users, label: 'Manajemen User', path: '/dashboard/users' },
    { icon: Settings, label: 'Pengaturan Website', path: '/dashboard/settings' },
  ];

  return (
    <PageLayout showRegisterButton={false}>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white/10 backdrop-blur-sm border-r border-white/10 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0`}>
          <div className="flex items-center justify-between h-16 px-6 border-b border-white/10">
            <h2 className="text-xl font-bold text-white">Dashboard</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white hover:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Website Selector */}
          <div className="p-4 border-b border-white/10">
            <div className="mb-3">
              <label className="text-sm text-gray-300 mb-2 block">Website Aktif:</label>
              <select
                value={activeWebsite?.id || ''}
                onChange={(e) => {
                  const website = websites.find(w => w.id === e.target.value);
                  setActiveWebsite(website || null);
                }}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {websites.map(website => (
                  <option key={website.id} value={website.id} className="bg-gray-900">
                    {website.name}
                  </option>
                ))}
              </select>
            </div>
            <Button
              onClick={() => setShowAddWebsite(true)}
              size="sm"
              className="w-full bg-purple-500 hover:bg-purple-600"
            >
              <Plus className="w-4 h-4 mr-2" />
              Tambah Website
            </Button>
          </div>

          {/* Navigation Menu */}
          <nav className="p-4">
            <ul className="space-y-2">
              {sidebarItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      item.active 
                        ? 'bg-purple-500 text-white' 
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logout */}
          <div className="absolute bottom-4 left-4 right-4">
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          {/* Mobile Header */}
          <div className="lg:hidden flex items-center justify-between p-4 bg-white/5 border-b border-white/10">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-white hover:text-gray-300"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-semibold text-white">Dashboard</h1>
          </div>

          <div className="p-6">
            {/* Welcome Header */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">
                    Selamat datang, {userData?.fullName || userData?.name || 'User'}! 👋
                  </h1>
                  <p className="text-gray-300">
                    Kelola website "{activeWebsite?.name}" dari dashboard ini
                  </p>
                </div>
                {activeWebsite && (
                  <Link
                    href={`/reseller/${activeWebsite.subdomain}`}
                    target="_blank"
                    className="inline-flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg border border-purple-400/50 text-purple-300 hover:bg-purple-500/30 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Lihat Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </motion.div>

            {/* Website Stats */}
            {activeWebsite && (
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
                    <h3 className="text-2xl font-bold text-white mb-1">
                      Rp {activeWebsite.totalSales.toLocaleString()}
                    </h3>
                    <p className="text-gray-400 text-sm">Total Penjualan</p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Package className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{activeWebsite.totalProducts}</h3>
                    <p className="text-gray-400 text-sm">Total Produk</p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Globe className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{activeWebsite.status === 'active' ? 'Aktif' : 'Nonaktif'}</h3>
                    <p className="text-gray-400 text-sm">Status Website</p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <TrendingUp className="w-8 h-8 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">12.5%</h3>
                    <p className="text-gray-400 text-sm">Konversi</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Quick Actions */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/dashboard/transactions" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <History className="w-8 h-8 text-blue-400" />
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Riwayat Transaksi</h3>
                <p className="text-gray-300 text-sm">Lihat semua transaksi yang masuk</p>
              </Link>

              <Link href="/dashboard/products" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <Package className="w-8 h-8 text-green-400" />
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Kelola Produk</h3>
                <p className="text-gray-300 text-sm">Tambah, edit, atau hapus produk</p>
              </Link>

              <Link href="/dashboard/import-products" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <Upload className="w-8 h-8 text-purple-400" />
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Import Produk</h3>
                <p className="text-gray-300 text-sm">Import produk dari website utama</p>
              </Link>
            </motion.div>

            {/* Website List */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-white mb-6">Website Saya</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {websites.map((website) => (
                  <div
                    key={website.id}
                    className={`p-4 rounded-lg border transition-all cursor-pointer ${
                      activeWebsite?.id === website.id
                        ? 'border-purple-400 bg-purple-500/20'
                        : 'border-white/10 bg-white/5 hover:bg-white/10'
                    }`}
                    onClick={() => setActiveWebsite(website)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white">{website.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        website.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {website.status === 'active' ? 'Aktif' : 'Nonaktif'}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{website.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">{website.subdomain}.unibox.id</span>
                      <Link
                        href={`/reseller/${website.subdomain}`}
                        target="_blank"
                        className="text-purple-400 hover:text-purple-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Add Website Modal */}
      {showAddWebsite && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-gray-900 rounded-xl p-6 w-full max-w-md border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Tambah Website Baru</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nama Website
                </label>
                <input
                  type="text"
                  value={newWebsite.name}
                  onChange={(e) => setNewWebsite({...newWebsite, name: e.target.value})}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Contoh: Toko Digital Saya"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subdomain
                </label>
                <div className="flex">
                  <input
                    type="text"
                    value={newWebsite.subdomain}
                    onChange={(e) => setNewWebsite({...newWebsite, subdomain: e.target.value.toLowerCase().replace(/[^a-z0-9]/g, '')})}
                    className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-l-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="tokodigital"
                  />
                  <span className="px-3 py-2 bg-white/10 border border-l-0 border-white/10 rounded-r-lg text-gray-300 text-sm">
                    .unibox.id
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Deskripsi
                </label>
                <textarea
                  value={newWebsite.description}
                  onChange={(e) => setNewWebsite({...newWebsite, description: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Deskripsi singkat tentang website Anda"
                />
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <Button
                onClick={() => setShowAddWebsite(false)}
                variant="outline"
                className="flex-1 border-gray-600 text-gray-300"
              >
                Batal
              </Button>
              <Button
                onClick={handleAddWebsite}
                className="flex-1 bg-purple-500 hover:bg-purple-600"
                disabled={!newWebsite.name || !newWebsite.subdomain}
              >
                Tambah Website
              </Button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </PageLayout>
  );
}
