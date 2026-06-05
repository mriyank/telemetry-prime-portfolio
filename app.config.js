import { createApp } from "vinxi";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import lovableConfigPkg from "@lovable.dev/vite-tanstack-config";

// Destructure the configuration dynamically to bypass the ESM/CommonJS named export restriction
const tanstackBuildConfig = lovableConfigPkg.tanstackBuildConfig || lovableConfigPkg;

export default createApp({
  routers: [
    {
      name: "public",
      type: "static",
      dir: "./public",
      base: "/",
    },
    {
      name: "client",
      type: "spa",
      handler: "./index.html",
      target: "browser",
      plugins: () => [
        react(),
        tsconfigPaths(),
        typeof tanstackBuildConfig === 'function' ? tanstackBuildConfig() : null
      ].filter(Boolean),
    },
  ],
});
