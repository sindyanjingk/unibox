
'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Gamepad2, 
  CreditCard, 
  Crown, 
  Users,
  BarChart3,
  Settings,
  Wallet,
  Bell,
  Search,
  Plus,
  ArrowRight,
  PlayCircle,
  Eye,
  TrendingUp,
  DollarSign,
  ShoppingCart
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const demoFeatures = [
  {
    id: 'dashboard',
    title: 'Dashboard Admin',
    description: 'Panel kontrol lengkap untuk mengelola bisnis Anda',
    icon: BarChart3
  },
  {
    id: 'website',
    title: 'Website Reseller',
    description: 'Tampilan website yang akan dilihat customer Anda',
    icon: Monitor
  },
  {
    id: 'products',
    title: 'Katalog Produk',
    description: 'Semua produk digital yang bisa Anda jual',
    icon: ShoppingCart
  },
  {
    id: 'transactions',
    title: 'Riwayat Transaksi',
    description: 'Monitor semua transaksi secara real-time',
    icon: DollarSign
  }
];

const products = [
  { name: 'Instagram Followers', price: 'Rp 15.000', category: 'Social Media' },
  { name: 'Mobile Legends Diamond', price: 'Rp 25.000', category: 'Gaming' },
  { name: 'PLN Token 20k', price: 'Rp 20.500', category: 'PPOB' },
  { name: 'Netflix Premium 1 Bulan', price: 'Rp 65.000', category: 'Premium' },
  { name: 'YouTube Premium', price: 'Rp 35.000', category: 'Premium' },
  { name: 'PUBG Mobile UC', price: 'Rp 30.000', category: 'Gaming' }
];

const transactions = [
  { id: '#TRX001', product: 'Instagram Followers 1K', customer: 'Ahmad S.', amount: 'Rp 15.000', status: 'Success', time: '2 menit lalu' },
  { id: '#TRX002', product: 'ML Diamond 275', customer: 'Sari W.', amount: 'Rp 75.000', status: 'Processing', time: '5 menit lalu' },
  { id: '#TRX003', product: 'PLN Token 50k', customer: 'Budi P.', amount: 'Rp 51.000', status: 'Success', time: '12 menit lalu' },
  { id: '#TRX004', product: 'Netflix Premium', customer: 'Maya L.', amount: 'Rp 65.000', status: 'Success', time: '18 menit lalu' }
];

export default function Demo() {
  const [activeDemo, setActiveDemo] = useState('dashboard');
  const [isPlaying, setIsPlaying] = useState(false);

  const handleDemoChange = (demoId: string) => {
    setActiveDemo(demoId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              UniBox
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/features" className="text-gray-300 hover:text-white transition-colors">
                Fitur
              </Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                Harga
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                Tentang
              </Link>
            </div>
            <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500">
              <Link href="/register">Mulai Sekarang</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Lihat Platform <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">UniBox</span> 
              <br />dalam Aksi
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Rasakan pengalaman lengkap mengelola bisnis digital multitenancy dengan demo interaktif kami
            </p>
            
            {/* Demo Video Placeholder */}
            <motion.div
              className="relative max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-2 backdrop-blur-sm border border-white/10">
                <div className="bg-gray-900/80 rounded-xl aspect-video flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20" />
                  <Button
                    size="lg"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20 z-10"
                  >
                    <PlayCircle className="w-8 h-8 mr-3" />
                    {isPlaying ? 'Pause Demo' : 'Play Demo Video'}
                  </Button>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="absolute top-4 left-12 w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="absolute top-4 left-20 w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Demo Interaktif
            </h2>
            <p className="text-xl text-gray-300">
              Jelajahi setiap fitur platform dengan demo yang dapat Anda coba sendiri
            </p>
          </motion.div>

          {/* Demo Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {demoFeatures.map((feature, index) => (
              <motion.button
                key={feature.id}
                onClick={() => handleDemoChange(feature.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg transition-all ${
                  activeDemo === feature.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <feature.icon className="w-5 h-5" />
                <span className="font-medium">{feature.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Demo Content */}
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            {activeDemo === 'dashboard' && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Dashboard Admin - UniBox</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-white">Total Pendapatan</h4>
                      <TrendingUp className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">Rp 2.450.000</div>
                    <div className="text-green-400 text-sm">+15% dari bulan lalu</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-white">Transaksi Hari Ini</h4>
                      <DollarSign className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">47</div>
                    <div className="text-green-400 text-sm">+8 dari kemarin</div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-white">Saldo</h4>
                      <Wallet className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">Rp 875.000</div>
                    <Button size="sm" className="bg-purple-500 hover:bg-purple-600 mt-2">
                      <Plus className="w-4 h-4 mr-2" />
                      Top Up
                    </Button>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Transaksi Terbaru</h4>
                  <div className="space-y-3">
                    {transactions.map((transaction, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <ShoppingCart className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-white font-medium">{transaction.product}</div>
                            <div className="text-gray-400 text-sm">{transaction.customer} • {transaction.time}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-semibold">{transaction.amount}</div>
                          <div className={`text-sm ${
                            transaction.status === 'Success' ? 'text-green-400' : 
                            transaction.status === 'Processing' ? 'text-yellow-400' : 'text-red-400'
                          }`}>
                            {transaction.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeDemo === 'website' && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Website Reseller - tokodigital.unibox.id</h3>
                <div className="bg-white rounded-lg p-6 text-gray-800">
                  <div className="flex items-center justify-between mb-6 border-b pb-4">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      TokoDigital
                    </div>
                    <div className="flex items-center space-x-4">
                      <Search className="w-5 h-5 text-gray-500" />
                      <ShoppingCart className="w-5 h-5 text-gray-500" />
                      <Users className="w-5 h-5 text-gray-500" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <Smartphone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="font-semibold">Social Media</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <Gamepad2 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="font-semibold">Gaming</div>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg text-center">
                      <CreditCard className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                      <div className="font-semibold">PPOB</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <Crown className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <div className="font-semibold">Premium</div>
                    </div>
                  </div>

                  <div className="text-center py-8">
                    <h4 className="text-xl font-bold mb-2">Produk Terlaris</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {products.slice(0, 6).map((product, index) => (
                        <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                          <div className="font-medium text-sm mb-2">{product.name}</div>
                          <div className="text-purple-600 font-bold">{product.price}</div>
                          <div className="text-xs text-gray-500 mt-1">{product.category}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeDemo === 'products' && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Katalog Produk Digital</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { category: 'Social Media Management', icon: Smartphone, count: '25+ Produk', color: 'from-blue-500 to-blue-600' },
                    { category: 'Top Up Game', icon: Gamepad2, count: '50+ Game', color: 'from-green-500 to-green-600' },
                    { category: 'PPOB', icon: CreditCard, count: '100+ Provider', color: 'from-yellow-500 to-yellow-600' },
                    { category: 'Akun Premium', icon: Crown, count: '15+ Platform', color: 'from-purple-500 to-purple-600' }
                  ].map((category, index) => (
                    <motion.div
                      key={index}
                      className={`bg-gradient-to-br ${category.color}/20 rounded-lg p-6 border border-white/10`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <category.icon className={`w-12 h-12 bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-4`} />
                      <h4 className="text-xl font-semibold text-white mb-2">{category.category}</h4>
                      <p className="text-gray-300 mb-4">{category.count}</p>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Eye className="w-4 h-4 mr-2" />
                        Lihat Produk
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeDemo === 'transactions' && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Monitoring Transaksi Real-time</h3>
                <div className="space-y-4">
                  {transactions.map((transaction, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/5 rounded-lg p-4 border border-white/10"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <ShoppingCart className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold">{transaction.id}</h4>
                            <p className="text-gray-300">{transaction.product}</p>
                            <p className="text-gray-400 text-sm">Customer: {transaction.customer}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold text-lg">{transaction.amount}</div>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                            transaction.status === 'Success' 
                              ? 'bg-green-500/20 text-green-400' 
                              : transaction.status === 'Processing'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-red-500/20 text-red-400'
                          }`}>
                            {transaction.status}
                          </div>
                          <div className="text-gray-400 text-sm mt-1">{transaction.time}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Sudah Yakin dengan Platform Kami?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Mulai bisnis digital Anda hari ini dan rasakan semua fitur yang telah Anda lihat dalam demo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-6"
                asChild
              >
                <Link href="/register">
                  Daftar Sekarang <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-lg px-8 py-6"
                asChild
              >
                <Link href="/contact">Konsultasi Gratis</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
