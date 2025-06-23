'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { Eye, EyeOff, User, Mail, Lock, Globe, Store, Phone } from 'lucide-react'
import PageLayout from '@/components/ui/page-layout'

export default function Register() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [registrationType, setRegistrationType] = useState<'admin' | 'tenant'>('tenant')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    tenantSlug: '',
    tenantName: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const payload = {
        email: formData.email,
        password: formData.password,
        name: formData.name,
        phone: formData.phone,
        ...(registrationType === 'tenant' && {
          tenantSlug: formData.tenantSlug,
          tenantName: formData.tenantName
        })
      }

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed')
      }

      setSuccess(data.message)

      // Redirect after successful registration
      setTimeout(() => {
        if (registrationType === 'admin') {
          router.push('/login')
        } else {
          router.push(`/reseller/${formData.tenantSlug}/login`)
        }
      }, 2000)

    } catch (error) {
      setError(error instanceof Error ? error.message : 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <PageLayout currentPage="register" showRegisterButton={false}>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Daftar Akun Baru</h2>
            <p className="text-gray-300">Mulai bisnis digital Anda hari ini</p>
          </div>

          {/* Registration Type Toggle */}
          <div className="bg-white/10 p-1 rounded-lg backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-1">
              <button
                type="button"
                onClick={() => setRegistrationType('tenant')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  registrationType === 'tenant'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                Buat Website Toko
              </button>
              <button
                type="button"
                onClick={() => setRegistrationType('admin')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  registrationType === 'admin'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                Admin UniBox
              </button>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Personal Info */}
              <div>
                <label htmlFor="name" className="sr-only">Nama Lengkap</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10 w-full px-3 py-3 border border-gray-600 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Nama Lengkap"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 w-full px-3 py-3 border border-gray-600 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">Nomor Telepon</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="pl-10 w-full px-3 py-3 border border-gray-600 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Nomor Telepon (opsional)"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 pr-10 w-full px-3 py-3 border border-gray-600 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Password"
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

              {/* Tenant Info - only show if creating tenant */}
              {registrationType === 'tenant' && (
                <>
                  <div>
                    <label htmlFor="tenantName" className="sr-only">Nama Toko</label>
                    <div className="relative">
                      <Store className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        id="tenantName"
                        name="tenantName"
                        type="text"
                        required={registrationType === 'tenant'}
                        value={formData.tenantName}
                        onChange={handleInputChange}
                        className="pl-10 w-full px-3 py-3 border border-gray-600 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Nama Toko (contoh: Toko Digital Barokah)"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="tenantSlug" className="sr-only">URL Website</label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        id="tenantSlug"
                        name="tenantSlug"
                        type="text"
                        required={registrationType === 'tenant'}
                        value={formData.tenantSlug}
                        onChange={handleInputChange}
                        className="pl-10 w-full px-3 py-3 border border-gray-600 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="URL Website (contoh: tokobarokah)"
                        pattern="[a-zA-Z0-9-]+"
                        title="Hanya huruf, angka, dan tanda hubung"
                      />
                    </div>
                    {formData.tenantSlug && (
                      <p className="mt-1 text-sm text-gray-300">
                        Website Anda: <span className="text-purple-300">{formData.tenantSlug}.unibox.id</span>
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}

            {success && (
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                <p className="text-green-300 text-sm">{success}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {loading ? 'Mendaftar...' : (registrationType === 'tenant' ? 'Buat Website & Akun' : 'Daftar Admin')}
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