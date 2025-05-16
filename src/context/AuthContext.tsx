'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { getCookie, deleteCookie } from 'cookies-next';

interface User {
  email: string;
  _id: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  logout: () => { },
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const accessToken = getCookie('access_token');
  console.log('AuthProvider', { accessToken });


  useEffect(() => {
  
      fetch('/api/auth/me')
        .then(res => res.json())
        .then(data => {
          setUser(data.user); console.log('AuthProvider', { data });
          setLoading(false);
        });

  }, []);

  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    deleteCookie('access_token');
    setUser(null);
    
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
