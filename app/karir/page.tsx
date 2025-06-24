
'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Briefcase,
  Heart,
  Coffee,
  Zap,
  Target,
  Award,
  ArrowRight,
  Send,
  Calendar,
  Building
} from 'lucide-react';
import PageLayout from '@/components/ui/page-layout';
import { div, nav, section } from 'framer-motion/client';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const jobOpenings = [
  {
    title: 'Senior Backend Developer',
    department: 'Engineering',
    location: 'Jakarta / Remote',
    type: 'Full-time',
    salary: 'Rp 15-25 juta',
    description: 'Membangun dan mengoptimalkan sistem backend untuk platform multitenancy yang scalable.',
    requirements: [
      '5+ tahun pengalaman backend development',
      'Expert dalam Node.js, Python, atau Go',
      'Pengalaman dengan microservices dan cloud architecture',
      'Familiar dengan database (PostgreSQL, Redis)',
      'Pengalaman dengan Docker dan Kubernetes'
    ],
    benefits: [
      'Salary kompetitif + equity',
      'Remote work flexibility',
      'Health insurance',
      'Learning budget Rp 10 juta/tahun'
    ]
  },
  {
    title: 'Frontend React Developer',
    department: 'Engineering',
    location: 'Jakarta / Remote',
    type: 'Full-time',
    salary: 'Rp 12-20 juta',
    description: 'Mengembangkan interface yang amazing untuk dashboard admin dan website reseller.',
    requirements: [
      '3+ tahun pengalaman React/Next.js',
      'Strong understanding of modern JavaScript',
      'Pengalaman dengan TypeScript',
      'Familiar dengan state management (Redux/Zustand)',
      'Eye for design dan UX'
    ],
    benefits: [
      'Salary kompetitif + bonus',
      'Work from anywhere',
      'Latest MacBook Pro',
      'Conference budget'
    ]
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Jakarta',
    type: 'Full-time',
    salary: 'Rp 18-30 juta',
    description: 'Memimpin strategi produk dan roadmap untuk platform UniBox yang inovatif.',
    requirements: [
      '4+ tahun pengalaman product management',
      'Experience in fintech atau e-commerce',
      'Strong analytical dan communication skills',
      'Familiar dengan user research dan data analysis',
      'Bachelor degree in relevant field'
    ],
    benefits: [
      'Competitive salary + equity',
      'Flexible working hours',
      'Premium health insurance',
      'Product development budget'
    ]
  },
  {
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Jakarta / Remote',
    type: 'Full-time',
    salary: 'Rp 16-28 juta',
    description: 'Mengelola infrastructure dan deployment pipeline untuk sistem yang highly available.',
    requirements: [
      '4+ tahun pengalaman DevOps/SRE',
      'Expert dalam AWS/GCP/Azure',
      'Strong automation skills (Terraform, Ansible)',
      'Experience dengan monitoring dan alerting',
      'Knowledge of security best practices'
    ],
    benefits: [
      'Top-tier compensation',
      'Remote work options',
      'Certification support',
      'Cloud credits untuk learning'
    ]
  },
  {
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Jakarta',
    type: 'Full-time',
    salary: 'Rp 8-15 juta',
    description: 'Mengembangkan strategi marketing digital untuk menarik reseller baru dan meningkatkan brand awareness.',
    requirements: [
      '2+ tahun pengalaman digital marketing',
      'Expert dalam Google Ads, Facebook Ads, SEO',
      'Strong content creation skills',
      'Analytical mindset dengan experience di Google Analytics',
      'Creative dan up-to-date dengan marketing trends'
    ],
    benefits: [
      'Performance-based bonus',
      'Marketing tools dan courses',
      'Creative freedom',
      'Growth opportunities'
    ]
  },
  {
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Jakarta',
    type: 'Full-time',
    salary: 'Rp 10-18 juta',
    description: 'Memastikan kesuksesan dan kepuasan reseller serta membantu mereka mencapai target bisnis.',
    requirements: [
      '3+ tahun pengalaman customer success atau account management',
      'Excellent communication dan interpersonal skills',
      'Problem-solving mindset',
      'Experience dengan CRM tools',
      'Passion untuk membantu customer sukses'
    ],
    benefits: [
      'Base salary + commission',
      'Customer success training',
      'Flexible schedule',
      'Career development path'
    ]
  }
];

const companyValues = [
  {
    icon: Target,
    title: 'Customer-Centric',
    description: 'Kami selalu mengutamakan kepuasan dan kesuksesan customer dalam setiap keputusan yang kami buat.'
  },
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'Kami mendorong inovasi dan eksperimen untuk menciptakan solusi terbaik bagi reseller.'
  },
  {
    icon: Users,
    title: 'Collaborative',
    description: 'Kami percaya pada kekuatan kolaborasi dan teamwork untuk mencapai tujuan bersama.'
  },
  {
    icon: Heart,
    title: 'Empathy',
    description: 'Kami memahami tantangan yang dihadapi reseller dan berusaha memberikan solusi terbaik.'
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Salary',
    description: 'Gaji yang kompetitif dengan review berkala dan performance bonus.'
  },
  {
    icon: Coffee,
    title: 'Flexible Work',
    description: 'Work from home, flexible hours, dan unlimited coffee di office.'
  },
  {
    icon: Award,
    title: 'Learning Budget',
    description: 'Budget khusus untuk courses, conferences, dan skill development.'
  },
  {
    icon: Heart,
    title: 'Health Insurance',
    description: 'Asuransi kesehatan premium untuk karyawan dan keluarga.'
  },
  {
    icon: Building,
    title: 'Modern Office',
    description: 'Office yang nyaman di Jakarta dengan fasilitas lengkap.'
  },
  {
    icon: Briefcase,
    title: 'Career Growth',
    description: 'Clear career path dan mentorship program untuk development.'
  }
];

export default function Karir() {
  return (
    <PageLayout currentPage="karir">
      <div>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              {...fadeInUp}
            >
              <span className="text-white">Bergabung dengan </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tim UniBox
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Bangun karir impian Anda bersama startup fintech yang sedang berkembang pesat. Kita sedang mencari talenta terbaik untuk merevolusi industri bisnis digital di Indonesia.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-6">
                Lihat Lowongan <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10 text-lg px-8 py-6">
                Kirim CV Spontan
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-white text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Nilai-Nilai Kami
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <value.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-white text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Kenapa Bekerja di UniBox?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <benefit.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-white text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Lowongan Kerja Terbuka
            </motion.h2>

            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm">
                          {job.department}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          {job.salary}
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6">{job.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="text-gray-300 flex items-start">
                                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                          <ul className="space-y-2">
                            {job.benefits.map((benefit, idx) => (
                              <li key={idx} className="text-gray-300 flex items-start">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center space-y-4">
                      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 w-full">
                        Apply Now <Send className="ml-2 w-4 h-4" />
                      </Button>
                      <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10 w-full">
                        Save Job
                      </Button>
                      <p className="text-sm text-gray-400 text-center">
                        Posted 2 days ago
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-white text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Proses Rekrutment
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Application', description: 'Submit CV dan portfolio Anda melalui form online' },
                { step: '2', title: 'Screening', description: 'Tim HR akan review aplikasi Anda dalam 2-3 hari' },
                { step: '3', title: 'Interview', description: 'Technical interview dan culture fit dengan tim' },
                { step: '4', title: 'Offer', description: 'Negotiation dan penawaran final untuk kandidat terpilih' }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{process.title}</h3>
                  <p className="text-gray-300">{process.description}</p>
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
                Siap Bergabung dengan Kami?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Bangun karir impian Anda di startup yang sedang berkembang pesat dan berdampak besar bagi ekonomi digital Indonesia
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-6"
                >
                  Lamar Sekarang <Send className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-lg px-8 py-6"
                >
                  Jadwalkan Interview <Calendar className="ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}