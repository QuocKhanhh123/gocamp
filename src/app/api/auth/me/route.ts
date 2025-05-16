import { cookies } from 'next/headers';
import { verifyToken } from '@/libs/jwts';
import { NextResponse } from 'next/server';

export async function GET() {
  const token = (await cookies()).get('access_token')?.value;

  if (!token) return NextResponse.json({ user: null });

  try {
    const decoded = verifyToken(token);
    return NextResponse.json({ user: decoded });
  } catch {
    return NextResponse.json({ user: null });
  }
}
