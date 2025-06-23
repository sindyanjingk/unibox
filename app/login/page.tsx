
'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { 
  Mail, 
  Lock, 
  ArrowRight,
  Eye,
  EyeOff,
  CheckCircle,
  Users,
  TrendingUp,
  Shield
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

const loginBenefits = [
  {
    icon: Users,
    title: "Akses Dashboard",
    description: "Kelola bisnis digital Anda dengan dashboard yang powerful"
  },
  {
    icon: TrendingUp,
    title: "Analytics Real-time",
    description: "Monitor penjualan dan performa bisnis secara real-time"
  },
  {
    icon: Shield,
    title: "Keamanan Terjamin",
    description: "Data Anda aman dengan enkripsi tingkat enterprise"
  }
];

const successStories = [
  {
    name: "Budi Santoso",
    business: "TokoGame.unibox.id",
    revenue: "Rp 15 juta/bulan",
    quote: "Dalam 3 bulan pertama, revenue saya sudah mencapai 15 juta!"
  },
  {
    name: "Siti Nurhaliza",
    business: "SosmedPro.unibox.id",
    revenue: "Rp 8 juta/bulan",
    quote: "Platform ini benar-benar memudahkan saya mengelola bisnis digital."
  },
  {
    name: "Ahmad Rizki",
    business: "PayBills.unibox.id",
    revenue: "Rp 22 juta/bulan",
    quote: "Fitur PPOB sangat diminati customer, profit margin juga bagus!"
  }
];

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      console.log('Login data:', formData);
      setIsLoading(false);
      // Redirect to dashboard after successful login
    }, 2000);
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
              <Link href="/demo" className="text-gray-300 hover:text-white transition-colors">
                Demo
              </Link>
            </div>
            <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <Link href="/register">Daftar Gratis</Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Welcome & Benefits */}
            <motion.div
              className="lg:pr-8"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Selamat Datang 
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Kembali!</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Masuk ke dashboard Anda dan lanjutkan perjalanan bisnis digital yang menguntungkan
              </p>

              {/* Benefits */}
              <div className="space-y-6 mb-8">
                {loginBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-3 rounded-lg">
                      <benefit.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Success Stories */}
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-6">💰 Success Stories</h3>
                <div className="space-y-4">
                  {successStories.map((story, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/5 rounded-lg p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-semibold text-white">{story.name}</div>
                          <div className="text-sm text-purple-300">{story.business}</div>
                        </div>
                        <div className="text-green-400 font-bold text-sm">{story.revenue}</div>
                      </div>
                      <p className="text-gray-300 text-sm italic">"{story.quote}"</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Login Form */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Masuk ke Akun</h2>
                <p className="text-gray-400">Akses dashboard dan kelola bisnis Anda</p>
              </div>

              <form onSubmit={handleSubmit}>
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  className="space-y-6"
                >
                  <motion.div variants={fadeInUp}>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="contoh@email.com"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-12 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Masukkan password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="rememberMe"
                        name="rememberMe"
                        type="checkbox"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-purple-500 focus:ring-purple-500 border-gray-600 rounded bg-white/10"
                      />
                      <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-300">
                        Ingat saya
                      </label>
                    </div>
                    <Link href="/forgot-password" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                      Lupa password?
                    </Link>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 py-3 text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Memproses...
                        </div>
                      ) : (
                        <>
                          Masuk <ArrowRight className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </motion.div>
              </form>

              {/* Divider */}
              <div className="my-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-600"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-slate-900 text-gray-400">Atau</span>
                  </div>
                </div>
              </div>

              {/* Demo Login */}
              <motion.div
                className="text-center space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-gray-600 text-gray-300 hover:bg-white/10 py-3"
                  onClick={() => window.open('/demo', '_blank')}
                >
                  Lihat Demo Platform
                </Button>
                
                <p className="text-gray-400 text-sm">
                  Belum punya akun?{' '}
                  <Link href="/register" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                    Daftar gratis sekarang
                  </Link>
                </p>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                className="mt-8 grid grid-cols-3 gap-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-purple-400 font-bold text-lg">5000+</div>
                  <div className="text-gray-400 text-xs">Reseller Aktif</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-green-400 font-bold text-lg">99.9%</div>
                  <div className="text-gray-400 text-xs">Uptime</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-blue-400 font-bold text-lg">24/7</div>
                  <div className="text-gray-400 text-xs">Support</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
