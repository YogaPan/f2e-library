module.exports = {
  env: { node: true, es2021: true },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['import'],
  rules: {
    'import/order': 'error',
    'no-console': 'error',
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-var': 'error',
    quotes: ['error', 'single', { avoidEscape: true }]
  }
}
