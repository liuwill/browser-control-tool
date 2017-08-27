var webpack = require('webpack')
var configPath = './webpack.config.js'
var config = require(configPath)

// config.plugins.unshift(
//   new webpack.LoaderOptionsPlugin({
//     minimize: true,
//     debug: false,
//     options: {
//       // postcss: getPostcssPlugin,
//       babel: {
//         presets: ['es2015'],
//         plugins: ['transform-runtime']
//       },
//       vue: {
//         autoprefixer: false,
//         preserveWhitespace: false
//         // postcss: getPostcssPlugin
//       }
//     }
//   })
// )

if (process.env.NODE_ENV === 'production') {
  config.plugins.unshift(new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
  }))
  config.plugins.unshift(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }))
  // config.plugins.unshift(new webpack.optimize.OccurenceOrderPlugin())
} else {
  module.exports.devtool = '#source-map'
}

// delete config.devtool;

module.exports = config
