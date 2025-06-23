
'use client'

import Navigation from './navigation';
import Footer from './footer';

interface PageLayoutProps {
  children: React.ReactNode;
  currentPage?: string;
  showRegisterButton?: boolean;
}

export default function PageLayout({ 
  children, 
  currentPage, 
  showRegisterButton = true 
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation currentPage={currentPage} showRegisterButton={showRegisterButton} />
      <div className="pt-20">
        {children}
      </div>
      <Footer />
    </div>
  );
}
