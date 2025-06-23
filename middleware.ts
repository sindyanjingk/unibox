
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get('host') || '';
  
  // Skip middleware for API routes, static files, and internal Next.js routes
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Extract subdomain from hostname
  const subdomain = hostname.split('.')[0];
  
  // List of main domain routes that should not be treated as subdomains
  const mainRoutes = [
    'www',
    'localhost',
    'localhost:3000',
    '127.0.0.1',
    '127.0.0.1:3000',
    // Add your main domain here when deployed
  ];

  // Check if this is a subdomain (reseller site)
  const isSubdomain = !mainRoutes.some(route => 
    hostname.startsWith(route) || hostname === route
  ) && subdomain && subdomain !== hostname;

  // If it's a subdomain, rewrite to reseller page
  if (isSubdomain) {
    // Rewrite to the reseller page with the subdomain as slug
    const url = request.nextUrl.clone();
    url.pathname = `/reseller/${subdomain}${pathname}`;
    
    return NextResponse.rewrite(url);
  }

  // For main domain, continue normal routing
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
