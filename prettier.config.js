/** @type {import("prettier").Config} */
export default {
  semi: true,
  tabWidth: 2, // Использовать два пробела для отступов (стандарт для TypeScript и JavaScript)
  printWidth: 80,
  useTabs: false, // Использовать пробелы вместо табуляции
  singleQuote: true,
  trailingComma: 'all',
  plugins: ['prettier-plugin-tailwindcss'],
};
