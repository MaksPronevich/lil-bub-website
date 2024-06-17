import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import perfectionist from "eslint-plugin-perfectionist";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default tseslint.config(
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "react-hooks": reactHooksPlugin,
      "react-refresh": eslintReactRefresh,
      react: reactPlugin,
      perfectionist,
    },
  },

  { ignores: ["node_modules", "dist"] },

  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: { project: false },
    },
  },

  { files: ["**/*.{ts,tsx}"] },

  {
    rules: {
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "perfectionist/sort-array-includes": [
        "warn",
        {
          "spread-last": true,
          type: "natural",
        },
      ],
      "perfectionist/sort-exports": [
        "warn",
        {
          type: "line-length",
        },
      ],
      "perfectionist/sort-imports": [
        "warn",
        {
          type: "line-length",
          "newlines-between": "always",
        },
      ],
      "perfectionist/sort-named-exports": [
        "warn",
        {
          type: "line-length",
        },
      ],
      "perfectionist/sort-named-imports": [
        "warn",
        {
          type: "line-length",
        },
      ],
      "perfectionist/sort-interfaces": [
        "warn",
        {
          type: "line-length",
        },
      ],
      "perfectionist/sort-jsx-props": [
        "warn",
        {
          "custom-groups": {
            control: "id",
            id: "id",
            key: "id",
            name: "id",
            rules: "id",
          },
          groups: ["id", "unknown"],
          order: "desc",
          type: "line-length",
        },
      ],
    },
  },
);
