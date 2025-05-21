'use client';

import { Link } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const groupData = [
    {
        title: 'Camping Đà Nẵng',
        imageUrl: '/KetNoiNhom/KNN1.png',
    },
    {
        title: 'Camping with you',
        imageUrl: '/KetNoiNhom/KNN2.png',
    },
    {
        title: 'Đi trốn-Camping',
        imageUrl: '/KetNoiNhom/KNN3.png',
    },
];

export default function GroupPage() {
    const router = useRouter();
    return (
        <div className="min-h-screen bg-white">
            {/* Banner */}
            <div className="relative w-full h-[300px]">
                <Image
                    src="/KetNoiNhom/KetNoiNhom.png"
                    alt="Banner"
                    layout="fill"
                    objectFit="cover"
                    className="brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">Kết nối nhóm</h1>
                </div>
            </div>

            {/* Description */}
            <div className="max-w-3xl mx-auto mt-8 px-4 text-center text-gray-700">
                <p>
                    Go Camp không chỉ là nơi cho thuê, bán các dụng cụ camping, mà còn là cơ hội để bạn kết nối
                    với mọi người có cùng đam mê sở thích cắm trại, học hỏi những mẹo vặt hữu ích, và chia sẻ hành
                    trình đi phượt của mình. Cùng GoCamp xây dựng một cộng đồng cắm trại thân thiện, gắn bó và
                    tràn đầy cảm hứng!
                </p>
            </div>

            {/* Group cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto my-10 px-4">
                {groupData.map((group, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                    >
                        <div className="relative h-[400px]">
                            <Image
                                src={group.imageUrl}
                                alt={group.title}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="p-4 flex flex-col items-center">
                            <h2 className="text-lg font-medium mb-2 text-center">{group.title}</h2>
                            <button
                                onClick={() => router.push(`/details-groups`)}
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                            >
                                Tham gia nhóm
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
