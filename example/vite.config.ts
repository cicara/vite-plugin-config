import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import config from '@cicara/vite-plugin-config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    config({
      file: './config.yaml',
      validate(value) {
        // throw new Error("xxx");
      },
    }),
  ],
});
