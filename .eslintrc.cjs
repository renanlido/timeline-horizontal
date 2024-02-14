module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules', '.eslintrc.mjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
  ],
  plugins: [
    'react-refresh',
    '@typescript-eslint',
    'react',
    'jsx-a11y',
    'prettier',
  ],
  rules: {
    // 'import/order': [
    //   'error',
    //   {
    //     groups: [
    //       'builtin',
    //       'external',
    //       'internal',
    //       'parent',
    //       'sibling',
    //       'index',
    //     ],
    //     'newlines-between': 'always',
    //   },
    // ],
    'import/no-cycle': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'consistent-return': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-undef': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/extensions': 'off',
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     js: 'never',
    //     jsx: 'never',
    //     ts: 'never',
    //     tsx: 'never',
    //     mjs: 'never',
    //   },
    // ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx', '.ts'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'import/no-absolute-path': 'off',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: [
        '.ts',
        '.mts',
        '.cts',
        '.tsx',
        '.d.ts',
      ],
    },
    'import/resolver': {
      [require.resolve('eslint-import-resolver-node')]: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      [require.resolve('eslint-import-resolver-typescript')]: {
        alwaysTryTypes: true,
      },
    },
  },
};
