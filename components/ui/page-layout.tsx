
'use client'

import { ReactNode } from 'react';
import Navigation from './navigation';
import Footer from './footer';

interface PageLayoutProps {
  children: ReactNode;
  variant?: 'main' | 'reseller';
  resellerSlug?: string;
  showNavigation?: boolean;
  showFooter?: boolean;
  className?: string;
}

export default function PageLayout({ 
  children, 
  variant = 'main', 
  resellerSlug,
  showNavigation = true,
  showFooter = true,
  className = ''
}: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {showNavigation && (
        <Navigation variant={variant} resellerSlug={resellerSlug} />
      )}
      
      <main className={`flex-1 ${className}`}>
        {children}
      </main>
      
      {showFooter && (
        <Footer variant={variant} resellerSlug={resellerSlug} />
      )}
    </div>
  );
}
