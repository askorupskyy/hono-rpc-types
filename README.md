# Hono Pure RPC Types

This project below contains two examples of different Hono API definitions:

1. Standard Hono API. Nothing too fancy except us using Nx with buildable libraries.
2. Using my `hacky` type definitions. I used `@hono/zod-openapi` just because it already provides some wrappers for this. Ideally should be a part of standard API.

Take a look at how I use the client inside `apps/www/src/page.tsx`.

The rest you can follow the code definitions.

# Running:

- `npm i`
- `npx nx run api:build`
- `npx nx run www:build`

# Real-world examples.

In my case this was with exposure different applications to different environment variables. My backend needs the REDIS secret, Next.js app does not.

In other cases it could be these things:

- Too many types being processed by `tsc`, filling up RAM and failing cloud builds
- Much longer compile times for front-end apps
- More `tsc` issues.
