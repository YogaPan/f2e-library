module.exports = {
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  env: { browser: true, node: true, es2021: true },
  settings: { react: { version: 'detect' } },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['react', 'import'],
  rules: {
    'react/prop-types': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'error',
    'no-console': 'error',
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-var': 'error',
    quotes: ['error', 'single', { avoidEscape: true }]
  }
}
