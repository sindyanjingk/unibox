'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PageLayout from '@/components/ui/page-layout';
import HeroSection from '@/components/ui/hero-section';
import SectionHeader from '@/components/ui/section-header';
import ProductCard from '@/components/ui/product-card';
import { 
  Smartphone, 
  Gamepad2, 
  CreditCard, 
  Crown, 
  Users, 
  TrendingUp,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const features = [
  {
    icon: Smartphone,
    title: "Social Media Management",
    description: "Kelola semua akun media sosial dengan mudah dan efisien",
    gradient: "from-pink-500 to-purple-600"
  },
  {
    icon: Gamepad2,
    title: "Top Up Game",
    description: "Isi ulang diamond, coin, dan item game favorit dengan harga terbaik",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: CreditCard,
    title: "PPOB",
    description: "Bayar tagihan listrik, air, telepon, dan kebutuhan sehari-hari",
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    icon: Crown,
    title: "Akun Premium",
    description: "Jual akses premium Netflix, Spotify, dan layanan digital lainnya",
    gradient: "from-yellow-500 to-orange-600"
  }
];

const benefits = [
  "Website pribadi dengan subdomain sendiri",
  "Dashboard admin yang mudah digunakan",
  "Integrasi payment gateway lengkap",
  "Support 24/7 dari tim kami",
  "Margin keuntungan yang menggiurkan",
  "Sistem otomatis dan real-time"
];

export default function Home() {
  return (
    <PageLayout currentPage="home">
      {/* Hero Section */}
      <HeroSection
        title="Platform Digital"
        subtitle="Multitenancy"
        description="Bangun bisnis digital Anda dengan website pribadi untuk menjual social media management, top up game, PPOB, dan akun premium"
      />

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Produk Digital Terlengkap"
            subtitle="Semua yang Anda butuhkan untuk memulai bisnis digital yang menguntungkan"
          />

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <ProductCard
                key={index}
                name={feature.title}
                price=""
                description={feature.description}
                icon={feature.icon}
                gradient={feature.gradient}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Kenapa Pilih <span className="text-purple-400">UniBox</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Platform all-in-one yang memberikan Anda kebebasan penuh untuk 
                membangun dan mengembangkan bisnis digital Anda.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">500+</div>
                    <div className="text-gray-300">Reseller Aktif</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">1M+</div>
                    <div className="text-gray-300">Transaksi/Bulan</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                    <div className="text-gray-300">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                    <div className="text-gray-300">Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Siap Memulai Bisnis Digital Anda?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Bergabunglah dengan ribuan reseller yang sudah merasakan keuntungan 
              dari platform UniBox
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-12 py-6"
              asChild
            >
              <Link href="/register">
                Mulai Sekarang - Gratis!
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                UniBox
              </div>
              <p className="text-gray-400">
                Platform terdepan untuk bisnis digital multitenancy di Indonesia
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Produk</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/social-media" className="hover:text-white transition-colors">Social Media</Link></li>
                <li><Link href="/gaming" className="hover:text-white transition-colors">Gaming</Link></li>
                <li><Link href="/ppob" className="hover:text-white transition-colors">PPOB</Link></li>
                <li><Link href="/premium" className="hover:text-white transition-colors">Premium Accounts</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Perusahaan</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">Tentang Kami</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Kontak</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Karir</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Bantuan</Link></li>
                <li><Link href="/docs" className="hover:text-white transition-colors">Dokumentasi</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Syarat & Ketentuan</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 UniBox. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </PageLayout>
  );
}