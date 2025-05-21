'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  isFeatured: boolean;
  type: string;
}

interface ProductListProps {
  type: 'leu' | 'ban-ghe' | 'bep-mini';
}

export default function ProductListByType({ type }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.data
          .filter((product: Product) => product.type === type)
          .slice(0, 8); // Giới hạn số lượng sản phẩm hiển thị
        setProducts(filtered);
      });
  }, [type]);

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold text-center text-[#4b3f32] mb-8 uppercase tracking-widest">
        {type === 'leu'
          ? 'LỀU CẮM TRẠI'
          : type === 'ban-ghe'
          ? 'BÀN GHẾ CẮM TRẠI'
          : 'BẾP MINI CẮM TRẠI'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link href={`/product/detail/${product.id}`} key={product.id}>
            <div className="text-center cursor-pointer hover:opacity-90">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-64 object-cover rounded-md shadow mb-3"
              />
              <p className="text-sm font-semibold text-gray-800 truncate">
                {product.name}
              </p>
              <p className="text-green-700 font-bold text-sm mt-1">
                Giá: {product.price.toLocaleString()}đ
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
