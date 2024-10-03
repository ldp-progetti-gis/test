'use client'

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import NProgress from 'nprogress';

export default function RouteChangeStart() {
  const pathname = usePathname();
  
  useEffect(
    () => {
      // Route change start
      // ...
      NProgress.start();
    }, [pathname]
  );

  return null;
};