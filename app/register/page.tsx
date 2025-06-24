'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Eye, EyeOff, User, Mail, Lock, Globe, Store, Phone } from 'lucide-react'
import PageLayout from '@/components/ui/page-layout'

type FormValues = {
  name: string
  email: string
  password: string
  phone?: string
  tenantSlug: string
  tenantName: string
}

export default function Register() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormValues>()

  const onSubmit = async (data: FormValues) => {
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      const res = await response.json()

      if (!response.ok) throw new Error(res.error || 'Registration failed')

      setSuccess(res.message)

      // setTimeout(() => {
      //   router.push(`/reseller/${data.tenantSlug}/login`)
      // }, 2000)
      router.push('/login')
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  const tenantSlug = watch('tenantSlug')

  return (
    <PageLayout currentPage="register" showRegisterButton={false}>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Daftar Akun Baru</h2>
            <p className="text-gray-300">Mulai bisnis digital Anda hari ini</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              {/* Nama */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  {...register('name', { required: 'Nama wajib diisi' })}
                  placeholder="Nama Lengkap"
                  className="pl-10 w-full px-3 py-3 border border-gray-600 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  {...register('email', { required: 'Email wajib diisi' })}
                  placeholder="Email Address"
                  className="pl-10 w-full px-3 py-3 border border-gray-600 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>

              {/* Nomor Telepon */}
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  {...register('phone')}
                  placeholder="Nomor Telepon (opsional)"
                  className="pl-10 w-full px-3 py-3 border border-gray-600 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', { required: 'Password wajib diisi' })}
                  placeholder="Password"
                  className="pl-10 pr-10 w-full px-3 py-3 border border-gray-600 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Nama Toko */}
              <div className="relative">
                <Store className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  {...register('tenantName', { required: 'Nama toko wajib diisi' })}
                  placeholder="Nama Toko (contoh: Toko Digital Barokah)"
                  className="pl-10 w-full px-3 py-3 border border-gray-600 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>

              {/* Slug Toko */}
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  {...register('tenantSlug', {
                    required: 'Slug website wajib diisi',
                    pattern: {
                      value: /^[a-zA-Z0-9-]+$/,
                      message: 'Hanya huruf, angka, dan tanda hubung'
                    }
                  })}
                  placeholder="URL Website (contoh: tokobarokah)"
                  className="pl-10 w-full px-3 py-3 border border-gray-600 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>

              {tenantSlug && (
                <p className="mt-1 text-sm text-gray-300">
                  Website Anda: <span className="text-purple-300">{tenantSlug}.unibox.id</span>
                </p>
              )}
            </div>

            {/* Error & Success */}
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            {success && <p className="text-green-400 text-sm mt-2">{success}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
            >
              {loading ? 'Mendaftar...' : 'Buat Website & Akun'}
            </button>

            <div className="text-center">
              <p className="text-gray-300 text-sm">
                Sudah punya akun?{' '}
                <Link href="/login" className="text-purple-400 hover:text-purple-300 font-medium">
                  Masuk disini
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  )
}
