module.exports = {
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: [
    ".build",
    ".eslintrc.js",
    ".next",
    "dist",
    "node_modules",
    "public",
    "tmp",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react", "react-hooks", "jsx-a11y", "jest"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:jest/all",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/restrict-template-expressions": [
      2,
      {
        allowBoolean: true,
        allowAny: true,
      },
    ],
    "padding-line-between-statements": [
      "warn",
      {
        blankLine: "always",
        prev: "*",
        next: "multiline-block-like",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "multiline-const",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "multiline-expression",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "multiline-let",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
      {
        blankLine: "always",
        prev: "multiline-block-like",
        next: "*",
      },
      {
        blankLine: "always",
        prev: "multiline-const",
        next: "*",
      },
      {
        blankLine: "always",
        prev: "multiline-expression",
        next: "*",
      },
      {
        blankLine: "always",
        prev: "multiline-let",
        next: "*",
      },
    ],
    "jsx-a11y/anchor-is-valid": "off",
    "no-case-declarations": 0,
    "@typescript-eslint/ban-types": "off",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/no-static-element-interactions": [
      "warn",
      {
        handlers: [
          "onClick",
          "onMouseDown",
          "onMouseUp",
          "onKeyPress",
          "onKeyDown",
          "onKeyUp",
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/no-unsafe-return": 0,
      },
    },
  ],
};
