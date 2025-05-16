import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/libs/mongodb';
import { Campsite } from '@/models/Campsite';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const client = await clientPromise;
    const db = client.db();

    const campsite = await db
      .collection<Campsite>('campsites')
      .findOne({ id: parseInt(id) });

    if (!campsite) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ data: campsite });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
