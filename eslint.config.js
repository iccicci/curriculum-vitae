/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import js from "@eslint/js";
import _import from "eslint-plugin-import";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import sortKeys from "eslint-plugin-sort-keys";
import globals from "globals";
import tsEslint from "typescript-eslint";

const overrides = { catch: { after: false }, for: { after: false }, if: { after: false }, switch: { after: false }, while: { after: false } };

export default tsEslint.config(
  { ignores: ["dist"] },
  {
    extends:         [js.configs.recommended, ...tsEslint.configs.strictTypeChecked, ...tsEslint.configs.stylisticTypeChecked],
    files:           ["**/*.{js,ts,tsx}"],
    languageOptions: {
      ecmaVersion:   2020,
      globals:       globals.browser,
      parserOptions: { project: ["./tsconfig.node.json", "./tsconfig.app.json"], tsconfigRootDir: import.meta.dirname }
    },
    plugins: {
      import:               _import,
      react,
      "react-hooks":        reactHooks,
      "react-refresh":      reactRefresh,
      "simple-import-sort": simpleImportSort,
      "sort-keys":          sortKeys
    },
    rules: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      "@typescript-eslint/no-empty-function":     "off",
      "@typescript-eslint/no-empty-interface":    "off",
      "@typescript-eslint/no-namespace":          "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-vars":        ["error", { argsIgnorePattern: "^_", caughtErrors: "none", ignoreRestSiblings: true }],
      "arrow-body-style":                         ["error", "as-needed"],
      "arrow-parens":                             ["error", "as-needed"],
      "arrow-spacing":                            "error",
      "brace-style":                              ["error", "1tbs", { allowSingleLine: true }],
      curly:                                      ["error", "multi-or-nest"],
      eqeqeq:                                     ["error"],
      "func-style":                               ["error", "expression", { allowArrowFunctions: true }],
      "import/first":                             "error",
      "import/newline-after-import":              "error",
      "import/no-duplicates":                     "error",
      indent:                                     ["error", 2],
      "key-spacing":                              ["error", { align: { afterColon: true, beforeColon: false, on: "value" } }],
      "keyword-spacing":                          ["error", { before: true, overrides }],
      "linebreak-style":                          ["error", "unix"],
      "max-len":                                  ["error", { code: 150 }],
      "no-console":                               "warn",
      "no-mixed-spaces-and-tabs":                 ["error", "smart-tabs"],
      "prefer-const":                             ["error", { destructuring: "all" }],
      "prefer-template":                          "error",
      quotes:                                     ["error", "double"],
      "react-hooks/exhaustive-deps":              "off",
      "react-refresh/only-export-components":     ["warn", { allowConstantExport: true }],
      semi:                                       ["error", "always"],
      "simple-import-sort/exports":               "error",
      "simple-import-sort/imports":               "error",
      "sort-keys":                                "off",
      "sort-keys/sort-keys-fix":                  "error",
      "space-before-function-paren":              ["error", { anonymous: "never", asyncArrow: "always", named: "never" }],
      "space-unary-ops":                          ["error", { nonwords: false, overrides: { "!": true }, words: true }]
    },
    settings: { react: { version: "18.3" } }
  }
);
