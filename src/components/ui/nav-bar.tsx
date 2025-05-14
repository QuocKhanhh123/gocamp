'use client';

import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function Navbar() {
  const { user, logout, loading } = useAuth();

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow">
      <Link href="/" className="font-bold text-xl">MyApp</Link>
      <div>
        {loading ? null : user ? (
          <div className="flex items-center gap-4">
            <span>Hello, {user.email}</span>
            <button onClick={logout} className="text-red-500">Logout</button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
