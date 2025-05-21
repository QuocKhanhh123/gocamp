// app/api/orders/route.ts

import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/libs/mongodb';
import { Order } from '@/models/Oder';

export async function POST(req: NextRequest) {
  try {
    const {
      productId,
      productName,
      productPrice,
      customerName,
      address,
      phone,
      note,
    } = await req.json();

    // Kiểm tra các trường bắt buộc
    if (!productId || !productName || !productPrice || !customerName || !address || !phone) {
      return NextResponse.json({ error: 'Thiếu thông tin đơn hàng' }, { status: 400 });
    }

    const shippingFee = 20000;
    const totalPrice = productPrice + shippingFee;

    const newOrder: Order = {
      productId,
      productName,
      productPrice,
      customerName,
      address,
      phone,
      note,
      shippingFee,
      totalPrice,
      paymentMethod: 'COD',
      createdAt: new Date(),
    };

    const client = await clientPromise;
    const db = client.db();

    await db.collection<Order>('orders').insertOne(newOrder);

    return NextResponse.json({ message: 'Đặt hàng thành công', order: newOrder });
  } catch (error) {
    console.error('Order error:', error);
    return NextResponse.json({ error: 'Lỗi máy chủ' }, { status: 500 });
  }
}
