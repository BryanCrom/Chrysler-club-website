import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

const routes = ["/", "/contact"];

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://chryslerclubnz.co.nz",
      dynamicRoutes: routes,
      exclude: ["/404", "/admin"],
    }),
  ],
});
