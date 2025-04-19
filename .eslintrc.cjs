export default {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  settings: {
    react: {
      version: "detect"
    },
  },
  env: {
    browser: true,
    es2021: true
  }
}