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
      alias: [
        ['Hoc', './src/hoc/'],
        ['Components', './src/components/'],
        ['RenderProps', './src/render-props/'],
        ['Pages', './src/pages/'],
        ['Containers', './src/containers/'],
        ['Img', './src/assets/img/'],
        ['Icons', './src/assets/img/icons/'],
        ['Store', './src/store/'],
        ['Utils', './src/utils/']
      ]
    }
  },
  rules: {
    'import/no-extraneous-dependencies': 0
  },
  overrides: [
    {
      files: ['src/**/*.js'],
      rules: {
        'react/display-name': 0,
        'array-func/prefer-array-from': 0,
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
        'import/no-extraneous-dependencies': [1, { devDependencies: ['**/ReactotronConfig.js'] }],
        'import/prefer-default-export': 0,
        indent: [
          1,
          2,
          {
            SwitchCase: 1
          }
        ],
        'lines-between-class-members': 1,
        'no-console': 1,
        'no-else-return': 1,
        'object-curly-newline': [
          1,
          {
            ExportDeclaration: {
              minProperties: 5,
              multiline: true
            },
            ImportDeclaration: {
              minProperties: 5,
              multiline: true
            },
            ObjectExpression: {
              minProperties: 1,
              multiline: true
            },
            ObjectPattern: {
              minProperties: 5,
              multiline: true
            }
          }
        ],
        'padding-line-between-statements': [
          1,
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
            blankLine: 'any',
            next: 'import',
            prev: 'import'
          },
          {
            blankLine: 'any',
            next: 'export',
            prev: 'export'
          }
        ],
        quotes: [1, 'backtick'],
        'react/destructuring-assignment': 1,
        'react/jsx-filename-extension': 0,
        'react/jsx-sort-props': [
          1,
          {
            callbacksLast: true,
            reservedFirst: true,
            shorthandFirst: true
          }
        ],
        'react/no-array-index-key': 0,
        'react/prop-types': [2, { ignore: ['children'] }],
        'sort-destructure-keys/sort-destructure-keys': 1,
        'sort-keys': 1,
        'unicorn/filename-case': 0,
        'unicorn/prefer-spread': 0,
        // cssCheckbox library breaks with nesting
        'jsx-a11y/label-has-associated-control': 0,
        'jsx-a11y/label-has-for': 0,
        // FIXME: bug when using destruction for state https://github.com/yannickcr/eslint-plugin-react/issues/1697
        'react/no-unused-state': 0
      }
    }
  ]
}
