import type { AppType } from '@/api-proposal-def';

import { hc } from 'hono/client';

export const client = hc<AppType>('localhost:3000');
