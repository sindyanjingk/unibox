
'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Calendar, 
  User, 
  Eye, 
  ArrowRight,
  MessageCircle,
  Share2
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const categories = [
  { name: 'Semua', slug: 'all', count: 24 },
  { name: 'Tips Bisnis', slug: 'tips-bisnis', count: 8 },
  { name: 'Tutorial', slug: 'tutorial', count: 6 },
  { name: 'Success Story', slug: 'success-story', count: 5 },
  { name: 'Market Insights', slug: 'market-insights', count: 5 }
];

const featuredPost = {
  title: 'Cara Meningkatkan Omzet Bisnis Digital hingga 300% dalam 3 Bulan',
  excerpt: 'Strategi terbukti yang digunakan oleh top reseller kami untuk meningkatkan penjualan secara signifikan...',
  author: 'Ahmad Rizki',
  date: '15 Januari 2024',
  readTime: '8 min read',
  views: '2.5K',
  category: 'Tips Bisnis',
  image: '/api/placeholder/800/400',
  slug: 'cara-meningkatkan-omzet-bisnis-digital'
};

const blogPosts = [
  {
    title: 'Panduan Lengkap Memulai Bisnis Top Up Game untuk Pemula',
    excerpt: 'Langkah demi langkah membangun bisnis top up game yang profitable dengan modal minim...',
    author: 'Sari Indah',
    date: '12 Januari 2024',
    readTime: '6 min read',
    views: '1.8K',
    category: 'Tutorial',
    image: '/api/placeholder/400/250',
    slug: 'panduan-bisnis-top-up-game'
  },
  {
    title: 'Success Story: Dari Nol hingga 50 Juta per Bulan',
    excerpt: 'Cerita inspiratif reseller kami yang berhasil membangun empire bisnis digital...',
    author: 'Budi Santoso',
    date: '10 Januari 2024',
    readTime: '10 min read',
    views: '3.2K',
    category: 'Success Story',
    image: '/api/placeholder/400/250',
    slug: 'success-story-50-juta-per-bulan'
  },
  {
    title: 'Tren Social Media Management 2024: Peluang Emas untuk Reseller',
    excerpt: 'Analisis mendalam tentang tren dan peluang bisnis social media management...',
    author: 'Diana Putri',
    date: '8 Januari 2024',
    readTime: '7 min read',
    views: '1.5K',
    category: 'Market Insights',
    image: '/api/placeholder/400/250',
    slug: 'tren-social-media-management-2024'
  },
  {
    title: '10 Strategi Marketing yang Terbukti Efektif untuk Bisnis Digital',
    excerpt: 'Teknik marketing yang sudah terbukti meningkatkan konversi dan penjualan...',
    author: 'Rizki Pratama',
    date: '5 Januari 2024',
    readTime: '9 min read',
    views: '2.1K',
    category: 'Tips Bisnis',
    image: '/api/placeholder/400/250',
    slug: 'strategi-marketing-bisnis-digital'
  },
  {
    title: 'Cara Optimasi Website Reseller untuk SEO dan Konversi',
    excerpt: 'Tips dan trik untuk membuat website reseller Anda lebih mudah ditemukan...',
    author: 'Andi Kurniawan',
    date: '3 Januari 2024',
    readTime: '5 min read',
    views: '1.9K',
    category: 'Tutorial',
    image: '/api/placeholder/400/250',
    slug: 'optimasi-website-reseller-seo'
  },
  {
    title: 'Prediksi Pasar PPOB 2024: Peluang Pertumbuhan 200%',
    excerpt: 'Analisis mendalam tentang potensi pertumbuhan industri PPOB di Indonesia...',
    author: 'Maya Sari',
    date: '1 Januari 2024',
    readTime: '12 min read',
    views: '2.8K',
    category: 'Market Insights',
    image: '/api/placeholder/400/250',
    slug: 'prediksi-pasar-ppob-2024'
  }
];

export default function Blog() {
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
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Kontak
              </Link>
              <Link href="/blog" className="text-purple-400 font-semibold">
                Blog
              </Link>
              <Link href="/karir" className="text-gray-300 hover:text-white transition-colors">
                Karir
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
              UniBox 
            </span>
            <span className="text-white"> Blog</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tips, tutorial, dan insights terbaru untuk mengembangkan bisnis digital Anda. Belajar dari pengalaman para ahli dan success story reseller kami.
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.slug === 'all' ? 'default' : 'outline'}
                className={`
                  ${category.slug === 'all' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                    : 'border-gray-600 text-gray-300 hover:bg-white/10'
                  }
                `}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 aspect-video lg:aspect-auto"></div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="text-purple-400 text-sm">{featuredPost.category}</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-300 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    {featuredPost.views}
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                  Baca Selengkapnya <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Artikel Terbaru
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 aspect-video"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-purple-400 text-sm font-semibold">{post.category}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {post.views}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-700 flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{post.date}</span>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Jangan Lewatkan Update Terbaru
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Dapatkan tips bisnis digital, tutorial terbaru, dan insights eksklusif langsung ke email Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Gratis, no spam, unsubscribe kapan saja
            </p>
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
              Siap Memulai Bisnis Digital?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Bergabunglah dengan ribuan reseller sukses dan mulai raih keuntungan hari ini
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-6"
              asChild
            >
              <Link href="/register">
                Daftar Gratis Sekarang <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
