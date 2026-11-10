import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Custom domain yihome.sbs (public/CNAME) → served from the root.
  // If the domain is ever removed, switch back to "/yihome-v1/" AND delete public/CNAME
  // in the same commit, or every asset 404s and the site goes blank.
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
