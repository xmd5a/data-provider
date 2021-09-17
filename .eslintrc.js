module.exports = {
  extends: ['airbnb-typescript', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'react', '@typescript-eslint', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 1,
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/comma-dangle': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-props-no-spreading': 0,
    'no-useless-escape': 0,
    'react/jsx-curly-newline': 0,
    'react/require-default-props': 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-uses-react': 0,
    'react/prop-types': 0,
    'no-param-reassign': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
        packageDir: './',
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        shorthandFirst: true,
        reservedFirst: true,
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        modifiers: ['destructured'],
        format: null,
      },
    ],
  },
};
