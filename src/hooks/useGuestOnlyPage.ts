// hooks/useGuestOnlyPage.ts
'use client';

import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function useGuestOnlyPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log('useGuestOnlyPage', { user, loading }); 
    if (!loading && user) {
      console.log('Redirecting to profile page');
      router.push('/'); 
    }
  }, [user, loading, router]);

  return { user, loading };
}
