'use client';

import { useEffect, useState } from 'react';

interface Campsite {
  id: number;
  name: string;
  location: string;
  description: string;
  price: string;
  features: string[];
  image: string;
  source: string;
}

export default function CampsiteDetail({ id }: { id: string }) {
  const [campsite, setCampsite] = useState<Campsite | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/camping/danang/${id}`)
        .then((res) => res.json())
        .then((data) => setCampsite(data.data));
    }
  }, [id]);

  if (!campsite) return <p className="text-center py-10">Đang tải thông tin địa điểm...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <img
        src={campsite.image}
        alt={campsite.name}
        className="w-full h-72 object-cover rounded-lg shadow mb-6"
      />
      <h1 className="text-3xl font-bold text-[#4b3f32] mb-2">{campsite.name}</h1>
      <p className="text-gray-600 mb-1">📍 {campsite.location}</p>
      <p className="text-gray-800 mb-4">
        💰 {campsite.price === '0' ? 'Miễn phí' : `${campsite.price} VND`}
      </p>

      <div className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
        {campsite.description}
      </div>

      <div className="mb-6">
        <h3 className="text-md font-semibold mb-2">Tiện ích:</h3>
        <div className="flex flex-wrap gap-2 text-sm">
          {campsite.features.map((feature, index) => (
            <span key={index} className="bg-gray-100 px-3 py-1 rounded">
              #{feature}
            </span>
          ))}
        </div>
      </div>

      <div>
        <a
          href={campsite.source}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm"
        >
          Xem thêm từ nguồn: {campsite.source}
        </a>
      </div>
    </div>
  );
}
