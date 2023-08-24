module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: 'airbnb',
  rules: {
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 1,
    'class-methods-use-this': 0,
    'no-debugger': 1,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    semi: 1,
  },
  settings: {
    react: {
      version: '16.14.0', // Replace with your actual React version
    },
  },
};
