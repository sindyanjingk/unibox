'use client'

import { useState } from 'react'
import { signIn, getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Eye, EyeOff, Mail, Lock, Globe } from 'lucide-react'
import PageLayout from '@/components/ui/page-layout'

export default function Login() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [loginType, setLoginType] = useState<'admin' | 'tenant'>('admin')

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    tenantSlug: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        tenantSlug: loginType === 'tenant' ? formData.tenantSlug : '',
        redirect: false
      })

      if (result?.error) {
        setError('Invalid credentials')
      } else {
        // Get updated session
        const session = await getSession()

        if (session?.user?.role === 'admin') {
          router.push('/dashboard')
        } else if (session?.user?.tenantSlug) {
          router.push(`/reseller/${session.user.tenantSlug}/admin`)
        } else {
          router.push('/dashboard')
        }
      }
    } catch (error) {
      setError('Login failed')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <PageLayout currentPage="login" showRegisterButton={false}>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Masuk ke Akun</h2>
            <p className="text-gray-300">Kelola bisnis digital Anda</p>
          </div>

          {/* Login Type Toggle */}
          <div className="bg-white/10 p-1 rounded-lg backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-1">
              <button
                type="button"
                onClick={() => setLoginType('admin')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  loginType === 'admin'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                Admin UniBox
              </button>
              <button
                type="button"
                onClick={() => setLoginType('tenant')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  loginType === 'tenant'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                Pemilik Toko
              </button>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {loginType === 'tenant' && (
                <div>
                  <label htmlFor="tenantSlug" className="sr-only">Website URL</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="tenantSlug"
                      name="tenantSlug"
                      type="text"
                      required={loginType === 'tenant'}
                      value={formData.tenantSlug}
                      onChange={handleInputChange}
                      className="pl-10 w-full px-3 py-3 border border-gray-600 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="URL Website (contoh: tokobarokah)"
                    />
                  </div>
                  {formData.tenantSlug && (
                    <p className="mt-1 text-sm text-gray-300">
                      Login ke: <span className="text-purple-300">{formData.tenantSlug}.unibox.id</span>
                    </p>
                  )}
                </div>
              )}

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
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {loading ? 'Masuk...' : 'Masuk'}
            </button>

            <div className="text-center">
              <p className="text-gray-300 text-sm">
                Belum punya akun?{' '}
                <Link href="/register" className="text-purple-400 hover:text-purple-300 font-medium">
                  Daftar disini
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  )
}