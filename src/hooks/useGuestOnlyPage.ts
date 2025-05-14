// hooks/useGuestOnlyPage.ts
'use client';

import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function useGuestOnlyPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace('/profile'); // hoặc "/" tuỳ app
    }
  }, [user, loading, router]);

  return { user, loading };
}
