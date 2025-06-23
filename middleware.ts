
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, hostname } = request.nextUrl;
  
  // Skip middleware for API routes, static files, and Next.js internals
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Main routes that should bypass subdomain logic
  const mainRoutes = [
    '/',
    '/features',
    '/pricing',
    '/about',
    '/blog',
    '/contact',
    '/login',
    '/register',
    '/dashboard',
    '/help',
    '/faq',
    '/social-media',
    '/gaming',
    '/ppob',
    '/premium',
    '/karir',
    '/demo'
  ];

  // Development/localhost handling
  const isLocalhost = hostname === 'localhost' || hostname.includes('localhost') || hostname.includes('127.0.0.1');
  
  if (isLocalhost) {
    // For localhost, check if it's a direct reseller path
    if (pathname.startsWith('/reseller/')) {
      return NextResponse.next();
    }
    
    // For main routes on localhost, continue normally
    if (mainRoutes.includes(pathname) || pathname.startsWith('/dashboard')) {
      return NextResponse.next();
    }
    
    return NextResponse.next();
  }

  // Production subdomain handling
  const subdomain = hostname.split('.')[0];
  const mainDomain = process.env.MAIN_DOMAIN || 'unibox.id';
  
  // If it's the main domain (no subdomain or www)
  if (hostname === mainDomain || hostname === `www.${mainDomain}` || subdomain === 'www') {
    if (mainRoutes.includes(pathname) || pathname.startsWith('/dashboard')) {
      return NextResponse.next();
    }
  }
  
  // If it's a subdomain and not a main route
  if (subdomain && subdomain !== 'www' && !hostname.includes(mainDomain)) {
    // Rewrite to reseller route
    const url = request.nextUrl.clone();
    url.pathname = `/reseller/${subdomain}${pathname}`;
    return NextResponse.rewrite(url);
  }

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
