/// <reference types="astro/client" />

interface ImportMetaEnv {
  //   readonly DB_PASSWORD: string;
  //   readonly PUBLIC_POKEAPI: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
