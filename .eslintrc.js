module.exports = {
  env: {
    commonjs: true,
    nodejs: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  globals: {
    expect: true,
    sinon: true,
    cy: true,
    Cypress: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    curly: ['warn', 'all'],
    'linebreak-style': 0,
    quotes: [
      'warn',
      'single',
      {
        avoidEscape: true,
      },
    ],
    semi: ['warn', 'always'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
