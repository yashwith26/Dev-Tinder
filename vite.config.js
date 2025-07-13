import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
});
