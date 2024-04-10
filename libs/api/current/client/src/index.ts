// NOTE: notice how we only import the type from the `api-current-routers`
// since this lib contains both the type and the implementation,
// everything will be compilated

// NOTE:
// such that in .get('/hello', (c) => c.json(process.env.SOMETHING))
// typescript will require this `process.env.SOMETHING` to exist
// in the global declaration of the module
// which sucks because this means we get a bunch of unnecessary stuff compiled by typescript

// NOTE:
// for example:
//
// type MegaBigType = { a: string; and a bunch of other definitions here... }
// .get('/', (c) => {
//    const Stuff: MegaBigType = callSomeIntegration();
//    c.json({ message: Stuff.a });
// })
//
// would include this `MegaBigType` in my frontend build,
// even though it's not needed for the client to exist at all

import type { AppType } from '@/api-current-routers';

import { hc } from 'hono/client';

export const client = hc<AppType>('localhost:3000');
