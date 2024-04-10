import { OpenAPIHono } from '@hono/zod-openapi';

import { helloDefinition } from './hello/def';

const api = new OpenAPIHono();

export const mainDefinition = api.openapi(
  helloDefinition,
  function () {} as any
);
