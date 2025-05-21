import { NextResponse } from 'next/server';
import clientPromise from '@/libs/mongodb';
import { PackageCamp } from '@/models/packageCamp';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();

    const packages = await db.collection<PackageCamp>('packageCamp').find().toArray();

    return NextResponse.json({ data: packages });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
