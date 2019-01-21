const NotifierPlugin = require('webpack-notifier')
const SizePlugin = require('size-plugin')
const path = require('path')
const JarvisPlugin = require('webpack-jarvis')

const notifierPlugin = new NotifierPlugin({
  alwaysNotify: false,
  sound: false,
  title: 'Webpack'
})
const jarvisPlugin = new JarvisPlugin()
const sizePlugin = new SizePlugin()

module.exports = {
  babel: {
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      [
        'babel-plugin-styled-components',
        {
          fileName: false,
          pure: true
        }
      ],
      [
        'transform-react-remove-prop-types',
        {
          removeImport: true,
          additionalLibraries: ['react-router-prop-types']
        }
      ],
      '@babel/plugin-proposal-export-default-from'
    ]
  },
  devServer: {
    open: false
  },
  webpack: {
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Containers: path.resolve(__dirname, 'src/containers/'),
      Hoc: path.resolve(__dirname, 'src/hoc/'),
      Icons: path.resolve(__dirname, 'src/assets/img/icons/'),
      Img: path.resolve(__dirname, 'src/assets/img/'),
      Pages: path.resolve(__dirname, 'src/pages/'),
      RenderProps: path.resolve(__dirname, 'src/render-props/'),
      Store: path.resolve(__dirname, 'src/store/'),
      Utils: path.resolve(__dirname, 'src/utils/')
    },
    plugins: [notifierPlugin, sizePlugin, jarvisPlugin]
  }
}
