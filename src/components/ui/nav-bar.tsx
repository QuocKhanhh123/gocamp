'use client';

import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
  const { user, logout, loading } = useAuth();

  return (
    <nav className="bg-[#9AB6AA] py-4 px-8 shadow-md flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/">
          <Image src="/logo.png" alt="GoCamp Logo" width={200} height={40} />
        </Link>
      </div>

      {/* Menu items */}
      <div className="hidden md:flex gap-6 text-white font-semibold text-[16px]">
        <Link href="/" className="hover:text-yellow-300 transition duration-200">Trang chủ</Link>
        <Link href="/rent" className="hover:text-yellow-300 transition duration-200">Cho thuê</Link>
        <Link href="/camp-packages" className="hover:text-yellow-300 transition duration-200">Gói cắm trại</Link>
        <Link href="/suggestLocation" className="hover:text-yellow-300 transition duration-200">Gợi ý địa điểm</Link>
        <Link href="/connect-groups" className="hover:text-yellow-300 transition duration-200">Kết nối nhóm</Link>

        {/* Dropdown */}
        <div className="relative group">
          <button className="focus:outline-none hover:text-yellow-300 transition duration-200">
            Danh mục sản phẩm ▼
          </button>
          <div
            className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg 
        opacity-0 invisible group-hover:opacity-100 group-hover:visible 
        transition duration-300 z-10"
          >
            <Link
              href="/categories/tents"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Lều trại
            </Link>
            <Link
              href="/categories/furniture"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Bàn ghế
            </Link>
            <Link
              href="/categories/cooking-tools"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Dụng cụ nấu ăn
            </Link>
          </div>
        </div>

        <Link href="/about" className="hover:text-yellow-300 transition duration-200">Giới thiệu</Link>
      </div>


      <div className="flex items-center gap-4">
        {/* Search box */}
        <div className="flex items-center bg-white rounded-full px-4 py-1 border border-green-700 focus-within:ring">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm"
            className="outline-none bg-transparent text-sm text-gray-700 w-40"
          />
          <FaSearch className="text-green-800 ml-2" />
        </div>

        {/* User icon */}
        {user ? (
          <>
            <Link href="/profile">
              <FaUserCircle className="text-green-900 text-2xl" />
            </Link>
            <button
              onClick={logout}
              className="mt-2 text-red-500 hover:text-red-700"
            >
              Đăng xuất
            </button></>

        ) : (
          <Link href="/login">
            Đăng nhập
          </Link>
        )}


        <Link
          href="/cart"
          className="flex items-center border border-green-800 px-3 py-1 rounded-full text-green-900"
        >
          <span className="mr-1">Giỏ hàng</span>
          <FaShoppingCart />
        </Link>
      </div>
    </nav>
  );
}
