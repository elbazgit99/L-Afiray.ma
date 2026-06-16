import { fileURLToPath, URL } from "node:url"; 
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: process.env.VITE_BASE_PATH || "/",
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:5000",
                changeOrigin: true
            },
            "/uploads": {
                target: "http://localhost:5000",
                changeOrigin: true
            }
        }
    }
});   