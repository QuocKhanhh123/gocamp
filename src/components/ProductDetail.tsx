'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation'; // ✅ Thêm useRouter

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  brand: string;
  stock: number;
  rating: number;
  reviews: number;
  weight: string;
  dimensions: string;
  materials: string[];
  isFeatured: boolean;
}

export default function ProductDetail({ id }: { id: string }) {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter(); 

  useEffect(() => {
    if (id) {
      fetch(`/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data.data));
    }
  }, [id]);

  if (!product) return <p>Đang tải chi tiết sản phẩm...</p>;

  const handleBuyNow = () => {
    router.push(`/checkout?productId=${product.id}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start my-10">
      {/* Hình ảnh bên trái */}
      <div className="w-full">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-auto object-cover rounded shadow"
        />
      </div>

      {/* Thông tin sản phẩm bên phải */}
      <div>
        <h1 className="text-2xl font-semibold text-[#4b3f32] mb-2">{product.name}</h1>
        <p className="text-red-600 text-lg font-bold mb-4">
          Giá: {product.price.toLocaleString()}đ
        </p>

        {/* Nút hành động */}
        <div className="flex gap-4 mb-6">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-medium">
            Thêm vào giỏ hàng
          </button>
          <button
            onClick={handleBuyNow} // ✅ Bắt sự kiện điều hướng
            className="bg-[#7fa18f] hover:bg-[#6e907e] text-white px-6 py-2 rounded font-medium"
          >
            Mua ngay
          </button>
        </div>

        {/* Mô tả & thông tin kỹ thuật */}
        <div className="text-sm text-gray-800 leading-relaxed">
          <p className="mb-2 font-semibold">Mô tả</p>
          <ul className="list-disc pl-5 space-y-1 whitespace-pre-line">
            {product.description.split('\n').map((line, i) => (
              <li key={i}>{line.trim()}</li>
            ))}
          </ul>

          <div className="mt-4 space-y-1">
            <p><strong>Thương hiệu:</strong> {product.brand}</p>
            <p><strong>Danh mục:</strong> {product.category}</p>
            <p><strong>Trọng lượng:</strong> {product.weight}</p>
            <p><strong>Kích thước:</strong> {product.dimensions}</p>
            <p><strong>Chất liệu:</strong> {product.materials.join(', ')}</p>
            <p><strong>Tồn kho:</strong> {product.stock}</p>
            <p><strong>Đánh giá:</strong> {product.rating}⭐ ({product.reviews} đánh giá)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
