/* eslint-env node */

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json', 'tsconfig.node.json'],
  },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'react-refresh/only-export-components': 'warn',
  },
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      files: ['!src'],
    },
  ],
};
