import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import clientPromise from '@/libs/mongodb';
import { signToken } from '@/libs/jwts';
import { serialize } from 'cookie';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const client = await clientPromise;
  const db = client.db();

  const user = await db.collection('users').findOne({ email });
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 401 });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return NextResponse.json({ error: 'Wrong password' }, { status: 401 });

  const token = signToken({ _id: user._id, email: user.email });

  const response = NextResponse.json({ message: 'Logged in' });
  response.headers.set(
    'Set-Cookie',
    serialize('token', token, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })
  );

  return response;
}
