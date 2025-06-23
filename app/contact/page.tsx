
'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare,
  Clock,
  Send,
  ArrowRight,
  Headphones,
  FileText,
  Users
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const contactMethods = [
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Chat dengan tim support kami secara real-time',
    info: 'Tersedia 24/7',
    action: 'Mulai Chat',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Kirim pertanyaan detail via email',
    info: 'support@unibox.id',
    action: 'Kirim Email',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Phone,
    title: 'WhatsApp Business',
    description: 'Hubungi kami via WhatsApp untuk respon cepat',
    info: '+62 812-3456-7890',
    action: 'Chat WhatsApp',
    color: 'from-green-500 to-teal-600'
  },
  {
    icon: Headphones,
    title: 'Phone Support',
    description: 'Bicara langsung dengan tim technical support',
    info: '+62 21-1234-5678',
    action: 'Telepon Sekarang',
    color: 'from-purple-500 to-violet-600'
  }
];

const supportHours = [
  { day: 'Senin - Jumat', hours: '08:00 - 22:00 WIB' },
  { day: 'Sabtu - Minggu', hours: '10:00 - 20:00 WIB' },
  { day: 'Emergency Support', hours: '24/7 (Via Chat & WhatsApp)' }
];

const faqItems = [
  {
    question: 'Berapa lama waktu setup website saya?',
    answer: 'Website Anda akan aktif dalam 5-10 menit setelah registrasi berhasil.'
  },
  {
    question: 'Apakah ada biaya tambahan selain biaya berlangganan?',
    answer: 'Tidak ada biaya tersembunyi. Semua fitur sudah termasuk dalam paket berlangganan.'
  },
  {
    question: 'Bagaimana cara mengubah subdomain saya?',
    answer: 'Subdomain dapat diubah melalui dashboard admin di menu pengaturan website.'
  },
  {
    question: 'Apakah saya bisa menggunakan domain sendiri?',
    answer: 'Ya, Anda bisa connect domain sendiri mulai dari paket Professional.'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    priority: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Contact form data:', formData);
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        priority: 'normal'
      });
    }, 2000);
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
              <Link href="/contact" className="text-purple-400 font-semibold">
                Kontak
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/karir" className="text-gray-300 hover:text-white transition-colors">
                Karir
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
            <span className="text-white">Hubungi </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tim Kami
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Kami siap membantu Anda 24/7. Tim support berpengalaman siap menjawab pertanyaan dan membantu kesuksesan bisnis digital Anda.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Cara Menghubungi Kami
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 mb-3">{method.description}</p>
                <p className="text-purple-400 font-semibold mb-4">{method.info}</p>
                <Button size="sm" className={`bg-gradient-to-r ${method.color} w-full`}>
                  {method.action}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Support Hours */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Nama Anda"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="email@contoh.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">No. Telepon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="08123456789"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Prioritas</label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="normal">Normal</option>
                      <option value="urgent">Urgent</option>
                      <option value="critical">Critical</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subjek</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Subjek pesan Anda"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Pesan</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Tuliskan pesan Anda di sini..."
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 py-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      Kirim Pesan <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Support Hours & FAQ */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Support Hours */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Jam Operasional</h3>
                </div>
                <div className="space-y-4">
                  {supportHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{schedule.day}</span>
                      <span className="text-purple-400 font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick FAQ */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <FileText className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">FAQ Cepat</h3>
                </div>
                <div className="space-y-4">
                  {faqItems.map((faq, index) => (
                    <div key={index} className="border-b border-gray-700 pb-4 last:border-b-0">
                      <h4 className="text-white font-semibold mb-2">{faq.question}</h4>
                      <p className="text-gray-300 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                <Link href="/faq" className="text-purple-400 hover:text-purple-300 text-sm font-semibold inline-flex items-center mt-4">
                  Lihat FAQ Lengkap <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>

              {/* Office Info */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Kantor Kami</h3>
                </div>
                <div className="text-gray-300">
                  <p className="font-semibold text-white mb-2">PT UniBox Digital Indonesia</p>
                  <p>Jl. Sudirman No. 123, Lantai 15</p>
                  <p>Jakarta Selatan, DKI Jakarta 12190</p>
                  <p className="mt-4">
                    <span className="text-purple-400">Email:</span> info@unibox.id<br/>
                    <span className="text-purple-400">Phone:</span> +62 21-1234-5678
                  </p>
                </div>
              </div>
            </motion.div>
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
              Butuh Bantuan Cepat?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Tim support kami siap membantu Anda memulai bisnis digital yang menguntungkan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-lg px-8 py-6"
              >
                Chat WhatsApp <MessageSquare className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-lg px-8 py-6"
                asChild
              >
                <Link href="/register">
                  Daftar Sekarang <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
