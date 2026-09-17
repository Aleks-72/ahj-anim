import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        'jest/globals': true,
      },
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    ignores: ['dist/', 'coverage/', 'node_modules/', "webpack.*.js"],
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    }
  },
]);
