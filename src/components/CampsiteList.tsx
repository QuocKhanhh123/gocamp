'use client';
import CampsiteCard from './CampsiteCard';

interface Campsite {
  id: number;
  name: string;
  location: string;
  price: string;
  features: string[];
  image: string;
}

export default function CampsiteList({ data }: { data: Campsite[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((campsite) => (
        <CampsiteCard key={campsite.id} {...campsite} />
      ))}
    </div>
  );
}
