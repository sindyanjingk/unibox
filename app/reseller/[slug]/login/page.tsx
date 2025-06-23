
'use client'

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ResellerLoginPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        tenantSlug: params.slug,
        userType: 'customer',
        redirect: false
      });

      if (result?.error) {
        setError('Invalid email or password');
      } else {
        router.push(`/reseller/${params.slug}/user-dashboard`);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Masuk ke Akun</h1>
          <p className="text-gray-600">Masuk untuk melanjutkan belanja</p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="Masukkan password"
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

            {/* Remember Me and Forgot Password */}
            <motion.div variants={fadeInUp} className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <label className="ml-2 text-sm text-gray-600">Ingat saya</label>
              </div>
              <Link href={`/reseller/${params.slug}/forgot-password`} className="text-sm text-purple-600 hover:text-purple-700">
                Lupa password?
              </Link>
            </motion.div>

            {/* Error Message */}
            {error && (
              <motion.div variants={fadeInUp} className="text-center">
                <p className="text-red-500 text-sm">{error}</p>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.div variants={fadeInUp}>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Masuk...
                  </div>
                ) : (
                  <>
                    Masuk <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </motion.div>
          </form>

          {/* Register Link */}
          <motion.div 
            className="text-center mt-6"
            variants={fadeInUp}
          >
            <p className="text-gray-600">
              Belum punya akun?{' '}
              <Link href={`/reseller/${params.slug}/register`} className="text-purple-600 hover:text-purple-700 font-semibold">
                Daftar di sini
              </Link>
            </p>
          </motion.div>
        </motion.div>

        {/* Quick Info */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm text-center">
              <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Akun Aman</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm text-center">
              <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Data Terlindungi</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm text-center">
              <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Support 24/7</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
