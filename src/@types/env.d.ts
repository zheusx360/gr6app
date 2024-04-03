declare module '@env' {
  export const BASE_URL: string;
  export const API_URL: string;
  export const LOCAL: string;
  export const TOKEN_URL: string;
}

declare namespace NodeJS {
  interface ProcessEnv {
    BASE_URL: string;
    API_URL: string;
    LOCAL: string;
    TOKEN_URL: string;
  }
}
