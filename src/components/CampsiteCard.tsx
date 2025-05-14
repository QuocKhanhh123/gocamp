'use client';

interface CampsiteCardProps {
  id: number;
  name: string;
  location: string;
  price: string;
  features: string[];
  image: string;
}

export default function CampsiteCard({ id, name, location, price, features, image }: CampsiteCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-1">{name}</h2>
        <p className="text-sm text-gray-600">📍 {location}</p>
        <p className="text-sm text-gray-800 mt-1">💰 {price === '0' ? 'Miễn phí' : `${price} VND`}</p>
        <div className="mt-2 text-sm text-gray-700">
          {features.map((f, i) => (
            <span key={i} className="inline-block bg-gray-100 px-2 py-1 mr-2 mb-1 rounded">
              #{f}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}