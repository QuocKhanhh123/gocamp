// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { verifyJwtEdge } from './libs/edge-jwt';
import { cookies } from 'next/headers';

// Các đường dẫn cần đăng nhập
const protectedRoutes = ['/dashboard', '/profile', '/settings'];
const authRoutes = ['/login', '/register'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route));
  if (!isProtected) return NextResponse.next();

  const token = request.cookies.get('access_token')?.value as string;
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));
  console.log('isAuthRoute', isAuthRoute);
  if (isAuthRoute) {
    if (!token) {
      console.log('Token not found, redirecting to login');
      return NextResponse.next();
    }else {
      const profile = new URL('/profile', request.url);
      return NextResponse.redirect(profile);
    }
  }
  
  

  if (!token) {
    console.log('Token not found, redirecting to login');
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }else {
    return NextResponse.next();
  }

  
}
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/settings/:path*'], 
};