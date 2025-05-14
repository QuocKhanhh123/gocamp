// app/api/auth/register/route.ts
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import clientPromise from '@/libs/mongodb';
import { User } from '@/models/User';

export async function POST(req: NextRequest) {
  const { fullname, username, email, password } = await req.json();
  const hashed = await bcrypt.hash(password, 10);

  const client = await clientPromise;
  const db = client.db();

  const existing = await db.collection<User>('users').findOne({ email });
  if (existing) {
    return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
  }

  await db.collection<User>('users').insertOne({
    fullname, username, email, password: hashed,
  });

  return NextResponse.json({ message: 'User registered successfully' });
}
