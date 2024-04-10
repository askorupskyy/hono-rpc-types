import { createRoute, z } from '@hono/zod-openapi';

export const helloDefinition = createRoute({
  method: 'get',
  path: '/hello',
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({ hello: z.string() }),
        },
      },
      description: 'Get hello!',
    },
  },
});
