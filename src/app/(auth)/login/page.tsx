'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useGuestOnlyPage from '@/hooks/useGuestOnlyPage';
export default function LoginPage() {
    const { user, loading } = useGuestOnlyPage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

    if (loading || user) return <div>Loading...</div>;

  const handleLogin = async () => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      router.push('/');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 block mb-2" />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 block mb-4" />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2">Login</button>
    </div>
  );
}
