
'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Zap,
  Droplets,
  Phone,
  Wifi,
  Car,
  GraduationCap,
  Shield,
  CreditCard,
  Clock,
  CheckCircle,
  ArrowRight,
  Building,
  Smartphone,
  Tv
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const ppobProducts = [
  {
    category: 'PLN / Listrik',
    icon: Zap,
    color: 'from-yellow-500 to-orange-600',
    products: [
      { name: 'PLN Token 20k', price: 'Rp 20.500', originalPrice: 'Rp 21.000', description: 'Fee Rp 500', admin: 'Admin Rp 2.500' },
      { name: 'PLN Token 50k', price: 'Rp 50.500', originalPrice: 'Rp 51.500', description: 'Fee Rp 500', admin: 'Admin Rp 2.500' },
      { name: 'PLN Token 100k', price: 'Rp 100.500', originalPrice: 'Rp 101.500', description: 'Fee Rp 500', admin: 'Admin Rp 2.500' },
      { name: 'PLN Token 200k', price: 'Rp 200.500', originalPrice: 'Rp 202.000', description: 'Fee Rp 500', admin: 'Admin Rp 2.500' },
      { name: 'PLN Pascabayar', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.000', description: 'Bayar tagihan listrik', admin: 'Proses 1-5 menit' },
      { name: 'PLN Non Taglis', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.000', description: 'Bayar tagihan non taglis', admin: 'Proses 1-5 menit' }
    ]
  },
  {
    category: 'PDAM / Air',
    icon: Droplets,
    color: 'from-blue-500 to-cyan-600',
    products: [
      { name: 'PDAM DKI Jakarta', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: 'PAM Jaya Jakarta', admin: 'Proses instant' },
      { name: 'PDAM Bandung', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: 'PDAM Tirtawening', admin: 'Proses instant' },
      { name: 'PDAM Surabaya', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: 'PDAM Surya Sembada', admin: 'Proses instant' },
      { name: 'PDAM Semarang', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: 'PDAM Tirta Moedal', admin: 'Proses instant' },
      { name: 'PDAM Yogyakarta', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: 'PDAM Tirtamarta', admin: 'Proses instant' },
      { name: 'PDAM Lainnya', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: '200+ PDAM se-Indonesia', admin: 'Proses instant' }
    ]
  },
  {
    category: 'Pulsa & Paket Data',
    icon: Smartphone,
    color: 'from-green-500 to-emerald-600',
    products: [
      { name: 'Telkomsel 5k', price: 'Rp 5.500', originalPrice: 'Rp 6.000', description: 'Pulsa reguler', admin: 'Proses instant' },
      { name: 'XL 5k', price: 'Rp 5.500', originalPrice: 'Rp 6.000', description: 'Pulsa reguler', admin: 'Proses instant' },
      { name: 'Indosat 5k', price: 'Rp 5.500', originalPrice: 'Rp 6.000', description: 'Pulsa reguler', admin: 'Proses instant' },
      { name: 'Tri 5k', price: 'Rp 5.200', originalPrice: 'Rp 5.500', description: 'Pulsa reguler', admin: 'Proses instant' },
      { name: 'Smartfren 5k', price: 'Rp 5.200', originalPrice: 'Rp 5.500', description: 'Pulsa reguler', admin: 'Proses instant' },
      { name: 'Axis 5k', price: 'Rp 5.200', originalPrice: 'Rp 5.500', description: 'Pulsa reguler', admin: 'Proses instant' }
    ]
  },
  {
    category: 'Internet & WiFi',
    icon: Wifi,
    color: 'from-purple-500 to-violet-600',
    products: [
      { name: 'IndiHome', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: 'Tagihan internet Telkom', admin: 'Proses instant' },
      { name: 'First Media', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: 'Tagihan FastNet & TV Cable', admin: 'Proses instant' },
      { name: 'Biznet Home', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: 'Tagihan internet Biznet', admin: 'Proses instant' },
      { name: 'MyRepublic', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: 'Tagihan internet MyRepublic', admin: 'Proses instant' },
      { name: 'MNC Play', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: 'Tagihan internet & TV', admin: 'Proses instant' },
      { name: 'Oxygen', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: 'Tagihan internet Oxygen', admin: 'Proses instant' }
    ]
  },
  {
    category: 'TV Berlangganan',
    icon: Tv,
    color: 'from-red-500 to-pink-600',
    products: [
      { name: 'IndiHome TV', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: 'UseeTV IndiHome', admin: 'Proses instant' },
      { name: 'Transvision', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: 'TV Satelit Transvision', admin: 'Proses instant' },
      { name: 'K-Vision', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: 'TV Satelit K-Vision', admin: 'Proses instant' },
      { name: 'Nex Parabola', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: 'TV Satelit Nex Parabola', admin: 'Proses instant' },
      { name: 'Orange TV', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: 'TV Kabel Orange TV', admin: 'Proses instant' },
      { name: 'YES TV', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: 'TV Digital YES TV', admin: 'Proses instant' }
    ]
  },
  {
    category: 'BPJS & Asuransi',
    icon: Shield,
    color: 'from-teal-500 to-green-600',
    products: [
      { name: 'BPJS Kesehatan', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: 'Iuran BPJS Kesehatan', admin: 'Proses instant' },
      { name: 'BPJS Ketenagakerjaan', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: 'Iuran BPJS TK', admin: 'Proses instant' },
      { name: 'Prudential', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: 'Premi asuransi Prudential', admin: 'Proses instant' },
      { name: 'AIA', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: 'Premi asuransi AIA', admin: 'Proses instant' },
      { name: 'Allianz', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: 'Premi asuransi Allianz', admin: 'Proses instant' },
      { name: 'Great Eastern', price: 'Fee Rp 2.500', originalPrice: 'Fee Rp 3.500', description: 'Premi asuransi Great Eastern', admin: 'Proses instant' }
    ]
  }
];

const benefits = [
  { icon: Clock, text: 'Proses pembayaran instant' },
  { icon: CheckCircle, text: 'Sukses rate 99.9%' },
  { icon: CreditCard, text: 'Fee terendah se-Indonesia' },
  { icon: Building, text: '1000+ biller tersedia' }
];

export default function PPOB() {
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
                PPOB
              </span>
              <br />Payment Point Online Bank
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Bayar semua tagihan dan kebutuhan sehari-hari dengan mudah. Listrik, air, internet, pulsa, dan masih banyak lagi
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
          {ppobProducts.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{category.category}</h2>
                  <p className="text-gray-300">Bayar tagihan {category.category.toLowerCase()} dengan mudah</p>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product, productIndex) => (
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
                        {product.originalPrice !== product.price && (
                          <div className="text-sm text-gray-400 line-through">{product.originalPrice}</div>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-2">{product.description}</p>
                    <p className="text-gray-400 text-xs mb-6">{product.admin}</p>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                      <CreditCard className="w-4 h-4 mr-2" />
                      Bayar Sekarang
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
              Siap Jadi Agen PPOB Terpercaya?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Mulai bisnis pembayaran online dan raih komisi dari setiap transaksi customer Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-6"
                asChild
              >
                <Link href="/register">
                  Daftar Jadi Agen <ArrowRight className="ml-2" />
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
