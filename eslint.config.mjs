// eslint.config.mjs
import nextPlugin from '@next/eslint-plugin-next';

import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import sortKeysFixPlugin from 'eslint-plugin-sort-keys-fix';

const eslintConfig = [
  {
    // Global settings
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'dist/**'],
    languageOptions: {
      ecmaVersion: 2022,
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      sourceType: 'module',
    },
    // Global plugins and rules
    plugins: {
      '@next/next': nextPlugin,
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      'jsx-a11y': jsxA11yPlugin,
      prettier: prettierPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      'sort-keys-fix': sortKeysFixPlugin,
    },

    rules: {
      // Next.js rules
      '@next/next/no-html-link-for-pages': 'error',

      '@next/next/no-img-element': 'warn',

      // Import rules - ensuring good import practices
      'import/first': 'error',

      'import/newline-after-import': 'error',

      'import/no-duplicates': 'error',

      // Core ESLint rules
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // Prettier integration
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],

      'react-hooks/exhaustive-deps': 'warn',

      'react-hooks/rules-of-hooks': 'error',

      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          ignoreCase: true,
          reservedFirst: true,
          shorthandFirst: true,
        },
      ],

      'react/prop-types': 'off',

      // React rules
      'react/react-in-jsx-scope': 'off',

      'simple-import-sort/exports': 'error',

      // Import and sorting rules
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Side effect imports
            ['^\\u0000'],
            // React and related packages
            ['^react', '^react-dom', '^next', '^@next'],
            // External packages
            ['^@?\\w'],
            // Internal absolute imports (using @/ alias)
            ['^@/'],
            // Parent directory imports
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Same-directory imports
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style imports
            ['^.+\\.s?css$'],
          ],
        },
      ],

      'sort-keys-fix/sort-keys-fix': 'error',
    },
    settings: {
      'import/resolver': {
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      },
      react: { version: 'detect' },
    },
  },
  // TypeScript-specific configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
    },
  },
];

export default eslintConfig;
