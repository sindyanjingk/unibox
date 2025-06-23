
'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  ArrowLeft,
  ShoppingCart,
  CreditCard,
  Wallet,
  CheckCircle,
  AlertCircle,
  Package,
  Star,
  Clock,
  Shield
} from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  rating: number;
  reviews: number;
  processingTime: string;
  features: string[];
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Instagram Followers 1K",
    category: "Social Media",
    price: 15000,
    originalPrice: 20000,
    description: "Real followers Indonesia dengan kualitas terbaik",
    rating: 4.9,
    reviews: 234,
    processingTime: "1-5 menit",
    features: ["Real followers", "Garansi refill", "No password required"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 2,
    name: "Mobile Legends 100 Diamond",
    category: "Gaming",
    price: 25000,
    description: "Top up diamond ML tercepat dan termurah",
    rating: 4.8,
    reviews: 189,
    processingTime: "Instant",
    features: ["Proses instan", "Legal 100%", "Garansi uang kembali"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 3,
    name: "Netflix Premium 1 Bulan",
    category: "Premium",
    price: 55000,
    originalPrice: 65000,
    description: "Account Netflix premium private untuk 1 bulan",
    rating: 4.7,
    reviews: 156,
    processingTime: "1-2 jam",
    features: ["Private account", "Garansi 30 hari", "4K Ultra HD"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 4,
    name: "Pulsa Telkomsel 25K",
    category: "PPOB",
    price: 26000,
    description: "Pulsa reguler Telkomsel 25 ribu",
    rating: 4.9,
    reviews: 445,
    processingTime: "Instant",
    features: ["Proses otomatis", "24/7 available", "Tanpa potongan"],
    image: "/api/placeholder/300/200"
  }
];

export default function UserOrder({ params }: { params: { slug: string } }) {
  const [selectedProducts, setSelectedProducts] = useState<{[key: number]: number}>({});
  const [currentStep, setCurrentStep] = useState(1);
  const [orderForm, setOrderForm] = useState({
    customerInfo: {
      name: '',
      email: '',
      whatsapp: '',
      notes: ''
    },
    paymentMethod: 'ewallet'
  });

  const addToCart = (productId: number) => {
    setSelectedProducts(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      const newSelected = { ...selectedProducts };
      delete newSelected[productId];
      setSelectedProducts(newSelected);
    } else {
      setSelectedProducts(prev => ({
        ...prev,
        [productId]: quantity
      }));
    }
  };

  const getCartItems = () => {
    return Object.entries(selectedProducts).map(([productId, quantity]) => {
      const product = products.find(p => p.id === parseInt(productId));
      return { product, quantity };
    }).filter(item => item.product);
  };

  const getTotalPrice = () => {
    return getCartItems().reduce((total, item) => {
      return total + (item.product!.price * item.quantity);
    }, 0);
  };

  const handleInputChange = (field: string, value: string) => {
    setOrderForm(prev => ({
      ...prev,
      customerInfo: {
        ...prev.customerInfo,
        [field]: value
      }
    }));
  };

  const handleSubmitOrder = () => {
    console.log('Order submitted:', {
      products: getCartItems(),
      total: getTotalPrice(),
      customerInfo: orderForm.customerInfo,
      paymentMethod: orderForm.paymentMethod
    });
    setCurrentStep(4);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Link 
                href={`/reseller/${params.slug}/user-dashboard`}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Kembali ke Dashboard</span>
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-gray-900 font-semibold">Buat Pesanan</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-purple-100 px-3 py-1 rounded-full">
                <ShoppingCart className="w-4 h-4 text-purple-600" />
                <span className="text-purple-600 font-medium">
                  {Object.values(selectedProducts).reduce((a, b) => a + b, 0)} item
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-8">
            {[
              { step: 1, label: 'Pilih Produk', icon: Package },
              { step: 2, label: 'Review Cart', icon: ShoppingCart },
              { step: 3, label: 'Payment', icon: CreditCard },
              { step: 4, label: 'Selesai', icon: CheckCircle }
            ].map(({ step, label, icon: Icon }) => (
              <div key={step} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= step 
                    ? 'bg-purple-500 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`ml-2 font-medium ${
                  currentStep >= step ? 'text-purple-600' : 'text-gray-500'
                }`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Product Selection */}
        {currentStep === 1 && (
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pilih Produk</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
                  <div className="w-full h-40 bg-gray-200 rounded-lg mb-4"></div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-purple-600 font-medium">{product.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{product.processingTime}</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-xl font-bold text-purple-600">
                        Rp {product.price.toLocaleString()}
                      </div>
                      {product.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          Rp {product.originalPrice.toLocaleString()}
                        </div>
                      )}
                    </div>
                  </div>

                  {selectedProducts[product.id] ? (
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(product.id, selectedProducts[product.id] - 1)}
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="font-medium">{selectedProducts[product.id]}</span>
                      <button
                        onClick={() => updateQuantity(product.id, selectedProducts[product.id] + 1)}
                        className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <Button
                      onClick={() => addToCart(product.id)}
                      className="w-full bg-purple-500 hover:bg-purple-600"
                    >
                      Tambah ke Cart
                    </Button>
                  )}
                </div>
              ))}
            </div>

            {Object.keys(selectedProducts).length > 0 && (
              <div className="flex justify-end">
                <Button
                  onClick={() => setCurrentStep(2)}
                  className="bg-purple-500 hover:bg-purple-600"
                >
                  Lanjut ke Review ({Object.values(selectedProducts).reduce((a, b) => a + b, 0)} item)
                </Button>
              </div>
            )}
          </motion.div>
        )}

        {/* Step 2: Review Cart */}
        {currentStep === 2 && (
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Review Pesanan</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-lg font-semibold mb-4">Produk yang Dipilih</h3>
                  
                  {getCartItems().map(({ product, quantity }) => (
                    <div key={product!.id} className="flex items-center space-x-4 p-4 border-b last:border-b-0">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{product!.name}</h4>
                        <p className="text-sm text-gray-600">{product!.description}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-purple-600 font-semibold">
                            Rp {product!.price.toLocaleString()}
                          </span>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(product!.id, quantity - 1)}
                              className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm"
                            >
                              -
                            </button>
                            <span>{quantity}</span>
                            <button
                              onClick={() => updateQuantity(product!.id, quantity + 1)}
                              className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">
                          Rp {(product!.price * quantity).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Information */}
                <div className="bg-white rounded-xl shadow-sm border p-6 mt-6">
                  <h3 className="text-lg font-semibold mb-4">Informasi Customer</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Customer
                      </label>
                      <input
                        type="text"
                        value={orderForm.customerInfo.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Nama lengkap customer"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Customer
                      </label>
                      <input
                        type="email"
                        value={orderForm.customerInfo.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="email@customer.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        WhatsApp Customer
                      </label>
                      <input
                        type="tel"
                        value={orderForm.customerInfo.whatsapp}
                        onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="08123456789"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Catatan (Opsional)
                      </label>
                      <input
                        type="text"
                        value={orderForm.customerInfo.notes}
                        onChange={(e) => handleInputChange('notes', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="ID game, username, dll"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-24">
                  <h3 className="text-lg font-semibold mb-4">Ringkasan Pesanan</h3>
                  
                  <div className="space-y-3 mb-4">
                    {getCartItems().map(({ product, quantity }) => (
                      <div key={product!.id} className="flex justify-between text-sm">
                        <span>{product!.name} x{quantity}</span>
                        <span>Rp {(product!.price * quantity).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span className="text-purple-600">Rp {getTotalPrice().toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={() => setCurrentStep(3)}
                      className="w-full bg-purple-500 hover:bg-purple-600"
                      disabled={!orderForm.customerInfo.name || !orderForm.customerInfo.whatsapp}
                    >
                      Lanjut ke Pembayaran
                    </Button>
                    <Button
                      onClick={() => setCurrentStep(1)}
                      variant="outline"
                      className="w-full"
                    >
                      Kembali ke Produk
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Payment */}
        {currentStep === 3 && (
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pembayaran</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-lg font-semibold mb-4">Pilih Metode Pembayaran</h3>
                  
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          id="ewallet"
                          name="payment"
                          value="ewallet"
                          checked={orderForm.paymentMethod === 'ewallet'}
                          onChange={(e) => setOrderForm(prev => ({ ...prev, paymentMethod: e.target.value }))}
                          className="text-purple-600"
                        />
                        <Wallet className="w-5 h-5 text-purple-600" />
                        <label htmlFor="ewallet" className="font-medium cursor-pointer">E-Wallet</label>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 ml-8">DANA, OVO, GoPay, ShopeePay</p>
                    </div>

                    <div className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          id="bank"
                          name="payment"
                          value="bank"
                          checked={orderForm.paymentMethod === 'bank'}
                          onChange={(e) => setOrderForm(prev => ({ ...prev, paymentMethod: e.target.value }))}
                          className="text-purple-600"
                        />
                        <CreditCard className="w-5 h-5 text-purple-600" />
                        <label htmlFor="bank" className="font-medium cursor-pointer">Transfer Bank</label>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 ml-8">BCA, Mandiri, BRI, BNI</p>
                    </div>

                    <div className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          id="saldo"
                          name="payment"
                          value="saldo"
                          checked={orderForm.paymentMethod === 'saldo'}
                          onChange={(e) => setOrderForm(prev => ({ ...prev, paymentMethod: e.target.value }))}
                          className="text-purple-600"
                        />
                        <Shield className="w-5 h-5 text-purple-600" />
                        <label htmlFor="saldo" className="font-medium cursor-pointer">Saldo UniBox</label>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 ml-8">Saldo: Rp 150.000</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-800">Penting!</h4>
                      <p className="text-sm text-yellow-700 mt-1">
                        Pastikan informasi customer sudah benar. Pesanan yang sudah diproses tidak dapat dibatalkan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-24">
                  <h3 className="text-lg font-semibold mb-4">Ringkasan Pesanan</h3>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span>Customer:</span>
                      <span className="font-medium">{orderForm.customerInfo.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>WhatsApp:</span>
                      <span className="font-medium">{orderForm.customerInfo.whatsapp}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Item:</span>
                      <span className="font-medium">{Object.values(selectedProducts).reduce((a, b) => a + b, 0)}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total Bayar</span>
                      <span className="text-purple-600">Rp {getTotalPrice().toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={handleSubmitOrder}
                      className="w-full bg-purple-500 hover:bg-purple-600"
                    >
                      Buat Pesanan
                    </Button>
                    <Button
                      onClick={() => setCurrentStep(2)}
                      variant="outline"
                      className="w-full"
                    >
                      Kembali ke Review
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 4: Success */}
        {currentStep === 4 && (
          <motion.div 
            className="text-center max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pesanan Berhasil Dibuat!</h2>
              <p className="text-gray-600 mb-6">
                Pesanan Anda telah berhasil dibuat dan sedang dalam proses. 
                Anda akan menerima notifikasi setelah pesanan selesai diproses.
              </p>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="text-sm text-gray-600 mb-2">Order ID:</div>
                <div className="font-mono font-bold text-lg">ORD-{Date.now().toString().slice(-6)}</div>
              </div>

              <div className="space-y-3">
                <Link href={`/reseller/${params.slug}/user-dashboard`}>
                  <Button className="w-full bg-purple-500 hover:bg-purple-600">
                    Kembali ke Dashboard
                  </Button>
                </Link>
                <Button
                  onClick={() => {
                    setCurrentStep(1);
                    setSelectedProducts({});
                    setOrderForm({
                      customerInfo: { name: '', email: '', whatsapp: '', notes: '' },
                      paymentMethod: 'ewallet'
                    });
                  }}
                  variant="outline"
                  className="w-full"
                >
                  Buat Pesanan Baru
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
