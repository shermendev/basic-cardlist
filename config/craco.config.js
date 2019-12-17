const reactHotReloadPlugin = require('craco-plugin-react-hot-reload')
const { getJestAliases, getWebpackAliases } = require('./aliases')

module.exports = {
  plugins: [
    {
      plugin: reactHotReloadPlugin
    }
  ],
  babel: {
    plugins: [
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true
        }
      ],
      [
        'babel-plugin-styled-components',
        {
          fileName: false,
          pure: true
        }
      ],
      '@babel/plugin-proposal-export-default-from'
    ]
  },
  devServer: {
    open: false
  },
  jest: {
    configure: {
      moduleNameMapper: getJestAliases()
    }
  },
  webpack: {
    alias: getWebpackAliases(),
    plugins: []
  }
}
