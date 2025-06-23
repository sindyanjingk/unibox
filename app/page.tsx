
'use client'

import { motion } from 'framer-motion';
import PageLayout from '@/components/ui/page-layout';
import HeroSection from '@/components/ui/hero-section';
import SectionHeader from '@/components/ui/section-header';
import ProductCard from '@/components/ui/product-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Shield, 
  Clock, 
  Users, 
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
  Globe,
  HeadphonesIcon,
  Smartphone,
  Gamepad2,
  CreditCard,
  Crown
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection
        title="Platform Digital Terpercaya untuk Semua Kebutuhan Bisnis Online"
        subtitle="Kelola bisnis digital Anda dengan mudah. Dari social media management hingga produk premium, semua ada di satu platform."
        primaryCta={{ text: 'Mulai Gratis', href: '/register' }}
        secondaryCta={{ text: 'Lihat Demo', href: '/demo' }}
        backgroundImage="/api/placeholder/1920/1080"
      />

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <SectionHeader
            title="Mengapa Memilih UniBox?"
            subtitle="Platform lengkap dengan fitur-fitur canggih untuk mengembangkan bisnis digital Anda"
          />

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Shield,
                title: 'Keamanan Terjamin',
                description: 'Sistem keamanan berlapis dengan enkripsi end-to-end untuk melindungi data dan transaksi Anda.'
              },
              {
                icon: Clock,
                title: 'Proses Instan',
                description: 'Automated system untuk pemrosesan order yang cepat dan efisien 24/7.'
              },
              {
                icon: Users,
                title: 'Multi-Tenant Support',
                description: 'Setiap reseller mendapat website sendiri dengan domain kustom dan branding personal.'
              },
              {
                icon: TrendingUp,
                title: 'Analytics Mendalam',
                description: 'Dashboard analytics lengkap untuk memantau performa bisnis dan mengoptimalkan strategi.'
              },
              {
                icon: Zap,
                title: 'API Integration',
                description: 'Integrasi mudah dengan berbagai provider untuk memastikan stok dan layanan selalu tersedia.'
              },
              {
                icon: HeadphonesIcon,
                title: 'Support 24/7',
                description: 'Tim support professional siap membantu Anda kapan saja melalui berbagai channel komunikasi.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <SectionHeader
            title="Produk Digital Lengkap"
            subtitle="Berbagai macam produk digital untuk memenuhi kebutuhan customer Anda"
          />

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <ProductCard
              title="Social Media Management"
              description="Followers, likes, views untuk semua platform media sosial populer"
              icon={<Smartphone className="w-8 h-8" />}
              price="Mulai dari Rp 5.000"
              features={['Instagram', 'TikTok', 'YouTube', 'Facebook']}
              href="/social-media"
            />
            <ProductCard
              title="Gaming Top Up"
              description="Diamond, UC, voucher game untuk semua game populer"
              icon={<Gamepad2 className="w-8 h-8" />}
              price="Mulai dari Rp 10.000"
              features={['Mobile Legends', 'Free Fire', 'PUBG', 'Genshin Impact']}
              href="/gaming"
            />
            <ProductCard
              title="PPOB"
              description="Pembayaran tagihan dan pulsa dengan sistem terintegrasi"
              icon={<CreditCard className="w-8 h-8" />}
              price="Sesuai nominal"
              features={['Pulsa', 'Token Listrik', 'BPJS', 'Tagihan']}
              href="/ppob"
            />
            <ProductCard
              title="Premium Accounts"
              description="Account premium Netflix, Spotify, dan layanan digital lainnya"
              icon={<Crown className="w-8 h-8" />}
              price="Mulai dari Rp 15.000"
              features={['Netflix', 'Spotify', 'YouTube Premium', 'AI Tools']}
              href="/premium"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { number: '1000+', label: 'Reseller Aktif', icon: Users },
              { number: '10M+', label: 'Transaksi Selesai', icon: CheckCircle },
              { number: '99.9%', label: 'Uptime Server', icon: Globe },
              { number: '4.9★', label: 'Rating Customer', icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-purple-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <SectionHeader
            title="Cara Kerja Platform"
            subtitle="Mulai bisnis digital Anda hanya dalam 3 langkah mudah"
          />

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                step: '1',
                title: 'Daftar & Setup',
                description: 'Buat akun dan setup website reseller Anda dengan domain custom',
                color: 'bg-blue-500'
              },
              {
                step: '2',
                title: 'Import Produk',
                description: 'Pilih dan import produk yang ingin dijual dari katalog lengkap kami',
                color: 'bg-purple-500'
              },
              {
                step: '3',
                title: 'Mulai Jualan',
                description: 'Promosikan website Anda dan mulai menerima order dari customer',
                color: 'bg-pink-500'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center relative"
              >
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-gray-300 mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Siap Memulai Bisnis Digital Anda?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Bergabung dengan ribuan reseller sukses dan mulai hasilkan income dari bisnis digital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Mulai Gratis Sekarang
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  Hubungi Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
