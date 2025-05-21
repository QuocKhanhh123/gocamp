import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/libs/mongodb';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q') || '';

  try {
    const client = await clientPromise;
    const db = client.db();
    const products = await db
      .collection('products')
      .find({ name: { $regex: q, $options: 'i' } }) 
      .toArray();

    return NextResponse.json(products);
  } catch (error) {
    console.error('Lỗi tìm kiếm:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
