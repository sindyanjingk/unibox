
'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Crown,
  Play,
  Music,
  Monitor,
  Headphones,
  Book,
  Image,
  Video,
  Shield,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Zap
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const premiumProducts = [
  {
    category: 'Streaming Video',
    icon: Play,
    color: 'from-red-500 to-red-600',
    products: [
      { name: 'Netflix Premium 1 Bulan', price: 'Rp 65.000', originalPrice: 'Rp 169.000', description: '4K UHD, 4 device', features: ['Ultra HD 4K', '4 layar bersamaan', 'Download unlimited'] },
      { name: 'Netflix Standard 1 Bulan', price: 'Rp 45.000', originalPrice: 'Rp 120.000', description: 'HD, 2 device', features: ['Full HD', '2 layar bersamaan', 'Download unlimited'] },
      { name: 'Disney+ Hotstar 1 Bulan', price: 'Rp 25.000', originalPrice: 'Rp 39.000', description: 'Premium account', features: ['Konten Disney+', 'Hotstar VIP', 'Download offline'] },
      { name: 'Prime Video 1 Bulan', price: 'Rp 35.000', originalPrice: 'Rp 59.000', description: 'Amazon Prime Video', features: ['Original content', 'Download offline', 'Multiple device'] },
      { name: 'HBO Max 1 Bulan', price: 'Rp 55.000', originalPrice: 'Rp 109.000', description: 'HBO Max premium', features: ['HBO Originals', '4K content', 'Multiple profiles'] },
      { name: 'Apple TV+ 1 Bulan', price: 'Rp 30.000', originalPrice: 'Rp 79.000', description: 'Apple TV Plus', features: ['Apple Originals', '4K HDR', 'Spatial Audio'] }
    ]
  },
  {
    category: 'Streaming Music',
    icon: Music,
    color: 'from-green-500 to-emerald-600',
    products: [
      { name: 'Spotify Premium 1 Bulan', price: 'Rp 25.000', originalPrice: 'Rp 54.990', description: 'Individual account', features: ['No ads', 'Download offline', 'High quality audio'] },
      { name: 'Apple Music 1 Bulan', price: 'Rp 35.000', originalPrice: 'Rp 79.000', description: 'Individual plan', features: ['Lossless audio', 'Spatial Audio', '100M+ songs'] },
      { name: 'YouTube Music Premium', price: 'Rp 22.000', originalPrice: 'Rp 59.000', description: '1 bulan premium', features: ['Ad-free music', 'Background play', 'Download offline'] },
      { name: 'Joox Premium 1 Bulan', price: 'Rp 15.000', originalPrice: 'Rp 39.000', description: 'VIP membership', features: ['Unlimited skip', 'Download offline', 'High quality'] },
      { name: 'Langit Musik 1 Bulan', price: 'Rp 12.000', originalPrice: 'Rp 29.000', description: 'Premium account', features: ['Musik Indonesia', 'No ads', 'Download offline'] },
      { name: 'RESSO Premium 1 Bulan', price: 'Rp 18.000', originalPrice: 'Rp 39.000', description: 'Premium membership', features: ['Ad-free', 'Download offline', 'High quality'] }
    ]
  },
  {
    category: 'Produktivitas',
    icon: Monitor,
    color: 'from-blue-500 to-blue-600',
    products: [
      { name: 'Microsoft 365 Personal', price: 'Rp 45.000', originalPrice: 'Rp 89.000', description: '1 bulan subscription', features: ['Office apps', '1TB OneDrive', 'Premium templates'] },
      { name: 'Adobe Creative Cloud', price: 'Rp 95.000', originalPrice: 'Rp 359.000', description: '1 bulan all apps', features: ['Photoshop', 'Illustrator', 'Premiere Pro'] },
      { name: 'Canva Pro 1 Bulan', price: 'Rp 35.000', originalPrice: 'Rp 139.000', description: 'Professional plan', features: ['Premium templates', 'Background remover', 'Brand kit'] },
      { name: 'Grammarly Premium', price: 'Rp 25.000', originalPrice: 'Rp 144.000', description: '1 bulan premium', features: ['Advanced corrections', 'Tone detector', 'Plagiarism checker'] },
      { name: 'Notion Pro 1 Bulan', price: 'Rp 20.000', originalPrice: 'Rp 80.000', description: 'Personal Pro plan', features: ['Unlimited blocks', 'Version history', 'Advanced permissions'] },
      { name: 'Zoom Pro 1 Bulan', price: 'Rp 85.000', originalPrice: 'Rp 200.000', description: 'Professional plan', features: ['Cloud recording', 'Admin features', 'Custom meeting ID'] }
    ]
  },
  {
    category: 'Gaming',
    icon: Crown,
    color: 'from-purple-500 to-pink-600',
    products: [
      { name: 'Xbox Game Pass Ultimate', price: 'Rp 55.000', originalPrice: 'Rp 179.000', description: '1 bulan subscription', features: ['100+ games', 'Xbox Live Gold', 'EA Play included'] },
      { name: 'PlayStation Plus Premium', price: 'Rp 75.000', originalPrice: 'Rp 219.000', description: '1 bulan membership', features: ['Game catalog', 'Classic games', 'Game trials'] },
      { name: 'Steam Wallet $20', price: 'Rp 300.000', originalPrice: 'Rp 340.000', description: 'Steam credit', features: ['Global region', 'Instant delivery', 'No expiry'] },
      { name: 'Origin Access Premier', price: 'Rp 65.000', originalPrice: 'Rp 199.000', description: '1 bulan subscription', features: ['EA games library', 'Early access', 'Premium rewards'] },
      { name: 'Epic Games Store Credit', price: 'Rp 150.000', originalPrice: 'Rp 170.000', description: '$10 credit', features: ['Epic Store games', 'Instant delivery', 'No expiry'] },
      { name: 'Ubisoft+ Premium', price: 'Rp 70.000', originalPrice: 'Rp 249.000', description: '1 bulan access', features: ['Ubisoft games', 'Premium editions', 'DLC included'] }
    ]
  },
  {
    category: 'Learning & Books',
    icon: Book,
    color: 'from-orange-500 to-yellow-600',
    products: [
      { name: 'Coursera Plus 1 Bulan', price: 'Rp 185.000', originalPrice: 'Rp 590.000', description: 'Unlimited courses', features: ['7000+ courses', 'Certificates', 'Specializations'] },
      { name: 'Skillshare Premium', price: 'Rp 45.000', originalPrice: 'Rp 150.000', description: '1 bulan premium', features: ['Ad-free learning', 'Download classes', 'Premium classes'] },
      { name: 'Udemy Business', price: 'Rp 95.000', originalPrice: 'Rp 360.000', description: '1 bulan access', features: ['5000+ courses', 'Practice exercises', 'Certificates'] },
      { name: 'MasterClass 1 Bulan', price: 'Rp 65.000', originalPrice: 'Rp 180.000', description: 'All-access pass', features: ['Celebrity instructors', 'Workbooks', 'Community'] },
      { name: 'Kindle Unlimited', price: 'Rp 35.000', originalPrice: 'Rp 139.000', description: '1 bulan subscription', features: ['1M+ books', 'Magazines', 'Audiobooks'] },
      { name: 'Scribd Premium', price: 'Rp 25.000', originalPrice: 'Rp 129.000', description: '1 bulan unlimited', features: ['Books', 'Audiobooks', 'Magazines'] }
    ]
  },
  {
    category: 'VPN & Security',
    icon: Shield,
    color: 'from-teal-500 to-cyan-600',
    products: [
      { name: 'ExpressVPN 1 Bulan', price: 'Rp 85.000', originalPrice: 'Rp 159.000', description: 'Premium VPN', features: ['94 countries', 'No logs', '24/7 support'] },
      { name: 'NordVPN 1 Bulan', price: 'Rp 75.000', originalPrice: 'Rp 145.000', description: 'Premium security', features: ['59 countries', 'Double VPN', 'Threat protection'] },
      { name: 'Surfshark VPN 1 Bulan', price: 'Rp 65.000', originalPrice: 'Rp 139.000', description: 'Unlimited devices', features: ['100+ countries', 'No logs', 'CleanWeb'] },
      { name: 'CyberGhost VPN', price: 'Rp 55.000', originalPrice: 'Rp 125.000', description: '1 bulan premium', features: ['91 countries', 'No logs', 'Ad blocker'] },
      { name: 'Kaspersky Total Security', price: 'Rp 45.000', originalPrice: 'Rp 89.000', description: '1 bulan protection', features: ['Multi-device', 'VPN included', 'Password manager'] },
      { name: 'Norton 360 Premium', price: 'Rp 85.000', originalPrice: 'Rp 179.000', description: '1 bulan subscription', features: ['Dark web monitoring', 'VPN', 'Cloud backup'] }
    ]
  },
  {
    category: 'AI & Automation',
    icon: Zap,
    color: 'from-indigo-500 to-purple-600',
    products: [
      { name: 'ChatGPT Plus 1 Bulan', price: 'Rp 125.000', originalPrice: 'Rp 289.000', description: 'GPT-4 access unlimited', features: ['GPT-4 Turbo', 'DALL-E 3', 'Code Interpreter', 'No rate limits'] },
      { name: 'Claude Pro 1 Bulan', price: 'Rp 115.000', originalPrice: 'Rp 269.000', description: 'Anthropic Claude Pro', features: ['Claude 3 Opus', '5x usage limits', 'Priority bandwidth', 'Early access'] },
      { name: 'Midjourney Premium', price: 'Rp 185.000', originalPrice: 'Rp 430.000', description: '1 bulan unlimited', features: ['Unlimited generations', 'Fast GPU time', 'Stealth mode', 'Commercial usage'] },
      { name: 'Perplexity Pro 1 Bulan', price: 'Rp 95.000', originalPrice: 'Rp 269.000', description: 'AI search premium', features: ['GPT-4 access', 'Claude 3', 'Unlimited copilot', 'File upload'] },
      { name: 'Jasper AI 1 Bulan', price: 'Rp 225.000', originalPrice: 'Rp 520.000', description: 'AI copywriting tool', features: ['50K words/month', 'All templates', 'Brand voice', 'Plagiarism checker'] },
      { name: 'Copy.ai Pro 1 Bulan', price: 'Rp 165.000', originalPrice: 'Rp 389.000', description: 'AI content generator', features: ['Unlimited words', 'All tools', 'Brand voice', 'Team collaboration'] },
      { name: 'Gamma AI Premium', price: 'Rp 75.000', originalPrice: 'Rp 149.000', description: '1 bulan unlimited', features: ['Unlimited presentations', 'AI design', 'Export options', 'Custom branding'] },
      { name: 'Notion AI 1 Bulan', price: 'Rp 55.000', originalPrice: 'Rp 120.000', description: 'AI workspace assistant', features: ['AI writing assistant', 'Unlimited requests', 'Page auto-fill', 'AI Q&A'] },
      { name: 'GitHub Copilot', price: 'Rp 65.000', originalPrice: 'Rp 139.000', description: '1 bulan AI coding', features: ['AI code suggestions', 'Multiple languages', 'Real-time assistance', 'Context aware'] },
      { name: 'RunwayML Premium', price: 'Rp 95.000', originalPrice: 'Rp 189.000', description: 'AI video generation', features: ['Gen-2 video AI', 'AI Magic Tools', 'Green screen', 'Export 4K'] },
      { name: 'Luma AI Premium', price: 'Rp 125.000', originalPrice: 'Rp 239.000', description: 'AI video creation', features: ['Dream Machine', 'Text to video', 'Image to video', 'HD quality'] },
      { name: 'ElevenLabs Premium', price: 'Rp 135.000', originalPrice: 'Rp 289.000', description: 'AI voice generation', features: ['Voice cloning', 'Speech synthesis', 'Multiple languages', 'Commercial license'] }
    ]
  }
];

const benefits = [
  { icon: Zap, text: 'Aktivasi instant 1-5 menit' },
  { icon: Star, text: 'Account premium original' },
  { icon: CheckCircle, text: 'Garansi replacement' },
  { icon: Clock, text: 'Support 24/7' }
];

export default function Premium() {
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
                Premium Accounts
              </span>
              <br />Harga Terjangkau
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Akses semua layanan premium seperti Netflix, Spotify, Microsoft 365, dan banyak lagi dengan harga yang jauh lebih murah
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
          {premiumProducts.map((category, categoryIndex) => (
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
                  <p className="text-gray-300">Akun premium {category.category.toLowerCase()} terbaik</p>
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
                        <div className="text-sm text-gray-400 line-through">{product.originalPrice}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                      <Crown className="w-4 h-4 mr-2" />
                      Beli Premium
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
              Siap Jual Premium Accounts?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Bergabung dengan ribuan reseller dan raih keuntungan dari penjualan akun premium terlaris
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
