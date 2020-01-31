/* eslint-disable no-param-reassign */
const reactHotReloadPlugin = require('craco-plugin-react-hot-reload')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')
const { whenProd } = require('@craco/craco')
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
    plugins: [],
    configure: webpackConfig => {
      webpackConfig.resolve.plugins.push(
        new DirectoryNamedWebpackPlugin({
          exclude: /node_modules/,
          honorIndex: true
        })
      )

      whenProd(() => {
        webpackConfig.devtool = false
      })

      return webpackConfig
    }
  }
}
