
'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  ArrowLeft,
  Search,
  Filter,
  Download,
  Upload,
  Check,
  X,
  ShoppingCart,
  Star,
  Eye,
  Plus
} from 'lucide-react';
import PageLayout from '@/components/ui/page-layout';

const mainProducts = [
  {
    id: 'main-1',
    name: 'Instagram Followers 1K',
    category: 'Social Media',
    price: 15000,
    markup: 3000,
    finalPrice: 18000,
    description: 'Real followers Indonesia, garansi 30 hari',
    rating: 4.8,
    sold: 1250,
    isImported: true,
    provider: 'UniBox'
  },
  {
    id: 'main-2',
    name: 'Instagram Likes 1K',
    category: 'Social Media',
    price: 8000,
    markup: 2000,
    finalPrice: 10000,
    description: 'Real likes Indonesia, proses instant',
    rating: 4.9,
    sold: 890,
    isImported: false,
    provider: 'UniBox'
  },
  {
    id: 'main-3',
    name: 'TikTok Followers 1K',
    category: 'Social Media',
    price: 12000,
    markup: 3000,
    finalPrice: 15000,
    description: 'Real followers global, garansi 7 hari',
    rating: 4.7,
    sold: 650,
    isImported: false,
    provider: 'UniBox'
  },
  {
    id: 'main-4',
    name: 'Mobile Legends 275 Diamond',
    category: 'Gaming',
    price: 63000,
    markup: 12000,
    finalPrice: 75000,
    description: 'Proses instant, aman dan terpercaya',
    rating: 4.9,
    sold: 2100,
    isImported: true,
    provider: 'UniBox'
  },
  {
    id: 'main-5',
    name: 'Free Fire 355 Diamond',
    category: 'Gaming',
    price: 45000,
    markup: 10000,
    finalPrice: 55000,
    description: 'Top up FF diamond instant',
    rating: 4.8,
    sold: 1800,
    isImported: false,
    provider: 'UniBox'
  },
  {
    id: 'main-6',
    name: 'PUBG Mobile 325 UC',
    category: 'Gaming',
    price: 48000,
    markup: 12000,
    finalPrice: 60000,
    description: 'UC PUBGM global, proses cepat',
    rating: 4.8,
    sold: 1450,
    isImported: false,
    provider: 'UniBox'
  },
  {
    id: 'main-7',
    name: 'Netflix Premium 1 Bulan',
    category: 'Premium',
    price: 50000,
    markup: 15000,
    finalPrice: 65000,
    description: 'Private account, garansi replace',
    rating: 4.7,
    sold: 980,
    isImported: true,
    provider: 'UniBox'
  },
  {
    id: 'main-8',
    name: 'Spotify Premium 1 Bulan',
    category: 'Premium',
    price: 18000,
    markup: 7000,
    finalPrice: 25000,
    description: 'Individual account, upgrade dari existing',
    rating: 4.9,
    sold: 720,
    isImported: false,
    provider: 'UniBox'
  }
];

export default function ImportProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [defaultMarkup, setDefaultMarkup] = useState(20);

  const filteredProducts = mainProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  const toggleProductSelection = (productId: string) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const selectAllFiltered = () => {
    const availableProducts = filteredProducts.filter(p => !p.isImported).map(p => p.id);
    setSelectedProducts(availableProducts);
  };

  const deselectAll = () => {
    setSelectedProducts([]);
  };

  const importSelectedProducts = () => {
    // Here you would implement the actual import logic
    console.log('Importing products:', selectedProducts);
    alert(`${selectedProducts.length} produk berhasil diimport!`);
    setSelectedProducts([]);
  };

  const availableProducts = filteredProducts.filter(p => !p.isImported);
  const importedCount = filteredProducts.filter(p => p.isImported).length;

  return (
    <PageLayout showRegisterButton={false}>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4">
              <Link
                href="/dashboard"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Kembali ke Dashboard</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {selectedProducts.length > 0 && (
                <Button className="bg-green-500 hover:bg-green-600" onClick={importSelectedProducts}>
                  <Download className="w-4 h-4 mr-2" />
                  Import {selectedProducts.length} Produk
                </Button>
              )}
            </div>
          </motion.div>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-3xl font-bold text-white mb-2">Import Produk</h1>
            <p className="text-gray-300">Import produk dari catalog UniBox ke website Anda</p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{mainProducts.length}</h3>
                <p className="text-gray-400 text-sm">Total Produk Tersedia</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{importedCount}</h3>
                <p className="text-gray-400 text-sm">Sudah Diimport</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Plus className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{availableProducts.length}</h3>
                <p className="text-gray-400 text-sm">Dapat Diimport</p>
              </div>
            </div>
          </motion.div>

          {/* Import Settings */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Pengaturan Import</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Default Markup (%)
                </label>
                <input
                  type="number"
                  value={defaultMarkup}
                  onChange={(e) => setDefaultMarkup(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="20"
                />
                <p className="text-gray-400 text-xs mt-1">Markup akan diterapkan ke semua produk yang diimport</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Auto Sync
                </label>
                <select className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option value="manual" className="bg-gray-900">Manual</option>
                  <option value="daily" className="bg-gray-900">Setiap Hari</option>
                  <option value="weekly" className="bg-gray-900">Setiap Minggu</option>
                </select>
                <p className="text-gray-400 text-xs mt-1">Sinkronisasi otomatis harga dan ketersediaan</p>
              </div>
            </div>
          </motion.div>

          {/* Filters and Actions */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Cari Produk
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari nama produk..."
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Kategori
                </label>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all" className="bg-gray-900">Semua Kategori</option>
                  <option value="Social Media" className="bg-gray-900">Social Media</option>
                  <option value="Gaming" className="bg-gray-900">Gaming</option>
                  <option value="PPOB" className="bg-gray-900">PPOB</option>
                  <option value="Premium" className="bg-gray-900">Premium</option>
                </select>
              </div>

              <div className="flex items-end">
                <Button variant="outline" className="w-full border-blue-400 text-blue-400" onClick={selectAllFiltered}>
                  <Check className="w-4 h-4 mr-2" />
                  Pilih Semua
                </Button>
              </div>

              <div className="flex items-end">
                <Button variant="outline" className="w-full border-red-400 text-red-400" onClick={deselectAll}>
                  <X className="w-4 h-4 mr-2" />
                  Batal Pilih
                </Button>
              </div>
            </div>

            {selectedProducts.length > 0 && (
              <div className="bg-purple-500/20 border border-purple-400/50 rounded-lg p-4">
                <p className="text-purple-300">
                  {selectedProducts.length} produk dipilih untuk diimport
                </p>
              </div>
            )}
          </motion.div>

          {/* Products Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className={`bg-white/5 backdrop-blur-sm border rounded-xl p-6 transition-all ${
                  product.isImported 
                    ? 'border-green-400/50 bg-green-500/10' 
                    : selectedProducts.includes(product.id)
                    ? 'border-purple-400/50 bg-purple-500/10'
                    : 'border-white/10 hover:border-white/20'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">{product.name}</h3>
                    <p className="text-gray-400 text-sm mb-2">{product.category}</p>
                    <p className="text-gray-300 text-sm">{product.description}</p>
                  </div>
                  
                  {product.isImported ? (
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <button
                      onClick={() => toggleProductSelection(product.id)}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedProducts.includes(product.id)
                          ? 'bg-purple-500 border-purple-500'
                          : 'border-gray-400 hover:border-purple-400'
                      }`}
                    >
                      {selectedProducts.includes(product.id) && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </button>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Harga Modal:</span>
                    <span className="text-white font-medium">Rp {product.price.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Markup:</span>
                    <span className="text-green-400 font-medium">Rp {product.markup.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-white/10 pt-3">
                    <span className="text-gray-400 text-sm">Harga Jual:</span>
                    <span className="text-purple-400 font-bold">Rp {product.finalPrice.toLocaleString()}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-300">{product.rating}</span>
                    </div>
                    <span className="text-gray-400">{product.sold} terjual</span>
                  </div>
                </div>

                {!product.isImported && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <Button
                      onClick={() => toggleProductSelection(product.id)}
                      className={`w-full ${
                        selectedProducts.includes(product.id)
                          ? 'bg-purple-500 hover:bg-purple-600'
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    >
                      {selectedProducts.includes(product.id) ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Dipilih
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 mr-2" />
                          Pilih Import
                        </>
                      )}
                    </Button>
                  </div>
                )}

                {product.isImported && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-center text-green-400 text-sm">
                      <Check className="w-4 h-4 mr-2" />
                      Sudah Diimport
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">Tidak ada produk yang ditemukan</p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
