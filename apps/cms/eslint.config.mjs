import { nextJsConfig } from '@purrkit/eslint-config/next-js'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...nextJsConfig,
  {
    ignores: ['cloudflare-env.d.ts'],
  },
  {
    files: ['next.config.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['src/migrations/**/*.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
]
