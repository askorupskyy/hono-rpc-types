import { OpenAPIHono } from '@hono/zod-openapi';
import { helloDefinition } from '@/api-proposal-def';
import { integrationClient } from '@/api-some-integration';

const api = new OpenAPIHono();

// i get full type completion here as well....
export const helloRouter = api.openapi(helloDefinition, (c) => {
  // can access .env variables freely since we import only types in the frontend
  integrationClient();
  return c.json({ hello: 'world' });
});
