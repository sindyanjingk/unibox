
import { ReactNode } from 'react';

interface ResellerLayoutProps {
  children: ReactNode;
  params: { slug: string };
}

export default function ResellerLayout({ children, params }: ResellerLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Custom header for reseller sites */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-purple-600">
                {params.slug}.unibox.id
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-purple-600">Beranda</a>
              <a href="#products" className="text-gray-700 hover:text-purple-600">Produk</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600">Kontak</a>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main>
        {children}
      </main>
      
      {/* Custom footer for reseller sites */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300">
              © 2024 {params.slug}.unibox.id - Powered by UniBox
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Website reseller digital produk terpercaya
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
