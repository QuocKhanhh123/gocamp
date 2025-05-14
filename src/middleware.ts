// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/libs/jwts';
import { cookies } from 'next/headers';

// Các đường dẫn cần đăng nhập
const protectedRoutes = ['/dashboard', '/profile', '/settings'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route));
  if (!isProtected) return NextResponse.next();

  const token = request.cookies.get('token')?.value;
  if (!token) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  try {
    verifyToken(token);
    return NextResponse.next(); // Token hợp lệ, cho phép truy cập
  } catch (err) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }
}
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/settings/:path*'], // Các đường dẫn cần bảo vệ
};