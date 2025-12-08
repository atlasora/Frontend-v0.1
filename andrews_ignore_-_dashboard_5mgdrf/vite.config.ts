// @ts-nocheck
import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import { URL } from "url";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // Only include the Anima plugin in development to avoid type conflicts
    ...(mode === "development" ? [screenGraphPlugin()] : []),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  // Serve static assets (like hero.mp4) from the usual Vite public folder
  publicDir: "public",
  base: "/",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
}));

