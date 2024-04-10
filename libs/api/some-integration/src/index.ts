// NOTE: this could be a payment processing system, cdn, db, etc...
// in this case let's throw in the REDIS_URL just in case
// the dec file is included in tsconfig.lib.json

// NOTE:
// therefore we grab from .env, validate through something like zod and put it global declaration for the api/env module.
// this is not the part of the API input->output flow at all.
export const integrationClient = () => console.log(process.env.REDIS_URL);
