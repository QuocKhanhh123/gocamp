'use client';

import Image from 'next/image';
import { FaRegHeart, FaRegComment, FaMapMarkerAlt } from 'react-icons/fa';

const posts = [
  {
    author: 'Văn Phúc',
    content: 'Hòa Bắc vào 1 ngày đẹp trời',
    imageUrl: '/KetNoiNhom/HoaBac.png',
  },
  {
    author: 'Minh Quang',
    content: 'Hòa Bắc vào 1 ngày đẹp trời',
    imageUrl: '/KetNoiNhom/HoaBac.png',
  },
];

export default function GroupDetailPage() {
  return (
    <div className="bg-gray-200 min-h-screen">
      {/* Banner */}
      <div className="relative h-[300px] w-full">
        <Image
          src="/KetNoiNhom/KetNoiNhom.png"
          alt="Camping Đà Nẵng"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">CAMPING ĐÀ NẴNG</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Main Column */}
        <div className="md:col-span-2 space-y-6">
          {/* Create Post */}
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-300" />
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Chia sẻ bài viết của bạn"
                  className="w-full border rounded-full px-4 py-2 outline-none text-sm"
                />
              </div>
              <button>
                <Image
                  src="/icons/image-icon.png"
                  alt="upload"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>

          {/* Posts */}
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4">
              <div className="mb-2">
                <p className="font-semibold">{post.author}</p>
                <p className="text-sm text-gray-700">{post.content}</p>
              </div>
              <div className="relative w-full h-100 rounded overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt="post"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex justify-between items-center mt-3 px-2 text-gray-600">
                <FaRegHeart className="cursor-pointer" />
                <FaRegComment className="cursor-pointer" />
              </div>
              <div className="flex items-center mt-2 space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300" />
                <input
                  type="text"
                  placeholder="Viết bình luận"
                  className="flex-1 border rounded-full px-4 py-1 text-sm outline-none"
                />
                <button className="text-green-600 text-lg">➤</button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Info Box */}
          <div className="bg-white p-4 rounded shadow text-sm text-gray-700">
            <h3 className="font-bold text-base mb-2">Giới thiệu</h3>
            <p>
              Camping Đà Nẵng là không gian kết nối dành cho những người yêu thích cắm trại và khám phá thiên nhiên.
              Cùng chia sẻ những tin vui về địa điểm cắm trại mới mẻ, độc đáo tại Đà Nẵng và khu vực lân cận. 🌲🔥
            </p>
            <ul className="mt-2 space-y-1">
              <li>• Bất kỳ ai cũng có thể tham gia nhóm</li>
              <li className="flex items-center gap-1"><FaMapMarkerAlt className="inline-block" /> Đà Nẵng</li>
            </ul>
          </div>

          {/* Suggested Groups */}
          <div className="bg-white p-4 rounded shadow text-sm">
            <h3 className="font-bold text-base mb-3">Gợi ý</h3>
            <div className="space-y-2">
              {[
                { name: 'Camping with you', image: '/KetNoiNhom/Ellipse 17.png' },
                { name: 'Đi trốn-Camping', image: '/KetNoiNhom/Frame 40.png' },
              ].map((group, idx) => (
                <div key={idx} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                  <div className="flex items-center gap-2">
                    <Image
                      src={group.image}
                      alt={group.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <p>{group.name}</p>
                  </div>
                  <button className="bg-green-600 text-white px-3 py-1 text-xs rounded">
                    Tham gia nhóm
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
