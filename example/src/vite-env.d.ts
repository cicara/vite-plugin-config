/// <reference types="vite/client" />

declare module '#config' {
  const config: import('./config').Config;
  export default config;
}
