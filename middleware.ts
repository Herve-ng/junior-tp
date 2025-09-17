import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Log uniquement les requêtes API
  if (pathname.startsWith('/api/')) {
    const timestamp = new Date().toISOString();
    const method = request.method;
    const userAgent = request.headers.get('user-agent') || 'Unknown';
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               request.headers.get('cf-connecting-ip') || 
               'Unknown';
    
    console.log(`[${timestamp}] API Request: ${method} ${pathname}`);
    console.log(`  IP: ${ip}`);
    console.log(`  User-Agent: ${userAgent}`);
    
    // Log des paramètres de requête pour les GET
    if (method === 'GET') {
      const searchParams = request.nextUrl.searchParams;
      if (searchParams.toString()) {
        console.log(`  Query Params: ${searchParams.toString()}`);
      }
    }
    
    // Log du body pour les POST/PUT/PATCH
    if (['POST', 'PUT', 'PATCH'].includes(method)) {
      console.log(`  Method: ${method} - Body logging enabled`);
    }
    
    console.log('---');
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Appliquer le middleware à toutes les routes API
    '/api/:path*',
  ],
};

