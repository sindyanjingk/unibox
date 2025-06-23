'use client'

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  User, 
  Mail, 
  Phone, 
  Lock, 
  ArrowRight,
  Eye,
  EyeOff,
  CheckCircle
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ResellerUserRegister({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.password || !formData.phone) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (!formData.agreeTerms) {
      setError('Please agree to the terms and conditions');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          registrationType: 'customer',
          tenantSlug: params.slug
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      // Auto login after successful registration
      const loginResult = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        tenantSlug: params.slug,
        userType: 'customer',
        redirect: false
      });

      if (loginResult?.error) {
        // Registration successful but login failed, redirect to login
        router.push(`/reseller/${params.slug}/login`);
      } else {
        // Both registration and login successful
        router.push(`/reseller/${params.slug}/user-dashboard`);
      }

    } catch (err: any) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="max-w-md mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href={`/reseller/${params.slug}`} className="text-2xl font-bold text-purple-600 mb-4 block">
            {params.slug}.unibox.id
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Daftar Akun</h1>
          <p className="text-gray-600">Buat akun untuk mulai berbelanja</p>
        </motion.div>

        {/* Registration Form */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <motion.div variants={fadeInUp}>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Nama Lengkap
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Masukkan nama lengkap"
                  required
                />
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeInUp}>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="nama@email.com"
                  required
                />
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div variants={fadeInUp}>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Nomor WhatsApp
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="08123456789"
                  required
                />
              </div>
            </motion.div>

            {/* Password */}
            <motion.div variants={fadeInUp}>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Minimal 8 karakter"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </motion.div>

            {/* Confirm Password */}
            <motion.div variants={fadeInUp}>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Konfirmasi Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Ulangi password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </motion.div>

            {/* Terms Agreement */}
            <motion.div variants={fadeInUp} className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                required
              />
              <p className="text-gray-600 text-sm">
                Saya setuju dengan Syarat & Ketentuan dan Kebijakan Privasi
              </p>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={fadeInUp}>
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3"
                disabled={isLoading}
              >
                {isLoading ? 'Mendaftarkan...' : 'Daftar Sekarang'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
             {error && (
              <motion.div variants={fadeInUp} className="text-center mt-3">
                <p className="text-red-500 text-sm">{error}</p>
              </motion.div>
            )}
          </form>

          {/* Login Link */}
          <motion.div 
            className="text-center mt-6"
            variants={fadeInUp}
          >
            <p className="text-gray-600">
              Sudah punya akun?{' '}
              <Link href={`/reseller/${params.slug}/login`} className="text-purple-600 hover:text-purple-700 font-semibold">
                Masuk di sini
              </Link>
            </p>
          </motion.div>
        </motion.div>

        {/* Features */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Transaksi Aman</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Proses Cepat</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Support 24/7</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}