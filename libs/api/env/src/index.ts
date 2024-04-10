// NOTE: normally this would be some stuff from zod or other validation lib
// what's important here is the declaration below...
export const test = 'testtt';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_DB_URL: string;
      API_URL: string;
      WWW_URL: string;
      REDIS_URL: string;
    }
  }
}
