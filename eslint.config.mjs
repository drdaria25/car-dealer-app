import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['node_modules', 'build', 'dist', '*.config.js'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
        fetch: 'readonly',
      },
    },
    plugins: {
      react,
      '@typescript-eslint': typescript,
      prettier,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
];
