# Project creation with vite

Create a new project using `npm create vite@latest forum -- --template vue-ts`

## Alias setup

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

## eslint setup

Install the following packages to setup eslint `npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/eslint-config-airbnb @vue/eslint-config-typescript eslint eslint-plugin-import eslint-plugin-vue eslint-plugin-vuejs-accessibility eslint-import-resolver-alias`. After that create `.eslintrc.js` with the following

```js
module.exports = {
  root: true,
  env: {
    node: true,
    "vue/setup-compiler-macros": true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "plugin:vue/vue3-essential",
    "@vue/airbnb",
    "@vue/typescript/recommended",
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [["~", "./src"]],
      },
    },
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-explicit-any": "off",
    "import/prefer-default-export": "off",
    "vue/script-setup-uses-vars": "error",
    "no-unused-vars": "off",
    "import/no-mutable-exports": "off",
  },
};
```

To setup tailwind css install `npm install -D tailwindcss postcss autoprefixer` and run `npx tailwindcss init -p` then update the `tailwind.config.js` file with

```js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## editor configuration

create `.editorconfig` and add the following

```
[*.{js,jsx,ts,tsx,vue}]
indent_style = space
indent_size = 2
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true
max_line_length = 100
```

## prettier configuration

create `.prettierrc` and add the following

```json
{
  "singleQuote": true
}
```
