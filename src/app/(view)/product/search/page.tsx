'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[]; // ảnh lấy từ MongoDB
  isFeatured?: boolean;
}

export default function SearchProductList() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!q.trim()) return;

      try {
        const res = await fetch(`/api/products/search?q=${encodeURIComponent(q)}`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Lỗi khi tìm kiếm sản phẩm:', error);
      }
    };

    fetchProducts();
  }, [q]);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-[#4b3f32] mb-8 uppercase tracking-widest">
        KẾT QUẢ TÌM KIẾM: "{q}"
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">Không tìm thấy sản phẩm phù hợp.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link href={`/product/detail/${product.id}`} key={product.id}>
              <div className="text-center cursor-pointer hover:opacity-90">
                <img
                  src={product.images?.[0] || '/images/no-image.png'}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-md shadow mb-3"
                />
                <p className="text-sm font-semibold text-gray-800 truncate">{product.name}</p>
                <p className="text-green-700 font-bold text-sm mt-1">
                  Giá: {product.price?.toLocaleString() || 'N/A'}₫
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
