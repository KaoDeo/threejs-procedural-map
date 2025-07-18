import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  publicDir: "assets",
  server: {
    open: true,
    port: 3000,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
