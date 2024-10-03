'use client'

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import NProgress from 'nprogress';

export default function RouteChangeComplete() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(
    () => {
      // Route change completed
      // ...
      NProgress.done();
    }, [pathname]
  );

  return null;
};