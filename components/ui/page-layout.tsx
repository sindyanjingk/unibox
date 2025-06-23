
'use client'

import Navigation from './navigation';
import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  currentPage?: string;
  showNavigation?: boolean;
  className?: string;
}

export default function PageLayout({ 
  children, 
  currentPage, 
  showNavigation = true,
  className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
}: PageLayoutProps) {
  return (
    <div className={className}>
      {showNavigation && <Navigation currentPage={currentPage} />}
      {children}
    </div>
  );
}
