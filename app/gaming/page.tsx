
'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Gamepad2,
  Zap,
  Star,
  Shield,
  Clock,
  Users,
  ArrowRight,
  Gem,
  Coins,
  Sword
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const gamingProducts = [
  {
    category: 'Mobile Legends',
    icon: '🎮',
    color: 'from-blue-500 to-purple-600',
    products: [
      { name: 'Mobile Legends 86 Diamond', price: 'Rp 20.000', originalPrice: 'Rp 25.000', description: 'Proses 1-3 menit' },
      { name: 'Mobile Legends 172 Diamond', price: 'Rp 39.000', originalPrice: 'Rp 48.000', description: 'Proses 1-3 menit' },
      { name: 'Mobile Legends 257 Diamond', price: 'Rp 58.000', originalPrice: 'Rp 72.000', description: 'Proses 1-3 menit' },
      { name: 'Mobile Legends 344 Diamond', price: 'Rp 77.000', originalPrice: 'Rp 95.000', description: 'Proses 1-3 menit' },
      { name: 'Mobile Legends 429 Diamond', price: 'Rp 96.000', originalPrice: 'Rp 119.000', description: 'Proses 1-3 menit' },
      { name: 'Mobile Legends 514 Diamond', price: 'Rp 115.000', originalPrice: 'Rp 143.000', description: 'Proses 1-3 menit' }
    ]
  },
  {
    category: 'Free Fire',
    icon: '🔥',
    color: 'from-orange-500 to-red-600',
    products: [
      { name: 'Free Fire 70 Diamond', price: 'Rp 10.000', originalPrice: 'Rp 13.000', description: 'Auto process' },
      { name: 'Free Fire 140 Diamond', price: 'Rp 19.000', originalPrice: 'Rp 25.000', description: 'Auto process' },
      { name: 'Free Fire 210 Diamond', price: 'Rp 28.000', originalPrice: 'Rp 37.000', description: 'Auto process' },
      { name: 'Free Fire 355 Diamond', price: 'Rp 47.000', originalPrice: 'Rp 62.000', description: 'Auto process' },
      { name: 'Free Fire 720 Diamond', price: 'Rp 95.000', originalPrice: 'Rp 125.000', description: 'Auto process' },
      { name: 'Free Fire 1450 Diamond', price: 'Rp 190.000', originalPrice: 'Rp 250.000', description: 'Auto process' }
    ]
  },
  {
    category: 'PUBG Mobile',
    icon: '🎯',
    color: 'from-yellow-500 to-orange-600',
    products: [
      { name: 'PUBG Mobile 60 UC', price: 'Rp 15.000', originalPrice: 'Rp 19.000', description: 'Instant delivery' },
      { name: 'PUBG Mobile 325 UC', price: 'Rp 75.000', originalPrice: 'Rp 95.000', description: 'Instant delivery' },
      { name: 'PUBG Mobile 660 UC', price: 'Rp 150.000', originalPrice: 'Rp 190.000', description: 'Instant delivery' },
      { name: 'PUBG Mobile 1800 UC', price: 'Rp 380.000', originalPrice: 'Rp 475.000', description: 'Instant delivery' },
      { name: 'PUBG Mobile 3850 UC', price: 'Rp 760.000', originalPrice: 'Rp 950.000', description: 'Instant delivery' },
      { name: 'PUBG Mobile 8100 UC', price: 'Rp 1.520.000', originalPrice: 'Rp 1.900.000', description: 'Instant delivery' }
    ]
  },
  {
    category: 'Genshin Impact',
    icon: '⚡',
    color: 'from-purple-500 to-blue-600',
    products: [
      { name: 'Genshin Impact 60 Genesis', price: 'Rp 15.000', originalPrice: 'Rp 19.000', description: 'Via login account' },
      { name: 'Genshin Impact 330 Genesis', price: 'Rp 75.000', originalPrice: 'Rp 95.000', description: 'Via login account' },
      { name: 'Genshin Impact 980 Genesis', price: 'Rp 230.000', originalPrice: 'Rp 285.000', description: 'Via login account' },
      { name: 'Genshin Impact 1980 Genesis', price: 'Rp 460.000', originalPrice: 'Rp 570.000', description: 'Via login account' },
      { name: 'Genshin Impact 3280 Genesis', price: 'Rp 760.000', originalPrice: 'Rp 950.000', description: 'Via login account' },
      { name: 'Genshin Impact 6480 Genesis', price: 'Rp 1.520.000', originalPrice: 'Rp 1.900.000', description: 'Via login account' }
    ]
  },
  {
    category: 'Valorant',
    icon: '🔫',
    color: 'from-red-500 to-pink-600',
    products: [
      { name: 'Valorant 420 VP', price: 'Rp 35.000', originalPrice: 'Rp 45.000', description: 'Region Indonesia' },
      { name: 'Valorant 700 VP', price: 'Rp 60.000', originalPrice: 'Rp 75.000', description: 'Region Indonesia' },
      { name: 'Valorant 1375 VP', price: 'Rp 115.000', originalPrice: 'Rp 145.000', description: 'Region Indonesia' },
      { name: 'Valorant 2400 VP', price: 'Rp 195.000', originalPrice: 'Rp 245.000', description: 'Region Indonesia' },
      { name: 'Valorant 4000 VP', price: 'Rp 325.000', originalPrice: 'Rp 405.000', description: 'Region Indonesia' },
      { name: 'Valorant 8150 VP', price: 'Rp 650.000', originalPrice: 'Rp 815.000', description: 'Region Indonesia' }
    ]
  },
  {
    category: 'Steam Wallet',
    icon: '🎮',
    color: 'from-gray-500 to-blue-600',
    products: [
      { name: 'Steam Wallet $5', price: 'Rp 75.000', originalPrice: 'Rp 85.000', description: 'Global region' },
      { name: 'Steam Wallet $10', price: 'Rp 150.000', originalPrice: 'Rp 170.000', description: 'Global region' },
      { name: 'Steam Wallet $20', price: 'Rp 300.000', originalPrice: 'Rp 340.000', description: 'Global region' },
      { name: 'Steam Wallet $50', price: 'Rp 750.000', originalPrice: 'Rp 850.000', description: 'Global region' },
      { name: 'Steam Wallet $100', price: 'Rp 1.500.000', originalPrice: 'Rp 1.700.000', description: 'Global region' },
      { name: 'Steam Wallet IDR 60K', price: 'Rp 65.000', originalPrice: 'Rp 75.000', description: 'Region Indonesia' }
    ]
  }
];

const benefits = [
  { icon: Zap, text: 'Proses otomatis 1-5 menit' },
  { icon: Shield, text: 'Garansi uang kembali' },
  { icon: Star, text: 'Rate terbaik di Indonesia' },
  { icon: Clock, text: 'Open 24/7' }
];

export default function Gaming() {
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
              <Link href="/demo" className="text-gray-300 hover:text-white transition-colors">
                Demo
              </Link>
            </div>
            <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500">
              <Link href="/register">Mulai Sekarang</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Top Up Game
              </span>
              <br />Termurah & Tercepat
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Isi ulang diamond, UC, genesis crystal, dan virtual currency game favorit dengan harga terbaik
            </p>
            
            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 bg-white/10 rounded-full px-6 py-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <benefit.icon className="w-5 h-5 text-purple-400" />
                  <span className="text-white">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {gamingProducts.map((game, gameIndex) => (
            <motion.div
              key={game.category}
              className="mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gameIndex * 0.2 }}
            >
              {/* Game Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${game.color} rounded-2xl flex items-center justify-center text-2xl`}>
                  {game.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{game.category}</h2>
                  <p className="text-gray-300">Top up {game.category} dengan harga termurah</p>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {game.products.map((product, productIndex) => (
                  <motion.div
                    key={productIndex}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: productIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                        {product.name}
                      </h3>
                      <div className="text-right">
                        <div className="text-xl font-bold text-white">{product.price}</div>
                        <div className="text-sm text-gray-400 line-through">{product.originalPrice}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-6">{product.description}</p>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                      <Gamepad2 className="w-4 h-4 mr-2" />
                      Top Up Sekarang
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Siap Jadi Reseller Top Up Game?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Bergabung dengan ribuan reseller dan raih keuntungan hingga jutaan rupiah per bulan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-6"
                asChild
              >
                <Link href="/register">
                  Mulai Jual Sekarang <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-lg px-8 py-6"
                asChild
              >
                <Link href="/demo">Lihat Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
