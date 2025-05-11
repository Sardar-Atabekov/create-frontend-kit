import js from '@eslint/js';
import tseslintPlugin from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import { defineConfig } from 'eslint-define-config';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import promisePlugin from 'eslint-plugin-promise';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';

const cleanGlobals = Object.fromEntries(
  Object.entries(globals.browser).map(([k, v]) => [k.trim(), v]),
);

export default defineConfig(
  [
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
        import: importPlugin,
        promise: promisePlugin,
        prettier: prettierPlugin,
        'react-hooks': reactHooksPlugin,
        '@typescript-eslint': tseslintPlugin,
      },
      rules: {
        // Базовые рекомендации
        ...js.configs.recommended.rules,
        ...reactPlugin.configs.recommended.rules,
        ...reactHooksPlugin.configs.recommended.rules,
        ...tseslintPlugin.configs.recommended.rules,
        ...promisePlugin.configs.recommended.rules,

        ...prettierPlugin.configs.recommended.rules,
        'prettier/prettier': 'warn',
        // Кастомные правила
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/react-in-jsx-scope': 'off',

        // Продакшн-логика
        'no-console':
          process.env.NODE_ENV === 'production'
            ? ['error', { allow: ['warn', 'error'] }]
            : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        // Стиль кода
        semi: ['error', 'always'],
        quotes: ['error', 'single'],

        // Сортировка импортов

        // Удаление неиспользуемых импортов
        'import/no-duplicates': 'error',
        'import/order': 'off', // отключаем, чтобы не конфликтовал

        // Ограничиваем максимальное количество строк в файле
        'max-lines': [
          'error',
          { max: 300, skipBlankLines: true, skipComments: true },
        ],
      },
      settings: {
        react: {
          version: 'detect',
        },
        'import/resolver': {
          typescript: {
            project: './tsconfig.json',
          },
        },
      },
    },

    // Тестовые файлы
    {
      files: ['**/*.test.{js,jsx,ts,tsx}', 'config/*.js'],
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

    // Node.js конфиги
    {
      files: ['*.js', '*.cjs', '*.mjs', 'vite.config.ts'],
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

    // Vite конфиги
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
  ],
  {
    // Настройки для вывода результатов
    reportUnusedDisableDirectives: true,
    quiet: false,
  },
);
