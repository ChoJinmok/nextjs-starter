module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  globals: {},
  rules: {
    'no-trailing-spaces': 'error',
    curly: 'error',
    'no-multi-spaces': 'error',
    'space-unary-ops': 'error',
    'no-whitespace-before-property': 'error',
    'comma-style': ['error', 'last'],
    'space-in-parens': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'linebreak-style': 'off',
    'no-proto': 'off',

    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-confusing-void-expression": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-meaningless-void-operator": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/sort-type-constituents": "error",
    "@typescript-eslint/strict-boolean-expressions": "error",

    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/member-delimiter-style": "error",

    "no-return-await": "off",
    "@typescript-eslint/return-await": "error",
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": ['error', 'always-multiline'],
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": ['error', { before: false, after: true }],
    "block-spacing": "off",
    "@typescript-eslint/block-spacing": "error",
    "brace-style": "off",
    "@typescript-eslint/brace-style": "error",
    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": "error",
    "indent": "off",
    "@typescript-eslint/indent": ['error', 2],
    "key-spacing": "off",
    "@typescript-eslint/key-spacing": ['error', { mode: 'strict' }],
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": ['error', { before: true, after: true }],
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ['error', 'always'],
    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": "error",
    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": "error",

    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'ts', '.tsx'] }],
    'react/jsx-props-no-spreading': ['error', {
      exceptions: ['Component'],
    }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.config.ts',
          '**/*.setup.js',
          '**/*.spec.ts',
          '**/*.test.tsx',
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-reuires': 'off',
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js'],
    },
    'import/resolver': {
      typescript: './tsconfig.json',
    },
  },
  ignorePatterns: ['*.cjs'],
};
