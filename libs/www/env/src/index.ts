// NOTE: normally this would be some stuff from zod
// what's important here is the declaration below...
export const test = 'testtt';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_URL: string;
      WWW_URL: string;
    }
  }
}
