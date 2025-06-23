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
  LogOut
} from 'lucide-react';
import PageLayout from '@/components/ui/page-layout';

export default function Dashboard() {
  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const storedUserData = localStorage.getItem('userData');
    if (!storedUserData) {
      // Redirect to login if not authenticated
      window.location.href = '/login';
      return;
    }

    setUserData(JSON.parse(storedUserData));
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    window.location.href = '/';
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

  const stats = [
    { label: 'Total Penjualan', value: 'Rp 2,450,000', icon: DollarSign, color: 'text-green-400' },
    { label: 'Pelanggan', value: '156', icon: Users, color: 'text-blue-400' },
    { label: 'Produk Terjual', value: '89', icon: ShoppingCart, color: 'text-purple-400' },
    { label: 'Tingkat Konversi', value: '12.5%', icon: TrendingUp, color: 'text-pink-400' }
  ];

  return (
    <PageLayout showRegisterButton={false}>
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">

          {/* Welcome Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-white mb-2">
              Selamat datang, {userData?.fullName || userData?.name || 'User'}! 👋
            </h1>
            <p className="text-gray-300">
              {userData?.businessName ? `Kelola bisnis digital "${userData.businessName}" Anda dari sini` : 'Kelola bisnis digital Anda dari dashboard ini'}
            </p>
            {userData?.subdomain && (
              <div className="mt-4 inline-flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg border border-purple-400/50">
                <Eye className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300">Website Anda: </span>
                <Link 
                  href={`/reseller/${userData.subdomain}`}
                  className="text-purple-400 hover:text-purple-300 font-medium"
                  target="_blank"
                >
                  {userData.subdomain}.unibox.id
                </Link>
              </div>
            )}
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/social-media" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2">Social Media Management</h3>
              <p className="text-gray-300 text-sm mb-4">Kelola dan jual layanan sosial media</p>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500">
                Lihat Produk
              </Button>
            </Link>

            <Link href="/gaming" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2">Top Up Gaming</h3>
              <p className="text-gray-300 text-sm mb-4">Jual voucher game dan diamond</p>
              <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500">
                Lihat Produk
              </Button>
            </Link>

            <Link href="/ppob" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2">PPOB</h3>
              <p className="text-gray-300 text-sm mb-4">Pembayaran tagihan dan pulsa</p>
              <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500">
                Lihat Produk
              </Button>
            </Link>
          </motion.div>

          {/* Account Actions */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Pengaturan Akun</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white">{userData?.email}</p>
              </div>
              {userData?.phone && (
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm">Nomor WhatsApp</p>
                  <p className="text-white">{userData.phone}</p>
                </div>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
                <Settings className="w-4 h-4 mr-2" />
                Edit Profil
              </Button>
              <Button 
                onClick={handleLogout}
                variant="outline" 
                className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}