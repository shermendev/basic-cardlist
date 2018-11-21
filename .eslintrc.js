module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  plugins: ['css-modules', 'array-func', 'import', 'jsx-a11y', 'promise', 'react', 'sort-destructure-keys', 'unicorn'],
  extends: [
    'plugin:css-modules/recommended',
    'react-app',
    'airbnb',
    'eslint:recommended',
    'plugin:array-func/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'plugin:unicorn/recommended'
  ],
  env: {
    es6: true,
    browser: true
  },
  rules: {
    'import/no-extraneous-dependencies': 0
  },
  overrides: [
    {
      files: ['src/**/*.js'],
      rules: {
        'arrow-body-style': [
          1,
          'as-needed',
          {
            requireReturnForObjectLiteral: true
          }
        ],
        curly: 1,
        'function-paren-newline': [
          1,
          {
            minItems: 5
          }
        ],
        'import/no-extraneous-dependencies': 1,
        indent: [
          1,
          2,
          {
            SwitchCase: 1
          }
        ],
        'lines-between-class-members': 1,
        'no-else-return': 1,
        'object-curly-newline': [
          1,
          {
            ImportDeclaration: {
              multiline: true,
              minProperties: 5
            },
            ObjectExpression: {
              multiline: true,
              minProperties: 1
            },
            ObjectPattern: {
              multiline: true,
              minProperties: 5
            },
            ExportDeclaration: {
              multiline: true,
              minProperties: 5
            }
          }
        ],
        'padding-line-between-statements': [
          1,
          {
            blankLine: 'always',
            prev: ['const', 'let', 'var', 'if', 'import', 'function', 'class', 'export', 'switch', 'for'],
            next: '*'
          },
          {
            blankLine: 'always',
            prev: '*',
            next: ['const', 'let', 'var', 'return', 'if', 'function', 'class', 'export', 'switch', 'for']
          },
          {
            blankLine: 'any',
            prev: ['const', 'let', 'var'],
            next: ['const', 'let', 'var']
          },
          {
            blankLine: 'any',
            prev: 'import',
            next: 'import'
          }
        ],
        quotes: [1, 'backtick'],
        'react/destructuring-assignment': 1,
        'react/jsx-filename-extension': 0,
        'react/jsx-sort-props': [
          1,
          {
            reservedFirst: true,
            callbacksLast: true,
            shorthandFirst: true
          }
        ],
        'react/no-array-index-key': 0,
        'sort-destructure-keys/sort-destructure-keys': 1,
        'sort-keys': 1,
        'unicorn/filename-case': 0,
        'unicorn/prefer-spread': 0,
        // FIXME: bug when using destruction for state https://github.com/yannickcr/eslint-plugin-react/issues/1697
        'react/no-unused-state': 0,
        // cssCheckbox library breaks with nesting
        'jsx-a11y/label-has-associated-control': 0,
        'jsx-a11y/label-has-for': 0
      }
    }
  ]
}
