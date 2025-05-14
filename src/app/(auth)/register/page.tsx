'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useRedirectIfAuthenticated from '@/hooks/useRedirectIfAuthenticated';

export default function RegisterPage() {
    const [form, setForm] = useState({ fullname: '', username: '', email: '', password: '' });
    const router = useRouter();

    useRedirectIfAuthenticated();
    const handleRegister = async () => {
        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });
        if (res.ok) router.push('/login');
    };

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Register</h2>
            {['fullname', 'username', 'email', 'password'].map((field) => (
                <input
                    key={field}
                    placeholder={field}
                    name={field}
                    type={field === 'password' ? 'password' : 'text'}
                    value={form[field as keyof typeof form]}
                    onChange={e => setForm({ ...form, [field]: e.target.value })}
                    className="border p-2 block mb-2"
                />
            ))}
            <button onClick={handleRegister} className="bg-green-500 text-white px-4 py-2">Register</button>
        </div>
    );
}
