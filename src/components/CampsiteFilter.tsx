'use client';

import { useState } from 'react';

interface FilterProps {
  onFilter: (filters: { q: string; location: string; maxPrice: string }) => void;
}

export default function CampsiteFilter({ onFilter }: FilterProps) {
  const [q, setQ] = useState('');
  const [location, setLocation] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter({ q, location, maxPrice });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <input
        type="text"
        placeholder="Tìm kiếm tên hoặc mô tả..."
        className="w-full border p-2 rounded"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <input
        type="text"
        placeholder="Khu vực (VD: Sơn Trà)"
        className="w-full border p-2 rounded"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="number"
        placeholder="Giá tối đa"
        className="w-full border p-2 rounded"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Lọc địa điểm
      </button>
    </form>
  );
}
