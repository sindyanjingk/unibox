
'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp,
  Search,
  MessageCircle
} from 'lucide-react';

const faqCategories = [
  {
    category: 'Umum',
    faqs: [
      {
        question: 'Apa itu UniBox?',
        answer: 'UniBox adalah platform all-in-one untuk memulai bisnis digital. Kami menyediakan layanan Social Media Management, Top Up Gaming, PPOB, dan Premium Accounts dalam satu platform yang mudah digunakan.'
      },
      {
        question: 'Berapa biaya untuk memulai?',
        answer: 'Kami menawarkan paket mulai dari Rp 99.000/bulan untuk paket Basic. Semua paket sudah termasuk website pribadi, dashboard admin, dan support 24/7.'
      },
      {
        question: 'Apakah ada trial gratis?',
        answer: 'Ya, kami menyediakan trial gratis selama 7 hari untuk semua paket. Anda bisa mencoba semua fitur tanpa perlu kartu kredit.'
      }
    ]
  },
  {
    category: 'Website & Setup',
    faqs: [
      {
        question: 'Berapa lama website saya akan aktif?',
        answer: 'Website Anda akan aktif dalam 5-10 menit setelah registrasi berhasil dan pembayaran dikonfirmasi.'
      },
      {
        question: 'Bisakah saya menggunakan domain sendiri?',
        answer: 'Ya, Anda bisa connect domain sendiri mulai dari paket Professional. Tim kami akan membantu proses setup domain.'
      },
      {
        question: 'Bagaimana cara mengubah subdomain?',
        answer: 'Subdomain dapat diubah melalui dashboard admin di menu "Pengaturan Website". Perubahan akan efektif dalam 5-10 menit.'
      }
    ]
  },
  {
    category: 'Pembayaran & Komisi',
    faqs: [
      {
        question: 'Bagaimana sistem pembayaran bekerja?',
        answer: 'Kami terintegrasi dengan berbagai payment gateway seperti OVO, DANA, ShopeePay, dan transfer bank. Semua transaksi otomatis dan real-time.'
      },
      {
        question: 'Berapa margin keuntungan yang bisa saya dapatkan?',
        answer: 'Margin keuntungan bervariasi per produk, rata-rata 15-30%. Semakin tinggi paket yang Anda pilih, semakin besar margin yang didapat.'
      },
      {
        question: 'Kapan saya menerima pembayaran dari customer?',
        answer: 'Pembayaran dari customer langsung masuk ke saldo dashboard Anda secara real-time. Anda bisa withdraw kapan saja.'
      }
    ]
  }
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? '' : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              UniBox
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/features" className="text-gray-300 hover:text-white transition-colors">
                Fitur
              </Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                Harga
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                Tentang
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Kontak
              </Link>
            </div>
            <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500">
              <Link href="/register">Mulai Sekarang</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              FAQ
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Frequently Asked Questions - Pertanyaan yang sering diajukan
          </motion.p>

          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari pertanyaan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="mb-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">{category.category}</h2>
              
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const faqId = `${categoryIndex}-${faqIndex}`;
                  return (
                    <div
                      key={faqIndex}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(faqId)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                        {openFaq === faqId ? (
                          <ChevronUp className="w-5 h-5 text-purple-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-purple-400" />
                        )}
                      </button>
                      
                      {openFaq === faqId && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-300">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Tidak Menemukan Jawaban?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Tim support kami siap membantu Anda 24/7
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-6"
              asChild
            >
              <Link href="/contact">
                Hubungi Support <MessageCircle className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
