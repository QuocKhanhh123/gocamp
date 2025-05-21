'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface PackageCamp {
    _id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    is_active: boolean;
}

export default function PackageList() {
    const [packages, setPackages] = useState<PackageCamp[]>([]);

    useEffect(() => {
        fetch('/api/packageCamp')
            .then(res => res.json())
            .then(data => {
                const activePackages = data.data
                    .filter((pkg: PackageCamp) => pkg.is_active)
                    .slice(0, 8);
                setPackages(activePackages);
            });
    }, []);

    return (
        <div className="px-4 py-8">
            <h2 className="text-2xl font-bold text-center text-[#4b3f32] mb-8 uppercase tracking-widest">
                GÓI CẮM TRẠI NỔI BẬT
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {packages.map((pkg) => (
                    <Link href={`/packageCamp/${pkg._id}`} key={pkg._id}>
                        <div className="flex justify-center">
                            <div className="w-[500] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col text-center">
                                {/* Phần ảnh - FULL chiều rộng & cố định chiều cao */}
                                <div className="w-full h-full overflow-hidden">
                                    <img
                                        src={pkg.images?.[0] || '/placeholder.jpg'}
                                        alt={pkg.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Nội dung căn giữa */}
                                <div className="flex flex-col items-center justify-center px-4 py-6">
                                    <h3 className="text-lg font-bold text-[#5f4436] mb-2">{pkg.name}</h3>
                                    <p className="text-sm text-gray-700 mb-3 max-w-sm">
                                        {pkg.description}
                                    </p>
                                    <p className="font-semibold text-gray-800 mb-3">
                                        Giá: {pkg.price.toLocaleString()}đ
                                    </p>
                                    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                                        Thêm vào giỏ hàng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );

}
