
'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const plans = [
  {
    name: "Starter",
    price: "Gratis",
    description: "Sempurna untuk pemula yang ingin mencoba",
    features: [
      "Website pribadi dengan subdomain",
      "5 produk digital",
      "Dashboard basic",
      "Support email",
      "100 transaksi/bulan",
      "Commission 2%"
    ],
    popular: false,
    cta: "Mulai Gratis"
  },
  {
    name: "Professional",
    price: "Rp 99.000",
    period: "/bulan",
    description: "Untuk reseller yang serius membangun bisnis",
    features: [
      "Semua fitur Starter",
      "Unlimited produk digital",
      "Dashboard advanced",
      "Priority support",
      "Unlimited transaksi",
      "Commission 1.5%",
      "Custom domain",
      "White label option",
      "Analytics advanced"
    ],
    popular: true,
    cta: "Upgrade Sekarang"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Solusi khusus untuk bisnis besar",
    features: [
      "Semua fitur Professional",
      "Dedicated server",
      "Custom integration",
      "24/7 phone support",
      "Account manager",
      "Commission 1%",
      "API access",
      "Multi-brand support",
      "Advanced reporting"
    ],
    popular: false,
    cta: "Hubungi Sales"
  }
];

export default function Pricing() {
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
              <Link href="/pricing" className="text-purple-400 font-semibold">
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
            {...fadeInUp}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Harga Terjangkau
            </span>
            <br />
            <span className="text-white">Profit Maksimal</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pilih paket yang sesuai dengan kebutuhan bisnis digital Anda
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-purple-400 scale-105' 
                    : 'border-white/10'
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: plan.popular ? 1.05 : 1.02 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-400">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
                      : 'bg-white/10 hover:bg-white/20 border border-white/20'
                  }`}
                  asChild
                >
                  <Link href={plan.name === 'Enterprise' ? '/contact' : '/register'}>
                    {plan.cta}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                question: "Apakah ada biaya setup atau biaya tersembunyi?",
                answer: "Tidak ada biaya setup atau biaya tersembunyi. Anda hanya membayar subscription bulanan sesuai paket yang dipilih."
              },
              {
                question: "Bagaimana sistem commission bekerja?",
                answer: "Commission dipotong dari setiap transaksi yang berhasil. Semakin tinggi paket, semakin kecil commission yang dipotong."
              },
              {
                question: "Apakah bisa upgrade atau downgrade paket?",
                answer: "Ya, Anda bisa upgrade atau downgrade paket kapan saja melalui dashboard. Perubahan akan efektif pada billing cycle berikutnya."
              },
              {
                question: "Apakah data saya aman?",
                answer: "Absolutely! Kami menggunakan enkripsi tingkat militer dan compliance dengan standar keamanan internasional."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Mulai Bisnis Digital Anda Hari Ini
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Bergabunglah dengan ribuan reseller yang sudah merasakan keuntungan dari UniBox
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-6"
              asChild
            >
              <Link href="/register">
                Daftar Gratis Sekarang <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
