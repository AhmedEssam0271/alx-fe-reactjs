module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "jest/globals": true, // This line is critical for Jest
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended", // This line extends Jest recommended rules
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "jest", // Ensure Jest plugin is included
  ],
  rules: {
    "no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^React$" },
    ],
  },
};
