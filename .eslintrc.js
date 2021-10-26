module.exports = {
  // For js file
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },

  settings: {
    react: {
      version: "17.0",
    },
  },
  plugins: ["react", "@typescript-eslint"],
  extends: [
    "standard",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "react/prop-types": 0,
    "react/jsx-uses-react": 0,
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/explicit-module-boundary-types": 1,
  },
  ignorePatterns: ["node_modules/*", "lib/*"],
};
