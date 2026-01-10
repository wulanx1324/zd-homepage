import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@assets": fileURLToPath(new URL("./public/assets", import.meta.url)),
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {},
    middlewareMode: false,
  },
  preview: {
    port: 3000,
  },
  appType: "spa",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["vue", "vue-router"],
        },
      },
    },
  },
  publicDir: "public",
});
