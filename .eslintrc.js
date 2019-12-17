const { getEslintAliases } = require('./config/aliases')

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: ['css-modules', 'array-func', 'import', 'jsx-a11y', 'promise', 'react', 'sort-destructure-keys', 'unicorn'],
  extends: [
    'plugin:css-modules/recommended',
    'react-app',
    'prettier',
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
  settings: {
    'import/resolver': {
      alias: getEslintAliases()
    }
  },
  rules: {
    'no-underscore-dangle': 'off',
    'array-func/prefer-array-from': 'off',
    'arrow-body-style': [
      'warn',
      'as-needed',
      {
        requireReturnForObjectLiteral: true
      }
    ],
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'consistent-return': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'lines-between-class-members': 'warn',
    'max-len': [
      'warn',
      {
        code: 120
      }
    ],
    'no-else-return': 'warn',
    'no-restricted-syntax': 'off',
    'no-use-before-define': [
      'error',
      {
        functions: false
      }
    ],
    'object-curly-newline': [
      'warn',
      {
        ExportDeclaration: {
          minProperties: 5,
          multiline: true
        },
        ObjectExpression: {
          minProperties: 1,
          multiline: true
        }
      }
    ],
    'operator-linebreak': 'off',
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        next: '*',
        prev: ['const', 'let', 'var', 'if', 'import', 'function', 'class', 'export', 'switch', 'for']
      },
      {
        blankLine: 'always',
        next: ['const', 'let', 'var', 'return', 'if', 'function', 'class', 'export', 'switch', 'for'],
        prev: '*'
      },
      {
        blankLine: 'any',
        next: ['const', 'let', 'var'],
        prev: ['const', 'let', 'var']
      },
      {
        blankLine: 'never',
        next: 'import',
        prev: 'import'
      },
      {
        blankLine: 'any',
        next: 'export',
        prev: 'export'
      }
    ],
    'sort-destructure-keys/sort-destructure-keys': 'warn',
    'unicorn/filename-case': 'off',
    'unicorn/prefer-spread': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/prevent-abbreviations': 'off',
    curly: 'warn',
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1
      }
    ],
    semi: 'off'
  },
  overrides: [
    {
      files: ['src/**/*.js'],
      rules: {
        quotes: ['warn', 'backtick'],
        'sort-keys': 'warn',
        'no-console': 'warn',
        'react/destructuring-assignment': 'warn',
        'react/display-name': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-sort-props': [
          'warn',
          {
            callbacksLast: true,
            reservedFirst: true,
            shorthandFirst: true
          }
        ],
        'react/no-array-index-key': 'off',
        'react/prop-types': [
          'error',
          {
            ignore: ['children']
          }
        ],
        'react/state-in-constructor': ['error', 'never'],
        // cssCheckbox library breaks with nesting
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/label-has-for': 'off'
      }
    }
  ]
}
