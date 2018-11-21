const WebpackNotifierPlugin = require('webpack-notifier')

const webpackNotifierPlugin = new WebpackNotifierPlugin({
  alwaysNotify: false,
  title: 'Webpack'
})

module.exports = function override(config) {
  config.plugins.push(webpackNotifierPlugin)
  return config
}
