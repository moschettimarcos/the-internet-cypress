import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['node_modules/', 'cypress/downloads/', 'cypress/videos/'],
  },
  {
    files: ['cypress/**/*.ts', 'cypress.config.ts'],
    rules: {
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
);
