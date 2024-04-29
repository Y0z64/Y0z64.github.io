// vite.config.ts
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import Unfonts from "unplugin-fonts/vite";

export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      custom: {
        families: [
          {
            name: "GeistMono",
            src: "./src/assets/fonts/GeistMono/*.woff2",
          },
          {
            name: "Geist",
            src: "./src/assets/fonts/Geist/*.woff2",
          },
        ],
      },
    }),
  ],
});
