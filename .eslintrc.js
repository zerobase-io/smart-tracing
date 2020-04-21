module.exports = {
  env: {
    browser: true,
    es6: true,
    jquery: true,
    jest: true
  },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  plugins: ['babel'],
  rules: {
    quotes: ['error', 'single'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
  globals: {
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
    "$": true,
  }
};
