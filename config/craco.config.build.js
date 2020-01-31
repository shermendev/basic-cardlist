const CracoFavIconsPlugin = require('craco-favicons')
const baseConfig = require('./craco.config.js')

module.exports = {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    {
      plugin: CracoFavIconsPlugin,
      options: {
        logo: `${__dirname}/../src/assets/img/logo.svg`
      }
    }
  ],
  babel: {
    plugins: [
      ...baseConfig.babel.plugins,
      [
        'transform-react-remove-prop-types',
        {
          removeImport: true
        }
      ]
    ]
  }
}
