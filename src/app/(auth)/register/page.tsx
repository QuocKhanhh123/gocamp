'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import useGuestOnlyPage from '@/hooks/useGuestOnlyPage';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useGuestOnlyPage();

  const handleRegister = async () => {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
    });
    if (res.ok) {
      router.push('/login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#9AB6AA] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <div className="mb-6 text-center">
          <img src="/LogoWhite.png" alt="Logo" className="mx-auto mb-3 h-25" />
          <h2 className="text-xl font-semibold text-gray-800">Tạo tài khoản mới 📝</h2>
          <p className="text-sm text-gray-500 mt-1">Nhập thông tin để đăng ký tài khoản</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Tên người dùng</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Email</label>
            <input
              type="email"
              placeholder="Email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Mật khẩu</label>
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
            />
          </div>

          <button
            onClick={handleRegister}
            className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-md transition"
          >
            Đăng ký
          </button>

          <p className="text-sm text-center mt-6">
            Đã có tài khoản?{' '}
            <Link href="/login" className="text-blue-600 font-medium hover:underline">Đăng nhập</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
