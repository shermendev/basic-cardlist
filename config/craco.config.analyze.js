const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const baseConfig = require('./craco.config.build.js')

const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
  openAnalyzer: false
})

module.exports = {
  ...baseConfig,
  webpack: {
    ...baseConfig.webpack,
    plugins: [...baseConfig.webpack.plugins, bundleAnalyzerPlugin]
  }
}
