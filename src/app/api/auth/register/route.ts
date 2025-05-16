import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import clientPromise from '@/libs/mongodb';
import { User } from '@/models/User';

export async function POST(req: NextRequest) {
  try {
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json({ error: 'Thiếu thông tin bắt buộc' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    const existingUser = await db.collection<User>('users').findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return NextResponse.json({ error: 'Email hoặc username đã được sử dụng' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser: User = {
      fullname: `${username}`, 
      username,
      email,
      password: hashedPassword
    };

    await db.collection<User>('users').insertOne(newUser);

    return NextResponse.json({ message: 'Đăng ký thành công' });
  } catch (err) {
    console.error('Registration error:', err);
    return NextResponse.json({ error: 'Lỗi máy chủ' }, { status: 500 });
  }
}
