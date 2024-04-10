'use client';

import { client } from '@/api-current-client';
// NOTE: this below is a client created explicit Hono type definitions
// uncomment it and the build will pass
// import { client } from '@/api-proposal-client';
import { useEffect, useState } from 'react';

export default function Index() {
  const [hello, setHello] = useState('');

  useEffect(() => {
    (async () => {
      const req = await client.hello.$get();
      const res = await req.json();
      setHello(res.hello);
    })();
  }, [setHello]);

  return hello === '' ? 'Loading...' : `server responded with: ${hello}`;
}
