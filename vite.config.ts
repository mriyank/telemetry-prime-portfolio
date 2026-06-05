import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackBuildConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    nitro({
      preset: "vercel", // Injects native Vercel Edge mapping layout targets
    }),
    mode === 'development' && tanstackBuildConfig(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": "/src",
    },
  },
}));
