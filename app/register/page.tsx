
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
  Store, 
  Globe,
  CheckCircle,
  ArrowRight,
  Eye,
  EyeOff,
  Building
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

const benefits = [
  "Website pribadi dengan subdomain unik",
  "Dashboard admin yang mudah digunakan",
  "Akses ke semua produk digital",
  "Margin keuntungan hingga 40%",
  "Support 24/7 dari tim kami",
  "Training lengkap untuk pemula"
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
    agreeTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration data:', formData);
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
            </div>
            <Button asChild variant="outline" className="border-purple-400 text-purple-400">
              <Link href="/login">Masuk</Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Benefits */}
            <motion.div
              className="lg:sticky lg:top-24"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Mulai Bisnis Digital Anda 
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Hari Ini</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Bergabunglah dengan ribuan reseller sukses yang sudah merasakan keuntungan dari platform UniBox
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">🎉 Promo Terbatas!</h3>
                <p className="text-gray-300 mb-4">
                  Daftar sekarang dan dapatkan bonus saldo awal <span className="text-green-400 font-semibold">Rp 50.000</span> untuk memulai bisnis Anda!
                </p>
                <div className="text-sm text-purple-300">
                  *Berlaku untuk 100 pendaftar pertama bulan ini
                </div>
              </div>
            </motion.div>

            {/* Right Side - Registration Form */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        currentStep >= step 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                          : 'bg-gray-600 text-gray-400'
                      }`}>
                        {step}
                      </div>
                      {step < 3 && (
                        <div className={`w-16 h-1 mx-2 ${
                          currentStep > step ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gray-600'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-white">
                    {currentStep === 1 && "Informasi Pribadi"}
                    {currentStep === 2 && "Informasi Bisnis"}
                    {currentStep === 3 && "Konfirmasi"}
                  </h2>
                  <p className="text-gray-400">
                    {currentStep === 1 && "Masukkan data diri Anda"}
                    {currentStep === 2 && "Setup website dan bisnis Anda"}
                    {currentStep === 3 && "Review dan selesaikan pendaftaran"}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="space-y-6"
                  >
                    <motion.div variants={fadeInUp}>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nama Lengkap
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="Masukkan nama lengkap"
                          required
                        />
                      </div>
                    </motion.div>

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
                          className="w-full pl-12 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="contoh@email.com"
                          required
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nomor WhatsApp
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="08xxxxxxxxxx"
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
                          className="w-full pl-12 pr-12 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                    </motion.div>
                  </motion.div>
                )}

                {/* Step 2: Business Information */}
                {currentStep === 2 && (
                  <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="space-y-6"
                  >
                    <motion.div variants={fadeInUp}>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nama Bisnis
                      </label>
                      <div className="relative">
                        <Store className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="Nama toko/bisnis Anda"
                          required
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subdomain
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="subdomain"
                          value={formData.subdomain}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="namabisnis"
                          required
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                          .unibox.id
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 mt-2">
                        Website Anda akan dapat diakses di: <span className="text-purple-400">{formData.subdomain || 'namabisnis'}.unibox.id</span>
                      </p>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Konfirmasi Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-12 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                    </motion.div>
                  </motion.div>
                )}

                {/* Step 3: Confirmation */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div className="bg-white/5 rounded-lg p-6 space-y-4">
                      <h3 className="text-lg font-semibold text-white mb-4">Review Informasi Anda</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Nama:</span>
                          <span className="text-white">{formData.fullName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Email:</span>
                          <span className="text-white">{formData.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">WhatsApp:</span>
                          <span className="text-white">{formData.phone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Bisnis:</span>
                          <span className="text-white">{formData.businessName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Website:</span>
                          <span className="text-purple-400">{formData.subdomain}.unibox.id</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleInputChange}
                        className="mt-1"
                        required
                      />
                      <label className="text-sm text-gray-300">
                        Saya setuju dengan{' '}
                        <Link href="/terms" className="text-purple-400 hover:underline">
                          Syarat & Ketentuan
                        </Link>{' '}
                        dan{' '}
                        <Link href="/privacy" className="text-purple-400 hover:underline">
                          Kebijakan Privasi
                        </Link>{' '}
                        UniBox
                      </label>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      onClick={handlePrevious}
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      Sebelumnya
                    </Button>
                  )}
                  
                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 ml-auto"
                    >
                      Selanjutnya <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 ml-auto"
                      disabled={!formData.agreeTerms}
                    >
                      Daftar Sekarang <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  )}
                </div>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-400">
                  Sudah punya akun?{' '}
                  <Link href="/login" className="text-purple-400 hover:underline">
                    Masuk di sini
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
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
    console.log('Registration data:', formData);
    // Handle registration logic here
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
