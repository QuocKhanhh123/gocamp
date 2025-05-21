// models/Order.ts

export interface Order {
  _id?: string;
  productId: number;
  productName: string;
  productPrice: number;

  customerName: string;
  address: string;
  phone: string;
  note?: string;

  shippingFee: number;
  totalPrice: number;
  paymentMethod: string;

  createdAt?: Date;
}
