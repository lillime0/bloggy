import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/grapgql": {
        target: "http://localhost:5000",
        changeOrigin: true,
        rewrite: path => path.replace("/^/graphgl/", "")
      }
    },
    port: 3000
  }
});
