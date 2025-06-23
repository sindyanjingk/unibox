'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Lock, 
  Building, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Eye,
  EyeOff,
  Smartphone,
  Gamepad2,
  CreditCard,
  Crown
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const benefits = [
  {
    icon: Smartphone,
    title: 'Social Media Management',
    description: 'Jual followers, likes, views untuk semua platform'
  },
  {
    icon: Gamepad2,
    title: 'Top Up Game',
    description: 'Diamond ML, UC PUBG, dan 50+ game lainnya'
  },
  {
    icon: CreditCard,
    title: 'PPOB Lengkap',
    description: 'Bayar listrik, air, internet, dan 1000+ biller'
  },
  {
    icon: Crown,
    title: 'Premium Accounts',
    description: 'Netflix, Spotify, Microsoft 365, dan banyak lagi'
  }
];

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    subdomain: '',
    agreeTerms: true
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Password tidak cocok!');
      return;
    }

    // For demo purposes, save user data to localStorage
    const userData = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      businessName: formData.businessName,
      subdomain: formData.subdomain,
      registrationTime: new Date().toISOString()
    };
    
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log('Registration successful:', userData);
    
    // Redirect to dashboard
    window.location.href = '/dashboard';
  };

  const generateSubdomain = (businessName: string) => {
    return businessName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '')
      .substring(0, 15);
  };

  const handleBusinessNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      businessName: value,
      subdomain: generateSubdomain(value)
    }));
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
              <Link href="/demo" className="text-gray-300 hover:text-white transition-colors">
                Demo
              </Link>
            </div>
            <Button variant="outline" asChild className="border-purple-400 text-purple-400">
              <Link href="/login">Masuk</Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Benefits */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Mulai Bisnis Digital Anda dengan{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    UniBox
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Dapatkan website pribadi dengan subdomain sendiri dan mulai jual berbagai produk digital dengan margin keuntungan hingga 50%
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-300 text-sm">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <motion.div
                className="grid grid-cols-3 gap-4 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">5000+</div>
                  <div className="text-gray-400 text-sm">Reseller Aktif</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">1M+</div>
                  <div className="text-gray-400 text-sm">Transaksi/Bulan</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Registration Form */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Daftar Sekarang</h2>
                <p className="text-gray-300">Mulai bisnis digital Anda hari ini</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Nama Lengkap
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                      placeholder="Masukkan nama lengkap"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                      placeholder="nama@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Nomor WhatsApp
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                      placeholder="08123456789"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                      placeholder="Minimal 8 karakter"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Konfirmasi Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                      placeholder="Ulangi password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Nama Bisnis
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleBusinessNameChange}
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                      placeholder="Nama toko/bisnis Anda"
                      required
                    />
                  </div>
                </div>

                {/* Subdomain Preview */}
                {formData.subdomain && (
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Website Anda
                    </label>
                    <div className="bg-purple-500/20 border border-purple-400/50 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <Globe className="w-5 h-5 text-purple-400" />
                        <span className="text-purple-300 font-medium">
                          {formData.subdomain}.unibox.id
                        </span>
                      </div>
                      <p className="text-purple-200 text-sm mt-1">
                        Ini akan menjadi alamat website Anda
                      </p>
                    </div>
                  </div>
                )}

                {/* Terms Agreement */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 bg-white/10 border border-white/20 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                  />
                  <p className="text-gray-300 text-sm">
                    Saya setuju dengan{' '}
                    <Link href="/terms" className="text-purple-400 hover:text-purple-300">
                      Syarat & Ketentuan
                    </Link>{' '}
                    dan{' '}
                    <Link href="/privacy" className="text-purple-400 hover:text-purple-300">
                      Kebijakan Privasi
                    </Link>
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 text-lg"
                >
                  Daftar Sekarang
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                {/* Login Link */}
                <div className="text-center">
                  <p className="text-gray-300">
                    Sudah punya akun?{' '}
                    <Link href="/login" className="text-purple-400 hover:text-purple-300 font-semibold">
                      Masuk di sini
                    </Link>
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}