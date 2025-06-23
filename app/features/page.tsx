
'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Smartphone, 
  Gamepad2, 
  CreditCard, 
  Crown, 
  Globe,
  Shield,
  Zap,
  BarChart3,
  Settings,
  Users,
  ArrowRight
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const features = [
  {
    icon: Smartphone,
    title: "Social Media Management",
    description: "Kelola Instagram, Facebook, Twitter, TikTok, dan platform media sosial lainnya",
    details: [
      "Auto posting & scheduling",
      "Content management system",
      "Analytics & reporting",
      "Multiple account support"
    ]
  },
  {
    icon: Gamepad2,
    title: "Top Up Game",
    description: "Isi ulang diamond, coin, dan item game dengan harga kompetitif",
    details: [
      "Mobile Legends, Free Fire, PUBG",
      "Steam Wallet, Google Play",
      "Proses otomatis & instant",
      "Margin keuntungan tinggi"
    ]
  },
  {
    icon: CreditCard,
    title: "PPOB (Payment Point)",
    description: "Layanan pembayaran tagihan dan kebutuhan sehari-hari",
    details: [
      "Listrik PLN, PDAM, telepon",
      "Pulsa & paket data",
      "BPJS, asuransi, cicilan",
      "E-money & e-wallet"
    ]
  },
  {
    icon: Crown,
    title: "Akun Premium",
    description: "Jual akses premium Netflix, Spotify, dan layanan digital lainnya",
    details: [
      "Netflix, Disney+, Prime Video",
      "Spotify, YouTube Premium",
      "Microsoft Office, Adobe",
      "VPN & cloud storage"
    ]
  }
];

const platformFeatures = [
  {
    icon: Globe,
    title: "Website Pribadi",
    description: "Dapatkan subdomain sendiri dengan design yang customizable"
  },
  {
    icon: Shield,
    title: "Keamanan Tingkat Tinggi",
    description: "SSL certificate, enkripsi data, dan fraud detection"
  },
  {
    icon: Zap,
    title: "Proses Real-time",
    description: "Transaksi diproses secara otomatis dan real-time"
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Monitor performa bisnis dengan analytics yang komprehensif"
  },
  {
    icon: Settings,
    title: "Easy Management",
    description: "Dashboard admin yang user-friendly dan mudah digunakan"
  },
  {
    icon: Users,
    title: "Multi-user Support",
    description: "Tambahkan team member dan atur permission dengan mudah"
  }
];

export default function Features() {
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
              <Link href="/features" className="text-purple-400 font-semibold">
                Fitur
              </Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                Harga
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                Tentang
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Kontak
              </Link>
            </div>
            <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500">
              <Link href="/register">Mulai Sekarang</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            {...fadeInUp}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Fitur Lengkap
            </span>
            <br />
            <span className="text-white">Untuk Bisnis Digital</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Jelajahi semua produk dan fitur yang tersedia untuk membangun bisnis digital Anda
          </motion.p>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Produk Digital Utama
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <feature.icon className="w-16 h-16 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-400 flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Fitur Platform
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
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
              Siap Mencoba Semua Fitur Ini?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Mulai bisnis digital Anda hari ini dan rasakan kemudahan semua fitur UniBox
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-6"
              asChild
            >
              <Link href="/register">
                Daftar Sekarang <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
