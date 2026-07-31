module.exports = {
  root: true,

  env: {
    es2022: true,
    browser: true,
    node: true
  },

  extends: ['eslint:recommended', 'prettier'],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'script'
  },

  ignorePatterns: [
    'node_modules/',
    'dist/',
    'coverage/'
  ],

  rules: {
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_'
      }
    ],

    'no-console': 'off',

    eqeqeq: ['error', 'always'],

    curly: ['error', 'all']
  }
};
