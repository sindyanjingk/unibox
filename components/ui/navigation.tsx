
'use client'

import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, User, LogOut, Settings } from 'lucide-react';

interface NavigationProps {
  currentPage?: string;
  showRegisterButton?: boolean;
}

export default function Navigation({ currentPage, showRegisterButton = true }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  const mainNavItems = [
    { label: 'Beranda', href: '/', key: 'home' },
    { label: 'Fitur', href: '/features', key: 'features' },
    { label: 'Pricing', href: '/pricing', key: 'pricing' },
    { label: 'Blog', href: '/blog', key: 'blog' },
    { label: 'Kontak', href: '/contact', key: 'contact' }
  ];

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              UniBox
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                  currentPage === item.key ? 'text-purple-400' : 'text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {status === 'loading' ? (
              <div className="w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
            ) : session ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard">
                  <Button variant="outline" size="sm" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                    Dashboard
                  </Button>
                </Link>
                <div className="relative group">
                  <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
                    <User className="w-5 h-5" />
                    <span className="text-sm">{session.user?.name}</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <Link href="/dashboard" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                      <Settings className="w-4 h-4 mr-2" />
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="outline" size="sm" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                    Masuk
                  </Button>
                </Link>
                {showRegisterButton && (
                  <Link href="/register">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                      Daftar
                    </Button>
                  </Link>
                )}
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 py-4"
            >
              <div className="space-y-4">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`block text-sm font-medium transition-colors hover:text-purple-400 ${
                      currentPage === item.key ? 'text-purple-400' : 'text-gray-300'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-white/10 space-y-4">
                  {session ? (
                    <>
                      <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                        <Button variant="outline" size="sm" className="w-full border-purple-400 text-purple-400">
                          Dashboard
                        </Button>
                      </Link>
                      <Button
                        onClick={() => {
                          handleLogout();
                          setIsMenuOpen(false);
                        }}
                        variant="outline"
                        size="sm"
                        className="w-full border-red-400 text-red-400"
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                        <Button variant="outline" size="sm" className="w-full border-purple-400 text-purple-400">
                          Masuk
                        </Button>
                      </Link>
                      {showRegisterButton && (
                        <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                          <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                            Daftar
                          </Button>
                        </Link>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
