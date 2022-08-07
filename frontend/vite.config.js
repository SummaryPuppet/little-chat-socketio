import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Chat by SummaryPuppet",
        short_name: "Chat",
        description: "App of msgs",
        theme_color: "#ffffff",
        display: "fullscreen",
        categories: ["entertainment", "social"],
        icons: [],
      },
    }),
  ],
});
