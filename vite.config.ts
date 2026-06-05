import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: "./src/routes", // Explicitly points Vite to your routes folder
      generatedRouteTree: "./src/routeTree.gen.ts",
    }),
    react(),
    tsconfigPaths()
  ],
  build: {
    outDir: "dist", // Dumps all 1,910 modules into a single flat output folder
    emptyOutDir: true,
  }
});
