import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import LoginForm from '@/components/Login';

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    const nextRoute = localStorage.getItem('nextRoute');

    if (pathname === '/login') {
      if (session) {
        if (nextRoute) {
          router.replace(nextRoute);
        } else {
          router.replace('/');
        }
      }
    }
  }, [session, router]);

  return (
    <div>
      <LoginForm />
    </div>
  );
}