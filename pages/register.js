import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Register from '@/components/Register';

export default function RegisterPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    const nextRoute = localStorage.getItem('nextRoute');

    if (pathname === '/register') {
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
      <Register />
    </div>
  );
}
