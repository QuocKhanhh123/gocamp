// hooks/useRedirectIfAuthenticated.ts
'use client';

import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function useRedirectIfAuthenticated() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard'); // hoặc trang chính bạn muốn
    }
  }, [user, loading, router]);
}
