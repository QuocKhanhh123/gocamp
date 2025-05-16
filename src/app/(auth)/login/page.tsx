'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useGuestOnlyPage from '@/hooks/useGuestOnlyPage';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  useGuestOnlyPage();

  const handleLogin = async () => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      router.push('/');
    }
    else {
      const data = await res.json();
      setErrorMessage(data?.error || 'Email hoặc mật khẩu không đúng');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#9AB6AA] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <div className="mb-6 text-center">
          <img src="/LogoWhite.png" alt="Logo" className="mx-auto mb-3 h-25" />
          <h2 className="text-xl font-semibold text-gray-800">Chào mừng trở lại 👋</h2>
          <p className="text-sm text-gray-500 mt-1">
            Nhập thông tin để đăng nhập tài khoản của bạn
          </p>
        </div>

        {errorMessage && (
          <div className="text-red-500 text-sm mb-4 text-center">
            {errorMessage}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium text-gray-700">
                Mật khẩu
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Quên mật khẩu?
              </a>
            </div>
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" className="h-4 w-4" id="remember" />
            <label htmlFor="remember" className="text-sm text-gray-700">
              Ghi nhớ trong 30 ngày
            </label>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-md transition"
          >
            Đăng nhập
          </button>

          <p className="text-sm text-center mt-6">
            Chưa có tài khoản?{' '}
            <Link
              href="/register"
              className="text-blue-600 font-medium hover:underline"
            >
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}