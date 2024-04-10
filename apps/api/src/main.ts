// NOTE: here we are just running the server..

// import { mainRouter } from '@/api-proposal-routers';
import { mainRouter } from '@/api-current-routers';
import { serve } from '@hono/node-server';

serve({
  fetch: mainRouter.fetch,
  port: 3000,
}).on('listening', () => console.log('api running on :3000'));
