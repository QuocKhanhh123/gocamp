'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  type: string;
}

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('productId');

  const [product, setProduct] = useState<Product | null>(null);

  // Trạng thái lưu thông tin form
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');

  useEffect(() => {
    if (productId) {
      fetch(`/api/products/${productId}`)
        .then((res) => res.json())
        .then((data) => setProduct(data.data));
    }
  }, [productId]);

  const handleOrder = async () => {
    if (!product) return;

    const orderData = {
      productId: product.id,
      productName: product.name,
      productPrice: product.price,
      customerName,
      address,
      phone,
      note,
    };

    const res = await fetch('/api/oders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    });

    if (res.ok) {
      alert('Đặt hàng thành công!');
      setCustomerName('');
      setAddress('');
      setPhone('');
      setNote('');
    } else {
      const error = await res.json();
      alert(`Lỗi: ${error.error || 'Không thể đặt hàng'}`);
    }
  };

  if (!product) return <p className="p-8 text-center">Đang tải sản phẩm...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-20">
      {/* FORM THÔNG TIN KHÁCH HÀNG */}
      <div>
        <h2 className="text-xl font-bold mb-4">THÔNG TIN THANH TOÁN</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Tên"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full border px-4 py-2"
            required
          />
          <input
            type="text"
            placeholder="Địa chỉ"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border px-4 py-2"
            required
          />
          <input
            type="text"
            placeholder="Số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border px-4 py-2"
            required
          />
          <textarea
            placeholder="Ghi chú đơn hàng (tùy chọn)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full border px-4 py-2"
          />
        </form>
      </div>

      {/* THÔNG TIN ĐƠN HÀNG */}
      <div className="border border-green-500 rounded p-6">
        <h3 className="font-bold mb-4">Thông tin đơn hàng</h3>
        <div className="flex justify-between text-sm border-b py-2">
          <span>{product.name}</span>
          <span>{product.price.toLocaleString()}đ</span>
        </div>
        <div className="flex justify-between text-sm border-b py-2">
          <span>Tạm tính</span>
          <span>{product.price.toLocaleString()}đ</span>
        </div>
        <div className="flex justify-between text-sm border-b py-2">
          <span>Phí vận chuyển</span>
          <span>20.000đ</span>
        </div>
        <div className="flex justify-between font-bold py-2">
          <span>Tổng</span>
          <span>{(product.price + 20000).toLocaleString()}đ</span>
        </div>

        <div className="mt-4">
          <p className="mb-2 font-medium">Phương thức thanh toán</p>
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" checked readOnly />
            <span>Thanh toán khi nhận hàng</span>
          </label>
        </div>

        <button
          onClick={handleOrder}
          className="bg-red-600 text-white mt-6 w-full py-2 rounded hover:opacity-90"
        >
          Đặt hàng
        </button>
      </div>
    </div>
  );
}
