
'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { LogOut, User } from 'lucide-react';

interface NavigationProps {
  currentPage?: string;
  showRegisterButton?: boolean;
}

export default function Navigation({ currentPage, showRegisterButton = true }: NavigationProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Check if user is logged in (from localStorage for demo purposes)
    const userData = localStorage.getItem('userData');
    if (userData) {
      const user = JSON.parse(userData);
      setIsLoggedIn(true);
      setUserName(user.name || user.fullName || 'User');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    setIsLoggedIn(false);
    setUserName('');
    window.location.href = '/';
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">UniBox</Link>
          </motion.div>
          
          <motion.div 
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              href="/features" 
              className={`transition-colors ${currentPage === 'features' ? 'text-purple-400 font-semibold' : 'text-gray-300 hover:text-white'}`}
            >
              Fitur
            </Link>
            <Link 
              href="/pricing" 
              className={`transition-colors ${currentPage === 'pricing' ? 'text-purple-400 font-semibold' : 'text-gray-300 hover:text-white'}`}
            >
              Harga
            </Link>
            <Link 
              href="/about"
              className={`transition-colors ${currentPage === 'about' ? 'text-purple-400 font-semibold' : 'text-gray-300 hover:text-white'}`}
            >
              Tentang
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors ${currentPage === 'contact' ? 'text-purple-400 font-semibold' : 'text-gray-300 hover:text-white'}`}
            >
              Kontak
            </Link>
            <Link 
              href="/blog" 
              className={`transition-colors ${currentPage === 'blog' ? 'text-purple-400 font-semibold' : 'text-gray-300 hover:text-white'}`}
            >
              Blog
            </Link>
            <Link 
              href="/karir" 
              className={`transition-colors ${currentPage === 'karir' ? 'text-purple-400 font-semibold' : 'text-gray-300 hover:text-white'}`}
            >
              Karir
            </Link>
          </motion.div>
          
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/dashboard"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>{userName}</span>
                </Link>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Button variant="outline" asChild className="border-purple-400 text-purple-400">
                  <Link href="/login">Masuk</Link>
                </Button>
                {showRegisterButton && (
                  <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    <Link href="/register">Mulai Sekarang</Link>
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
