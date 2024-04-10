import { Hono } from 'hono';
import { helloRouter } from './lib/hello';

export const mainRouter = new Hono().route('/', helloRouter);

export type AppType = typeof mainRouter;
