
'use client'

import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              UniBox
            </div>
            <p className="text-gray-300 mb-4">
              Platform terlengkap untuk memulai bisnis digital Anda. Dari social media management hingga PPOB, semua ada di satu tempat.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Produk</h3>
            <ul className="space-y-2">
              <li><Link href="/social-media" className="text-gray-300 hover:text-purple-400 transition-colors">Social Media Management</Link></li>
              <li><Link href="/gaming" className="text-gray-300 hover:text-purple-400 transition-colors">Top Up Gaming</Link></li>
              <li><Link href="/ppob" className="text-gray-300 hover:text-purple-400 transition-colors">PPOB</Link></li>
              <li><Link href="/premium" className="text-gray-300 hover:text-purple-400 transition-colors">Premium Accounts</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Perusahaan</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">Tentang Kami</Link></li>
              <li><Link href="/karir" className="text-gray-300 hover:text-purple-400 transition-colors">Karir</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-purple-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-300 hover:text-purple-400 transition-colors">Bantuan</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-purple-400 transition-colors">FAQ</Link></li>
              <li><Link href="/documentation" className="text-gray-300 hover:text-purple-400 transition-colors">Dokumentasi</Link></li>
              <li><Link href="/status" className="text-gray-300 hover:text-purple-400 transition-colors">Status</Link></li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-2">Kontak</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-2" />
                  support@unibox.id
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-2" />
                  +62 812-3456-7890
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-2" />
                  Jakarta, Indonesia
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 UniBox. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
