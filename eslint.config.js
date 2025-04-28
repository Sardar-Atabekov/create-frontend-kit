import { defineConfig } from 'eslint-define-config';
import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tseslintPlugin from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import promisePlugin from 'eslint-plugin-promise';

const cleanGlobals = Object.fromEntries(
  Object.entries(globals.browser).map(([k, v]) => [k.trim(), v])
);

export default defineConfig([
  // Игнорируемые папки
  {
    ignores: ['dist', 'node_modules'],
  },

  // Общая конфигурация для всех файлов
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslintParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: cleanGlobals,
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@typescript-eslint': tseslintPlugin,
      promise: promisePlugin,
    },
    rules: {
      // JavaScript базовые правила
      ...js.configs.recommended.rules,

      // React правила
      ...reactPlugin.configs.recommended.rules,

      // React Hooks
      ...reactHooksPlugin.configs.recommended.rules,

      // TypeScript правила
      ...tseslintPlugin.configs.recommended.rules,

      // promise
      ...promisePlugin.configs.recommended.rules,

      // Ваши кастомные правила
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      
      'react/react-in-jsx-scope': 'off',
      'no-console': process.env.NODE_ENV === 'production'
        ? ['error', { allow: ['warn', 'error'] }]
        : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
      },
    },
  },

  // Конфиг для тестовых файлов (Jest)
  {
    files: ['**/*.test.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...cleanGlobals,
        ...globals.jest,
      },
    },
    rules: {
      'no-undef': 'off',
    },
  },

  // Конфиг для Node.js файлов (например, конфиги)
  {
    files: ['*.js', '*.cjs', '*.mjs'],
    languageOptions: {
      globals: {
        ...cleanGlobals,
        ...globals.node,
      },
    },
    rules: {
      'no-undef': 'off',
    },
  },

  // Конфиг для vite.config.ts (Node.js)
  {
    files: ['vite.config.ts'],
    languageOptions: {
      globals: {
        ...cleanGlobals,
        ...globals.node,
      },
    },
    rules: {
      'no-undef': 'off',
    },
  },
]);
