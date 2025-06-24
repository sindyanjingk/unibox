
'use client'

import Link from 'next/link';

export default function Footer() {
  return (
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                UniBox
              </div>
              <p className="text-gray-400">
                Platform terdepan untuk bisnis digital multitenancy di Indonesia
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Produk</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/social-media" className="hover:text-white transition-colors">Social Media</Link></li>
                <li><Link href="/gaming" className="hover:text-white transition-colors">Gaming</Link></li>
                <li><Link href="/ppob" className="hover:text-white transition-colors">PPOB</Link></li>
                <li><Link href="/premium" className="hover:text-white transition-colors">Premium Accounts</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Perusahaan</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">Tentang Kami</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Kontak</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/karir" className="hover:text-white transition-colors">Karir</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Bantuan</Link></li>
                <li><Link href="/docs" className="hover:text-white transition-colors">Dokumentasi</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Syarat & Ketentuan</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 UniBox. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
}


