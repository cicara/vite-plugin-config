/// <reference types="vite/client" />

import type { Config } from './config';

declare module '@cicara/vite-plugin-config/config' {
  export interface DefaultConfigObject extends Config {

  }
}
