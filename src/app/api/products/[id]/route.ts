import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/libs/mongodb';
import { Product } from '@/models/Product';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const client = await clientPromise;
    const db = client.db();

    const product = await db.collection<Product>('products').findOne({ id: parseInt(id) });

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ data: product });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
