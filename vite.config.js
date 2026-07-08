import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/FUTURE_UI-UX_3/",

  plugins: [
    react(),
    tailwindcss(),
  ],
});