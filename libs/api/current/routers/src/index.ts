import { Hono } from 'hono';
import { integrationClient } from '@/api-some-integration';

export const mainRouter = new Hono().get('/hello', (c) => {
  integrationClient();
  return c.json({ hello: 'world' });
});

export type AppType = typeof mainRouter;
