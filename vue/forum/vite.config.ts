import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  clearScreen: false,
  resolve: {
    alias: {
      "~": resolve("src"),
    },
  },
  plugins: [vue()],
}));
