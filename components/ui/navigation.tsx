
'use client'

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  ChevronDown,
  Smartphone,
  Gamepad2,
  CreditCard,
  Crown
} from 'lucide-react';

interface NavigationProps {
  variant?: 'main' | 'reseller';
  resellerSlug?: string;
}

export default function Navigation({ variant = 'main', resellerSlug }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isMainSite = variant === 'main';
  const baseUrl = isMainSite ? '' : `/reseller/${resellerSlug}`;
  const logoText = isMainSite ? 'UniBox' : `${resellerSlug}.unibox.id`;

  const productCategories = [
    { name: 'Social Media', href: `${baseUrl}/social-media`, icon: Smartphone },
    { name: 'Gaming', href: `${baseUrl}/gaming`, icon: Gamepad2 },
    { name: 'PPOB', href: `${baseUrl}/ppob`, icon: CreditCard },
    { name: 'Premium Accounts', href: `${baseUrl}/premium`, icon: Crown }
  ];

  const mainMenuItems = isMainSite ? [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ] : [
    { name: 'Products', href: `${baseUrl}/products` },
    { name: 'About', href: `${baseUrl}#about` },
    { name: 'Contact', href: `${baseUrl}#contact` }
  ];

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href={isMainSite ? '/' : `${baseUrl}`} 
              className="text-xl font-bold text-purple-600 hover:text-purple-700 transition-colors"
            >
              {logoText}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('products')}
                className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors"
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border py-2 z-50"
                  >
                    {productCategories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <category.icon className="w-5 h-5" />
                        <span>{category.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Main Menu Items */}
            {mainMenuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href={`${baseUrl}/login`}>
              <Button variant="outline" size="sm">
                Masuk
              </Button>
            </Link>
            <Link href={`${baseUrl}/register`}>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                Daftar
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t bg-white"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Mobile Products */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-900 px-3 py-2">Products</div>
                  {productCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="flex items-center space-x-3 px-6 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </Link>
                  ))}
                </div>

                {/* Mobile Main Menu */}
                <div className="border-t pt-2">
                  {mainMenuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Auth Buttons */}
                <div className="border-t pt-4 px-3 space-y-2">
                  <Link href={`${baseUrl}/login`} onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Masuk
                    </Button>
                  </Link>
                  <Link href={`${baseUrl}/register`} onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Daftar
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Overlay for dropdown */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </nav>
  );
}
