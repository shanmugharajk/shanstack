# Project creation with vite

Create a new project using `npm create vite@latest forum -- --template vue-ts`

To set the alias to import components, update `tsconfig.json`

```json
  "paths": {
    "~/*": ["src/*"]
  }
```

and the `vite.config.ts`

```ts
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
```
