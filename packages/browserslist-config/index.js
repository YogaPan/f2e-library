module.exports = {
  development: [
    'last 1 chrome version',
    'last 1 firefox version',
    'last 1 safari version'
  ],
  production: ['>0.25%', 'last 2 version', 'not dead', 'not ie <= 11']
}
