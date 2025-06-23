
'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Heart,
  Eye,
  Users,
  MessageCircle,
  Play,
  Share2,
  ArrowRight,
  Star,
  Smartphone
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const socialProducts = [
  {
    platform: 'Instagram',
    icon: Instagram,
    color: 'from-pink-500 to-purple-600',
    products: [
      { name: 'Instagram Followers 1K', price: 'Rp 15.000', originalPrice: 'Rp 20.000', description: 'Real followers, garansi 30 hari' },
      { name: 'Instagram Followers 5K', price: 'Rp 65.000', originalPrice: 'Rp 85.000', description: 'Real followers, garansi 30 hari' },
      { name: 'Instagram Likes 1K', price: 'Rp 8.000', originalPrice: 'Rp 12.000', description: 'Real likes, instant delivery' },
      { name: 'Instagram Views 10K', price: 'Rp 12.000', originalPrice: 'Rp 18.000', description: 'Story/Reel views, fast delivery' },
      { name: 'Instagram Comments 100', price: 'Rp 25.000', originalPrice: 'Rp 35.000', description: 'Custom comments Indonesia' },
      { name: 'Instagram Story Views 5K', price: 'Rp 10.000', originalPrice: 'Rp 15.000', description: 'Real story views' }
    ]
  },
  {
    platform: 'Facebook',
    icon: Facebook,
    color: 'from-blue-500 to-blue-600',
    products: [
      { name: 'Facebook Page Likes 1K', price: 'Rp 18.000', originalPrice: 'Rp 25.000', description: 'Real page likes, permanent' },
      { name: 'Facebook Post Likes 500', price: 'Rp 10.000', originalPrice: 'Rp 15.000', description: 'Real post likes' },
      { name: 'Facebook Followers 1K', price: 'Rp 20.000', originalPrice: 'Rp 28.000', description: 'Real followers, garansi' },
      { name: 'Facebook Shares 100', price: 'Rp 15.000', originalPrice: 'Rp 22.000', description: 'Real shares, boost engagement' },
      { name: 'Facebook Comments 50', price: 'Rp 30.000', originalPrice: 'Rp 40.000', description: 'Custom comments' },
      { name: 'Facebook Video Views 10K', price: 'Rp 12.000', originalPrice: 'Rp 18.000', description: 'Real video views' }
    ]
  },
  {
    platform: 'YouTube',
    icon: Youtube,
    color: 'from-red-500 to-red-600',
    products: [
      { name: 'YouTube Subscribers 1K', price: 'Rp 35.000', originalPrice: 'Rp 50.000', description: 'Real subscribers, no drop' },
      { name: 'YouTube Views 10K', price: 'Rp 15.000', originalPrice: 'Rp 22.000', description: 'Real views, retention tinggi' },
      { name: 'YouTube Likes 1K', price: 'Rp 12.000', originalPrice: 'Rp 18.000', description: 'Real likes, fast delivery' },
      { name: 'YouTube Watch Hours 1K', price: 'Rp 45.000', originalPrice: 'Rp 65.000', description: 'Real watch time untuk monetisasi' },
      { name: 'YouTube Comments 100', price: 'Rp 25.000', originalPrice: 'Rp 35.000', description: 'Custom comments positif' },
      { name: 'YouTube Shares 500', price: 'Rp 18.000', originalPrice: 'Rp 25.000', description: 'Real shares, viral boost' }
    ]
  },
  {
    platform: 'TikTok',
    icon: Smartphone,
    color: 'from-purple-500 to-pink-500',
    products: [
      { name: 'TikTok Followers 1K', price: 'Rp 12.000', originalPrice: 'Rp 18.000', description: 'Real followers, garansi' },
      { name: 'TikTok Likes 1K', price: 'Rp 6.000', originalPrice: 'Rp 10.000', description: 'Real likes, instant' },
      { name: 'TikTok Views 10K', price: 'Rp 8.000', originalPrice: 'Rp 12.000', description: 'Real views, high retention' },
      { name: 'TikTok Shares 500', price: 'Rp 15.000', originalPrice: 'Rp 20.000', description: 'Real shares, viral potential' },
      { name: 'TikTok Comments 100', price: 'Rp 20.000', originalPrice: 'Rp 28.000', description: 'Custom comments Indonesia' },
      { name: 'TikTok Live Views 1K', price: 'Rp 25.000', originalPrice: 'Rp 35.000', description: 'Live stream viewers' }
    ]
  }
];

const benefits = [
  { icon: Users, text: 'Real followers, bukan bot' },
  { icon: Star, text: 'Garansi refill 30 hari' },
  { icon: Heart, text: 'Support 24/7' },
  { icon: Eye, text: 'Delivery instant-24 jam' }
];

export default function SocialMedia() {
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
                Social Media
              </span>
              <br />Management
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Tingkatkan engagement dan followers dengan layanan social media marketing terpercaya
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
          {socialProducts.map((platform, platformIndex) => (
            <motion.div
              key={platform.platform}
              className="mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: platformIndex * 0.2 }}
            >
              {/* Platform Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{platform.platform}</h2>
                  <p className="text-gray-300">Layanan terlengkap untuk {platform.platform}</p>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {platform.products.map((product, productIndex) => (
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
                      Beli Sekarang
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
              Siap Tingkatkan Social Media Anda?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Bergabung dengan ribuan reseller yang sudah merasakan keuntungan besar
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
