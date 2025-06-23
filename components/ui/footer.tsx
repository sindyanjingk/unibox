
'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Heart
} from 'lucide-react';

interface FooterProps {
  variant?: 'main' | 'reseller';
  resellerSlug?: string;
}

export default function Footer({ variant = 'main', resellerSlug }: FooterProps) {
  const isMainSite = variant === 'main';
  const baseUrl = isMainSite ? '' : `/reseller/${resellerSlug}`;
  const siteName = isMainSite ? 'UniBox' : `${resellerSlug}.unibox.id`;

  const quickLinks = isMainSite ? [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ] : [
    { name: 'Products', href: `${baseUrl}/products` },
    { name: 'About Store', href: `${baseUrl}#about` },
    { name: 'Contact', href: `${baseUrl}#contact` }
  ];

  const productLinks = [
    { name: 'Social Media', href: `${baseUrl}/social-media` },
    { name: 'Gaming', href: `${baseUrl}/gaming` },
    { name: 'PPOB', href: `${baseUrl}/ppob` },
    { name: 'Premium Accounts', href: `${baseUrl}/premium` }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Live Chat', href: '#' },
    { name: 'Status', href: '#' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Refund Policy', href: '#' }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div {...fadeInUp} className="lg:col-span-1">
            <div className="mb-6">
              <Link href={isMainSite ? '/' : baseUrl} className="text-2xl font-bold text-purple-400">
                {siteName}
              </Link>
              <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                {isMainSite 
                  ? 'Platform digital terpercaya untuk semua kebutuhan bisnis online Anda. Kelola reseller dan produk digital dengan mudah.' 
                  : 'Toko digital terpercaya dengan layanan berkualitas dan harga terbaik untuk semua kebutuhan digital Anda.'}
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300">support@unibox.id</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300">Jakarta, Indonesia</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' }
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeInUp} className="transition-delay-100">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div {...fadeInUp} className="transition-delay-200">
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div {...fadeInUp} className="transition-delay-300">
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Legal Links */}
        <motion.div 
          {...fadeInUp}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by UniBox Team</span>
            </div>
          </div>
          
          <div className="text-center mt-6 text-gray-400 text-sm">
            <p>&copy; 2024 {siteName}. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
