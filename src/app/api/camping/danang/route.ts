import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/libs/mongodb';
import { Campsite } from '@/models/Campsite';

export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db();

    const searchParams = req.nextUrl.searchParams;
    const q = searchParams.get('q')?.toLowerCase();
    const location = searchParams.get('location')?.toLowerCase();
    const maxPrice = searchParams.get('maxPrice');

    const query: any = {};

    // 🔍 Tìm kiếm theo tên hoặc mô tả
    if (q) {
      query.$or = [
        { name: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } }
      ];
    }

    // 📍 Lọc theo địa điểm
    if (location) {
      query.location = { $regex: location, $options: 'i' };
    }

    // 💰 Lọc theo giá
    if (maxPrice) {
      query.price = { $lte: maxPrice };
    }

    const campsites = await db.collection<Campsite>('campsites')
      .find(query)
      .toArray();

    return NextResponse.json({ data: campsites });
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
