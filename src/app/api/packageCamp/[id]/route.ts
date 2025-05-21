import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/libs/mongodb';
import { PackageCamp } from '@/models/packageCamp';
import { ObjectId } from 'mongodb';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    const packageCamp = await db
      .collection<PackageCamp>('packageCamp')
      .findOne({ id: new ObjectId(id) });

    if (!packageCamp) {
      return NextResponse.json({ error: 'Package not found' }, { status: 404 });
    }

    return NextResponse.json({ data: packageCamp });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
