import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackBuildConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' &&   
    tanstackBuildConfig(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": "/src",
    },
  },
}));
