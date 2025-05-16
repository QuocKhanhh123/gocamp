'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CampsiteCardProps {
  id: number;
  name: string;
  location: string;
  price: string;
  features: string[];
  image: string;
}

export default function CampsiteCard({ id, name, image }: CampsiteCardProps) {
  return (
    <Link href={`/campsite/detail/${id}`}>
      <div
        className="relative w-full h-64 rounded-lg overflow-hidden group shadow-md cursor-pointer"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay đen mờ */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all" />

        {/* Tiêu đề & icon */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-lg font-semibold mb-3 text-center drop-shadow">
            {name}
          </h2>
          <div className="border border-white rounded-full p-2 hover:bg-white/20 transition">
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
