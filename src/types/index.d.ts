// TypeScript Version: 3.0

  export interface Variant {
    hashRaw: (...args: any[]) => Promise<any>;
    hash: (...args: any[]) => Promise<any>;
    verify: (encoded: any, password: any) => Promise<any>;
  }
  export function variant(hashRaw: any, hashEncoded: any, verify: any): Variant;

  export const argon2i: Variant;
  export const argon2d: Variant;
