// NOTE: this lib will contain my proposal for the API definitions.
// for this I am using my back, would be nice to have some included constructor for this

import { mainDefinition } from './lib/main';

// export teh main app type
export type AppType = typeof mainDefinition;

// export each definition one by one
export * from './lib/hello/def';
