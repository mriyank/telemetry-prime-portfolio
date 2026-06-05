import { createApp } from "vinxi";
import { tanstackBuildConfig } from "@lovable.dev/vite-tanstack-config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

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
        tanstackBuildConfig()
      ],
    },
  ],
});
