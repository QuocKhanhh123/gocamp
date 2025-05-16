import { NextResponse } from 'next/server';
import clientPromise from '@/libs/mongodb';
import { Product } from '@/models/Product';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();

    const products = await db.collection<Product>('products').find().toArray();

    return NextResponse.json({ data: products });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
